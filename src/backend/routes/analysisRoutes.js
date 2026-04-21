const express = require("express");
const router = express.Router();
const Analise = require("../models/Analise");

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

module.exports = router;