# 一、React介绍
> 用于构建用户界面的 JavaScript 库
> 声明式渲染    数据驱动视图
> 组件化开发

1. React、Vue、Angular哪个更好？
> 根据业务需求去选择

2. React与Vue对比
> 相通点：数据驱动视图、组件化开发
> 不同点：
    > 如非必要、勿增实体（如果能够使用原生JS搞定的功能，就没有提供过多的API）
    > 一个js文件就是一个组件

> 多金


# 二、搭建React开发环境

1. 搭建react项目环境
```
npx create-react-app  项目名称
```

2. 目录结构的认识
--public  静态资源
--src   开发时经常操作的目录
    --App.js   示例业务组件
    --components  组件存放目录
    --index.js  React项目入口文件


# 三、JSX语法
> 语法糖，为了使用比较方便的在js中定义组件结构
> 整体语法跟HTML非常相似
```
var el = (<div>
                <span></span>
                <h1>我是jsx语法</h1>
        </div>)
```
JSX--> 正则 --> 虚拟DOM --> 转换为真实DOM

> 虚拟DOM 与 diff算法
```
[
    tag:'div',
    attr:'class'
    children:[
        {
            tag:'span'
        },
        {
            tag:'h1'
        }
    ]
]
```

1. JSX中数据的动态绑定
```
function Test(){
    return (<div>
            <p>{str}</p>
            <p>{num1+num2}</p>
            <p>{`num1的值为${num1}`}</p>
            <p>{1>3?'大于':'不大于'}</p>
            <p>{sum(110,119)}</p>
            <p>{'hello'||'world'}</p>
        </div>)
}
```

2. 属性、样式动态绑定
> 属性绑定：如果该属性输入js的关键字或保留字，需要替换为jsx中的特有语法

```
<div className={`box ${act}`}></div> 
<div className="box" style={{
    'background':'red',
    'transform':'rotate(45deg)'
}}></div>
```

# 四、组件分类
1. 函数式组件
> 无状态组件，如果想要在函数式组件里定义响应式数据，需要借助一下Hooks新特性
```
import React from 'react'
import Man from './components/Man'

export default function App(){
    return(
        <div>
            <Man/>
        </div>
    )
}
```

2. 类组件
> 可动态定义状态，跟视图进行绑定
```
import React,{Component} from 'react'

export default class Man extends Component{
    render(){
        return (
            <div>
                <h1>我是人类组件</h1>
                <p>我的理想是有个9K工作</p>
            </div>
        )
    }
}
```

# 五、类组件及其state
1. 在constructor构造函数中定义state
```
constructor(){
    super()  //使得Man拥有this
    this.state={
        num:9
    }
}
```

2. 将定义的state数据绑定至组件结构
```
<p>我的理想是有个{this.state.num}K工作</p>
```

3. 通过事件函数触发state的修改 （注意使用setState方法）
```
<button onClick={()=>{
    let newNum = this.state.num+1;
    this.setState({
        num:newNum
    })
}}>升职加薪</button>
```

# 六、事件详解
1. 普通函数的方式
> 【注意】这种方式需要在constructor中修正this指向
```
constructor(){
    super()  //使得Man拥有this
    this.state={
        num:9
    }
    this.handlePlus = this.handlePlus.bind(this) //【2】修正this指向
}
handlePlus(){ //【1】定义事件函数
    let newNum = this.state.num+1;
    this.setState({
        num:newNum
    })
    console.log(this)
}
```

2. 箭头函数的方式
```
handlePlus=()=>{
    let newNum = this.state.num+10;
    this.setState({
        num:newNum
    })
    console.log(this)
}
```

# 七、实战应用
> 菜单切换功能


