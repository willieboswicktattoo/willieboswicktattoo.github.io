async function loadGallery() {
  const res = await fetch('images/gallery.json');
  const data = await res.json();

  const all = [
    ...data.tattoos.map(src => ({ src, category: 'tattoos' })),
    ...data.flash.map(src => ({ src, category: 'flash' })),
  ];

  const grid = document.querySelector('.gallery-grid');
  let currentImages = [];
  let currentIndex = 0;

  function render(filter) {
    currentImages = filter === 'all' ? all : all.filter(img => img.category === filter);
    grid.innerHTML = currentImages.map((img, i) => `
      <div class="gallery-card" onclick="openLightbox(${i})">
        <img src="${img.src}" alt="${img.category}" loading="lazy"/>
      </div>
    `).join('');
  }

  window.openLightbox = function(index) {
    currentIndex = index;
    showLightbox();
  };

  function showLightbox() {
    const img = currentImages[currentIndex];
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-counter').textContent = `${currentIndex + 1} / ${currentImages.length}`;
    document.getElementById('lightbox').style.display = 'flex';
  }

  window.closeLightbox = function() {
    document.getElementById('lightbox').style.display = 'none';
  };

  window.lightboxPrev = function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showLightbox();
  };

  window.lightboxNext = function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentImages.length;
    showLightbox();
  };

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (document.getElementById('lightbox').style.display !== 'flex') return;
    if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length; showLightbox(); }
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % currentImages.length; showLightbox(); }
    if (e.key === 'Escape') closeLightbox();
  });

  render('tattoos');

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      render(tab.dataset.filter);
    });
  });
}

loadGallery();