import React, { Component } from 'react'

export default class index extends Component {
    render() {
        let {content,isCheck} = this.props
        return (
            <li className="completed">
                <div className="view">
                    <input className="single-check" type="checkbox" defaultChecked={isCheck}/>
                    <label>{content}</label>
                    <button className="destroy"></button>
                </div>
                <input type="text" className="edit" />
            </li>
        )
    }
}
