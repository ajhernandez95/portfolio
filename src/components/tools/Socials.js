import React from 'react';
import github_logo from '../../img/icons/github-logo.svg';
import linkedin_logo from '../../img/icons/linkedin-logo.svg';
import white_github_logo from '../../img/icons/white-github-logo.svg';
import white_linkedin_logo from '../../img/icons/white-linkedin-logo.svg';

const Socials = ({ windowWidth }) => {
  return (
    <div className='socials'>
      <a
        href='https://github.com/ajhernandez95/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={windowWidth > 480 ? github_logo : white_github_logo}
          alt='github '
          target='_blank'
          rel='noopener noreferrer'
        />
      </a>
      <a href='https://www.linkedin.com/in/alexander-hernandez-b2aa03149/'>
        <img
          src={windowWidth > 480 ? linkedin_logo : white_linkedin_logo}
          alt='github '
        />
      </a>
    </div>
  );
};

export default Socials;
