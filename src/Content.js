import React from 'react';
import classes from './Content.module.css';


class Content  extends React.Component{
    constructor(){
        super();
        this.state={
            msg:"This is Content for this Page",
            
        }
    }
    subscribe=()=>{
        this.setState({
            msg:"Thanks for Subscribe"          
        })
    }
    render(){
        return(
            <div className={classes.Content}>
            
        <h1>{this.state.msg}</h1>
        <button className={classes.Btn} onClick={()=>{this.subscribe()}}>Subscribe</button>
        </div>
            );
    }

}
export default Content;