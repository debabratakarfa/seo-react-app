import React from 'react';
import Seo from '../component/Seo';
import Bloglist from '../component/Bloglist';

export default function BlogHomepage() {

  return (
    <div>
      <Seo title="Blog Homepage - App" />
      <div className="blogList">
        <Bloglist />
      </div>
    </div>
  );
}
