import axios  from "axios";

export async function getAreaJsonHandle(){

   let proms=await axios.get("https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json");
   return proms;
}