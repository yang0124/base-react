import React, { Component } from 'react'

export default class index extends Component {
    constructor(){
        super()
        this.state={
            isEdit:false
        }
        this.editInput = React.createRef()
    }
    handleEdit=(bool)=>{  //进入与退出编辑状态的事件函数
        this.setState({
            isEdit:bool
        },()=>{
            if(bool){  //当进入编辑状态时，让编辑框自动获取焦点
                this.editInput.current.focus()
            }else{ //失去焦点的时候，保存新任务内容
                let v = this.editInput.current.value;
                this.props.handlesave(this.props.idx,v)
            }
        })
            
    }
    render() {
        let {isEdit} = this.state;
        let {content,isCheck,idx} = this.props;
        let {handlecheck,handledel} = this.props;
        let complete = isCheck?'completed':'';
        let editing = isEdit ? 'editing' : ''
        return (
            <li className={`${editing} ${complete}`} onDoubleClick={()=>{this.handleEdit(true)}}>
                <div className="view">
                    <input 
                    className="single-check" 
                    type="checkbox" 
                    defaultChecked={isCheck} 
                    onChange={()=>{handlecheck(idx)}}
                    />
                    <label>{content}</label>
                    <button className="destroy" onClick={()=>{handledel(idx)}}></button>
                </div>
                <input 
                    ref={this.editInput} 
                    type="text" 
                    className="edit" 
                    onBlur={()=>{this.handleEdit(false)}} 
                    defaultValue={content} 
                />
            </li>
        )
    }
}
