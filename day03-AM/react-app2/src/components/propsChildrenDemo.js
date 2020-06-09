import React, { Component } from 'react'

export default class propsChildrenDemo extends Component {
    render() {
        return (
            <div>
                <h1>演示props.children的组件</h1>
                {this.props.children}
            </div>
        )
    }
}
