import React, { Component } from 'react'
import './main.css'
import List from '../List'
import Footer from '../Footer'

export default class Todo extends Component {
    constructor(){
        super()
        this.state={
            todolist:[
                {
                    id:Math.random(),
                    content:'吃饭',
                    isCheck:true
                },
                {
                    id:Math.random(),
                    content:'睡觉',
                    isCheck:false
                }
            ]
        }
        this.sendInput = React.createRef()
    } 
    handleAdd=(ev)=>{ //新增任务的输入框键盘事件
        // console.log(ev.keyCode)
        if(ev.keyCode===13){
            let v = this.sendInput.current.value;
            let todolist = this.state.todolist;
            todolist.push({
                id:Math.random(),
                content:v,
                isCheck:false
            })
            this.setState({
                todolist
            })
            this.sendInput.current.value = ''
        }
    }
    render() {
        let {todolist} = this.state;
        let list = todolist.map((obj)=>{
            return <List content={obj.content} isCheck={obj.isCheck}/>
        })
        return (
            <div className="cont">
			<header className="header">
				<h1>Todos</h1>
                <input 
                    ref={this.sendInput} 
                    type="text" 
                    className="new-todo" 
                    placeholder="请输入待办事项~" 
                    onKeyDown={this.handleAdd}
                />
			</header>

			<section className="main">
				<input type="checkbox" className="toggle-all" />
				<ul className="todo-list">
					{list}
				</ul>
			</section>
            
            <Footer/>
		</div>
        )
    }
}
