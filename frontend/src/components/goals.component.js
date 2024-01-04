import React, { Component } from 'react';
import axios from 'axios';

//A goal has one id 
//this component can be purely visual and we update 
// all backend info in journal 
export default class Goals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goals: [],
            test: ''

        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/journal/65942e93c325434c995eaa4b')
            .then(response => {
                if (response.data.length) {
                    this.setState({
                
                        test: response.data.goals[0]
                    })
                }
            })
    }
   

    render() {
        return (
            <div className='text-white font-body text-center'>
                Goals: [ 10 Percent Body Fat ][ 2024 Internship ][ 10000 Dollar Sales ]
                <div className='text-white'>{this.test}</div>
            </div>
        )
    }


}