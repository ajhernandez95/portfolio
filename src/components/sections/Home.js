import React from 'react';
import profile_img from '../../img/a-logo.png';
import web_design from '../../img/icons/web-design.svg';
import email from '../../img/icons/email.svg';
import user from '../../img/icons/avatar.svg';
import Socials from '../tools/Socials';
import Icon from '../tools/Icon';

const Home = ({ windowWidth }) => {
  return (
    <section className="home-wrapper">
      <div className="profile-wrap">
        <div className="img-container">
          <img src={profile_img} alt="user" />
        </div>
        <p>Designer | Devloper</p>
        {windowWidth <= 480 && <Socials />}
      </div>
      <div className="text-wrap">
        <h4>Alexander Hernandez</h4>
        <p>
          <strong>Front-end web developer / designer</strong> who writes clean,
          modular and scalable code with the dedication to learn any new skill
          required.
        </p>
        {windowWidth > 480 && <Socials windowWidth={windowWidth} />}
        <span className="icons">
          <Icon href="#" icon={user} to="My Skills" />
          <Icon href="#" icon={web_design} to="My Work" />
          <Icon href="#" icon={email} to="Contact Me" />
        </span>
      </div>
    </section>
  );
};

export default Home;
