const express = require("express");
const router = express.Router();

const upload = require("../upload");
const extrairTexto = require("../services/pdfService");
const analisarCurriculo = require("../services/iaService");
const Analise = require("../models/Analise");
const fs = require("fs");

router.post("/upload", upload.single("curriculo"), async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ erro: "Nenhum arquivo enviado" });
    }

    const userId = req.body?.userId;

    if (!userId) {
      return res.status(400).json({ erro: "userId não enviado" });
    }

    const caminho = req.file.path;

    const texto = await extrairTexto(caminho);

    const analiseIA = await analisarCurriculo(texto);

    const novaAnalise = await Analise.create({
      nomeArquivo: req.file.originalname,
      texto: texto,
      analise: analiseIA,
      userId: userId
    });

    fs.unlinkSync(caminho);

    return res.json({
      mensagem: "Análise salva com sucesso!",
      analise: novaAnalise
    });

  } catch (erro) {
    console.error("Erro na análise:", erro);

    if (req.file && req.file.path) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (e) {}
    }

    return res.status(500).json({ erro: "Erro na análise" });
  }
});



router.get("/analises/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const analises = await Analise.find({ userId }).sort({ data: -1 });

    return res.json(analises);

  } catch (erro) {
    console.error("Erro ao buscar análises:", erro);
    return res.status(500).json({ erro: "Erro ao buscar análises" });
  }
});

module.exports = router;