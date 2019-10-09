import React, { Component } from 'react';
import WPAPI from 'wpapi';
import { Link } from 'react-router';
import { API } from '../config';

export default class extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const wp = new WPAPI({ endpoint: API.wpUrl });
    wp.posts().get()
      .then(( data ) => {
        // do something with the returned posts
        this.setState({ posts: data });
      })
      .catch(( err ) => {
        // handle error
        console.log( err );
      });
  }

  render() {
    return (
      <div>
        <h2>List of Blog</h2>
        <div>
          <ul className="blogList__link">
            {
              this.state.posts.map(post => (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}/${post.id}`}>{post.title.rendered}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
