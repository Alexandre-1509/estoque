import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.211.22:3000",
});

export default api;
