import React from 'react';

const Icon = ({ href, icon, to }) => {
  return (
    <div className='icon-wrap'>
      <img src={icon} className='icon' alt='icon' />
      <a href={href}>{to}</a>
    </div>
  );
};

export default Icon;
