import React, { Component } from 'react'
import { HeaderWrapper } from './styled'
export default class Login extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div className="left" onClick={this.handleH.bind(this)}>
                    &lt;
                </div>
                <p>登录</p>

                <div className="input">
                    <from>
                        <div className="inputText">
                            手机号码：<input text="text" placeholder="手机号码"/>
                        </div>
                        <div className="inputText">
                            密       码：<input text="password " placeholder="密码"/>
                        </div>
                    </from>
                </div>
                <div class="dl">
                    <p>登录</p>
                </div>
                <span>还没注册账号呢？<a className="col-link">瞅啥呢麻溜注册啊</a></span>
            </HeaderWrapper>
        )
    }
    handleH(){
        this.props.history.goBack()
    }
}