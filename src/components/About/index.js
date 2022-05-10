import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/Me.png';

function About() {
  return (
    <section className="about--container" id="about">
      <div className="about--text">
        <h1 className="about--header">Hi, I'm Emily!</h1>
        <h2 className="about--h2">
          I'm a full stack web Developer based in the Twin Cities, MN.
          <br />
          I'm passionate about front end design and implementation, and I enjoy
          learning new technologies and languages.
          <br />
          <br />
          Interested in working with me? Contact me at{' '}
          <a href="mailto: emilython33@gmail.com">emilython33@gmail.com</a>
        </h2>
      </div>
      <div className="about--img--container">
        <img
          className="about--img"
          alt="An extremely talented web dev"
          src={Image}
        ></img>
      </div>
      <div className="about--end">
        <h2>That's Me!</h2>
      </div>
    </section>
  );
}

export default About;
