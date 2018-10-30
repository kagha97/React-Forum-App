import React, {Component} from 'react';
import UserListPanel from "../user/user-list";
import Post from './post'
import {GetMyPost} from '../API/fetch'
import NewPost from "./new-post";

class ViewPost extends Component {
    
    componentDidMount() {
        setInterval(this.checkNewPost, 1000);
    }
    
    componentWillUnmount() {
        clearInterval();
    }

    checkNewPost = () => {
        GetMyPost(this.props.loginCredentials.UserId, this.props.loginCredentials.LoginToken)
            .then(result => {
                var posts = result.MatchingPosts;
                console.log(this.props.userPosts.posts === posts);
                if (this.props.userPosts.posts.length !== posts.length) {
                    this.props.UpdateUserPost('', posts);
                }
            })
            .catch(error => console.error(error));
    }
    
    render() {
        const loginCredentials = this.props.loginCredentials;
        const userList = this.props.userList;
        const setUserList = this.props.setUserList;
        var posts = this.props.userPosts.posts;
        return (
            <div id = "main-panel" className="row align-items-center " >
                <div className="col-md-4">
                    <UserListPanel userList = {userList} setUserList = {setUserList} loginCredentials={loginCredentials} OnLogout={this.props.OnLogout}/>
                </div>
                <div className="col-md-8">
                    {
                        posts.map((post) => 
                            <div key={post.index}>
                                <Post newPost={post}/>
                            </div>
                        )
                    }
                </div>
                <NewPost loginCredentials={loginCredentials} handleModalShow={this.props.handleModalShow} newPostProps={this.props.newPostProps} />
            </div>
            
        );
    }
}

export default ViewPost;