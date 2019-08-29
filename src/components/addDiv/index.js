import React, { Component } from 'react'
import { AddShoppingWrapper } from "./styled"
import {connect} from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect';
import {withRouter} from "react-router-dom"

class AddDiv extends Component {
    render() {
        console.log(this.props,1111)
        return (
            <AddShoppingWrapper>
                <div>
                    <div className="header">
                        <p>￥88.00</p>
                        <p>已选<span>活力橙坚果礼包1373g/7袋,1个</span></p>
                    </div>
                    <span className="cha" onClick={this.props.handleShowDown.bind(this)}>X</span>
                    <div className="imgCom">
                        <img src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/48165/30/8732/289938/5d63a24eEcf6a4636/b642077a66e7d327.jpg!q80.dpg.webp" alt="" />
                    </div>
                    <div className="delicise">口味</div>
                    <div className="goods_info">
                        <span>活力橙坚果礼包1373g/7袋子</span>
                        <span>火红b坚果礼包2088g/11袋</span>
                    </div>
                    <div className="Num_Add">
                        <p>
                            <span>数量</span>
                            <span>
                                <button className="add">+</button>
                                    <input type="text" value="1" onChange={this.handleChangeNum}/>
                                <button className="reducer">-</button>
                            </span>
                        </p>
                    </div>
                    <div className="lipin">礼品购</div>
                    <button className="shop_footer">确认</button>
                </div>
            </AddShoppingWrapper>
        )
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddDiv))