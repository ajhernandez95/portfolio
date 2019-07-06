import React from 'react';

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
      <h4>Connect With Me Below</h4>
      <form>
        <div className='form-group'>
          <div className='form-input'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' />
          </div>
          <div className='form-input'>
            <label htmlFor='phone'>Phone</label>
            <input type='text' name='phone' />
          </div>
        </div>
        <div className='form-input'>
          <label htmlFor='message'>Message</label>
          <textarea type='text' name='name' />
        </div>
      </form>
    </section>
  );
};

export default Contact;
