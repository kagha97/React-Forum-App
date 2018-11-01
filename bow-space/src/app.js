import  React  from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Whoops404 from './error-page';
import Login from './login/login';
import Home from "./home";

class App extends React.Component {
    
    constructor(props) {
        super(props);

        //state variable for login
        var loginCredentials = {
            Status: '',
            UserId: '',
            LoginToken: '',
            UserName: '',
        }
        var loginAttempt = {
            message: '',
            loginStatus: false,
            waitNeeded: false,
        }
        // retriving login credentials from session
        if (sessionStorage.getItem('Status') === 'success') {
            loginCredentials = {
                Status: sessionStorage.getItem("Status"),
                UserId: sessionStorage.getItem("UserId"),
                LoginToken: sessionStorage.getItem("LoginToken"),
                UserName: sessionStorage.getItem("UserName"),
            }
            loginAttempt.loginStatus = true;
        }

        // app state
        this.state = {
            loginCredentials,
            loginAttempt,
        }
    }

    //handle wait for login loading
    handleWait = () => {
        this.setState({
                loginAttempt: {
                    waitNeeded: true
                }
            });
    }

    handleLogin = (newCredentials) => {
        // change state of app if login attempt was successful or not
        if (newCredentials.Status === "success") {
            this.setState({
                    loginCredentials : newCredentials,
                    loginAttempt : {
                        message : '',
                        loginStatus : true,
                        waitNeeded : false,
                    }
            });
            //set local session
            sessionStorage.setItem("Status", newCredentials.Status);
            sessionStorage.setItem("UserId", newCredentials.UserId);
            sessionStorage.setItem("LoginToken", newCredentials.LoginToken);
            sessionStorage.setItem("UserName", newCredentials.UserName);
        }
        else {
            this.setState({
                    loginAttempt : {
                        message : "Invalid credentials used. Try Again Please!",
                        loginStatus : false,
                        waitNeeded : false,
                    }
            });
        }
    }

    // logout user
    handleLogout = () => {
        this.setState(
            {
                loginCredentials : {
                    Status : '',
                    UserId : '',
                    LoginToken : '',
                    UserName : ''
                },
                loginAttempt : {
                    message : '',
                    loginStatus : false,
                }
            }
        );
        // set local session variables to empty
        sessionStorage.removeItem("Status");
        sessionStorage.removeItem("UserId");
        sessionStorage.removeItem("LoginToken");
        sessionStorage.removeItem("UserName");
    }

    //rendering app component
    render() {
        //props for login page
        const loginAttempt = this.state.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        const loginCredentials = this.state.loginCredentials;
        const handleLogout = this.handleLogout;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={(...props) => <Login {...props} loginAttempt={loginAttempt} handleWait={this.handleWait} OnSubmitLogin={this.handleLogin}/>}/>
                    {loginStatus === false ? <Redirect to="/login" /> : ''}
                    <Route exact path='/' component={(...props) => <Home  {...props} loginCredentials={loginCredentials} handleLogout={handleLogout}/>}/>
                    <Route component={Whoops404}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;