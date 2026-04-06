## Arquivo .sql

Adicione aqui os scripts SQL.

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
