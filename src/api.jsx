import axios from "axios";

const api = axios.create({
  baseURL: "https://api.cantinasenai.com.br",
  timeout: 30000,
  params: {
    key: "07ad11b5bb6e2de98a535070ba93cdaf"
  }
});

export default api;