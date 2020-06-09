# 一、Redux介绍
> Redux与React ，两者并非强绑定关系
> 我们可以在普通的html中使用Redux

[文档](https://cn.redux.js.org/)

1. 核心概念
    + Store   状态机
    + Action  描述用户行为，本质是一个对象{type:'吃饭'}
    + reducer 根据不同action，处理store数据，返回新数据
    + view    视图层

# 二、Redux的使用
> 设计模式 (观察者模式)

1. reducer  
> reducer方法函数，一定要是一个纯函数
纯函数:结果是完全可预测的
    + 内部不能有Math.random 等不可预测的随机数
    + reducer内部也不能发起异步请求

2. store状态机
> getState   获取状态机提供的数据
> dispatch   触发状态机的动作，让其修改state
> subscribe  订阅状态机的变化，重新渲染视图

# 三、手写Redux核心代码 （造轮子）

> createStore()  封装方法函数
> getState()  dispatch()  subscribe()  调用createStore的时候得到这三个方法