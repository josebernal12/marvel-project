import axios from "axios";

const clientAxios = axios.create({
  baseURL: "/v1/public",
});

export default clientAxios;
