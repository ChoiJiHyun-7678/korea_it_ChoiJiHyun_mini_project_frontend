import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:8080/api" });

export const loginUser = (user) => api.post("/login", user);
export const registerUser = (user) => api.post("/register", user);
