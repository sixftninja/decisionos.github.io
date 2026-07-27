/* ── NAV ──────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

if (hamburger && navMobile) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMobile.classList.toggle('open');
  });

  // Close on link click
  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });
}

/* ── SCROLL REVEAL ────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach(el => observer.observe(el));
}

/* ── CONTACT FORM ─────────────────────────────────────── */
const form = document.getElementById('contact-form');

if (form) {
  const statusEl = document.getElementById('form-status');
  const submitBtn = form.querySelector('.form-submit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const endpoint = form.dataset.endpoint;

    if (!endpoint || endpoint === 'CONFIGURE') {
      statusEl.className = 'form-status error';
      statusEl.textContent = 'Contact form is not yet configured. Please email anand@decisionos.dev directly.';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    statusEl.className = 'form-status';
    statusEl.textContent = '';

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        statusEl.className = 'form-status success';
        statusEl.textContent = 'Message sent. We\'ll be in touch.';
        submitBtn.textContent = 'Send message';
      } else {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Submission failed');
      }
    } catch (err) {
      statusEl.className = 'form-status error';
      statusEl.textContent = 'Something went wrong. Please email anand@decisionos.dev directly.';
      submitBtn.textContent = 'Send message';
    } finally {
      submitBtn.disabled = false;
    }
  });
}
