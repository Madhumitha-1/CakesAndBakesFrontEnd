import React, { useState } from "react";
import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Page from'./Page';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';


function Login(){
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

  const navigate=useNavigate();

 const loginData = {
        "username": username,
        "password": password
    }
  const errors = {
    pass: "invalid username/password"
  };
  const success = {
    pass: "login successfull"
  };

  const userLogin = (e) => {
    e.preventDefault();
    authenticateUser(loginData)
}
const setCookie= (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const authenticateUser = (data) => {
    console.log(data);
    axios.post("http://localhost:8089/api/auth/login", data).then(
        (response) => {
            
            console.log(response);
            if (response.status==200) {
              setCookie("accessToken",response.data.accessToken,1);
              sessionStorage.setItem("username",response.data.username)
                console.log("navigating");
                navigate("/Page")
                setIsSubmitted(true);
              alert('login successfull')
            }
        }, (error) => {
          setErrorMessages({ name: "pass", message: errors.pass });
        }
    );
}


const onInputChangeUsername = event => {
    setUserName(event.target.value)
}

const onInputChangePassword = event => {
    setPassword(event.target.value)
}


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
  <div>
 
 <nav class="navbar">
                <ul class="nav-list">
                  <div class="logo">
                  <Link to="/">  <img src={logo} /></Link> 
                  </div>
                  <div class="title">
                                <h1>&ensp;&ensp;&ensp;&ensp;
                                &ensp;&ensp;CAKES AND BAKES</h1>
                            </div>
    
                </ul>
        
                
                </nav> 
        
        <div className="login-wrapper">
      <form class="form" >
      <h2>Login</h2>
        <div className="input-group">
          <input type="text" name="uname" value={username} onChange={e => onInputChangeUsername(e)} required />
          <label for="loginUser">User Name</label>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-group">
          <input type="password" name="pass" value={password} onChange={e => onInputChangePassword(e)} required />
          <label for="loginPassword">Password</label>
          {renderErrorMessage("pass")}
        </div>
          <input type="submit" class="submit-btn" value="Login" onClick={e => userLogin(e)} />
      </form>
    </div>
  

  
  <footer className="footer">
    <p className="text-footer">
      Copyright ©-All rights are reserved
    </p>
  </footer>
</div>

);

 
    return(
        <div>
        {isSubmitted ? navigate("/Page") : renderForm}
        </div>
    );
}

export default Login;