import axios from "axios";

const API_URL = "https://dummyjson.com/products";

// Obtener todos los productos
export const getAllProducts = () => {
  return axios.get(API_URL).then(res => res.data.products);
};

// Obtener productos por categoría
export const getProductsByCategory = (category) => {
  return axios.get(`${API_URL}/category/${category}`).then(res => res.data.products);
};

// Obtener todas las categorías
export const getAllCategories = () => {
  return axios.get(`${API_URL}/categories`).then(res => res.data);
};

// Obtener un producto por ID
export const getProductById = (id) => {
  return axios.get(`${API_URL}/${id}`).then(res => res.data);
};