import React, { Component } from 'react'

class Post extends Component {
    render() { 
        const myTitle = this.props.newTitle;
        const myAuthor = this.props.newAuthor;
        const myDate = this.props.newDate.toLocaleTimeString();
        const myBody = this.props.newBody
        return (
        <div>
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4><strong>{myTitle}</strong></h4> 
                    </div>
                    <div className="panel-heading">
                        <strong>by {myAuthor}</strong> <span className="text-muted">{myDate}</span>
                    </div>
                    <div className="panel-body">
                        {myBody}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Post;