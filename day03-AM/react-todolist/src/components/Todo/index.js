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
            ],
            taskState:'all' //all 所有任务  active未完成  complete已完成
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
    handleSave=(i,content)=>{ //保存编辑新内容
        let {todolist} = this.state;
        todolist[i].content = content;
        this.setState({
            todolist
        })
    }
    handleChange=(s)=>{ //底部菜单切换的事件函数
        this.setState({
            taskState:s
        })
    }
    myComputed=()=>{ //自己封装的方法函数，跟vue中的computed作用类似
        let {todolist,taskState} = this.state;
        let filterList = []
        switch (taskState) { //根据条件过滤数据
            case 'all':
                filterList = todolist
                break;
            case 'active':
                filterList = todolist.filter((obj)=>{
                    return !obj.isCheck
                })
                break;
            case 'complete':
                filterList = todolist.filter((obj)=>{
                    return obj.isCheck
                })
                break;
            default:
                break;
        }

        //从todolist数组中挑选出isCheck状态为false的对象，累计其总数量
        let leftNum=0;
        todolist.forEach((item)=>{
            if(!item.isCheck){
                leftNum++
            }
        })

        return {
            filterList,
            leftNum
        }
    }
    render() {
        console.log('Todo组件的render重新执行了')
        let {todolist} = this.state;
        let {filterList,leftNum} = this.myComputed() //一旦taskState发生变化，就会重新调用myComputed,并得到对应条件的数组
        let list = filterList.map((obj,i)=>{
            return <List 
                        {...obj} 
                        key={obj.id} 
                        idx={i} 
                        handlecheck={this.handleCheck} 
                        handledel={this.handleDel} 
                        handlesave={this.handleSave} 
                        
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
            
            {
                todolist.length>0
                ?
                <Footer handlechange={this.handleChange} taskstate={this.state.taskState} leftNum={leftNum}/>
                :
                ''
            }
		</div>
        )
    }
}
