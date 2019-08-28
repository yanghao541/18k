import React, { Component } from 'react'
import {Wrapp} from "./styled"
import BScroll from "better-scroll"
export default class Betterscroll extends Component {
    render() {
        return (
            <Wrapp ref="wpp">
                {this.props.children}
            </Wrapp>
        )
    }
    componentDidMount(){
        this.scroll=new BScroll(this.refs.wpp,{
            click:true,
            tap:true,
            pullUpLoad:true,
            apullDownRefresh:true,
        })
    }
    headpullUpLoad(callback){
        this.scroll.on("pullingUp",()=>{
            callback()
        })
    }
    headrest(){
        this.scroll.finishPullUp();
        this.scroll.refresh();
    }
}






