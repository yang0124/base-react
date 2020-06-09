import React, { PureComponent } from 'react'

export default class PureCompDemo extends PureComponent {
    render() {
        console.log('pureComponent中的render执行了')
        return (
            <div>
                {this.props.num}
            </div>
        )
    }
}
