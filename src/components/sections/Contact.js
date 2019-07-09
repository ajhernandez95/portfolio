import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [msg, setMsg] = useState();
  const clear = e => {
    setName('');
    setPhone('');
    setMsg('');
    e.preventDefault();
  };

  const sendEmail = e => {
    e.preventDefault();
    let data = {
      name,
      phone,
      msg
    };
    axios
      .post('http://localhost:3000/mail', { data })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <section className="contact-section" id="contact">
      {console.log(name)}
      <h4>Connect With Me Below</h4>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="form-input">
          <label htmlFor="msg">Message</label>
          <textarea
            type="text"
            name="msg"
            value={msg}
            onChange={e => setMsg(e.target.value)}
          />
        </div>
        <input type="submit" value="Connect" onSubmit={clear} />
      </form>
    </section>
  );
};

export default Contact;
