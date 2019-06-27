import React, { Fragment } from 'react';

const Icon = ({ to, icon }) => {
  return (
    <Fragment>
      <a href={to} style={{ color: '#000' }}>
        <img src={icon} class='icon' />
      </a>
    </Fragment>
  );
};

export default Icon;
