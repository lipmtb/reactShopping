import {ADDCART} from "../actionType.js";


//添加购物车
export function createAddCartAction(data){
    return {
        type:ADDCART,
        data
    }
}