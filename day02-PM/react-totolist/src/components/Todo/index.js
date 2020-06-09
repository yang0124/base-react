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
        this.sendInput = React.createRef() //获取新增任务的输入框的DOM节点
    } 
    handleAdd=(ev)=>{ //新增任务的输入框键盘事件
        // console.log(ev.keyCode)
        if(ev.keyCode===13){
            let v = this.sendInput.current.value;
            this.setState({
                todolist:[
                    ...this.state.todolist,  //扩展运算符（展开运算符）
                    {
                        id:Math.random(),
                        content:v,
                        isCheck:false
                    }
                ]
            })
            this.sendInput.current.value = ''
        }
    }
    handleCheck=(idx)=>{ //单个任务的勾选功能
        console.log(idx)
        let {todolist} = this.state
        todolist[idx].isCheck = !todolist[idx].isCheck
        this.setState({
            todolist
        })
    }
    handleDel=(idx)=>{ //单个任务的删除功能
        let {todolist} = this.state;
        todolist.splice(idx,1)
        this.setState({
            todolist
        })
    }
    render() {
        let {todolist} = this.state;
        let list = todolist.map((obj,i)=>{
            return <List 
                        {...obj} 
                        key={obj.id} 
                        idx={i} 
                        handlecheck={this.handleCheck} 
                        handledel={this.handleDel}
                    />
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
            
            {todolist.length>0?<Footer/>:''}
		</div>
        )
    }
}
