import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Dashboard</h1>
          <p>Área do usuário logado.</p>
        </div>
      </section>
    </>
  );
}

export default Dashboard;