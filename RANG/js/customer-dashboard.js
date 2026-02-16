// ===================================
// CUSTOMER DASHBOARD - BIHARISTORE.IN
// Connected with Login System
// ===================================

console.log('🛍️ Customer Dashboard loading...');

// ===================================
// AUTHENTICATION CHECK
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ Customer Dashboard DOM loaded');
  
  if (!checkAuth()) {
    return;
  }
  
  loadUserData();
  initializeNavigation();
  initializeShoppingFeatures();
  initializeChat();
  initializeLogout();
  
  console.log('✅ Customer Dashboard initialized successfully!');
});

// Check Authentication
function checkAuth() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const userType = localStorage.getItem('userType');
  const currentUser = localStorage.getItem('currentUser');
  
  console.log('Auth Check:', { isLoggedIn, userType, hasUserData: !!currentUser });
  
  if (!isLoggedIn || isLoggedIn !== 'true') {
    console.log('❌ Not logged in');
    alert('⚠️ Please login to access this page.');
    window.location.href = 'login.html';
    return false;
  }
  
  if (userType !== 'customer') {
    console.log('❌ Wrong user type');
    alert('⚠️ This page is for customers only.');
    window.location.href = 'login.html';
    return false;
  }
  
  if (!currentUser) {
    console.log('❌ No user data');
    alert('⚠️ User data not found. Please login again.');
    window.location.href = 'login.html';
    return false;
  }
  
  console.log('✅ Authentication successful');
  return true;
}

// Load User Data
function loadUserData() {
  try {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Loading user data:', currentUser);
    
    if (currentUser && currentUser.fullname) {
      const profileName = document.getElementById('profileName');
      if (profileName) {
        profileName.textContent = currentUser.fullname;
      }
      
      const settingsFullname = document.getElementById('settingsFullname');
      if (settingsFullname) {
        settingsFullname.value = currentUser.fullname;
      }
      
      const settingsEmail = document.getElementById('settingsEmail');
      if (settingsEmail && currentUser.email) {
        settingsEmail.value = currentUser.email;
      }
      
      const settingsPhone = document.getElementById('settingsPhone');
      if (settingsPhone && currentUser.phone) {
        settingsPhone.value = currentUser.phone;
      }
      
      const settingsCity = document.getElementById('settingsCity');
      if (settingsCity && currentUser.city) {
        settingsCity.value = currentUser.city;
      }
      
      const settingsState = document.getElementById('settingsState');
      if (settingsState && currentUser.state) {
        settingsState.value = currentUser.state;
      }
      
      console.log('✅ User data loaded');
    }
  } catch (error) {
    console.error('❌ Error loading user data:', error);
  }
}

// ===================================
// NAVIGATION
// ===================================
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav-item:not(.logout-btn)');
  const contentSections = document.querySelectorAll('.content-section');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetSection = item.getAttribute('data-section');
      console.log('Navigating to:', targetSection);
      
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      contentSections.forEach(section => section.classList.remove('active'));
      
      const section = document.getElementById(targetSection);
      if (section) {
        section.classList.add('active');
      }
      
      closeMobileSidebar();
    });
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
          sidebar.classList.remove('active');
        }
      }
    });
  }
}

function closeMobileSidebar() {
  if (window.innerWidth <= 1024) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.remove('active');
    }
  }
}

// ===================================
// SHOPPING FEATURES
// ===================================
function initializeShoppingFeatures() {
  // Add to Cart buttons
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('✅ Item added to cart!');
    });
  });
  
  // Buy Now buttons
  document.querySelectorAll('.buy-now').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('🛒 Proceeding to checkout...');
    });
  });
  
  // Wishlist buttons
  document.querySelectorAll('.wishlist-btn, .wishlist-icon').forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (icon.classList.contains('far')) {
          icon.classList.remove('far');
          icon.classList.add('fas');
          btn.classList.add('active');
          alert('❤️ Added to wishlist!');
        } else {
          icon.classList.remove('fas');
          icon.classList.add('far');
          btn.classList.remove('active');
          alert('💔 Removed from wishlist');
        }
      }
    });
  });
  
  // Follow buttons
  document.querySelectorAll('.follow-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.textContent.includes('Follow')) {
        btn.innerHTML = '<i class="fas fa-check"></i> Following';
        btn.style.background = '#6c757d';
        alert('✅ Now following this artist!');
      } else {
        btn.innerHTML = '<i class="fas fa-user-plus"></i> Follow';
        btn.style.background = '';
      }
    });
  });
  
  // Cart quantity buttons
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      let value = parseInt(input.value);
      
      if (btn.textContent === '+') {
        input.value = value + 1;
      } else if (btn.textContent === '-' && value > 1) {
        input.value = value - 1;
      }
    });
  });
  
  // Remove from cart
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Remove this item from cart?')) {
        btn.closest('.cart-item').remove();
        alert('✅ Item removed from cart');
      }
    });
  });
  
  // Checkout button
  const checkoutBtn = document.querySelector('.btn-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      alert('🎉 Proceeding to checkout!\n\nCheckout functionality coming soon.');
    });
  }
}

// ===================================
// CHAT
// ===================================
function initializeChat() {
  // Chat item selection
  document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.chat-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  
  // Send message
  const btnSend = document.querySelector('.btn-send');
  if (btnSend) {
    btnSend.addEventListener('click', sendMessage);
  }
  
  const chatInput = document.querySelector('.chat-input input');
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
}

function sendMessage() {
  const input = document.querySelector('.chat-input input');
  const message = input.value.trim();
  
  if (message) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sent';
    messageDiv.innerHTML = `
      <div class="message-content">
        <p>${message}</p>
        <span class="message-time">Just now</span>
      </div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    input.value = '';
  }
}

// ===================================
// LOGOUT
// ===================================
function initializeLogout() {
  const logoutBtn = document.getElementById('logoutBtn');
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (confirm('Are you sure you want to logout?')) {
        console.log('Logging out...');
        
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userType');
        
        console.log('✅ Session cleared');
        
        alert('✅ Logged out successfully!');
        window.location.href = 'login.html';
      }
    });
  }
}

// ===================================
// SETTINGS SAVE
// ===================================
document.querySelectorAll('.settings-group .btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('✅ Settings saved successfully!');
  });
});

// ===================================
// NOTIFICATIONS CLICK
// ===================================
document.querySelectorAll('.notification-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.remove('unread');
  });
});

console.log('✅ Customer Dashboard script loaded');
