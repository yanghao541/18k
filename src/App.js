import React, {Component } from 'react'
//引入路由index中到导出的routeConfig
import { routeConfig } from "@router"
import { Switch,Redirect,Route } from 'react-router-dom'
import BaseRote from "@common/baseRoute"

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Redirect from="/" to="/home" exact/>
                {
                    routeConfig.map((item,index)=>(
                        <Route path={item.path} key={index} render={()=>(
                            <BaseRote key={index} {...item}/>
                        )}/>
                    )) 
                }
            </Switch>   
        )
    }
}
