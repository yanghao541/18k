import React, { Component } from 'react'
import {BackWrapper} from "./styled"
import BScroll from "better-scroll"

export default class BackTopComponent extends Component {
    render() {
        return (
                <BackWrapper ref="Wrapper" onClick={this.handleBackToTop.bind(this)}>
                    ☝<span></span>
                </BackWrapper>
        )
    }
    componentDidMount(){
       this.scroll=new BScroll(this.refs.Wrapper,{
            click:true,
            tap:true
        })
    }
    handleBackToTop(){
        this.scroll.scrollTo("0px","0px",500)
        console.log( this.scroll)
    }
        
        
  
}
