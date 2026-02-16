// document.addEventListener('DOMContentLoaded', function() {
  
//   // Get all elements
//   var artistTab = document.getElementById('artistTab');
//   var customerTab = document.getElementById('customerTab');
//   var artistWrapper = document.getElementById('artistWrapper');
//   var customerWrapper = document.getElementById('customerWrapper');
  
//   // Artist toggle buttons
//   var artistSignupBtn = document.getElementById('artistSignupBtn');
//   var artistLoginBtn = document.getElementById('artistLoginBtn');
//   var artistSignupContainer = document.getElementById('artistSignupContainer');
//   var artistLoginContainer = document.getElementById('artistLoginContainer');
  
//   // Customer toggle buttons
//   var customerSignupBtn = document.getElementById('customerSignupBtn');
//   var customerLoginBtn = document.getElementById('customerLoginBtn');
//   var customerSignupContainer = document.getElementById('customerSignupContainer');
//   var customerLoginContainer = document.getElementById('customerLoginContainer');
  
//   // Forms
//   var artistSignupForm = document.getElementById('artistSignupForm');
//   var artistLoginForm = document.getElementById('artistLoginForm');
//   var customerSignupForm = document.getElementById('customerSignupForm');
//   var customerLoginForm = document.getElementById('customerLoginForm');
  
//   // Main Tab Switching (Artist/Customer)
//   artistTab.addEventListener('click', function() {
//     artistTab.classList.add('active');
//     customerTab.classList.remove('active');
//     artistWrapper.style.display = 'block';
//     customerWrapper.style.display = 'none';
//   });
  
//   customerTab.addEventListener('click', function() {
//     customerTab.classList.add('active');
//     artistTab.classList.remove('active');
//     customerWrapper.style.display = 'block';
//     artistWrapper.style.display = 'none';
//   });
  
//   // Artist Signup/Login Toggle
//   artistSignupBtn.addEventListener('click', function() {
//     artistSignupBtn.classList.add('active');
//     artistLoginBtn.classList.remove('active');
//     artistSignupContainer.style.display = 'block';
//     artistLoginContainer.style.display = 'none';
//   });
  
//   artistLoginBtn.addEventListener('click', function() {
//     artistLoginBtn.classList.add('active');
//     artistSignupBtn.classList.remove('active');
//     artistLoginContainer.style.display = 'block';
//     artistSignupContainer.style.display = 'none';
//   });
  
//   // Customer Signup/Login Toggle
//   customerSignupBtn.addEventListener('click', function() {
//     customerSignupBtn.classList.add('active');
//     customerLoginBtn.classList.remove('active');
//     customerSignupContainer.style.display = 'block';
//     customerLoginContainer.style.display = 'none';
//   });
  
//   customerLoginBtn.addEventListener('click', function() {
//     customerLoginBtn.classList.add('active');
//     customerSignupBtn.classList.remove('active');
//     customerLoginContainer.style.display = 'block';
//     customerSignupContainer.style.display = 'none';
//   });
  
//   // Artist Signup Form Submit
//   if (artistSignupForm) {
//     artistSignupForm.addEventListener('submit', function(e) {
//       e.preventDefault();
//       var formData = new FormData(artistSignupForm);
//       var name = formData.get('fullname');
//       alert('Thank you, ' + name + '! Your artist application has been submitted successfully. Our team will review it and contact you within 2-3 business days via email or phone.');
//       artistSignupForm.reset();
//     });
//   }
  
//   // Artist Login Form Submit
//   if (artistLoginForm) {
//     artistLoginForm.addEventListener('submit', function(e) {
//       e.preventDefault();
//       var formData = new FormData(artistLoginForm);
//       var username = formData.get('username');
//       alert('Login successful! Welcome back, ' + username);
//       window.location.href = 'index.html';
//     });
//   }
  
//   // Customer Signup Form Submit
//   if (customerSignupForm) {
//     customerSignupForm.addEventListener('submit', function(e) {
//       e.preventDefault();
//       var formData = new FormData(customerSignupForm);
//       var name = formData.get('fullname');
//       var email = formData.get('email');
//       alert('Welcome, ' + name + '! Your account has been created successfully. You can now login with ' + email);
//       customerSignupForm.reset();
//       customerLoginBtn.click();
//     });
//   }
  
//   // Customer Login Form Submit
//   if (customerLoginForm) {
//     customerLoginForm.addEventListener('submit', function(e) {
//       e.preventDefault();
//       var formData = new FormData(customerLoginForm);
//       var email = formData.get('email');
//       alert('Login successful! Welcome back, ' + email);
//       window.location.href = 'index.html';
//     });
//   }
  
//   console.log('Login page loaded successfully');
// });

// ===== TAB SWITCH =====
// const artistTab = document.getElementById("artistTab");
// const customerTab = document.getElementById("customerTab");
// const artistWrapper = document.getElementById("artistWrapper");
// const customerWrapper = document.getElementById("customerWrapper");

// artistTab.onclick = () => {
//   artistTab.classList.add("active");
//   customerTab.classList.remove("active");
//   artistWrapper.style.display = "block";
//   customerWrapper.style.display = "none";
// };

// customerTab.onclick = () => {
//   customerTab.classList.add("active");
//   artistTab.classList.remove("active");
//   customerWrapper.style.display = "block";
//   artistWrapper.style.display = "none";
// };

// // ===== CUSTOMER SIGNUP =====
// document.getElementById("customerSignupForm").addEventListener("submit", e => {
//   e.preventDefault();
//   const data = Object.fromEntries(new FormData(e.target));
//   data.role = "customer";
//   localStorage.setItem("user", JSON.stringify(data));
//   alert("Customer account created");
//   window.location.href = "customer-dashboard.html";
// });

// // ===== CUSTOMER LOGIN =====
// document.getElementById("customerLoginForm").addEventListener("submit", e => {
//   e.preventDefault();
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (user && user.role === "customer") {
//     window.location.href = "customer-dashboard.html";
//   } else {
//     alert("Invalid customer login");
//   }
// });

// // ===== ARTIST SIGNUP =====
// document.getElementById("artistSignupForm").addEventListener("submit", e => {
//   e.preventDefault();
//   const data = Object.fromEntries(new FormData(e.target));
//   data.role = "artist";
//   localStorage.setItem("artist", JSON.stringify(data));
//   alert("Artist application submitted");
// });

// // ===== ARTIST LOGIN =====
// document.getElementById("artistLoginForm").addEventListener("submit", e => {
//   e.preventDefault();
//   const artist = JSON.parse(localStorage.getItem("artist"));
//   if (artist) {
//     window.location.href = "artist-dashboard.html";
//   } else {
//     alert("Artist not approved yet");
//   }
// });






// ===================================
// BIHARISTORE.IN - LOGIN SYSTEM
// Dual Authentication: Artist & Customer
// WORKING VERSION WITH PROPER REDIRECT
// ===================================

console.log('🔐 Login system loading...');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ DOM loaded, initializing login system');
  
  // Check if already logged in
  checkExistingLogin();
  
  // Initialize all event listeners
  initializeTabs();
  initializeArtistAuth();
  initializeCustomerAuth();
});

// ===================================
// CHECK EXISTING LOGIN
// ===================================
function checkExistingLogin() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const userType = localStorage.getItem('userType');
  
  console.log('Checking existing login:', { isLoggedIn, userType });
  
  if (isLoggedIn === 'true') {
    if (userType === 'artist') {
      console.log('Already logged in as artist, redirecting...');
      window.location.href = 'artist-dashboard.html';
    } else if (userType === 'customer') {
      console.log('Already logged in as customer, redirecting...');
      window.location.href = 'customer-dashboard.html';
    }
  }
}

// ===================================
// TAB SWITCHING (Artist / Customer)
// ===================================
function initializeTabs() {
  const artistTab = document.getElementById('artistTab');
  const customerTab = document.getElementById('customerTab');
  const artistWrapper = document.getElementById('artistWrapper');
  const customerWrapper = document.getElementById('customerWrapper');
  
  if (!artistTab || !customerTab) {
    console.error('❌ Tab buttons not found');
    return;
  }
  
  artistTab.addEventListener('click', () => {
    console.log('Switching to Artist tab');
    artistTab.classList.add('active');
    customerTab.classList.remove('active');
    artistWrapper.style.display = 'block';
    customerWrapper.style.display = 'none';
  });
  
  customerTab.addEventListener('click', () => {
    console.log('Switching to Customer tab');
    customerTab.classList.add('active');
    artistTab.classList.remove('active');
    customerWrapper.style.display = 'block';
    artistWrapper.style.display = 'none';
  });
}

// ===================================
// ARTIST AUTHENTICATION
// ===================================
function initializeArtistAuth() {
  // Toggle buttons
  const artistSignupBtn = document.getElementById('artistSignupBtn');
  const artistLoginBtn = document.getElementById('artistLoginBtn');
  const artistSignupContainer = document.getElementById('artistSignupContainer');
  const artistLoginContainer = document.getElementById('artistLoginContainer');
  
  if (!artistSignupBtn || !artistLoginBtn) {
    console.error('❌ Artist toggle buttons not found');
    return;
  }
  
  // Signup button click
  artistSignupBtn.addEventListener('click', () => {
    console.log('Showing artist signup form');
    artistSignupBtn.classList.add('active');
    artistLoginBtn.classList.remove('active');
    artistSignupContainer.style.display = 'block';
    artistLoginContainer.style.display = 'none';
  });
  
  // Login button click
  artistLoginBtn.addEventListener('click', () => {
    console.log('Showing artist login form');
    artistLoginBtn.classList.add('active');
    artistSignupBtn.classList.remove('active');
    artistLoginContainer.style.display = 'block';
    artistSignupContainer.style.display = 'none';
  });
  
  // Signup form submission
  const artistSignupForm = document.getElementById('artistSignupForm');
  if (artistSignupForm) {
    artistSignupForm.addEventListener('submit', handleArtistSignup);
  }
  
  // Login form submission
  const artistLoginForm = document.getElementById('artistLoginForm');
  if (artistLoginForm) {
    artistLoginForm.addEventListener('submit', handleArtistLogin);
  }
}

// Handle Artist Signup
function handleArtistSignup(e) {
  e.preventDefault();
  console.log('Artist signup form submitted');
  
  const formData = new FormData(e.target);
  const artistData = {
    fullname: formData.get('fullname'),
    age: formData.get('age'),
    experience: formData.get('experience'),
    village: formData.get('village'),
    paintings: formData.get('paintings'),
    paintingType: formData.get('paintingType'),
    products: formData.get('products'),
    productType: formData.get('productType'),
    clothes: formData.get('clothes'),
    clothesType: formData.get('clothesType'),
    about: formData.get('about'),
    userType: 'artist',
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  // Save to localStorage
  let artists = JSON.parse(localStorage.getItem('artistApplications')) || [];
  artists.push(artistData);
  localStorage.setItem('artistApplications', JSON.stringify(artists));
  
  alert('✅ Application submitted successfully!\n\nOur team will review your application and contact you within 2-3 business days.\n\nThank you for your interest in joining BihariStore.in!');
  
  e.target.reset();
}

// Handle Artist Login
function handleArtistLogin(e) {
  e.preventDefault();
  console.log('Artist login form submitted');
  
  const form = e.target;
  const username = form.username.value.trim();
  const password = form.password.value.trim();
  
  console.log('Login attempt:', { username, password });
  
  // Demo credentials check
  if (username === 'artist' && password === 'artist123') {
    console.log('✅ Demo credentials matched!');
    
    const demoArtist = {
      username: 'artist',
      fullname: 'Demo Artist',
      userType: 'artist',
      approved: true,
      age: 30,
      experience: 5,
      village: 'Madhubani',
      about: 'Folk artist from Bihar'
    };
    
    // Store data
    localStorage.setItem('currentUser', JSON.stringify(demoArtist));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', 'artist');
    
    console.log('✅ Data saved to localStorage');
    console.log('Redirecting to artist-dashboard.html...');
    
    // Immediate redirect
    window.location.href = 'artist-dashboard.html';
    return;
  }
  
  // Check against stored artists
  let approvedArtists = JSON.parse(localStorage.getItem('approvedArtists')) || [];
  const artist = approvedArtists.find(a => a.username === username && a.password === password);
  
  if (artist) {
    console.log('✅ Artist found in database');
    
    localStorage.setItem('currentUser', JSON.stringify(artist));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', 'artist');
    
    window.location.href = 'artist-dashboard.html';
  } else {
    console.log('❌ Invalid credentials');
    alert('❌ Invalid credentials!\n\nDemo Login:\nUsername: artist\nPassword: artist123');
  }
}

// ===================================
// CUSTOMER AUTHENTICATION
// ===================================
function initializeCustomerAuth() {
  // Toggle buttons
  const customerSignupBtn = document.getElementById('customerSignupBtn');
  const customerLoginBtn = document.getElementById('customerLoginBtn');
  const customerSignupContainer = document.getElementById('customerSignupContainer');
  const customerLoginContainer = document.getElementById('customerLoginContainer');
  
  if (!customerSignupBtn || !customerLoginBtn) {
    console.error('❌ Customer toggle buttons not found');
    return;
  }
  
  // Signup button click
  customerSignupBtn.addEventListener('click', () => {
    console.log('Showing customer signup form');
    customerSignupBtn.classList.add('active');
    customerLoginBtn.classList.remove('active');
    customerSignupContainer.style.display = 'block';
    customerLoginContainer.style.display = 'none';
  });
  
  // Login button click
  customerLoginBtn.addEventListener('click', () => {
    console.log('Showing customer login form');
    customerLoginBtn.classList.add('active');
    customerSignupBtn.classList.remove('active');
    customerLoginContainer.style.display = 'block';
    customerSignupContainer.style.display = 'none';
  });
  
  // Signup form submission
  const customerSignupForm = document.getElementById('customerSignupForm');
  if (customerSignupForm) {
    customerSignupForm.addEventListener('submit', handleCustomerSignup);
  }
  
  // Login form submission
  const customerLoginForm = document.getElementById('customerLoginForm');
  if (customerLoginForm) {
    customerLoginForm.addEventListener('submit', handleCustomerLogin);
  }
}

// Handle Customer Signup
function handleCustomerSignup(e) {
  e.preventDefault();
  console.log('Customer signup form submitted');
  
  const formData = new FormData(e.target);
  const customerData = {
    fullname: formData.get('fullname'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    password: formData.get('password'),
    interest: formData.get('interest'),
    city: formData.get('city'),
    state: formData.get('state'),
    country: formData.get('country'),
    userType: 'customer',
    approved: true,
    createdAt: new Date().toISOString()
  };
  
  // Check existing email
  let customers = JSON.parse(localStorage.getItem('customers')) || [];
  const existingCustomer = customers.find(c => c.email === customerData.email);
  
  if (existingCustomer) {
    alert('❌ Email already registered!\n\nPlease login or use a different email.');
    return;
  }
  
  // Save customer
  customers.push(customerData);
  localStorage.setItem('customers', JSON.stringify(customers));
  
  alert('✅ Account created successfully!\n\nYou can now login with your email and password.');
  
  // Switch to login
  document.getElementById('customerLoginBtn').click();
  e.target.reset();
}

// Handle Customer Login
function handleCustomerLogin(e) {
  e.preventDefault();
  console.log('Customer login form submitted');
  
  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  
  console.log('Login attempt:', { email, password });
  
  // Demo credentials check
  if (email === 'customer@test.com' && password === 'customer123') {
    console.log('✅ Demo credentials matched!');
    
    const demoCustomer = {
      email: 'customer@test.com',
      fullname: 'Demo Customer',
      userType: 'customer',
      approved: true,
      city: 'Patna',
      state: 'Bihar',
      country: 'India'
    };
    
    // Store data
    localStorage.setItem('currentUser', JSON.stringify(demoCustomer));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', 'customer');
    
    console.log('✅ Data saved to localStorage');
    console.log('Redirecting to customer-dashboard.html...');
    
    // Immediate redirect
    window.location.href = 'customer-dashboard.html';
    return;
  }
  
  // Check against stored customers
  let customers = JSON.parse(localStorage.getItem('customers')) || [];
  const customer = customers.find(c => c.email === email && c.password === password);
  
  if (customer) {
    console.log('✅ Customer found in database');
    
    localStorage.setItem('currentUser', JSON.stringify(customer));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', 'customer');
    
    window.location.href = 'customer-dashboard.html';
  } else {
    console.log('❌ Invalid credentials');
    alert('❌ Invalid credentials!\n\nDemo Login:\nEmail: customer@test.com\nPassword: customer123');
  }
}

console.log('✅ Login.js loaded successfully');
