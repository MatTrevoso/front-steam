import axios from "axios";
import { ENV } from "../../env";

export const API = axios.create({
  baseURL: ENV.API_URL,
  timeout: 16000,
});
