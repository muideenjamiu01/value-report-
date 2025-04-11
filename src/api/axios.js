// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://sandboxapi.360degree.testassessify.com/value/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optionally: Add interceptors to attach auth tokens
instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
