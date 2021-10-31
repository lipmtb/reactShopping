import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import {NavLink,withRouter} from "react-router-dom";
import "./subcateBread.less";

function BreadSubcate(props){
  
  
     let [oldSubName,dispatchOldSubName]=useState("");
     let [newSubName,dispatchNewSubName]=useState("");
    
     let [mainId,dispatchMainId]=useState("");
     let [mainName,dispatchMainName]=useState("");

     let [isShowOld,controlIsShowOld]=useState(false);


    useEffect(()=>{
        console.log("useEffect",props);
 
        //获取主分类的cateName,cateId,子分类subId
        
        let allCateLists=props.allCategoryLists;
        let subId=props.match.params&&props.match.params.subId;
    
        for(let mainItem of allCateLists){
            let isMain=false;
        
            for(let subItem of mainItem.children){
                if(subItem.id===subId){
                    isMain=true;
                    dispatchOldSubName(newSubName); 
                    dispatchNewSubName(subItem.name);
                    controlIsShowOld(true);
                  
                }
            }

            if(isMain){
        
                dispatchMainId(mainItem.id);
                dispatchMainName(mainItem.name);
            }
        }

     
        return ()=>{
            console.log("clearEffect");
        }
    },[props])


    let endTrans=()=>{
        console.log("endTrans",isShowOld);
        if(isShowOld){
            controlIsShowOld(false);
        }
    }
    console.log("*********render**********",oldSubName,"newName:",newSubName);
    return <div className="bread-subcatewrapper">
        <NavLink to="/">首页</NavLink>
        <i className="iconfont icon-angle-right"></i>
        <NavLink to={'/category/'+mainId}>{mainName}</NavLink>
        <i className="iconfont icon-angle-right"></i>
        <span  onTransitionEnd={endTrans} className={isShowOld?"subcate-text torightclass":"subcate-text"}>{isShowOld?oldSubName:newSubName}</span>
    </div>
}


export default connect((state)=>({
    allCategoryLists: state.category.allCategoryLists
}))(withRouter(BreadSubcate));