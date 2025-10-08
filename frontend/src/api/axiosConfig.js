import axios from "axios";

// TODO: Alterar esse arquivo para a nossa baseURL. Além disso, colocar a baseURL no .env

// 1. Cria uma instância do Axios com configurações pré-definidas
const api = axios.create({
  baseURL: "http://localhost:3000", // A base da sua URL de backend
  withCredentials: true, // Habilita o envio automático de cookies
});

// 2. (Opcional, mas muito recomendado) Adiciona um interceptor de resposta
// Isso permite tratar erros de forma global.
api.interceptors.response.use(
  (response) => response, // Se a resposta for sucesso, apenas a retorna
  (error) => {
    // Se o erro for 401 (Não Autorizado) ou 403 (Proibido)
    if (error.response && [401, 403].includes(error.response.status)) {
      // A lógica de logout do seu AuthContext poderia ser chamada aqui,
      // ou podemos simplesmente redirecionar o usuário.
      // Isso evita que a aplicação quebre em páginas protegidas
      // se o cookie expirar.
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// 3. Exporta a instância configurada
export default api;
