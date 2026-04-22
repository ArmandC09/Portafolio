/* =========================================
   ArmandC — index.js
   Particles · Typing · Counters
   ========================================= */

// ── PARTICLE CANVAS ──────────────────────────
(function() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((W * H) / 14000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1
      });
    }
  }

  function getAccentColor() {
    const theme = document.documentElement.getAttribute('data-theme');
    return theme === 'light' ? '0, 154, 82' : '0, 255, 136';
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const color = getAccentColor();

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color}, ${0.08 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', () => { resize(); createParticles(); });
})();

// ── TYPING EFFECT ────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const lang = localStorage.getItem('armandc-lang') || 'es';
  const texts_es = [
    'Ingeniero de Software',
    'Desarrollador Full-Stack',
    'Entusiasta de la IA',
    'Constructor de soluciones'
  ];
  const texts_en = [
    'Software Engineer',
    'Full-Stack Developer',
    'AI Enthusiast',
    'Solution Builder'
  ];

  typeText(el, lang === 'es' ? texts_es : texts_en, 80);

  // Re-run on language toggle
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    setTimeout(() => {
      const l = localStorage.getItem('armandc-lang') || 'es';
      el.textContent = '';
      typeText(el, l === 'es' ? texts_es : texts_en, 80);
    }, 50);
  });
});

// ── COUNTER ANIMATION ────────────────────────
function animateCounter(el, target, duration = 1800) {
  const special = el.dataset.special;
  if (special) { el.textContent = '∞'; return; }

  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + (target >= 100 ? '+' : '');
  };
  requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
  const nums = document.querySelectorAll('.stat-num[data-count]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count);
        animateCounter(el, target);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(n => io.observe(n));
});
