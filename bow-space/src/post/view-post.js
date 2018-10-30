import React, {Component} from 'react';
import Post from './post'
import {GetMyPost} from '../API/fetch'

class ViewPost extends Component {
    
    componentDidMount() {
        // setInterval(this.checkNewPost, 1000);
        setTimeout(() => this.checkNewPost(), 1000);
        // this.checkNewPost();
    }
    
    componentWillUnmount() {
        clearInterval();
    }

    checkNewPost = () => {
        const viewPostProps = this.props.viewPostProps;
        const loginCredentials = viewPostProps.loginCredentials;
        const posts = viewPostProps.userPosts.posts;
        const user = viewPostProps.userPosts.user;
        const UpdateUserPost = viewPostProps.UpdateUserPost;
        GetMyPost(loginCredentials.UserId, loginCredentials.LoginToken)
            .then(result => {
                var fetchPosts = result.MatchingPosts;
                if (posts.length !== fetchPosts.length) {
                    UpdateUserPost('', fetchPosts);
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
        const posts = viewPostProps.userPosts.posts;
        const user = viewPostProps.userPosts.user;
        return (
            <div className="col-md-8">
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