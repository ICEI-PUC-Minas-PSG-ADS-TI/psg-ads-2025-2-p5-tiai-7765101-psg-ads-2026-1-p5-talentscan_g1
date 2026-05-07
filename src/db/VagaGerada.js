const mongoose = require("mongoose");

const vagaGeradaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  area: {
    type: String,
    required: true
  },
  nivel: {
    type: String,
    required: true
  },
  titulo: String,
  descricao: String,
  responsabilidades: [String],
  requisitosObrigatorios: [String],
  requisitosDesejaveis: [String],
  tecnologias: [String],
  softSkills: [String],
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("VagaGerada", vagaGeradaSchema);
