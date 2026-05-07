import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import {
  AlertCircle,
  BarChart3,
  Briefcase,
  CheckCircle,
  FileText,
  Lightbulb,
  Loader2,
  SearchCheck,
  Sparkles,
  Target,
  UploadCloud
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  analisarClassificacao,
  analisarCompatibilidade,
  buscarClassificacoes,
  buscarCurriculos,
  gerarVaga
} from "../services/compatibilidadeService";
import "./ClassificacaoCompatibilidade.css";

const areas = [
  "Desenvolvimento Front-end",
  "Desenvolvimento Back-end",
  "Desenvolvimento Full Stack",
  "Analise de Dados",
  "Ciencia de Dados",
  "UX/UI Design",
  "Suporte Tecnico",
  "Infraestrutura",
  "Seguranca da Informacao",
  "Gestao de Projetos",
  "Recursos Humanos",
  "Administracao",
  "Marketing",
  "Vendas"
];

const niveis = ["Estagio", "Junior", "Pleno", "Senior"];

function Lista({ itens }) {
  if (!itens?.length) {
    return <p className="cc-empty">Nenhum item identificado.</p>;
  }

  return (
    <ul className="cc-list">
      {itens.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

function CardLista({ titulo, icon, itens, tipo = "blue" }) {
  const Icone = icon;

  return (
    <section className={`cc-card cc-card-${tipo}`}>
      <div className="cc-card-header">
        <Icone size={20} />
        <h3>{titulo}</h3>
      </div>
      <Lista itens={itens} />
    </section>
  );
}

function ClassificacaoCompatibilidade() {
  const [curriculos, setCurriculos] = useState([]);
  const [classificacoes, setClassificacoes] = useState([]);
  const [curriculoId, setCurriculoId] = useState("");
  const [arquivo, setArquivo] = useState(null);
  const [classificacao, setClassificacao] = useState(null);
  const [vaga, setVaga] = useState(null);
  const [compatibilidade, setCompatibilidade] = useState(null);
  const [modoVaga, setModoVaga] = useState("gerada");
  const [loadingClassificacao, setLoadingClassificacao] = useState(false);
  const [loadingVaga, setLoadingVaga] = useState(false);
  const [loadingCompatibilidade, setLoadingCompatibilidade] = useState(false);
  const [vagaGeradaForm, setVagaGeradaForm] = useState({
    area: "Desenvolvimento Front-end",
    nivel: "Junior"
  });
  const [vagaPersonalizada, setVagaPersonalizada] = useState({
    titulo: "",
    descricao: "",
    requisitos: "",
    responsabilidades: "",
    tecnologias: "",
    nivel: ""
  });

  const user = useMemo(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  }, []);

  useEffect(() => {
    async function carregarDados() {
      if (!user?._id) return;

      try {
        const [historicoCurriculos, historicoClassificacoes] = await Promise.all([
          buscarCurriculos(user._id),
          buscarClassificacoes(user._id)
        ]);

        setCurriculos(Array.isArray(historicoCurriculos) ? historicoCurriculos : []);
        setClassificacoes(Array.isArray(historicoClassificacoes) ? historicoClassificacoes : []);
      } catch (erro) {
        console.error(erro);
      }
    }

    carregarDados();
  }, [user?._id]);

  const pontuacao = classificacao?.pontuacaoGeral || 0;
  const porcentagem = compatibilidade?.porcentagemCompatibilidade || 0;
  const nivelMatch = porcentagem >= 75 ? "alto" : porcentagem >= 50 ? "medio" : "baixo";

  async function handleClassificar() {
    if (!user?._id) {
      return Swal.fire("Login necessario", "Entre na sua conta para salvar o historico.", "warning");
    }

    if (!curriculoId && !arquivo) {
      return Swal.fire("Curriculo obrigatorio", "Selecione um curriculo do historico ou envie um arquivo.", "warning");
    }

    const formData = new FormData();
    formData.append("userId", user._id);
    if (curriculoId) formData.append("curriculoId", curriculoId);
    if (arquivo) formData.append("curriculo", arquivo);

    try {
      setLoadingClassificacao(true);
      setCompatibilidade(null);

      const data = await analisarClassificacao(formData);
      if (data.erro) throw new Error(data.erro);

      setClassificacao(data.classificacao);

      const historico = await buscarClassificacoes(user._id);
      setClassificacoes(Array.isArray(historico) ? historico : []);
    } catch (erro) {
      Swal.fire("Erro", erro.message || "Nao foi possivel classificar o curriculo.", "error");
    } finally {
      setLoadingClassificacao(false);
    }
  }

  async function handleGerarVaga() {
    if (!user?._id) {
      return Swal.fire("Login necessario", "Entre na sua conta para gerar vagas.", "warning");
    }

    try {
      setLoadingVaga(true);
      const data = await gerarVaga({
        userId: user._id,
        area: vagaGeradaForm.area,
        nivel: vagaGeradaForm.nivel
      });

      if (data.erro) throw new Error(data.erro);

      setVaga(data.vaga);
      setModoVaga("gerada");
    } catch (erro) {
      Swal.fire("Erro", erro.message || "Nao foi possivel gerar a vaga.", "error");
    } finally {
      setLoadingVaga(false);
    }
  }

  async function handleCompatibilidade() {
    if (!user?._id) {
      return Swal.fire("Login necessario", "Entre na sua conta para salvar a analise.", "warning");
    }

    if (!classificacao?._id) {
      return Swal.fire("Classificacao obrigatoria", "Analise o curriculo antes de comparar com a vaga.", "warning");
    }

    if (modoVaga === "gerada" && !vaga?._id) {
      return Swal.fire("Vaga obrigatoria", "Gere uma vaga ou use a opcao de vaga personalizada.", "warning");
    }

    if (modoVaga === "personalizada" && !vagaPersonalizada.descricao.trim()) {
      return Swal.fire("Vaga obrigatoria", "Cole a descricao completa da vaga personalizada.", "warning");
    }

    try {
      setLoadingCompatibilidade(true);
      const data = await analisarCompatibilidade({
        userId: user._id,
        classificacaoId: classificacao._id,
        vagaId: modoVaga === "gerada" ? vaga?._id : undefined,
        vagaPersonalizada: modoVaga === "personalizada" ? vagaPersonalizada : undefined
      });

      if (data.erro) throw new Error(data.erro);

      setCompatibilidade(data.compatibilidade);
    } catch (erro) {
      Swal.fire("Erro", erro.message || "Nao foi possivel analisar a compatibilidade.", "error");
    } finally {
      setLoadingCompatibilidade(false);
    }
  }

  return (
    <div className="cc-page">
      <Navbar />

      <main className="cc-container">
        <header className="cc-title">
          <span>TalentScan IA</span>
          <h1>Classificacao e Compatibilidade</h1>
          <p>Classifique o perfil profissional do candidato e use essa analise como base para comparar o curriculo com uma vaga.</p>
        </header>

        <section className="cc-layout">
          <div className="cc-panel">
            <div className="cc-panel-title">
              <FileText size={22} />
              <div>
                <h2>Curriculo</h2>
                <p>Selecione do historico ou envie um novo PDF/DOCX.</p>
              </div>
            </div>

            <label>Curriculo do historico</label>
            <select value={curriculoId} onChange={(e) => { setCurriculoId(e.target.value); setArquivo(null); }}>
              <option value="">Selecionar curriculo</option>
              {curriculos.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.nomeArquivo} - {item.analise?.nota || 0}/100
                </option>
              ))}
            </select>

            <label>Novo curriculo</label>
            <div className="cc-file">
              <UploadCloud size={20} />
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => {
                  setArquivo(e.target.files[0]);
                  setCurriculoId("");
                }}
              />
            </div>

            {arquivo && <small className="cc-muted">{arquivo.name}</small>}

            <button className="cc-btn cc-btn-primary" onClick={handleClassificar} disabled={loadingClassificacao}>
              {loadingClassificacao ? <Loader2 className="cc-spin" size={18} /> : <SearchCheck size={18} />}
              Analisar classificacao
            </button>
          </div>

          <div className="cc-panel">
            <div className="cc-panel-title">
              <BarChart3 size={22} />
              <div>
                <h2>Historico</h2>
                <p>Classificações salvas por usuario.</p>
              </div>
            </div>

            <div className="cc-history">
              {classificacoes.length === 0 && <p className="cc-empty">Nenhuma classificação encontrada.</p>}
              {classificacoes.slice(0, 5).map((item) => (
                <button key={item._id} onClick={() => setClassificacao(item)}>
                  <strong>{item.areaPrincipal}</strong>
                  <span>{item.nomeArquivo || "Curriculo"}</span>
                  <small>{item.pontuacaoGeral}/100</small>
                </button>
              ))}
            </div>
          </div>
        </section>

        {classificacao && (
          <section className="cc-panel cc-result">
            <div className="cc-result-head">
              <div>
                <span>Resultado da classificação</span>
                <h2>{classificacao.areaPrincipal}</h2>
                <p>{classificacao.resumoProfissional}</p>
              </div>
              <div className="cc-score">
                <strong>{pontuacao}</strong>
                <small>/100</small>
              </div>
            </div>

            <div className="cc-summary">
              <div><span>Nível</span><strong>{classificacao.nivelProfissional}</strong></div>
              <div><span>Arquivo</span><strong>{classificacao.nomeArquivo || "Curriculum"}</strong></div>
              <div><span>Base da comparação</span><strong>Classificação salva</strong></div>
            </div>

            <div className="cc-grid">
              <CardLista titulo="Tecnologias principais" icon={Sparkles} itens={classificacao.tecnologiasPrincipais} />
              <CardLista titulo="Hard skills" icon={Target} itens={classificacao.hardSkills} tipo="green" />
              <CardLista titulo="Soft skills" icon={CheckCircle} itens={classificacao.softSkills} tipo="yellow" />
              <CardLista titulo="Pontos fortes" icon={Briefcase} itens={classificacao.pontosFortes} tipo="green" />
              <CardLista titulo="Pontos fracos" icon={AlertCircle} itens={classificacao.pontosFracos} tipo="red" />
              <CardLista titulo="Sugestoes de melhoria" icon={Lightbulb} itens={classificacao.sugestoesMelhoria} />
            </div>
          </section>
        )}

        <section className="cc-panel">
          <div className="cc-panel-title">
            <Briefcase size={22} />
            <div>
              <h2>Vaga</h2>
              <p>Gere uma vaga com IA ou cole uma vaga real.</p>
            </div>
          </div>

          <div className="cc-tabs">
            <button className={modoVaga === "gerada" ? "active" : ""} onClick={() => setModoVaga("gerada")}>Gerar vaga</button>
            <button className={modoVaga === "personalizada" ? "active" : ""} onClick={() => setModoVaga("personalizada")}>Vaga real</button>
          </div>

          {modoVaga === "gerada" ? (
            <>
              <div className="cc-form-grid">
                <div>
                  <label>Area desejada</label>
                  <select value={vagaGeradaForm.area} onChange={(e) => setVagaGeradaForm({ ...vagaGeradaForm, area: e.target.value })}>
                    {areas.map((area) => <option key={area}>{area}</option>)}
                  </select>
                </div>
                <div>
                  <label>Nível desejado</label>
                  <select value={vagaGeradaForm.nivel} onChange={(e) => setVagaGeradaForm({ ...vagaGeradaForm, nivel: e.target.value })}>
                    {niveis.map((nivel) => <option key={nivel}>{nivel}</option>)}
                  </select>
                </div>
              </div>
              <button className="cc-btn cc-btn-secondary" onClick={handleGerarVaga} disabled={loadingVaga}>
                {loadingVaga ? <Loader2 className="cc-spin" size={18} /> : <Sparkles size={18} />}
                Gerar vaga com IA
              </button>

              {vaga && (
                <div className="cc-job">
                  <h3>{vaga.titulo}</h3>
                  <p>{vaga.descricao}</p>
                  <div className="cc-grid">
                    <CardLista titulo="Responsabilidades" icon={Briefcase} itens={vaga.responsabilidades} />
                    <CardLista titulo="Requisitos obrigatorios" icon={Target} itens={vaga.requisitosObrigatorios} tipo="green" />
                    <CardLista titulo="Requisitos desejaveis" icon={Lightbulb} itens={vaga.requisitosDesejaveis} tipo="yellow" />
                    <CardLista titulo="Tecnologias" icon={Sparkles} itens={vaga.tecnologias} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="cc-custom">
              <input placeholder="Titulo da vaga" value={vagaPersonalizada.titulo} onChange={(e) => setVagaPersonalizada({ ...vagaPersonalizada, titulo: e.target.value })} />
              <textarea placeholder="Descricao completa da vaga" rows="6" value={vagaPersonalizada.descricao} onChange={(e) => setVagaPersonalizada({ ...vagaPersonalizada, descricao: e.target.value })} />
              <div className="cc-form-grid">
                <textarea placeholder="Requisitos" rows="4" value={vagaPersonalizada.requisitos} onChange={(e) => setVagaPersonalizada({ ...vagaPersonalizada, requisitos: e.target.value })} />
                <textarea placeholder="Responsabilidades" rows="4" value={vagaPersonalizada.responsabilidades} onChange={(e) => setVagaPersonalizada({ ...vagaPersonalizada, responsabilidades: e.target.value })} />
                <textarea placeholder="Tecnologias" rows="4" value={vagaPersonalizada.tecnologias} onChange={(e) => setVagaPersonalizada({ ...vagaPersonalizada, tecnologias: e.target.value })} />
                <input placeholder="Nível da vaga" value={vagaPersonalizada.nivel} onChange={(e) => setVagaPersonalizada({ ...vagaPersonalizada, nivel: e.target.value })} />
              </div>
            </div>
          )}

          <button className="cc-btn cc-btn-primary" onClick={handleCompatibilidade} disabled={loadingCompatibilidade}>
            {loadingCompatibilidade ? <Loader2 className="cc-spin" size={18} /> : <Target size={18} />}
            Analisar compatibilidade
          </button>
        </section>

        {compatibilidade && (
          <section className="cc-panel cc-result">
            <div className="cc-result-head">
              <div>
                <span>Resultado da compatibilidade</span>
                <h2>Compatibilidade curriculo x vaga</h2>
                <p>{compatibilidade.justificativaNota}</p>
              </div>
              <div className={`cc-match cc-match-${nivelMatch}`}>
                <strong>{porcentagem}%</strong>
              </div>
            </div>

            <div className="cc-progress">
              <div style={{ width: `${porcentagem}%` }} />
            </div>

            <div className="cc-grid">
              <CardLista titulo="Pontos compativeis" icon={CheckCircle} itens={compatibilidade.pontosCompativeis} tipo="green" />
              <CardLista titulo="Pontos ausentes" icon={AlertCircle} itens={compatibilidade.pontosAusentes} tipo="red" />
              <CardLista titulo="Parcialmente compativeis" icon={Target} itens={compatibilidade.pontosParcialmenteCompativeis} tipo="yellow" />
              <section className="cc-card cc-wide">
                <div className="cc-card-header">
                  <Briefcase size={20} />
                  <h3>Recomendacao final</h3>
                </div>
                <p>{compatibilidade.recomendacaoFinal}</p>
              </section>
              <CardLista titulo="Sugestoes para o curriculo" icon={Lightbulb} itens={compatibilidade.sugestoesMelhoria} />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ClassificacaoCompatibilidade;
