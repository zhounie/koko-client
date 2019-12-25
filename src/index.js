import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/resetcss.css'
import './assets/iconfont/iconfont.css'
import { Provider } from 'react-redux'
import store from './redux/index'
import Router from './router'
import './config/socket'



ReactDOM.render(
<Provider store={store}>
    <Router />
</Provider>,
document.getElementById('root')
);
