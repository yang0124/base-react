import React, { Component } from 'react'
import PureCompDemo from './PureCompDemo'

export default class Pure extends Component {
    constructor(){
        super()
        this.state={
            n:10
        }
    }
    render() {
        return (
            <div>
                <PureCompDemo num={this.state.n}/>
                <button onClick={()=>{
                    this.setState({
                        n:11
                    })
                }}>按钮</button>
            </div>
        )
    }
}
