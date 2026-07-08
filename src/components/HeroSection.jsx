import heroSectionImage from '../assets/hero/hero-section.png';

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-copy">
        <SectionLabel>Portflio</SectionLabel>
        <h1>
          Loujain
          <br />
          Muhammed
        </h1>
        <p>
          Welcome to 'Designing where innovation knows no bounds. With a passion
          for pushing the boundaries of UI/UX design.
        </p>
        <div className="role-card">
          <strong>UI-UX Designer</strong>
        </div>
        <a className="dark-button hero-button" href="#contact">
          Become a Client
        </a>
      </div>

      <div className="hero-center" aria-hidden="true">
        <div className="text-orbit">
          <span>Lorem ipsum dolor sit amet, consectetur</span>
        </div>
      </div>

      <div className="hero-art" aria-label="Designer portrait">
        <a className="portrait-cta" href="#contact">
          Let's Connect
        </a>
        <div className="portrait-ring">
          <img src={images.profile} alt="Loujain Muhammed portrait" />
        </div>
        <p className="portrait-note">
          Working with Randa for our UI/UX design needs was an absolute
          game-changer for our project.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
