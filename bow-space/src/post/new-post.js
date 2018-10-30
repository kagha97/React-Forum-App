import React from 'react';
import ReactDOM from 'react-dom';
import {SendPostMessege} from '../API/fetch'
/*ref*/
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <div id='new-post'>
        <div class="card bg-dark mb-3">
        <h3 class="card-header" id= 'post-title'>Create New Post  
        <button class = 'btn btn-danger'id='close-post' onClick={handleClose}>✖</button>
        </h3>
          {children}
          </div>
          </div>
        </div>
      
    );
};

class NewPost extends React.Component {

    handleSubmit = () => {
        console.error("---------------[handlesubmit]------------------");
        const message = {
            ReceipientId : this.props.loginCredentials.UserId,
            PostHtml : this.refs.body.value,
        }
        SendPostMessege(this.props.loginCredentials , message)
            .then(result => console.log(result))
            .catch(error => console.error(error));
        this.props.handleModalShow();
    }
    render() {
        const loginCredentials = this.props.loginCredentials;
        const newPostProps = this.props.newPostProps;
        const modalShow = newPostProps.modalShow;
      return (
        <main>
          <Modal show={modalShow} handleClose = {() => this.props.handleModalShow()}>
          
            <div class="card-body">
            <div className = 'form-group'>
            <div className = 'row justify-content-md-left'>
                <label id = 'login-userpass' htmlFor="email" className='mr-sm-2'>Receipient: <button className='receipient-button'>{this.props.loginCredentials.UserName}</button></label>                </div>
                </div>
                <div className = 'form-group'>
                <div className = 'row justify-content-md-left'>
                <label id = 'login-userpass' htmlFor = 'body' className = 'mr-sm-2'>Body: </label>
                <textarea type = 'body' className = 'form-control mr-sm-2' id ='email-input' ref='body'  rows='7'/>
                </div>
                </div>
                <div className = 'form-group'>
                < div className = 'row justify-content-md-center mr-sm-2' >
                <button type="submit" className="btn btn-primary mr-sm-2" id='login-btn' onClick={this.handleSubmit}>Send</button>
                </div>
                </div>
            </div> 
          </Modal>
            <div id='new-post-button' className="newPostButton" onClick={() => this.props.handleModalShow()}>+</div>
        </main>
      );
    }
}

export default NewPost;