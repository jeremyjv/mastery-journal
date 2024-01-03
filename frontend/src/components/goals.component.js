import React, { Component } from 'react';
import axios from 'axios';
//A goal has one id 
//this component can be purely visual and we update 
// all backend info in journal 
export default class Goals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goals: ["create web app"],
            id: ''

        }
    }
   

    render() {
        return (
            <div className='text-white font-body text-center'>
                Goals: [ 10 Percent Body Fat ][ 2024 Internship ][ 10000 Dollar Sales ]
            </div>
        )
    }


}