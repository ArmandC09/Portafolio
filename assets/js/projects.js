/* =========================================
   ArmandC — projects.js
   Filter logic
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.proj-card');
  const empty = document.getElementById('empty-state');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visible = 0;

      cards.forEach(card => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !show);
        if (show) visible++;
      });

      if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
    });
  });
});
