import React, { Component } from 'react'

class Post extends Component {
    render() { 
        const myAuthor = this.props.sender;
        const myBody = this.props.newPost.PostHtml;
        const myPostId = this.props.newPost.PostId;
        const myDate = this.props.newPost.ValidFromUtc;
        
        //formatting date
        var date = myDate;
        var parts = date.slice(0, -1).split('T');
        var dateComponent = parts[0];
        var timeComponent = parts[1];

        return (
            <div id={'post'+myPostId}>
    
                <div className="card post">
                    <div className="row card-header">
    
                        <div className="col-md-1">
                        <div id = 'post-profile'><div id = 'post-profile-text'>{this.props.sender.charAt(0).toUpperCase()}</div>
                        </div>
                        </div>
                        <div id = 'from'>
                        <strong style={{fontSize : '23px'}}>{myAuthor}</strong>
                        <br/>
                        <span>{dateComponent} @ {timeComponent}</span>
                        </div>
                    </div>
    
                    <div className="row card-body">
                        {myBody}
                    </div>
    
                </div>
                <br/>
            </div>
            );
    }
}

export default Post;