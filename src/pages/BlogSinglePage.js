import React from 'react';
import PropTypes from 'prop-types';
import WPAPI from 'wpapi';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import Seo from '../component/Seo';
import { API } from '../config';

class BlogSinglePage extends React.Component {

  state = {
    post: {},
    loading: true,
  };

  static propTypes = {
    'match': PropTypes.object.isRequired
  }

  async componentDidMount(): Promise<void> {
    const { match } = this.props;
    const wp = new WPAPI({ endpoint: API.wpUrl });
    await wp.posts().id(match.params.id)
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
        <Seo title={this.state.post.title.rendered} />
        <h2>{this.state.post.title.rendered}</h2>
        <div className="contentSection">
          {this.state.post.content.rendered}
        </div>
      </div>
    );
  }
}

export default withRouter(BlogSinglePage);
