
import baseAxiosIns from "../baseRequest";
//人气推荐
export function getHotGoods(){
    return baseAxiosIns.get("/home/hot")
}