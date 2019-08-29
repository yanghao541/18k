import React, { Component } from 'react'
import {DetHeaderWrapper} from "./styled"
import {withRouter} from "react-router-dom"

 class DetHeader extends Component {
    render() {
        return (
        <DetHeaderWrapper>
                <div className="header_1" onClick={this.handleBack.bind(this)}>＜</div>
                <div className="header_c">
                </div>
                <div className="header_r iconfont">&#xe67a;</div>
        </DetHeaderWrapper>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
}
export default withRouter(DetHeader)
