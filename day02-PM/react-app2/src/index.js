import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'
// import RefsDemo from './components/RefsDemo'
// import LifeCircle from './components/LifeCircle'
import Pure from './components/Pure'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Pure/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
