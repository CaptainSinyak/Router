import React, { Component } from 'react';
import './post.css';

class Post extends Component {
    state = {
        post: {},
    }

    componentDidMount() {
        const id = this.props.match.params.id || '';

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          post: data
        })
      })
    }

    render() {
        const { post } = this.state;
        const { title, body } = post;

        return (
            <>
                <h1>Post</h1>
                <div>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            </>
        );
    }
};

export default Post;
