import APIAxios from "./axiosApi.tsx";

class ApiApp {
    static ApisType = (url: string, method = 'post', params = {}) => {
        switch (method) {
            case "post":
                return APIAxios.post(url, params)
            case "get":
                return APIAxios.get<object>(url)
            case "get-params":
                return APIAxios.get<object>(url, {
                    params
                })
            case "delete":
                return APIAxios.delete(url)
        }
    }


    static getMovieLists = (params: { language: string; page: number; url: string }) => {
        return ApiApp.ApisType(`/movie/${params.url}`, "get-params", {language: params.language, page: params.page});
    }

    static getDetail = (id:number,language:string) => {
        return ApiApp.ApisType(`/movie/${id}`, "get-params", {language: language});
    }

    static createRequestToken=()=>{
        return ApiApp.ApisType(`/authentication/token/new`, "get");
    }

    static loginAction=(params:object)=>{
        return ApiApp.ApisType(`/authentication/token/validate_with_login`, "post",params);
    }
}

export default ApiApp;


