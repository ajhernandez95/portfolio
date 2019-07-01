import React from 'react';
import github_logo from '../../img/icons/github-logo.svg';
import linkedin from '../../img/icons/linkedin.svg';

const Socials = () => {
  return (
    <div className='socials'>
      <a
        href='https://github.com/ajhernandez95/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={github_logo}
          alt='github '
          target='_blank'
          rel='noopener noreferrer'
        />
      </a>
      <a href='https://www.linkedin.com/in/alexander-hernandez-b2aa03149/'>
        <img src={linkedin} alt='github ' />
      </a>
    </div>
  );
};

export default Socials;
