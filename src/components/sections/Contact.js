import React, { useState } from 'react';
import axios from 'axios';
import path from 'path';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [buttonText, setButtonText] = useState('Connect');
  const [isNameValid, setIsNameValid] = useState();
  const [isEmailValid, setIsEmailValid] = useState();
  const [formErrors] = useState({});

  const validate = obj => {
    let isValid;
    let types = Object.keys(obj);

    types.forEach(type => {
      switch (type) {
        case 'name':
          if (obj.name) {
            isValid = true;
            setIsNameValid(true);
            formErrors.name = '';
          } else {
            isValid = false;
            formErrors.name = 'Please enter a name';
            setIsNameValid(false);
          }
          break;
        case 'email':
          const reg = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

          if (reg.test(obj.email) && obj.email) {
            isValid = true;
            setIsEmailValid(true);
            formErrors.email = '';
          } else {
            isValid = false;
            setIsEmailValid(false);
            formErrors.email = 'Please enter a valid email';
          }
          break;
        default:
          return;
      }
    });

    return isValid;
  };

  const sendEmail = async e => {
    e.preventDefault();
    let validity = await validate({ name, email });

    if (!validity) {
      return;
    }

    let data = {
      name,
      email,
      msg
    };

    setButtonText('Sending...');
    console.log('i ran');

    const res = await axios.post(path.join(__dirname, '/mail'), {
      data
    });

    console.log('i should run');

    setName('');
    setEmail('');
    setMsg('');

    await setTimeout(() => {
      const submitBtn = document.querySelector('#submit-btn');
      submitBtn.setAttribute('disabled', 'disabled');
      setButtonText('Sent');
    }, 2000);

    try {
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className='contact-section' id='contact'>
      <h4>Connect With Me Below</h4>
      <form onSubmit={sendEmail}>
        <div className='form-group'>
          <div className='form-input'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <p className='err'>{isNameValid ? '' : formErrors.name}</p>
          </div>

          <div className='form-input'>
            <label htmlFor='phone'>Email</label>
            <input
              type='text'
              name='phone'
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <p className='err'>{isEmailValid ? '' : formErrors.email}</p>
          </div>
        </div>
        <div className='form-input'>
          <label htmlFor='msg'>Message</label>
          <textarea
            type='text'
            name='msg'
            value={msg}
            onChange={e => setMsg(e.target.value)}
          />
        </div>
        <input type='submit' value={buttonText} id='submit-btn' />
      </form>
    </section>
  );
};

export default Contact;
