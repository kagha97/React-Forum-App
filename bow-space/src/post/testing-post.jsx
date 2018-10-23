import React, { Component } from 'react'

class Post extends Component {
    render() { 
        const myTitle = this.props.newTitle;
        const myAuthor = this.props.newAuthor;
        const myDate = this.props.newDate.toLocaleTimeString();
        const myBody = this.props.newBody
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