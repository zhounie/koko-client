import React from 'react'
import chats from '../pages/chats'
import friends from '../pages/friends'
import friendsMaterial from '../pages/friendsMaterial'
import information from '../pages/information'
import mine from '../pages/mine'
import Main from '../pages/main'
import Login from '../pages/login'
import FindFriend from '../pages/findFriend'
import { Switch, HashRouter, Route, BrowserRouter, Redirect } from 'react-router-dom'


const Router = () => {
    return (
        <BrowserRouter>
           <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/chats" component={chats} />
                <Route exact path="/findFriend" component={FindFriend} />
                <Route exact path="/friendsMaterial" component={friendsMaterial} />
                <Main>
                    <Route path="/friends" component={friends} />
                    <Route path="/information" component={information} />
                    <Route exact path="/mine" component={mine} />
                </Main>
                <Redirect from="/" to="/friends"></Redirect>
           </Switch>
        </BrowserRouter>
    )
}

export default Router