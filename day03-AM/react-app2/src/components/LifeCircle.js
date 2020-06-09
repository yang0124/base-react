import React, { Component } from 'react'
import axios from 'axios'

export default class LifeCircle extends Component {
    constructor(){
        super()
        this.state={
            num:1,
            glist:[]
        }
        console.log('执行组件构造函数')
    }
    UNSAFE_componentWillMount(){
        console.log('组件即将渲染')
    }
    componentDidMount(){ //获取在线数据的时候，使用这个生命周期函数
        console.log('组件初始化完毕')
        let url = `http://rap2api.taobao.org/app/mock/239427/get/good/list`
        axios.get(url).then((res)=>{
            console.log(res)
            this.setState({
                glist:res.data.data
            })
        })
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextState)
    //     let {num} = this.state
    //     let nextNum = nextState.num
    //     return num==nextNum?false:true
    // }
    componentWillUnmount(){
        console.log('组件即将卸载')
    }
    render() {
        console.log('render渲染组件')
        let {glist} = this.state;
        let list = glist.map((obj,i)=>{
            return <li key={i}>{obj.title}</li>
        })
        return (
            <div>
                {this.state.num}
                <button onClick={()=>{
                    let num = this.state.num
                    console.log(num)
                    this.setState({
                        num
                    })
                }}>按钮</button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
