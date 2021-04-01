import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props);
       this.state={
username:'',
password:''
        }
    }
    handleUsername=(event)=>{
this.setState({
    username:event.target.value
})
    }
    handlePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.password}`)
        event.preventDefault()

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

            <div>
               <label>Username</label>
               <input type="text" value={this.state.username} onChange={this.handleUsername}></input> 
            </div>
            <div>
               <label>Password</label>
               <input type="password" value={this.state.password} onChange={this.handlePassword}></input> 
            </div>
            <button>Submit</button>
            </form>
        )
    }
}

export default Form
