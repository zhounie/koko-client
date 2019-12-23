import React from 'react'
import chats from '../pages/chats'
import friends from '../pages/friends'
import friendsMaterial from '../pages/friendsMaterial'
import information from '../pages/information'
import mine from '../pages/mine'
import Main from '../pages/main'
import { Switch, HashRouter, Route, BrowserRouter, Redirect } from 'react-router-dom'


const Router = () => {
    return (
        <BrowserRouter>
           <Switch>
                <Route exact path="/chats" component={chats} />
                <Main>
                    <Route path="/friends" component={friends} />
                    <Route path="/information" component={information} />
                </Main>
                <Route exact path="/friendsMaterial" component={friendsMaterial} />
                <Redirect from="/" to="/friends"></Redirect>
           </Switch>
        </BrowserRouter>
    )
}

export default Router