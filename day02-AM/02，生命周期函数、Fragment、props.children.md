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


实战任务suio
[使用React完成TodoList](http://todomvc.com/examples/react/#/)

sha