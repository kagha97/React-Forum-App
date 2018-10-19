import  React  from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
                loginStatus : '',
                userId : '',
                loginToken : ''
            }
        }
    }

    //rendering app component
    render() {
        const loginCredentials = this.state.loginCredentials;
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={(...props) => <Login {...props} loginCredentials={loginCredentials}/>}/>
                    <Route path='/post' component={PostTest}/>
                    <Route path='/user-board' component={UserListTest}/>
                    <Route component={Whoops404}/>
                </Switch>
            </BrowserRouter>
        );
    }
}


//reder App
ReactDOM.render(<App/>, document.getElementById('root'));