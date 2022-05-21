import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5000
});

export default axiosApi;