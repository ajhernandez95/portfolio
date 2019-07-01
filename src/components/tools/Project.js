import React from 'react';
import project from '../../img/projects/reactgithubfinder.png';

const Project = ({
  windowWidth,
  direction,
  project_img,
  project_title,
  project_sum,
  project_demo,
  project_code
}) => {
  const left = (
    <div className='project-grid'>
      <div className='col-left'>
        <div className='project-img-wrapper '>
          <img src={project} alt='' />
        </div>
      </div>
      <div className='col-right'>
        <div className='project-text-wrapper' style={{ marginLeft: '2rem' }}>
          <h3>React Github Finder</h3>
          <br />
          <p>
            A GitHub user finder that allows you to look up the first 30 users
            matching your input into the search bar. You can preview the users
            profile by selecting the "More" button which will navigate you to
            the users profile preview where common stats are displayed.
          </p>
          <div className='project-btns'>
            <a href='#'>Live Demo</a>
            <a href='#'>View Code</a>
          </div>
        </div>
      </div>
    </div>
  );

  const right = (
    <div className='project-grid'>
      <div className='col-left'>
        <div className='project-text-wrapper'>
          <h3>React Github Finder</h3>
          <br />
          <p>
            A GitHub user finder that allows you to look up the first 30 users
            matching your input into the search bar. You can preview the users
            profile by selecting the "More" button which will navigate you to
            the users profile preview where common stats are displayed.
          </p>
          <div className='project-btns'>
            <a href='#'>Live Demo</a>
            <a href='#'>View Code</a>
          </div>
        </div>
      </div>
      <div className='col-right'>
        <div className='project-img-wrapper' style={{ marginLeft: '2rem' }}>
          <img src={project} alt='' />
        </div>
      </div>
    </div>
  );
  return windowWidth <= 800 ? left : direction === 'left' ? left : right;
};

export default Project;
