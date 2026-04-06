import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  LogOut,
  Mail,
  Pencil,
  Phone,
  UserRound
} from "lucide-react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  getUserProfile,
  updateUserPassword,
  updateUserProfile
} from "../services/authService";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  useEffect(() => {
    const syncProfile = async () => {
      if (!user?._id) {
        return;
      }

      try {
        const data = await getUserProfile(user._id);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
      } catch {
        // Mantem o usuario atual caso o backend ainda nao esteja disponivel.
      }
    };

    syncProfile();
  }, [user?._id]);

  if (!user) {
    return null;
  }

  const initials = user.name
    ?.split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "TS";

  const openProfileEditor = async (focusField = "name") => {
    const { value: formValues } = await Swal.fire({
      title: "Editar perfil",
      background: "#0f172a",
      color: "#e2e8f0",
      confirmButtonColor: "#4f7df0",
      cancelButtonColor: "#475569",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
      reverseButtons: true,
      focusConfirm: false,
      didOpen: () => {
        const field = document.getElementById(`swal-${focusField}`);

        if (field) {
          field.focus();
          field.select?.();
        }
      },
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Nome" value="${user.name || ""}">
        <input id="swal-email" class="swal2-input" placeholder="E-mail" value="${user.email || ""}">
        <input id="swal-phone" class="swal2-input" placeholder="Telefone" value="${user.phone || ""}">
      `,
      preConfirm: () => {
        const name = document.getElementById("swal-name").value.trim();
        const email = document.getElementById("swal-email").value.trim();
        const phone = document.getElementById("swal-phone").value.trim();

        if (!name || !email) {
          Swal.showValidationMessage("Preencha nome e e-mail");
          return false;
        }

        return { name, email, phone };
      }
    });

    if (!formValues) {
      return;
    }

    try {
      const data = await updateUserProfile(user._id, formValues);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);

      await Swal.fire({
        icon: "success",
        title: "Perfil atualizado",
        text: data.message,
        confirmButtonColor: "#4f7df0"
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao atualizar perfil",
        text: error.message,
        confirmButtonColor: "#ef4444"
      });
    }
  };

  const handleProfileUpdate = () => openProfileEditor("name");
  const handleEmailShortcut = () => openProfileEditor("email");
  const handlePhoneShortcut = () => openProfileEditor("phone");

  const handlePasswordUpdate = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Alterar senha",
      background: "#0f172a",
      color: "#e2e8f0",
      confirmButtonColor: "#4f7df0",
      cancelButtonColor: "#475569",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
      reverseButtons: true,
      focusConfirm: false,
      html: `
        <input id="swal-current-password" type="password" class="swal2-input" placeholder="Senha atual">
        <input id="swal-new-password" type="password" class="swal2-input" placeholder="Nova senha">
        <input id="swal-confirm-password" type="password" class="swal2-input" placeholder="Confirmar nova senha">
      `,
      preConfirm: () => {
        const currentPassword = document.getElementById("swal-current-password").value;
        const newPassword = document.getElementById("swal-new-password").value;
        const confirmPassword = document.getElementById("swal-confirm-password").value;

        if (!currentPassword || !newPassword || !confirmPassword) {
          Swal.showValidationMessage("Preencha todos os campos");
          return false;
        }

        if (newPassword !== confirmPassword) {
          Swal.showValidationMessage("As novas senhas precisam ser iguais");
          return false;
        }

        return { currentPassword, newPassword };
      }
    });

    if (!formValues) {
      return;
    }

    try {
      const data = await updateUserPassword(user._id, formValues);

      await Swal.fire({
        icon: "success",
        title: "Senha alterada",
        text: data.message,
        confirmButtonColor: "#4f7df0"
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao alterar senha",
        text: error.message,
        confirmButtonColor: "#ef4444"
      });
    }
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Sair da conta?",
      text: "Voce sera desconectado da sessao atual.",
      showCancelButton: true,
      confirmButtonText: "Sair",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#475569"
    });

    if (!result.isConfirmed) {
      return;
    }

    localStorage.removeItem("user");

    await Swal.fire({
      icon: "success",
      title: "Sessao encerrada",
      text: "Voce saiu da conta com sucesso.",
      confirmButtonColor: "#4f7df0"
    });

    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Navbar />

      <main className="profile-page">
        <section className="profile-hero-card">
          <div className="profile-hero-main">
            <div className="profile-avatar">{initials}</div>

            <div className="profile-hero-content">
              <h1>{user.name}</h1>
              <p>Gerencie suas informacoes e configuracoes</p>
            </div>
          </div>

          <button className="profile-hero-button" onClick={handleProfileUpdate}>
            Editar perfil
          </button>
        </section>

        <section className="profile-grid">
          <div className="profile-panel">
            <h2>Informacoes Pessoais</h2>

            <button
              className="profile-info-card profile-info-button"
              onClick={handleEmailShortcut}
              type="button"
            >
              <div className="profile-info-left">
                <div className="profile-icon blue-soft">
                  <Mail size={22} />
                </div>

                <div>
                  <span>E-mail</span>
                  <strong>{user.email}</strong>
                </div>
              </div>
            </button>

            <button
              className="profile-info-card profile-info-button"
              onClick={handlePhoneShortcut}
              type="button"
            >
              <div className="profile-info-left">
                <div className="profile-icon blue-soft">
                  <Phone size={22} />
                </div>

                <div>
                  <span>Telefone</span>
                  <strong>{user.phone || "Adicione esse dado depois, se quiser"}</strong>
                </div>
              </div>
            </button>
          </div>

          <div className="profile-panel">
            <h2>Configuracoes da Conta</h2>

            <button className="profile-action-card" onClick={handleProfileUpdate}>
              <div className="profile-action-left">
                <div className="profile-icon blue-strong">
                  <UserRound size={22} />
                </div>

                <div>
                  <strong>Editar Perfil</strong>
                  <span>Atualize suas informacoes pessoais</span>
                </div>
              </div>

              <Pencil size={18} />
            </button>

            <button className="profile-action-card" onClick={handlePasswordUpdate}>
              <div className="profile-action-left">
                <div className="profile-icon blue-strong">
                  <Lock size={22} />
                </div>

                <div>
                  <strong>Alterar Senha</strong>
                  <span>Mantenha sua conta segura</span>
                </div>
              </div>

              <Pencil size={18} />
            </button>

            <button
              className="profile-action-card profile-action-danger"
              onClick={handleLogout}
            >
              <div className="profile-action-left">
                <div className="profile-icon danger">
                  <LogOut size={22} />
                </div>

                <div>
                  <strong>Sair da Conta</strong>
                  <span>Encerrar sua sessao atual</span>
                </div>
              </div>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Profile;
