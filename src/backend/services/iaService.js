require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analisarCurriculo(texto) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
Analise o currículo abaixo como um recrutador profissional.

Considere:
- Clareza
- Experiência
- Uso de palavras-chave
- Organização

Responda em JSON válido:

{
  "nota": number,
  "pontosFortes": [string],
  "pontosFracos": [string],
  "sugestoes": [string]
}

A nota deve ser de 0 a 100.

Currículo:
${texto}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  let resposta = response.text();

  resposta = resposta.replace(/```json/g, "").replace(/```/g, "").trim();

  try {
    return JSON.parse(resposta);
  } catch (erro) {
    console.error("Erro ao converter JSON:", erro);
    return {
      erro: "Falha ao interpretar resposta da IA",
      respostaBruta: resposta
    };
  }
}

module.exports = analisarCurriculo;