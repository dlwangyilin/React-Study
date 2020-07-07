import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
      loadedPost: null
    };

    componentDidMount() {
        console.log(this.props);
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
                let url = '/posts/' + this.props.match.params.id;
                axios.get(url).then(response => {
                    console.log(response);
                    this.setState({loadedPost: response.data})
                });
            }
        }
    }

    deletePostHandler = () => {
        let url = '/posts/' + this.props.id;
        axios.delete(url).then(response => {
            console.log(response);
        });
    }

    render () {
        console.log("In full post");
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;