import axios from 'axios';
import { AppError } from '@utils/AppError';

const api = axios.create({
  baseURL: 'http://192.168.10.104:3333'
});

api.interceptors.response.use(response => response, error => {
  if (error.response && error.response.data) {
    return Promise.reject(new AppError(error.response.data.message));
  } else {
    return Promise.reject(error);
  }
})

// api.interceptors.response.use((response) => {
//   return response;
// }, (error) => {
//   console.log("Interceptor response error: ", error);
//   return Promise.reject(error);
// });

// api.interceptors.request.use((config) => {
//   console.log("Dados enviados: ", config.data);
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

export { api };