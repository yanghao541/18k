import React, { Component } from 'react'
import { LoginWrapper } from "./styled"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect"
import {withRouter} from "react-router-dom"



class LoginComponent extends Component {
    render() {
        let{inputPhone,inputMsg,inputPassWord} =this.props
        return (
            <LoginWrapper>
                <div className="zhuce1">
                    <div className="zhuce">
                        <span onClick={this.handleBack.bind(this)}> ☜ </span>
                        注册</div>
                </div>
                <form>
                    <div className="phoneNum">
                        <input type="text" placeholder={inputPhone} onChange={this.props.handleOnchange.bind(this,1)}/>
                    </div>
                    <div className="phoneMsg"><input type="text" placeholder={inputMsg} onChange={this.props.handleOnchange.bind(this,2)}/></div>
                    <div className="phonePassword"><input type="text" placeholder={inputPassWord} onChange={this.props.handleOnchange.bind(this,3)}/></div>
                    <div className="zhuce-btn">
                        <input type="button" value="注册" onClick={this.props.handleClick.bind(this)}/>
                    </div>
                    <div className="agree">点击“注册”表示您已同意
                        <a href="#">《领券吧用户协议》</a>
                    </div>
                </form>
            </LoginWrapper>
        )
    }

    handleBack(){
        this.props.history.goBack()
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginComponent))
