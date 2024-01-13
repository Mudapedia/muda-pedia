import axiosIns from "./axiosIns";

class Content {
  static Add(body) {
    return axiosIns.post("/admin/dashboard/content", body);
  }
}

export default Content;
