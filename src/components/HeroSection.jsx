import heroSectionImage from '../assets/hero/hero-section.png';

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <img src={heroSectionImage} alt="Loujain Muhammed UI-UX Designer hero section" />
      <a className="hero-connect-button" href="#contact" aria-label="Let's Connect" />
      <a className="hero-client-button" href="#contact" aria-label="Become a Client" />
    </section>
  );
}

export default HeroSection;
