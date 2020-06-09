import React, { Component,Fragment} from 'react'

export default class FragmentDemo extends Component {
    render() {
        return (
            <Fragment>
                <li>我是li</li>
                <li>我是li</li>
                <li>我是li</li>
                <li>我是li</li>
            </Fragment>
            // <>
            //     <li>我是li</li>
            //     <li>我是li</li>
            //     <li>我是li</li>
            //     <li>我是li</li>
            // </>
            
        )
    }
}
