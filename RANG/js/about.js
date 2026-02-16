document.addEventListener('DOMContentLoaded', function() {
  
  var featureBoxes = document.querySelectorAll('.feature-box');
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(30px)';
          entry.target.style.transition = 'all 0.6s ease';
          
          setTimeout(function() {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 50);
        }, index * 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  featureBoxes.forEach(function(box) {
    observer.observe(box);
  });
  
  console.log('About page loaded');
});
