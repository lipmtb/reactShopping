import React from "react";

import {NavLink,withRouter} from "react-router-dom";

import "./breadLine.less";
import { connect } from "react-redux";

class BreadLine extends React.Component{

    state={
        newCateId:"",
        oldCateId:"",
        isShowOld:false
    }

    getCateName=(cateId)=>{
        let allCate=this.props.allCategoryLists;
        for(let i=0;i<allCate.length;i++){
            if(allCate[i].id===cateId){
                return allCate[i].name;
            }
        }

        return "";
    }
    static getDerivedStateFromProps(newProps,newState){
        // console.log("getDerivedStateFromProps",newState);
        if(newState.newCateId.length===0){
            return {
                newCateId:newProps.match.params.cateId,
                oldCateId:newProps.match.params.cateId
            }
        }

        //路由变化切换breadline
       if(newState.newCateId!==newProps.match.params.cateId){
           newState.oldCateId=newState.newCateId;
           newState.newCateId=newProps.match.params.cateId;
            newState.isShowOld=true;
           return newState;

       }
        // console.log("getDerivedStateFromProps",newState.newCateId,newProps.match.params.cateId);
        return null;
    }

    // 向右结束动画
    endTrans=()=>{
            if(this.state.isShowOld){
                this.setState({
                    isShowOld:false
                })
            }
    }
    render(){
        // console.log("allCategoryLists",this.props.allCategoryLists);
        let {isShowOld,newCateId,oldCateId}=this.state;
       
        return  <div className="category-bread-wrapper">
        <NavLink to="/">首页</NavLink>
        <i className="iconfont icon-angle-right"></i>
        <span onTransitionEnd={this.endTrans} className={isShowOld?'runbox torightClass':'runbox'}>{isShowOld?this.getCateName(oldCateId):this.getCateName(newCateId)}</span>
      </div>
    }
}

export default connect((state)=>({
    allCategoryLists: state.category.allCategoryLists
}))(withRouter(BreadLine))