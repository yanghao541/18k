import React, { Component ,Fragment} from 'react'
import DalHeader from "@components/dalHeader"
import {Page} from "@common/commonStyled"
import DalContent from "@components/dalContent"
import Footer from "@components/footer"
import {DetailsWrapper} from "./styled"
import ToggleDiv from "@components/toggleDiv"
import AddDiv from "@components/addDiv"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from '../../components/footer/connet';
class Details extends Component {
    render() {
        let{flag,show} =this.props
        console.log(this.props,show)
        return (
            <Fragment>
                <DetailsWrapper/>
                    <Page>
                        <DalHeader/>
                        <DalContent/>
                        {flag ? <ToggleDiv/> : ""}
                        {show ? <AddDiv/> : ""}
                    </Page>
                <Footer/>
            </Fragment>
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Details));
