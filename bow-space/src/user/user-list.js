import React, {Component} from 'react';
        


function UserInfo() {
    var name = "First Last";
    var fAl = name.charAt(0); 
   // alert(fAl);
    return (

        <div className="card row align-items-center" style={{width: '23rem', background:'#0077b3'}}>
        <img id = "profile" className="card-img-top" src= { require('../images/avatar.png')} alt="User Profile Picture"/>
        <div className="card-body ">
         <label id = "firstlastname">Karamullah Agha</label>
         <label id = "username">k.agha809</label>
          <a href="#" id= "logout" class="btn btn-danger">Logout</a>
          
        </div>
      </div>
    );
}

class UserList extends React.Component {
   
   
    render () {
        //can use same method to get user list from api
        var g = ['name1', 'name2', 'name3', 'name4', 'name4', 'name1', 'name2', 'name3', 'name4', 'name4'];
        const listItems = g.map((name) =>
        <li type = "button"  class="bg-primary mb-3 list-group-item text-center d-inline-block" style={{width: '16rem'}}>{name}</li>
        );
        return (
            <div>     
                <label id='user-list'>User List</label>
            <div className="card" style={{width: '18rem', background: '#0099ff'}}>
           
        </div> 
        <ul className="list-group list-group-flush align-items-center pre-scrollable" style = {{maxHeight: '25em'}}>
        {listItems}
        </ul>
      </div>
      
          
        );
    }
}


class UserListPanel extends React.Component {

    //---------CDM --------
    componentDidMount() {
        console.log("-------------[CDM]---------------");
       console.log(this.props.loginCredentials);
    }

    render() {
        console.log("------------[login component]---------------");
        
        return (
            <div className="card  row align-items-center" style={{height: '100vh',width: '23rem', background: '#333333'}}>
                <UserInfo/>
                <button type="button" class="btn btn-primary btn-lg btn-block" style= {{borderRadius: '0em'}}>My Board</button>
                <UserList/>

               <img className = "mt-auto" src={ require('../images/bowspace logo.png') } />
                </div>
            
        );
    }
}






export default UserListPanel;