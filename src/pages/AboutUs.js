import React, { Component } from 'react';
import WPAPI from 'wpapi';
import Seo from '../component/Seo';
import { API } from '../config';

export default class extends Component {
  state = {
    pageContent: [],
  };

  componentDidMount() {
    const wp = new WPAPI({ endpoint: API.wpUrl });
    wp.pages().id( 2 )
      .then(( data ) => {
        // do something with the returned posts
        this.setState({ pageContent: data });
      })
      .catch(( err ) => {
        // handle error
        console.log( err );
      });
  }

  render() {
    return (
      <div>
        <Seo title={this.state.pageContent.slug} />
        <h2>{this.state.pageContent.slug}</h2>
      </div>
    );
  }
}
