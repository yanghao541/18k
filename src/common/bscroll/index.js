import React, { Component } from 'react'
import {WrapperComponent} from './styled'
import BScroll from "better-scroll"

export default class BScrollComponent extends Component {
    render() {
        return (
            <WrapperComponent ref="wrapper">
                {this.props.children}
            </WrapperComponent>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper,{
            click:true,
            tap:true,
            pullDownRefresh:true
        })
    }
    handlepullingUp(cb){
        this.scroll.on("pullingUp",()=>{
            cb();
        })
    }
    handlepullingDown(cb){
        this.scroll.on("pullingDown",()=>{
            cb();
        })
    }
    handlefinishPullDown(){
        this.scroll.finishPullDown();
        this.scroll.refresh();
    }
}
