import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export class Routing extends Component {
    render() {
        return (
            <Router>

                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Switch>
                    <Route path="/Home">
                        <Home></Home>
                        </Route>
                    <Route path="/about">
                        <About></About>

                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>

                    </Route>
                    <Route path="/users">
                        <Users></Users>

                    </Route>
                </Switch>


            </Router>
        )
    }
}
const Home = () => {
    return <h1>This is Home</h1>
}
const About = () => {
    return <h1>This is About</h1>
}
const Contact = () => {
    return <h1>This is Contact Us</h1>
}
const Users = () => {
    return <h1>This is USers</h1>
}

export default Routing;
