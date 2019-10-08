import React from 'react';
import { Helmet } from 'react-helmet';

class Seo extends React.PureComponent {
  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="twitter:card" content='summary' />
        <meta property="og:title" content={this.props.title} />
      </Helmet>
    );
  }
}

Seo.defaultProps = {
  title: 'Homepage - App',
  description: 'Homepage Content'
};

export default Seo;
