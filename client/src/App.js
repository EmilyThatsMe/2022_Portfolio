import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <main>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
