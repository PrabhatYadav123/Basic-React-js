import React from 'react';
import classes from './Navbar.module.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <nav className={classes.Navbar}>
                <ul className={classes.Navul}>
                    <li><a href="/">Home</a></li>
                    <li><a href="./">About</a></li>
                    
                    <li><a href="./">Contact Us</a></li>
                    <li><a href="./">More</a></li>
                </ul>

                </nav>
            </div>
        )
    }
}
export default Navbar;