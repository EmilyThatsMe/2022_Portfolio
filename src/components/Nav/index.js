import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <div className="main-head">
        <nav>
          <div className="header--logo">
            <Link to="/">Emily Thon</Link>
          </div>
          <ul>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
