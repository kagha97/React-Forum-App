import React from 'react';
import {GetUserList} from '../API/fetch.js'
import { Link } from 'react-router-dom'

function UserInfo(props) {
    var nameProfile = props.loginCredential.UserName.charAt(0).toUpperCase(); //
    return (
        <div className="card row align-items-center" style={{width: '23rem', background:'#0077b3'}}>
            <div id = 'profile'> 
                <div id ='profileText'>{nameProfile}</div>
            </div>
            <div className="card-body ">
                <label id = "firstlastname">{props.loginCredential.UserName}</label>
                <button href="#" id= "logout" className="btn btn-danger" onClick={props.OnLogout}>Logout</button>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block" style= {{borderRadius: '0em'}}><Link to = '/'>My Board</Link></button>
        </div>
    );
}



class UserList extends React.Component {

    componentDidMount() {
        this.prepareUserList();
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
        <div>     
            <label id='user-list-label'>Members</label>  
            <form>
                <div className="form-group">
                </div>
            </form>
            <div className="card" style={{width: '18rem', background: '#0099ff'}}></div> 
            <ul  id = 'user-list' className="list-group list-group-flush align-items-center" style = {{maxHeight: '25em'}}>
             {
                 users.map((user) =><li key={user.UserId}>
                 <Link to = {'/userid='+user.UserId}><button className="bg-primary mb-3 list-group-item text-center d-inline-block" type="submit" style={{width: '16rem'}}>{user.UserName}</button></Link>
                 </li> )
             }
            </ul>
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
        return (
            <div id = "main-panel" className="card row align-items-center" style={{minHeight: '100vh',width: '23rem', background: '#333333'}}>
                <UserInfo loginCredential={loginCredentials} OnLogout={OnLogout} />
                <UserList loginCredential={loginCredentials} userList = {userList} setList = {setUserList}/>
                <img id = "bottom-logo" style = {{objectFit: 'contain'}} className = "mt-auto" src={ require('../images/bowspace logo.png')} alt='logo'/>
            </div>
        );
    }
}

export default UserListPanel;