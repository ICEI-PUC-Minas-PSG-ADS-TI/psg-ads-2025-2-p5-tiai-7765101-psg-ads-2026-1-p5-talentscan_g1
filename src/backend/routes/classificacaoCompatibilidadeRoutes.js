const express = require("express");
const fs = require("fs");
const router = express.Router();

const upload = require("../upload");
const extrairTexto = require("../services/pdfService");
const {
  classificarCurriculo,
  gerarVaga,
  analisarCompatibilidade
} = require("../services/iaService");
const Analise = require("../models/Analise");
const ClassificacaoCurriculo = require("../models/ClassificacaoCurriculo");
const VagaGerada = require("../models/VagaGerada");
const CompatibilidadeVaga = require("../models/CompatibilidadeVaga");

router.post("/classificacao/analisar", upload.single("curriculo"), async (req, res) => {
  try {
    const { userId, curriculoId } = req.body;

    if (!userId) {
      return res.status(400).json({ erro: "userId nao enviado" });
    }

    let analise = null;
    let texto = "";
    let nomeArquivo = req.file?.originalname || "Curriculo";

    if (curriculoId) {
      analise = await Analise.findOne({ _id: curriculoId, userId });

      if (!analise) {
        return res.status(404).json({ erro: "Curriculo não encontrado no historico" });
      }

      texto = analise.texto;
      nomeArquivo = analise.nomeArquivo;
    } else if (req.file) {
      texto = await extrairTexto(req.file.path);
    } else {
      return res.status(400).json({ erro: "Selecione um curriculo do historico ou envie um arquivo" });
    }

    const classificacaoIA = await classificarCurriculo(texto);

    if (!analise && req.file) {
      analise = await Analise.create({
        nomeArquivo,
        texto,
        userId,
        analise: {
          nota: classificacaoIA.pontuacaoGeral || 0,
          pontosFortes: classificacaoIA.pontosFortes || [],
          pontosFracos: classificacaoIA.pontosFracos || [],
          sugestoes: classificacaoIA.sugestoesMelhoria || []
        }
      });
    }

    const classificacao = await ClassificacaoCurriculo.create({
      userId,
      curriculoId: analise?._id,
      nomeArquivo,
      ...classificacaoIA
    });

    if (req.file?.path) {
      fs.unlinkSync(req.file.path);
    }

    return res.json({ mensagem: "Classificação salva com sucesso!", classificacao });
  } catch (erro) {
    console.error("Erro ao classificar curriculo:", erro);

    if (req.file?.path) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (e) {}
    }

    return res.status(500).json({ erro: "Erro ao classificar curriculo" });
  }
});

router.get("/classificacao/historico/:userId", async (req, res) => {
  try {
    const classificacoes = await ClassificacaoCurriculo.find({ userId: req.params.userId })
      .sort({ dataCriacao: -1 });

    return res.json(classificacoes);
  } catch (erro) {
    console.error("Erro ao buscar historico de classificações:", erro);
    return res.status(500).json({ erro: "Erro ao buscar historico de classificações" });
  }
});

router.post("/vagas/gerar", async (req, res) => {
  try {
    const { userId, area, nivel } = req.body;

    if (!userId || !area || !nivel) {
      return res.status(400).json({ erro: "userId, area e nivel sao obrigatorios" });
    }

    const vagaIA = await gerarVaga(area, nivel);
    const vaga = await VagaGerada.create({
      userId,
      area,
      nivel,
      titulo: vagaIA.titulo,
      descricao: vagaIA.descricao,
      responsabilidades: vagaIA.responsabilidades || [],
      requisitosObrigatorios: vagaIA.requisitosObrigatorios || [],
      requisitosDesejaveis: vagaIA.requisitosDesejaveis || [],
      tecnologias: vagaIA.tecnologias || [],
      softSkills: vagaIA.softSkills || []
    });

    return res.json({ mensagem: "Vaga gerada com sucesso!", vaga });
  } catch (erro) {
    console.error("Erro ao gerar vaga:", erro);
    return res.status(500).json({ erro: "Erro ao gerar vaga" });
  }
});

router.post("/compatibilidade/analisar", async (req, res) => {
  try {
    const { userId, classificacaoId, vagaId, vagaPersonalizada } = req.body;

    if (!userId || !classificacaoId) {
      return res.status(400).json({ erro: "userId e classificacaoId são obrigatorios" });
    }

    const classificacao = await ClassificacaoCurriculo.findOne({ _id: classificacaoId, userId });

    if (!classificacao) {
      return res.status(404).json({ erro: "Classificação não encontrada" });
    }

    let vaga = null;
    let dadosVaga = vagaPersonalizada;

    if (vagaId) {
      vaga = await VagaGerada.findOne({ _id: vagaId, userId });

      if (!vaga) {
        return res.status(404).json({ erro: "Vaga gerada não encontrada" });
      }

      dadosVaga = vaga.toObject();
    }

    if (!dadosVaga) {
      return res.status(400).json({ erro: "Informe uma vaga gerada ou uma vaga personalizada" });
    }

    const compatibilidadeIA = await analisarCompatibilidade(classificacao.toObject(), dadosVaga);
    const compatibilidade = await CompatibilidadeVaga.create({
      userId,
      classificacaoId,
      vagaId: vaga?._id,
      vagaPersonalizada: vaga ? undefined : vagaPersonalizada,
      ...compatibilidadeIA
    });

    return res.json({ mensagem: "Compatibilidade analisada com sucesso!", compatibilidade });
  } catch (erro) {
    console.error("Erro ao analisar compatibilidade:", erro);
    return res.status(500).json({ erro: "Erro ao analisar compatibilidade" });
  }
});

router.get("/compatibilidade/historico/:userId", async (req, res) => {
  try {
    const compatibilidades = await CompatibilidadeVaga.find({ userId: req.params.userId })
      .sort({ dataCriacao: -1 });

    return res.json(compatibilidades);
  } catch (erro) {
    console.error("Erro ao buscar historico de compatibilidade:", erro);
    return res.status(500).json({ erro: "Erro ao buscar historico de compatibilidade" });
  }
});

module.exports = router;
