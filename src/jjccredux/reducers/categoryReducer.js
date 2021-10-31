
import {GETCATEALL} from "../actionType"
const initState={
    allCategoryLists:[]
}

export default function categoryAllReducer(prevState=initState,action){
    let {
        type,
        data
    } = action;
    switch(type){
        case GETCATEALL:{
            let {
               cateAllLists
            }=data;
          
            return {
                allCategoryLists:[...cateAllLists]
            }
          
        }
      
        default: {
            return prevState;
        }
    }
}