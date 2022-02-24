import axios from "axios";

const instance = axios.create({
  // baseURL: "https://techsec.free.beeceptor.com",
  // baseURL: "https://techsecapi.free.beeceptor.com",
  baseURL: "https://techsecapi2.free.beeceptor.com",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
