/*
  JP ENGINEERING - Protected Admin Dashboard JavaScript
*/

const API_BASE_URL = window.location.origin.includes('localhost')
  ? 'http://localhost:5000/api'
  : '/api';

let adminToken = localStorage.getItem('jp_admin_token') || '';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('adminLoginForm');
  const logoutBtn = document.getElementById('adminLogoutBtn');
  const brandFilterSelect = document.getElementById('adminBrandFilter');
  const searchInput = document.getElementById('adminSearchInput');

  if (adminToken) {
    showDashboard();
    fetchEnquiries();
  } else {
    showLoginForm();
  }

  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }

  if (brandFilterSelect) {
    brandFilterSelect.addEventListener('change', fetchEnquiries);
  }

  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(fetchEnquiries, 300);
    });
  }
});

function showLoginForm() {
  document.getElementById('loginSection').style.display = 'block';
  document.getElementById('dashboardSection').style.display = 'none';
}

function showDashboard() {
  document.getElementById('loginSection').style.display = 'none';
  document.getElementById('dashboardSection').style.display = 'block';
}

async function handleLogin(e) {
  e.preventDefault();
  const secretKey = document.getElementById('adminSecretKey').value.trim();

  if (!secretKey) {
    alert('Please enter the Admin Secret Key.');
    return;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secretKey }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      adminToken = data.token;
      localStorage.setItem('jp_admin_token', adminToken);
      showDashboard();
      fetchEnquiries();
    } else {
      alert(data.message || 'Invalid Admin Secret Key');
    }
  } catch (err) {
    console.error('Login error:', err);
    // Development fallback if auth API endpoint is unreachable
    adminToken = secretKey;
    localStorage.setItem('jp_admin_token', adminToken);
    showDashboard();
    fetchEnquiries();
  }
}

function handleLogout() {
  adminToken = '';
  localStorage.removeItem('jp_admin_token');
  showLoginForm();
}

async function fetchEnquiries() {
  const tableBody = document.getElementById('enquiryTableBody');
  const countBadge = document.getElementById('enquiryCount');
  const brandFilter = document.getElementById('adminBrandFilter')?.value || 'All';
  const searchQuery = document.getElementById('adminSearchInput')?.value || '';

  if (!tableBody) return;

  tableBody.innerHTML = '<tr><td colspan="7" class="text-center">Loading enquiries...</td></tr>';

  try {
    const url = new URL(`${API_BASE_URL}/enquiries`, window.location.origin);
    if (brandFilter !== 'All') url.searchParams.append('brand', brandFilter);
    if (searchQuery) url.searchParams.append('search', searchQuery);

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });

    const data = await res.json();

    if (res.ok && data.success) {
      renderEnquiries(data.data);
      if (countBadge) countBadge.textContent = data.data.length;
    } else {
      tableBody.innerHTML = `<tr><td colspan="7" class="text-center" style="color:red;">${data.message || 'Failed to load enquiries'}</td></tr>`;
    }
  } catch (err) {
    console.error('Fetch error:', err);
    tableBody.innerHTML = '<tr><td colspan="7" class="text-center">Error connecting to server. Please check backend connection.</td></tr>';
  }
}

function renderEnquiries(enquiries) {
  const tableBody = document.getElementById('enquiryTableBody');
  if (!tableBody) return;

  if (!enquiries || enquiries.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No enquiries found.</td></tr>';
    return;
  }

  tableBody.innerHTML = enquiries
    .map(
      (item) => `
    <tr>
      <td>${new Date(item.createdAt || Date.now()).toLocaleDateString()}</td>
      <td><strong>${escapeHtml(item.name)}</strong><br><small>${escapeHtml(item.company || 'N/A')}</small></td>
      <td>${escapeHtml(item.phone)}<br><small>${escapeHtml(item.email)}</small></td>
      <td><span class="top-brands-badge"><span class="bg-${(item.preferredBrand || 'other').toLowerCase()}">${escapeHtml(item.preferredBrand)}</span></span></td>
      <td>${escapeHtml(item.requirement)}</td>
      <td>${escapeHtml(item.message || '-')}</td>
      <td>
        <button class="btn btn-sm btn-outline" style="color: red; border-color: red;" onclick="deleteEnquiryItem('${item._id}')">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `
    )
    .join('');
}

async function deleteEnquiryItem(id) {
  if (!confirm('Are you sure you want to delete this enquiry record?')) return;

  try {
    const res = await fetch(`${API_BASE_URL}/enquiries/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${adminToken}` },
    });

    const data = await res.json();
    if (res.ok && data.success) {
      fetchEnquiries();
    } else {
      alert(data.message || 'Could not delete enquiry');
    }
  } catch (err) {
    console.error('Delete error:', err);
    alert('Error deleting enquiry item');
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
