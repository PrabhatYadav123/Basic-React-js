import React, { Component } from 'react'
import Update from './Update';
export class Product extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            productid:"",
            qty:0
             
        }
    }
   
    addToCart=(pid)=>{
        this.setState({
            productid:pid,qty:this.state.qty+1
        })
    }
    render(){
        return(
            <div>
                
            <button onClick={this.addToCart(1)}>AddToCart</button>
            <Update productid={this.state.productid} qty={this.state.qty}></Update>
            </div>
            
        );
    }
}
export default Product;


 