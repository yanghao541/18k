import React, { Component } from 'react'
import {HeaderWrapper} from './styled'
export default class Mine extends Component {
    render() {
        return (
            <HeaderWrapper>
            <div className="BK">
            <div className="left">
            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/user.png?v=201908261157"/>
            <span onClick={this.handledl.bind(this)}>登录/</span>
            <span>注册</span>
        </div>
        <div className="right">
            <img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/user_icon_set.svg?v=201908261157"/>
        </div>
        <div className="user_me">
            <div>
                <img src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/love.png?v=201908261157"/>
                <span>我的收藏</span>
            </div>
            <div>
                <img src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/foot.png?v=201908261157"/>
                <span>我的足迹</span> 
            </div>

            
        </div>
            </div>
               
                <div className="centent">
                <p>常用工具</p>
                <ul>
                    <li>
                        <img src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/tools1.png?v=201908261157"/>
                        <span>专属客服</span>
                    </li>
                    <li>
                        <img src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/tools2.png?v=201908261157"/>
                        <span>领券帮助</span>
                    </li>
                    <li>
                        <img src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/tools4.png?v=201908261157"/>
                        <span>意见反馈</span>
                    </li>
                </ul>
            </div>
            </HeaderWrapper>
        )
    }
    handledl(){
        this.props.history.push("/login")
    }
}