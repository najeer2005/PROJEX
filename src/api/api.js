import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
};

export const apiFetch = async (url, options = {}) => {
  const headers = {
    ...(options.headers || {}),
    ...getAuthHeaders(),
  };

  return fetch(url, {
    ...options,
    headers,
  });
};

export default api;