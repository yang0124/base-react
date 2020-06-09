# 一、HOC (Hight-Order-Component)
> 高阶组件，其本质是一个函数
> 使用场景：将一个已有组件，进行额外处理后返回新的组件

准备：已有组件   高阶组件    处理后的组件

1. 准备一个Login组件

2. 定义一个高阶组件 (函数式组件) （参考HocDemo.js）
```
import React from 'react'

export default function HocDemo(Comp) {
    return (
        <>
            <Comp/>
            <p>这是优化过的Login</p>
        </>
    )
}
```

3. 使用高阶组件处理已有组件，得到一个新的组件
```
import {Login, HocDemo} from './components'

let HocComp = HocDemo(Login)
```

4. 将得到的新组建渲染至组件结构中
```
<div>
    <Login/>
    {HocComp}
</div>
```

# 二、Hooks新特性
> 函数式组件本来是无状态组件
> 如果要对已有函数式组件进行改造升级，在没有Hooks时候，我们需要改为类组件
> Hooks可以让我们函数式组件也用有  state、生命周期钩子函数

1. useState 
> 为函数式组件提供响应式state数据

```
import React,{useState} from 'react'  //【1】引入hooks中的useState方法

export default function HooksDemo() {
    let [num,setNum] = useState(10)  //【2】使用useState，使得函数式组件拥有响应式数据，跟对应方法
    return (
        <div>
            我是无状态组件{num}
            <button onClick={()=>{
                let n = num + 1;
                setNum(n)
            }}>按钮</button>
        </div>
    )
}
```

2. useEffect
> 使得函数式组件拥有能够主动触发的钩子函数

1. 引入useEffect

2. 在函数式组件内部，调用useEffect，作为组件的生命周期来自动触发
```
import React,{useEffect} from 'react'

export default function HooksDemo() {
    useEffect(() => {
        console.log('函数式组件的生命周期钩子')
    })

    return (
        <div>
            我是无状态组件
        </div>
    )
}
```

# 三、本地mock数据方式

1. Rap2

2. json-server

3. node模拟接口

# 四、axios的标准使用流程

1. 普通使用方式
```
import axios from 'axios'

axios.get('全路径').then()
axios.get('全路径').then()
```

2. Component原型下挂载的使用方式
```
import React,{Component} from 'react';

import axios from 'axios'

const instance = axios.create({
    baseURL:'http://rap2api.taobao.org/app/mock/235673/get'
})

Component.prototype.$axios = instance;
```

3. 独立封装请求数据的api模块，统一管理的方式
    + 封装独立的js模块 （参考http/index.js）

    + 在需要请求数据的组件中，解构出对应方法
    ```
    import {getTodoList} from '../../http'
    ```

    + 使用async await的方式，获取请求结果并使用
    ```
    async componentDidMount(){
        let list = await getTodoList('/todo/list') 
        console.log(list)
        this.setState({
            todolist:list.data.data
        })
    }
    ```

# 五、async与await的使用

[文档](https://es6.ruanyifeng.com/#docs/async)