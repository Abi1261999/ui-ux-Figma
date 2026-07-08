import CallToAction from './components/CallToAction';
import ContactFooter from './components/ContactFooter';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import TestimonialSection from './components/TestimonialSection';
import TrustedClients from './components/TrustedClients';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <main>
      <Header />
      <HeroSection />
      <TrustedClients />
      <PortfolioSection />
      <SkillsSection />
      <ServicesSection />
      <TestimonialSection />
      <CallToAction />
      <ContactFooter />
    </main>
  );
}

export default App;
