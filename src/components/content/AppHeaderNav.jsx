import React from "react";
import { connect } from "react-redux";
import { NavLink,withRouter } from "react-router-dom";
import "./appHeaderNav.less";

/**
 * 头部导航公共组件和fixed固定
 */
class AppHeaderNav extends React.Component {
    state = {
        allCategoryLists: [],
        newPathName:"",
        canShowSlide:true
    }
    static getDerivedStateFromProps(newProps, newState) {
       
           //初始化主分类数据（好像多余的）
        if (newState.allCategoryLists.length === 0) {
            // console.log("getDerivedStateFromProps",newProps)
            return {
                allCategoryLists: newProps.allCategoryLists,
                newPathName:newProps.location.pathname
            }
        }


        //判断是否分类变化了
        // let reg=/^\/category\/(\d+)$/;//保证只在/category/xxx的路由下起作用
        let reg=/^\/category\//;
        if(reg.test(newProps.location.pathname)&&(newState.newPathName!==newProps.location.pathname)){

            // console.log("getDerivedStateFromProps",newState.newPathName,newProps.location.pathname);
            newState.newPathName=newProps.location.pathname;
            newState.canShowSlide=false;
            return newState;
        }
        return null;
    }

    //display变化
    calcDisplaySub = (displaySub) => {
      
        if (displaySub) {
            return {
               display:"block"
            }
        }
        return {
            display:"none"
        }
    }


    //下拉
    calcSubHeight=(isShowSubHeight)=>{
        if(!this.state.canShowSlide){//路由变化，收起
            
            return {
                maxHeight:0,
                paddingTop:0,
                paddingBottom:0
            }
        }
        if(isShowSubHeight){
            return {
                maxHeight:"200px",
                paddingTop:"10px",
                paddingBottom:"10px"
             }
        }else{
            return {
                maxHeight:0,
                paddingTop:0,
                paddingBottom:0
            }
         
        }
    }

// 鼠标滑进
    enterNavMain=(e)=>{
      
        let enterMainId=e.currentTarget.dataset.tarId;
    
        this.state.allCategoryLists.forEach((item)=>{
            if(item.id===enterMainId){
                // item.isShowSub=true;
                item.displaySub=true;
            }else{
                // item.isShowSub=false;
                item.displaySub=false;
            }
        })
        this.setState({
            allCategoryLists:this.state.allCategoryLists
        })
        if(this.timeoutleave){
            clearTimeout(this.timeoutleave);
        }
        this.timeoutenter=setTimeout(()=>{
            this.setState(({allCategoryLists})=>{
                allCategoryLists.forEach((item)=>{
                    if(item.displaySub){
                        item.isShowSub=true;
                    }else{
                        item.isShowSub=false;
                    }
                })
                return {
                    allCategoryLists
                }
            })
        },100)
    }

    //鼠标离开
    leaveMainNav=()=>{
        if(this.timeoutenter){
            clearTimeout(this.timeoutenter);
        }
        // console.log("leave",e.currentTarget.dataset.tarId);
        this.setState(({allCategoryLists})=>{
            let newLists=allCategoryLists.map((mainCate)=>{
                mainCate.isShowSub=false;
                return mainCate;
            })
            return {
                allCategoryLists:newLists
            }
        })

        this.timeoutleave=setTimeout(()=>{
            this.setState(({allCategoryLists})=>{
                allCategoryLists.forEach((item)=>{
                  if(!item.isShowSub){

                      item.displaySub=false;
                  }
                    
                })
                return {
                    allCategoryLists
                }
            })
        },1000)
    }


    //鼠标移动恢复下拉
    onMouseMoveGap=()=>{
        if(!this.state.canShowSlide){
            // console.log("mousemove");
            this.setState({
                canShowSlide:true
            })
        }
    }
    componentWillUnmount(){
            if(this.timeoutleave){
                clearTimeout(this.timeoutleave)
            }
            if(this.timeoutenter){
                clearTimeout(this.timeoutenter);
            }
    }
    render() {
        return <div className="container app-header-container">
            <div className="app-header-wrapper clearfix"  >
                <div className="header-img fl">
                    <h1>jjcc shopping</h1>
                </div>
                {/* 主分类 */}
                <ul className="nav-lists fl" onMouseMove={this.onMouseMoveGap}>
                    <li className="navlink-item fl"> 
                        <NavLink to="/">首页</NavLink>
                    </li>
                {
                     this.state.allCategoryLists.map((item) => {
                      return <li className="navlink-item fl" key={item.id} data-tar-id={item.id}
                     onMouseLeave={this.leaveMainNav}
                      onMouseEnter={this.enterNavMain}>
                     <NavLink to={"/category/" + item.id} activeClassName="navActiveClass">{item.name}</NavLink>
                 {/* 隐藏子分类 */}
                <div className="container subcate-wrapper">
                    {
                       
                            <ul className="hide-sub-lists clearfix" style={Object.assign(this.calcDisplaySub(item.displaySub),this.calcSubHeight(item.isShowSub))}>
                                {
                                    item.children.map((subitem) => {
                                        return <li className="sub-navlink-item fl" key={subitem.id}>
                                         
                                            <NavLink to={"/category/sub/" + subitem.id}>
                                               <img src={subitem.picture} alt={subitem.name} />
                                               <span>{subitem.name}</span>
                                             </NavLink>
                                        </li>
                                    })
                                }
                            </ul>

                    
                    }
                        </div>
                            </li>
                        })
                    }


                </ul>
   


                <div className="search-slot fl">
                    {
                        this.props.renderSearchCpn && this.props.renderSearchCpn("")
                    }
                </div>

                <div className="cart-slot fl">
                    {
                        this.props.cartCpn && this.props.cartCpn(this.props.cartCount)
                    }
                </div>

            </div>

        </div>
    }
}
//购物车数量
export default connect((state) => {

    return {
        cartCount: state.cart.cartLists.length,
        allCategoryLists: state.category.allCategoryLists
    }
})(withRouter(AppHeaderNav));
