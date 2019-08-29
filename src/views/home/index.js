import React, { Component, Fragment } from 'react'
import { two } from "@api/yh"
import { Tou } from "./style"
import { Center } from "./center"
import Banner from "./banner";
import Betterscroll from "@common/better"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatch } from "./connect"
class Home extends Component {
    state = {
        list: [],
        pageId:1
    }
    render() {
        let { list } = this.state
        return (
            <Fragment>
                <Tou>
                    <div>
                        <input type="text" defaultValue="输入商品名或粘贴宝贝标题搜索"  onClick={this.headlsearch.bind(this)} />
                    </div>
                    <ul onClick={this.pricehead.bind(this)}>
                        <li>美食</li>
                        <li>日用</li>
                        <li>男装</li>
                        <li>鞋品</li>
                        <li>精选</li>
                        <li>精选</li>
                        <li>精选</li>
                        <li>三</li>
                    </ul>
                </Tou>
                <Center>
                    <Banner />
                    <div><img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01LrgQlB2JJhy6eeO20_!!2053469401.png" alt="" /></div>
                    <div className="tu">
                        <div><img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01x3cCut2JJhy8UKuQt_!!2053469401.png" alt="" /></div>
                        <div><img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01EcZ5Wv2JJhy6NZGk9_!!2053469401.png" alt="" /></div>
                    </div>
                    <p className="tit">发现好货</p>
                    <Betterscroll ref="wpp">
                        <div className="nav">
                            <div>
                                <ul className="u" >
                                    {
                                        list.map((item, index) => (
                                            <li key={index} onClick={this.headlist.bind(this,item.goodsId)}>
                                                <div><img src={item.pic} alt="" /></div>
                                                <div>{item.dtitle}</div>
                                                <div>{item.quanJine}元券</div>
                                                <div>券后{(item.yuanjia - item.quanJine).toFixed(2)} ¥ </div>
                                                <div>天猫{item.yuanjia} ¥</div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </Betterscroll>
                </Center>
            </Fragment>
        )
    }
    componentWillUpdate(newProps,newState){
        if(newProps.pageId !== this.state.pageId){
           this.refs.wpp.headrest(); 
        }
        
    }
    componentDidMount() {
        this.handupdata();
        this.refs.wpp.headpullUpLoad(() => {
            this.handupdata()
        })
    }
    async handupdata() {
        let data = await two(this.state.pageId); 
        if (data) {
            this.setState({
                list: [...this.state.list,...data.data.list]
            })
            this.state.pageId++;
            console.log(this.state.pageId)
        }
    }
    headlist(goodsId){
        this.props.history.push({pathname:"/list/"+goodsId})
    }
    headlsearch(){
        this.props.history.push("/search")
    }
    pricehead(){
        this.props.history.push("/price")
    }
}

export default connect(mapStateToProps, mapDispatch)(Home)




