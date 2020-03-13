import React from 'react'

import {Route, Router, Redirect, HashHistory} from 'react-router'

import Todo from "./todo/Todo"
import About from "./about/About"

export default props =>(
    <Router history={HashHistory}>
        <Route path={"/todos"} component={Todo}/>
        <Route path={"/about"} component={About}/>
        <Redirect from={"*"} to={"/todos"}/>
    </Router>
)