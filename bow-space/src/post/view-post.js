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
         
            // <div id = "main-panel" className="row align-items-center " >
            // {/* <div nameClass="row"> */}
            //     <div className="col-md-4" style={{minHeight: '100vh',width: '23rem', background: '#333333'}}>
            //         <p>user-list</p>
            //     </div>

                // <div className="col-md-8">
                //     {this.state.userPosts.map((eachPostOfUser) => (<Post newPost={eachPostOfUser} />))}
                //     {/* <Post newPost={aPost}/> */}
                // </div>
            // </div>


            <div id = "main-panel" className="row align-items-center " >
            {/* <div nameClass="row"> */}
            <div className="col-md-3">
                        <div className="wrapper">
                            <nav id="sidebar">
                                <div className="sidebar-header">
                                    <h3>USERNAME</h3>
                                </div>
                                <ul className="list-unstyled components">
                                    <p>Online Users:</p>
                                    <li>
                                        <a href="#">User 1</a>
                                    </li>
                                    <li>
                                        <a href="#">User 2</a>
                                    </li>
                                    <li>
                                        <a href="#">User 3</a>
                                    </li>
                                </ul>
                                <ul class="list-unstyled customBtn">
                                    <li><a href="#" class="download">Logout</a></li>
                                </ul>
                            </nav>    
                        </div>
                    </div>

                    <div className="col-md-9">
                        {this.state.userPosts.map((eachPostOfUser, index) => 
                        <div id={'post'+index} key={index}>
                            <Post newPost={eachPostOfUser} />
                        </div>
                            )}
                        {/* <Post newPost={aPost}/> */}
                    </div>
            </div>
            
        );
    }
}






export default ViewPost;