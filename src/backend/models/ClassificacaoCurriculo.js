const mongoose = require("mongoose");

const classificacaoCurriculoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  curriculoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Analise"
  },
  nomeArquivo: String,
  areaPrincipal: String,
  nivelProfissional: String,
  tecnologiasPrincipais: [String],
  hardSkills: [String],
  softSkills: [String],
  pontuacaoGeral: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  pontosFortes: [String],
  pontosFracos: [String],
  sugestoesMelhoria: [String],
  resumoProfissional: String,
  dataCriacao: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("ClassificacaoCurriculo", classificacaoCurriculoSchema);
