/* =========================================
   ArmandC Portfolio — Components
   Injects shared Navbar + Footer
   ========================================= */

function buildNav() {
  return `
<nav class="navbar">
  <a href="index.html" class="nav-logo">
    <span class="accent">&gt;</span> ArmandC<span class="accent">_</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html"    data-t="nav_home">Inicio</a></li>
    <li><a href="about.html"   data-t="nav_about">Sobre Mí</a></li>
    <li><a href="projects.html"data-t="nav_projects">Proyectos</a></li>
    <li><a href="cv.html"      data-t="nav_cv">Currículum</a></li>
    <li><a href="contact.html" data-t="nav_contact">Contacto</a></li>
  </ul>
  <div class="nav-controls">
    <button class="btn-icon" id="lang-toggle" title="Toggle language">EN</button>
    <button class="btn-icon" id="theme-toggle" title="Toggle theme">☀</button>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <a href="index.html"    data-t="nav_home">Inicio</a>
  <a href="about.html"   data-t="nav_about">Sobre Mí</a>
  <a href="projects.html"data-t="nav_projects">Proyectos</a>
  <a href="cv.html"      data-t="nav_cv">Currículum</a>
  <a href="contact.html" data-t="nav_contact">Contacto</a>
</div>`;
}

function buildFooter() {
  const y = new Date().getFullYear();
  return `
<footer>
  <div class="container">
    <div class="foot-top">
      <span class="accent">&gt;</span> ArmandC<span class="accent">_</span>
    </div>
    <div class="foot-links">
      <a href="index.html"    data-t="nav_home">Inicio</a>
      <a href="about.html"   data-t="nav_about">Sobre Mí</a>
      <a href="projects.html"data-t="nav_projects">Proyectos</a>
      <a href="cv.html"      data-t="nav_cv">Currículum</a>
      <a href="contact.html" data-t="nav_contact">Contacto</a>
    </div>
    <p class="copy">
      <span data-t="footer_made">Hecho con</span> ♥ <span data-t="footer_by">por ArmandC</span> · © ${y} · <span data-t="footer_rights">Todos los derechos reservados.</span>
    </p>
  </div>
</footer>`;
}

function buildFloats() {
  return `
<button id="back-to-top" title="Volver arriba">↑</button>
<a id="whatsapp-float" href="https://wa.me/51999999999" target="_blank" rel="noopener" title="WhatsApp">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.572a.5.5 0 0 0 .638.606l5.93-1.9A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.012-1.375l-.36-.213-3.718 1.19 1.228-3.603-.232-.37A9.818 9.818 0 1 1 12 21.818z"/>
  </svg>
</a>`;
}

// Auto-inject when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const navSlot = document.getElementById('nav-slot');
  const footSlot = document.getElementById('footer-slot');
  const floatSlot = document.getElementById('float-slot');
  if (navSlot)   navSlot.innerHTML   = buildNav();
  if (footSlot)  footSlot.innerHTML  = buildFooter();
  if (floatSlot) floatSlot.innerHTML = buildFloats();
});
