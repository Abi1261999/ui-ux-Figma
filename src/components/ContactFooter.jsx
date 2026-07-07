import contactSectionImage from '../assets/contact/contact-section.png';

function ContactFooter() {
  return (
    <section className="contact-image-section" id="contact">
      <img src={contactSectionImage} alt="Contact form section" />
      <a className="contact-social contact-social-medium" href="https://medium.com" aria-label="Medium" />
      <a className="contact-social contact-social-dripple" href="https://dribbble.com" aria-label="Dripple" />
      <a className="contact-social contact-social-behance" href="https://behance.net" aria-label="Behance" />
      <a className="contact-send-button" href="mailto:hello@example.com" aria-label="Send a Message" />
    </section>
  );
}

export default ContactFooter;
