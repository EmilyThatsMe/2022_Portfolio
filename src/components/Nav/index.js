import React from 'react';

function Nav() {
  return (
    <header>
      <div className="main-head">
        <nav>
          <div className="header--logo">
            <a href="2022_Portfolio/">Emily Thon</a>
          </div>
          <ul>
            <li>
              <a href="2022_Portfolio/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="2022_Portfolio/resume">Resume</a>
            </li>
            <li>
              <a href="2022_Portfolio/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
