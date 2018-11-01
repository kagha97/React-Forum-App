import React from 'react';
import UserListPanel from "./user/user-list";
import NewPost from "./post/new-post";
import ViewPost from './post/view-post';

class Home extends React.Component {
    constructor(props) {
        super(props);
        // app state
        this.state = {
            userList: {
                list: [],
                busy: true,
            },
            userSpaceID: '',
            userPosts: {
                posts: [],
                busy: true,
            },
            newPostData: {
                modalShow: false,
            }
        }
    }

    // callback to update userSpaceId
    updateUserSpaceID = (id) => {
        this.setState({
            userSpaceID: id,
        });
    }

    //callback to update user post
    updateUserPost = (posts, busy = false) => {
        if (this.state.userPosts.posts.length !== 0 && JSON.stringify(posts) === JSON.stringify(this.state.userPosts.posts)) {
            return;
        }
        this.setState({
            userPosts: {
                posts,
                busy: busy
            }
        });
    }

    //callback to show/hide modal for create new post
    handleModalShow = () => {
        this.setState({
            newPostData: {
                modalShow: !this.state.newPostData.modalShow,
            }
        })
    }

    //switching space id 
    // use in user list to select different space
    switchSpace = (id) => {
        this.setState({
            userPosts: {
                posts: [],
                busy: true,
            }
        });
        this.updateUserSpaceID(id);
    }

        // set user list
    setUserList = (list, busy = false) => {
        if (this.state.userList.list.length !== 0 && JSON.stringify(list) === JSON.stringify(this.state.userList.list)) {
            return;
        }
        this.setState( (prvState) => ({
            userList : {
                list,
                busy,
            }
        })
        );
    }

    render() {
        //props for login page
        const loginCredentials = this.props.loginCredentials;
        //props for view post component
        const viewPostProps = {
            loginCredentials,
            userSpaceID: this.state.userSpaceID,
            userPosts: this.state.userPosts,
            updateUserSpaceID : this.updateUserSpaceID,
            UpdateUserPost : this.updateUserPost,
            userList: this.state.userList.list,
        };
        //props for userlist component
        const userListPanelProps = {
            loginCredentials,
            userList : this.state.userList,
            setUserList : this.setUserList,
            OnLogout: this.props.handleLogout,
            OnSwitchSpace : this.switchSpace,
        };
        //props for newpost component
        const newPostProps = {
            loginCredentials,
            newPostData: this.state.newPostData,
            handleModalShow: this.handleModalShow,
            userList : this.state.userList.list,
            receipientId: this.state.userSpaceID,
        };
        return(
         <div id ='main-container'>
             <div className='row' style={{overflowX: 'hidden'}}>
                    <div className = "col-md-3">
                        <UserListPanel userListPanelProps={userListPanelProps}/>
                    </div>       
                    <div className="col-md-8">
                        <ViewPost viewPostProps={viewPostProps}/>
                    </div>
                    <div className='col-md-1'>
                        <NewPost newPostProps={newPostProps}/>
                    </div>
                </div>
            </div>   
        );
    }
}

export default Home;