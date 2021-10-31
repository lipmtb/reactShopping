

import {GETCATEALL} from "../actionType";
import {homeHeaderCategory} from "network/category/headerCategory";
//cateAllLists

export function dispatchCategoryAllDataAction(){
    return (dispatch)=>{
        homeHeaderCategory().then((res)=>{
            // console.log("dispatchCategoryAllDataAction 获取所有分类",res.result);
            for(let i=0;i<res.result.length;i++){
                   
                        res.result[i].isShowSub=false;
                        res.result[i].displaySub=false;
                    
            }
            dispatch({
                type:GETCATEALL,
                data:{
                    cateAllLists:[...res.result]
                }
            })
        })
    }
}