import axios from "axios";
import { useRootStore } from "../store/rootStore";
import config from "../config/config";

const httpService = axios.create({
  baseURL: config[import.meta.env.VITE_APP_MODE].url,
  timeout: 100000000,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

httpService.interceptors.request.use(
  (config) => {
    const rootStore = useRootStore();
    // Do something before request is sent
    config.headers["Authorization"] = "Bearer " + rootStore.token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default httpService;
