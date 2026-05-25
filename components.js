/* ============================================
   SANOVA – Shared Components (Nav + Footer + Cookie)
   ============================================ */

const NAV_HTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-img-wrap">
        <img src="logo.png" alt="Sanova Umwelttechnik Logo" class="nav-logo-img">
      </div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Start</a></li>
      <li><a href="leistungen.html">Leistungen</a></li>
      <li><a href="info.html">Info</a></li>
      <li><a href="kontakt.html" class="nav-cta">Kontakt</a></li>
    </ul>
    <button class="nav-toggle" aria-label="Menü öffnen">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo-wrap">
        <img src="logo.png" alt="Sanova Umwelttechnik" class="footer-logo-img">
      </div>
      <p>Ihr zertifizierter Partner für professionelle Schadstoffsanierung. Sicherheit, Qualität und gesetzeskonforme Lösungen aus einer Hand.</p>
    </div>
    <div>
      <h4>Navigation</h4>
      <ul class="footer-links">
        <li><a href="index.html">Start</a></li>
        <li><a href="leistungen.html">Leistungen</a></li>
        <li><a href="info.html">Info & Schadstoffe</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
      </ul>
    </div>
    <div>
      <h4>Rechtliches</h4>
      <ul class="footer-links">
        <li><a href="impressum.html">Impressum</a></li>
        <li><a href="datenschutz.html">Datenschutz</a></li>
        <li><a href="cookies.html">Cookie-Richtlinie</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Sanova Umwelttechnik · Gunther Schmidt · Reinheim</p>
    <div class="footer-bottom-links">
      <a href="impressum.html">Impressum</a>
      <a href="datenschutz.html">Datenschutz</a>
      <a href="cookies.html">Cookies</a>
    </div>
  </div>
</footer>`;

const COOKIE_BANNER_HTML = `
<div class="cookie-banner" id="cookieBanner">
  <div class="cookie-inner">
    <div class="cookie-text">
      <p>Wir verwenden ausschließlich technisch notwendige Cookies, um den Betrieb dieser Website zu gewährleisten. Es werden keine Tracking- oder Analyse-Cookies eingesetzt. Mehr dazu in unserer <a href="cookies.html">Cookie-Richtlinie</a> und <a href="datenschutz.html">Datenschutzerklärung</a>.</p>
    </div>
    <div class="cookie-actions">
      <button class="btn-cookie-accept" id="cookieAccept">Akzeptieren</button>
      <button class="btn-cookie-decline" id="cookieDecline">Ablehnen</button>
    </div>
  </div>
</div>`;

// Inject shared components
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  const cookiePlaceholder = document.getElementById('cookie-placeholder');
  if (cookiePlaceholder) cookiePlaceholder.outerHTML = COOKIE_BANNER_HTML;
});
