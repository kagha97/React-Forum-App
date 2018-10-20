import React from 'react';
import {Redirect} from 'react-router-dom';
        

function LoginHeader() {
    return (

        <div className = 'row justify-content-md-center'>
            <div className='row' id='login-header'>
              
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

   
            <div className= 'row justify-content-md-center' id='login-form'> 
  
                     <div class="card  bg-dark mb-3" id='login-form' style={{width:'21em'}}>
                     <div className = 'card-header'>  <img id = "logo" src={ require('../images/bowspace logo.png') }/></div> 
  <div class="card-body">

  <label id = "login-head">WELCOME!</label>
  <label id = "login-msg">Nice to see you again, please login.</label>
            <div className = 'row justify-content-md-center'>
                <div className = 'form-group'>
                    <label id = 'login-userpass' for="email" className='mr-sm-2'>Username: </label>
                    <input type="email" className="form-control mr-sm-2"  id="email-input" ref='email'/>
                </div>
            </div>
            <div className = 'row justify-content-md-center'>
                <div className = 'form-group'>
                    <label id = 'login-userpass' className = 'mr-sm-2'> Password: </label>
                    <input type="password" className="form-control mr-sm-2"  id="pwd-input" ref='pwd'/>
                </div>
            </div>
            <div className = 'row justify-content-md-center'>
                <label className = 'mr-sm-2' id='invalid-login'>{message}</label>
            </div>
            < div className = 'row justify-content-md-center mr-sm-2' >
                <button type="submit" className="btn btn-primary mr-sm-2" id='login-btn' onClick={this.handleSubmit}>Login</button>
            </div>
            </div>
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

    RedirectToUserBoard() {
        return ( 
            <Redirect to="/user" />
        );
    }

    render() {
        const loginAttempt = this.props.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        return (
            <div id = "login-background">
            <div className = 'container-fluid' >
                {loginStatus === true ? this.RedirectToUserBoard() : ''}
                <LoginHeader/>
                <LoginForm loginAttempt={loginAttempt} OnSubmitLogin={this.props.OnSubmitLogin}/>
            </div>
            </div>
        );
    }
}

export default Login;