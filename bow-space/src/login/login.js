import React from 'react';
import { Redirect } from 'react-router-dom';
import { GetUserAuth } from "../API/fetch.js";
import Wait from '../API/loader.js';

class LoginForm extends React.Component {

    handleSubmit = () => {
        this.props.handleWait();
        let email = this.refs.email.value;
        let pwd = this.refs.pwd.value;
        let userInputs = {email, pwd};
        authenticateUser(userInputs, this.props.OnSubmitLogin);
    }

    render () {
        const message = this.props.loginAttempt.message;
        const waitNeeded = this.props.loginAttempt.waitNeeded;
        return (    
            <div id = 'login-background'>
            <div className= 'row justify-content-md-center'> 
                <div className="card  bg-dark mb-3 " id='login-form' style={{width:'21em'}}>
                    <div className = 'card-header'>  <img id = "logo" src={ require('../images/bowspace logo.png')} alt='bowspace'/></div> 
                        <div className="card-body">
                            <label htmlFor = 'login head' id = "login-head" > WELCOME! </label>
                            <label  htmlFor = 'login message' id = "login-msg">Nice to see you again, please login.</label>
                            <div className = ' justify-content-md-center'>
                           
                                <div id = 'user-form' className = 'form-group'>
                                    <label  htmlFor = 'email input' id = 'login-userpass' className='mr-sm-2'><i class="fas fa-id-card-alt"></i> USERNAME: </label>
                                    <input type="email" className="form-control mr-sm-2"  id="email-input" ref='email'/>
                                </div>
                            </div>
                        <div className = ' justify-content-md-center'>
                            <div id = 'pass-form' className = 'form-group'>
                                <label  htmlFor = 'pwd input' id = 'login-userpass' className = 'mr-sm-2'><i className="fas fa-key"></i> PASSWORD: </label>
                                <input type="password" className="form-control mr-sm-2"  id="pwd-input" ref='pwd'/>
                            </div>
                        </div>
                      
                        <div className = 'row justify-content-md-center'>
                            <label  htmlFor = 'login status' className = 'mr-sm-2' id='login-status-message'>{ waitNeeded ? <Wait/> : message }</label>
                        </div>
                       
                        <div className = 'justify-content-md-center' >
                            <button type="submit" className="btn btn-primary mr-sm-2" id='login-btn' onClick={this.handleSubmit}><i class="fas fa-sign-in-alt"></i> Login</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

function authenticateUser(userInputs, Login) {
    let loginCredentials = { Status: '', UserId : '', LoginToken : '', UserName : ''}
    GetUserAuth({ EmailAddress: userInputs.email, Password : userInputs.pwd})
        .then(result => {
            if (result.Status === 'success') {
                loginCredentials.Status = result.Status;
                loginCredentials.UserId = result.Login.UserId;
                loginCredentials.LoginToken = result.Login.LoginToken;
                loginCredentials.UserName = result.Login.UserName;
            }
            Login(loginCredentials);
        })
        .catch(error => {
            console.error(error);
        })
}

class Login extends React.Component {
    render() {
        const loginAttempt = this.props.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        const handleWait = this.props.handleWait;
        return (
            <div>
                {loginStatus === true ? <Redirect to='/' /> : ''}
                <LoginForm loginAttempt={loginAttempt} handleWait={handleWait} OnSubmitLogin={this.props.OnSubmitLogin}/>
            </div>
        );
    }
}

export default Login;