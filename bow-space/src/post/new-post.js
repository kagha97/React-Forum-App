import React from 'react';

class NewPost extends React.Component {
render () {
    return (
        <div className= 'row justify-content-md-center' id='login-form'> 
        <div class="card  bg-dark mb-3" id='login-form' style={{width:'50em'}}>
        <div className = 'card-header'>  <img id = "logo" src={ require('../images/bowspace logo.png') }/></div> 
        <div class="card-body">
        <div className = "form-group">
                <div className = 'row justify-content-md-left'>
                <label id = 'login-userpass' htmlFor="email" className='mr-sm-2'>Username: </label>
                <input type="email" className="form-control mr-sm-2"  id="email-input" ref='email'/>
                </div>
                <div className = 'row justify-content-md-left'>
                <label id = 'login-userpass' htmlFor = 'title' className = 'mr-sm-2'>Title: </label>
                <input type = 'title' className = 'form-control mr-sm-2' id='email-input' ref='title'/>
                </div>
                <div className = 'row justify-content-md-left'>
                <label id = 'login-userpass' htmlFor = 'body' className = 'mr-sm-2'>Body: </label>
                <textarea type = 'body' className = 'form-control mr-sm-2' id ='email-input' ref='body'  rows='7'/>
                </div>
                < div className = 'row justify-content-md-center mr-sm-2' >
                <button type="submit" className="btn btn-primary mr-sm-2" id='login-btn' onClick={this.handleSubmit}>Send</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    
    );
}
}

export default NewPost;