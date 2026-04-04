const fs = require("fs");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

async function extrairTexto(caminho) {
  const buffer = fs.readFileSync(caminho);

  if (caminho.endsWith(".pdf")) {
    const data = await pdfParse(buffer);
    return data.text;
  }

 
  if (caminho.endsWith(".docx")) {
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  }

  throw new Error("Formato não suportado");
}

module.exports = extrairTexto;