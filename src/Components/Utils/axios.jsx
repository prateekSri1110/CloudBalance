import axios from "axios";

const Ecodes = [401, 500]

export const api = axios.create({
    baseURL: "http://localhost:8080",
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    res => res,
    err => {
        const status = err?.response?.status;

        if (status && Ecodes.includes(status)) {
            localStorage.removeItem("token");
            window.location.replace("/");
        }

        if (status && status == 402) window.location.replace("/unauthorized");
        
        return Promise.reject(err);
    }
);

export default api;
