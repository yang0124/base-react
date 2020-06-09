import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import axios from 'axios'

const instance = axios.create({
    baseURL:'http://rap2api.taobao.org/app/mock/235673/get'
})

Component.prototype.$axios = instance;

ReactDOM.render(<App/>, document.getElementById('root'));

