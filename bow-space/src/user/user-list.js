import React from 'react';
import { GetAllRegisteredUsers, GetMyPost, SendPostMessege } from "../API/fetch.js";

function UserInfo(props) {
    return (
        <div className="card row align-items-center" style={{width: '23rem', background:'#0077b3'}}>
            <img id = "profile" className="card-img-top" src= { require('../images/avatar.png')} alt="User Profile"/>
            <div className="card-body ">
                <label id = "firstlastname">Karamullah Agha</label>
                <label id = "username">k.agha809</label>
                <button href="#" id= "logout" class="btn btn-danger" onClick={props.OnLogout}>Logout</button>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block" style= {{borderRadius: '0em'}}>My Board</button>
        </div>
    );
}

class UserList extends React.Component {
   
   
    render () {
        //can use same method to get user list from api
        return (
        <div>     
            <label id='user-list-label'>User List</label>
            <div className="card" style={{width: '18rem', background: '#0099ff'}}></div> 
            <ul  id = 'user-list' className="list-group list-group-flush align-items-center " style = {{maxHeight: '25em'}}>
                <li type = "button" className="bg-primary mb-3 list-group-item text-center d-inline-block" style={{width: '16rem'}}>Karamullah</li>
                <li type = "button" className="bg-primary mb-3 list-group-item text-center d-inline-block" style={{width: '16rem'}}>Brijesh</li>
                <li type = "button" className="bg-primary mb-3 list-group-item text-center d-inline-block" style={{width: '16rem'}}>Anderson</li>
                <li type = "button" className="bg-primary mb-3 list-group-item text-center d-inline-block" style={{width: '16rem'}}>Kush</li>
            </ul>
        </div>
        );
    }
}


class UserListPanel extends React.Component {
    componentDidMount() {
        GetAllRegisteredUsers(this.props.loginCredentials.LoginToken)
            .then(result => console.log(result))
            .catch(error => {
                console.error(error);
            });
        GetMyPost(this.props.loginCredentials.UserId, this.props.loginCredentials.LoginToken)
        .then(result => console.log(result))
        .catch(error => {
            console.error(error);
        });
        const messege = {
            ReceipientId : this.props.loginCredentials.UserId,
            PostHtml : "Test Messege!"
        };
        SendPostMessege(this.props.loginCredentials, messege)
            .then(result => console.log(result))
            .catch(error => {
                console.error(error);
            });
    }
    render() {
        return (
            <div id = "main-panel" className="card  row align-items-center " style={{minHeight: '100vh',width: '23rem', background: '#333333'}}>
                <UserInfo OnLogout={this.props.OnLogout}/>
                <UserList/>
                <img id = "bottom-logo" style = {{objectFit: 'contain'}} className = "mt-auto" src={ require('../images/bowspace logo.png')} alt='logo'/>
            </div>
        );
    }
}

export default UserListPanel;