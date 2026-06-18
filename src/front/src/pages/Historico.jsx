import { useState, useMemo } from "react";
import "./Historico.css";

function Historico() {
  // Estado para dados de análises
  const [analyses, setAnalyses] = useState([
    {
      id: 1,
      date: "06/04/2026",
      filename: "curriculo_andre_v3.pdf",
      type: "Júnior",
      area: "Tecnologia",
      score: 92,
      status: "complete",
    },
    {
      id: 2,
      date: "05/04/2026",
      filename: "curriculo_andre_v2.pdf",
      type: "Estágio",
      area: "Tecnologia",
      score: 85,
      status: "complete",
    },
    {
      id: 3,
      date: "30/03/2026",
      filename: "curriculo_andre_v1.pdf",
      type: "Estágio",
      area: "Administração",
      score: 78,
      status: "complete",
    },
    {
      id: 4,
      date: "20/03/2026",
      filename: "curriculo_teste.pdf",
      type: "Júnior",
      area: "Marketing",
      score: 70,
      status: "processing",
    },
    {
      id: 5,
      date: "10/03/2026",
      filename: "curriculo_incompleto.docx",
      type: "Estágio",
      area: "Tecnologia",
      score: 62,
      status: "error",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("Todas");
  const [scoreFilter, setScoreFilter] = useState("Todas");
  const [typeFilter, setTypeFilter] = useState("Todos");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const sortedAnalyses = useMemo(() => {
    return [...analyses].sort((a, b) => {
      const dateA = new Date(a.date.split("/").reverse().join("-"));
      const dateB = new Date(b.date.split("/").reverse().join("-"));
      return dateB - dateA;
    });
  }, [analyses]);

  const filteredAnalyses = useMemo(() => {
    return sortedAnalyses.filter((analysis) => {
      if (
        searchTerm &&
        !analysis.filename.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !analysis.area.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      if (dateFilter !== "Todas") {
        const analysisDate = new Date(analysis.date.split("/").reverse().join("-"));
        const today = new Date();
        let startDate = new Date();

        if (dateFilter === "Hoje") {
          startDate.setHours(0, 0, 0, 0);
        } else if (dateFilter === "Últimos 7 dias") {
          startDate.setDate(today.getDate() - 7);
        } else if (dateFilter === "Últimos 30 dias") {
          startDate.setDate(today.getDate() - 30);
        }

        if (analysisDate < startDate) return false;
      }

      if (scoreFilter !== "Todas") {
        const score = analysis.score;
        const ranges = {
          "0 a 50": [0, 50],
          "51 a 70": [51, 70],
          "71 a 90": [71, 90],
          "91 a 100": [91, 100],
        };
        const [min, max] = ranges[scoreFilter];
        if (score < min || score > max) return false;
      }

      if (typeFilter !== "Todos" && analysis.type !== typeFilter) {
        return false;
      }

      // Filtro de status
      if (statusFilter !== "Todos") {
        const statusMap = {
          Completo: "complete",
          "Em processamento": "processing",
          Erro: "error",
        };
        if (analysis.status !== statusMap[statusFilter]) return false;
      }

      return true;
    });
  }, [sortedAnalyses, searchTerm, dateFilter, scoreFilter, typeFilter, statusFilter]);

  const evolutionData = useMemo(() => {
    if (filteredAnalyses.length === 0) {
      return {
        points: [],
        stats: {
          currentScore: 0,
          previousScore: 0,
          improvement: 0,
          improvementPercent: 0,
          averageScore: 0,
          maxScore: 0,
          minScore: 0,
          totalAnalyses: 0,
          trend: "stable",
        },
      };
    }

    const scores = filteredAnalyses.map((a) => a.score);
    const currentScore = scores[0];
    const previousScore = scores.length > 1 ? scores[1] : currentScore;
    const improvement = currentScore - previousScore;
    const improvementPercent =
      previousScore > 0 ? ((improvement / previousScore) * 100).toFixed(1) : 0;
    const averageScore = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);

    let trend = "stable";
    if (improvement > 5) trend = "rising";
    else if (improvement < -5) trend = "falling";

    const step = Math.ceil(filteredAnalyses.length / 10);
    const points = [];
    for (let i = filteredAnalyses.length - 1; i >= 0; i -= step) {
      points.unshift({
        date: filteredAnalyses[i].date,
        score: filteredAnalyses[i].score,
      });
    }

    return {
      points,
      stats: {
        currentScore,
        previousScore,
        improvement,
        improvementPercent,
        averageScore,
        maxScore,
        minScore,
        totalAnalyses: filteredAnalyses.length,
        trend,
      },
    };
  }, [filteredAnalyses]);

  // Handlers
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems(new Set());
      setSelectAll(false);
    } else {
      setSelectedItems(new Set(filteredAnalyses.map((a) => a.id)));
      setSelectAll(true);
    }
  };

  const handleSelectItem = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
    setSelectAll(newSelected.size === filteredAnalyses.length);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setDateFilter("Todas");
    setScoreFilter("Todas");
    setTypeFilter("Todos");
    setStatusFilter("Todos");
  };

  const handleExportHistory = () => {
    const csv = [
      ["Data", "Arquivo", "Tipo", "Área", "Pontuação", "Status"],
      ...filteredAnalyses.map((a) => [
        a.date,
        a.filename,
        a.type,
        a.area,
        a.score,
        a.status,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `historico_analises_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const handleGenerateReport = () => {
    const report = `
RELATÓRIO DE EVOLUÇÃO - TalentScan
=====================================
Data do Relatório: ${new Date().toLocaleDateString("pt-BR")}

RESUMO EXECUTIVO
================
Pontuação Atual: ${evolutionData.stats.currentScore}/100
Pontuação Anterior: ${evolutionData.stats.previousScore}/100
Melhoria: ${evolutionData.stats.improvement > 0 ? "+" : ""}${evolutionData.stats.improvement} pontos (${evolutionData.stats.improvementPercent}%)
Tendência: ${evolutionData.stats.trend === "rising" ? "📈 Ascendente" : evolutionData.stats.trend === "falling" ? "📉 Descendente" : "➡️ Estável"}

ESTATÍSTICAS
============
Total de Análises: ${evolutionData.stats.totalAnalyses}
Pontuação Média: ${evolutionData.stats.averageScore}
Pontuação Máxima: ${evolutionData.stats.maxScore}
Pontuação Mínima: ${evolutionData.stats.minScore}

HISTÓRICO DE EVOLUÇÃO
=====================
${evolutionData.points.map((p) => `${p.date}: ${p.score}/100`).join("\n")}

ANÁLISE DETALHADA
=================
${
  evolutionData.stats.improvement > 0
    ? `✅ Você está em uma trajetória positiva! Sua pontuação aumentou ${evolutionData.stats.improvement} pontos desde a última análise.`
    : evolutionData.stats.improvement < 0
      ? `⚠️ Sua pontuação diminuiu ${Math.abs(evolutionData.stats.improvement)} pontos. Revise as recomendações da análise anterior.`
      : "➡️ Sua pontuação permaneceu estável. Continue trabalhando nas melhorias sugeridas."
}

RECOMENDAÇÕES
==============
1. Mantenha um acompanhamento regular de suas análises
2. Implemente as sugestões de melhoria fornecidas nos relatórios
3. Compare suas análises para identificar padrões de evolução
4. Exporte seus históricos para documentação pessoal
    `;

    const blob = new Blob([report], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `relatorio_evolucao_${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
  };

  const handleDeleteSelected = () => {
    if (selectedItems.size === 0) {
      alert("Selecione pelo menos uma análise para excluir");
      return;
    }
    if (window.confirm(`Tem certeza que deseja excluir ${selectedItems.size} análise(s)?`)) {
      setAnalyses(analyses.filter((a) => !selectedItems.has(a.id)));
      setSelectedItems(new Set());
      setSelectAll(false);
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      complete: "Completo",
      processing: "Em processamento",
      error: "Erro",
    };
    return labels[status];
  };

  return (
    <div className="historico-page">
      {/* HEADER */}
      <header className="historico-header">
        <div className="logo">TalentScan</div>

        <nav className="historico-nav">
          <a href="#">Home</a>
          <a href="#">Dashboard</a>
          <a href="#" className="active">
            Histórico
          </a>
          <a href="#">Perfil</a>
        </nav>

        <button className="btn-logout">Sair</button>
      </header>

      {/* MAIN */}
      <main className="historico-main">
        {/* TITLE + ACTIONS */}
        <div className="page-title">
          <div>
            <h1>📌 Histórico de Análises</h1>
            <p>Acompanhe suas análises anteriores, veja sua evolução e revise relatórios antigos.</p>
          </div>

          <div className="actions-top">
            <button className="btn btn-primary">➕ Nova Análise</button>
            <button className="btn btn-outline" onClick={handleExportHistory}>
              📥 Exportar Histórico
            </button>
            <button className="btn btn-outline">⭐ Mostrar Favoritos</button>
            <button className="btn btn-danger">🧹 Limpar Histórico</button>
          </div>
        </div>

        {/* EVOLUTION CARD */}
        <section className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <div>
              <h2>📈 Evolução de Pontuação</h2>
              <small>Visualize seu progresso ao longo do tempo.</small>
            </div>
            <button className="btn btn-primary" onClick={handleGenerateReport}>
              📊 Gerar Relatório
            </button>
          </div>

          {filteredAnalyses.length > 0 ? (
            <>
              <div className="evolution">
                {evolutionData.points.map((point, index) => {
                  const maxScore = Math.max(...evolutionData.points.map((p) => p.score));
                  const barHeight = (point.score / maxScore) * 100;
                  return (
                    <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flex: 1 }}>
                      <div className="bar" style={{ height: `${Math.max(barHeight, 20)}%` }}>
                        <span>{point.score}</span>
                      </div>
                      <div className="bar-label">{point.date}</div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", marginTop: "20px" }}>
                <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: "12px", fontWeight: "800", color: "#94a3b8", marginBottom: "8px", textTransform: "uppercase" }}>Pontuação Atual</div>
                  <div style={{ fontSize: "20px", fontWeight: "900", color: "#38bdf8" }}>{evolutionData.stats.currentScore}/100</div>
                </div>

                <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: "12px", fontWeight: "800", color: "#94a3b8", marginBottom: "8px", textTransform: "uppercase" }}>Melhoria</div>
                  <div style={{ fontSize: "20px", fontWeight: "900", color: evolutionData.stats.improvement > 0 ? "#22c55e" : evolutionData.stats.improvement < 0 ? "#ef4444" : "#f59e0b" }}>
                    {evolutionData.stats.improvement > 0 ? "+" : ""}
                    {evolutionData.stats.improvement} ({evolutionData.stats.improvementPercent}%)
                  </div>
                </div>

                <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: "12px", fontWeight: "800", color: "#94a3b8", marginBottom: "8px", textTransform: "uppercase" }}>Tendência</div>
                  <div style={{ fontSize: "20px", fontWeight: "900", color: evolutionData.stats.trend === "rising" ? "#22c55e" : evolutionData.stats.trend === "falling" ? "#ef4444" : "#f59e0b" }}>
                    {evolutionData.stats.trend === "rising"
                      ? "📈 Ascendente"
                      : evolutionData.stats.trend === "falling"
                        ? "📉 Descendente"
                        : "➡️ Estável"}
                  </div>
                </div>

                <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: "12px", fontWeight: "800", color: "#94a3b8", marginBottom: "8px", textTransform: "uppercase" }}>Média</div>
                  <div style={{ fontSize: "20px", fontWeight: "900", color: "#38bdf8" }}>{evolutionData.stats.averageScore}/100</div>
                </div>

                <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: "12px", fontWeight: "800", color: "#94a3b8", marginBottom: "8px", textTransform: "uppercase" }}>Máximo</div>
                  <div style={{ fontSize: "20px", fontWeight: "900", color: "#38bdf8" }}>{evolutionData.stats.maxScore}/100</div>
                </div>

                <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ fontSize: "12px", fontWeight: "800", color: "#94a3b8", marginBottom: "8px", textTransform: "uppercase" }}>Mínimo</div>
                  <div style={{ fontSize: "20px", fontWeight: "900", color: "#38bdf8" }}>{evolutionData.stats.minScore}/100</div>
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "#94a3b8" }}>
              <p>Nenhuma análise encontrada com os filtros aplicados.</p>
            </div>
          )}
        </section>

        {/* FILTERS CARD */}
        <section className="card">
          <h2>🔎 Buscar e Filtrar Análises</h2>
          <small>Encontre análises antigas por nome, data, pontuação ou status.</small>

          <div className="filters-grid">
            <div className="field">
              <label htmlFor="search">Pesquisar análise</label>
              <input
                id="search"
                type="text"
                placeholder="Digite nome do arquivo, área ou vaga..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="date">Filtro por Data</label>
              <select id="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                <option>Todas</option>
                <option>Hoje</option>
                <option>Últimos 7 dias</option>
                <option>Últimos 30 dias</option>
                <option>Personalizado</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="score">Filtro por Pontuação</label>
              <select id="score" value={scoreFilter} onChange={(e) => setScoreFilter(e.target.value)}>
                <option>Todas</option>
                <option>0 a 50</option>
                <option>51 a 70</option>
                <option>71 a 90</option>
                <option>91 a 100</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="type">Tipo de Currículo</label>
              <select id="type" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                <option>Todos</option>
                <option>Estágio</option>
                <option>Júnior</option>
                <option>Pleno</option>
                <option>Sênior</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>Todos</option>
                <option>Completo</option>
                <option>Em processamento</option>
                <option>Erro</option>
              </select>
            </div>
          </div>

          <div className="filter-buttons">
            <button className="btn btn-primary">Pesquisar</button>
            <button className="btn btn-outline">Aplicar Filtros</button>
            <button className="btn btn-outline" onClick={handleClearFilters}>
              Limpar Filtros
            </button>
          </div>
        </section>

        {/* TABLE CARD */}
        <section className="card">
          <div className="table-header">
            <div>
              <h2>📄 Lista de Análises</h2>
              <small>
                {filteredAnalyses.length} análise(s) encontrada(s) {selectedItems.size > 0 && `- ${selectedItems.size} selecionada(s)`}
              </small>
            </div>

            <div className="bulk-actions">
              <button className="btn btn-outline">📊 Comparar Selecionados</button>
              <button className="btn btn-outline">⬇️ Baixar Selecionados</button>
              <button
                className="btn btn-danger"
                onClick={handleDeleteSelected}
                disabled={selectedItems.size === 0}
                style={{ opacity: selectedItems.size === 0 ? 0.5 : 1 }}
              >
                🗑️ Excluir Selecionados
              </button>
            </div>
          </div>

          {filteredAnalyses.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                  </th>
                  <th>Data</th>
                  <th>Arquivo</th>
                  <th>Tipo</th>
                  <th>Área</th>
                  <th>Pontuação</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {filteredAnalyses.map((analysis) => (
                  <tr key={analysis.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedItems.has(analysis.id)}
                        onChange={() => handleSelectItem(analysis.id)}
                      />
                    </td>
                    <td>{analysis.date}</td>
                    <td>{analysis.filename}</td>
                    <td>{analysis.type}</td>
                    <td>{analysis.area}</td>
                    <td className="score">{analysis.score}/100</td>
                    <td>
                      <span className={`status ${analysis.status}`}>
                        {getStatusLabel(analysis.status)}
                      </span>
                    </td>
                    <td>
                      <div className="row-actions">
                        <button className="btn-mini primary">📄 Relatório</button>
                        <button className="btn-mini">⬇️ PDF</button>
                        <button className="btn-mini">👁️ Ver</button>
                        <button className="btn-mini">🔁 Reanalisar</button>
                        <button className="btn-mini">📊 Comparar</button>
                        <button className="btn-mini star">⭐ Favoritar</button>
                        <button className="btn-mini danger">🗑️ Excluir</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "#94a3b8" }}>
              <p>Nenhuma análise encontrada com os filtros aplicados.</p>
            </div>
          )}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>TalentScan</h2>
            <p>
              Melhore seu currículo com inteligência artificial e aumente suas chances no mercado.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Produto</h4>
              <a href="#">Como funciona</a>
              <a href="#">Funcionalidades</a>
              <a href="#">Dashboard</a>
            </div>

            <div>
              <h4>Empresa</h4>
              <a href="#">Sobre</a>
              <a href="#">Contato</a>
            </div>

            <div>
              <h4>Legal</h4>
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TalentScan. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Historico;
