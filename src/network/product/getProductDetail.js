import baseAxiosIns from "../baseRequest";


export function getProductData(pId){
    return baseAxiosIns.get("/goods",{
        params:{
            id:pId
        }
    })
}