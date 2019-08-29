import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"


export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div className="header_1">＜</div>
                <div className="header_c">
                    <img src="https://cmsstatic.dataoke.com//web/nine_special/images/nine_title.svg?v=201908241503" alt=""/>
                </div>
                <div className="header_r iconfont">&#xe67a;</div>
            </HeaderWrapper>
        )
    }
}
