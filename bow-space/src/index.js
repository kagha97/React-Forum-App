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
            userList : [],
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
        console.log("---------[handleLogin]----------");
        console.dir(this.state);
        console.table(sessionStorage);
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
        sessionStorage.setItem("Status", '');
        sessionStorage.setItem("UserId", '');
        sessionStorage.setItem("LoginToken", '');
        sessionStorage.setItem("UserName", '');
    }

    updateUserList = (userList) => {
        this.setState({
            userList : userList
        });
    }

    componentDidMount() {
        
    }

    //rendering app component
    render() {
        const currentCredentials = this.state.loginCredentials;
        if (currentCredentials.Status !== 'success' && sessionStorage.getItem('Status') === 'success') {
            const newCredentials = {
                Status: sessionStorage.getItem("Status"),
                UserId: sessionStorage.getItem("UserId"),
                LoginToken: sessionStorage.getItem("LoginToken"),
                UserName: sessionStorage.getItem("UserName"),
            }
            this.handleLogin(newCredentials);
        }
        const loginAttempt = this.state.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        const loginCredentials = this.state.loginCredentials;
        const userList = this.state.userList;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={(...props) => <Login {...props} loginAttempt={loginAttempt} handleWait={this.handleWait} OnSubmitLogin={this.handleLogin}/>}/>
                    {loginStatus === false ? <Redirect to="/login" /> : ''}
                    {/* <Route exact path='/' component={(...props) => <UserListPanel  {...props} loginCredentials={loginCredentials} OnLogout={this.handleLogout} userList={userList} OnGetUserList={this.updateUserList} userPosts={userHardcodedPosts}/>}/> */}
                    <Route exact path='/' component={(...props) => <ViewPost  {...props} loginCredentials={loginCredentials} OnLogout={this.handleLogout} userList={userList} OnGetUserList={this.updateUserList} userPosts={userHardcodedPosts}/>}/>
                    <Route component={Whoops404}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

//reder App
ReactDOM.render(<App/>, document.getElementById('root'));