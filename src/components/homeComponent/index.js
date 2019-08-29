import React, { Component } from 'react'
import { HomeWrapper } from "./styled"

export default class HomeCom extends Component {
    render() {
        return (
            <HomeWrapper>
                <div>
                    <div className="info">
                        <div className="info_1">
                            <div className="info_img">
                                <img src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/user.png?v=201908271737" alt="" />
                            </div>
                            <div className="user_type">
                                <a href="/#/baoyou">登录/注册</a>
                            </div>
                        </div>
                        <div className="user_main">
                            <div className="user_me">
                                <a href="#">
                                    <img src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/love.png?v=201908271737" alt="" />
                                </a>
                                <a href="#">
                                    <img src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/foot.png?v=201908271737" alt=""/>
                                </a>
                            </div>
                            <div className="common_card">
                                <p>常用工具</p>
                                <ul>
                                    <li>领券帮助</li>
                                    <li>专属客服</li>
                                    <li>意见反馈</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="user_main"></div>
                </div>
            </HomeWrapper>
        )
    }
}
