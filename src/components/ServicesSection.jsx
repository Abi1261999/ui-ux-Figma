import { images, services } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div className="services-header-copy">
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
  );
}

export default ServicesSection;
