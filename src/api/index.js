import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-organize180.onrender.com',
  timeout: 12000
})

