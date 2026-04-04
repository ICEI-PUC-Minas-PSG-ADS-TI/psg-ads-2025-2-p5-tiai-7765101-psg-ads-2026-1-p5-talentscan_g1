require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testarIA() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(
      "Explique em 2 linhas o que é um currículo profissional"
    );

    const response = await result.response;

    console.log("Resposta da IA:\n");
    console.log(response.text());

  } catch (erro) {
    console.error("Erro:", erro.message);
  }
}

testarIA();