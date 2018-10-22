import React from 'react';
import {Redirect} from 'react-router-dom';

class LoginForm extends React.Component {

    handleSubmit = () => {
        let email = this.refs.email.value;
        let pwd = this.refs.pwd.value;
        let userInputs = {email, pwd};
        let newCredentials = authenticateUser(userInputs);
        this.props.OnSubmitLogin(newCredentials);
    }

    render () {
        const message = this.props.loginAttempt.message;
        return (
            <div className= 'row justify-content-md-center'> 
                <div className="card  bg-dark mb-3" id='login-form' style={{width:'21em'}}>
                    <div className = 'card-header'>  <img id = "logo" src={ require('../images/bowspace logo.png')} alt='bowspace'/></div> 
                        <div className="card-body">
                            <label htmlFor = 'login head' id = "login-head" > WELCOME! </label>
                            <label  htmlFor = 'login message' id = "login-msg">Nice to see you again, please login.</label>
                            <div className = 'row justify-content-md-center'>
                                <div className = 'form-group'>
                                    <label  htmlFor = 'email input' id = 'login-userpass' className='mr-sm-2'>Username: </label>
                                    <input type="email" className="form-control mr-sm-2"  id="email-input" ref='email'/>
                                </div>
                            </div>
                        <div className = 'row justify-content-md-center'>
                            <div className = 'form-group'>
                                <label  htmlFor = 'pwd input' id = 'login-userpass' className = 'mr-sm-2'> Password: </label>
                                <input type="password" className="form-control mr-sm-2"  id="pwd-input" ref='pwd'/>
                            </div>
                        </div>
                        <div className = 'row justify-content-md-center'>
                            <label  htmlFor = 'login status' className = 'mr-sm-2' id='login-status-message'>{message}</label>
                        </div>
                        <div className = 'row justify-content-md-center mr-sm-2' >
                            <button type="submit" className="btn btn-primary mr-sm-2" id='login-btn' onClick={this.handleSubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function postRequest(url, emailAddress, password) {
    return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                EmailAddress: emailAddress,
                Password: password,
            }).then(response => response.json())
        })
}

function authenticateUser(userInputs) {
    let loginCredentials = { status: '', userId : '', loginToken : ''}
    if (userInputs.email !== '' && userInputs.pwd !== '') {
        //replace with api call
        console.log("-----------[fetch]---------");
        console.log("---------[fetch complete]-----------");
    }
    return loginCredentials;
}


class Login extends React.Component {

    render() {
        const loginAttempt = this.props.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        return (
            <div id = 'login-background'>
                    {loginStatus === true ? <Redirect to='/' /> : ''}
                    <LoginForm loginAttempt={loginAttempt} OnSubmitLogin={this.props.OnSubmitLogin}/>
            </div>
        );
    }
}

export default Login;