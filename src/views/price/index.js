import React, { Component } from 'react'
import {Pricecss} from "./styled"
export default class Price extends Component {
    render() {
        return (
            <Pricecss>
                <div className="head">
                    <div className="head-1">
                        <div onClick={this.headler.bind(this)}>返回</div>
                        <div>
                            <img src="https://cmsstatic.dataoke.com//wap_new/ranking/images/halfday_title.svg?v=201908281814" alt=""/>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="head-2">
                    </div>
                </div>
                
            </Pricecss>
        )
    }
    headler(){
        this.props.history.goBack()
    }
}
