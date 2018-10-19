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

class LoginForm extends React.Component {

    handleSubmit = () => {
        console.log("----------[handleSubmit]-------");
        console.log(this.props);
        let newCredentials = authenticateUser();
        this.props.OnSubmitLogin(newCredentials);
    }

    render () {
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
                    <button type="submit" className="btn btn-dark mr-sm-2" id='login-btn' onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        );
    }
}

function authenticateUser() {
    //replace with api call
    let loginCredentials = { status: 'success', userId : 'b.patel405', loginToken : 'bvc'}
    return loginCredentials;
}


class Login extends React.Component {

    //---------CDM --------
    componentDidMount() {
        console.log("-------------[CDM]---------------");
        console.log(this.props.loginCredentials);
    }

    render() {
        console.log("------------[login component]---------------");
        console.log(this.props);
        const loginCredentials = this.props.loginCredentials;
        return (
            <div className = 'container-fluid'>
                <LoginHeader/>
                <LoginForm loginCredentials={loginCredentials} OnSubmitLogin={this.props.OnSubmitLogin}/>
            </div>
        );
    }
}

export default Login;