import {LOGINUSER,LOGINOUT} from "../actionType.js";

const initState = {
  userinfo:{
      username:"",
      userid:"",
      token:""
  }
}
let userinfo=localStorage.getItem("userinfo");
if(userinfo){
    userinfo=JSON.parse(userinfo);
    initState.userinfo.userid=userinfo.userid;
    initState.userinfo.username=userinfo.username;
    initState.userinfo.token=userinfo.token;
}

export default function userinfoReducer(prevState=initState,action){
    // console.log("userReducer init prevState is:",prevState);
    let {
        type,
        data
    } = action;
    switch(type){
        case LOGINUSER:{
            let {
                username,
                userid,
                token
            }=data;
            localStorage.setItem("userinfo",JSON.stringify({
                username,
                userid,
                token
            }))
            return {
                userinfo:{
                    username,
                    userid,
                    token
                }
            }
          
        }
        case LOGINOUT:{
            localStorage.removeItem("userinfo");
            return {
                userinfo:{
                    username:"",
                    userid:"",
                    token:""
                }
            }
        }
        default: {
            return prevState;
        }
    }
}