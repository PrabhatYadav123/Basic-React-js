import React, { Component } from 'react'
import B from './B';
import C from './C';
export const mycontext=React.createContext();

export class A extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Prabhat Yadav",
             roll:160237,
             Age:22
        }
    }
    
    render() {
        return (
            <div>
                <h1>A Component</h1>
                <h3>{this.state.Age}</h3>
                <mycontext.Provider value={this.state}>
                    <B/>
                    <C/>
                </mycontext.Provider>
            </div>
        )
    }
}

export default A
