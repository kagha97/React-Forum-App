import React from 'react';
import {GetUserList} from '../API/fetch.js'
import Wait from '../API/loader.js'

function UserInfo(props) {
    var nameProfile = props.loginCredential.UserName.charAt(0).toUpperCase(); //
    return (
        <div id = 'user-list-head'className="card  align-items-center" >
            <div id = 'profile'> 
                <div id ='profileText'>{nameProfile}</div>
            </div>
            <div className="card-body ">
                <label id = "firstlastname">{props.loginCredential.UserName}</label>
                <button href="#" id= "logout" className="btn btn-danger" onClick={props.OnLogout}><i class="fas fa-sign-out-alt"></i> Logout</button>
            </div>
            <button onClick = {() => props.OnSwitchSpace(props.loginCredential.UserId)}  id='myboard' className="btn btn-primary btn-lg btn-block" ><i class="fas fa-home"></i> Home</button>
        </div>
    );
}



class UserList extends React.Component {

    componentDidMount() {
        this.timerId = window.setTimeout(() => this.prepareUserList(), 1000);
   }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    prepareUserList = () => {
        GetUserList(this.props.loginCredential.LoginToken,0,'')
            .then(data => {
                var mappedData = data.MatchingUsers;
                this.props.setList(mappedData)
            })
            .catch(error => this.props.setList([],true))
            .then(this.timerId = window.setTimeout(() => this.prepareUserList(), 10000));
    }
    
   
    render () {
      const users = this.props.userList.list;
      const waitNeeded = this.props.userList.busy;
     return (
        <div>     
            
           
                <label id='user-list-label'><i class="fas fa-users"></i> Members</label>  
                <div id = 'user-list' className="list-group align-items-center" style = {{}}>
                {  !waitNeeded?
                    users.map((user) =><div key={user.UserId}>
                            <button onClick = {() => this.props.OnSwitchSpace(user.UserId)}  id = 'user-select' className=" mb-3 text-center " type="submit" style={{width: '16rem'}}><div id = 'list-profile'>{user.UserName.charAt(0).toUpperCase()}</div>{user.UserName}</button>
                        </div> 
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
            <div id = "userlist-main-panel" className="card row ">
                <UserInfo loginCredential={loginCredentials} OnLogout={OnLogout} OnSwitchSpace={OnSwitchSpace}/>
                <UserList loginCredential={loginCredentials} userList = {userList} setList = {setUserList} OnSwitchSpace={OnSwitchSpace}/>
                <img id = "bottom-logo" style = {{objectFit: 'contain'}} className = "mt-auto" src={ require('../images/bowspace logo - beta.png')} alt='logo'/>
            </div>
        );
    }
}

export default UserListPanel;