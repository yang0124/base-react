# 一、redux中的reducer提供对象类型的数据包

> 注意：每次我们对已有state进行改动后，要返回一个新的对象，不要直接返回原对象

将原有对象转换为新的对象的方法：

1. JSON.stringify()  JSON.parse()

2. Object.assign({新对象},原对象)

3. 新数组 = [...原数组]


# 二、使用redux-thunk实现异步的action

views视图 --> dispatch方法函数 --> ActionCreator中 --> reducer方法函数 --> views视图渲染

1. 尝试直接在普通action里面发起异步操作时
> 报错信息： Actions must be plain objects. Use custom middleware for async actions.

2. 演示使用redux-thunk中间件，
> 也可以采用其他中间件来处理
> 中间价的作用在于 ActionCreator环节，将dispatch方法拦截下来，等异步操作结束后，自己再手动dispatch

3. 安装
```
npm i redux-thunk -S
```

4. 在store/index.js中，为store状态机加入redux-thunk中间件

```
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk' 
import reducer from '../reducer'

const store = createStore(reducer,applyMiddleware(thunk))

export default store
```

5. 在actions/index.js中，新增一个异步的action方法
```
export const noteReadedSync = function (idx){
    console.log('action里面',idx)
    return (dispatch)=>{ //拦截redux的dispatch操作
        console.log(11111)
        return setTimeout(()=>{ //发起异步操作
            dispatch(noteReaded(idx))  //在异步操作成功后，手动dispatch
        },2000)
    }
}
```

6. 在业务组件中，引入noteReadedSync异步action方法并使用
```
<Button type="primary" onClick={()=>{
    // setTimeout(()=>{
        this.props.noteReadedSync(index)
    // },2000)
}}>未阅读</Button>
```


# 三、通知中心核心知识

1. react-redux 结合 redux的使用

2. redux-thunk 实现异步action的流程


# 四、剩余功能

1. 第三方图标库的使用  echarts

2. Form表单组件上传商品

3. Upload组件完成图片上传

4. 第三方富文本编辑器的集成


# 五、React阶段项目周

1. React+react-router+Redux  实现后端管理系统 （管理端）

2. Nodejs+Express+MongoDB  提供服务端  （服务端）

3. uniapp实现跨平台APP项目 （用户端）

4. APP项目类型 
> 贴近真实项目场景
> [项目素材网站](https://ibaotu.com/index.php?m=tags&a=index&class=0-0-0-0-0-c0&key=appquantaosheji&p=3)
    + 学校选课APP
    + 小众的产品买卖APP(买蛋糕、卖包子等)
    + 租房APP 
    + 装修类APP
    + 金融类
    + 亲子教育类


