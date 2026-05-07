## Arquivo .sql

**users:**
```json
name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String,
    default: ""
  },

  password: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});
```

**analises:**
```json
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
```

**classificacaoCurriculo:**
```json
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
```

**compatibilidadeVaga:**
```json
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
```

**vagaGerada:**
```json
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
```