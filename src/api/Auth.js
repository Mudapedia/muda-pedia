import axiosIns from "./axiosIns";

class Auth {
  static Login(body) {
    return axiosIns.post("/admin/login", body);
  }
  static IsLogin() {
    return axiosIns.get("/admin/dashboard");
  }
}

export default Auth;
