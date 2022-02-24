import axios from "axios";

const instance = axios.create({
  // baseURL: "https://techsec.free.beeceptor.com/api",
  baseURL: "https://run.mocky.io/v3/438f17f3-3e1f-4fc4-ab6d-cf55838b4e33",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
