import baseAxiosIns from "@/network/baseRequest";
/*
    categoryId: "1017000"
    inventory: false
    onlyDiscount: false
    page: 1
    pageSize: 20
    sortField: "publishTime"
    sortMethod: null
*/
export function getSubCateTemporary(categoryId,page,pageSize,sortField=null,sortMethod=null,inventory=false,onlyDiscount=false){
    return baseAxiosIns.post("/category/goods/temporary",{
        categoryId,page,pageSize,sortField,sortMethod,inventory,onlyDiscount
    })
}