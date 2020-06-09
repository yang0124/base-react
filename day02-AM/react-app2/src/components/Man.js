import React,{Component} from 'react'

export default class Man extends Component{
    render(){
        let {name,work,money} = this.props;
        return (
            <div>
                 姓名：{name} ,
                薪资：{money}K ,
                工作：{work} 
                
            </div>
        )
    }
}




