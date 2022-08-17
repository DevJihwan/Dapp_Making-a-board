import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=UTF-8"
    },
    withCredentials: true,
});

export default API;