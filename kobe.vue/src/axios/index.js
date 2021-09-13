import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5600/',
});
api.defaults.withCredentials = true;
api.interceptors.response.use((res) => res.data);
export default api;
