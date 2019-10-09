import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import Home from './pages/Home';
import About from './pages/AboutUs';
import BlogHomePage from './pages/BlogHomePage';
import BlogSinglePage from './pages/BlogSinglePage';
import Root from './pages/Root';
import './App.css';


export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRedirect to="home" />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="blog" component={BlogHomePage} />
        <Route path="blog/:name/:id" component={BlogSinglePage} />
      </Route>
    </Router>
  )
}
