import React from 'react';
import {SendPostMessege} from '../API/fetch'


/*ref*/
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <div id='new-post'>
                <div className="card bg-dark mb-3">
                    <h3 className="card-header" id= 'post-title'>Create New Post  
                        <button className = 'btn btn-danger'id='close-post' onClick={handleClose}>✖</button>
                    </h3>
                    {children}
                </div>
            </div>
        </div>
    );
};

class NewPost extends React.Component {

    handleSubmit = () => {
        const newPostProps = this.props.newPostProps;
        const loginCredentials = newPostProps.loginCredentials;
        const handleModalShow = newPostProps.handleModalShow;
        const message = {
            ReceipientId : this.props.loginCredentials.UserId,
            PostHtml : this.refs.body.value,
        }
        SendPostMessege(loginCredentials , message)
            .then(result => console.log(result))
            .catch(error => console.error(error));
        handleModalShow();
    }
    
    render() {
        const newPostProps = this.props.newPostProps;
        const loginCredentials = newPostProps.loginCredentials;
        const newPostData = newPostProps.newPostData;
        const modalShow = newPostData.modalShow;
        const handleModalShow = newPostProps.handleModalShow;
        return (
            <main>
                <Modal>
                    <div className="card-body">
                        <div className = 'form-group'>
                            <div className = 'row justify-content-md-left'>
                                <label id = 'login-userpass' htmlFor="email" className='mr-sm-2'>Receipient: <button className='receipient-button'>{loginCredentials.UserName}</button></label>
                            </div>
                        </div>
                        <div className = 'form-group'>
                            <div className = 'row justify-content-md-left'>
                                <label id = 'login-userpass' htmlFor = 'body' className = 'mr-sm-2'>Body: </label>
                                <textarea type = 'body' className = 'form-control mr-sm-2' id ='email-input' ref='body' rows='7'/>
                            </div>
                        </div>
                        <div className = 'form-group'>
                            <div className = 'row justify-content-md-center mr-sm-2' >
                                <button type="submit" className="btn btn-primary mr-sm-2" id='login-btn' onClick={this.handleSubmit}>Send</button>
                            </div>
                        </div>
                    </div> 
                </Modal>
                <div id='new-post-button' className="newPostButton" onClick={() => handleModalShow()}>+</div>
            </main>
      );
    }
}

export default NewPost;