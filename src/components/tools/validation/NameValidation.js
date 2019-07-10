import React from 'react';

const NameValidation = ({ val }) => {
  let msg = '';
  let regexp = /^[A-Za-z]+$/;
  if (val === '') {
    msg = 'Please enter a name';
  } else if (!regexp.test(val)) {
    msg = 'Please enter a valid name';
  }
  return <div>{msg}</div>;
};

export default NameValidation;
