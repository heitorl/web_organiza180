import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",

  timeout: 12000,
});

// 'https://api-organize180.onrender.com',
