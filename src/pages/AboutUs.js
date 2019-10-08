import React, { Component, Fragment } from 'react';
import WPAPI from 'wpapi';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Seo from '../component/Seo';
import { API } from '../config';

export default class extends Component {
  state = {
    pageContent: [],
    loading: true,
  };

  componentDidMount() {
    const wp = new WPAPI({ endpoint: API.wpUrl });
    wp.pages().id( 2 )
      .then(( data ) => {
        // do something with the returned posts
        this.setState({ pageContent: data, loading: false });
      })
      .catch(( err ) => {
        // handle error
        console.log( err );
      });
  }

  render() {
    return this.state.loading ? (
      <p>loading...</p>
    ) : (
      <div>
        <Seo
          title={this.state.pageContent.title.rendered}
          description={this.state.pageContent.excerpt.rendered}
        />
        <h2>{this.state.pageContent.title.rendered}</h2>
        <div className="contentSection">
          { ReactHtmlParser( this.state.pageContent.content.rendered ) }
        </div>
      </div>
    );
  }
}
