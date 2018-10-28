import React from 'react';
import {GetUserList} from '../API/fetch.js'
function UserInfo(props) {
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
    constructor(props) {
        super(props);
        this.state = {list : '', final : ''};
    } 


    componentDidMount() {
         var theUsers = GetUserList(this.props.loginCredential.LoginToken);
         theUsers.then(resp => {return resp.json()})
         theUsers.then(data => {
            var mappedData = data.MatchingUsers;
            var mappedData = mappedData.map((users, index) => <li key={index}><button key={index} class="bg-primary mb-3 list-group-item text-center d-inline-block" type="submit" style={{width: '16rem'}}>{users.UserName}</button></li> );
            this.setState({list: mappedData})})
    }
  
    render () {
      var user = this.state.list
     return (
        <div>     
            <label id='user-list-label'>User List</label>
            <div className="card" style={{width: '18rem', background: '#0099ff'}}></div> 
            <ul  id = 'user-list' className="list-group list-group-flush align-items-center " style = {{maxHeight: '25em'}}>
             {user}
            </ul>
        </div>
        );
    }
}


class UserListPanel extends React.Component {
    
    componentDidMount() {
       // console.log('"' + this.props.loginCredentials.LoginToken + '"');
       
    }
    render() {
        return (
            <div id = "main-panel" className="card  row align-items-center " style={{minHeight: '100vh',width: '23rem', background: '#333333'}}>
                <UserInfo  OnLogout={this.props.OnLogout} loginCredential={this.props.loginCredentials}/>
                <UserList loginCredential={this.props.loginCredentials}/>
                
                <img id = "bottom-logo" style = {{objectFit: 'contain'}} className = "mt-auto" src={ require('../images/bowspace logo.png')} alt='logo'/>
            </div>
        );
    }
}

export default UserListPanel;