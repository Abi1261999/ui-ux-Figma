import { images, services } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="section-heading">
        <div>
          <SectionLabel>My Services</SectionLabel>
          <h2>Unmatched Services for Your Needs</h2>
        </div>
        <a className="dark-button" href="#contact">
          Start&nbsp;&nbsp;a Project
        </a>
      </div>
      <div className="service-layout">
        <img src={images.service} alt="UX planning session with notes" />
        <div className="service-list">
          {services.map((service, index) => (
            <article className={index === 0 ? 'active' : ''} key={`${service.title}-${index}`}>
              <div>
                <h3>{service.title}</h3>
                {service.description ? <p>{service.description}</p> : null}
                {service.bullets ? (
                  <ul>
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
