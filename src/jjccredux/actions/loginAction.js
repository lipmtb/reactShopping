
import {LOGINUSER,LOGINOUT} from "../actionType";

export function createLoginUserAction(data){
    return {
        type:LOGINUSER,
        data
    }
}

export function createLoginOutAction(){
    return {
        type:LOGINOUT
    }
}