import React, { Component } from 'react'
import LoginComponent from "@components/login"
import {LoginWrapper} from "./styled"


export default class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <LoginComponent/>
            </LoginWrapper>
        )
    }
}
