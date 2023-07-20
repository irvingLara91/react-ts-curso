import axios from 'axios';
export const domainApi =  import.meta.env.VITE_DOMAIN_BASE ? import.meta.env.VITE_DOMAIN_BASE : ""

 const typeHttp =  "https"

 const urlFull = `${typeHttp}://${domainApi}`

const config = {
    baseURL: `${urlFull}`,
};

const APIAxios = axios.create(config);

APIAxios.interceptors.request.use(
    async function (config) {
        const token =  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTZlYWM5YzY4ODM3NzM4ZThhODAzZmUyY2I3OTBiNSIsInN1YiI6IjY0YTg1ODhkYjY4NmI5MDE1MDBlYjQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1WxfLYLrOgXE8813-geiYNzFfehq-l37Kluyh72Bbmg";
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
APIAxios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    /**'Aqui interceptando el error'**/
    if (error.response.status === 403 || error.response.data.message === '401 Unauthorized') {
        window.location.href = "/";
    }
    return Promise.reject(error);
});

export default APIAxios;
