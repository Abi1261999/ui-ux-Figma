import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const images = {
  profile:
    'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=900&q=80',
  service:
    'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?auto=format&fit=crop&w=900&q=80',
  testimonial:
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80',
};

const projects = [
  {
    number: '01',
    title: 'Portfolio',
    category: 'Web Design',
    accent: '#998bff',
    mockup: ['Design case study', 'Mobile wireframes', 'Landing page'],
  },
  {
    number: '02',
    title: 'Fashion App',
    category: 'App Design',
    accent: '#d2a267',
    mockup: ['Shopping flow', 'Product cards', 'Checkout UI'],
  },
  {
    number: '03',
    title: 'Real State web',
    category: 'Dashboard',
    accent: '#79a6c9',
    mockup: ['Property search', 'Map cards', 'Analytics'],
  },
  {
    number: '03',
    title: 'Management Web',
    category: 'Admin UI',
    accent: '#f2b26b',
    mockup: ['Charts', 'Kanban board', 'Team tasks'],
  },
  {
    number: '04',
    title: 'Fashion App',
    category: 'UX Research',
    accent: '#d7b28d',
    mockup: ['Moodboard', 'Style guide', 'Photo grid'],
  },
  {
    number: '06',
    title: 'Pet App',
    category: 'Mobile App',
    accent: '#ec8d76',
    mockup: ['Pet profile', 'Care schedule', 'Marketplace'],
  },
];

const skills = [
  { label: 'Figma', color: '#ff7262' },
  { label: 'Xd', color: '#ff61f6' },
  { label: 'Ae', color: '#9f7aea' },
  { label: 'Ps', color: '#31a8ff' },
  { label: 'Html5', color: '#f16529' },
  { label: 'Css3', color: '#2965f1' },
];

const services = [
  'User Experience (UX)',
  'Research And Development',
  'User Experience (UX)',
  'Website Optimization',
  'User Interface (UI) Design',
];

function SectionLabel({ children }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

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

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="Loujain Muhammad home">
          logo
        </a>
        <nav aria-label="Main navigation">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="pill-button" href="#contact">
          Let's Connect
        </a>
      </header>

      <section className="hero" id="hero">
        <div className="hero-copy">
          <SectionLabel>Portfolio</SectionLabel>
          <h1>Loujain Muhammad</h1>
          <p>
            Welcome to this portfolio where innovation meets function. UI/UX
            designs for people-first digital products.
          </p>
          <div className="role-card">
            <span>I</span>
            <strong>UI-UX Designer</strong>
          </div>
          <a className="dark-button" href="#portfolio">
            Browse all works
          </a>
        </div>

        <div className="hero-art" aria-label="Designer portrait">
          <div className="sun-badge">*</div>
          <div className="portrait-ring">
            <img src={images.profile} alt="Loujain Muhammad portrait" />
          </div>
          <p className="floating-note">
            I bring UX, brand, and interface details into one clean portfolio.
          </p>
        </div>
      </section>

      <section className="trusted">
        <SectionLabel>I get trusted clients</SectionLabel>
        <div className="logo-row" aria-label="Trusted brands">
          {['vencer', 'Lenovo', 'Slack', 'Dribbble', 'amazon', 'Google', 'Microsoft'].map(
            (brand) => (
              <span key={brand}>{brand}</span>
            ),
          )}
        </div>
      </section>

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

      <section className="services" id="services">
        <SectionLabel>My Services</SectionLabel>
        <div className="section-heading">
          <h2>Unmatched Services for Your Needs</h2>
          <a className="dark-button" href="#contact">
            Want a Project
          </a>
        </div>
        <div className="service-layout">
          <img src={images.service} alt="UX planning session with notes" />
          <div className="service-list">
            {services.map((service, index) => (
              <article key={`${service}-${index}`}>
                <div>
                  <h3>{service}</h3>
                  <p>
                    End-to-end design support from research and wireframes to
                    polished interfaces.
                  </p>
                </div>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <SectionLabel>Testimonials</SectionLabel>
        <div className="section-heading">
          <h2>What Our Client Says</h2>
          <a className="dark-button" href="#contact">
            Browse clients
          </a>
        </div>
        <div className="testimonial-card">
          <blockquote>
            <span>"</span>
            Working with Loujain was an absolute pleasure! Her exceptional
            talent in UX/UI designs truly blew me away.
            <footer>
              <strong>Carolyn Wilbers</strong>
              <small>Senior company officer</small>
            </footer>
          </blockquote>
          <img src={images.testimonial} alt="Client portrait" />
        </div>
      </section>

      <section className="cta">
        <p>Let's Get In Touch</p>
        <a className="light-button" href="#contact">
          Discuss a Case
        </a>
      </section>

      <footer className="contact" id="contact">
        <div>
          <SectionLabel>Testimonials</SectionLabel>
          <h2>Let's Get in Touch</h2>
          <p>
            Have a question, feedback, or interested in collaboration? I would
            love to hear from you.
          </p>
          <div className="contact-actions">
            <a href="tel:+123456789">+1 234 567 89</a>
            <a href="mailto:hello@example.com">Email me</a>
          </div>
        </div>
        <form>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label className="full">
            Notes
            <textarea name="notes" rows="4" />
          </label>
          <button type="submit">Send a Message</button>
        </form>
        <nav className="footer-nav" aria-label="Footer links">
          <a href="#hero">Pages</a>
          <a href="#about">About</a>
          <a href="#services">Service</a>
          <a href="#portfolio">Project</a>
          <a href="#contact">Blog</a>
        </nav>
      </footer>
    </main>
  );
}

export default App;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
