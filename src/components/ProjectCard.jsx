function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-heading">
        <span>{project.number}</span>
        <h3>{project.title}</h3>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <small key={tag}>{tag}</small>
          ))}
        </div>
      </div>
      <div className="project-image">
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <button type="button">View project</button>
    </article>
  );
}

export default ProjectCard;
