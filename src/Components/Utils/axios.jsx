import axios from "axios";

const Ecodes = [401, 403, 500]

const api = axios.create({
    baseURL: "http://localhost:8080",
});

api.interceptors.request.use(config => {
    const token = localStorage.token;
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
            window.location.replace("/login");
        }
        return Promise.reject(err);
    }
);

export default api;
