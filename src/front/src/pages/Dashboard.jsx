import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import "./Dashboard.css";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [analise, setAnalise] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      Swal.fire({
        icon: "warning",
        title: "Nenhum arquivo selecionado",
        text: "Selecione ou arraste um currículo",
        confirmButtonColor: "#3085d6"
      });
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    const formData = new FormData();
    formData.append("curriculo", file);
    formData.append("userId", user._id);

    try {
      Swal.fire({
        title: "Analisando...",
        text: "Processando currículo",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
      });

     const response = await fetch("http://localhost:3000/api/upload", {
  method: "POST",
  body: formData
});

const data = await response.json();

// 👇 COLOCA AQUI
console.log("RESPOSTA:", data);

Swal.close();

setAnalise(data.analise);

      Swal.fire({
        icon: "success",
        title: "Análise concluída!",
        confirmButtonColor: "#00c896"
      });

    } catch (error) {
      Swal.close();

      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Falha ao analisar currículo",
        confirmButtonColor: "#d33"
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <div className="upload-box">

          <span className="badge">IA AVANÇADA PARA CURRÍCULOS</span>

          <h1>Envie seu currículo</h1>
          <p>Receba uma análise completa em segundos</p>

          <div
            className={`upload-area ${dragActive ? "dragging" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
          >

            {/* ÍCONE SETA */}
            <div className="icon">
              ⬆
            </div>

            <p className="main-text">Arraste seu currículo aqui</p>
            <p className="sub-text">ou clique para selecionar</p>

            <input
              type="file"
              id="fileInput"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              hidden
            />

            {/* BOTÕES AGRUPADOS */}
            <div className="buttons-area">

              <button
                className="select-btn"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Selecionar arquivo
              </button>

              <button className="upload-btn" onClick={handleUpload}>
                Enviar currículo
              </button>

            </div>

            {/*  ÁREA FIXA DO NOME DO ARQUIVO */}
            <div className="file-area">
              {file ? (
                <p className="file-name">{file.name}</p>
              ) : (
                <p className="file-placeholder">Nenhum arquivo selecionado</p>
              )}
            </div>

            <p className="info">
              Formatos aceitos: PDF e DOCX • Máx 10MB
            </p>

          </div>
        </div>
      </div>

      {/* RESULTADO */}
   {analise && (
  <div className="resultado-container">

    <h2>Resultado da Análise</h2>

    <div className="nota">
      Nota: {analise?.nota ?? 0}
    </div>

    <div className="resultado-box">
      <h3>Pontos Fortes</h3>
      <ul>
        {analise?.pontosFortes?.length > 0 ? (
          analise.pontosFortes.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        ) : (
          <li>Nenhum ponto forte encontrado</li>
        )}
      </ul>
    </div>

    <div className="resultado-box">
      <h3>Pontos Fracos</h3>
      <ul>
        {analise?.pontosFracos?.length > 0 ? (
          analise.pontosFracos.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        ) : (
          <li>Nenhum ponto fraco encontrado</li>
        )}
      </ul>
    </div>

    <div className="resultado-box">
      <h3>Sugestões</h3>
      <ul>
        {analise?.sugestoes?.length > 0 ? (
          analise.sugestoes.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        ) : (
          <li>Nenhuma sugestão disponível</li>
        )}
      </ul>
    </div>

  </div>
)}
      <Footer />
    </>

  );
}

export default Dashboard;