import contactSectionImage from '../assets/contact/contact-section.png';

const footerLinks = [
  { label: 'Pages', href: '#hero', ariaLabel: 'Go to home page section' },
  { label: 'Pages', href: '#portfolio', ariaLabel: 'Go to portfolio page section' },
  { label: 'Pages', href: '#services', ariaLabel: 'Go to services page section' },
  { label: 'Pages', href: '#contact', ariaLabel: 'Go to contact page section' },
  { label: 'Pages', href: '#hero', ariaLabel: 'Return to the top page section' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14.4 8.8V7.2c0-.8.2-1.2 1.2-1.2h1.5V3.3c-.7-.1-1.4-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.8v1.9H8.8v3h2.4v8.7h3.2v-8.7H17l.4-3h-3z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14 10.4 21.2 2h-1.7l-6.2 7.2L8.3 2H2.5l7.6 10.9L2.5 22h1.7l6.7-7.8 5.3 7.8H22l-8-11.6zm-2.4 2.8-.8-1.1L4.7 3.3h2.8l4.9 7 .8 1.1 6.4 9.3h-2.8l-5.2-7.5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M7.6 2.8h8.8a4.8 4.8 0 0 1 4.8 4.8v8.8a4.8 4.8 0 0 1-4.8 4.8H7.6a4.8 4.8 0 0 1-4.8-4.8V7.6a4.8 4.8 0 0 1 4.8-4.8zm0 1.7a3.1 3.1 0 0 0-3.1 3.1v8.8a3.1 3.1 0 0 0 3.1 3.1h8.8a3.1 3.1 0 0 0 3.1-3.1V7.6a3.1 3.1 0 0 0-3.1-3.1H7.6zm4.4 3.1a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 1.7a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm5-2.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
      </svg>
    ),
  },
];

function ContactFooter() {
  return (
    <>
      <section className="contact-image-section" id="contact">
        <img src={contactSectionImage} alt="Contact form section" />
        <a className="contact-social contact-social-medium" href="https://medium.com" aria-label="Medium" />
        <a className="contact-social contact-social-dripple" href="https://dribbble.com" aria-label="Dripple" />
        <a className="contact-social contact-social-behance" href="https://behance.net" aria-label="Behance" />
        <a className="contact-send-button" href="mailto:hello@example.com" aria-label="Send a Message" />
      </section>

      <footer className="site-footer">
        <p>All rights reserved by the user frameup.io.</p>

        <nav className="site-footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link, index) => (
            <a href={link.href} aria-label={link.ariaLabel} key={`${link.href}-${index}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-footer-social" aria-label="Social links">
          {socialLinks.map((link) => (
            <a href={link.href} aria-label={link.label} key={link.label}>
              {link.icon}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

export default ContactFooter;
