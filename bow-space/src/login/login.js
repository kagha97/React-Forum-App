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
        console.log("----------[handleSubmit]-------");
        console.log(this.props);
        console.log("------------[refs]-------------");
        let email = this.refs.email.value;
        let pwd = this.refs.pwd.value;
        let userInputs = {email, pwd}
        let newCredentials = authenticateUser(userInputs);
        this.props.OnSubmitLogin(newCredentials);
    }

    render () {
        return (
            <div className= 'container' id='login-form'>
                <div className = 'row justify-content-md-center'>
                    <div className = 'form-inline'>
                        <label for="email" className='mr-sm-2'>Username: </label>
                        <input type="email" className="form-control mr-sm-2" id="email-input" ref='email'/>
                    </div>
                </div>
                <div className = 'row justify-content-md-center'>
                    <div className = 'form-inline'>
                        < label className = 'mr-sm-2' > Password: </label>
                        <input type="password" className="form-control mr-sm-2" id="pwd-input" ref='pwd'/>
                    </div>
                </div>
                < div className = 'row justify-content-md-center mr-sm-2' >
                    <button type="submit" className="btn btn-dark mr-sm-2" id='login-btn' onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        );
    }
}

function authenticateUser(userInputs) {
    console.log("-----------[authenticate user]----------");
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

    //---------CDM --------
    componentDidMount() {
        console.log("-------------[CDM]---------------");
        console.log(this.props.loginCredentials);
    }

    RedirectToUserBoard() {
        console.log("--------[redirect to user board function]------");
        return ( 
            <Redirect to="/user" />
        );
    }

    render() {
        console.log("------------[login component]---------------");
        console.log(this.props);
        const loginCredentials = this.props.loginCredentials;
        const loginStatus = loginCredentials.status;
        return (
            <div className = 'container-fluid'>
                {loginStatus === "success" ? this.RedirectToUserBoard() : ''}
                <LoginHeader/>
                <LoginForm loginCredentials={loginCredentials} OnSubmitLogin={this.props.OnSubmitLogin}/>
            </div>
        );
    }
}

export default Login;