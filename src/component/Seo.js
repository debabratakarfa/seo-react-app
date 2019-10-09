import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

class Seo extends React.PureComponent {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta property="og:title" content={this.props.title} />
          <meta name="keywords" content={this.props.keywords} />
          <meta property="og:url" content={this.props.url} />
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
      </HelmetProvider>
    );
  }
}

Seo.defaultProps = {
  title: 'Homepage - App',
  description: 'Homepage Content',
  keywords: 'react, react helmet, homepage',
  orUrl: 'https://condescending-hodgkin-164c46.netlify.com',
  ogImage: 'https://cdn.rippling.com/static/marketing/covers/Homepage_headerimage.png',
  ogImageAlt: 'Running Athlete with Code in Foreground',
  twitterHander: '@ripplingapp',
  logo: 'https://cdn.rippling.com/static/marketing/covers/Homepage_headerimage.png'
};

export default Seo;
