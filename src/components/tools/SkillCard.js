import React from 'react';

const SkillCard = ({ logo, title, text }) => {
  return (
    <div className='skill-card'>
      <span className='skill-header'>
        <div className='skill-logo-wrapper'>
          <img src={logo} alt='logo' />
        </div>
        <p className='title'>{title}</p>
      </span>
      <p className='text'>{text}</p>
    </div>
  );
};

export default SkillCard;
