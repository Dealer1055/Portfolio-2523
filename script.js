// Small interactions: mobile nav toggle, contact form fake submit, year
document.addEventListener('DOMContentLoaded', () => {
  // year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // contact form (fake submit)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // show success message (no backend)
      msg.textContent = 'Xabaringiz yuborildi — tez orada javob beraman. ✅';
      msg.style.color = '#6ee7b7';
      form.reset();
      setTimeout(()=> msg.textContent = '', 6000);
    });
  }
});
