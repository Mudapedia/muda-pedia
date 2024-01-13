import axiosIns from "./axiosIns";

class Content {
  static Add(body) {
    return axiosIns.post("/admin/dashboard/content", body);
  }
  static All() {
    return axiosIns.get("/user/content");
  }
  static Del(id) {
    return axiosIns.delete(`/admin/dashboard/content/${id}`);
  }
  static Update(id, body) {
    return axiosIns.put(`/admin/dashboard/content/${id}`, body);
  }
}

export default Content;
