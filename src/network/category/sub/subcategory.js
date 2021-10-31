
import baseAxiosIns from "@/network/baseRequest";

//category/sub/filter?id=1017000 子分类产品
export function getSubCategory(id){
    return baseAxiosIns.get("/category/sub/filter",{
        params:{
            id
        }
    })
}