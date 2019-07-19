import React, { Fragment } from 'react';

const Anchor = ({ href, text, setModalMsg, setIsModalShown }) => {
  const link = <a href={href}>{text}</a>;
  const noLink = (
    <button style={{ background: 'grey' }} onClick={setModalMsg}>
      {text}
    </button>
  );
  return <Fragment>{href ? link : noLink}</Fragment>;
};

export default Anchor;
