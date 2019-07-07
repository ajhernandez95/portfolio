import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const clear = e => {
    setName('');
    setPhone('');
    setMsg('');
    e.preventDefault();
  };
  return (
    <section className='contact-section' id='contact'>
      {console.log(name, phone, msg)}
      <h4>Connect With Me Below</h4>
      <form action='/mail' method='POST' id='contact-form'>
        <div className='form-group'>
          <div className='form-input'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name.value}
              onChange={setName}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              name='phone'
              value={phone.value}
              onChange={setPhone}
            />
          </div>
        </div>
        <div className='form-input'>
          <label htmlFor='msg'>Message</label>
          <textarea
            type='text'
            name='msg'
            value={msg.value}
            onChange={setMsg}
          />
        </div>
        <input type='submit' value='Connect' onSubmit={clear} />
      </form>
    </section>
  );
};

export default Contact;
