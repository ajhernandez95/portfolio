import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('testmsg');
  const [buttonText, setButtonText] = useState('Connect');
  const [isNameValid, setIsNameValid] = useState();
  const [isEmailValid, setIsEmailValid] = useState();
  const [formErrors, setFormErrors] = useState({});

  const validate = obj => {
    let types = Object.keys(obj);

    types.forEach(type => {
      switch (type) {
        case 'name':
          if (obj.name) {
            setIsNameValid(true);
            formErrors.name = '';
          } else {
            formErrors.name = 'Please enter a name';
            setIsNameValid(false);
          }
          break;
        case 'email':
          const reg = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

          if (reg.test(obj.email) && obj.email) {
            setIsEmailValid(true);
            formErrors.email = '';
          } else {
            setIsEmailValid(false);
            formErrors.email = 'Please enter a valid email';
          }
          break;
        default:
          return;
      }
    });
  };

  const sendEmail = async e => {
    e.preventDefault();
    validate({ name, email });

    // let data = {
    //   name,
    //   email,
    //   msg
    // };

    // setButtonText('Sending...');

    // const res = await axios.post('http://localhost:3000/mail', { data });

    // await setTimeout(() => setButtonText('Sent'), 2000);

    // try {
    //   return res;
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <section className='contact-section' id='contact'>
      <h4>Connect With Me Below</h4>
      <p>test text for errors</p>
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
            {/* move to a component */}
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
            {/* move to a component */}
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
        <input type='submit' value={buttonText} />
      </form>
    </section>
  );
};

export default Contact;
