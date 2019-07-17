import React from 'react';
import SkillCard from '../tools/SkillCard';
import skillsData from '../data/skills.json';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h4>My Skills Include</h4>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            logo={skill.logo}
            title={skill.title}
            text={skill.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
