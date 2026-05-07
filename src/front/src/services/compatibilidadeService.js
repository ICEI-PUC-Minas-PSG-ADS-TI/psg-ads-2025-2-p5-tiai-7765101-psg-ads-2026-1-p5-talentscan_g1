import API_URL from "./api";

export async function buscarCurriculos(userId) {
  const res = await fetch(`${API_URL}/api/analises/${userId}`);
  return res.json();
}

export async function buscarClassificacoes(userId) {
  const res = await fetch(`${API_URL}/api/classificacao/historico/${userId}`);
  return res.json();
}

export async function analisarClassificacao(formData) {
  const res = await fetch(`${API_URL}/api/classificacao/analisar`, {
    method: "POST",
    body: formData
  });

  return res.json();
}

export async function gerarVaga(payload) {
  const res = await fetch(`${API_URL}/api/vagas/gerar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  return res.json();
}

export async function analisarCompatibilidade(payload) {
  const res = await fetch(`${API_URL}/api/compatibilidade/analisar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  return res.json();
}
