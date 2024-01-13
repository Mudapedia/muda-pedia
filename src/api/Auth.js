import axiosIns from "./axiosIns";

class Auth {
  static Login(body) {
    return axiosIns.post("/admin/login", body);
  }
  static IsLogin() {
    return axiosIns.get("/admin/dashboard");
  }
  static Logout() {
    return axiosIns.post("/admin/logout");
  }
}

export default Auth;
