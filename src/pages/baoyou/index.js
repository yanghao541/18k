import React, { Component } from 'react'
import Header from "@components/header"
import {Page} from "@common/commonStyled"
import  NineWrap from "@components/nineWrap"
import NineNav from "@components/nineNav"
import NineList from "@components/nineList"
import BackWrapper from "@components/backTop"
export default class Home extends Component {
    render() {
        return (
            <Page>
                <Header/>
                <NineWrap/>
                <NineNav/>
                <NineList/>
                <BackWrapper/>
            </Page>
        )
    } 
}
