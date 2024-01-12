import axios from "axios";

const axiosIns = axios.create({
  baseURL: "https://mudapedia.vercel.app/api",
  withCredentials: true,
});

export default axiosIns;
