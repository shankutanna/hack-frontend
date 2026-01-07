import apiClient from "../api/apiClient";

const getStats = async () => {
  const res = await apiClient.get("/dashboard/stats");
  return res.data;
};

export default { getStats };