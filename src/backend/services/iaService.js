require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function extrairJson(texto) {
  let resposta = texto.replace(/```json/g, "").replace(/```/g, "").trim();
  const jsonMatch = resposta.match(/\{[\s\S]*\}/);

  if (jsonMatch) {
    resposta = jsonMatch[0];
  }

  return JSON.parse(resposta);
}

async function gerarJson(prompt, fallback) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;

    return extrairJson(response.text());
  } catch (erro) {
    console.error("Erro na IA:", erro);
    return fallback;
  }
}

async function analisarCurriculo(texto) {
   const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const prompt = `
Analise o currículo abaixo como um recrutador profissional.

Considere:
- Clareza
- Experiência
- Uso de palavras-chave
- Organização
Com base nisso, atribua uma nota de 0 a 100.

Responda APENAS com JSON válido.
Sem explicações.
Sem texto antes ou depois.

Formato:
{
  "nota": number,
  "pontosFortes": [string],
  "pontosFracos": [string],
  "sugestoes": [string]
}

Curriculo:
${texto}
`;

  return gerarJson(prompt, {
    nota: 0,
    pontosFortes: [],
    pontosFracos: ["Erro ao processar analise da IA"],
    sugestoes: ["Tente novamente com outro curriculo"]
  });
}

async function classificarCurriculo(texto) {
  const prompt = `
Analise o curriculo abaixo e classifique o perfil profissional do candidato.

Responda APENAS com JSON valido.
Sem explicacoes.
Sem texto antes ou depois.

Formato:
{
  "areaPrincipal": "string",
  "nivelProfissional": "string",
  "tecnologiasPrincipais": ["string"],
  "hardSkills": ["string"],
  "softSkills": ["string"],
  "pontuacaoGeral": number,
  "pontosFortes": ["string"],
  "pontosFracos": ["string"],
  "sugestoesMelhoria": ["string"],
  "resumoProfissional": "string"
}

Regras:
- areaPrincipal deve representar a area mais provavel do candidato.
- nivelProfissional deve ser Estagio, Junior, Pleno, Senior ou Especialista.
- pontuacaoGeral deve ser um inteiro de 0 a 100.
- Use listas curtas, objetivas e baseadas no curriculo.
- Se algo nao estiver claro, aponte a ausencia nos pontos fracos.

Curriculo:
${texto}
`;

  return gerarJson(prompt, {
    areaPrincipal: "Nao identificada",
    nivelProfissional: "Nao identificado",
    tecnologiasPrincipais: [],
    hardSkills: [],
    softSkills: [],
    pontuacaoGeral: 0,
    pontosFortes: [],
    pontosFracos: ["Erro ao processar classificacao da IA"],
    sugestoesMelhoria: ["Tente novamente com outro curriculo"],
    resumoProfissional: "Nao foi possivel gerar o resumo profissional."
  });
}

async function gerarVaga(area, nivel) {
  const prompt = `
Gere uma vaga de emprego para a area e nivel informados.

Area: ${area}
Nivel: ${nivel}

Responda APENAS com JSON valido.
Sem explicacoes.
Sem texto antes ou depois.

Formato:
{
  "titulo": "string",
  "descricao": "string",
  "responsabilidades": ["string"],
  "requisitosObrigatorios": ["string"],
  "requisitosDesejaveis": ["string"],
  "tecnologias": ["string"],
  "nivel": "string",
  "softSkills": ["string"]
}
`;

  return gerarJson(prompt, {
    titulo: `${area || "Profissional"} ${nivel || ""}`.trim(),
    descricao: "Nao foi possivel gerar a vaga automaticamente.",
    responsabilidades: [],
    requisitosObrigatorios: [],
    requisitosDesejaveis: [],
    tecnologias: [],
    nivel: nivel || "Nao informado",
    softSkills: []
  });
}

async function analisarCompatibilidade(classificacao, vaga) {
  const prompt = `
Compare a classificacao do curriculo com a vaga abaixo.

A classificacao do curriculo deve ser a base principal da comparacao.
Considere area, nivel, tecnologias, hard skills, soft skills, pontos fortes e lacunas.

Responda APENAS com JSON valido.
Sem explicacoes.
Sem texto antes ou depois.

Formato:
{
  "porcentagemCompatibilidade": number,
  "pontosCompativeis": ["string"],
  "pontosAusentes": ["string"],
  "pontosParcialmenteCompativeis": ["string"],
  "justificativaNota": "string",
  "recomendacaoFinal": "string",
  "sugestoesMelhoria": ["string"]
}

Regras:
- porcentagemCompatibilidade deve ser um inteiro de 0 a 100.
- Explique a nota com base nos requisitos da vaga.
- A recomendacao final deve indicar se a aderencia e alta, media ou baixa.

Classificacao do curriculo:
${JSON.stringify(classificacao, null, 2)}

Vaga:
${JSON.stringify(vaga, null, 2)}
`;

  return gerarJson(prompt, {
    porcentagemCompatibilidade: 0,
    pontosCompativeis: [],
    pontosAusentes: ["Erro ao processar compatibilidade da IA"],
    pontosParcialmenteCompativeis: [],
    justificativaNota: "Nao foi possivel comparar a classificacao com a vaga.",
    recomendacaoFinal: "Tente novamente apos revisar os dados enviados.",
    sugestoesMelhoria: []
  });
}

module.exports = analisarCurriculo;
module.exports.analisarCurriculo = analisarCurriculo;
module.exports.classificarCurriculo = classificarCurriculo;
module.exports.gerarVaga = gerarVaga;
module.exports.analisarCompatibilidade = analisarCompatibilidade;
