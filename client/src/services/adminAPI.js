import axios from "axios";

export const getPendingNGOs = async () => {
  const res = await axios.get("/api/admin/pending-ngos");
  return res.data;
};

export const verifyNGO = async (id, approved) => {
  const res = await axios.post(`/api/admin/verify-ngo/${id}`, { approved });
  return res.data;
};
