import React, { Component } from 'react'
import { mycontext } from './A'

export class B extends Component {
    render() {
        return (
            <div>
                <h1>Component B</h1>
                <mycontext.Consumer>{data=><h3>{data.name}</h3>}</mycontext.Consumer>
            </div>
        )
    }
}

export default B
