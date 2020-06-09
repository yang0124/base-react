# 一、知识回顾

1. 安装react项目环境

2. 认识项目目录结构

3. 组件的分类
    + 函数式组件（无状态组件）
    + 类组件 ，通过state实现数据的动态绑定

4. state使用流程
    + 定义state
    + 在组件视图中绑定state数据
    + 通过事件触发state修改
    + state变化后引发视图的更新

5. 事件详解
    + 普通函数定义方式，注意要修正this指向，bind的使用
    + 箭头函数定义方式

# 二、props传参
> 为组件内部传递参数

1. 函数式组件传参
> 函数的第一个参数来接收
    + 调用组件时传递参数
    ```
    <Test name="张三丰" age="100" work="前端开发"/>
    ```
    + 函数式组件内部接收参数并使用
    ```
    function Test(props){
        let {name,age,work} = props;
        return (<div>
            姓名：{name}
            年龄：{age}
            工作：{work}
            </div>)
    }
    ```

2. 类组件传参
> 类组件的参数通过this.props获取
+ 调用组件时传递参数
    ```
    <Man name="张无忌" money="8" work="Java开发"/>
    ```
    + 函数式组件内部接收参数并使用
    ```
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
    ```

# 三、列表渲染
> 通过数组map方法，将数据包转换为组件包

1. 获取用以列表渲染的数据包
> 真实项目来源于在线数据请求
```
let human=[
    {'name':'张三疯','work':'高级前端开发','money':'20K'},
    {'name':'张三疯1','work':'中级前端开发','money':'10K'},
    {'name':'张三疯2','work':'初级前端开发','money':'6K'},
    {'name':'张三疯3','work':'切图仔','money':'2K'}
]
```

2. 使用map方法将数据包处理为组件列表
```
let testList = human.map((obj)=>{
    return <Test name={obj.name} money={obj.money} work={obj.work}/>
})
```

3. 将组件列表绑定至父组件视图中
```
{testList}
```

# 四、条件渲染
> 实现通过条件判断，对需要渲染的内容作出判断
1.根据条件渲染组件或数据
```
 let Cont = isShow
            ?
            testList
            :
            <Man name="张无忌" money="8" work="Java开发"/>
```

2. 根据条件渲染组件或JSX标签属性
```
<li className={isShow?'active':''}></li>
```

# 五、获取真实DOM
> 不建议大量获取真实DOM
下面是几个适合使用 refs 的情况：

管理焦点，文本选择或媒体播放。
触发强制动画。
集成第三方 DOM 库。

1. 案例，使用获取真实DOM的方式获取input框的value


2. 具体操作流程 （参考RefsDemo.js文件）
```
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
```



