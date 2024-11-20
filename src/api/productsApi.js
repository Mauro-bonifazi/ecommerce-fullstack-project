import axios from "axios";

const BASE_URL = "http://localhost:3001/api";
const access_token = localStorage.getItem("token");
// Obtener todos los productos del servidor, con la opción de filtrar por nombre
export const getAllProducts = (searchTerm) => {
  return axios.get(`${BASE_URL}/products?name=${searchTerm || ""}`);
};
// Crear
export const createProduct = (product) => {
  return axios.post(`${BASE_URL}/products`, product, {
    headers: {
      Authorization: `${access_token}`,
    },
  });
};
// Actualizar
export const updateProduct = (id, product) => {
  return axios.put(`${BASE_URL}/products/${id}`, product, {
    headers: {
      Authorization: ` ${access_token}`,
    },
  });
};
// Eliminar
export const removeProduct = (id) => {
  return axios.delete(`${BASE_URL}/products/${id}`, {
    headers: {
      Authorization: `${access_token}`,
    },
  });
};
//login
export const login = (loginData) => {
  return axios.post("http://localhost:3001/auth/login", loginData);
};
