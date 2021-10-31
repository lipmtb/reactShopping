
import React from "react";
import "./home.less";
import MainRun from "components/common/runimg/MainRun"
import MainRecomm from "./mainRecomm";
import HotBrand from "./hotBrand"

import {getMainRunBannerImg} from "network/common/adverBanner";//获取轮播图数据的网络请求


export default class Home extends React.Component {
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
        // console.log("home page render");
        return <div className="home-wrapper">
           
        
            <div className="container main-img-container">
                {/* 轮播图 */}
                 <MainRun imgLists={this.state.runImgLists} />  
                
                {/* 推荐分类和对应商品 */}
                <MainRecomm/>
              

                {/* 品牌 */}
                <HotBrand/>
            </div>
           
        </div>
    }
}












