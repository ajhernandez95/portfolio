import React, { Fragment } from 'react';
import profile_img from '../../img/profile.png';
import dev_board_icon from '../../img/icons/dev-board-icon.svg';
import email_icon from '../../img/icons/email-icon.svg';
import person_icon from '../../img/icons/person-icon.svg';
import Icon from '../tools/Icon';

const Home = () => {
  return (
    <Fragment>
      <div className='home-wrapper'>
        <div className='profile-wrap'>
          <img src={profile_img} alt='user' className='profile-img' />
          <p>Designer | Devloper</p>
        </div>
        <div className='text-wrap'>
          <h4>Alexander Hernandez</h4>
          <p>
            <strong>Front-end web developer / designer</strong> who writes
            clean, modular and scalable code with the dedication to learn any
            new skill required.
          </p>
          <span className='icons'>
            <Icon to='#' icon={dev_board_icon} />
            <Icon to='#' icon={email_icon} />
            <Icon to='#' icon={person_icon} />
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
