import axios from "axios";

export const API = axios.create({
  baseURL: "https://localhost:5000",
  timeout: 16000,
});
