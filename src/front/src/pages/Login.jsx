import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { loginUser } from "../services/authService";
import Swal from "sweetalert2";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

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

      <section className="login-section">
        <div className="login-box">

          <h1>Login</h1>
          <p className="subtitle">
            Entre na sua conta para acessar o sistema
          </p>

          <form onSubmit={handleSubmit} className="login-form">

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button type="submit" className="login-btn">
              Entrar
            </button>

          </form>

          <p className="register-link">
            Ainda não possui conta?{" "}
            <Link to="/register">Cadastre-se</Link>
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;