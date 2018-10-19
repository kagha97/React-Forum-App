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

//render routing pages
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/post' component={PostTest}/>
            <Route path='/user-board' component={UserListTest}/>
            <Route component={Whoops404}/>
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));