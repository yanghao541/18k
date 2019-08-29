import React, { Component } from 'react'
import Header from '../../components/heander'
import {Page} from "@common/commonStyled"
import Sort_L from '@components/sort_L'
import Sort_R from '@components/sort_R'

export default class Sort extends Component {
    render() {
        return (
            <Page>
                <Header/> 
                <Sort_L/>
                <Sort_R/>
                 
            </Page>
            
        )
    }   
}