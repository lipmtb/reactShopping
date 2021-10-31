// /home/new/multi
// 新鲜好物-PC

import baseAxiosIns from "../baseRequest";

export function getNewGoods(limit){
    return baseAxiosIns.get("/home/new",{
        params:{
            limit:limit
        }
    });
}