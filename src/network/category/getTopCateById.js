import baseAxiosIns from "../baseRequest";

// /category
export function getCategoryById(cateid){
    return baseAxiosIns.get("/category",{
        params:{
            id:cateid
        }
    })
}