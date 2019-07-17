import React from 'react';

const Project = ({
  project: { name, text, img, demo, code },
  windowWidth,
  direction
}) => {
  const left = (
    <div className='project-grid'>
      <div className='col-left' style={{ maxHeight: '237px' }}>
        <div className='project-img-wrapper'>
          <img src={img} alt='' />
        </div>
      </div>
      <div className='col-right'>
        <div className='project-text-wrapper' style={{ marginLeft: '2rem' }}>
          <h3>{name}</h3>
          <br />
          <p>{text}</p>
          <div className='project-btns'>
            <a
              href={demo === false ? '#!' : demo}
              style={
                demo === false
                  ? { background: 'grey' }
                  : { background: '#ff4646' }
              }
            >
              Live Demo
            </a>
            <a href={code}>View Code</a>
          </div>
        </div>
      </div>
    </div>
  );

  const right = (
    <div className='project-grid'>
      <div className='col-left'>
        <div className='project-text-wrapper'>
          <h3>{name}</h3>
          <br />
          <p>{text}</p>
          <div className='project-btns'>
            <a
              href={demo === false ? '#!' : demo}
              style={
                demo === false
                  ? { background: 'grey' }
                  : { background: '#ff4646' }
              }
            >
              Live Demo
            </a>
            <a href={code}>View Code</a>
          </div>
        </div>
      </div>
      <div className='col-right' style={{ maxHeight: '237px' }}>
        <div className='project-img-wrapper' style={{ marginLeft: '2rem' }}>
          <img src={img} alt='project' />
        </div>
      </div>
    </div>
  );
  return windowWidth <= 800 ? left : direction === 'left' ? left : right;
};

export default Project;
