import React, { Component } from 'react';
import axios from 'axios';

export class AxiosGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error:''
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
       this.setState({posts:response.data})
        })
        .catch(error=>{
            this.setState({error:'URL Error'})
            console.log(error);

        })
    }
    
    render() {
        const {posts,error}=this.state
        return (
            <div>
               Our Posts 
             {
                 posts.length?
              posts.map(post=><div key={post.id}> {post.body}</div>):null
             
             }
             {error?<div>{error}</div>:null
            }
            </div>
        )
    }
}

export default AxiosGet
