import axios from "axios";

const instance = axios.create({
  // baseURL: "https://techsec.free.beeceptor.com",
  // baseURL: "https://techsecapi.free.beeceptor.com",
  // baseURL: "https://techsecapi2.free.beeceptor.com",
  baseURL: "https://techsec.netlify.app/api.php",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Cache-Control": "public, max-age=72000",
    // mode: "no-cors",
  },
});

export default instance;
