import React from 'react';
import { GetAllRegisteredUsers } from '../API/fetch.js'
import { Link } from 'react-router-dom'

const UserInfo = (props) => {
    return (
        <div className="card row align-items-center" style={{width: '23rem', background:'#0077b3'}}>
            <img id = "profile" className="card-img-top" src= { require('../images/avatar.png')} alt="User Profile"/>
            <div className="card-body ">
                <label id = "firstlastname">{props.loginCredential.UserName}</label>
                <button href="#" id= "logout" class="btn btn-danger" onClick={props.OnLogout}>Logout</button>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block" style= {{borderRadius: '0em'}}>My Board</button>
        </div>
    );
}

class UserList extends React.Component {

    componentDidMount() {
        console.log("-------------[UserList CDM]------------");
        const LoginToken = this.props.loginCredential.LoginToken;
        GetAllRegisteredUsers(LoginToken)
            .then(result => {
                if (result.Status === 'success' && this.props.userList.length !== result.MatchingUsers.length) {
                    this.props.OnGetUserList(result.MatchingUsers);
                    console.log(this.props.userList.length);
                }
            })
            .catch(error => console.error(error))
    }

    render () {
        const users = this.props.userList;
        return (
            <div id = "user-list-panel" >
                <ul className="list-group">  
                    {users.map( (user) =>      
                        <div id='user-list-item' key={user.index}>
                            <Link to='/' class="list-group-item card bg-dark text-white" key={user}>{user.UserName}</Link>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}


class UserListPanel extends React.Component {
    render() {
        const userList = this.props.userList;
        const OnGetUserList = this.props.OnGetUserList;
        return (
            <div id = "main-panel" className="card  row align-items-center " style={{minHeight: '100vh',width: '23rem', background: '#333333'}}>
                <UserInfo  OnLogout={this.props.OnLogout} loginCredential={this.props.loginCredentials}/>
                <UserList loginCredential={this.props.loginCredentials} userList={userList} OnGetUserList={OnGetUserList}/>     
                <img id = "bottom-logo" style = {{objectFit: 'contain'}} className = "mt-auto" src={ require('../images/bowspace logo.png')} alt='logo'/>
            </div>
        );
    }
}

export default UserListPanel;