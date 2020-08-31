
import axios from 'axios'
import { message } from 'antd';

const service = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
  timeout: 5000
});

service.interceptors.request.use(
  (config) => {
    return config
  }, (error) => {
    return Promise.reject(error)
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data
  }, (error) => {
    message.error('网络请求失败')
    return Promise.reject(error)
  }
);

export default service;
