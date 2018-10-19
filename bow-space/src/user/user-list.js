import React, {Component} from 'react';
        


function UserInfo() {
    return (

        <div className="card row align-items-center" style={{width: '23rem', background:'#0077b3'}}>
        <img className="card-img-top border" src="https://www.w3schools.com/howto/img_avatar.png" alt="User Profile Picture"/>
        <div className="card-body">
          <h5 className="card-title">User Name</h5>
          <p className="card-text">First & Last name</p>
          <a href="#" class="btn btn-danger">Logout</a>
        </div>
      </div>
    );
}

class UserList extends React.Component {

   
    render () {
        return (
            <button type="button" class="btn btn-primary btn-lg btn-block">Home</button>
            
            
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
                <UserList/>

              <span class = "mt-auto" style = {{color: 'white'}} >Bow Space</span>
                </div>
            
        );
    }
}






export default UserListPanel;