import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { registerUser } from "../services/authService";
import Swal from "sweetalert2";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

  
    if (formData.password !== formData.confirmPassword) {
      return Swal.fire({
        icon: "warning",
        title: "Senhas diferentes",
        text: "As senhas precisam ser iguais"
      });
    }

    if (formData.password.length < 6) {
      return Swal.fire({
        icon: "warning",
        title: "Senha inválida",
        text: "Mínimo de 6 caracteres"
      });
    }

    if (!/\d/.test(formData.password)) {
      return Swal.fire({
        icon: "warning",
        title: "Senha inválida",
        text: "A senha deve conter pelo menos 1 número"
      });
    }

    try {
      const data = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      Swal.fire({
        icon: "success",
        title: "Cadastro realizado!",
        text: data.message,
        confirmButtonColor: "#2563eb"
      });

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
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

      <section className="register-section">
        <div className="register-box">

          <h1>Cadastro</h1>
          <p className="subtitle">
            Crie sua conta para analisar currículos com IA
          </p>

          <form onSubmit={handleSubmit} className="register-form">

            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

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

            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="register-btn">
              Cadastrar
            </button>

          </form>

          <p className="login-link">
            Já possui conta? <Link to="/login">Fazer login</Link>
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;