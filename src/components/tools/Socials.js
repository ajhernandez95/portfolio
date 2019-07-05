import React from 'react';
import Tooltip from './Tooltip';
import github_logo from '../../img/icons/github-logo.svg';
import linkedin_logo from '../../img/icons/linkedin-logo.svg';
import resume_logo from '../../img/icons/resume-icon.svg';
import white_github_logo from '../../img/icons/white-github-logo.svg';
import white_linkedin_logo from '../../img/icons/white-linkedin-logo.svg';
import white_resume_logo from '../../img/icons/white-resume-icon.svg';

const Socials = ({ windowWidth }) => {
  const showTooltip = e => {
    e.target.nextSibling.style.display = 'block';
  };
  const hideTooltip = e => {
    e.target.nextSibling.style.display = 'none';
  };
  return (
    <div className="socials">
      <a
        href="https://github.com/ajhernandez95/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={windowWidth > 480 ? github_logo : white_github_logo}
          alt="github "
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={showTooltip}
          onMouseLeave={hideTooltip}
        />
        <Tooltip text="My Github" id="github" />
      </a>
      <a href="https://www.linkedin.com/in/alexander-hernandez-b2aa03149/">
        <img
          src={windowWidth > 480 ? linkedin_logo : white_linkedin_logo}
          alt="github "
          onMouseOver={showTooltip}
          onMouseLeave={hideTooltip}
        />
        <Tooltip text="My Linkedin" />
      </a>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={windowWidth > 480 ? resume_logo : white_resume_logo}
          alt="github "
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={showTooltip}
          onMouseLeave={hideTooltip}
        />
        <Tooltip text="My Resume" id="github" />
      </a>
    </div>
  );
};

export default Socials;
