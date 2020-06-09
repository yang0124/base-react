# 一、新的项目目录规划方式
> TodoList实战

# 二、生命周期函数
## （1）常用生命周期函数
[完整生命周期函数图](https://upload-images.jianshu.io/upload_images/5287253-82f6af8e0cc9012b.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)
1. 初始化阶段
constructor  【重要】
componentWillMount 【未来版本即将移除】 UNSAFE_componentWillMount
render   【重要】
componentDidMount 【重要】 获取在线数据的时候，使用这个生命周期函数

2. 更新阶段

组件接收到新的props值
componentWillReceiveProps  【未来版本即将移除】 UNSAFE_componentWillReceiveProps

shouldComponentUpdate 【重要】 是否进行组件视图更新  【常用作组件渲染的性能优化】

componentWillUpdate  【未来版本即将移除】 UNSAFE_componentWillUpdate

render

getSnapshotsBeforeUpdate  更新内容的快照

componentDidUpdate


3. 卸载阶段

componentWillUnmount

## （2）PureComponent
> 可以主动识别，数据是否发生了更新，从而决定要不要重新渲染组件
> 可以很大程度提高组件渲染性能
演示代码，参考Pure.js 与 PureCompDemo.js
```
import React, { PureComponent } from 'react'

export default class PureCompDemo extends PureComponent {
    render() {
        console.log('pureComponent中的render执行了')
        return (
            <div>
                {this.props.num}
            </div>
        )
    }
}
```

# 三、子父通信 
> 参考代码 (Todo/index.js/handleCheck  与  List/index.js/handlecheck)

1. 在父组件内部定义事件函数

2. 在调用子组件的时候，将父组件的事件函数通过props传递给子组件

3. 子组件拿到父级传过来的事件函数

4. 子组件触发父组件的事件函数并传参


# 四、任务 
实战TodoList
[使用React完成TodoList](http://todomvc.com/examples/react/#/)

1. 先合理拆分组件（粒度）

2. 定义数据包渲染任务列表

3. 新增任务（createRef，onKeyDown，push）

