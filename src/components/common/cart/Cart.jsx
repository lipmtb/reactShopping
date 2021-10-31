import React from "react";


export default class Cart extends React.Component{
    render(){
        return <div className="cart-cpn-wrapper">
            <i className="iconfont icon-cart"></i>
            <span className="cart-count">{this.props.cartCount}</span>
        </div>
    }
}