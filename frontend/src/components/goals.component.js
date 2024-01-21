import React, { Component } from 'react';
import axios from 'axios';


export default class Goals extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            goals: [],
           
        }
        
    }
    //use this everytime we render 
    componentDidMount() {
        axios.get('http://localhost:4000/journal/65942e93c325434c995eaa4b')
            .then(res => {
                this.setState({
                    goals: res.data.goals,
                })
            })
                
         
    }

   handleChange(index, newValue) {
       this.setState((prevState) => {
           const updated = this.state.goals;
           updated[index] = newValue;

           //update journal object in database
           axios.put('http://localhost:4000/journal/65942e93c325434c995eaa4b', {
                goals: updated
           })
           .then((res) => console.log(res))
           .catch((err) => console.log(err))
        
           return {goals: updated}
           
       })

       // create patch update to database
   }

   
    //Goals: { this.state.goals.map(item => `[ ${item} ]`) }
    //eventually wrap each item component with a button that updates the journal 
    render() {
        
        return (

                <div className= 'text-center flex text-white font-body justify-center'>

                Goals: { 
                    <div className= 'text-center flex'>
                    {this.state.goals.map((item, index) => (
                        <div key={index}>
                        [
                        <input
                    
                        className= 'bg-black text-center outline-none w-15'
                        placeholder='set goal'
                        value={item}
                        onChange={(e) => this.handleChange(index, e.target.value)}
                        />
                        ]
                        </div>
                            
                    ))}
                    </div>
                }
                </div>
        );
    }
}
export { Goals };