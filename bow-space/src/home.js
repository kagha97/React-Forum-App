import React from 'react';
import UserListPanel from "./user/user-list";
import NewPost from "./post/new-post";
import ViewPost from './post/view-post';

class Home extends React.Component {
    render() {
        const viewPostProps = this.props.viewPostProps;
        const userListPanelProps = this.props.userListPanelProps;
        const newPostProps = this.props.newPostProps;
        return(
            <div id="main-panel" className="row align-items-center">
                <div className = "col-md-4">
                    <UserListPanel userListPanelProps={userListPanelProps}/>
                </div>
                <div className="col-md-8">
                    <ViewPost viewPostProps={viewPostProps}/>
                </div>
                <NewPost newPostProps={newPostProps}/>
            </div>
        );
    }
}

export default Home;