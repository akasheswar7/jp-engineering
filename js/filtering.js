/*
  JP ENGINEERING - Filtering Logic for Products and Projects Showcase
*/

document.addEventListener('DOMContentLoaded', () => {
  initProductFilters();
  initProjectFilters();
});

function initProductFilters() {
  const brandButtons = document.querySelectorAll('.brand-filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (!brandButtons.length || !productCards.length) return;

  brandButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      brandButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach((card) => {
        const cardBrand = card.getAttribute('data-brand');
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardBrand === filterValue || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initProjectFilters() {
  const projectButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!projectButtons.length || !projectCards.length) return;

  projectButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      projectButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
