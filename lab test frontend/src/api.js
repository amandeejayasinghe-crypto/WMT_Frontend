import axios from "axios";

// Base URL for backend
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000"
});

// Get all items
export const getItems = () => API.get("/items");

// Add new item
export const addItem = (item) => API.post("/items", item);