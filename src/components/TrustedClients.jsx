import SectionLabel from './SectionLabel';

const trustedBrands = ['vencer', 'Lenovo', 'Slack', 'Dribbble', 'amazon', 'Google', 'Microsoft'];

function TrustedClients() {
  return (
    <section className="trusted">
      <SectionLabel>I get trusted clients</SectionLabel>
      <div className="logo-row" aria-label="Trusted brands">
        {trustedBrands.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </div>
    </section>
  );
}

export default TrustedClients;
