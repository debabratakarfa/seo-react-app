import React from 'react';
import { BrowserRouter as Router, Route, IndexRedirect } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/AboutUs';
// import Blog from '../pages/BlogHomePage';
// import BlogSinglePage from '../pages/BlogSinglePage';

export default function Nav() {
  return (
    <Router>
      <Route path="/">
        <IndexRedirect to="home" />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  );
}
