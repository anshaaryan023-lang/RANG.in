// Artists Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  const viewWorkButtons = document.querySelectorAll('.btn-view-work');
  
  viewWorkButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.artist-card');
      const artistName = card.querySelector('.artist-name').textContent;
      
      window.location.href = 'gallery.html?artist=' + encodeURIComponent(artistName);
    });
  });
  
  const artistCards = document.querySelectorAll('.artist-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          entry.target.style.transition = 'all 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  artistCards.forEach(card => observer.observe(card));
  
  console.log('Artists page loaded: ' + artistCards.length + ' artists');
});