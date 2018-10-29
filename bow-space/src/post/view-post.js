import React, {Component} from 'react';
import UserListPanel from "../user/user-list";
import Post from './post'
import userHardcodedPosts from './hardcoded-posts'

class ViewPost extends Component {
    render() {
        console.log("------------[renderin view-post component]---------------");
        const userPosts = this.props.userPosts;
        const loginCredentials = this.props.loginCredentials;
        const OnGetUserList = this.props.OnGetUserList;
        const userList = this.props.userList;
        return (
            <div className="row" >

                <div className="col-md-4">
                    <UserListPanel loginCredentials={loginCredentials} OnGetUserList={OnGetUserList} userList={userList} OnLogout={this.props.OnLogout}/>
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