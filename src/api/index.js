import axios from "axios";
import env from "dotenv"

export const api = axios.create({
  baseURL: env.API_URL,
  timeout: 12000
})