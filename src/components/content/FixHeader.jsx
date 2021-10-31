
import React  from "react";
import HocScroll from "hoc/withPageScrollFix";
import AppHeaderNav from "./AppHeaderNav"
import "./FixHeader.less";

 class FixHeader extends React.Component{
    getFixStyle(){
        if(this.props.curScroll<200){
            return {
                display:"none"
            }
        }
        if(this.props.isSlideDown){
            return {
                top:0,
            }
        }
        return {
          display:"block"

        }
    }
    render(){
        return  <div id="fix-appheader-nav" style={this.getFixStyle()}>

              <AppHeaderNav></AppHeaderNav>
      </div>
    }
}

export default HocScroll(FixHeader)
