import React from 'react';
        

function LoginHeader() {
    return (
        <div className = 'row justify-content-md-center'>
            <div className='row' id='login-header'>
                <h2 className='mr-sm-2'>Welcome to Bow Space</h2>
            </div>
        </div>
    );
}

function LoginForm() {
    return (
        <div className= 'container' id='login-form'>
            <div className = 'row justify-content-md-center'>
                <div className = 'form-inline'>
                    <label for="email" className='mr-sm-2'>Username: </label>
                    <input type="email" className="form-control mr-sm-2" id="email-input"/>
                </div>
            </div>
            <div className = 'row justify-content-md-center'>
                <div className = 'form-inline'>
                    < label className = 'mr-sm-2' > Password: </label>
                    <input type="password" className="form-control mr-sm-2" id="pwd-input"/>
                </div>
            </div>
            < div className = 'row justify-content-md-center mr-sm-2' >
                <button type="submit" className="btn btn-dark mr-sm-2" id='login-btn'>Login</button>
            </div>
        </div>
    );
}

class Login extends React.Component {
    render() {
        console.log("[login component]");
        console.log(this.props.loginCredentials);
        return (
            <div className = 'container-fluid'>
                <LoginHeader/>
                <LoginForm/>
            </div>
        );
    }
}


export default Login;