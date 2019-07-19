import React from 'react';

const Modal = ({ msg, setIsModalShown, setModalMsg }) => {
  return (
    <div className='modal' style={{ display: 'fixed' }}>
      <div className='modal-body'>
        <p className='modal-text'>{msg}</p>
      </div>
      <div className='modal-footer'>
        <button
          className='modal-close'
          onClick={() => {
            document.querySelector('body').style.overflowY = 'visible';
            document.querySelector('html').style.overflowY = 'visible';
            setModalMsg('');
            setIsModalShown(false);
          }}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default Modal;
