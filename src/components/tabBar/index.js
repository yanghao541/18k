import React, { Component } from 'react'
import {TabBarWrapper} from './styled'
import {TabBarRoute} from "@router"
import {NavLink} from "react-router-dom"
export default class TabBar extends Component {
    render() {
        return (
            <TabBarWrapper>
            <ul>
                {
                    TabBarRoute.map((item,index)=>(
                        <li key={index}>
                            <NavLink to={item.path}>
                                <i className='iconfont'>{item.icon}</i>
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </TabBarWrapper>
        )
    }
};
  
