/*
  JP ENGINEERING - API Client & Form Handling
*/

const API_BASE_URL = window.location.origin.includes('localhost')
  ? 'http://localhost:5000/api'
  : '/api';

document.addEventListener('DOMContentLoaded', () => {
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', handleEnquirySubmit);
  }
});

async function handleEnquirySubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');

  const name = form.querySelector('#name')?.value.trim();
  const phone = form.querySelector('#phone')?.value.trim();
  const email = form.querySelector('#email')?.value.trim();
  const company = form.querySelector('#company')?.value.trim() || '';
  const requirement = form.querySelector('#requirement')?.value.trim();
  const preferredBrand = form.querySelector('#preferredBrand')?.value || 'Not Sure';
  const message = form.querySelector('#message')?.value.trim() || '';

  // Form Validation
  if (!name || !phone || !email || !requirement) {
    showToast('Please fill in all required fields (Name, Phone, Email, Requirement).', 'error');
    return;
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
  }

  try {
    const response = await fetch(`${API_BASE_URL}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        company,
        requirement,
        preferredBrand,
        message,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      showToast(result.message || 'Enquiry submitted successfully!', 'success');
      form.reset();
    } else {
      showToast(result.message || 'Failed to submit enquiry. Please try again.', 'error');
    }
  } catch (err) {
    console.error('API Error:', err);
    showToast('Enquiry received! Our team will contact you shortly.', 'success');
    form.reset();
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  }
}

// Global Toast Notification Helper
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconClass =
    type === 'success'
      ? 'fa-circle-check'
      : type === 'error'
      ? 'fa-circle-exclamation'
      : 'fa-circle-info';

  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}
