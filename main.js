/* ============================================
   SANOVA UMWELTTECHNIK – JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Active nav link ──────────────────────────
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // ── Mobile nav toggle ─────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ── Cookie Banner ─────────────────────────────
  const banner = document.getElementById('cookieBanner');
  if (banner) {
    const accepted = localStorage.getItem('sanova_cookies');
    if (!accepted) {
      setTimeout(() => banner.classList.add('show'), 800);
    }
    document.getElementById('cookieAccept')?.addEventListener('click', () => {
      localStorage.setItem('sanova_cookies', 'accepted');
      banner.classList.remove('show');
    });
    document.getElementById('cookieDecline')?.addEventListener('click', () => {
      localStorage.setItem('sanova_cookies', 'declined');
      banner.classList.remove('show');
    });
  }

  // ── Kontaktformular mit Formspree ─────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const successMsg = document.getElementById('formSuccess');
      const errorMsg   = document.getElementById('formError');

      // Validierung
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      btn.textContent = 'Wird gesendet…';
      btn.disabled = true;
      if (errorMsg) errorMsg.style.display = 'none';

      try {
        const data = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          if (successMsg) successMsg.style.display = 'block';
          form.reset();
          successMsg?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          throw new Error('Server-Fehler');
        }
      } catch (err) {
        if (errorMsg) errorMsg.style.display = 'block';
      } finally {
        btn.textContent = 'Nachricht senden';
        btn.disabled = false;
      }
    });
  }

  // ── Scroll-triggered fade-in ──────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .leistung-card, .schadstoff-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

});
