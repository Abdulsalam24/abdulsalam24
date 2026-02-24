/* ============================================================
   LOSTLINK — APPLICATION LOGIC
   ============================================================ */

'use strict';

/* ── Seed Data ─────────────────────────────────────────────── */
const SEED_ITEMS = [
  {
    id: 'item_001',
    type: 'lost',
    category: 'electronics',
    name: 'Black iPhone 14 Pro',
    description: 'Black iPhone 14 Pro with a cracked screen protector. Has a dark blue MagSafe case with a small star sticker on the back. Lock screen shows a photo of a golden retriever.',
    location: 'Central Park, Near Bethesda Fountain',
    city: 'New York',
    area: 'Midtown',
    date: '2026-02-20',
    contactName: 'James Carter',
    contactEmail: 'james@example.com',
    contactPhone: '+1 555-0101',
    contactMethod: 'both',
    status: 'open',
    photo: null,
    createdAt: new Date('2026-02-20T10:30:00').getTime(),
  },
  {
    id: 'item_002',
    type: 'found',
    category: 'wallet',
    name: 'Brown Leather Wallet',
    description: 'Found a brown genuine leather bifold wallet near the subway exit. Contains several cards and some cash — not counted. No ID found inside, just loyalty cards.',
    location: 'Times Square Subway Station, 42nd Street',
    city: 'New York',
    area: 'Midtown',
    date: '2026-02-21',
    contactName: 'Maria Lopez',
    contactEmail: 'maria@example.com',
    contactPhone: '',
    contactMethod: 'email',
    status: 'open',
    photo: null,
    createdAt: new Date('2026-02-21T14:15:00').getTime(),
  },
  {
    id: 'item_003',
    type: 'lost',
    category: 'documents',
    name: 'Passport & Travel Documents',
    description: 'Lost a blue Nigerian passport along with a folder containing flight tickets and hotel bookings. The folder is green with a travel sticker on the cover.',
    location: 'JFK International Airport, Terminal 4',
    city: 'New York',
    area: 'Queens',
    date: '2026-02-18',
    contactName: 'Abdulsalam Mohammed',
    contactEmail: 'abdulsalammohammed586686@gmail.com',
    contactPhone: '+1 555-0186',
    contactMethod: 'both',
    status: 'open',
    photo: null,
    createdAt: new Date('2026-02-18T08:45:00').getTime(),
  },
  {
    id: 'item_004',
    type: 'found',
    category: 'accessories',
    name: 'Blue Northface Backpack',
    description: 'Found a medium-sized royal blue Northface backpack on a park bench. Contains what appears to be school/work supplies — notebooks, pens, and a water bottle. No laptop inside.',
    location: 'Prospect Park, Main Entrance',
    city: 'Brooklyn',
    area: 'Park Slope',
    date: '2026-02-22',
    contactName: 'Sophie Green',
    contactEmail: 'sophie@example.com',
    contactPhone: '',
    contactMethod: 'email',
    status: 'open',
    photo: null,
    createdAt: new Date('2026-02-22T16:00:00').getTime(),
  },
  {
    id: 'item_005',
    type: 'lost',
    category: 'keys',
    name: 'Key Set with Toyota Fob',
    description: 'Lost a set of keys on a blue carabiner keychain. Includes a Toyota car key fob (black), two house keys, and a small USB drive with a red cap.',
    location: 'Brooklyn Bridge Park',
    city: 'Brooklyn',
    area: 'DUMBO',
    date: '2026-02-19',
    contactName: 'David Kim',
    contactEmail: 'david@example.com',
    contactPhone: '+1 555-0199',
    contactMethod: 'phone',
    status: 'resolved',
    photo: null,
    createdAt: new Date('2026-02-19T12:00:00').getTime(),
  },
  {
    id: 'item_006',
    type: 'found',
    category: 'electronics',
    name: 'AirPods Pro (2nd Gen)',
    description: 'Found AirPods Pro 2nd generation in a white case near the coffee shop. The case has a small scratch on the lid. Please describe a unique identifier to claim.',
    location: 'Blue Bottle Coffee, Williamsburg',
    city: 'Brooklyn',
    area: 'Williamsburg',
    date: '2026-02-23',
    contactName: 'Priya Patel',
    contactEmail: 'priya@example.com',
    contactPhone: '',
    contactMethod: 'email',
    status: 'open',
    photo: null,
    createdAt: new Date('2026-02-23T09:20:00').getTime(),
  },
  {
    id: 'item_007',
    type: 'lost',
    category: 'jewelry',
    name: 'Silver Charm Bracelet',
    description: 'Sentimental silver charm bracelet with 7 charms including an Eiffel Tower, a heart, and a butterfly. Thin chain, toggle clasp. Lost at the museum gift shop.',
    location: 'Metropolitan Museum of Art, Gift Shop',
    city: 'New York',
    area: 'Upper East Side',
    date: '2026-02-17',
    contactName: 'Emma Wilson',
    contactEmail: 'emma@example.com',
    contactPhone: '+1 555-0177',
    contactMethod: 'both',
    status: 'open',
    photo: null,
    createdAt: new Date('2026-02-17T15:30:00').getTime(),
  },
  {
    id: 'item_008',
    type: 'found',
    category: 'clothing',
    name: 'Red Columbia Rain Jacket',
    description: 'Found a red size Medium Columbia rain jacket hanging on a park bench. No name or contact info inside. Clean condition.',
    location: 'Riverside Park, 79th Street',
    city: 'New York',
    area: 'Upper West Side',
    date: '2026-02-22',
    contactName: 'Carlos Rivera',
    contactEmail: 'carlos@example.com',
    contactPhone: '',
    contactMethod: 'email',
    status: 'open',
    photo: null,
    createdAt: new Date('2026-02-22T11:45:00').getTime(),
  },
  {
    id: 'item_009',
    type: 'lost',
    category: 'pets',
    name: 'Orange Tabby Cat — "Mango"',
    description: 'Missing orange tabby cat named Mango. Male, 3 years old, wearing a green collar with a bell. Very friendly. Last seen near the apartment building on 5th Ave.',
    location: '5th Avenue, between 20th and 21st St',
    city: 'New York',
    area: 'Flatiron',
    date: '2026-02-23',
    contactName: 'Layla Hassan',
    contactEmail: 'layla@example.com',
    contactPhone: '+1 555-0155',
    contactMethod: 'both',
    status: 'open',
    photo: null,
    createdAt: new Date('2026-02-23T07:00:00').getTime(),
  },
  {
    id: 'item_010',
    type: 'found',
    category: 'documents',
    name: 'NY State Driver\'s License',
    description: 'Found a New York State driver\'s license on the sidewalk near the train station. Name and address are visible. Contact me so I can return it privately.',
    location: 'Penn Station, 8th Ave Exit',
    city: 'New York',
    area: 'Midtown West',
    date: '2026-02-21',
    contactName: 'Nathan Brooks',
    contactEmail: 'nathan@example.com',
    contactPhone: '',
    contactMethod: 'email',
    status: 'resolved',
    photo: null,
    createdAt: new Date('2026-02-21T17:30:00').getTime(),
  },
];

/* ── Category Icons ─────────────────────────────────────────── */
const CATEGORY_ICONS = {
  electronics: '📱', documents: '📄', clothing: '👕', accessories: '👜',
  pets: '🐾', keys: '🔑', wallet: '💳', jewelry: '💍', other: '📦',
};
const CATEGORY_LABELS = {
  electronics: 'Electronics', documents: 'Documents', clothing: 'Clothing',
  accessories: 'Accessories', pets: 'Pets', keys: 'Keys',
  wallet: 'Wallet / Purse', jewelry: 'Jewelry', other: 'Other',
};

/* ── State ──────────────────────────────────────────────────── */
const state = {
  items: [],
  filters: { type: 'all', category: 'all', status: 'all' },
  search: '',
  sort: 'newest',
  view: 'grid',
  page: 1,
  pageSize: 6,
  currentStep: 1,
  reportType: 'lost',
  editingId: null,
};

/* ── Helpers ────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function timeAgo(ts) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function generateId() {
  return 'item_' + Math.random().toString(36).substr(2, 9);
}

function saveItems() {
  localStorage.setItem('lostlink_items', JSON.stringify(state.items));
}

function loadItems() {
  const stored = localStorage.getItem('lostlink_items');
  if (stored) {
    state.items = JSON.parse(stored);
  } else {
    state.items = [...SEED_ITEMS];
    saveItems();
  }
}

/* ── Toast ──────────────────────────────────────────────────── */
function showToast(title, msg, type = 'success') {
  const icons = { success: '✅', error: '❌', info: '💡', warning: '⚠️' };
  const container = $('#toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${msg ? `<div class="toast-msg">${msg}</div>` : ''}
    </div>
    <button class="toast-close" aria-label="Close">✕</button>
  `;
  container.appendChild(toast);
  toast.querySelector('.toast-close').addEventListener('click', () => removeToast(toast));
  setTimeout(() => removeToast(toast), 4500);
}

function removeToast(toast) {
  toast.classList.add('removing');
  setTimeout(() => toast.remove(), 300);
}

/* ── Stats Counter Animation ────────────────────────────────── */
function animateCounter(el, target, duration = 800) {
  let start = 0;
  const step = Math.ceil(target / (duration / 16));
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start;
    if (start >= target) clearInterval(timer);
  }, 16);
}

function updateStats() {
  const total = state.items.length;
  const resolved = state.items.filter(i => i.status === 'resolved').length;
  const active = total - resolved;
  animateCounter($('#statTotal'), total);
  animateCounter($('#statResolved'), resolved);
  animateCounter($('#statActive'), active);
}

/* ── Filtering & Sorting ────────────────────────────────────── */
function getFilteredItems() {
  let result = [...state.items];

  if (state.search) {
    const q = state.search.toLowerCase();
    result = result.filter(i =>
      i.name.toLowerCase().includes(q) ||
      i.description.toLowerCase().includes(q) ||
      i.location.toLowerCase().includes(q) ||
      (i.city && i.city.toLowerCase().includes(q)) ||
      (i.area && i.area.toLowerCase().includes(q))
    );
  }

  if (state.filters.type !== 'all') result = result.filter(i => i.type === state.filters.type);
  if (state.filters.category !== 'all') result = result.filter(i => i.category === state.filters.category);
  if (state.filters.status !== 'all') result = result.filter(i => i.status === state.filters.status);

  switch (state.sort) {
    case 'newest': result.sort((a, b) => b.createdAt - a.createdAt); break;
    case 'oldest': result.sort((a, b) => a.createdAt - b.createdAt); break;
    case 'name':   result.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  return result;
}

/* ── Card Rendering ─────────────────────────────────────────── */
function renderCard(item) {
  const icon = CATEGORY_ICONS[item.category] || '📦';
  const label = CATEGORY_LABELS[item.category] || 'Other';
  const imageHTML = item.photo
    ? `<img class="card-image" src="${item.photo}" alt="${item.name}" loading="lazy" />`
    : `<div class="card-image-placeholder">
        <span class="placeholder-icon">${icon}</span>
        <span class="placeholder-label">${label}</span>
       </div>`;

  const card = document.createElement('div');
  card.className = 'item-card';
  card.dataset.id = item.id;
  card.innerHTML = `
    <div class="card-image-wrapper">
      ${imageHTML}
      <span class="card-type-badge badge-${item.type}">${item.type === 'lost' ? '😟 Lost' : '😊 Found'}</span>
      <span class="card-status-badge status-${item.status}">${item.status === 'open' ? '● Open' : '✓ Resolved'}</span>
    </div>
    <div class="card-body">
      <div class="card-category">${icon} ${label}</div>
      <h3 class="card-title">${item.name}</h3>
      <p class="card-desc">${item.description}</p>
      <div class="card-meta">
        <span class="card-location">📍 ${item.location.length > 30 ? item.location.slice(0,30) + '…' : item.location}</span>
        <span class="card-date">🕐 ${formatDate(item.date)}</span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => openDetail(item.id));
  return card;
}

function renderItems() {
  const grid = $('#itemsGrid');
  const emptyState = $('#emptyState');
  const loadMoreWrapper = $('#loadMoreWrapper');
  const itemCountEl = $('#itemCount');

  const filtered = getFilteredItems();
  const total = filtered.length;
  const visible = filtered.slice(0, state.page * state.pageSize);

  itemCountEl.textContent = `${total} item${total !== 1 ? 's' : ''}`;

  grid.innerHTML = '';

  if (total === 0) {
    emptyState.style.display = 'block';
    loadMoreWrapper.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';
  visible.forEach((item, i) => {
    const card = renderCard(item);
    card.style.animationDelay = `${i * 0.05}s`;
    grid.appendChild(card);
  });

  const hasMore = visible.length < total;
  loadMoreWrapper.style.display = hasMore ? 'block' : 'none';
}

/* ── Detail Modal ────────────────────────────────────────────── */
function openDetail(id) {
  const item = state.items.find(i => i.id === id);
  if (!item) return;

  const icon = CATEGORY_ICONS[item.category] || '📦';
  const label = CATEGORY_LABELS[item.category] || 'Other';
  const imageHTML = item.photo
    ? `<img class="detail-image" src="${item.photo}" alt="${item.name}" />`
    : `<div class="detail-image-placeholder">${icon}</div>`;

  const contactInfo = [];
  if (item.contactMethod !== 'phone') contactInfo.push(`📧 ${item.contactEmail}`);
  if (item.contactPhone && item.contactMethod !== 'email') contactInfo.push(`📞 ${item.contactPhone}`);

  $('#detailContent').innerHTML = `
    <div class="detail-header">
      <span class="detail-type-badge badge-${item.type}">${item.type === 'lost' ? '😟 Lost' : '😊 Found'}</span>
      <h2 class="detail-title">${item.name}</h2>
      <div class="detail-meta">
        <span>${icon} ${label}</span>
        <span>📍 ${item.location}</span>
        <span>📅 ${formatDate(item.date)}</span>
        <span class="card-status-badge status-${item.status}" style="position:static">${item.status === 'open' ? '● Open' : '✓ Resolved'}</span>
      </div>
    </div>
    <div class="detail-image-wrapper">${imageHTML}</div>
    <div class="detail-body">
      <div class="detail-section">
        <h4>Description</h4>
        <p>${item.description}</p>
      </div>
      <div class="detail-section">
        <h4>Location Details</h4>
        <p>${item.location}${item.city ? ', ' + item.city : ''}${item.area ? ' — ' + item.area : ''}</p>
      </div>
      <div class="detail-section">
        <h4>Reported By</h4>
        <p>${item.contactName}</p>
      </div>
      <div class="detail-section">
        <h4>Contact Information</h4>
        <p>${contactInfo.join('<br/>')}</p>
      </div>
      <div class="detail-section">
        <h4>Reported</h4>
        <p>${timeAgo(item.createdAt)} — ${new Date(item.createdAt).toLocaleString()}</p>
      </div>
    </div>
    <div class="detail-actions">
      ${item.status === 'open'
        ? `<button class="btn-primary" id="markResolvedBtn" data-id="${item.id}">✓ Mark as Resolved</button>`
        : `<button class="btn-ghost" disabled>✓ Already Resolved</button>`}
      <button class="btn-ghost" id="shareBtn">🔗 Share</button>
      <button class="btn-ghost" id="deleteItemBtn" data-id="${item.id}" style="margin-left:auto;color:var(--accent);">🗑 Delete</button>
    </div>
  `;

  const markBtn = $('#markResolvedBtn');
  if (markBtn) {
    markBtn.addEventListener('click', () => {
      item.status = 'resolved';
      saveItems();
      renderItems();
      updateStats();
      closeDetailModal();
      showToast('Item Resolved!', `"${item.name}" has been marked as resolved.`, 'success');
    });
  }

  $('#shareBtn').addEventListener('click', () => {
    const text = `${item.type === 'lost' ? 'Lost' : 'Found'}: ${item.name} at ${item.location}`;
    if (navigator.share) {
      navigator.share({ title: 'LostLink', text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(text).then(() => showToast('Copied!', 'Item details copied to clipboard.', 'info'));
    }
  });

  $('#deleteItemBtn').addEventListener('click', () => {
    if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
      state.items = state.items.filter(i => i.id !== id);
      saveItems();
      renderItems();
      updateStats();
      closeDetailModal();
      showToast('Deleted', `"${item.name}" has been removed.`, 'info');
    }
  });

  $('#detailOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  $('#detailOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Report Modal ────────────────────────────────────────────── */
function openModal(type = 'lost') {
  state.currentStep = 1;
  state.reportType = type;
  resetForm();
  updateStep();
  setReportType(type);
  $('#modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function setReportType(type) {
  state.reportType = type;
  $$('.type-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });
  $('#modalTitle').textContent = type === 'lost' ? 'Report a Lost Item' : 'Report a Found Item';
}

/* ── Multi-Step Form ─────────────────────────────────────────── */
function updateStep() {
  const step = state.currentStep;

  $$('.form-step').forEach((el, i) => {
    el.classList.toggle('active', i + 1 === step);
  });

  $$('.progress-step').forEach((el, i) => {
    const s = i + 1;
    el.classList.remove('active', 'done');
    if (s === step) el.classList.add('active');
    else if (s < step) el.classList.add('done');
    const dot = el.querySelector('.step-dot');
    if (dot) dot.textContent = s < step ? '✓' : '';
  });

  $$('.progress-line').forEach((el, i) => {
    el.classList.toggle('filled', i + 1 < step);
  });

  $('#stepIndicator').textContent = `Step ${step} of 3`;
  $('#prevBtn').style.display = step > 1 ? 'block' : 'none';
  $('#nextBtn').style.display = step < 3 ? 'block' : 'none';
  $('#submitBtn').style.display = step === 3 ? 'block' : 'none';
}

function validateStep(step) {
  let valid = true;
  clearErrors();

  if (step === 1) {
    const name = $('#itemName').value.trim();
    const category = $('#itemCategory').value;
    const desc = $('#itemDescription').value.trim();
    const date = $('#itemDate').value;
    if (!name) { showError('itemNameError', 'Item name is required.'); valid = false; }
    if (!category) { showError('itemCategoryError', 'Please select a category.'); valid = false; }
    if (!desc || desc.length < 10) { showError('itemDescriptionError', 'Please provide a description (min 10 chars).'); valid = false; }
    if (!date) { showError('itemDateError', 'Please select the date.'); valid = false; }
  }

  if (step === 2) {
    const loc = $('#itemLocation').value.trim();
    if (!loc) { showError('itemLocationError', 'Location is required.'); valid = false; }
  }

  if (step === 3) {
    const name = $('#contactName').value.trim();
    const email = $('#contactEmail').value.trim();
    const agree = $('#agreeTerms').checked;
    if (!name) { showError('contactNameError', 'Your name is required.'); valid = false; }
    if (!email || !isValidEmail(email)) { showError('contactEmailError', 'Please enter a valid email address.'); valid = false; }
    if (!agree) { showError('agreeTermsError', 'You must agree before submitting.'); valid = false; }
  }

  return valid;
}

function showError(id, msg) {
  const el = $('#' + id);
  if (el) {
    el.textContent = msg;
    const input = el.previousElementSibling;
    if (input && input.classList.contains('form-input')) input.classList.add('error');
  }
}

function clearErrors() {
  $$('.form-error').forEach(el => el.textContent = '');
  $$('.form-input.error').forEach(el => el.classList.remove('error'));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function resetForm() {
  $('#reportForm').reset();
  clearErrors();
  $('#photoPreview').style.display = 'none';
  $('#fileUploadContent').style.display = 'flex';
  $('#descCount').textContent = '0';
}

/* ── Form Submission ─────────────────────────────────────────── */
function handleFormSubmit(e) {
  e.preventDefault();
  if (!validateStep(3)) return;

  const photo = $('#photoPreview').src && $('#photoPreview').style.display !== 'none'
    ? $('#photoPreview').src
    : null;

  const newItem = {
    id: generateId(),
    type: state.reportType,
    category: $('#itemCategory').value,
    name: $('#itemName').value.trim(),
    description: $('#itemDescription').value.trim(),
    location: $('#itemLocation').value.trim(),
    city: $('#itemCity').value.trim(),
    area: $('#itemArea').value.trim(),
    date: $('#itemDate').value,
    contactName: $('#contactName').value.trim(),
    contactEmail: $('#contactEmail').value.trim(),
    contactPhone: $('#contactPhone').value.trim(),
    contactMethod: document.querySelector('input[name="contactMethod"]:checked').value,
    status: 'open',
    photo,
    createdAt: Date.now(),
  };

  state.items.unshift(newItem);
  saveItems();

  closeModal();
  state.page = 1;
  renderItems();
  updateStats();

  showToast(
    'Report Submitted! 🎉',
    `Your ${newItem.type} item report for "${newItem.name}" has been posted.`,
    'success'
  );

  // Notification dot
  $('#notifDot').style.display = 'block';
}

/* ── Navbar Scroll Effect ────────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Active link on scroll
  const sections = ['dashboard', 'browse', 'about'];
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    $$('.nav-link').forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }, { passive: true });
}

/* ── Mobile Menu ─────────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobileMenu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  $$('.mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

/* ── Search & Filter Logic ───────────────────────────────────── */
function initSearch() {
  const input = $('#searchInput');
  const clearBtn = $('#searchClear');

  input.addEventListener('input', () => {
    state.search = input.value.trim();
    clearBtn.classList.toggle('visible', !!state.search);
    state.page = 1;
    renderItems();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    state.search = '';
    clearBtn.classList.remove('visible');
    state.page = 1;
    renderItems();
  });

  $('#searchBtn').addEventListener('click', () => {
    state.search = input.value.trim();
    state.page = 1;
    renderItems();
  });
}

function initFilters() {
  $$('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const group = chip.closest('.filter-chips');
      group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filterKey = chip.dataset.filter;
      state.filters[filterKey] = chip.dataset.value;
      state.page = 1;
      renderItems();
    });
  });

  $('#sortSelect').addEventListener('change', (e) => {
    state.sort = e.target.value;
    state.page = 1;
    renderItems();
  });
}

function initViewToggle() {
  const grid = $('#itemsGrid');
  $('#gridViewBtn').addEventListener('click', () => {
    state.view = 'grid';
    grid.classList.remove('list-view');
    $('#gridViewBtn').classList.add('active');
    $('#listViewBtn').classList.remove('active');
  });
  $('#listViewBtn').addEventListener('click', () => {
    state.view = 'list';
    grid.classList.add('list-view');
    $('#listViewBtn').classList.add('active');
    $('#gridViewBtn').classList.remove('active');
  });
}

/* ── Load More ───────────────────────────────────────────────── */
function initLoadMore() {
  $('#loadMoreBtn').addEventListener('click', () => {
    state.page += 1;
    renderItems();
  });
}

/* ── Form Multi-step ─────────────────────────────────────────── */
function initFormSteps() {
  $('#nextBtn').addEventListener('click', () => {
    if (validateStep(state.currentStep)) {
      state.currentStep++;
      updateStep();
    }
  });

  $('#prevBtn').addEventListener('click', () => {
    state.currentStep--;
    updateStep();
  });

  $('#reportForm').addEventListener('submit', handleFormSubmit);

  // Type toggle
  $$('.type-btn').forEach(btn => {
    btn.addEventListener('click', () => setReportType(btn.dataset.type));
  });

  // Description character count
  $('#itemDescription').addEventListener('input', function () {
    const len = this.value.length;
    $('#descCount').textContent = len;
    if (len > 500) this.value = this.value.slice(0, 500);
  });

  // File upload
  const fileUpload = $('#fileUpload');
  const fileInput = $('#itemPhoto');
  const preview = $('#photoPreview');
  const uploadContent = $('#fileUploadContent');

  fileUpload.addEventListener('click', () => fileInput.click());
  fileUpload.addEventListener('dragover', (e) => { e.preventDefault(); fileUpload.style.borderColor = 'var(--primary)'; });
  fileUpload.addEventListener('dragleave', () => { fileUpload.style.borderColor = ''; });
  fileUpload.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUpload.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file, preview, uploadContent);
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) handleFileSelect(file, preview, uploadContent);
  });

  // Set today as max date
  const dateInput = $('#itemDate');
  dateInput.max = new Date().toISOString().split('T')[0];
  dateInput.value = new Date().toISOString().split('T')[0];
}

function handleFileSelect(file, preview, uploadContent) {
  if (!file.type.startsWith('image/')) { showToast('Invalid file', 'Please upload an image file.', 'error'); return; }
  if (file.size > 5 * 1024 * 1024) { showToast('File too large', 'Please upload an image under 5MB.', 'error'); return; }
  const reader = new FileReader();
  reader.onload = (e) => {
    preview.src = e.target.result;
    preview.style.display = 'block';
    uploadContent.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

/* ── Modal Triggers ──────────────────────────────────────────── */
function initModalTriggers() {
  $('#openModalBtn').addEventListener('click', () => openModal('lost'));
  $('#openModalBtnMobile').addEventListener('click', () => openModal('lost'));
  $('#reportLostBtn').addEventListener('click', () => openModal('lost'));
  $('#reportFoundBtn').addEventListener('click', () => openModal('found'));
  $('#emptyReportBtn')?.addEventListener('click', () => openModal('lost'));

  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', (e) => { if (e.target === $('#modalOverlay')) closeModal(); });
  $('#detailClose').addEventListener('click', closeDetailModal);
  $('#detailOverlay').addEventListener('click', (e) => { if (e.target === $('#detailOverlay')) closeDetailModal(); });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeDetailModal(); }
  });
}

/* ── Intersection Observer for animations ────────────────────── */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.step-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`;
    observer.observe(el);
  });
}

/* ── Init ────────────────────────────────────────────────────── */
function init() {
  loadItems();
  renderItems();
  updateStats();
  initNavbar();
  initMobileMenu();
  initSearch();
  initFilters();
  initViewToggle();
  initLoadMore();
  initFormSteps();
  initModalTriggers();
  initAnimations();

  // Notification dot reset on click
  $('#notifBtn').addEventListener('click', () => {
    $('#notifDot').style.display = 'none';
    showToast('Notifications', 'You\'re all caught up!', 'info');
  });
}

document.addEventListener('DOMContentLoaded', init);
