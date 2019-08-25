import React, { Component } from 'react'
import Lib from "@common/Trouter/flagtabbar"
import {Route} from "react-router-dom"
import BefroEnter from "@common/beforeEnter"

class Trouter extends Component {
    render() {
        // 接收app页传过来的 item所有值，...rest等于剩下的值
        let {path,component,...rest}=this.props;
        return (
            <Lib {...rest}>
               <Route path={path} component={component} /> 
            </Lib>
        )
    }
}
// 上面引入全局校验
export default BefroEnter(Trouter)