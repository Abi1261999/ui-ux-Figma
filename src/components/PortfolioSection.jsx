import portfolioHeadingImage from '../assets/portfolio/portfolio-heading.png';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-heading-image">
        <img src={portfolioHeadingImage} alt="Latest Projects - Projects and practice" />
        <a className="portfolio-see-more-button" href="#contact">
          See More
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
