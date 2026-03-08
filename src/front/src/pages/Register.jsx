import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { registerUser } from "../services/authService";
import Swal from "sweetalert2";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(formData);

      Swal.fire({
        icon: "success",
        title: "Cadastro realizado!",
        text: data.message,
        confirmButtonColor: "#2563eb"
      });

      setFormData({
        name: "",
        email: "",
        password: ""
      });

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro no cadastro",
        text: err.message,
        confirmButtonColor: "#ef4444"
      });
    }
  };

  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            padding: "32px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "10px",
              textAlign: "center"
            }}
          >
            Cadastro
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#cbd5e1",
              marginBottom: "24px"
            }}
          >
            Crie sua conta para analisar currículos com IA.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px"
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #334155",
                backgroundColor: "#0f172a",
                color: "#fff",
                outline: "none"
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #334155",
                backgroundColor: "#0f172a",
                color: "#fff",
                outline: "none"
              }}
            />

            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleChange}
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #334155",
                backgroundColor: "#0f172a",
                color: "#fff",
                outline: "none"
              }}
            />

            <button
              type="submit"
              style={{
                marginTop: "8px",
                padding: "14px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#2563eb",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Cadastrar
            </button>
          </form>

          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "#cbd5e1"
            }}
          >
            Já possui conta?{" "}
            <Link to="/login" style={{ color: "#60a5fa", textDecoration: "none" }}>
              Fazer login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;