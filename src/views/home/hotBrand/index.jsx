
import { useEffect,useState,useRef } from "react";
import {NavLink} from "react-router-dom";

import {getHotBrandLimit} from "network/home/hotBrand";
import "./hotBrand.less";

export default function HotBrandRun(){

    let domBox=useRef(null);

    // 品牌数据
    let [hotBrandLists,setHotBrand]=useState([]);
    
    //左右按钮控制
    let [curLeft,setNewLeft]=useState(0);
    let [enabledRight,calcRightBtn]=useState(true);
    let [enabledLeft,calcLeftBtn]=useState(false);

    useEffect(()=>{
        // console.log(" HotBrandRun useEffect");

        getHotBrandLimit().then((res)=>{
            // console.log("热门品牌",res.result);
            setHotBrand(res.result);
        })
    },[])


    //ul左右运动时设置按钮是否禁用
    useEffect(()=>{
        //  console.log("curLeft useEffect",domBox.current.clientWidth);
        let containerWd=domBox.current.clientWidth;
        let singleWd=250;
        let totalLen=hotBrandLists.length;
        if(curLeft<0){
            calcLeftBtn(true);
        }else if(curLeft>=0){
            calcLeftBtn(false);
        }

        let maxLeftIn=Math.floor(singleWd*totalLen/containerWd)*containerWd;
        // console.log("maxLeftIn",curLeft,-maxLeftIn);

        if(curLeft<0&&curLeft<=-maxLeftIn){
            calcRightBtn(false);
        }else{
            calcRightBtn(true);
        }
        
    },[hotBrandLists,curLeft])


    function toShowLeftImg(){
        if(enabledLeft){
            let containerWd=domBox.current.clientWidth;
            setNewLeft((curLeft)=>{
                return curLeft+containerWd;
            })
        }
    }

    function toShowRightImg(){
        if(enabledRight){
            // console.log("toRight");
            let containerWd=domBox.current.clientWidth;
            setNewLeft((curLeft)=>{
                return curLeft-containerWd;
            })
        }
    }
    // console.log("render brand",hotaBrandLists.length);
    return <div className="hot-brand-wrapper">
        <div className="top-control clearfix">

            <h3 className="hot-brand-text fl">热门品牌</h3>
            <span className="brand-subtext fl">国际品质，质量保证</span>
            <div className="right-control-btn fr">
                <span className={enabledLeft?"iconfont icon-angle-left":"iconfont icon-angle-left disabledBtn"} onClick={toShowLeftImg}></span>
                <span className={enabledRight?"iconfont icon-angle-right":"iconfont icon-angle-right disabledBtn"} onClick={toShowRightImg}></span>
            </div>
        </div>

        <div className="brand-wrapper" ref={domBox}>
          <ul className="hot-brand-lists clearfix" style={{left:curLeft+"px"}}>
                {
                    hotBrandLists.map((brand)=>{
                        return <li className="brand-img-item fl" key={brand.id}>
                            <NavLink to="/">
                                <img className="brand-img-show" src={brand.picture} alt={brand.name} />
                            </NavLink>
                        </li>
                    })
                }
           </ul>
        </div>
         
    </div>
}