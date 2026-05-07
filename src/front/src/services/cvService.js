import API_URL from "./api";

export const aprimorarTextoComIA = async (texto, contexto) => {
  try {
    const response = await fetch(`${API_URL}/api/aprimorar-texto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ texto, contexto }),
    });

    if (!response.ok) {
      throw new Error("Erro ao aprimorar texto");
    }

    const data = await response.json();
    return data.textoAprimorado;
  } catch (error) {
    console.error("Erro no aprimorarTextoComIA:", error);
    throw error;
  }
};
