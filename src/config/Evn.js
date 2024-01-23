import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.123.189:8080/api",
});

export const config = async () => {
  const token = null;

  return {
    headers: {
      Authorization: `Bearer ${token}`,

      Accept: "application/json",
    },
  };
};

export const authConfig = async (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,

      Accept: "application/json",
    },
  };
};

export default apiClient;
