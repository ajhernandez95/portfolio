import React from 'react';

const SkillCard = ({ logo, title, text }) => {
  return (
    <div className='skill-card'>
      <span className='skill-header'>
        <img src={logo} alt='logo' />
        <p>{title}</p>
      </span>
      <p>{text}</p>
    </div>
  );
};

export default SkillCard;
