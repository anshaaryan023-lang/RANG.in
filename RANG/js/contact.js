document.addEventListener('DOMContentLoaded', function() {
  
  var contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value;
      
      if (name && email && subject && message) {
        alert('Thank you, ' + name + '! Your message has been sent successfully. We will get back to you soon at ' + email);
        contactForm.reset();
      } else {
        alert('Please fill all fields');
      }
    });
  }
  
  var contactCards = document.querySelectorAll('.contact-card');
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'scale(0.9)';
          entry.target.style.transition = 'all 0.5s ease';
          
          setTimeout(function() {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
          }, 50);
        }, index * 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  contactCards.forEach(function(card) {
    observer.observe(card);
  });
  
  console.log('Contact page loaded');
});
