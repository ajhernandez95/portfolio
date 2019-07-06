import React from 'react';

const Fab = ({ href, icon }) => {
  return (
    <div className='fab'>
      <a href={href}>
        <img src={icon} alt='up' />
      </a>
    </div>
  );
};

export default Fab;
