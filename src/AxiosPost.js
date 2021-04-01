import React, { Component } from 'react'
import axios from 'axios';

export class AxiosPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
                userid:'',
                title:'',
                body:''
            
        }
    }
    changeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    formSubmit=(e)=>{
        console.log(this.state)
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{console.log(error)}) 
    }
    
    render() {
        const {userid,title,body}=this.state;
        return (
            <div>
                <form  onSubmit={this.formSubmit}>
                    <div>

                    <label>UserId</label>
                    <input type="text" value={userid} name="userid" onChange={this.changeHandler}></input>
                    </div>
                    <div>

                    <label>Title</label>
                    <input type="text" value={title} name="title" onChange={this.changeHandler}></input>
                    </div>
                    <div>

                    <label>Body</label>
                    <input type="text" value={body} name="body" onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AxiosPost
