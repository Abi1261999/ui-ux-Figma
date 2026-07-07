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
            <span style={{ '--skill-color': skill.color }}>{skill.label.slice(0, 2)}</span>
            <strong>{skill.label}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
