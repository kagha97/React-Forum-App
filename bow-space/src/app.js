import  React  from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Whoops404 from './error-page';
import Login from './login/login';
import Home from "./home";

class App extends React.Component {
    
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
            userPosts : {
                user : '',
                posts : []
            },
            newPostData : {
                modalShow : false,
            }
        }
    }

    updateUserPost = (user, posts) => {
        this.setState({
            userPosts: {
                user : user,
                posts : posts
            }
        });
    }

    handleModalShow = () => {
        this.setState ({
            newPostData: {
                modalShow : !this.state.newPostData.modalShow,
            }
        })
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

    // set user list
    setUserList = (userList) => {
        if (userList.length !== this.state.userList.length) {
            this.setState({userList : userList});
        }
    }

    componentDidMount() {
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
    }

    //rendering app component
    render() {
        const loginAttempt = this.state.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        const loginCredentials = this.state.loginCredentials;
        const viewPostProps = {
            loginCredentials,
            userPosts: this.state.userPosts,
            UpdateUserPost : this.updateUserPost,
        };
        const userListPanelProps = {
            loginCredentials,
            userList : this.state.userList,
            setUserList : this.setUserList,
            OnLogout : this.handleLogout,
        };
        const newPostProps = {
            loginCredentials,
            newPostData: this.state.newPostData,
            handleModalShow: this.handleModalShow,
        };
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={(...props) => <Login {...props} loginAttempt={loginAttempt} handleWait={this.handleWait} OnSubmitLogin={this.handleLogin}/>}/>
                    {loginStatus === false ? <Redirect to="/login" /> : ''}
                    <Route exact path='/' component={(...props) => <Home  {...props} viewPostProps={viewPostProps} userListPanelProps={userListPanelProps} newPostProps={newPostProps}/>}/>
                    <Route component={Whoops404}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;