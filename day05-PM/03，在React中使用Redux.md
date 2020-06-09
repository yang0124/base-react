# 一、在React中单独使用Redux完成状态管理 （learn-redux项目中）

1. 在React项目中，新建store/index.js，用以定义状态机
```
import {createStore} from 'redux'
import reducer from '../reducer'
const store = createStore(reducer)
export default store

```

2. 在React项目中，新建reducer/index.js，为store提供服务
> 参考 (reducer/index.js)


3. 在需要使用Redux数据的组件中，引入store并使用 (Num.js与Num2.js中)
    + 通过getState获取数据，并通过组件内部的state进行展示
    + 通过subscribe订阅redux数据变化，并重新对组件内部的进行setState

4. 在需要修改Redux数据的组件中，引入store，并进行对应的dispatch
> 例如：Button.js组件


# 二、ActionCreator （learn-react-redux项目中）
> 其本质是一个普通函数，主要作用就在于为我们创造action对象
> [文档](https://cn.redux.js.org/docs/basics/Actions.html)

1. 在项目src下，新建action文件夹，专门存放action相关的模块
    + actionType  统一管理action的type类型
    + ActionCreator 统一管理创造action对象的函数

2. 调整Button.js组件代码，使用ActionCreator创建的action进行dispatch操作

3. 调整reducer，在里面的判断条件中，使用第一步中actionType.js模块



# 三、react-redux 跟 redux 结合使用
> 使用react-redux主要目的在于简化数据绑定与订阅操作
[文档](https://react-redux.js.org/introduction/quick-start)

1. 安装
```
npm i redux react-redux -S
```

2. 在项目的根组件外围使用react-redux提供的Provider下发store状态
> 入口文件：index.js
```
import store from './store'  //【1】引入项目组件中需要使用的状态机
import {Provider} from 'react-redux' //【2】获取到react-redux所提供的Provider组件

ReactDOM.render(
    //【3】通过Provider给项目所有组件下发store状态对象
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));
```

3. 在Num.js组件中，使用react-redux提供的connect获取store数据并渲染
> connect本质是个高阶组件，会将store中的state数据传递到指定组件的props下
> 并且已经对该数据做好了订阅操作，不再需要手动订阅



4. 在组件中使用react-redux触发dispatch （参考Button.js）
> 保证所有的action是通过ActionCreator创建出来的
> 传入connect的所有ActionCreator会被转换为对应的dispatch，直接交付给组件的props