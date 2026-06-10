import api from "../../services/api";

export const createTransaction = async (data) => {
  const response = await api.post("/api/v1/transaction", data);
  return response.data;
};

export const getAllTransactions = async (data) => {
  const response = await api.get("/api/v1/transaction", data);
  return response.data;
};

export const getTransactionById = async (id) => {
  console.log("Byid", id);
  const response = await api.get(`/api/v1/transaction/${id}`);
  return response.data;
};

export const updateTransaction = async (id, data) => {
  const response = await api.put(`/api/v1/transaction/${id}`, data);
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await api.delete(`/api/v1/transaction/${id}`);
  return response.data;
};
