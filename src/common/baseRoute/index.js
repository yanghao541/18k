import React, { Component } from 'react'
import Layut from "@layout"
import {Route} from "react-router-dom"
import auth from "@common/auth"
class BaseRoute extends Component {
    render() {
        let { component,path,...rest} = this.props;
        return (
            <Layut {...rest}>
                <Route path={path} component={component} />
            </Layut>
        )
    }
}

export default auth(BaseRoute);