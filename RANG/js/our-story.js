document.addEventListener('DOMContentLoaded', function() {
  
  var timelineItems = document.querySelectorAll('.timeline-item');
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateX(-30px)';
        
        setTimeout(function() {
          entry.target.style.transition = 'all 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  timelineItems.forEach(function(item) {
    observer.observe(item);
  });
  
  console.log('Our Story page loaded');
});
