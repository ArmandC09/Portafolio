/* =========================================
   ArmandC Portfolio — Core JS
   config · translations · theme · lang · utils
   ========================================= */

// ── CONFIG ──────────────────────────────────
const CONFIG = {
  name: "Diego Armando Canavire Mamani",
  alias: "ArmandC",
  role_es: "Ingeniero de Software & IA",
  role_en: "Software Engineer & AI Developer",
  email: "diegoarmandoc09@gmail.com",
  github: "https://github.com/ArmandC09",
  whatsapp: "51999999999", // Reemplazar con número real
  linkedin: "https://linkedin.com/in/armandoc",
  location_es: "Lima, Perú",
  location_en: "Lima, Peru",
  cv_file: "assets/files/CV_ArmandC.pdf",
  year: new Date().getFullYear(),
};

// ── TRANSLATIONS ────────────────────────────
const T = {
  es: {
    // NAV
    nav_home: "Inicio",
    nav_about: "Sobre Mí",
    nav_projects: "Proyectos",
    nav_cv: "Currículum",
    nav_contact: "Contacto",

    // INDEX
    hero_greeting: "Hola, soy",
    hero_sub: "Estudiante de Ingeniería de Software",
    hero_focus: "Enfocado en Inteligencia Artificial",
    hero_desc: "Construyo sistemas inteligentes y aplicaciones web que resuelven problemas reales. Apasionado por la tecnología, la innovación y el código limpio.",
    hero_cta_primary: "Ver Proyectos",
    hero_cta_secondary: "Sobre Mí",
    hero_status: "Disponible para oportunidades",
    stats_projects: "Proyectos",
    stats_tech: "Tecnologías",
    stats_commits: "Commits",
    stats_coffee: "Cafés",
    featured_title: "Proyectos Destacados",
    featured_label: "PORTFOLIO",
    featured_cta: "Ver todos los proyectos →",
    skills_label: "HABILIDADES",
    skills_title: "Stack Tecnológico",
    skills_desc: "Tecnologías con las que construyo soluciones modernas.",

    // ABOUT
    about_label: "SOBRE MÍ",
    about_title: "Quién soy",
    about_p1: "Soy Diego Armando Canavire Mamani, estudiante de Ingeniería de Software en Lima, Perú. Me especializo en el desarrollo de aplicaciones web full-stack con un enfoque especial en Inteligencia Artificial y Machine Learning.",
    about_p2: "Mi objetivo es diseñar soluciones tecnológicas elegantes que tengan un impacto real. Creo firmemente en el código limpio, la arquitectura sólida y la experiencia de usuario excepcional.",
    about_p3: "Fuera del código, me apasiona explorar nuevas tecnologías, contribuir a proyectos open source y seguir aprendiendo constantemente.",
    about_education_label: "EDUCACIÓN",
    about_edu_deg: "Ingeniería de Software",
    about_edu_focus: "Especialización: Inteligencia Artificial",
    about_edu_status: "En curso",
    about_interests_label: "INTERESES",
    about_values_label: "VALORES",
    about_val_1: "Código limpio y mantenible",
    about_val_2: "Innovación constante",
    about_val_3: "Impacto real con tecnología",
    about_val_4: "Aprendizaje continuo",
    about_terminal_title: "perfil.sh",
    timeline_label: "TRAYECTORIA",
    timeline_title: "Mi Camino",

    // PROJECTS
    proj_label: "PROYECTOS",
    proj_title: "Lo que construyo",
    proj_desc: "Una selección de proyectos que muestran mis capacidades técnicas y creatividad.",
    proj_all: "Todos",
    proj_web: "Web",
    proj_ai: "IA / ML",
    proj_mobile: "Móvil",
    proj_view_demo: "Demo",
    proj_view_code: "Código",
    proj_status_done: "Completado",
    proj_status_wip: "En Progreso",

    // CV
    cv_label: "CURRÍCULUM",
    cv_title: "Mi Perfil Profesional",
    cv_download: "Descargar PDF",
    cv_exp_label: "EXPERIENCIA",
    cv_edu_label: "EDUCACIÓN",
    cv_skills_label: "HABILIDADES TÉCNICAS",
    cv_lang_label: "IDIOMAS",
    cv_lang_es: "Español — Nativo",
    cv_lang_en: "Inglés — Intermedio/Avanzado",
    cv_print: "Imprimir",

    // CONTACT
    contact_label: "CONTACTO",
    contact_title: "Trabajemos juntos",
    contact_desc: "¿Tienes un proyecto, propuesta o simplemente quieres saludar? Estoy disponible para colaboraciones y oportunidades.",
    contact_email_label: "Email directo",
    contact_wa_label: "WhatsApp",
    contact_wa_cta: "Enviar mensaje",
    contact_github_label: "GitHub",
    contact_github_cta: "Ver perfil",
    contact_avail: "Disponible para proyectos freelance y posiciones full-time.",

    // FOOTER
    footer_made: "Hecho con",
    footer_by: "por ArmandC",
    footer_rights: "Todos los derechos reservados.",
  },

  en: {
    // NAV
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_cv: "Resume",
    nav_contact: "Contact",

    // INDEX
    hero_greeting: "Hi, I'm",
    hero_sub: "Software Engineering Student",
    hero_focus: "Focused on Artificial Intelligence",
    hero_desc: "I build intelligent systems and web applications that solve real problems. Passionate about technology, innovation, and clean code.",
    hero_cta_primary: "View Projects",
    hero_cta_secondary: "About Me",
    hero_status: "Open to opportunities",
    stats_projects: "Projects",
    stats_tech: "Technologies",
    stats_commits: "Commits",
    stats_coffee: "Coffees",
    featured_title: "Featured Projects",
    featured_label: "PORTFOLIO",
    featured_cta: "View all projects →",
    skills_label: "SKILLS",
    skills_title: "Tech Stack",
    skills_desc: "Technologies I use to build modern solutions.",

    // ABOUT
    about_label: "ABOUT ME",
    about_title: "Who I am",
    about_p1: "I'm Diego Armando Canavire Mamani, a Software Engineering student in Lima, Peru. I specialize in full-stack web development with a strong focus on Artificial Intelligence and Machine Learning.",
    about_p2: "My goal is to design elegant technological solutions that create real impact. I firmly believe in clean code, solid architecture, and exceptional user experience.",
    about_p3: "Beyond code, I'm passionate about exploring new technologies, contributing to open source projects, and continuous learning.",
    about_education_label: "EDUCATION",
    about_edu_deg: "Software Engineering",
    about_edu_focus: "Specialization: Artificial Intelligence",
    about_edu_status: "Ongoing",
    about_interests_label: "INTERESTS",
    about_values_label: "VALUES",
    about_val_1: "Clean, maintainable code",
    about_val_2: "Constant innovation",
    about_val_3: "Real impact through technology",
    about_val_4: "Continuous learning",
    about_terminal_title: "profile.sh",
    timeline_label: "TIMELINE",
    timeline_title: "My Journey",

    // PROJECTS
    proj_label: "PROJECTS",
    proj_title: "What I build",
    proj_desc: "A selection of projects showcasing my technical capabilities and creativity.",
    proj_all: "All",
    proj_web: "Web",
    proj_ai: "AI / ML",
    proj_mobile: "Mobile",
    proj_view_demo: "Demo",
    proj_view_code: "Code",
    proj_status_done: "Completed",
    proj_status_wip: "In Progress",

    // CV
    cv_label: "RESUME",
    cv_title: "My Professional Profile",
    cv_download: "Download PDF",
    cv_exp_label: "EXPERIENCE",
    cv_edu_label: "EDUCATION",
    cv_skills_label: "TECHNICAL SKILLS",
    cv_lang_label: "LANGUAGES",
    cv_lang_es: "Spanish — Native",
    cv_lang_en: "English — Intermediate/Advanced",
    cv_print: "Print",

    // CONTACT
    contact_label: "CONTACT",
    contact_title: "Let's work together",
    contact_desc: "Have a project, proposal, or just want to say hi? I'm available for collaborations and opportunities.",
    contact_email_label: "Direct email",
    contact_wa_label: "WhatsApp",
    contact_wa_cta: "Send message",
    contact_github_label: "GitHub",
    contact_github_cta: "View profile",
    contact_avail: "Available for freelance projects and full-time positions.",

    // FOOTER
    footer_made: "Made with",
    footer_by: "by ArmandC",
    footer_rights: "All rights reserved.",
  }
};

// ── THEME ────────────────────────────────────
const Theme = {
  key: 'armandc-theme',
  get() { return localStorage.getItem(this.key) || 'dark'; },
  set(t) {
    localStorage.setItem(this.key, t);
    document.documentElement.setAttribute('data-theme', t);
    this._updateBtn(t);
  },
  toggle() { this.set(this.get() === 'dark' ? 'light' : 'dark'); },
  init() {
    const t = this.get();
    document.documentElement.setAttribute('data-theme', t);
    this._updateBtn(t);
  },
  _updateBtn(t) {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = t === 'dark' ? '☀' : '☾';
  }
};

// ── LANGUAGE ─────────────────────────────────
const Lang = {
  key: 'armandc-lang',
  get() { return localStorage.getItem(this.key) || 'es'; },
  set(l) {
    localStorage.setItem(this.key, l);
    this._apply(l);
    this._updateBtn(l);
  },
  toggle() { this.set(this.get() === 'es' ? 'en' : 'es'); },
  init() {
    const l = this.get();
    this._apply(l);
    this._updateBtn(l);
  },
  t(key) { return T[this.get()][key] || key; },
  _apply(l) {
    document.querySelectorAll('[data-t]').forEach(el => {
      const k = el.getAttribute('data-t');
      if (T[l][k] !== undefined) el.textContent = T[l][k];
    });
    document.querySelectorAll('[data-t-placeholder]').forEach(el => {
      const k = el.getAttribute('data-t-placeholder');
      if (T[l][k] !== undefined) el.placeholder = T[l][k];
    });
    document.documentElement.lang = l;
  },
  _updateBtn(l) {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = l === 'es' ? 'EN' : 'ES';
  }
};

// ── NAV ──────────────────────────────────────
function initNav() {
  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === path);
  });

  // Hamburger
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobile-menu');
  if (ham && mob) {
    ham.addEventListener('click', () => mob.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!ham.contains(e.target) && !mob.contains(e.target)) mob.classList.remove('open');
    });
  }

  // Theme & Lang buttons
  document.getElementById('theme-toggle')?.addEventListener('click', () => Theme.toggle());
  document.getElementById('lang-toggle')?.addEventListener('click', () => Lang.toggle());
}

// ── SCROLL REVEAL ────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

// ── BACK TO TOP ──────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── SKILL BARS ───────────────────────────────
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.pct + '%';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => io.observe(b));
}

// ── TYPING EFFECT ────────────────────────────
function typeText(el, texts, speed = 80) {
  let ti = 0, ci = 0, deleting = false;
  function tick() {
    const cur = texts[ti];
    if (!deleting) {
      el.textContent = cur.slice(0, ci + 1);
      ci++;
      if (ci === cur.length) { deleting = true; setTimeout(tick, 2200); return; }
    } else {
      el.textContent = cur.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
    }
    setTimeout(tick, deleting ? speed / 2 : speed);
  }
  tick();
}

// ── PAGE INIT ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Lang.init();
  initNav();
  initReveal();
  initBackToTop();
  initSkillBars();

  // Page enter animation
  document.querySelector('.page-wrapper')?.classList.add('page-enter');
});
