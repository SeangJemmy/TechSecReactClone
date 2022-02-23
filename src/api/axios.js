import axios from "axios";

const instance = axios.create({
  baseURL: "https://techsec.free.beeceptor.com/api",
  method: "get",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
