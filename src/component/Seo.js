import React from 'react';
import { Helmet } from 'react-helmet';

class Seo extends React.PureComponent {
  render() {
    return (
      <Helmet>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta property="og:title" content={this.props.title} />
        <meta name="keywords" content={this.props.keywords} />
        <meta property="og:url" content={this.props.ogUrl} />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:description" content={this.props.description} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="281289809224344" />
        <meta property="og:image" content={this.props.ogImage} />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="608" />
        <meta property="og:image:alt" content={this.props.ogImageAlt} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={this.props.twitterHander} />
        <meta name="twitter:title" content={this.props.title} />
        <meta name="twitter:description" content={this.props.description} />
        <meta name="twitter:image" content={this.props.ogImage} />
        <link rel="icon" href={this.props.logo} />
        <html lang="en" />
      </Helmet>
    );
  }
}

Seo.defaultProps = {
  title: 'Homepage - App',
  description: 'Homepage Content of Description',
  keywords: 'react, react helmet, homepage',
  ogUrl: 'https://condescending-hodgkin-164c46.netlify.com',
  ogImage: 'https://cdn.rippling.com/static/marketing/covers/Homepage_headerimage.png',
  ogImageAlt: 'Running Athlete with Code in Foreground',
  twitterHander: '@ripplingapp',
  logo: 'https://cdn.rippling.com/static/marketing/covers/Homepage_headerimage.png'
};

export default Seo;
