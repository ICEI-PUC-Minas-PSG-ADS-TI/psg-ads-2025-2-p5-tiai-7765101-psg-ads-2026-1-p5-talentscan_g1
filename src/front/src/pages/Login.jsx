import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { loginUser } from "../services/authService";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const data = await loginUser(formData);

      localStorage.setItem("user", JSON.stringify(data.user));

      await Swal.fire({
        icon: "success",
        title: "Login realizado!",
        text: data.message,
        confirmButtonColor: "#2563eb"
      });

      setFormData({
        email: "",
        password: ""
      });

      navigate("/");

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro no login",
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
            Login
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#cbd5e1",
              marginBottom: "24px"
            }}
          >
            Entre na sua conta para acessar o sistema.
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
              Entrar
            </button>
          </form>

          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "#cbd5e1"
            }}
          >
            Ainda não possui conta?{" "}
            <Link to="/register" style={{ color: "#60a5fa", textDecoration: "none" }}>
              Cadastre-se
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;