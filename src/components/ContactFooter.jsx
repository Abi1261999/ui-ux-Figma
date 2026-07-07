import SectionLabel from './SectionLabel';

function ContactFooter() {
  return (
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
  );
}

export default ContactFooter;
