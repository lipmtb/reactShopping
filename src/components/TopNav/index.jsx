
import React,{Fragment} from "react";
import {connect} from "react-redux";
import {createLoginUserAction,createLoginOutAction} from "jjccredux/actions/loginAction";



import  "./TopNav.less";

 class TopNav extends React.Component {

    toLogin=()=>{
        this.props.loginAction({
            username:"jjcc",
            userid:"123456",
            token:"tokenafafadfsfs"
        })
    }

    toLogout=()=>{
        this.props.loginOutAction()
    }

    render() {
        // console.log("TopNavRender",this.props.userinfo);
        return <nav  className="container app-top-nav clearfix">
          
                <ul className="nav-top-lists fr">
                    {
                        this.props.userinfo.userid?<Fragment>
                       <li className="nav-top-item fl">
                           <a href="#!">
                             <i className="iconfont icon-user"></i>
                             <span id="username-text">{this.props.userinfo.username}</span>
                           </a>
                        </li><li className="nav-top-item fl"><a href="#!" onClick={this.toLogout}>退出登录</a></li>
                        </Fragment>:<Fragment>
                            <li className="nav-top-item fl"><a href="#!" onClick={this.toLogin}>请先登录</a></li>
                           <li className="nav-top-item fl"><a href="#!">免费注册</a></li>
                        </Fragment>
                          
                    }
                    
                  
               
                    <li className="nav-top-item fl"><a href="#!">我的订单</a></li>
                    <li className="nav-top-item fl"><a href="#!">会员中心</a></li>
                    <li className="nav-top-item other-li fl">
                       <a href="#!">其他</a>
                       <ul className="other-lists">
                           <li><a href="#!">帮助中心</a></li>
                           <li><a href="#!">关于我们</a></li>
                       </ul>
                    </li>

                </ul>
           </nav>
    }
}

export default connect((state)=>({userinfo:state.user.userinfo}),(dispatch)=>{
    return {
        loginAction:(data)=>{
            dispatch(createLoginUserAction(data))
        },
        loginOutAction:()=>{
            dispatch(createLoginOutAction())
        }
    }
})(TopNav);