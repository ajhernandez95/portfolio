import React from 'react';
import Project from '../tools/Project';
import projectsData from '../data/projects.json';

const Projects = ({ windowWidth }) => {
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
            />
          ) : (
            <Project
              key={index}
              direction='right'
              windowWidth={windowWidth}
              project={project}
              active='true'
            />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
