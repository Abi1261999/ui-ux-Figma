import { images } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

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
      </div>

      <div className="hero-center" aria-hidden="true">
        <div className="text-orbit">
          <span>Lorem ipsum dolor sit amet, consectetur</span>
        </div>
      </div>

      <div className="hero-art" aria-label="Designer portrait">
        <div className="portrait-ring">
          <img src={images.profile} alt="Loujain Muhammed portrait" />
        </div>
        <div className="role-card">
          <span>I</span>
          <strong>UI-UX Designer</strong>
        </div>
        <a className="dark-button hero-button" href="#contact">
          Become a Client
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
