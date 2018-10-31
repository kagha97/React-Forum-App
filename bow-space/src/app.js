import  React  from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Whoops404 from './error-page';
import Login from './login/login';
import Home from "./home";

class App extends React.Component {
    
    constructor(props) {
        super(props);

        // retriving login credentials from session
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
            userList : [],
            userPosts : {
                UserSpaceID : '',
                posts : [],
            },
            newPostData : {
                modalShow : false,
            }
        }
    }

    updateUserSpaceID = (id) => {
        let userPosts = {...this.state.userPosts};
        console.log("_________________________________________");
        console.log(userPosts);
        console.log(id);
        userPosts.UserSpaceID = id;
        this.setState({
            userPosts,
        });
    }

    updateUserPost = (posts) => {
        let userPosts = {...this.state.userPosts};
        userPosts.posts = posts;
        this.setState({
            userPosts,
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

    switchSpace = (id) => {
        this.updateUserSpaceID(id);
        console.log("______________[switchspace]_________");
        console.log(this.state.userPosts);
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

    // set user list
    setUserList = (userList) => {
        if (userList.length !== this.state.userList.length) {
            this.setState({userList : userList});
        }
    }

    //rendering app component
    render() {
        //props for login page
        const loginAttempt = this.state.loginAttempt;
        const loginStatus = loginAttempt.loginStatus;
        const loginCredentials = this.state.loginCredentials;
        //props for view post component
        const viewPostProps = {
            loginCredentials,
            userPosts: this.state.userPosts,
            updateUserSpaceID : this.updateUserSpaceID,
            UpdateUserPost : this.updateUserPost,
            userList: this.state.userList,
        };
        //props for userlist component
        const userListPanelProps = {
            loginCredentials,
            userList : this.state.userList,
            setUserList : this.setUserList,
            OnLogout : this.handleLogout,
            OnSwitchSpace : this.switchSpace,
        };
        //props for newpost component
        const newPostProps = {
            loginCredentials,
            newPostData: this.state.newPostData,
            handleModalShow: this.handleModalShow,
            userList : this.state.userList,
            receipientId: this.state.userPosts.UserSpaceID,
        };
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={(...props) => <Login {...props} loginAttempt={loginAttempt} handleWait={this.handleWait} OnSubmitLogin={this.handleLogin}/>}/>
                    {loginStatus === false ? <Redirect to="/login" /> : ''}
                    <Route exact path='/:UserId?' component={(...props) => <Home  {...props} viewPostProps={viewPostProps} userListPanelProps={userListPanelProps} newPostProps={newPostProps}/>}/>
                    <Route component={Whoops404}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;