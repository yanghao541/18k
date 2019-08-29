import React, { Component } from 'react'
import {HeaderWrapper} from './styled'
import  {sortList}  from '../../api/week'
import Observer from '@/observer'
export default class Sort_L extends Component {
    state ={
        sort_List:[],
        id:0,
    }
    render() {
        let {sort_List,i} = this.state;
        return (
            <HeaderWrapper>
            {
                sort_List.map((item,index)=>(
                    <div onClick={this.handleClick.bind(this,item.cid)} key={index} id="Nav">
                        <a className="active"  className={i==item.cid?"aa":""}>
                            {item.name}
                        </a>
                    </div>
                ))
            }
            </HeaderWrapper>
        )
    }
    handleClick(id){
       this.setState({
           i:id
       })
       Observer.$emit("handleSort_L",this.state.i)
   

    }
    async componentDidMount(){
        let data = await sortList();
        this.setState({
            
            sort_List:data.data.data,
            
        })
    }
}
