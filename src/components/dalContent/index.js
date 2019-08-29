import React, { Component } from 'react'
import { DalConWrapper } from "./styled"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "./connect"
import {IndexList_api} from "@api/indexList"
class DalContent extends Component {
    constructor(){
        super();
        this.state={
            detailList:[]
        }
    }
    render() {
        let{detailList} =this.state
        return (
            <DalConWrapper>
                <div>
                {
                    detailList.map((item,index)=>(
                        <div className="wrapper" key={index}>
                        <img src={item.icon} />
                        </div>
                    ))
                }
                <div className="goods_info">
                    <h1>
                        <span>天猫</span>
                        粉刺针去黑头神器祛痘暗疮工具套装
                    </h1>
                </div>
                <div className="info_price">
                    <div>
                        <div>劵后价<span>￥35</span></div>
                        <div>已售
                            <span>3.8万</span>件
                        </div>
                    </div>
                    <div>
                        <div>天猫价￥38
                            
                        </div>
                        <div><span>包邮</span>
                        <span>运费险</span></div>
                    </div>
                </div>
                <div className="goods_shopShow">
                    <a href="#">
                        <div className="info_1">
                            <img src="https://cmsstatic.dataoke.com//wap_new/main/images/goods_quan.png?v=201908261157" />
                            <div className="text">
                                <h3>特婷家居旗舰店</h3>
                                <span className="qixian">使用期限:2019.8-2022</span>
                                <span className="liji">立即领券</span>
                            </div>
                        </div>
                        <div className="goods_desc">
                                拍3件15.8元发3袋90包！
                                真材实料，严选23种配料，去除湿热，排毒养颜，喝出轻盈体态！！红豆+薏米，祛湿小能手，拒绝湿胖！每天一杯，一周掉好几斤肉！！减肥就靠这个了！        
                        </div>
                    </a>
                </div>
                </div>
            </DalConWrapper>
        )
        
    }
    async componentDidMount(index){
        this.props.handleDetailMessag(index);
        let data = await IndexList_api();
        this.setState({
            detailList: data.data[this.props.match.params.index].sub_class,
        })
        
    }
}

export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(DalContent))