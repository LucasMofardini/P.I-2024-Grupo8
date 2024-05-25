import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Access-Control-Allow-Headers": "*",
    'Content-Type': 'application/json'
  }
});

export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    throw error;
  }
};
