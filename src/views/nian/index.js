import React, { Component,Fragment } from 'react'
import {three} from "@api/yh"
import {Center} from "./styled"


export default class Nine extends Component {
        state={
            list:[]
        }
    render() {     
        let {list}=this.state

        return (
            <Fragment>
                <Center>              
                    <div className="nav">
                       {
                            list.map((item,index)=>(
                            <div key={index}>{item.name}
                                <ul>
                                    {
                                        item.sub_class.map((it,id)=>(
                                            <li key={id}>
                                                <img src={it.icon} alt=""/>
                                                {it.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            ))
                       }
                    </div>
                </Center>
            </Fragment>
        )
    }

    async componentDidMount(){
        let data=await three();
        this.setState({
            list:data.data
       })
     
    }

}





