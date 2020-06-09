# 一、Fragment
> 可以当做组件的唯一根节点进行使用，但是不会被渲染为真实DOM

1. 使用Fragment的流程
```
import React, { Component,Fragment} from 'react'

export default class FragmentDemo extends Component {
    render() {
        return (
            <Fragment>
                <li>我是li</li>
                <li>我是li</li>
                <li>我是li</li>
                <li>我是li</li>
            </Fragment>
            // <>
            //     <li>我是li</li>
            //     <li>我是li</li>
            //     <li>我是li</li>
            //     <li>我是li</li>
            // </>
            
        )
    }
}
```

2. 可以使用空标签的方式，达到跟Fragment一样的目的

# 二、props.children
> 作用，类似于Vue的slot插槽

1. 在需要插入新结构的组件内通过props.children占位
```
export default class propsChildrenDemo extends Component {
    render() {
        return (
            <div>
                <h1>演示props.children的组件</h1>
                {this.props.children}
            </div>
        )
    }
}
```

2. 在调用组件时，在组件双标签内部，传递新结构
```
<PropsChildrenDemo>
    <ul>
        <li>我是新结构li</li>
        <li>我是新结构li</li>
        <li>我是新结构li</li>
    </ul>
</PropsChildrenDemo>,

```

# 三、setState的异步问题
```
handleEdit=()=>{
    this.setState({
        isEdit:true
    })
    this.editInput.current.focus() //这句代码会在isEdit引发视图更新之前就执行完毕
}
```


# 四、Todolist剩余功能
1. 编辑功能
    + 如何进行编辑状态控制 (通过动态控制className的方式)

    + 新增state进行className的动态处理

    + 如何让编辑框自动获取焦点 （createRef，setState的异步问题，原生input.focus()）

    + 编辑框失去焦点后，退出编辑状态（考虑代码复用）

    + 如何在编辑框显示的时候，在其内部展示任务内容 (在编辑框显示前，就绑好数据)

    + 在编辑框中输入新内容的时候，如何进行保存 （在失去焦点时进行保存）

2. 底部组件的切换功能
    + 如何触发列表所有List组件的重绘（重新渲染），在必要的时候要重新触发render
    
    + 过滤功能核心是，在渲染List组件前，对原始数据包进行过滤
