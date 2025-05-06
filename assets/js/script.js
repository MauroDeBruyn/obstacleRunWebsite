document.addEventListener('DOMContentLoaded', () => {
  // Scroll fade-in effect using IntersectionObserver
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

  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const container = document.querySelector('.container');

  left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
  left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

  right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
  right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

  // Handle scroll to show card-section
  const cardSection = document.querySelector('.card-section');
  if (cardSection) {
    const rect = cardSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      cardSection.classList.add('visible');
    }
  }
});
