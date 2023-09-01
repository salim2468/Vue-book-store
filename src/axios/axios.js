import axios from "axios";
const  axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers:{
    "Content-Type":"application/json"
  }
});

axiosInstance.interceptors.request.use(function(config){
  
  const accessToken = localStorage.getItem('adminToken');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
})


export default axiosInstance;