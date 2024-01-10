import React, { Component } from 'react';
import axios from 'axios';


//A goal has one id 
//this component can be purely visual and we update 
// all backend info in journal 


    
export default class Goals extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            goals: [],
            skills: []

           
        }
        
    }

    componentDidMount() {
        axios.get('http://localhost:4000/journal/65942e93c325434c995eaa4b')
            .then(res => {
                this.setState({
                    goals: res.data.goals,
                    skills: res.data.skills
                })
            })
                
         
            
        console.log(this.state.goals);
    }
    
    
    render() {
        
        return (
            <div>
                <div className='text-white font-body text-center'>
                    Goals: { this.state.goals.map(item => `[ ${item} ]`) }
                   
                </div>

                <div className='text-white font-body text-center'>
            
                    Skills: { this.state.skills.map(item => `[ ${item} ]`) } 
                </div>
            </div>
            
        );
    }

}
export { Goals };