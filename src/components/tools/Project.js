import React from 'react';
import Anchor from '../tools/Anchor';

const Project = ({
  project: { name, text, img, project },
  windowWidth,
  direction,
  setModalMsg,
  setIsModalShown
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
            <Anchor
              href={project.demo}
              text='Live Demo'
              setModalMsg={() => {
                setModalMsg(project.msg);
                setIsModalShown(true);
              }}
              setIsModalShown={setIsModalShown}
            />
            <Anchor href={project.code} text='View Code' />
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
            <Anchor
              href={project.demo}
              text='Live Demo'
              setModalMsg={() => {
                setModalMsg(project.msg);
                setIsModalShown(true);
              }}
              setIsModalShown={setIsModalShown}
            />
            <Anchor href={project.code} text='View Code' />
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
