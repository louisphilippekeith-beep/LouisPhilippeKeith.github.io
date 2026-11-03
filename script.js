(() => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.project-card');
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    cards.forEach(card => { card.hidden = category !== 'all' && !card.dataset.categories.split(' ').includes(category); });
  }));
  const modal = document.querySelector('.lightbox');
  const modalImage = modal.querySelector('img');
  const modalCaption = modal.querySelector('p');
  let previousFocus;
  const close = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); modalImage.src = ''; document.body.style.overflow=''; previousFocus?.focus(); };
  document.querySelectorAll('[data-image]').forEach(el => el.addEventListener('click', () => { previousFocus = el; modalImage.src = el.dataset.image; modalImage.alt = el.dataset.caption || ''; modalCaption.textContent = el.dataset.caption || ''; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; modal.querySelector('.close').focus(); }));
  modal.querySelector('.close').addEventListener('click',close);
  modal.addEventListener('click',e=>{if(e.target===modal) close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && modal.classList.contains('open'))close();});
})();
