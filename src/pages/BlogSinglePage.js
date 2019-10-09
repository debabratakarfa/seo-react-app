import React from 'react';
import WPAPI from 'wpapi';
import ReactHtmlParser from 'react-html-parser';
import Seo from '../component/Seo';
import { API } from '../config';


class BlogSinglePage extends React.Component {

  state = {
    post: {},
    loading: true,
  };

  async componentDidMount(): Promise<void> {
    const wp = new WPAPI({ endpoint: API.wpUrl });
    await wp.posts().id(this.params.id)
      .then(( data ) => {
        // do something with the returned posts
        this.setState({ post: data, loading: false });
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
          title={this.state.post.title.rendered}
          description={this.state.post.excerpt.rendered}
        />
        <h2>{this.state.post.title.rendered}</h2>
        <div className="contentSection">
          { ReactHtmlParser( this.state.post.content.rendered ) }
        </div>
      </div>
    );
  }
}

export default BlogSinglePage;
