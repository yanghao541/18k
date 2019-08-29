import React, { Component } from 'react';

import { week_choice } from '../../api/week';

export default class index extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
    async componentDidMount(){
        let data = await week_choice();
        console.lod(data)
    }
}

