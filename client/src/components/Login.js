import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './AddEvent.css'
import API from '../utils/API';
import {Alert} from "react-bootstrap"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    function handleEmailChange(e){
        setEmail(e.currentTarget.value);
    }

    function handlePasswordChange(e){
        setPassword(e.currentTarget.value);
    }

    function handleSubmit(evt){
        evt && evt.preventDefault && evt.preventDefault();
        API.login({username: email, password: password}).then(res =>{
            localStorage.setItem("user", JSON.stringify(res.data));
            setLoggedIn(true);
        }).catch(err => setShowAlert(true));
    }

    return(
        <React.Fragment>
        {showAlert ? <Alert style={{marginBottom: "0", borderRadius: "7px"}} variant={"danger"} dismissible="true">Incorrect Log In</Alert>: null}
        {loggedIn ? <Redirect to="/app" /> : null}
        <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={handleSubmit}>
                    <span className="contact100-form-title">Business Log In</span>

                    <div className="wrap-input100">
                        <input className="input100" type="text" name="email" value={email} onChange={handleEmailChange} placeholder="Account Email" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100">
                        <input className="input100" type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Login;