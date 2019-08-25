import React, { Component } from 'react'
import { routeConfig } from "@router"
import { Switch, Redirect } from "react-router-dom";
import Trouter from "@common/Trouter"
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact />
        {
          routeConfig.map((item, index) => (
      // 路由二次封装 将item所有项传给Trouter
            <Trouter key={index} {...item}/>
          ))
        }
      </Switch>
    )
  }
}



