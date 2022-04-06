import React from 'react';
import About from './components/About';
//import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Github from './assets/images/iconmonstr-github-1-240.png';
import Linkedin from './assets/images/iconmonstr-linkedin-5-240.png';
import Stack from './assets/images/iconmonstr-database-1-240.png';
import { HashRouter, Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
      <div>
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
        <main>
          <Route exact path="/" component={About}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/resume" component={Resume}></Route>
          <Route path="/contact" component={Contact}></Route>
        </main>
        <footer>
          <a href="https://github.com/EmilyThatsMe">
            {' '}
            <img alt="github icon" src={Github}></img>
          </a>
          <a href="https://www.linkedin.com/in/emmykay/">
            {' '}
            <img alt="linkedin icon" src={Linkedin}></img>
          </a>
          <a href="#">
            {' '}
            <img alt="stack overflow icon" src={Stack}></img>
          </a>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
