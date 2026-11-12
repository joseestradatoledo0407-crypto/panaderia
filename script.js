const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.product-card');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    cards.forEach((card) => {
      card.classList.toggle('hidden', filter !== 'todos' && card.dataset.category !== filter);
    });
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
