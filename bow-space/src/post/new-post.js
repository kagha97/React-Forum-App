import React from 'react';
import ReactDOM from 'react-dom';
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
    state = { show: false };
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    render() {
      return (
        <main>
          <h1>React Modal</h1>

          <Modal show={this.state.show} handleClose={this.hideModal}>
          
            <div class="card-body">
            <div className = 'form-group'>
            <div className = 'row justify-content-md-left'>
                <label id = 'login-userpass' htmlFor="email" className='mr-sm-2'>Username: </label>
                <input type="email" className="form-control mr-sm-2"  id="email-input" ref='email'/>
                </div>
                </div>
                <div className = 'form-group'>
                <div className = 'row justify-content-md-left'>
                <label id = 'login-userpass' htmlFor = 'title' className = 'mr-sm-2'>Title: </label>
                <input type = 'title' className = 'form-control mr-sm-2' id='email-input' ref='title'/>
                </div>
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
          <button type="button" onClick={this.showModal}>
            open
          </button>
        </main>
      );
    }
}
  
 const container = document.createElement("div");
  document.body.appendChild(container);
  ReactDOM.render(<NewPost />, container);

export default NewPost;