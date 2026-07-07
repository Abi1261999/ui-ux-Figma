import { images, services } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

function ServicesSection() {
  return (
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
  );
}

export default ServicesSection;
