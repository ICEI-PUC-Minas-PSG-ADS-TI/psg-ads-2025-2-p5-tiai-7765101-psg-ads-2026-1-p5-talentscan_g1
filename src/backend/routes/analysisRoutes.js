const express = require("express");
const router = express.Router();
const Analise = require("../models/Analise");
const { aprimorarTexto } = require("../services/iaService");

router.get("/progress/:userId", async (req, res) => {
  try {
    const analises = await Analise.find({ userId: req.params.userId })
      .sort({ data: 1 })
      .limit(20);

    res.json(analises);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar progresso" });
  }
});

router.post("/aprimorar-texto", async (req, res) => {
  try {
    const { texto, contexto } = req.body;
    if (!texto || !contexto) {
      return res.status(400).json({ error: "Texto e contexto são obrigatórios." });
    }
    const resultado = await aprimorarTexto(texto, contexto);
    res.json(resultado);
  } catch (err) {
    console.error("Erro ao aprimorar texto:", err);
    res.status(500).json({ error: "Erro ao aprimorar texto com IA" });
  }
});

module.exports = router;