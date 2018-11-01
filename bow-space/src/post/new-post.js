import React from 'react';
import {SendPostMessege} from '../API/fetch'

//model function to show create new post form
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <div id='new-post' className='row  justify-content-md-center'>
                <div className="card bg-dark ">
                    <h3 className="card-header ml-sm-4" id= 'post-title'><i className="fas fa-pencil-alt"></i> Create A New Post  
          
                    </h3>
                    {children}
                </div>
            </div>
        </div>
    );
};

//new  post component 
class NewPost extends React.Component {

    // submit new post to api
    handleSubmit = (receipient) => {
        const newPostProps = this.props.newPostProps;
        const loginCredentials = newPostProps.loginCredentials;
        const handleModalShow = newPostProps.handleModalShow;
        const message = {
            ReceipientId: receipient.UserId,
            PostHtml : this.refs.body.value,
        }
        if (message.PostHtml === "") {
            alert('Post cannot be sent empty!');
            return;
        }
        SendPostMessege(loginCredentials , message)
            .then(result => console.log(result))
            .catch(error => console.error(error));
        this.refs.body.value = "";
        handleModalShow();
    }

    //gets user name from api
    getUserName = userId => {
        const userList = this.props.newPostProps.userList;
        var receipient = this.props.newPostProps.loginCredentials;
        userList.forEach(user => {
            if (JSON.stringify(userId) === JSON.stringify(user.UserId)) {
                receipient = user;
            }
        });
        return receipient;
    }
    
    render() {
        const newPostProps = this.props.newPostProps;
        const newPostData = newPostProps.newPostData;
        const modalShow = newPostData.modalShow;
        const handleModalShow = newPostProps.handleModalShow;
        const receipientId = newPostProps.receipientId;
        const receipient = this.getUserName(receipientId);
        return (
            <main>
                <Modal show={modalShow} handleClose = {() => handleModalShow()}>
                    <div className="card-body" id = "new-post-layout">
                        <div className = 'form-group'>
                            <div className = 'row justify-content-md-left'>
                                <button id = 'new-post-attributes'  className='btn btn-primary disabled  ml-sm-5'>Space:</button><div className='receipient '> {receipient.UserName}</div>
                            </div>
                        </div>
                        <div className = 'form-group'>
                            <div className = 'row justify-content-md-left'>
                                <div id = 'new-post-attributes' className ='btn btn-primary disabled mr-sm-5 ml-sm-5'>Body: </div>
                                <textarea type = 'body' className = 'form-control mr-sm-5 ml-sm-5' id ='new-post-textarea' ref='body' rows='7' maxLength = '500' required/>
                            </div>
                        </div>
                        <div className = 'form-group'>
                            <div className = 'col-xs-4'>
                                <button type="submit"className="btn btn-primary row submit-post-btns"  onClick={() => this.handleSubmit(receipient)}><i className="fas fa-paper-plane"></i> SEND</button>
                                <button  className = 'btn btn-danger row col-xs-2 submit-post-btns' onClick={() => handleModalShow()}><i className="fas fa-times"></i> Cancel</button>
                            </div>
                        </div>
                    </div> 
                </Modal>
                <div id='new-post-button' className="newPostButton" onClick={() => handleModalShow()}><i className="fas fa-pencil-alt"></i></div>
            </main>
      );
    }
}

export default NewPost;