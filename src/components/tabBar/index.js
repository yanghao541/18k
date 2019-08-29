import React, { Component } from 'react'
import  {TabBarcss} from "./styled"
import {TabBarRoute} from "@router"
import {NavLink} from "react-router-dom"
export default class TabBar extends Component {
    render() {
        return (
            <TabBarcss>
                <ul>
                    {
                        TabBarRoute.map((item,index)=>(
                           <li key={index}>
                            <NavLink to={item.path}>
                                <div>{item.name}</div>
                            </NavLink>
                           </li>
                        ))
                    }
                </ul>
            </TabBarcss>
        )
    }
};
  
