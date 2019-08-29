import React, { Component } from 'react'
import { Searchcss } from "./styled"
import { searchdata } from "@api/yh"
class Search extends Component {
    state = {
        list: []
    }
    render() {
        let { list } = this.state
        return (
            <Searchcss>
                <div className="box">
                    <div onClick={this.fanhead.bind(this)}>
                        返回
                    </div>
                    <div className="s_div">
                        <input type="text" className="dd" onChange={this.headval.bind(this)} />
                    </div>
                    <div>
                        搜索
                    </div>
                </div>
                <ul>
                    {
                        list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </Searchcss>
        )
    }
    async headval(e) {
        let val = e.target.value;
        let data = await searchdata(val);
        if (val) {
            this.setState({
                list: data.data?data.data:[]
            })
        }
    }
    fanhead(){
        this.props.history.goBack()
    }

}
export default Search;
