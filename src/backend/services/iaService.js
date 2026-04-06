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
Com base nisso, atribua uma nota de 0 a 100

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

Currículo:
${texto}
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;

    let resposta = response.text();

    resposta = resposta.replace(/```json/g, "").replace(/```/g, "").trim();

   
    const jsonMatch = resposta.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      resposta = jsonMatch[0];
    }

    return JSON.parse(resposta);

  } catch (erro) {
    console.error("Erro na IA:", erro);

    return {
      nota: 0,
      pontosFortes: [],
      pontosFracos: ["Erro ao processar análise da IA"],
      sugestoes: ["Tente novamente com outro currículo"]
    };
  }
}

module.exports = analisarCurriculo;