import axios from "axios";

export default axios.create({
  baseURL: "https://seangjemmy.github.io/TechSecAPI/",
  method: "get",
  timeout: 1000,
  withCredentials: false,
  header: {
    "Access-Control-Allow-Origin": "true",
  },
});
