import axios from "axios";
// import jwtDecode from "jwt-decode";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// const $authHost = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
// })

// const authInstance = config => {
//     config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
//     return config
// }

// $authHost.interceptors.request.use(authInstance)

export default instance;

// // export default instance
