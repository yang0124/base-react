import React from 'react'
import './Test.css'

function Test(props){
    let {name,money,work} = props;
    return (<div>
           姓名：{name}
           薪资：{money}
           工作：{work}
        </div>)
}

export default Test
