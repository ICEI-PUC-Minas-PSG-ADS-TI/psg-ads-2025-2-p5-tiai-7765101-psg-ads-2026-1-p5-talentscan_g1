const mongoose = require("mongoose");

const compatibilidadeVagaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  classificacaoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClassificacaoCurriculo",
    required: true
  },
  vagaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VagaGerada"
  },
  vagaPersonalizada: {
    titulo: String,
    descricao: String,
    requisitos: String,
    responsabilidades: String,
    tecnologias: String,
    nivel: String
  },
  porcentagemCompatibilidade: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  pontosCompativeis: [String],
  pontosAusentes: [String],
  pontosParcialmenteCompativeis: [String],
  justificativaNota: String,
  recomendacaoFinal: String,
  sugestoesMelhoria: [String],
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("CompatibilidadeVaga", compatibilidadeVagaSchema);
