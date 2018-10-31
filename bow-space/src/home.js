import React from 'react';
import UserListPanel from "./user/user-list";
import NewPost from "./post/new-post";
import ViewPost from './post/view-post';

class Home extends React.Component {

    render() {        
        const paramSpaceId = this.props[0].match.params.UserId;
        const viewPostProps = this.props.viewPostProps;
        const userListPanelProps = this.props.userListPanelProps;
        const newPostProps = this.props.newPostProps;
        return(
       
               <div id ='main-container' className='container'>
                   <div className = 'row'>
                    <div className = "col-md-3">
                        <UserListPanel userListPanelProps={userListPanelProps}/>
                    </div>
                         
                    <div className="add col-md-8">
                    <div id = 'who-panel'>
                <div id = 'who-profile'> 
                <div id = 'who-profile-text'>G</div>
                </div>
                <div id = 'who-profile-name'></div>
                </div>
                        <ViewPost viewPostProps={viewPostProps} paramSpaceId={paramSpaceId}/>
                    </div>
                    <NewPost newPostProps={newPostProps} paramSpaceId={paramSpaceId}/>
                </div>
                </div>
               
        );
    }
}

export default Home;