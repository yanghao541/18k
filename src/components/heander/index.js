import React, { Component } from 'react'
import {HeaderWrapper} from './styled'
export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div className="header_l">&lt;</div>
                <div className="header_r">
                    <input type="text" placeholder="输入商品名或粘贴宝贝标题搜索" />
                </div>
            </HeaderWrapper>
        )
    }
}
