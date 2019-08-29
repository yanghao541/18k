import React, { Component } from 'react'
//导入styled的样式
import {TabBarWrapper} from './styled'
//把路由里面导出的 tabBarRoute 引进来
import { tabBarRoute} from "@router"
import { NavLink} from "react-router-dom"
export default class TabBar extends Component {
    render() {
        return (
            <TabBarWrapper>
                <ul>
                    {
                        tabBarRoute.map((item,index)=>(
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
}
