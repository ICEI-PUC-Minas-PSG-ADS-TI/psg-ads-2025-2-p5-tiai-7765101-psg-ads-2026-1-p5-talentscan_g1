import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px"
          }}
        >
          Bem-vindo ao TalentScan
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            lineHeight: "1.6",
            color: "#cbd5e1",
            marginBottom: "30px"
          }}
        >
          Sistema inteligente de análise de currículos com Inteligência Artificial.
        </p>

        {!user ? (
          <div style={{ display: "flex", gap: "16px" }}>
            <Link to="/register">
              <button
                style={{
                  padding: "14px 24px",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                Criar conta
              </button>
            </Link>

            <Link to="/login">
              <button
                style={{
                  padding: "14px 24px",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                Entrar
              </button>
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "16px" }}>

            <Link to="/dashboard">
              <button
                style={{
                  padding: "14px 24px",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#22c55e",
                  color: "#fff",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                Ir para Dashboard
              </button>
            </Link>

          </div>
        )}

      </section>
    </>
  );
}

export default Home;