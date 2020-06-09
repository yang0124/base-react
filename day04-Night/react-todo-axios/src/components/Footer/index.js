import React, { Component } from 'react'

export default class index extends Component {
    render() {
        let {handlechange,taskstate,leftNum} = this.props
        return (
            <footer className="footer">
				<span className="todo-count">
                    <strong> {leftNum} </strong>
                    <span>item left</span>
                        </span>
                        <ul className="filters">
                            <li>
                                <span onClick={()=>{handlechange('all')}} className={taskstate==='all'?'selected':''} >All</span>

                            </li>
                            <li>
                                <span onClick={()=>{handlechange('active')}} className={taskstate==='active'?'selected':''}>Active</span>

                            </li>
                            <li>
                                <span onClick={()=>{handlechange('complete')}} className={taskstate==='complete'?'selected':''}>Completed</span>

                            </li>
                        </ul>

                        <button className="clear-completed">
                    clear all completed
                </button>
			</footer>

        )
    }
}
