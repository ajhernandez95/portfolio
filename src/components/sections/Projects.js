import React, { useState } from 'react';
import Project from '../tools/Project';
import Modal from '../tools/Modal';
import projectsData from '../data/projects.json';

const Projects = ({ windowWidth }) => {
  const [modalMsg, setModalMsg] = useState('this is a test msg');
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <section className='projects-section' id='projects'>
      <h4>Check Out Some Of My Work</h4>
      <div className='projects-wrap'>
        {projectsData.map((project, index) =>
          index % 2 === 0 ? (
            <Project
              key={index}
              direction='left'
              windowWidth={windowWidth}
              project={project}
              setModalMsg={setModalMsg}
              isModalShown={isModalShown}
              setIsModalShown={setIsModalShown}
            />
          ) : (
            <Project
              key={index}
              direction='right'
              windowWidth={windowWidth}
              project={project}
              setModalMsg={setModalMsg}
              isModalShown={isModalShown}
              setIsModalShown={setIsModalShown}
            />
          )
        )}
      </div>
      <p>More to come...</p>
      {isModalShown &&
        ((document.querySelector('body').style.overflow = 'hidden'),
        (document.querySelector('html').style.overflow = 'hidden'),
        (
          <Modal
            msg={modalMsg}
            setIsModalShown={setIsModalShown}
            setModalMsg={setModalMsg}
          />
        ))}
    </section>
  );
};
export default Projects;
