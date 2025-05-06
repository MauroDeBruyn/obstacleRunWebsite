document.addEventListener('DOMContentLoaded', () => {
  // Scroll fade-in effect
  const scrollElements = document.querySelectorAll('.scroll-fade');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  scrollElements.forEach(el => observer.observe(el));

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.site-navigation');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }
});
