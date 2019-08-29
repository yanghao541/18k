import React, { Component } from 'react'
import {FooterWrapper} from "./styled"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {mapStateToProps, mapDispatchToProps } from './connet';


class Footer extends Component {
    render() {  
        return (
            <FooterWrapper>
                <div>
                    <button onClick={this.props.handleToggle.bind(this)}>口令购买</button>
                    <button onClick={this.props.handleToLingquan.bind(this)}>立即购买</button>
                </div>
            </FooterWrapper>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Footer))
