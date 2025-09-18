import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:8080/api" });

export const addTask = (username, task) => api.post(`/tasks/${username}`, task);
export const getTasks = (username) => api.get(`/tasks/${username}`);
