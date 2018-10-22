import React, {Component} from 'react';
        





class ViewPost extends React.Component {

    //---------CDM --------
    componentDidMount() {
        console.log("-------------[CDM]---------------");
       console.log(this.props.loginCredentials);
    }

    render() {
        console.log("------------[login component]---------------");
        
        return (
         
            <div id = "main-panel" className="card  row align-items-center " style={{minHeight: '100vh',width: '23rem', background: '#333333'}}>
               
               <img id = "bottom-logo" style = {{objectFit: 'contain'}} className = "mt-auto" src={ require('../images/bowspace logo.png') } />
                </div>
                
            
        );
    }
}






export default ViewPost;