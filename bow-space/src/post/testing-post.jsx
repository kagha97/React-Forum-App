import React, { Component } from 'react'

class Post extends Component {
    render() { 
        const myTitle = this.props.newPost.aTitle;
        const myAuthor = this.props.newPost.anAuthor;
        const myDate = this.props.newPost.aDate.toLocaleTimeString();
        const myBody = this.props.newPost.aBody
        return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4><strong>{myTitle}</strong></h4> 
                            </div>
                            <div className="card-body">
                                {myBody}
                            </div>
                            <div className="card-footer">
                                <strong>by {myAuthor}</strong> - <span className="text-muted">{myDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Post;