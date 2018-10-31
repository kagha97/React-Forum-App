import React, {Component} from 'react';
import Post from './post'
import {GetMyPost} from '../API/fetch'

class ViewPost extends Component {
    
    componentDidMount() {
        // setInterval(this.checkNewPost, 1000);
        this.timerId = window.setTimeout(() => this.checkNewPost(), 1000);
        // this.checkNewPost();
    }
    
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    checkNewPost = () => {
        const viewPostProps = this.props.viewPostProps;
        const loginCredentials = viewPostProps.loginCredentials;
        const userPosts = viewPostProps.userPosts;
        const posts = userPosts.posts;
        const UpdateUserPost = viewPostProps.UpdateUserPost;
        var userId = viewPostProps.userSpaceID;
        if (userId === "") {
            userId = loginCredentials.UserId;
        }
        GetMyPost(userId, loginCredentials.LoginToken)
            .then(result => {
                var fetchPosts = result.MatchingPosts;
                if (posts.length !== fetchPosts.length) {
                    UpdateUserPost(fetchPosts);
                }
            })
            .catch(error => console.error(error));
    }

    getUserName = id => {
        const userList = this.props.viewPostProps.userList;
        const user = userList.find((user) => user.UserId === id);
        if (user) {
            return user.UserName;
        }
        return '';
    }
    
    render() {
        const viewPostProps = this.props.viewPostProps;
        const userPosts = viewPostProps.userPosts;
        const posts = userPosts.posts;
        return (
            <div id = 'message-container' className="">
                {
                    posts.map((post) => 
                        <div key={post.PostId}>
                            <Post newPost={post} sender={this.getUserName(post.SenderId)}/>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default ViewPost;