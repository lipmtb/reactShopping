import {LOGINUSER,LOGINOUT} from "../actionType.js";

const initState = {
  userinfo:{
      username:"",
      userid:""
  }
}
let userinfo=localStorage.getItem("userinfo");
if(userinfo){
    initState.userinfo.userid=userinfo.userid;
    initState.userinfo.username=userinfo.username;
}

export default function userinfoReducer(prevState=initState,action){
    console.log("userReducer init prevState is:",prevState);
    let {
        type,
        data
    } = action;
    switch(type){
        case LOGINUSER:{
            let {
                username,
                userid
            }=data;
            localStorage.setItem("userinfo",JSON.stringify({
                username,
                userid
            }))
            return {
                userinfo:{
                    username,
                    userid
                }
            }
          
        }
        case LOGINOUT:{
            localStorage.clear();
            return {
                userinfo:{
                    username:"",
                    userid:""
                }
            }
        }
        default: {
            return prevState;
        }
    }
}