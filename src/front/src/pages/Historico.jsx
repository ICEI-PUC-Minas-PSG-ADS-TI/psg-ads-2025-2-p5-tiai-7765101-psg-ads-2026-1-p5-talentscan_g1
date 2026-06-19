import "./Historico.css";

function Historico() {
  return (
    <div className="historico-page">

      {/* HEADER */}
      <header className="historico-header">
        <div className="logo">TalentScan</div>

        <nav className="historico-nav">
          <a href="#">Home</a>
          <a href="#">Dashboard</a>
          <a href="#" className="active">Histórico</a>
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
            <button className="btn btn-outline">📥 Exportar Histórico</button>
            <button className="btn btn-outline">⭐ Mostrar Favoritos</button>
            <button className="btn btn-danger">🧹 Limpar Histórico</button>
          </div>
        </div>

        <section className="card">
          <h2>📈 Evolução de Pontuação</h2>
          <small>Visualize seu progresso ao longo do tempo.</small>

          <div className="evolution">
            <div>
              <div className="bar" style={{ height: "60px" }}>
                <span>62</span>
              </div>
              <div className="bar-label">10/03</div>
            </div>

            <div>
              <div className="bar" style={{ height: "75px" }}>
                <span>70</span>
              </div>
              <div className="bar-label">20/03</div>
            </div>

            <div>
              <div className="bar" style={{ height: "82px" }}>
                <span>78</span>
              </div>
              <div className="bar-label">30/03</div>
            </div>

            <div>
              <div className="bar" style={{ height: "92px" }}>
                <span>85</span>
              </div>
              <div className="bar-label">05/04</div>
            </div>

            <div>
              <div className="bar" style={{ height: "100px" }}>
                <span>92</span>
              </div>
              <div className="bar-label">06/04</div>
            </div>
          </div>
        </section>

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
              />
            </div>

            <div className="field">
              <label htmlFor="date">Filtro por Data</label>
              <select id="date">
                <option>Todas</option>
                <option>Hoje</option>
                <option>Últimos 7 dias</option>
                <option>Últimos 30 dias</option>
                <option>Personalizado</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="score">Filtro por Pontuação</label>
              <select id="score">
                <option>Todas</option>
                <option>0 a 50</option>
                <option>51 a 70</option>
                <option>71 a 90</option>
                <option>91 a 100</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="type">Tipo de Currículo</label>
              <select id="type">
                <option>Todos</option>
                <option>Estágio</option>
                <option>Júnior</option>
                <option>Pleno</option>
                <option>Sênior</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="status">Status</label>
              <select id="status">
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
            <button className="btn btn-outline">Limpar Filtros</button>
          </div>
        </section>

        {/* TABLE CARD */}
        <section className="card">
          <div className="table-header">
            <div>
              <h2>📄 Lista de Análises</h2>
              <small>Selecione análises para comparar ou excluir em lote.</small>
            </div>

            <div className="bulk-actions">
              <button className="btn btn-outline">📊 Comparar Selecionados</button>
              <button className="btn btn-outline">⬇️ Baixar Selecionados</button>
              <button className="btn btn-danger">🗑️ Excluir Selecionados</button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
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
              <tr>
                <td><input type="checkbox" /></td>
                <td>06/04/2026</td>
                <td>curriculo_andre_v3.pdf</td>
                <td>Júnior</td>
                <td>Tecnologia</td>
                <td className="score">92/100</td>
                <td><span className="status complete">Completo</span></td>
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

              <tr>
                <td><input type="checkbox" /></td>
                <td>05/04/2026</td>
                <td>curriculo_andre_v2.pdf</td>
                <td>Estágio</td>
                <td>Tecnologia</td>
                <td className="score">85/100</td>
                <td><span className="status complete">Completo</span></td>
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

              <tr>
                <td><input type="checkbox" /></td>
                <td>30/03/2026</td>
                <td>curriculo_andre_v1.pdf</td>
                <td>Estágio</td>
                <td>Administração</td>
                <td className="score">78/100</td>
                <td><span className="status complete">Completo</span></td>
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

              <tr>
                <td><input type="checkbox" /></td>
                <td>20/03/2026</td>
                <td>curriculo_teste.pdf</td>
                <td>Júnior</td>
                <td>Marketing</td>
                <td className="score">70/100</td>
                <td><span className="status processing">Em processamento</span></td>
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

              <tr>
                <td><input type="checkbox" /></td>
                <td>10/03/2026</td>
                <td>curriculo_incompleto.docx</td>
                <td>Estágio</td>
                <td>Tecnologia</td>
                <td className="score">62/100</td>
                <td><span className="status error">Erro</span></td>
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

            </tbody>
          </table>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-brand">
            <h2>TalentScan</h2>
            <p>
              Melhore seu currículo com inteligência artificial e
              aumente suas chances no mercado.
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
