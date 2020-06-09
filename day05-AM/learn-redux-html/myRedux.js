const createStore = (reducer)=>{
    let state;  //为状态机定义一个数据
    const getState = ()=>state; //为使用者提供一个可以获取store内部数据的方法

    let listeners = [] //目的是，存放用户在subscribe的时候传入的回调函数
    const subscribe = (listener)=>{ 
        listeners.push(listener)  //将用户订阅store时，传入的回调函数，进行存储
    }

    const dispatch = (action)=>{ //定义dispatch方法，并接受用户想要触发的action对象
        state = reducer(state,action)  //先根据用户提交的action，做数据操作
        
        listeners.forEach((listener)=>{ //我们封装的redux内部，主动触发用户订阅的回调函数
            listener()  
        })
    }

    dispatch({}) //第一次做state数据的初始化

    return{  //对外暴露状态机内部方法，供用户使用
        getState,
        subscribe,
        dispatch
    }
}