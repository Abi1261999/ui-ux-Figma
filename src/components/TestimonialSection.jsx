import { images } from '../data/portfolioData';
import SectionLabel from './SectionLabel';

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <SectionLabel>Testimonials</SectionLabel>
      <div className="section-heading">
        <h2>What Our Client Says</h2>
        <a className="dark-button" href="#contact">
          Browse clients
        </a>
      </div>
      <div className="testimonial-card">
        <blockquote>
          <span>"</span>
          Working with Loujain was an absolute pleasure! Her exceptional talent
          in UX/UI designs truly blew me away.
          <footer>
            <strong>Carolyn Wilbers</strong>
            <small>Senior company officer</small>
          </footer>
        </blockquote>
        <img src={images.testimonial} alt="Client portrait" />
      </div>
    </section>
  );
}

export default TestimonialSection;
