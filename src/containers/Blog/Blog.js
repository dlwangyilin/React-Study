import React, { Component } from 'react';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch, Redirect} from "react-router-dom";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts"
                                         exact
                                         activeClassName="my-active"
                                         activeStyle={{
                                             color: '#fa923f',
                                             textDecoration: 'underline'
                                         }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: 'new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} >New Post</NavLink></li>
                        </ul>
                    </nav>

                </header>

                <Switch>
                    <Route path="/posts" component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Redirect from="/" to="/posts" />
                </Switch>


            </div>
        );
    }
}

export default Blog;