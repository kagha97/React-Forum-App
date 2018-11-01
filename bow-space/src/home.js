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