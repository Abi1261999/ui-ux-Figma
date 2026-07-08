import { useEffect } from 'react';

const revealSelector = [
  'main > section',
  '.site-footer',
  '.project-card',
  '.skill-card',
].join(', ');

function useScrollReveal() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll(revealSelector));

    document.documentElement.classList.add('reveal-ready');
    revealElements.forEach((element, index) => {
      element.dataset.reveal = '';
      element.style.setProperty('--reveal-index', String(index % 6));
    });

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return () => {
        document.documentElement.classList.remove('reveal-ready');
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
      revealElements.forEach((element) => {
        element.classList.remove('is-visible');
        element.removeAttribute('data-reveal');
        element.style.removeProperty('--reveal-index');
      });
    };
  }, []);
}

export default useScrollReveal;
