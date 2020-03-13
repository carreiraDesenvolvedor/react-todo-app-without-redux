import React from "react"
import ReactDOM from "react-dom"

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import './template/custom.css'

import Menu from "./template/Menu"
// import Routes from "./routes"

const container = document.getElementById("root")
container ?
    ReactDOM.render(
        <div className="container">
            <Menu/>
        </div>
        , container)

    : false

