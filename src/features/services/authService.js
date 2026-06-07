import api from "../../services/api";

export const registerUser = async (data) => {
  console.log("data register", data);
  const response = await api.post("/api/v1/user/register", data);
  console.log("response", response.data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await api.post("/api/v1/user/login", data);
  return response.data;
};

export const createCategory = async (data) => {
  const response = await api.post("/api/v1/category", data);
  return response.data;
};

export const getAllCategory = async (data) => {
  const response = await api.get("/api/v1/category", data);
  return response.data;
};

export const getCategoryById = async (id) => {
  console.log("Byid", id);
  const response = await api.get(`/api/v1/category/${id}`);
  return response.data;
};

export const updateCategory = async (id, data) => {
  console.log("cek id update", id);
  console.log("cek data ", data);
  const response = await api.put(`/api/v1/category/${id}`, data);
  return response.data;
};

export const deleteCategory = async (id) => {
  console.log("delete:", id);
  const response = await api.delete(`/api/v1/category/${id}`);
  return response.data;
};
