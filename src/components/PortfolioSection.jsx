import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import SectionLabel from './SectionLabel';

function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-heading">
        <div>
          <SectionLabel>Latest Projects</SectionLabel>
          <h2>Projects and practice</h2>
        </div>
        <a className="dark-button" href="#contact">
          See more
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={`${project.number}-${project.title}`} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
