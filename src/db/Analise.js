const mongoose = require("mongoose");

const analiseSchema = new mongoose.Schema({
  nomeArquivo: {
    type: String,
    required: true
  },

  texto: {
    type: String,
    required: true
  },

  analise: {
    pontosFortes: [String],
    pontosFracos: [String],
    sugestoes: [String],
    nota: Number
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Analise", analiseSchema);