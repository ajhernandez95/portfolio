import React from 'react';
import Project from '../tools/Project';
const Projects = ({ windowWidth }) => {
  return (
    <section className='projects'>
      <h4>Check Out Some Of My Work</h4>
      <div className='projects-wrap'>
        <Project direction='left' windowWidth={windowWidth} />
        <Project direction='right' windowWidth={windowWidth} />
      </div>
    </section>
  );
};

export default Projects;
