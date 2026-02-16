// ========================================
// BIHARISTORE.IN - MAIN JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('active');
          menuToggle.textContent = '☰';
        }
      });
    });
  }
  
  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  
  // ===== NEWSLETTER FORM =====
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input').value;
      alert('Thank you for subscribing! We will send updates to: ' + email);
      this.reset();
    });
  }
  
  // ===== CLOSE MOBILE MENU ON RESIZE =====
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navLinks) {
      navLinks.classList.remove('active');
      if (menuToggle) menuToggle.textContent = '☰';
    }
  });
  
  // ===== SCROLL TO TOP BUTTON =====
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #991b1e;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    transition: all 0.3s;
  `;
  
  document.body.appendChild(scrollBtn);
  
  window.addEventListener('scroll', function() {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  console.log('🎨 BihariStore.in loaded successfully!');
});