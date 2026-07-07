import SectionLabel from './SectionLabel';
import companyLogos from '../assets/company-logos.png';

function TrustedClients() {
  return (
    <section className="trusted">
      <SectionLabel>+240 satisfied clients</SectionLabel>
      <div className="logo-row">
        <img
          src={companyLogos}
          alt="Company logos for Verizon, Lenovo, Slack, YouTube, Amazon, Google, and Microsoft"
        />
      </div>
    </section>
  );
}

export default TrustedClients;
