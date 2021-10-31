//  /home/goods

import baseAxiosIns  from "../baseRequest";


export function getHomeCateGoods(){
    return baseAxiosIns.get("/home/goods");
}

