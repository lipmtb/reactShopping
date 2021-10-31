

import { useEffect,useState } from "react";

/**
 * 
 * @param {*} 触底调用cb回调函数
 * 
 */
export default function useScrollReachBottom(cb){
    let [sTop,dispatchsTop]=useState(0);
    //  console.log("useScrollReachBottom hooks render",sTop);//render重新执行 ,sTop正常
    
    function pageScrollHandle(e){
     
        dispatchsTop(e.currentTarget.scrollY);

    }

    (function onReachBottomHandle(s){
    
        let pageHeight=document.body.scrollHeight;
        let vh=document.documentElement.clientHeight;
        console.log(pageHeight,vh);
        if(s>=pageHeight-vh){
            cb.call(this);
        }
    })(sTop)

    useEffect(()=>{
        console.log("mounted",this);
        document.defaultView.addEventListener("scroll",pageScrollHandle);

        return ()=>{
            console.log("unmounted");
            document.defaultView.removeEventListener("scroll",pageScrollHandle);
        }
    },[]);

    return [sTop];
}