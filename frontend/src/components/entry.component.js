import React, { Component } from 'react';
import axios from 'axios';
export default class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            day: "",
            reflect: "",
            wins: "",
            action: "",
            gratitude: "",
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
                <br/>
                <br/>
                <div className="text-center flex">
                    <div className="flex w-96 flex-col text-white">
                        <label classname="text-center">Reflect</label>
                        <textarea className="bg-black text-white"
                            placeholder= "Reflect on somthing..."
                            value= {this.state.reflect}
                            onChange={(e) => this.handleChange('reflect', e.target.value)}
                        
                        /> 
                    </div>

                    <div className="flex w-96 flex-col text-white">
                        <label classname="text-center">Wins</label>
                        <textarea className="bg-black text-white"
                            placeholder= "Prevous small wins..."
                            value= {this.state.wins}
                            onChange={(e) => this.handleChange('wins', e.target.value)}
                        
                        /> 
                    </div>

                    <div className="flex w-96 flex-col text-white">
                        <label classname="text-center">Action</label>
                        <textarea className="bg-black text-white"
                            placeholder= "Actions to move you forward..."
                            value= {this.state.action}
                            onChange={(e) => this.handleChange('action', e.target.value)}
                        
                        /> 
                    </div>

                    <div className="flex w-96 flex-col text-white">
                        <label classname="text-center">Gratitude</label>
                        <textarea className="bg-black text-white"
                            placeholder= "What do you have going for you..."
                            value= {this.state.gratitude}
                            onChange={(e) => this.handleChange('gratitude', e.target.value)}
                        
                        /> 
                    </div>

                    <div className="flex w-96 flex-col text-white">
                        <label classname="text-center">Visualize</label>
                        <textarea className="bg-black text-white"
                            placeholder= "Visualize the things you will do..."
                            value= {this.state.visualize}
                            onChange={(e) => this.handleChange('visualize', e.target.value)}
                        
                        /> 
                    </div>
                 </div>

                 

            </div>
        )
    }

}

export {Entry};
