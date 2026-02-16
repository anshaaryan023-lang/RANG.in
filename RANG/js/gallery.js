// Gallery Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  const searchBox = document.getElementById('searchBox');
  const categoryFilter = document.getElementById('categoryFilter');
  const galleryGrid = document.getElementById('galleryGrid');
  const noResults = document.getElementById('noResults');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Search and Filter Function
  function filterGallery() {
    const searchTerm = searchBox.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    let visibleCount = 0;
    
    galleryItems.forEach(item => {
      const title = item.querySelector('h3').textContent.toLowerCase();
      const artist = item.querySelector('.artist-name').textContent.toLowerCase();
      const category = item.getAttribute('data-category');
      
      const matchesSearch = title.includes(searchTerm) || artist.includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
      
      if (matchesSearch && matchesCategory) {
        item.style.display = 'block';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });
    
    if (visibleCount === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }
  
  // Event Listeners
  if (searchBox) {
    searchBox.addEventListener('input', filterGallery);
  }
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterGallery);
  }
  
  // View Details Buttons
  const viewButtons = document.querySelectorAll('.btn-view');
  viewButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.gallery-item');
      const title = item.querySelector('h3').textContent;
      alert('Product: ' + title);
    });
  });
  
  // Lazy Load Images
  const images = document.querySelectorAll('.gallery-image img');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s';
        setTimeout(() => {
          img.style.opacity = '1';
        }, 100);
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
  
  console.log('Gallery loaded: ' + galleryItems.length + ' items');
});