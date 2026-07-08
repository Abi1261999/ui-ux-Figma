import heroSectionImage from '../assets/hero/hero-section.png';

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <img src={heroSectionImage} alt="Loujain Muhammed UI-UX Designer hero section" />
      <a className="hero-connect-button" href="#contact">
        Let's Connect
      </a>
      <a className="hero-client-button" href="#contact">
        Become a Client
      </a>
      <p className="hero-testimonial-note">
        Working with Randa for our UI/
        <br />
        UX design needs was an absolute
        <br />
        game-changer for our project.
      </p>
    </section>
  );
}

export default HeroSection;
