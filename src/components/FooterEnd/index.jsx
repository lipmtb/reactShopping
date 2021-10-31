import React from "react";

import "./footerEndStyle.less";
import myimg from "assets/images/title.png";


export default class FooterEnd extends React.Component {

    render() {
        return <div className="app-footer-wrapper">
            <div className="contact">
                <div className="container">
                    <dl>
                        <dt>服务</dt>
                        <dd><i className="iconfont icon-kefu"></i> 在线客服</dd>
                        <dd><i className="iconfont icon-question"></i> 问题反馈</dd>
                    </dl>
                    <dl>
                        <dt>联系</dt>
                        <dd><i className="iconfont icon-weixin"></i> 公众号</dd>
                        <dd><i className="iconfont icon-weibo"></i> 微博</dd>
                    </dl>
                    <dl>
                        <dt>下载APP</dt>
                        <dd className="qrcode"><img src={myimg} alt="goodtite"/></dd>
                        <dd className="download">
                            <span>立马下载APP</span>
                            <a href="#!">下载页面</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>服务热线</dt>
                        <dd className="hotline">1008010010110<small>周一至周日 8:00-18:00</small></dd>
                    </dl>
                </div>
            </div>
        </div>
    }
}