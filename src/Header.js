import React from 'react';
import classes from './Header.module.css';


const Header = (props) => {
    console.log(props);
    return (
        <div className={classes.Header}>
            <h1>Hello {props.name} - {props.last}</h1>
            {props.children}
            <h2>welcome to india.India is growing in very high speed</h2>
        </div>


    );

}

export default Header;