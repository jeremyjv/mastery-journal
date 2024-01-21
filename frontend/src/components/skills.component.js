import React, { Component } from 'react';
import axios from 'axios';


export default class Skills extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            skills: []

           
        }
        
    }
    //use this everytime we render 
    componentDidMount() {
        axios.get('http://localhost:4000/journal/65942e93c325434c995eaa4b')
            .then(res => {
                this.setState({
                    skills: res.data.skills
                })
            })
                
    }
    
    //eventually wrap each item component with a button that updates the journal 
    render() {
        
        return (
            <div>
                <div className='text-white font-body text-center'>
                    Skills: { this.state.skills.map(item => `[ ${item} ]`) }
                   
                </div>
            </div>
            
        );
    }
}
export { Skills };