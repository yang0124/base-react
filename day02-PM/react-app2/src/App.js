import React,{Component} from 'react'
import Test from './components/Test'
import Man from './components/Man'
import LifeCircle from './components/LifeCircle'


export default class App extends Component{
    constructor(){
        super()
        this.state={
            isShow:true
        }
    }
    handleChange=(bool)=>{
        this.setState({
            isShow:bool
        })
    }
    render(){
        let {isShow} = this.state;
        let human=[
            {'name':'张三疯','work':'高级前端开发','money':'20K'},
            {'name':'张三疯1','work':'中级前端开发','money':'10K'},
            {'name':'张三疯2','work':'初级前端开发','money':'6K'},
            {'name':'张三疯3','work':'切图仔','money':'2K'}
        ]
        let testList = human.map((obj)=>{
            return <Test name={obj.name} money={obj.money} work={obj.work} key={obj.name}/>
        })
        let Cont = isShow
                    ?
                    testList
                    :
                    <LifeCircle/>
                    // <Man name="张无忌" money="8" work="Java开发"/>
        return(
            <div>
                <ul className="tab">
                    <li className={isShow?'active':''} onClick={()=>{this.handleChange(true)}}>前端岗位列表</li>
                    <li className={isShow?'':'active'} onClick={()=>{this.handleChange(false)}}>后端岗位列表</li>
                </ul>
                {Cont}
            </div>
        )
    }
}