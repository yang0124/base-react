import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <footer className="footer">
				<span className="todo-count">
                    <strong> 8 </strong>
                    <span>item left</span>
                        </span>
                        <ul className="filters">
                            <li>
                                <span className="selected">All</span>

                            </li>
                            <li>
                                <span className="selected">Active</span>

                            </li>
                            <li>
                                <span>Completed</span>

                            </li>
                        </ul>

                        <button className="clear-completed">
                    clear all completed
                </button>
			</footer>

        )
    }
}
