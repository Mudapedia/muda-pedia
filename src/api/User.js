import axiosIns from "./axiosIns";

class User {
  static Add(body) {
    return axiosIns.post("/admin/dashboard/content", body);
  }
  static All(offsite = 0, limit = 12, src = "") {
    return axiosIns.get(
      `/user/content?offset=${offsite}&limit=${limit}&src=${src}`
    );
  }
}

export default User;
