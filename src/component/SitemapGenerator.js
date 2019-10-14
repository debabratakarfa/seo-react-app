require('babel-register');

const Sitemap = require('react-router-sitemap').default;
const router = require('./SitemapRoute').default;

(
  new Sitemap(router)
    .build('http://my-site.ru')
    .save('./sitemap.xml')
);
