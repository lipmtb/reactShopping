import React from "react";
import "./searchCpnStyle.less";
export default class SearchCpn extends React.Component{
    state={
        searchName:'searchcpn-wrapper'   
    }
    static getDerivedStateFromProps(newProps,newState){
        // console.log(" SearchCpn getDerivedStateFromProps",newProps,newState);
       if(newState.searchVal===undefined){
         return {
            searchVal:newProps.searchval
         }
       }
       return null;
       
    }


    // 输入
     onInSearch=(e)=>{
        // console.log("changeIn",e.currentTarget.value);
        this.setState({
            searchVal:e.currentTarget.value
        })
    }

    // 聚焦
    focusInSearch=()=>{
        this.setState({
            searchName:"searchcpn-wrapper focusSearchClass"
        })

    }
    //离开
    onBlurSearch=()=>{
        this.setState({
            searchName:"searchcpn-wrapper"
        })
    }
    render(){
        // console.log("search render",this.state);
        return <div className={this.state.searchName}>
            <input type="text" id="search-header-in" placeholder="垂钓" 
            onFocus={this.focusInSearch}
            onBlur={this.onBlurSearch}
            value={this.state.searchVal} onInput={this.onInSearch}/>
            <i className="iconfont icon-search"></i>
        </div>
    }
}