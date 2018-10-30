import React, {Component} from 'react';
import UserListPanel from "../user/user-list";
import Post from './post'
import userHardcodedPosts from './hardcoded-posts'

class ViewPost extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log("------------[renderin view-post component]---------------");
        const loginCredentials = this.props.loginCredentials;
        const userList = this.props.userList;
        const setUserList = this.props.setUserList;
        return (
 
            <div id = "main-panel" className="row align-items-center " >

                <div className="col-md-4">
                    <UserListPanel userList = {userList} setUserList = {setUserList} loginCredentials={loginCredentials} OnLogout={this.props.OnLogout}/>
                </div>
                <div className="col-md-8">
                    {userHardcodedPosts.map((eachPostOfUser, index) => 
                    <div id={'post'+index} key={index}>
                        <Post newPost={eachPostOfUser} />
                    </div>
                        )}
                </div>
            </div>  
        );
    }
}

export default ViewPost;