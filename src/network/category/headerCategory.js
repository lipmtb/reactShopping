
import baseAxiosIns from "../baseRequest";

export function homeHeaderCategory(){
    return baseAxiosIns.get("/home/category/head");
}