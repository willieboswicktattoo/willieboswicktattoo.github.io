async function loadGallery() {
  const res = await fetch('images/gallery.json');
  const data = await res.json();

  const all = [
    ...data.tattoos.map(src => ({ src, category: 'tattoos' })),
    ...data.flash.map(src => ({ src, category: 'flash' })),
  ];

  const grid = document.querySelector('.gallery-grid');

  function render(filter) {
    const filtered = filter === 'all' ? all : all.filter(img => img.category === filter);
    grid.innerHTML = filtered.map(img => `
      <div class="gallery-card">
        <img src="${img.src}" alt="${img.category}" loading="lazy"/>
      </div>
    `).join('');
  }

  render('all');

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.textContent.toLowerCase().trim();
      render(filter === 'all' ? 'all' : filter);
    });
  });
}

loadGallery();