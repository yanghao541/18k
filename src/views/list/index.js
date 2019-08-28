import React, { Component } from 'react'
import { one } from "@api/yh"
import {Shoplistcss} from "./style"
export default class List extends Component {
    state={
        list:[],
    }
    render() {
        let {list}=this.state
        console.log(list)
        return (
            <Shoplistcss>       
                <div className="btn" onClick={this.headler.bind(this)}>                              
                    按下他 你将穿梭时空！
                </div>
          
               
                <ul>
                    {
                        list.map((item,index)=>(
                            <li key={index}>
                                <img src={item.img} alt=""/>
                            </li>
                        ))
                    }
                </ul>
            </Shoplistcss>
        )
    }
    async componentDidMount(){
        let {id}=this.props.match.params
        let data = await one(id); 
        this.setState({
            list:JSON.parse(data.data)
        })
    }
    headler(){
        this.props.history.goBack()
    }
}


