const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const newsletterForm = document.getElementById('newsletter-form');
const contactForm = document.getElementById('contact-form');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.setAttribute(
      'aria-expanded',
      mainNav.classList.contains('open').toString()
    );
  });
}

const showToast = (message) => {
  const toast = document.createElement('div');
  toast.className = 'toast-notice';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('visible'), 20);
  setTimeout(() => toast.classList.remove('visible'), 3200);
  setTimeout(() => toast.remove(), 3800);
};

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = newsletterForm.querySelector('input[name="email"]').value;
    newsletterForm.reset();
    showToast(`Subscribed successfully with ${email}`);
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactForm.reset();
    showToast('Thank you! We have received your message.');
  });
}

// Accessibility improvement: close mobile nav when clicking outside
if (mainNav) {
  document.addEventListener('click', (event) => {
    if (
      mainNav.classList.contains('open') &&
      !mainNav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
