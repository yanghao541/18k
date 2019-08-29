import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"
import Observer from '@/observer'
  
export default class List extends Component {
    constructor({history,location,match}){
        super();
        this.state = {
            list:[]
        }
       
    }
    render() {
        return (
            <HeaderWrapper>
                <div className="heander">
                    <span onClick={this.handleClick.bind(this)}>&lt;</span>
                    <p>雪花纺</p>
                    <i>点</i>
                </div>

                <div className="Nav">
                    <ul>
                        <li>人气</li>
                        <li>最新</li>
                        <li>销量</li>
                        <li>价格</li>
                    </ul>
                </div>
            </HeaderWrapper>
        )
    }
    componentDidMount(){
        this.state.list = this.props.location.query
        console.log(this.state.list)

    }
    handleClick(){
        this.props.history.goBack()
    }
}
