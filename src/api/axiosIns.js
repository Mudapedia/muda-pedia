import axios from "axios";

const axiosIns = axios.create({
  baseURL: "http://localhost",
  withCredentials: true,
});

export default axiosIns;
