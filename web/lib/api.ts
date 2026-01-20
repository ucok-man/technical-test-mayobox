import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/v1`,
  withCredentials: true,
  // timeout: 5000,
});
