import React, { Fragment } from 'react';
import svg_bg from '../../img/Subtle-Prism.svg';

const Home = () => {
  return (
    <Fragment className='home-wrapper'>
      <img src={svg_bg} alt='svg background' className='svg-bg' />
      <div className='hero-text'>
        <h1>Alexander Hernandez</h1>
      </div>
    </Fragment>
  );
};

export default Home;
