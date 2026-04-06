import API_URL from "./api";

const parseResponse = async (response, fallbackMessage) => {
  const contentType = response.headers.get("content-type") || "";
  const rawText = await response.text();

  if (!contentType.includes("application/json")) {
    throw new Error(
      "A API nao retornou JSON. Reinicie o backend para carregar as novas rotas."
    );
  }

  const data = JSON.parse(rawText);

  if (!response.ok) {
    throw new Error(data.message || fallbackMessage);
  }

  return data;
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  return parseResponse(response, "Erro ao cadastrar usuario");
};

export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  return parseResponse(response, "Erro ao fazer login");
};

export const updateUserProfile = async (userId, userData) => {
  const response = await fetch(`${API_URL}/api/auth/profile/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  return parseResponse(response, "Erro ao atualizar perfil");
};

export const getUserProfile = async (userId) => {
  const response = await fetch(`${API_URL}/api/auth/profile/${userId}`);

  return parseResponse(response, "Erro ao carregar perfil");
};

export const updateUserPassword = async (userId, passwordData) => {
  const response = await fetch(`${API_URL}/api/auth/password/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(passwordData)
  });

  return parseResponse(response, "Erro ao atualizar senha");
};
