# 一、React-Router的认识
> react-router   react-router-dom   react-router-native
> react-router是react路由核心
> react-router-dom 是web端单页面应用路由管理
> react-router-native 是做跨平台应用开发的时候做路由管理

vue-router的路由初始化的方式，通过配置的方式进行路由关系的匹配
react-router-dom中路由初始化方式，通过组件的方式

# 二、文档推荐
[印记中文](https://docschina.org/#framework)
[react-router文档](https://react-router.docschina.org/web/guides/philosophy)


# 三、react-router-dom 的使用流程

1. 安装
```
npm i react-router-dom -S
```

2. 在index.js中，为App.js根组件外，包裹BrowserRouter（或者HashRouter）
> 这样可以保证所有项目组件都能获取并调用router相关信息
```
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
```


3. 在App.js 内使用Route组件，匹配路由对应关系，并展示相应组件

```
<Route path="/p1" component={P1}></Route> 
<Route path="/p2" component={P2}></Route>
```

4. 通过Link组件，触发路由跳转
```
<ul>
    <li>
        <Link to="/p1">首页</Link>
    </li>
    <li>
        <Link to="/p2">产品</Link>
    </li>
</ul>
```



# 四、路由核心知识

## (1) 路由传参（动态路由）

1. 设置路由形参（Route组件的path中）
```
<Route path="/p1/:id/:name" component={P1}></Route> 
```

2. 传递路由实参（在Link组件的to中）
```
<Link to="/p1/6666/又瞌睡了">首页</Link>
```

3. 在对应组件内部通过 this.props获取路由参数
```
this.props.match.params
```


## (2) 路由嵌套（子路由）

1. 在App.js新增用以匹配子路由的Route组件
```
<Route path="/p1/:id/:name" component={P1}></Route> 
<Route path="/p1/:id/:name/child1" render={()=><h2>我是1号产品</h2>}></Route> 
<Route path="/p1/:id/:name/child2"  render={()=><h2>我是2号产品</h2>}></Route> 
```

2. 注意使用render方法渲染路由组件的新方法
> 作用:在渲染某个组件之前做守卫操作

3. 在主路由对应的组件内部，新增子路由导航 Link （例如：P1.js组件）
```
<ul>
    <li>
        <Link to="/p1/1/2/child1">产品1</Link>
    </li>
    <li>
        <Link to="/p1/0/1/child2">产品2</Link>
    </li>
</ul>
```

## (3) 编程式导航
1. 通过事件出发路由跳转，并传参 （this.props.history.push）
```
<button onClick={()=>{
    // console.log(this.props)
    this.props.history.push({
        pathname:'/p2',
        state:{
            id:'99',
            name:'hello'
        }
    })
}}>编程式导航跳转</button>
```

2. 在目标组件中获取参数
```
this.props.location.state
```

## (4) 路由模式（history模式与hash模式）

history模式  使用BrowserRouter组件
hash模式     使用HashRouter组件
```
<BrowserRouter>
     <App />
</BrowserRouter>

<HashRouter>
    <App />
</HashRouter>
```

## (5) 重定向路由 

1. 当用户访问‘/’路由的时候，重定向至'/p2'路由
```
<Route path="/">
    <Redirect to="/p2"></Redirect>
</Route>
```
2. 使用场景，模拟登录功能

```
let isLogin = true;
<Route path="/" render={()=>{
    return isLogin ? <Redirect to="/p2"></Redirect> : <Login/>
}}>
```

## (7) Switch 
> 跟原生js swiitch case功能类似，
> 只要有某一条路由匹配成功将不再处理其他路由
下面的案例，在不适用Switch的时候，'/p2'路由下回渲染两个组件

```
<Switch>
    <Route path="/p1/:id/:name" component={P1}></Route> 
    <Route path="/p1/:id/:name/child1" render={()=><h2>我是1号产品</h2>}></Route> 
    <Route path="/p1/:id/:name/child2"  render={()=><h2>我是2号产品</h2>}></Route> 

    <Route path="/p2" component={P2}></Route> 
    <Route path="/p3" component={P3}></Route> 

    <Route path="/" render={()=>{
        return isLogin ? <Redirect to="/p2"></Redirect> : <Login/>
    }}>
    </Route>
</Switch>
```

## (7) WithRouter 高阶组件（本质是一个函数）
> 某个组件，如果不是通过路由跳转渲染的话，默认组件内部无法获取路由对象信息
> 例如：当前示例项目的App.js组件

```
import {withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    console.log('这是App组件的render',this.props)
    return (
    );
  }
}

export default withRouter(App);
```





