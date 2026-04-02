import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ESQUERDA */}
        <div className="footer-brand">
          <h2>TalentScan</h2>
          <p>
            Melhore seu currículo com inteligência artificial e
            aumente suas chances no mercado.
          </p>
        </div>

        {/* LINKS */}
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

      {/* LINHA FINAL */}
      <div className="footer-bottom">
        <p>© 2026 TalentScan. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;