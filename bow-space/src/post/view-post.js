import React, {Component} from 'react';
        
import Post from './post'

class ViewPost extends Component {
    constructor(props) {
        super(props);

        const userPosts = [ // Hardcoded array of post of an user
            {
                aTitle : 'Another nice test',
                anAuthor : 'John Whatever',
                aDate : new Date(),
                aBody : 'Whatever whatever...  Blah blah blah... '
            },
            {
                aTitle : 'Extra test',
                anAuthor : 'Mary Who',
                aDate : new Date(),
                aBody : 'Nice text...'
            },
            {
                aTitle : 'Array test',
                anAuthor : 'Frank Plank',
                aDate : new Date(),
                aBody : 'Interesting...'
            }
        ];

        this.state = {userPosts};
    }

    //---------CDM --------
    componentDidMount() {
        console.log("-------------[CDM]---------------");
        console.log(this.props.loginCredentials);
        
    //    
    }

    render() {
        console.log("------------[renderin view post component]---------------");
        const aPost = { // Hardcoded single post
            aTitle : 'Another special test',
            anAuthor : 'John Whatever',
            aDate : new Date(),
            aBody : 'Whatever someone posts here... Or whatever someone posts here... Blah blah blah... Whatever someone posts here... Or whatever someone posts here... Blah blah blah... Whatever someone posts here... Or whatever someone posts here... Blah blah blah...'
        }
        
        return (
         
            //<div id = "main-panel" className="card  row align-items-center " style={{minHeight: '100vh',width: '23rem', background: '#333333'}}>
            <div>
                <div>
                    {this.state.userPosts.map((eachPostOfUser) => (<Post newPost={eachPostOfUser} />))}
                    {/* <Post newPost={aPost}/> */}
                </div>
            </div>
                
            
        );
    }
}






export default ViewPost;