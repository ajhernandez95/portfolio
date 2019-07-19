import React, { Fragment } from 'react';

const Anchor = ({ href, text }) => {
  const link = <a href={href}>{text}</a>;
  const noLink = (
    <a href="#!" style={{ background: 'grey' }}>
      {text}
    </a>
  );
  return <Fragment>{href ? link : noLink}</Fragment>;
};

export default Anchor;
