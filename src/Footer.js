
import React from 'react';
import classes from './Footer.module.css';


class Footer extends React.Component{
    render(){
        const numbers=this.props.numbers;
        const newnumber=numbers.map((props,key)=>{
            return(<li key={props}>{props}</li>)
        })
        return(
        <footer className={classes.Footer}>
            <h1>Hello {this.props.name} - {this.props.last}</h1>
            {this.props.children}
            <ul className={classes.UnOrdered}>{newnumber}</ul>
            copyright @ 2021 || prabhatyadav website.com
        </footer>);
    }

}
export default Footer;