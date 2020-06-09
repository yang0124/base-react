import React, { Component } from 'react'

export default class index extends Component {
    render() {
        let {content,isCheck,idx} = this.props;
        let {handlecheck,handledel} = this.props;
        return (
            <li className={isCheck?'completed':''}>
                <div className="view">
                    <input 
                    className="single-check" 
                    type="checkbox" 
                    defaultChecked={isCheck} 
                    onChange={()=>{handlecheck(idx)}}
                    />
                    <label>{content}</label>
                    <button className="destroy" onClick={()=>{handledel(idx)}}></button>
                </div>
                <input type="text" className="edit" />
            </li>
        )
    }
}
