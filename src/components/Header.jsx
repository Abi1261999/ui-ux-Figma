import { navigationItems } from '../data/portfolioData';

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="Loujain Muhammad home">
        logo
      </a>
      <nav aria-label="Main navigation">
        {navigationItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="pill-button" href="#contact">
        Let's Connect
      </a>
    </header>
  );
}

export default Header;
