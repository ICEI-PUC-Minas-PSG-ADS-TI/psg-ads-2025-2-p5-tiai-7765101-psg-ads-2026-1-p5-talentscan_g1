import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Progress from "../pages/Progress";
import ClassificacaoCompatibilidade from "../pages/ClassificacaoCompatibilidade";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/classificacao-compatibilidade" element={<ClassificacaoCompatibilidade />} />
        <Route path="/classificao-compatibilidade" element={<ClassificacaoCompatibilidade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
