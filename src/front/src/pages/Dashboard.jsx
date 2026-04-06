// Pacotes
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import {
  UploadCloud, FileText, CheckCircle, AlertCircle,
  Lightbulb, RefreshCw, Target, Download, Briefcase, Type, Zap, FileSearch
} from "lucide-react";
import "./Dashboard.css";

// Contas
const getATS = (n) => Math.max(0, n - 8);
const getFmt = (n) => Math.min(100, n + 12);
const getKw = (n) => Math.min(100, n + 5);
const getColor = (n) => n >= 75 ? "#00c896" : n >= 50 ? "#facc15" : "#ef4444";

function Dashboard() {
  // Dados
  const [file, setFile] = useState(null);
  const [analise, setAnalise] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Iniciando...");

  // Ações
  const handleFile = (f) => f && setFile(f);
  const handleChange = (e) => handleFile(e.target.files[0]);
  const handleDrop = (e) => { e.preventDefault(); setDragActive(false); handleFile(e.dataTransfer.files[0]); };
  const reset = () => { setAnalise(null); setFile(null); };
  const print = () => window.print();

  // Efeitos
  useEffect(() => {
    let int;
    if (loading) {
      const txt = ["Lendo...", "Avaliando...", "Comparando...", "Calculando...", "Finalizando..."];
      let i = 0;
      setLoadingText(txt[0]);
      int = setInterval(() => {
        i++;
        if (i < txt.length) setLoadingText(txt[i]);
      }, 2500);
    }
    return () => clearInterval(int);
  }, [loading]);

  // Busca
  const handleUpload = async () => {
    if (!file) return Swal.fire({ icon: "warning", title: "Opa", text: "Selecione um PDF.", background: "#0f172a", color: "#fff" });

    const user = JSON.parse(localStorage.getItem("user"));
    const fd = new FormData();
    fd.append("curriculo", file);
    if (user?._id) fd.append("userId", user._id);

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.analise) setAnalise(data.analise);
      else throw new Error("Erro");
    } catch {
      Swal.fire({ icon: "error", title: "Putz", text: "Falhou.", background: "#0f172a", color: "#fff", confirmButtonColor: "#3b82f6" });
    } finally {
      setLoading(false);
    }
  };

  // Tela
  return (
    <div className="dashboard-page">
      <div className="no-print"><Navbar /></div>
      <main className="dashboard-container">

        {/* Envio */}
        {!analise && !loading && (
          <div className="upload-box fade-in">
            <span className="badge">TALENTSCAN</span>
            <h1>Melhore seu currículo instantaneamente</h1>
            <p>Feedback prático sobre impacto, brevidade e estilo.</p>

            <div className={`upload-area ${dragActive ? "dragging" : ""}`} onDragOver={(e) => { e.preventDefault(); setDragActive(true); }} onDragLeave={() => setDragActive(false)} onDrop={handleDrop}>
              <div className="icon"><UploadCloud size={44} /></div>
              <p className="main-text">Arraste seu currículo aqui</p>
              <p className="sub-text">PDF ou DOCX</p>
              <input type="file" id="fileInput" accept=".pdf,.docx" onChange={handleChange} hidden />

              <div className="buttons-area">
                <button className="select-btn" onClick={() => document.getElementById("fileInput").click()}><FileText size={18} style={{ marginRight: 8, verticalAlign: "middle" }} /> Escolher</button>
                <button className="upload-btn" onClick={handleUpload}>Analisar</button>
              </div>
              <div className="file-area">{file && <p className="file-name">📄 {file.name}</p>}</div>
            </div>
          </div>
        )}

        {/* Espera */}
        {loading && (
          <div className="scanning-container fade-in">
            <div className="scanning-box">
              <div className="scanner-animation"><FileSearch size={64} className="scanner-icon" /><div className="scanner-line"></div></div>
              <h2 className="scanning-title">Analisando...</h2>
              <p className="scanning-text">{loadingText}</p>
              <div className="loading-bar-container"><div className="loading-bar-fill"></div></div>
            </div>
          </div>
        )}

        {/* Resultado */}
        {analise && !loading && (
          <div className="resultado-container fade-in" id="relatorio-pdf">

            {/* Topo */}
            <div className="resultado-header">
              <div><h2>Relatório</h2><p className="no-print">Revisão detalhada</p></div>
              <div className="action-buttons no-print">
                <button className="btn-outline" onClick={reset}><RefreshCw size={16} /> Refazer</button>
                <button className="btn-primary-small" onClick={print}><Download size={16} /> Baixar</button>
              </div>
            </div>

            {/* Nota */}
            <div className="overview-panel">
              <div className="main-score-box">
                <div className="score-circle" style={{ borderColor: getColor(analise.nota) }}><span className="number" style={{ color: getColor(analise.nota) }}>{analise.nota}</span><span className="total">/100</span></div>
                <h3>Geral</h3>
                <p>{analise.nota >= 75 ? "Otimizado" : "Revisar"}</p>
              </div>

              {/* Barras */}
              <div className="metrics-box">
                <h3>Detalhamento</h3>
                <div className="metric-item"><div className="metric-info"><span><Target size={16} /> ATS</span> <span>{getATS(analise.nota)}%</span></div><div className="progress-bar"><div className="fill blue" style={{ width: `${getATS(analise.nota)}%` }}></div></div></div>
                <div className="metric-item"><div className="metric-info"><span><Briefcase size={16} /> Impacto</span> <span>{getFmt(analise.nota)}%</span></div><div className="progress-bar"><div className="fill green" style={{ width: `${getFmt(analise.nota)}%` }}></div></div></div>
                <div className="metric-item"><div className="metric-info"><span><Type size={16} /> Palavras</span> <span>{getKw(analise.nota)}%</span></div><div className="progress-bar"><div className="fill orange" style={{ width: `${getKw(analise.nota)}%` }}></div></div></div>
              </div>
            </div>

            {/* Resumo */}
            <div className="quick-check-grid">
              <div className="check-card"><CheckCircle color="#00c896" size={18} /> <span>Gramática</span></div>
              <div className="check-card"><CheckCircle color="#00c896" size={18} /> <span>Tamanho</span></div>
              <div className="check-card"><Zap color={analise.nota > 70 ? "#00c896" : "#facc15"} size={18} /> <span>Verbos</span></div>
            </div>

            {/* Dicas */}
            <div className="feedback-grid">
              <div className="resultado-box border-green"><div className="box-header"><Briefcase size={22} className="icon-green" /> <h3>Fortes</h3></div><ul>{analise.pontosFortes?.map((i, k) => <li key={k}>{i}</li>) || <li>Nenhum.</li>}</ul></div>
              <div className="resultado-box border-red"><div className="box-header"><AlertCircle size={22} className="icon-red" /> <h3>Fracos</h3></div><ul>{analise.pontosFracos?.map((i, k) => <li key={k}>{i}</li>) || <li>Nenhum.</li>}</ul></div>
              <div className="resultado-box border-blue section-full-width"><div className="box-header"><Lightbulb size={22} className="icon-blue" /> <h3>Sugestões</h3></div><ul className="grid-list">{analise.sugestoes?.map((i, k) => <li key={k}>{i}</li>) || <li>Nenhuma.</li>}</ul></div>
            </div>
          </div>
        )}
      </main>
      <div className="no-print"><Footer /></div>
    </div>
  );
}

export default Dashboard;