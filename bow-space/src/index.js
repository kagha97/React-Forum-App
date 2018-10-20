import  React  from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// importing component for routing to different pages
import "./style.css";
import Whoops404 from './error-page';
import Login from './login/login';

//testing imports 
// change all the test component and pages to final componenet
import PostTest from "./post/post-test";
import  UserListTest  from "./user/user-list-test";


class App extends React.Component {
    //app constructor
    constructor(props) {
        super(props);
        this.state = {
            loginCredentials : {
                status : '',
                userId : '',
                loginToken : ''
            },
            loginAttempt : {
                message : '',
                loginStatus : false,
            }
        }
    }

    handleLogin = (newCredentials) => {
        if (newCredentials.status === "success") {
            this.setState(
                {
                    loginCredentials : newCredentials,
                    loginAttempt : {
                        message : "",
                        loginStatus : true
                    }
                }
            );
        }
        else {
            this.setState(
                {
                    loginAttempt : {
                        message : "Try Again!",
                        loginStatus : false
                    }
                }
            );
        }
    }

    //rendering app component
    render() {
        const loginAttempt = this.state.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        const loginCredentials = this.state.loginCredentials;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={(...props) => <Login {...props} loginAttempt={loginAttempt} OnSubmitLogin={this.handleLogin}/>}/>
                    {loginStatus === false ? <Redirect to="/login" /> : ''}
                    <Route exact path='/' component={(...props) => <PostTest  {...props} loginCredentials={loginCredentials}/>}/>
                    <Route component={Whoops404}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

//reder App
ReactDOM.render(<App/>, document.getElementById('root'));