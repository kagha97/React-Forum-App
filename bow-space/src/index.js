import  React  from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// importing component for routing to different pages
import "./style.css";
import Whoops404 from './error-page';
import Login from './login/login';

//testing imports 
// change all the test component and pages to final componenet
import UserListPanel from "./user/user-list";

//importing components from view-post
import ViewPost from "./post/view-post";
import userHardcodedPosts from './post/hardcoded-posts'

class App extends React.Component {
    //app constructor
    constructor(props) {
        super(props);
        this.state = {
            loginCredentials : {
                Status : '',
                UserId : '',
                LoginToken : '',
                UserName : '',
            },
            loginAttempt : {
                message : '',
                loginStatus : false,
                waitNeeded: false,
            },
            userPosts : userHardcodedPosts,
        }
    }

    //handle wait
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
    }


    //rendering app component
    render() {
        const loginAttempt = this.state.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        const loginCredentials = this.state.loginCredentials;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={(...props) => <Login {...props} loginAttempt={loginAttempt} handleWait={this.handleWait} OnSubmitLogin={this.handleLogin}/>}/>
                    {loginStatus === false ? <Redirect to="/login" /> : ''}
                    {/* <Route exact path='/' component={(...props) => <UserListPanel  {...props} loginCredentials={loginCredentials} OnLogout={this.handleLogout}/>}/> */}
                    <Route exact path='/' component={(...props) => <ViewPost  {...props} loginCredentials={loginCredentials} OnLogout={this.handleLogout} userPosts={userHardcodedPosts}/>}/>
                    <Route component={Whoops404}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

//reder App
ReactDOM.render(<App/>, document.getElementById('root'));