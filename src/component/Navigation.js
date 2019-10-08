import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/AboutUs';
import Blog from '../pages/BlogHomePage';
import BlogSinglePage from '../pages/BlogSinglePage';

export default function Nav() {
  return (
    <Router>
      <div className="navMenu">
        <nav>
          <ul className="menuList">
            <li className="menuList__item">
              <Link to="/">Home</Link>
            </li>
            <li className="menuList__item">
              <Link to="/about">About</Link>
            </li>
            <li className="menuList__item">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/blog/:id">
            <BlogSinglePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
