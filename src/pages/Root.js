import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      <nav>
        <ul className="menuList">
          <li className="menuList__item">
            <Link to="home">Home</Link>
          </li>
          <li className="menuList__item">
            <Link to="about">About</Link>
          </li>
          <li className="menuList__item">
            <Link to="blog">Blog</Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  )
}
