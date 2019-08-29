import React, { Component } from 'react'
import { NavWrapper } from "./styled"
import { IndexList_api } from "@api/indexList"
import {mapStateToProps,mapDispatchToProps} from "./connect"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class NineNav extends Component {
    state = {
        navList: []
    }
    render() {
        let { navList } = this.state
        return (
            <NavWrapper>
                <div className="div_1">
                    <div><a href="#" className="active">精选</a></div>
                    {
                        navList.map((item, index) => (
                            <div key={index}><a href="#" onClick={this.props.handleGetIndex.bind(this,index)}>{item.name}</a></div>
                        ))
                    }
                </div>
                <div className="Nine_jianxi"></div>
                <div className="Nine_nxtj">
                    <span>精选推荐</span>
                </div>
            </NavWrapper>
        )
    }
    async componentDidMount() {
        let data = await IndexList_api();
        this.setState({
            navList: data.data
        })
        
    }     
                                                          
        
    
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NineNav))