// ===================================
// ARTIST DASHBOARD - BIHARISTORE.IN
// Connected with Login System
// ===================================

console.log('🎨 Artist Dashboard loading...');

// ===================================
// AUTHENTICATION CHECK (RUNS FIRST)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ Dashboard DOM loaded');
  
  // Check authentication
  if (!checkAuth()) {
    return; // Stop execution if not authenticated
  }
  
  // Load user data
  loadUserData();
  
  // Initialize all features
  initializeNavigation();
  initializePostInteractions();
  initializeUploadFeatures();
  initializeChat();
  initializeLogout();
  
  console.log('✅ Artist Dashboard initialized successfully!');
});

// ===================================
// CHECK AUTHENTICATION
// ===================================
function checkAuth() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const userType = localStorage.getItem('userType');
  const currentUser = localStorage.getItem('currentUser');
  
  console.log('Auth Check:', {
    isLoggedIn,
    userType,
    hasUserData: !!currentUser
  });
  
  if (!isLoggedIn || isLoggedIn !== 'true') {
    console.log('❌ Not logged in - redirecting');
    alert('⚠️ Please login to access this page.');
    window.location.href = 'login.html';
    return false;
  }
  
  if (userType !== 'artist') {
    console.log('❌ Wrong user type - redirecting');
    alert('⚠️ This page is for artists only.');
    window.location.href = 'login.html';
    return false;
  }
  
  if (!currentUser) {
    console.log('❌ No user data - redirecting');
    alert('⚠️ User data not found. Please login again.');
    window.location.href = 'login.html';
    return false;
  }
  
  console.log('✅ Authentication successful');
  return true;
}

// ===================================
// LOAD USER DATA
// ===================================
function loadUserData() {
  try {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Loading user data:', currentUser);
    
    if (currentUser && currentUser.fullname) {
      // Update profile name in sidebar
      const profileName = document.getElementById('profileName');
      if (profileName) {
        profileName.textContent = currentUser.fullname;
      }
      
      // Update profile name in My Profile section
      const profileDisplayName = document.getElementById('profileDisplayName');
      if (profileDisplayName) {
        profileDisplayName.textContent = currentUser.fullname;
      }
      
      // Update settings username
      const settingsUsername = document.getElementById('settingsUsername');
      if (settingsUsername && currentUser.username) {
        settingsUsername.value = currentUser.username;
      }
      
      // Update settings fullname
      const settingsFullname = document.getElementById('settingsFullname');
      if (settingsFullname) {
        settingsFullname.value = currentUser.fullname;
      }
      
      console.log('✅ User data loaded successfully');
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
      
      // Remove active from all nav items
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // Add active to clicked item
      item.classList.add('active');
      
      // Hide all sections
      contentSections.forEach(section => section.classList.remove('active'));
      
      // Show target section
      const section = document.getElementById(targetSection);
      if (section) {
        section.classList.add('active');
      }
      
      // Close mobile sidebar
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
    
    // Close sidebar when clicking outside
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
// POST INTERACTIONS
// ===================================
function initializePostInteractions() {
  document.addEventListener('click', (e) => {
    // Like button
    if (e.target.closest('.like-btn')) {
      const btn = e.target.closest('.like-btn');
      btn.classList.toggle('liked');
      const icon = btn.querySelector('i');
      
      if (btn.classList.contains('liked')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.style.color = '#e74c3c';
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.style.color = '';
      }
    }
    
    // Comment button
    if (e.target.closest('.comment-btn')) {
      const postCard = e.target.closest('.post-card');
      const commentInput = postCard.querySelector('.add-comment input');
      if (commentInput) {
        commentInput.focus();
      }
    }
    
    // Share button
    if (e.target.closest('.share-btn')) {
      alert('📤 Share functionality coming soon!');
    }
    
    // Save button
    if (e.target.closest('.save-btn')) {
      const btn = e.target.closest('.save-btn');
      const icon = btn.querySelector('i');
      
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        alert('✅ Saved to your collection!');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        alert('❌ Removed from saved items.');
      }
    }
    
    // Buy button
    if (e.target.closest('.buy-btn')) {
      alert('🛒 Purchase functionality coming soon!');
    }
    
    // Follow button
    if (e.target.closest('.btn-follow')) {
      const btn = e.target.closest('.btn-follow');
      
      if (btn.textContent.includes('Follow')) {
        btn.innerHTML = '<i class="fas fa-check"></i> Following';
        btn.classList.add('btn-secondary');
        btn.classList.remove('btn-primary');
        alert('✅ You are now following this artist!');
      } else {
        btn.innerHTML = '<i class="fas fa-user-plus"></i> Follow';
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-secondary');
      }
    }
  });
  
  // Quick post actions
  document.querySelectorAll('.post-action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      
      if (type === 'photo') {
        document.querySelector('[data-section="upload-photo"]').click();
      } else if (type === 'video') {
        document.querySelector('[data-section="upload-video"]').click();
      } else if (type === 'live') {
        document.querySelector('[data-section="go-live"]').click();
      }
    });
  });
  
  // Add comment on Enter
  document.addEventListener('keypress', (e) => {
    if (e.target.matches('.add-comment input') && e.key === 'Enter') {
      const input = e.target;
      const comment = input.value.trim();
      
      if (comment) {
        const commentsSection = input.closest('.post-card').querySelector('.comments-section');
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
          <div class="comment-avatar">
            <i class="fas fa-user"></i>
          </div>
          <div class="comment-content">
            <h5>${currentUser.fullname || 'You'}</h5>
            <p>${comment}</p>
          </div>
        `;
        
        commentsSection.appendChild(commentDiv);
        input.value = '';
      }
    }
  });
}

// ===================================
// UPLOAD FEATURES
// ===================================
function initializeUploadFeatures() {
  // Photo upload
  const photoUploadArea = document.getElementById('photoUploadArea');
  const photoInput = document.getElementById('photoInput');
  const photoPreview = document.getElementById('photoPreview');
  const previewImage = document.getElementById('previewImage');
  const removePhoto = document.getElementById('removePhoto');
  const photoForSale = document.getElementById('photoForSale');
  const photoPriceInput = document.getElementById('photoPriceInput');
  
  if (photoUploadArea && photoInput) {
    photoUploadArea.addEventListener('click', () => photoInput.click());
    
    photoInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            previewImage.src = e.target.result;
            photoUploadArea.style.display = 'none';
            photoPreview.style.display = 'block';
          };
          reader.readAsDataURL(file);
        }
      }
    });
    
    if (removePhoto) {
      removePhoto.addEventListener('click', () => {
        photoInput.value = '';
        photoUploadArea.style.display = 'block';
        photoPreview.style.display = 'none';
        previewImage.src = '';
      });
    }
    
    if (photoForSale) {
      photoForSale.addEventListener('change', (e) => {
        if (photoPriceInput) {
          photoPriceInput.style.display = e.target.checked ? 'block' : 'none';
        }
      });
    }
    
    const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
    if (uploadPhotoBtn) {
      uploadPhotoBtn.addEventListener('click', () => {
        const caption = document.getElementById('photoCaption').value;
        
        if (!previewImage.src) {
          alert('⚠️ Please select a photo to upload.');
          return;
        }
        
        if (!caption.trim()) {
          alert('⚠️ Please add a caption for your photo.');
          return;
        }
        
        alert('✅ Photo uploaded successfully!');
        
        // Reset form
        document.getElementById('photoCaption').value = '';
        if (photoForSale) photoForSale.checked = false;
        if (photoPriceInput) photoPriceInput.style.display = 'none';
        removePhoto.click();
        
        // Navigate to home
        document.querySelector('[data-section="home"]').click();
      });
    }
  }
  
  // Video upload
  const videoUploadArea = document.getElementById('videoUploadArea');
  const videoInput = document.getElementById('videoInput');
  const videoPreview = document.getElementById('videoPreview');
  const previewVideo = document.getElementById('previewVideo');
  const removeVideo = document.getElementById('removeVideo');
  
  if (videoUploadArea && videoInput) {
    videoUploadArea.addEventListener('click', () => videoInput.click());
    
    videoInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        if (file.type.startsWith('video/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            previewVideo.src = e.target.result;
            videoUploadArea.style.display = 'none';
            videoPreview.style.display = 'block';
          };
          reader.readAsDataURL(file);
        }
      }
    });
    
    if (removeVideo) {
      removeVideo.addEventListener('click', () => {
        videoInput.value = '';
        videoUploadArea.style.display = 'block';
        videoPreview.style.display = 'none';
        previewVideo.src = '';
      });
    }
    
    const uploadVideoBtn = document.getElementById('uploadVideoBtn');
    if (uploadVideoBtn) {
      uploadVideoBtn.addEventListener('click', () => {
        const caption = document.getElementById('videoCaption').value;
        
        if (!previewVideo.src) {
          alert('⚠️ Please select a video to upload.');
          return;
        }
        
        if (!caption.trim()) {
          alert('⚠️ Please add a description for your video.');
          return;
        }
        
        alert('✅ Video uploaded successfully!');
        
        // Reset
        document.getElementById('videoCaption').value = '';
        removeVideo.click();
        
        document.querySelector('[data-section="home"]').click();
      });
    }
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
        
        // Clear all session data
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userType');
        
        console.log('✅ Session cleared');
        
        alert('✅ Logged out successfully!');
        
        // Redirect to login
        window.location.href = 'login.html';
      }
    });
  }
}

console.log('✅ Artist Dashboard script loaded');
