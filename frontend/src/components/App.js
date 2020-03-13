import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
// import 'bootstrap'
// import '../../public/style.css';

export default props => {
    console.log('Hear');
    return <h1 className="modal-title">Hi {props.name}!</h1>
}