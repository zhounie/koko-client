import React from 'react';
import ReactDOM from 'react-dom';
import chats from './pages/chats'
import friends from './pages/friends'
import friendsMaterial from './pages/friendsMaterial'
import information from './pages/information'
import mine from './pages/mine'
import Main from './pages/main'
import { Switch, HashRouter, Route, BrowserRouter, Redirect } from 'react-router-dom'
import './assets/style/resetcss.css'
import './assets/iconfont/iconfont.css'
import { Provider } from 'react-redux'
import store from './redux/index'



ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Main>
                <Route path="friends" component={friends} />
                <Route path="information" component={information} />
            </Main>
            <Route exact path="/chats" component={chats} />
            <Route exact path="/friendsMaterial" component={friendsMaterial} />
            <Redirect from="/" to="/friends"></Redirect>
        </Switch>
    </BrowserRouter>
</Provider>,
document.getElementById('root')
);
