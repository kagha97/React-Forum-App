import React, {Component} from 'react';
        


function UserInfo() {
    return (

        <div className="card row align-items-center" style={{width: '23rem', background:'#0077b3'}}>
        <img className="card-img-top border" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1668d9ddfb0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1668d9ddfb0%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.18333435058594%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="User Profile Picture"/>
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
           <h1>test</h1> 
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
            </div>
        );
    }
}






export default UserListPanel;