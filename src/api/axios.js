import axios from "axios";

const instance = axios.create({
  baseURL: "https://seangjemmy.github.io/TechSecAPI/",
  method: "get",
  timeout: 1000,
});

export default instance;
