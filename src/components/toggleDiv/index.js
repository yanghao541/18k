import {ToggleWrapper} from "./styled";
import React, { Component } from 'react'

export default class ToggleDiv extends Component {
    render() {
        return (
            <ToggleWrapper>
                <div className="cent">
                    <h1>复制淘宝口令购买</h1>
                    <p>复制框内整段文字，打开淘宝即可领券购买。</p>
                    <p>长按文字区域手动复制淘口令</p>
                    <button onClick={this.handleClickTan.bind(this)}>一键复制</button>
                </div>
            </ToggleWrapper>
        )
    }
    handleClickTan(){
        alert("已复制")
    }
}
