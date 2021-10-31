

import baseAxiosIns from "../baseRequest";

//获取广告图片
export function getMainRunBannerImg(){
    return baseAxiosIns.get("/home/banner");
}