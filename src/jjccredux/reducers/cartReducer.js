import {ADDCART} from "../actionType.js";

const initState = {
  cartLists:[]
}


export default function cartReducer(prevState=initState,action){

    let {
        type,
        data
    } = action;
    switch(type){
        case ADDCART:{
            let {
               cartData
            }=data;
            let prevCartLists=prevState.cartLists;
            return {
                cartLists:[...prevCartLists,cartData]
            }
          
        }
      
        default: {
            return prevState;
        }
    }
}