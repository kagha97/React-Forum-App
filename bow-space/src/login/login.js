import React from 'react';
import {Redirect} from 'react-router-dom';
        

function LoginHeader() {
    return (
        <div className = 'row justify-content-md-center'>
            <div className='row' id='login-header'>
                <h2 className='mr-sm-2'>Welcome to Bow Space</h2>
            </div>
        </div>
    );
}

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
            <div className= 'container' id='login-form'>
                <div className = 'row justify-content-md-center'>
                    <div className = 'form-inline'>
                        <label for="email" className='mr-sm-2'>Username: </label>
                        <input type="email" className="form-control mr-sm-2"  id="email-input" ref='email'/>
                    </div>
                </div>
                <div className = 'row justify-content-md-center'>
                    <div className = 'form-inline'>
                        <label className = 'mr-sm-2'> Password: </label>
                        <input type="password" className="form-control mr-sm-2"  id="pwd-input" ref='pwd'/>
                    </div>
                </div>
                <div className = 'row justify-content-md-center'>
                    <label className = 'mr-sm-2' id='invalid-login'>{message}</label>
                </div>
                < div className = 'row justify-content-md-center mr-sm-2' >
                    <button type="submit" className="btn btn-dark mr-sm-2" id='login-btn' onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        );
    }
}

function authenticateUser(userInputs) {
    let loginCredentials = { status: '', userId : '', loginToken : ''}
    if (userInputs.email !== '' && userInputs.pwd !== '') {
        //replace with api call
        console.log(userInputs.email);
        console.log(userInputs.pwd);
        loginCredentials = { status: 'success', userId : 'b.patel405', loginToken : 'bvc'}
    }
    return loginCredentials;
}


class Login extends React.Component {

    render() {
        const loginAttempt = this.props.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        return (
            <div className = 'container-fluid'>
                {loginStatus === true ? <Redirect to="/" /> : ''}
                <LoginHeader/>
                <LoginForm loginAttempt={loginAttempt} OnSubmitLogin={this.props.OnSubmitLogin}/>
            </div>
        );
    }
}

export default Login;