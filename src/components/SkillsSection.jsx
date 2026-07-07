import { skills } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

function SkillsSection() {
  return (
    <section className="skills" id="about">
      <SectionLabel>Skills</SectionLabel>
      <h2>Exploring My Diverse Skill Set</h2>
      <div className="skill-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.label}>
            <img src={skill.icon} alt={`${skill.label} icon`} />
            <strong>{skill.label}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
