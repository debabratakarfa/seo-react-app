import React from 'react';
import PropTypes from 'prop-types';
import WPAPI from 'wpapi';
import { withRouter } from 'react-router-dom';
import Seo from '../component/Seo';
import { API } from '../config';

class BlogSinglePage extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    post: {},
  };

  componentDidMount() {
    const { match, location, history } = this.props;
    const wp = new WPAPI({ endpoint: API.wpUrl });
    wp.posts().id(match.params.id)
      .then(( data ) => {
        // do something with the returned posts
        this.setState({ post: data });
      })
      .catch(( err ) => {
        // handle error
        console.log( err );
      });
  }

  render() {
    const { match, location, history } = this.props
    { console.log(this.state.post);}
    return (
      <div>
        {this.state.post.slug}
      </div>
    )
  }
}

export default withRouter(BlogSinglePage);
