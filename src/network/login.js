import baseAxiosIns from "./baseRequest";

export  function login(){
    return baseAxiosIns.get("/userlogin");
}