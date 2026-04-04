import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./Home.css";



import {
  FileText,
  Sparkles,
  UploadCloud,
  Brain,
  TrendingUp,
  CheckCircle,
  FileSearch,
  Pencil,
  Rocket
} from "lucide-react";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="glow"></div>

        <div className="hero-left">
          <span className="badge">IA AVANÇADA PARA CURRÍCULOS</span>

          <h1>
            Melhore seu currículo com <br />
            <span>inteligência artificial</span>
          </h1>

          <p>
            Nossa plataforma analisa seu currículo em segundos,
            identifica pontos fracos e fornece sugestões personalizadas
            para destacar seu perfil no mercado.
          </p>

          <Link to={user ? "/dashboard" : "/register"}>
            <button className="btn-primary">
              Analisar meu currículo →
            </button>
          </Link>
        </div>

        <div className="hero-card">
          <div className="chance">
            <TrendingUp size={14} />
            <span>Chance de Entrevista</span>
          </div>

          <div className="file">
            <FileText size={28} />
            <div>
              <h3>Curriculo_Profissional.pdf</h3>
            </div>
          </div>

          <div className="score-area">
            <span>Score Geral</span>
            <div className="score">85</div>
          </div>

          <div className="progress-group">
            <div className="progress-item">
              <p>Impacto das Experiências</p>
              <span>92%</span>
            </div>
            <div className="bar"><span style={{ "--width": "92%" }}></span></div>

            <div className="progress-item">
              <p>Formatação e Design</p>
              <span>78%</span>
            </div>
            <div className="bar"><span style={{ "--width": "78%" }}></span></div>

            <div className="progress-item">
              <p>Uso de Palavras-chave</p>
              <span>65%</span>
            </div>
            <div className="bar orange"><span style={{ "--width": "65%" }}></span></div>
          </div>

          <div className="tips">
            <h4><Sparkles size={16} /> Sugestões da IA</h4>

            <p className="tip green">
              Adicione métricas quantificáveis nas suas experiências
            </p>

            <p className="tip yellow">
              Inclua palavras-chave relevantes para a vaga
            </p>

            <p className="tip green">
              Otimize o resumo profissional
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how">
        <h2>Como funciona o TalentScan</h2>
        <p className="subtitle">
          Um processo simples para transformar seu currículo em algo profissional.
        </p>

        <div className="timeline">

          <div className="step-item">
            <div className="icon"><UploadCloud size={26} /></div>
            <h3>Envie seu currículo</h3>
            <p>
              Faça upload do seu currículo em PDF ou Word de forma rápida e segura.
            </p>
          </div>

          <div className="line"></div>

          <div className="step-item">
            <div className="icon"><Brain size={26} /></div>
            <h3>Análise inteligente</h3>
            <p>
              A IA avalia estrutura, conteúdo e qualidade do seu currículo em segundos.
            </p>
          </div>

          <div className="line"></div>

          <div className="step-item">
            <div className="icon"><CheckCircle size={26} /></div>
            <h3>Receba melhorias</h3>
            <p>
              Obtenha sugestões práticas para aumentar suas chances no mercado.
            </p>
          </div>

        </div>
      </section>

      {/* CARDS */}
      <section className="feature-cards">

        <div className="feature-card">
          <div className="circle"><FileSearch size={24} /></div>
          <h3>Análise Profunda</h3>
          <p>
            Avaliação completa do seu currículo, analisando estrutura,
            organização e clareza das informações.
          </p>
          <span>
            Identifique pontos que podem estar prejudicando sua apresentação
            e entenda como tornar seu currículo mais profissional.
          </span>
        </div>

        <div className="feature-card">
          <div className="circle"><Brain size={24} /></div>
          <h3>Forças e Pontos de Melhoria</h3>
          <p>
            Descubra exatamente o que está funcionando bem e o que precisa
            ser ajustado no seu currículo.
          </p>
          <span>
            Tenha uma visão clara dos seus diferenciais e dos pontos que
            podem ser melhorados para aumentar suas chances no mercado.
          </span>
        </div>

        <div className="feature-card">
          <div className="circle"><Pencil size={24} /></div>
          <h3>Sugestões Práticas</h3>
          <p>
            Receba recomendações claras e diretas para melhorar seu currículo
            de forma estratégica.
          </p>
          <span>
            Ajustes simples podem gerar grandes resultados na forma como
            recrutadores enxergam seu perfil profissional.
          </span>
        </div>

        <div className="feature-card">
          <div className="circle"><Rocket size={24} /></div>
          <h3>Melhoria de Apresentação</h3>
          <p>
            Aprimore a forma como suas experiências e habilidades são
            apresentadas no currículo.
          </p>
          <span>
            Destaque melhor suas conquistas e torne seu perfil mais atrativo
            e competitivo.
          </span>
        </div>

        <div className="feature-card">
          <div className="circle"><CheckCircle size={24} /></div>
          <h3>Validação Profissional</h3>
          <p>
            Garanta que seu currículo esteja alinhado com boas práticas do
            mercado profissional.
          </p>
          <span>
            Evite erros comuns e aumente sua credibilidade com um documento
            mais sólido e bem estruturado.
          </span>
        </div>

        <div className="feature-card">
          <div className="circle"><FileText size={24} /></div>
          <h3>Clareza e Organização</h3>
          <p>
            Estruture melhor suas informações para facilitar a leitura e o
            entendimento do recrutador.
          </p>
          <span>
            Um currículo bem organizado aumenta significativamente suas
            chances de ser notado.
          </span>
        </div>

      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="cta-box">
          <h2>
            Pronto para <span>melhorar seu currículo?</span>
          </h2>

          <p>
            Transforme seu currículo com inteligência artificial e aumente suas chances no mercado.
          </p>

          <Link to={user ? "/dashboard" : "/register"}>
            <button className="cta-button">
              Começar agora →
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;