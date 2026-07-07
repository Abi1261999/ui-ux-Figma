import servicesSectionImage from '../assets/services/services-section-full.png';

function ServicesSection() {
  return (
    <section className="services-image-section" id="services">
      <img src={servicesSectionImage} alt="My Services section" />
      <a className="services-image-button" href="#contact" aria-label="Start a Project" />
    </section>
  );
}

export default ServicesSection;
