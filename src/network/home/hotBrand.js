//ç­éšćç

import baseAxiosIns from "../baseRequest";

export function getHotBrandLimit(){
    return baseAxiosIns.get("/home/brand",{
        limit:10
    })
}