import testimonialsSectionImage from '../assets/testimonials/testimonials-section-full.png';

function TestimonialSection() {
  return (
    <section className="testimonials-image-section">
      <img src={testimonialsSectionImage} alt="Testimonials section" />
      <a className="testimonial-client-button" href="#contact" aria-label="Become a Client" />
      <button className="testimonial-swipe testimonial-swipe-prev" type="button" aria-label="Previous testimonial" />
      <button className="testimonial-swipe testimonial-swipe-next" type="button" aria-label="Next testimonial" />
    </section>
  );
}

export default TestimonialSection;
