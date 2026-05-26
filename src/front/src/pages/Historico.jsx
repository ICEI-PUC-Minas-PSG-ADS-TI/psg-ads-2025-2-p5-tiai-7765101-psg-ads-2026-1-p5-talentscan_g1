import { useMemo, useState } from "react";
import "./HistoricoAnalises.css";

export default function HistoricoAnalises() {
  const [analises, setAnalises] = useState([
    {
      id: 1,
      data: "06/04/2026",
      arquivo: "curriculo_andre_v3.pdf",
      tipo: "Júnior",
      area: "Tecnologia",
      pontuacao: 92,
      status: "Completo",
      favorito: true,
      resumo:
        "Currículo muito bem estruturado. Sugestão: incluir mais projetos práticos e detalhar experiências.",
    },
    {
      id: 2,
      data: "05/04/2026",
      arquivo: "curriculo_andre_v2.pdf",
      tipo: "Estágio",
      area: "Tecnologia",
      pontuacao: 85,
      status: "Completo",
      favorito: false,
      resumo:
        "Bom currículo, mas falta clareza em objetivos e maior uso de palavras-chave relacionadas à vaga.",
    },
    {
      id: 3,
      data: "30/03/2026",
      arquivo: "curriculo_andre_v1.pdf",
      tipo: "Estágio",
      area: "Administração",
      pontuacao: 78,
      status: "Completo",
      favorito: false,
      resumo:
        "Estrutura aceitável. Sugestão: melhorar formatação e adicionar competências técnicas e cursos extras.",
    },
    {
      id: 4,
      data: "20/03/2026",
      arquivo: "curriculo_teste.pdf",
      tipo: "Júnior",
      area: "Marketing",
      pontuacao: 70,
      status: "Em processamento",
      favorito: false,
      resumo:
        "Análise ainda em processamento. Aguarde para visualizar recomendações detalhadas.",
    },
    {
      id: 5,
      data: "10/03/2026",
      arquivo: "curriculo_incompleto.docx",
      tipo: "Estágio",
      area: "Tecnologia",
      pontuacao: 62,
      status: "Erro",
      favorito: false,
      resumo:
        "Erro na análise. Possível arquivo corrompido ou com formato inválido. Reenvie em PDF.",
    },
  ]);

  const [mostrarSomenteFavoritos, setMostrarSomenteFavoritos] = useState(false);
  const [ordenacao, setOrdenacao] = useState("maisRecentes");

  const [modalDetalhes, setModalDetalhes] = useState(false);
  const [analiseSelecionada, setAnaliseSelecionada] = useState(null);

  const [modalRenomear, setModalRenomear] = useState(false);
  const [novoNome, setNovoNome] = useState("");

  function parseDataBR(dataStr) {
    const [dia, mes, ano] = dataStr.split("/");
    return new Date(`${ano}-${mes}-${dia}`);
  }

  function calcularMelhoria(index, listaOrdenadaPorData) {
    if (index === listaOrdenadaPorData.length - 1) return "neutro";

    const atual = listaOrdenadaPorData[index].pontuacao;
    const anterior = listaOrdenadaPorData[index + 1].pontuacao;

    if (atual > anterior) return "subiu";
    if (atual < anterior) return "desceu";
    return "neutro";
  }

  const listaFinal = useMemo(() => {
    let lista = [...analises];

    if (mostrarSomenteFavoritos) {
      lista = lista.filter((a) => a.favorito);
    }

    if (ordenacao === "maisRecentes") {
      lista.sort((a, b) => parseDataBR(b.data) - parseDataBR(a.data));
    }

    if (ordenacao === "maisAntigas") {
      lista.sort((a, b) => parseDataBR(a.data) - parseDataBR(b.data));
    }

    if (ordenacao === "maiorPontuacao") {
      lista.sort((a, b) => b.pontuacao - a.pontuacao);
    }

    if (ordenacao === "menorPontuacao") {
      lista.sort((a, b) => a.pontuacao - b.pontuacao);
    }

    return lista;
  }, [analises, mostrarSomenteFavoritos, ordenacao]);

  const listaPorData = useMemo(() => {
    let lista = [...analises];
    lista.sort((a, b) => parseDataBR(b.data) - parseDataBR(a.data));
    return lista;
  }, [analises]);

  function alternarFavorito(id) {
    setAnalises((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, favorito: !a.favorito } : a
      )
    );
  }

  function abrirDetalhes(analise) {
    setAnaliseSelecionada(analise);
    setModalDetalhes(true);
  }

  function abrirRenomear(analise) {
    setAnaliseSelecionada(analise);
    setNovoNome(analise.arquivo);
    setModalRenomear(true);
  }

  function salvarNovoNome() {
    setAnalises((prev) =>
      prev.map((a) =>
        a.id === analiseSelecionada.id ? { ...a, arquivo: novoNome } : a
      )
    );

    setModalRenomear(false);
    setAnaliseSelecionada(null);
  }

  function excluirAnalise(id) {
    const confirmacao = window.confirm("Tem certeza que deseja excluir essa análise?");
    if (!confirmacao) return;

    setAnalises((prev) => prev.filter((a) => a.id !== id));
  }

  return (
    <div className="page-container">
      {/* HEADER */}
      <header className="header">
        <div className="logo">TalentScan</div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Dashboard</a>
          <a href="#" className="active">Histórico</a>
          <a href="#">Perfil</a>
        </nav>

        <button className="btn-logout">Sair</button>
      </header>

      {/* MAIN */}
      <main className="main">
        <div className="page-title">
          <div>
            <h1>📌 Histórico de Análises</h1>
            <p>
              Acompanhe suas análises anteriores, veja sua evolução e revise relatórios antigos.
            </p>
          </div>

          <div className="actions-top">
            <button className="btn btn-primary">➕ Nova Análise</button>

            <button className="btn btn-outline">
              📥 Exportar Histórico
            </button>

            <button
              className="btn btn-outline"
              onClick={() => setMostrarSomenteFavoritos(!mostrarSomenteFavoritos)}
            >
              ⭐ {mostrarSomenteFavoritos ? "Mostrar Todos" : "Mostrar Favoritos"}
            </button>

            <button className="btn btn-danger">🧹 Limpar Histórico</button>
          </div>
        </div>

        {/* ORDENAÇÃO */}
        <section className="card">
          <h2>📌 Ordenação</h2>
          <small>Organize as análises como preferir.</small>

          <div className="order-area">
            <label>Ordenar por:</label>
            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value)}
            >
              <option value="maisRecentes">Mais recentes</option>
              <option value="maisAntigas">Mais antigas</option>
              <option value="maiorPontuacao">Maior pontuação</option>
              <option value="menorPontuacao">Menor pontuação</option>
            </select>
          </div>
        </section>

        {/* TABLE CARD */}
        <section className="card">
          <div className="table-header">
            <div>
              <h2>📄 Lista de Análises</h2>
              <small>
                Clique em "Detalhes" para visualizar um resumo rápido.
              </small>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Arquivo</th>
                <th>Tipo</th>
                <th>Área</th>
                <th>Pontuação</th>
                <th>Melhoria</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {listaFinal.map((analise) => {
                const indexData = listaPorData.findIndex((a) => a.id === analise.id);
                const melhoria = calcularMelhoria(indexData, listaPorData);

                return (
                  <tr key={analise.id}>
                    <td>{analise.data}</td>

                    <td>
                      {analise.arquivo}{" "}
                      {analise.favorito && <span className="favorito-tag">⭐</span>}
                    </td>

                    <td>{analise.tipo}</td>
                    <td>{analise.area}</td>

                    <td className="score">{analise.pontuacao}/100</td>

                    <td>
                      {melhoria === "subiu" && <span className="melhoria up">↑ Melhorou</span>}
                      {melhoria === "desceu" && <span className="melhoria down">↓ Piorou</span>}
                      {melhoria === "neutro" && <span className="melhoria neutral">— Igual</span>}
                    </td>

                    <td>
                      <span
                        className={`status ${
                          analise.status === "Completo"
                            ? "complete"
                            : analise.status === "Em processamento"
                            ? "processing"
                            : "error"
                        }`}
                      >
                        {analise.status}
                      </span>
                    </td>

                    <td>
                      <div className="row-actions">
                        <button
                          className="btn-mini primary"
                          onClick={() => abrirDetalhes(analise)}
                        >
                          👁️ Detalhes
                        </button>

                        <button className="btn-mini">📄 Relatório</button>
                        <button className="btn-mini">⬇️ PDF</button>

                        <button className="btn-mini">🔁 Reanalisar</button>

                        <button
                          className="btn-mini star"
                          onClick={() => alternarFavorito(analise.id)}
                        >
                          ⭐ Favoritar
                        </button>

                        <button
                          className="btn-mini"
                          onClick={() => abrirRenomear(analise)}
                        >
                          ✏️ Renomear
                        </button>

                        <button
                          className="btn-mini danger"
                          onClick={() => excluirAnalise(analise.id)}
                        >
                          🗑️ Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {listaFinal.length === 0 && (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center", padding: "20px" }}>
                    Nenhuma análise encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 TalentScan - Sistema de análise inteligente de currículos.
          <br /><br />
          <a href="#">Política de Privacidade</a> | <a href="#">Termos de Uso</a> |{" "}
          <a href="#">Suporte</a> | <a href="#">Contato</a>
        </p>
      </footer>

      {/* MODAL DETALHES */}
      {modalDetalhes && analiseSelecionada && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>📌 Detalhes Rápidos</h2>
            <p><strong>Arquivo:</strong> {analiseSelecionada.arquivo}</p>
            <p><strong>Data:</strong> {analiseSelecionada.data}</p>
            <p><strong>Pontuação:</strong> {analiseSelecionada.pontuacao}/100</p>
            <p><strong>Status:</strong> {analiseSelecionada.status}</p>

            <div className="modal-resumo">
              <strong>Resumo da IA:</strong>
              <p>{analiseSelecionada.resumo}</p>
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-outline"
                onClick={() => setModalDetalhes(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL RENOMEAR */}
      {modalRenomear && analiseSelecionada && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>✏️ Renomear Análise</h2>
            <p>Digite um novo nome para o arquivo:</p>

            <input
              className="modal-input"
              type="text"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
            />

            <div className="modal-actions">
              <button
                className="btn btn-outline"
                onClick={() => setModalRenomear(false)}
              >
                Cancelar
              </button>

              <button className="btn btn-primary" onClick={salvarNovoNome}>
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
