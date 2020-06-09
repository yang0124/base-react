import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(){
        super()
        this.myInput = React.createRef() //【1】定义用以获取真实DOM的属性方法
    }
    handleSend=()=>{
        console.log(this.myInput)
        let v = this.myInput.current.value //【3】在组件的方法函数中，通过组件的特殊属性获取到真实DOM并使用
        console.log(v)
    }
    render() {
        return (
            <div>
                {/* 【2】将属性与需要获取的真实DOM节点通过ref进行绑定 */}
                <input type="text" ref={this.myInput}/>
                <button onClick={this.handleSend}>发送</button>
            </div>
        )
    }
}


