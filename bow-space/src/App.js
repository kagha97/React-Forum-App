import React from 'react';
import {  Route } from 'react-router-dom';

// testing component for routing
import LoginTest from './login/login-test';
import PostTest from './post/post-test';
import UserListTest from './user/user-list-test';


const App = () =>
    <div>
        <Route exact path='/#' Component={LoginTest}/>
        <Route path='/post' Component={PostTest}/>
        <Route path='/user/:id' Component={UserListTest}/>
    </div>;


export default App;