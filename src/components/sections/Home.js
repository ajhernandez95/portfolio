import React, { Fragment } from 'react';
import svg_bg from '../../img/Subtle-Prism.svg';
import profile_img from '../../img/profile.png';

import Icon from '../tools/Icon';

const Home = () => {
  return (
    <Fragment>
      <div className="home-wrapper valign-wrapper">
        <img src={svg_bg} alt="svg background" className="svg-bg" />
        <div className="container">
          <div className="row">
            <div className="col s12 m6 profile-wrap">
              <img
                src={profile_img}
                alt="user"
                className="profile-img responsive-img white circle"
              />
              <h4>Designer | Devloper</h4>
            </div>
            <div className="col s12 m6 home-text">
              <h3 className="light-text">Alexander Hernandez</h3>
              <p>
                <span className="medium-text">
                  Front-end web developer / designer
                </span>{' '}
                who writes clean, modular and scalable code with the dedication
                to learn any new skill required.
              </p>
              <span className="icons">
                <Icon to="#" icon="fas fa-laptop-code fa-6x" />
                <Icon to="#" icon="fas fa-user fa-6x" />
                <Icon to="#" icon="fas fa-envelope-open-text fa-6x" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
