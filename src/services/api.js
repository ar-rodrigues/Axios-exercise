import http from "../http-common";

class ApiDataServices {
  getAll() {
    return http.get(`testAPI`);
  }
}

export default new ApiDataServices();