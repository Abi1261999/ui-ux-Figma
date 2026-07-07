import { images, services } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

function ServiceItem({ service, index }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className={index === 0 ? 'service-item active' : 'service-item'}>
      <div className="service-item-copy">
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
      <span>{number}</span>
    </article>
  );
}

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
        <div className="service-image-panel">
          <img src={images.service} alt="UX planning session with notes" />
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <ServiceItem service={service} index={index} key={`${service.title}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
