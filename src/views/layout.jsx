
import React, { lazy } from "react";
import TopNav from "@/components/TopNav"
import FooterEnd from "@/components/FooterEnd";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { dispatchCategoryAllDataAction } from "jjccredux/actions/getAllCateAction";

import AppHeaderNav from "components/content/AppHeaderNav";//headerNav,需要两个插槽
import FixHeaderNav from "components/content/FixHeader";
import SearchCpn from "components/common/SearchCpn";//搜索插槽
import CartCpn from "components/common/cart/Cart";//购物车插槽



import "./layout.less";
const homePage = lazy(() => import("views/home"))
const categoryPage = lazy(() => import("views/category"))
const subcatePage = lazy(() => import("views/subcategory"))
const productPage = lazy(() => import("views/product"))



/**
 * 基本结构组件，首页，分类，产品都需要 
 * dispatchCategoryAllDataAction 获取所有分类数据存储在redux
 */
class Layout extends React.Component {
    
    componentDidMount() {
        this.props.getCategoryAllLists();
      
        
    }
    // 搜索框插槽定义（首页需要，分类不需要）
    getSearchCpn(val) {
        return <SearchCpn searchval={val} />
    }
    getCartCpn(count) {
        return <CartCpn cartCount={count} />
    }
    render() {
        return <div className="layout-wrapper">
            <TopNav />
            {/* header头部导航 */}
            <AppHeaderNav renderSearchCpn={this.getSearchCpn} cartCpn={this.getCartCpn}></AppHeaderNav>
            {/* 固定定位的大分类 */}
            <FixHeaderNav/>

           
         
            <Switch>
                <Route exact path="/category/:cateId" component={categoryPage}></Route>
                <Route exact path="/category/sub/:subId" component={subcatePage}></Route>
                <Route exact path="/product/:productId" component={productPage}></Route>
                <Route path="/" component={homePage}></Route>
            </Switch>
            <FooterEnd />
        </div>
    }
}
export default connect(() => ({}), {
    getCategoryAllLists: dispatchCategoryAllDataAction
})(Layout)