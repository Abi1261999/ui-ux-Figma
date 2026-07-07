function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-heading">
        <span>{project.number}</span>
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
      </div>
      <div className="mock-window" style={{ '--accent': project.accent }}>
        <div className="mock-toolbar">
          <i />
          <i />
          <i />
        </div>
        <div className="mock-body">
          {project.mockup.map((item) => (
            <div className="mock-row" key={item}>
              <strong>{item}</strong>
              <span />
            </div>
          ))}
        </div>
      </div>
      <button type="button">View Case</button>
    </article>
  );
}

export default ProjectCard;
