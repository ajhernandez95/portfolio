import React from 'react';
import NameValidation from './NameValidation';
import MsgValidation from './MsgValidation';
import EmailValidation from './EmailValidation';

const Validate = ({ type, val }) => {
  let component;
  switch (type) {
    case 'name':
      component = <NameValidation val={val} />;
      break;
    case 'msg':
      component = <MsgValidation val={val} />;
      break;
    case 'email':
      component = <EmailValidation val={val} />;
      break;
    default:
      console.log('Enter a type or val');
      break;
  }

  return component;
};

export default Validate;
