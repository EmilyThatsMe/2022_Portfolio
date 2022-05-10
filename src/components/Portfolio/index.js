import React from 'react';
import kanye from '../../assets/images/kanye.jpg';
import dog from '../../assets/images/dog.jpg';
import profile from '../../assets/images/profile.jpg';
import run from '../../assets/images/run.jpg';
import quiz from '../../assets/images/quiz.jpg';
import tracker from '../../assets/images/tracker.jpg';

function Portfolio() {
  return (
    <section className="portfolio--container" id="portfolio">
      <h2>Portfolio</h2>
      <div className="flex-row">
        <div className="img--container">
          <img
            src={kanye}
            className="img-thumbnail mx-1"
            alt="Quote Battle Screenshot"
          ></img>
          <span>
            <a href="https://concord511.github.io/Quote-Battle/">
              Kanye Guess - HTML, CSS, Javascript
            </a>
            <br></br>
            <a href="https://github.com/Concord511/Quote-Battle">Github</a>
          </span>
          <p>A timed quiz to guess if a quote is from Kanye</p>
        </div>
        <div className="img--container">
          <img
            src={tracker}
            className="img-thumbnail mx-1"
            alt="Note Taker Screenshot"
          ></img>
          <span>
            <a href="https://guarded-anchorage-60502.herokuapp.com/">
              Full Stack Exercise Track - MERN
            </a>
            <br></br>
            <a href="https://github.com/EmilyThatsMe/Full_Stack_Exercise_Track">
              Github
            </a>
          </span>
          <p>
            An exercise tracking web app where users can log and view exercises
          </p>
        </div>
        <div className="img--container">
          <img
            src={dog}
            className="img-thumbnail mx-1"
            alt="Rate My Dog Screenshot"
          ></img>
          <span>
            <a href="https://secret-sea-39551.herokuapp.com/">
              Rate My Dog - SQL, Sequelize
            </a>
            <br></br>
            <a href="https://github.com/cassie-s/the-dog-blog">Github</a>
          </span>
          <p>Blog where users can comment on and rank ugly dogs</p>
        </div>
        <div className="img--container">
          <img
            src={profile}
            className="img-thumbnail mx-1"
            alt="Profile Generator Screenshot"
          ></img>
          <span>
            <a href="https://github.com/EmilyThatsMe/profile-generator">
              Profile generator - Node, Express, Inquirer
            </a>
            <br></br>
            <a href="https://github.com/EmilyThatsMe/profile-generator">
              Github
            </a>
          </span>
          <p>Computer program for adding, deleting, and managing employees</p>
        </div>
        <div className="img--container">
          <img
            src={quiz}
            className="img-thumbnail mx-1"
            alt="Code Quiz Screenshot"
          ></img>
          <span>
            <a href="https://emilythatsme.github.io/code-quiz/">
              Code Quiz - CSS, Javascript, Moment.js
            </a>
            <br></br>
            <a href="https://github.com/EmilyThatsMe/code-quiz">Github</a>
          </span>
          <p>Timed quiz on web development</p>
        </div>
        <div className="img--container">
          <img
            src={run}
            className="img-thumbnail mx-1"
            alt="Run Buddy Screenshot"
          ></img>
          <span>
            <a href="https://emilythatsme.github.io/run-buddy/">
              Run Buddy - HTML, CSS
            </a>
            <br></br>
            <a href="https://github.com/EmilyThatsMe/run-buddy">Github</a>
          </span>
          <p>Web page for a physical training business</p>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
