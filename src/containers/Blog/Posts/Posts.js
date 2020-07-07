import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import './Posts.css';
import {Link} from "react-router-dom";


class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount() {
        let url = '/posts';
        // make HTTP request here.
        axios.get(url)
            .then(response => {
                const posts = response.data.splice(0,4);  //要从API里调
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                console.log(response);})
            .catch(error => {
                console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        // push a page in the stack
        // this.props.history.push('/' + id);
        this.props.history.push({pathname:'/' + id});
    };

    render() {

        let posts = <p style={{textAlign: 'center', color: 'red'}}>Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                );
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;