import React, { Fragment } from 'react';
import SkillCard from '../tools/SkillCard';
import react_logo from '../../img/logos/react-logo.png';
import javascript_logo from '../../img/logos/javascript-logo.png';
import materializecss_logo from '../../img/logos/materializecss-logo.png';
import bootstrap_4_logo from '../../img/logos/bootstrap-4-logo.svg';
import adobexd_logo from '../../img/logos/adobexd-logo.png';

const Skills = () => {
  const skills = [
    {
      title: 'Javascript',
      logo: javascript_logo,
      text:
        'The fundamental knowledge of JavaScript has helped me further understand frameworks such as React.js and Object Oriented Programming.'
    },
    {
      title: 'React',
      logo: react_logo,
      text:
        'React is the future, with my skills in this JavaScript library I can handle easily manage complex state and routing.'
    },
    {
      title: 'MaterializeCSS',
      logo: materializecss_logo,
      text:
        'Using googles design language I can create innovative and responsive user interfaces to provide the most  satisfying user experience.'
    },
    {
      title: 'Bootstrap 4',
      logo: bootstrap_4_logo,
      text:
        'With Bootstrap 4 I can produce  mobile first, responsive websites quickly and efficiently with their flexible grid system and simple design..'
    },
    {
      title: 'AdobeXD',
      logo: adobexd_logo,
      text:
        "Using Adobe's UI tool I can quickly and efficiently prototype any  application design before implementing any code."
    }
  ];

  return (
    <Fragment>
      <div className='skills-wrap'>
        <h4>My Skills Include</h4>
        <div className='skills-grid'>
          {skills.map(skill => (
            <SkillCard
              logo={skill.logo}
              title={skill.title}
              text={skill.text}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
