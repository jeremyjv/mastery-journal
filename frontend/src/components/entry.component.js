import React, { Component } from 'react';
import axios from 'axios';
export default class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            day: "",
            reflect: " ",
            wins: " ",
            action: " ",
            gratitude: " ",
            visualize: ""
           
        }
        
    }
    componentDidMount() {
        axios.get('http://localhost:4000/entry/65931da28529e7483a29b388')
            .then(res => {
                this.setState({
                    day: res.data.day,
                    reflect: res.data.reflect,
                    wins: res.data.wins,
                    action: res.data.action,
                    gratitude: res.data.gratitude,
                    visualize: res.data.visualize
                    
                })
            })
                
         
    }
    //create function that takes in id, then renders specific axios request
    
    //box with 6 text area boxes 
    handleChange(type, newValue) {
        this.setState(() => {
            //if we are modifying reflect
            if (type == 'reflect') {

                axios.put('http://localhost:4000/entry/65931da28529e7483a29b388', {
                reflect: newValue
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
                return {reflect: newValue}
                
            }
            //if we are modifying wins
            else if (type == 'wins') {

                axios.put('http://localhost:4000/entry/65931da28529e7483a29b388', {
                wins: newValue
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
                return {wins: newValue}
                
            }
            //if we are modifying action
            else if (type == 'action') {

                axios.put('http://localhost:4000/entry/65931da28529e7483a29b388', {
                action: newValue
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
                return {action: newValue}
                
            }

            //if we are modifying gratitude
            else if (type == 'gratitude') {

                axios.put('http://localhost:4000/entry/65931da28529e7483a29b388', {
                gratitude: newValue
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
                return {gratitude: newValue}
                
            }

            //if we are modifying visualize
            else if (type == 'visualize') {

                axios.put('http://localhost:4000/entry/65931da28529e7483a29b388', {
                visualize: newValue
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
                return {visualize: newValue}
            }
        })
        //update all info to database here to reduce redundancy 
    }

    render() {

        return (

            <div className="text-center font-body text-white"> 
                Entry 1/27/24

                
            
                <form className="justify-center">
                    <div className="flex w-96 flex-col text-white">
                        <label classname="text-center">Reflect</label>
                        <textarea className="bg-black text-white"
                            placeholder= "Reflect on somthing..."
                            value= {this.state.reflect}
                            onChange={(e) => this.handleChange('reflect', e.target.value)}
                        
                        /> 
                    </div>

                    
                    
                </form>
            </div>
        )
    }

}

export {Entry};
