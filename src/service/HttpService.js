import axios from "axios";
import config from "../config/config";

const httpService = axios.create({
  baseURL: config[import.meta.env.VITE_APP_MODE].url,
  timeout: 100000000,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0IjoiVGVuIiwiY2xpZW50IjoiZGVtby1zYWkifQ.O9M7AJ7mC97pUX4TgGlVxUTBbD9Pxe5J7fcT2tCOSd4",
  },
});

export default httpService;
