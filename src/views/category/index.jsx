
import React from "react";
import MainRun from "components/common/runimg/MainRun"
import {getMainRunBannerImg} from "network/common/adverBanner";//获取轮播图数据的网络请求

import BreadLine from "./breadTop/BreadLine";

import "./category.less";
 class Category extends React.Component {
    state={
        runImgLists: []
        
    }

    componentDidMount(){
        getMainRunBannerImg().then((res)=>{
            // console.log("获取轮播图数据",res.result);
            this.setState({
                runImgLists:res.result
            })
       })
    }


    render() {
        
        // console.log("location",this.props);
        return <div className="category-wrapper">
            {/* 面包屑 */}
            <BreadLine/>
             {/* 轮播图 */}
            <div className="container main-img-container">

                <MainRun imgLists={this.state.runImgLists} />
            </div>
        </div>
    }
}

export default Category;