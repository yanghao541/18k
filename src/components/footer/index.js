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
                    <button onClick={this.handleToLingquan.bind(this)}>添加到购物车</button>
                </div>
            </FooterWrapper>
        )
    }
    handleToLingquan(){
        this.props.history.push('/lingquan')
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Footer))
