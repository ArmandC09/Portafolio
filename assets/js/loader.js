/* =========================================
   ArmandC Portfolio — Loader Script
   Terminal boot sequence animation
   ========================================= */

(function () {
  'use strict';

  // Detect saved theme early so the loader matches
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // ── Sequence lines ──────────────────────────
  // Each entry: { type: 'cmd'|'out', text, delay (ms after prev), class? }
  const LINES = [
    { type: 'cmd',  text: 'boot --system portfolio.sh',  delay: 0   },
    { type: 'out',  text: 'Initializing environment...', delay: 280, cls: '' },
    { type: 'out',  text: '[OK] Node.js runtime loaded',  delay: 220, cls: 'accent' },
    { type: 'out',  text: '[OK] React modules bundled',   delay: 180, cls: 'accent' },
    { type: 'cmd',  text: 'load --assets --cache',        delay: 260 },
    { type: 'out',  text: 'Fetching CSS · JS · fonts...', delay: 200 },
    { type: 'out',  text: '[OK] Assets loaded successfully', delay: 300, cls: 'accent' },
    { type: 'cmd',  text: 'launch armandc.portfolio',     delay: 280 },
    { type: 'out',  text: '→ Welcome, visitor ✓',         delay: 220, cls: 'warn' },
  ];

  const TOTAL_DURATION = 2200; // ms — total loader lifetime

  // ── Build DOM ──────────────────────────────
  const loader = document.createElement('div');
  loader.id = 'page-loader';

  loader.innerHTML = `
    <div class="loader-terminal">
      <div class="loader-logo">&gt; ArmandC <span>_</span></div>
      <div class="loader-window">
        <div class="loader-header">
          <div class="loader-dot red"></div>
          <div class="loader-dot yellow"></div>
          <div class="loader-dot green"></div>
          <span class="loader-title">armandc ~ boot</span>
        </div>
        <div class="loader-body" id="loader-body">
          <div class="loader-progress-wrap" id="loader-progress-wrap">
            <div class="loader-progress-label">
              <span>LOADING</span>
              <span id="loader-pct">0%</span>
            </div>
            <div class="loader-progress-track">
              <div class="loader-progress-fill" id="loader-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertBefore(loader, document.body.firstChild);

  const body       = document.getElementById('loader-body');
  const fillEl     = document.getElementById('loader-fill');
  const pctEl      = document.getElementById('loader-pct');
  const progressWrap = document.getElementById('loader-progress-wrap');

  // Move progress wrap to bottom (will be re-appended after lines)
  body.removeChild(progressWrap);

  // ── Animate lines ──────────────────────────
  let elapsed = 0;
  let lineIndex = 0;

  function addLine(entry) {
    const div = document.createElement('div');
    div.className = 'loader-line' + (entry.cls ? ' loader-output ' + entry.cls : entry.type === 'out' ? ' loader-output' : '');

    if (entry.type === 'cmd') {
      div.innerHTML = `<span class="loader-prompt">$</span><span class="loader-cmd">${entry.text}</span>`;
    } else {
      div.textContent = entry.text;
    }

    body.appendChild(div);
    // Trigger transition
    requestAnimationFrame(() => requestAnimationFrame(() => div.classList.add('visible')));
  }

  function scheduleLines() {
    LINES.forEach((entry) => {
      elapsed += entry.delay;
      setTimeout(() => addLine(entry), elapsed);
    });

    // Show progress bar after lines start
    setTimeout(() => {
      body.appendChild(progressWrap);
      requestAnimationFrame(() => requestAnimationFrame(() => progressWrap.classList.add('visible')));
      animateProgress();
    }, elapsed + 100);
  }

  function animateProgress() {
    const start = performance.now();
    const duration = TOTAL_DURATION - elapsed - 150;

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      // Ease: fast start, slow end
      const eased = 1 - Math.pow(1 - t, 2.5);
      const pct = Math.round(eased * 100);
      fillEl.style.width = pct + '%';
      pctEl.textContent  = pct + '%';
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function dismissLoader() {
    loader.classList.add('hidden');
    setTimeout(() => {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 600);
  }

  // ── Start ──────────────────────────────────
  scheduleLines();
  setTimeout(dismissLoader, TOTAL_DURATION);

  // Also dismiss once DOM + resources are ready (in case page loads faster)
  window.addEventListener('load', () => {
    const remaining = TOTAL_DURATION - performance.now();
    if (remaining > 0) {
      setTimeout(dismissLoader, Math.max(remaining, 400));
    }
  });
})();
