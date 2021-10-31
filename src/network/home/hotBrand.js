//热门品牌

import baseAxiosIns from "../baseRequest";

export function getHotBrandLimit(){
    return baseAxiosIns.get("/home/brand",{
        limit:10
    })
}