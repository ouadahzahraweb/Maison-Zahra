// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a, .hero-buttons a').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Contact form demo behavior
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();

    alert(`Thank you${name ? `, ${name}` : ''}! Your message has been sent to Maison Zahra.`);

    this.reset();
  });
}