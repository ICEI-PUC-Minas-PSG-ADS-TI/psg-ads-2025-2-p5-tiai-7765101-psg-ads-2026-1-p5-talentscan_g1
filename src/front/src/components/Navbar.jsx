import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
    <nav
      style={{
        width: "100%",
        backgroundColor: "#0f172a",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <h2 style={{ color: "#fff", margin: 0 }}>TalentScan</h2>

      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          Home
        </Link>

        {!user ? (
          <>
            <Link to="/login" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
              Login
            </Link>

            <Link to="/register" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
              Cadastro
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Sair
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;