import axios from "axios";

const instance = axios.create({
  // baseURL: "https://seangjemmy.github.io/TechSecAPI/",
  baseURL: "https://techsec.free.beeceptor.com/api",
  method: "get",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Header": "max-age=360000",
  },
});

export default instance;
