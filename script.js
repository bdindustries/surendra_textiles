
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const inquiry = document.querySelector('#inquiry-form');
if (inquiry) {
  inquiry.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(inquiry);
    const lines = [
      'Hello Surendra Textiles, I have an enquiry.',
      `Name: ${data.get('name') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Product: ${data.get('product') || ''}`,
      `Location: ${data.get('location') || ''}`,
      `Requirement: ${data.get('message') || ''}`
    ];
    window.open(`https://wa.me/919706611936?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });
}
