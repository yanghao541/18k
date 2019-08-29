import React, { Component } from 'react'
import { HeaderWrapper } from './styled'
import { sortList } from '../../api/week'
import Observer from '@/observer'
import {withRouter} from "react-router-dom"

class Sort_L extends Component {
    constructor() {
        super();
        this.state = {
            sort_C: 0,
            sort_List: [],
            id:0,
            name:""
            
        }
        Observer.$on("handleSort_L", (val) => {
            this.setState({
                sort_C: val
            })
        })
        
    }
    render() {
        console.log(this.state.sort_C)
        let { sort_List } = this.state;
        let { sort_C } = this.state;
    
        return (
            <HeaderWrapper>
                {
                    sort_List.map((item, index) => (
                        <ul  className={sort_C==item.cid?"centent":""} key={index} >
                            {
                                item.floors.map((child, idx) => (
                                    <li className="C_List" key={idx}>
                                        <h3 className="f1">{child.name}</h3>
                                            {
                                                child.list.map((it, ix) => (
                                                    <div className="List_Div" onClick={this.handleList.bind(this,it.api_cid,it.name)} key={ix} >
                                                        <a >
                                                            <img src={it.img} />
                                                            {it.name}
                                                        </a>
                                                    </div>
                                                ))
                                            }
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </HeaderWrapper>
        )
    }
    handleList(id,name){
        
        this.setState({
            id:id,
            name:name
        })
        
        this.props.history.push({pathname:"/list",query:{id:id,name:name}})
        console.log(this.props.history)
    }
    async componentDidMount() {
        let data = await sortList();
        this.setState({
            sort_List: data.data.data
        })
    }

}
export default withRouter(Sort_L)