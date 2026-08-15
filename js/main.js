/*
  JP ENGINEERING - Main JavaScript Utilities
*/

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackToTop();
  initFaqAccordion();
  initDynamicYear();
  highlightActiveLink();
});

// Navbar sticky effect and mobile toggle
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
          icon.classList.replace('fa-xmark', 'fa-bars');
        }
      }
    });
  }
}

// Back to Top Button
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all other accordion items
        faqItems.forEach((other) => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Dynamic Footer Year
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Highlight active menu item based on URL
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link, .nav-quote-btn');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
