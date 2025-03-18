import axios from "axios";
import _ from "lodash";

const instance = axios.create({
  baseURL: 'https://tote-store-be.onrender.com',

  withCredentials: true,
  // handle send token cookie into backend
});

instance.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});

export default instance;
