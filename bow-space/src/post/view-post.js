import React, {Component} from 'react';
        
import Post from './testing-post'

class ViewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo : {
                title : '',
                author : '',
                date : new Date(),
                body: ''
            }
        }
    }

    //---------CDM --------
    componentDidMount() {
        console.log("-------------[CDM]---------------");
        console.log(this.props.loginCredentials);
        
    //    
    }

    render() {
        console.log("------------[renderin view post component]---------------");
        const postContent = this.updatePost;
        const aTitle = 'Another goddamn test';
        const anAuthor = 'John Whatever';
        const aDate = new Date();
        const aBody = 'Whatever someone posts here... Or whatever someone posts here... Blah blah blah... Whatever someone posts here... Or whatever someone posts here... Blah blah blah... Whatever someone posts here... Or whatever someone posts here... Blah blah blah...'
        
        return (
         
            //<div id = "main-panel" className="card  row align-items-center " style={{minHeight: '100vh',width: '23rem', background: '#333333'}}>
            <div>
                <Post postData={postContent} newTitle={aTitle} newAuthor={anAuthor} newDate={aDate} newBody={aBody}/>
               <img id = "bottom-logo" style = {{objectFit: 'contain'}} className = "mt-auto" src={ require('../images/bowspace logo.png') } />
            </div>
                
            
        );
    }
}






export default ViewPost;