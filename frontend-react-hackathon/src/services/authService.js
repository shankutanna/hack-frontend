import apiClient from "../api/apiClient";

const login = async (email, password) => {
  const res = await apiClient.post("/auth/login", { email, password });
  return res.data;
};

export default { login };