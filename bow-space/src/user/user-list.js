import React from 'react';
import {GetUserList} from '../API/fetch.js'
import { Link } from 'react-router-dom'
import Wait from '../API/loader.js'

function UserInfo(props) {
    var nameProfile = props.loginCredential.UserName.charAt(0).toUpperCase(); //
    return (
        <div id = 'user-list-head'className="card row align-items-center" >
            <div id = 'profile'> 
                <div id ='profileText'>{nameProfile}</div>
            </div>
            <div className="card-body ">
                <label id = "firstlastname">{props.loginCredential.UserName}</label>
                <button href="#" id= "logout" className="btn btn-danger" onClick={props.OnLogout}><i class="fas fa-sign-out-alt"></i> Logout</button>
            </div>
         <button onClick = {() => props.OnSwitchSpace(props.loginCredential.UserId)}  id='myboard' className="btn btn-primary btn-lg btn-block" ><i class="fas fa-home"></i> My Board</button>
        </div>
    );
}



class UserList extends React.Component {

    componentDidMount() {
         this.prepareUserList(); 
   }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    prepareUserList = () => {
        GetUserList(this.props.loginCredential.LoginToken,0,'')
            .then(response =>  {return response})
            .then(data => {
                var mappedData = data.MatchingUsers;
                this.props.setList(mappedData)
            })
            .catch(error => {
                console.error(error);
            })
    }
    
   
    render () {
      var users = this.props.userList;
     return (
           
            <div id = 'list-container'>     
                <label id='user-list-label'><i class="fas fa-users"></i> Members</label>  
                < div id = 'user-list' className="list-group list-group-flush align-items-center" style = {{maxHeight: '25em'}}>
                {  (users.length !== 0)?
                    users.map((user) =><div key={user.UserId}>
                    <Link to = {'/userid='+user.UserId}><button id = 'user-select' className=" mb-3 list-group-item text-center d-inline-block" type="submit" style={{width: '16rem'}}><div id = 'list-profile'>{user.UserName.charAt(0).toUpperCase()}</div>{user.UserName}</button></Link></div>
                       
                    ) 
                    : <Wait/>
                }
                </div>
            </div>
        
        );
    }
}
class UserListPanel extends React.Component {

    render() {
        const userListPanelProps = this.props.userListPanelProps;
        const loginCredentials = userListPanelProps.loginCredentials;
        const OnLogout = userListPanelProps.OnLogout;
        const userList = userListPanelProps.userList;
        const setUserList = userListPanelProps.setUserList;
        const OnSwitchSpace = userListPanelProps.OnSwitchSpace;
        return (
            <div id = "userlist-main-panel" className="card row align-items-center">
                <UserInfo loginCredential={loginCredentials} OnLogout={OnLogout} OnSwitchSpace={OnSwitchSpace}/>
                <UserList loginCredential={loginCredentials} userList = {userList} setList = {setUserList} OnSwitchSpace={OnSwitchSpace}/>
                <img id = "bottom-logo" style = {{objectFit: 'contain'}} className = "mt-auto" src={ require('../images/bowspace logo - beta.png')} alt='logo'/>
            </div>
        );
    }
}

export default UserListPanel;