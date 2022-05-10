import React from 'react';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <section className="resume--container" id="resume">
      <h2 className="resume--header">Resume</h2>
      <div className="skill--list">
        <h2>I am experienced in the following technologies:</h2>
        <ul>
          <li>HTML and CSS</li>
          <li>Javascript and JQuery</li>
          <li>Node</li>
          <li>Express</li>
          <li>React</li>
          <li>SQL and Sequelize</li>
          <li>MongoDB and Mongoose</li>
        </ul>
      </div>
      <p>
        Download a PDF of my resume{' '}
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vRJHWCb67_n9PllOogUfzpYvHX_RlQ7Oe4tavrmy15ZFFLlUSZk8RT8Plzl6ZvFzhnAcflw9XWodjwq/pub"
          download
        >
          HERE
        </a>
        <br />
        Check out my linkedIn page{' '}
        <a href="https://www.linkedin.com/in/emmykay/">HERE</a>
      </p>
    </section>
  );
}

export default Resume;
