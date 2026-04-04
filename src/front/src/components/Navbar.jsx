import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    localStorage.removeItem("user");

    await Swal.fire({
      icon: "success",
      title: "Logout realizado!",
      text: "Você saiu da sua conta com sucesso.",
      confirmButtonColor: "#2563eb"
    });

    navigate("/");
    window.location.reload();
  };

  return (
  <nav className="navbar">

  <div className="logo">
    <Link to="/">TalentScan</Link>
  </div>

  <div className="nav-links">

    {!user ? (
      <>
        <Link to="/">Home</Link>
        <Link to="/login">Entrar</Link>
        <Link to="/register" className="btn-primary">
          Cadastro
        </Link>
      </>
    ) : (
      <>
        {/*  */}
        <span className="user-name">
          Olá, {user.name?.split(" ")[0]}
        </span>

        <Link to="/">Home</Link>

        <Link to="/dashboard">Minhas Análises</Link>

        <button onClick={handleLogout} className="btn-logout">
          Sair
        </button>
      </>
    )}

  </div>

</nav>
  );
}

export default Navbar;