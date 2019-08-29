import React, { Component } from 'react'
import { NineListWrapper } from "./styled"
import { IndexList_api } from "@api/indexList"
import BScrollComponent  from "@common/bscroll"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect"
import {withRouter} from "react-router-dom";
class NineList extends Component {
    constructor() {
        super();
        this.state = {
            goodList: []
        }
    }
    render() {
        let { goodList } = this.state
        return (
            <BScrollComponent ref="bscroll">
            <NineListWrapper>
                <ul>
                    {
                        goodList.map((item,index) => (
                            <li key={index} onClick={this.props.handToDetials.bind(this,index)}>
                            <div className="Nine_list">
                                <div >
                                    <div className="NIne_img">
                                        <a href="#" >
                                            <img src={item.icon}/>
                                        </a>
                                    </div>
                                    <div className="cont">
                                        <p className="cont_bt">{item.name}</p>
                                        <div className="cont_price">
                                            <div>天猫价￥49.9</div>
                                            <div>已售<span> {item.id}</span>万件</div>
                                        </div>
                                        <div className="cont_shouhou">
                                            <div className="cont_shprice">
                                                售后价格￥<span>19.9</span>
                                            </div>
                                            <span className="cont_quan">10元券</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        ))
                    }
                </ul>
            </NineListWrapper>
            </BScrollComponent>
        )
    }
    async componentDidMount() {
        let data = await IndexList_api();
        this.setState({
            goodList: data.data[this.props.i].sub_class
        })  
        
        // this.refs.bscroll.handlepullingUp(()=>{
        //     console.log(111)
        // })

        // this.refs.bscroll.handlepullingDown(()=>{
        //     // let index = parseInt(Math.random()*14)

        // })
    }
   
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NineList))
