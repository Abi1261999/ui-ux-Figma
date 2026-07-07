import ctaImage from '../assets/cta/contact-cta.png';

function CallToAction() {
  return (
    <section className="cta-image-section">
      <img src={ctaImage} alt="Let's Get In Touch" />
      <a className="cta-image-button" href="#contact" aria-label="Become a Client" />
    </section>
  );
}

export default CallToAction;
