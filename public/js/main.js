/* ================================================================
   BIGLEDGER — ANIMATION ENGINE
   Canvas particles · Custom cursor · Scroll reveals · 3D tilt
   Typewriter · Counter · Gradient borders
================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initLangPersist();
  initNoise();
  initCursor();
  initParticles();
  initSiteNetwork();
  initScrollReveal();
  initCardTilt();
  initStatsCounter();
  initTypewriter();
  initAppletMock();
  initWorkflowLibrary();
  initDocArticle();
  initMagneticButtons();
  initHeroWords();
  initMegaMenu();
  initMobileNav();
  initLangSwitch();
});

/* ── Language persistence ──────────────────────────────────────────
   Keep the chosen language sticky across navigation. For non-English
   sites, rewrite every same-origin link to its "/<lang>/..." version
   when that page exists in this language; otherwise leave the English
   URL as a graceful fallback. The set of localized URLs is emitted by
   baseof.html (#bl-lang-urls) — the exact same set the server uses.
   The language switcher itself is skipped (it must be able to leave
   the current language on purpose). */
function initLangPersist() {
  const KNOWN = ['en', 'zh', 'ms', 'ar'];
  const lang = window.__blLang;
  if (!lang || lang === 'en' || KNOWN.indexOf(lang) === -1) return;
  const urls = window.__blUrls;
  if (!urls || !urls.length) return;

  const set = Object.create(null);
  urls.forEach((u) => { set[u] = 1; });
  const prefix = '/' + lang;
  const langRe = new RegExp('^/(' + KNOWN.join('|') + ')(/|$)');
  const origin = window.location.origin;

  const rewrite = (a) => {
    if (a.hasAttribute('data-no-langify') || a.classList.contains('bl-lang-option')) return;
    const raw = a.getAttribute('href');
    if (!raw || raw.charAt(0) === '#') return;
    let u;
    try { u = new URL(a.href, window.location.href); } catch (e) { return; }
    if (u.origin !== origin) return;              // external / mailto / tel
    if (langRe.test(u.pathname)) return;          // already language-prefixed
    const cand = prefix + u.pathname;
    const candSlash = cand.charAt(cand.length - 1) === '/' ? cand : cand + '/';
    let target = null;
    if (set[candSlash]) target = candSlash;
    else if (set[cand]) target = cand;
    if (!target) return;                          // no translation → keep English
    a.setAttribute('href', target + u.search + u.hash);
  };

  document.querySelectorAll('a[href]').forEach(rewrite);

  // Re-apply to links added later (e.g. dynamically built menus).
  document.addEventListener('click', (e) => {
    const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (a) rewrite(a);
  }, true);
}

/* ── Language switcher: click to open, outside-click/Escape to close ── */
function initLangSwitch() {
  const wrap = document.querySelector('[data-lang-switch]');
  if (!wrap) return;
  const btn = wrap.querySelector('.bl-lang-btn');

  function close() {
    wrap.classList.remove('bl-lang-open');
    btn.setAttribute('aria-expanded', 'false');
  }
  function toggle(e) {
    e.stopPropagation();
    const isOpen = wrap.classList.toggle('bl-lang-open');
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  btn.addEventListener('click', toggle);
  document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ── Desktop mega-menu: hover (with close delay) + click toggle ── */
function initMegaMenu() {
  const item = document.querySelector('.bl-has-mega');
  if (!item) return;
  const trigger = item.querySelector('.bl-nav-link-btn');
  let closeTimer = null;

  function open() {
    clearTimeout(closeTimer);
    item.classList.add('bl-mega-open');
    trigger.setAttribute('aria-expanded', 'true');
  }
  function close() {
    item.classList.remove('bl-mega-open');
    trigger.setAttribute('aria-expanded', 'false');
  }
  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(close, 220);
  }

  const supportsHover = window.matchMedia('(hover: hover)').matches;

  item.addEventListener('mouseenter', open);
  item.addEventListener('mouseleave', scheduleClose);

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    // On hover-capable devices, `mouseenter` already opens the panel just
    // before this fires — toggling here would immediately re-close it.
    if (supportsHover) { open(); return; }
    item.classList.contains('bl-mega-open') ? close() : open();
  });

  document.addEventListener('click', (e) => {
    if (!item.contains(e.target)) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ── Mobile: hamburger drawer + Solutions accordion ─────────────── */
function initMobileNav() {
  const burger = document.querySelector('.bl-nav-burger');
  const drawer = document.querySelector('.bl-mobile-drawer');
  const backdrop = document.querySelector('.bl-mobile-drawer-backdrop');
  if (!burger || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    burger.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('bl-drawer-open');
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    burger.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('bl-drawer-open');
  }

  burger.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  const accordion = drawer.querySelector('.bl-mobile-accordion');
  const accTrigger = accordion && accordion.querySelector('.bl-mobile-accordion-trigger');
  if (accordion && accTrigger) {
    accTrigger.addEventListener('click', () => {
      const isOpen = accordion.classList.toggle('open');
      accTrigger.setAttribute('aria-expanded', String(isOpen));
    });
  }
}

/* ── Noise texture overlay ───────────────────────────────────── */
function initNoise() {
  const el = document.createElement('div');
  el.className = 'bl-noise-overlay';
  document.body.appendChild(el);
}

/* ── Custom cursor ───────────────────────────────────────────── */
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot    = document.createElement('div');
  const ring   = document.createElement('div');
  dot.className  = 'bl-cursor-dot';
  ring.className = 'bl-cursor-ring';
  document.body.append(dot, ring);
  document.body.classList.add('custom-cursor');

  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px)`;
  });

  (function animRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(animRing);
  })();

  const hoverEls = 'a, button, .bl-applet-card, .bl-tab, .bl-marq-item';
  document.querySelectorAll(hoverEls).forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
  });

  document.addEventListener('mousedown', () => dot.classList.add('click'));
  document.addEventListener('mouseup',   () => dot.classList.remove('click'));
}

/* ── Canvas particle system ──────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('bl-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); buildParticles(); });

  canvas.closest('.bl-hero')?.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  canvas.closest('.bl-hero')?.addEventListener('mouseleave', () => {
    mouse.x = -9999; mouse.y = -9999;
  });

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = -(Math.random() * 0.5 + 0.1);
      this.size   = Math.random() * 1.8 + 0.3;
      this.life   = Math.random() * 0.5 + 0.15;
      this.maxLife = this.life;
    }
    update() {
      // Mouse repulsion
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < 120) {
        this.vx += dx / d * 0.15;
        this.vy += dy / d * 0.15;
      }
      this.vx *= 0.99; this.vy *= 0.99;
      this.x += this.vx; this.y += this.vy;
      this.life -= 0.0008;
      if (this.life <= 0 || this.y < -20) this.reset();
    }
    draw() {
      const alpha = Math.min(this.life / this.maxLife * 2, 1) * 0.55;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    }
  }

  function buildParticles() {
    const count = Math.min(120, Math.floor((W * H) / 9000));
    particles = Array.from({ length: count }, () => new Particle());
  }
  buildParticles();

  // Connection lines between nearby particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 100) {
          const alpha = (1 - d/100) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(220,20,60,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  let animRunning = true;
  function animate() {
    if (!animRunning) return;
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
  }
  animate();

  // Pause when not visible
  document.addEventListener('visibilitychange', () => {
    animRunning = !document.hidden;
    if (animRunning) animate();
  });
}

/* ── Site-wide living network background ─────────────────────
   Runs behind every page (the hero keeps its own separate canvas
   untouched). Nodes drift, nearby ones connect, light pulses
   travel along a few links, and a soft mesh glow breathes behind
   it all. Color slowly lerps toward whichever [data-bg-theme]
   section is centered in the viewport, so the field subtly shifts
   per section while staying one continuous, calm field. Hovering
   anywhere gently pushes nearby nodes away, and they drift back. ── */
function initSiteNetwork() {
  const canvas = document.getElementById('bl-network-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W, H, nodes = [], pulses = [];
  const mouse = { x: -9999, y: -9999 };
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  const THEMES = {
    default:    { r: 220, g: 20,  b: 60,  density: 1.00, dist: 150 },
    platform:   { r: 220, g: 20,  b: 60,  density: 1.15, dist: 150 },
    ai:         { r: 129, g: 140, b: 248, density: 1.25, dist: 170 },
    dashboard:  { r: 56,  g: 189, b: 248, density: 1.05, dist: 150 },
    trust:      { r: 52,  g: 211, b: 153, density: 0.95, dist: 140 },
    industries: { r: 251, g: 191, b: 36,  density: 1.05, dist: 150 },
    ticker:     { r: 220, g: 20,  b: 60,  density: 0.80, dist: 130 },
    clients:    { r: 220, g: 20,  b: 60,  density: 0.90, dist: 140 },
    cta:        { r: 255, g: 31,  b: 71,  density: 1.20, dist: 160 }
  };
  let theme = { ...THEMES.default };
  let target = THEMES.default;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    buildNodes();
  }

  class Node {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      // constant slow drift — never damped, so motion never stalls
      this.bvx = (Math.random() - 0.5) * 0.18;
      this.bvy = (Math.random() - 0.5) * 0.18;
      // cursor-repulsion offset — pushed on hover, decays back to 0 (i.e. back to the base drift)
      this.rvx = 0;
      this.rvy = 0;
      this.size = Math.random() * 1.8 + 0.9;
      this.pulsePhase = Math.random() * Math.PI * 2;
    }
    update(t) {
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const distSq = dx * dx + dy * dy;
      const radius = 130;
      if (distSq < radius * radius) {
        const d = Math.sqrt(distSq) || 0.001;
        const force = (1 - d / radius) * 0.8;
        this.rvx += (dx / d) * force;
        this.rvy += (dy / d) * force;
      }
      this.rvx *= 0.93; this.rvy *= 0.93;

      this.x += this.bvx + this.rvx;
      this.y += this.bvy + this.rvy;
      if (this.x < -20) this.x = W + 20; if (this.x > W + 20) this.x = -20;
      if (this.y < -20) this.y = H + 20; if (this.y > H + 20) this.y = -20;
      this.glow = 0.5 + Math.sin(t * 0.0006 + this.pulsePhase) * 0.5;
    }
    draw() {
      const a = 0.55 + this.glow * 0.4;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240,240,235,${a})`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = `rgba(${theme.r},${theme.g},${theme.b},0.6)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function buildNodes() {
    const base = Math.min(110, Math.floor((W * H) / 10000));
    const count = Math.max(30, Math.round(base * theme.density));
    nodes = Array.from({ length: count }, () => new Node());
  }

  function drawMesh(t, scrollY) {
    const drift = (scrollY % 2000) / 2000;
    const spots = [
      { x: 0.18 + Math.sin(t * 0.00004) * 0.08, y: 0.15 + drift * 0.1, r: 0.55 },
      { x: 0.82 - Math.cos(t * 0.00005) * 0.08, y: 0.55 + drift * 0.08, r: 0.5 },
      { x: 0.5  + Math.sin(t * 0.00003) * 0.1,  y: 0.9  - drift * 0.06, r: 0.6 }
    ];
    spots.forEach(s => {
      const cx = s.x * W, cy = s.y * H, r = s.r * Math.max(W, H) * 0.6;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, `rgba(${theme.r},${theme.g},${theme.b},0.16)`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    });
  }

  function connect() {
    const maxDist = theme.dist;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < maxDist) {
          const a = (1 - d / maxDist) * 0.4;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${theme.r},${theme.g},${theme.b},${a})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
          if (Math.random() < 0.0006 && pulses.length < 5) {
            pulses.push({ a: nodes[i], b: nodes[j], p: 0 });
          }
        }
      }
    }
  }

  function drawPulses() {
    pulses.forEach(pl => {
      pl.p += 0.014;
      const x = pl.a.x + (pl.b.x - pl.a.x) * pl.p;
      const y = pl.a.y + (pl.b.y - pl.a.y) * pl.p;
      const fade = Math.sin(Math.min(pl.p, 1) * Math.PI);
      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${theme.r + 20},${theme.g + 60},${theme.b + 40},${fade * 0.9})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${theme.r},${theme.g},${theme.b},0.8)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    pulses = pulses.filter(pl => pl.p < 1);
  }

  function lerpTheme() {
    theme.r += (target.r - theme.r) * 0.006;
    theme.g += (target.g - theme.g) * 0.006;
    theme.b += (target.b - theme.b) * 0.006;
    theme.dist += (target.dist - theme.dist) * 0.006;
  }

  resize();
  window.addEventListener('resize', resize);

  const sections = document.querySelectorAll('[data-bg-theme]');
  if (sections.length) {
    const themeIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target = THEMES[entry.target.dataset.bgTheme] || THEMES.default;
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(el => themeIO.observe(el));
  }

  if (reduceMotion) {
    connect();
    nodes.forEach(n => n.draw());
    return;
  }

  let animRunning = true;
  function animate(t) {
    if (!animRunning) return;
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, W, H);
    lerpTheme();
    const scrollY = window.scrollY || 0;
    drawMesh(t || 0, scrollY);
    nodes.forEach(n => { n.update(t || 0); n.draw(); });
    connect();
    drawPulses();
  }
  requestAnimationFrame(animate);

  document.addEventListener('visibilitychange', () => {
    animRunning = !document.hidden;
    if (animRunning) requestAnimationFrame(animate);
  });
}

/* ── Scroll reveal ───────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }

  /* Stagger. Authored data-delay values repeat per row (0/60/120, 0/60/120…),
     which makes a 9-card grid arrive in three clumps instead of a cascade.
     Where three or more siblings animate together, derive the delay from the
     element's position in that group so the whole grid ripples once. */
  const groups = new Map();
  els.forEach(el => {
    const parent = el.parentElement;
    if (!parent) return;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });
  groups.forEach(group => {
    if (group.length < 3) return;
    group.forEach((el, i) => { el.dataset.delay = Math.min(i * 65, 480); });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.style.transitionDelay = (parseInt(el.dataset.delay, 10) || 0) + 'ms';
        el.classList.add('revealed');
      } else if (entry.boundingClientRect.top > 0) {
        /* Left the viewport downwards — i.e. we scrolled back up past it.
           Reset so it fades in again on the way down. Elements that scroll
           off the TOP stay visible; re-hiding those would be disorienting. */
        el.style.transitionDelay = '0ms';
        el.classList.remove('revealed');
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -60px 0px' });

  els.forEach(el => {
    el.classList.add('pre-reveal');
    io.observe(el);
  });
}

/* ── 3D card tilt ────────────────────────────────────────────── */
function initCardTilt() {
  document.querySelectorAll('.bl-applet-card').forEach(card => {
    let frame;
    card.addEventListener('mousemove', e => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r   = card.getBoundingClientRect();
        const cx  = r.left + r.width  / 2;
        const cy  = r.top  + r.height / 2;
        const rx  = ((e.clientY - cy) / (r.height / 2)) * -8;
        const ry  = ((e.clientX - cx) / (r.width  / 2)) *  8;
        card.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease';
        card.style.transform  = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(12px)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      cancelAnimationFrame(frame);
      card.style.transition = 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.6s ease';
      card.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}

/* ── Stats counter ───────────────────────────────────────────── */
function initStatsCounter() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el      = entry.target;
      const end     = parseFloat(el.dataset.count);
      const suffix  = el.dataset.suffix || '';
      const prefix  = el.dataset.prefix || '';
      const decimals= (el.dataset.count || '').includes('.') ? 1 : 0;
      const dur     = 2200;
      const t0      = performance.now();

      (function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 4);
        const v = e * end;
        el.textContent = prefix + (decimals ? v.toFixed(1) : Math.floor(v).toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + (decimals ? end.toFixed(1) : end.toLocaleString()) + suffix;
      })(t0);

      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
}

/* ── Command bar typewriter ──────────────────────────────────── */
function initTypewriter() {
  const el = document.querySelector('.bl-ak-search-text') || document.querySelector('.bl-cmd-text');
  if (!el) return;

  const phrases = [
    'Acme Technology Sdn Bhd',
    'Global Trading Co Bhd',
    'Tech Solutions Malaysia',
    'Retail Partners Bhd',
  ];

  let pi = 0, ci = 0, del = false;

  function tick() {
    const phrase = phrases[pi];
    if (del) {
      ci--;
      el.textContent = phrase.slice(0, ci);
      if (ci === 0) {
        del = false;
        pi  = (pi + 1) % phrases.length;
        setTimeout(tick, 350);
        return;
      }
      setTimeout(tick, 22);
    } else {
      ci++;
      el.textContent = phrase.slice(0, ci);
      if (ci === phrase.length) {
        del = true;
        setTimeout(tick, 2800);
        return;
      }
      setTimeout(tick, 48);
    }
  }
  setTimeout(tick, 1200);
}

/* ── Magnetic buttons ────────────────────────────────────────── */
function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.bl-btn-primary, .bl-btn-nav').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r  = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) * 0.25;
      const dy = (e.clientY - (r.top  + r.height / 2)) * 0.25;
      btn.style.transform = `translate(${dx}px,${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
    });
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'transform 0.1s ease';
    });
  });
}

/* ── Hero headline word-by-word reveal ───────────────────────── */
function initHeroWords() {
  const h1 = document.querySelector('.bl-hero-headline');
  if (!h1) return;

  // Already visible, just add class for CSS animation
  setTimeout(() => h1.classList.add('words-ready'), 100);
}


/* ── akaun applet mock: clickable sidebar screens + row details ── */
function initAppletMock() {
  const frame = document.querySelector('.bl-ak-frame');
  if (!frame) return;

  const head    = frame.querySelector('.bl-ak-page-head');
  const action  = frame.querySelector('.bl-ak-actionbar');
  const gridwrap= frame.querySelector('.bl-ak-gridwrap');
  const foot    = frame.querySelector('.bl-ak-foot');
  const toolbar = frame.querySelector('.bl-ak-toolbar');
  if (!head || !action || !gridwrap || !foot || !toolbar) return;

  const rowsEls  = frame.querySelectorAll('.bl-ak-rows');
  const rangeEls = frame.querySelectorAll('.bl-ak-range');

  // cache the server-rendered (translated) Posting Queue panel
  const cached = {
    title: head.textContent,
    action: action.innerHTML,
    grid: gridwrap.innerHTML,
    rows: rowsEls[0] ? rowsEls[0].textContent : 'Rows: 12',
    range: rangeEls[0] ? rangeEls[0].textContent : '1 – 12 of 12',
  };

  const P = (cls, t) => ({ p: cls, t: t });  // pill cell

  /* Fictional dataset shared by every screen */
  // [name, code, TIN, email domain]
  // Acme Technology Sdn Bhd  ACME01  C25254480010
  // Global Trading Co Bhd    GTC02   C23906350020
  // Tech Solutions Malaysia  TSM03   C11777309030
  // Retail Partners Bhd      RPB04   C29953140040
  // Sunrise Mart Sdn Bhd     SUN05   C19884520050
  // Delta Logistics Bhd      DLT06   C30112240060

  const SCREENS = {
    'master-list': {
      title: 'Master List', buttons: [['Export', 'ghost']],
      cols: ['E-Invoice Number', 'E-Invoice Date', 'Doc Short Code', 'Company Code', 'Entity Name', '#Amount', 'Status'],
      data: [
        ['1000958', '2026-01-31', 'SLSINV', 'ACME01', 'Acme Technology Sdn Bhd', '12,450.00', P('success', 'VALID')],
        ['1000957', '2026-01-30', 'SLSINV', 'GTC02', 'Global Trading Co Bhd', '8,280.00', P('success', 'VALID')],
        ['1000956', '2026-01-30', 'SLSCSH', 'TSM03', 'Tech Solutions Malaysia', '31,750.00', P('danger', 'INVALID')],
        ['1000955', '2026-01-29', 'SLSINV', 'RPB04', 'Retail Partners Bhd', '5,900.00', P('success', 'VALID')],
        ['1000954', '2026-01-29', 'SLSCRN', 'SUN05', 'Sunrise Mart Sdn Bhd', '2,140.00', P('warning', 'IN_QUEUE')],
        ['1000953', '2026-01-28', 'SLSINV', 'DLT06', 'Delta Logistics Bhd', '17,300.00', P('success', 'VALID')],
      ],
      rows: 6, range: '1 – 6 of 6',
    },
    'batch-pool': {
      title: 'Batch Pool', buttons: [['Submit', 'primary']], check: true,
      cols: ['Doc Version', 'Doc No.', 'Doc Short Code', 'Company Code', 'Entity Name', 'Document Date', '#Amount', 'Queue Status'],
      data: [
        ['1.1', 'INV-2026-0221', 'SLSINV', 'ACME01', 'Acme Technology Sdn Bhd', '2026-01-28', '9,120.00', P('warning', 'QUEUED')],
        ['1.1', 'INV-2026-0220', 'SLSINV', 'GTC02', 'Global Trading Co Bhd', '2026-01-28', '4,480.00', P('warning', 'QUEUED')],
        ['1.0', 'INV-2026-0219', 'SLSCSH', 'SUN05', 'Sunrise Mart Sdn Bhd', '2026-01-27', '1,260.00', P('success', 'PROCESSED')],
        ['1.1', 'INV-2026-0218', 'SLSINV', 'TSM03', 'Tech Solutions Malaysia', '2026-01-27', '22,875.00', P('success', 'PROCESSED')],
        ['1.0', 'INV-2026-0217', 'SLSRTN', 'DLT06', 'Delta Logistics Bhd', '2026-01-26', '760.00', P('warning', 'QUEUED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'individual-pool': {
      title: 'Individual Pool', buttons: [['Submit', 'primary']], check: true,
      cols: ['Doc Version', 'Doc No.', 'Doc Short Code', 'Company Code', 'Entity Name', 'Document Date', '#Amount', 'Queue Status'],
      data: [
        ['1.1', 'INV-2026-0216', 'SLSINV', 'RPB04', 'Retail Partners Bhd', '2026-01-26', '3,240.00', P('warning', 'QUEUED')],
        ['1.1', 'INV-2026-0215', 'SLSINV', 'ACME01', 'Acme Technology Sdn Bhd', '2026-01-25', '14,660.00', P('success', 'PROCESSED')],
        ['1.0', 'INV-2026-0214', 'SLSCRN', 'GTC02', 'Global Trading Co Bhd', '2026-01-25', '890.00', P('warning', 'QUEUED')],
        ['1.1', 'INV-2026-0213', 'SLSINV', 'SUN05', 'Sunrise Mart Sdn Bhd', '2026-01-24', '6,750.00', P('success', 'PROCESSED')],
        ['1.0', 'INV-2026-0212', 'SLSINV', 'TSM03', 'Tech Solutions Malaysia', '2026-01-24', '18,920.00', P('warning', 'QUEUED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'single-pool': {
      title: 'Single General Pool', buttons: [['Submit', 'primary']], check: true,
      cols: ['Doc Version', 'Doc No.', 'Doc Short Code', 'Company Code', 'Entity Name', 'Document Date', '#Amount', 'Queue Status'],
      data: [
        ['1.1', 'INV-2026-0211', 'SLSINV', 'DLT06', 'Delta Logistics Bhd', '2026-01-23', '7,420.00', P('warning', 'QUEUED')],
        ['1.0', 'INV-2026-0210', 'SLSCSH', 'SUN05', 'Sunrise Mart Sdn Bhd', '2026-01-23', '540.00', P('success', 'PROCESSED')],
        ['1.1', 'INV-2026-0209', 'SLSINV', 'GTC02', 'Global Trading Co Bhd', '2026-01-22', '11,080.00', P('warning', 'QUEUED')],
        ['1.1', 'INV-2026-0208', 'SLSINV', 'ACME01', 'Acme Technology Sdn Bhd', '2026-01-22', '25,300.00', P('success', 'PROCESSED')],
        ['1.0', 'INV-2026-0207', 'SLSRTN', 'RPB04', 'Retail Partners Bhd', '2026-01-21', '1,980.00', P('warning', 'QUEUED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'to-irb': {
      title: 'Internal Submission To IRB', buttons: [['Export', 'ghost']],
      tabs: ['Internal Submission To IRB Listing', 'Internal Submission To IRB Export'],
      tabData: [{
        refresh: true,
        cols: ['Report Name', 'Status', 'Error Message', 'Created Date', 'Updated Date', 'Action'],
        data: [
          ['EINVOICE_TO_IRB_EXPORT_2026-01-26.csv', P('success', 'DONE'), 'None', '2026-01-26', '2026-01-26', { b: 'Download' }],
          ['EINVOICE_TO_IRB_EXPORT_2026-01-19.csv', P('success', 'DONE'), 'None', '2026-01-19', '2026-01-19', { b: 'Download' }],
          ['EINVOICE_TO_IRB_EXPORT_2026-01-12.csv', P('success', 'DONE'), 'None', '2026-01-12', '2026-01-12', { b: 'Download' }],
          ['EINVOICE_TO_IRB_EXPORT_2026-01-05.csv', P('danger', 'FAILED'), 'Export timed out', '2026-01-05', '2026-01-05', { b: 'Retry' }],
          ['EINVOICE_TO_IRB_EXPORT_2025-12-29.csv', P('success', 'DONE'), 'None', '2025-12-29', '2025-12-29', { b: 'Download' }],
        ],
        rows: 5, range: '1 – 5 of 5',
      }],
      cols: ['E-Invoice Number', 'E-Invoice Date', 'Doc No. (Tenant)', 'Doc Short Code', 'Branch Code', 'Company Code', 'E-Invoice Status', 'Submission Type', 'Document Date'],
      data: [
        ['1000958', '2026-01-31', '1001945', 'SLSINV', 'ACME-HQ', 'ACME01', P('success', 'VALID'), 'INDIVIDUAL', '2026-01-31'],
        ['1000957', '2026-01-30', '1001918', 'SLSINV', 'GTC-KL', 'GTC02', P('success', 'VALID'), 'INDIVIDUAL', '2026-01-30'],
        ['1000956', '2026-01-30', '1001902', 'SLSCSH', 'TSM-PJ', 'TSM03', P('success', 'VALID'), 'CONSOLIDATED', '2026-01-30'],
        ['1000955', '2026-01-29', '1001884', 'SLSINV', 'RPB-JB', 'RPB04', P('danger', 'INVALID'), 'INDIVIDUAL', '2026-01-29'],
        ['1000954', '2026-01-29', '1001871', 'SLSCRN', 'SUN-PNG', 'SUN05', P('success', 'VALID'), 'CONSOLIDATED', '2026-01-29'],
        ['1000953', '2026-01-28', '1001860', 'SLSINV', 'DLT-HQ', 'DLT06', P('warning', 'IN_QUEUE'), 'INDIVIDUAL', '2026-01-28'],
      ],
      rows: 6, range: '1 – 6 of 6',
    },
    'individual-submission': {
      title: 'Internal Submission Queue Listing', buttons: [['Submit', 'primary']], check: true,
      cols: ['E-Invoice Number', 'E-Invoice Date', 'Doc No. (Tenant)', 'Doc Short Code', 'Branch Code', 'Doc No. (Branch)', 'Company Code', 'Document Transaction Date'],
      data: [
        ['1001027', '2026-01-26', '1001971', 'SLSINV', 'ACME-HQ', '1000418', 'ACME01', '2026-01-26'],
        ['1001026', '2026-01-26', '1001966', 'SLSINV', 'GTC-KL', '1000417', 'GTC02', '2026-01-26'],
        ['1001025', '2026-01-25', '1001948', 'SLSINV', 'TSM-PJ', '1000413', 'TSM03', '2026-01-25'],
        ['1001024', '2026-01-25', '1001947', 'SLSCRN', 'RPB-JB', '1000412', 'RPB04', '2026-01-25'],
        ['1001023', '2026-01-24', '1001946', 'SLSINV', 'SUN-PNG', '1000411', 'SUN05', '2026-01-24'],
        ['1001022', '2026-01-24', '1001945', 'PURINV', 'DLT-HQ', '1000410', 'DLT06', '2026-01-24'],
      ],
      rows: 6, range: '1 – 6 of 6',
    },
    'consolidated': {
      title: 'Consolidated Submission Queue Listing', buttons: [['Submit', 'primary']], check: true,
      cols: ['E-Invoice No.', 'E-Invoice Date', 'Doc Short Code', 'Company Code', 'Submission Status', 'Entity Name', 'Document Date', '#Amount'],
      data: [
        ['1000963', '2026-01-31', 'SLSCSH', 'SUN05', P('info', 'SUBMITTED'), 'General Public', '2026-01-31', '7,974.70'],
        ['1000970', '2026-01-31', 'SLSCSH', 'RPB04', P('info', 'SUBMITTED'), 'General Public', '2026-01-31', '854.00'],
        ['1001001', '2026-01-31', 'SLSCSH', 'ACME01', P('warning', 'NOT_SUBMITTED'), 'General Public', '2026-01-31', '1,120.00'],
        ['1001002', '2026-01-30', 'SLSRTN', 'GTC02', P('warning', 'NOT_SUBMITTED'), 'General Public', '2026-01-30', '200.00'],
        ['1001003', '2026-01-30', 'SLSINV', 'TSM03', P('warning', 'NOT_SUBMITTED'), 'General Public', '2026-01-30', '79,890.00'],
        ['1001000', '2026-01-29', 'SLSINV', 'DLT06', P('info', 'SUBMITTED'), 'General Public', '2026-01-29', '3,655.90'],
      ],
      rows: 6, range: '1 – 6 of 6',
    },
    'validation-queue': {
      title: 'Validation Queue Listing', buttons: [['Submit', 'primary']], check: true,
      cols: ['E-Invoice Number', 'E-Invoice Date', 'Doc No. (Tenant)', 'Doc Short Code', 'Branch Code', 'Doc No. (Branch)', 'Company Code', 'Document Trans. Date', 'Billing Frequency'],
      data: [
        ['1001014', '2026-01-21 05:25', '1001909', 'SLSINV', 'ACME-HQ', '1000402', 'ACME01', '2026-01-21', 'Not Applicable'],
        ['1001016', '2026-01-21 06:50', '1001920', 'SLSINV', 'GTC-KL', '1000404', 'GTC02', '2026-01-21', 'Not Applicable'],
        ['1000935', '2026-01-20 07:53', '1000096', 'SLSCRN', 'TSM-PJ', '1000009', 'TSM03', '2026-01-20', 'Not Applicable'],
        ['1000996', '2026-01-20 16:00', '1000770', 'SLSINV', 'SUN-PNG', '1000038', 'SUN05', '2026-01-20', 'Monthly'],
        ['1001007', '2026-01-19 10:37', '1000771', 'PURINV', 'RPB-JB', '1000039', 'RPB04', '2026-01-19', 'Not Applicable'],
        ['1000924', '2026-01-19 03:04', '1001821', 'SLSINV', 'DLT-HQ', '1000380', 'DLT06', '2026-01-19', 'Monthly'],
      ],
      rows: 6, range: '1 – 6 of 6',
    },
    'portal-request': {
      title: 'Portal Request Hdr Listing', buttons: [['Export', 'ghost']],
      cols: ['Doc Short Code', 'Doc No 1', 'Doc No 2', 'Doc No 3', '#Amount', 'Currency', 'User Response', 'Status', 'Created Date', 'Updated Date'],
      data: [
        ['SLSINV', '1001149', '1000108', '1000108', '90.00', 'MYR', P('success', 'SUCCESS'), 'ACTIVE', '2026-01-17', '2026-01-17'],
        ['SLSINV', '1001374', '1000201', '1000199', '500.00', 'MYR', P('success', 'SUCCESS'), 'ACTIVE', '2026-01-15', '2026-01-16'],
        ['SLSINV', '1001382', '1000407', '1000361', '4.25', 'MYR', P('success', 'SUCCESS'), 'ACTIVE', '2026-01-14', '2026-01-14'],
        ['SLSRTN', '1000176', '1000083', '1000068', '1.70', 'MYR', P('success', 'SUCCESS'), 'ACTIVE', '2026-01-12', '2026-01-12'],
        ['SLSRTN', '1000177', '1000084', '1000069', '2.55', 'MYR', P('warning', 'PENDING'), 'ACTIVE', '2026-01-10', '2026-01-11'],
        ['SLSINV', '1001383', '1000408', '1000362', '1,000.00', 'MYR', P('success', 'SUCCESS'), 'ACTIVE', '2026-01-09', '2026-01-09'],
      ],
      rows: 6, range: '1 – 6 of 6',
    },
    'submission-history': {
      title: 'Internal Submission History', buttons: [['Export', 'ghost']],
      tabs: ['Internal Submission History Listing', 'Internal Submission History Export'],
      tabData: [{
        refresh: true,
        cols: ['Report Name', 'Status', 'Error Message', 'Created Date', 'Updated Date', 'Action'],
        data: [
          ['EINVOICE_SUBMISSION_HISTORY_EXPORT_2026-01-28.csv', P('success', 'DONE'), 'None', '2026-01-28', '2026-01-28', { b: 'Download' }],
          ['EINVOICE_SUBMISSION_HISTORY_EXPORT_2026-01-14.csv', P('success', 'DONE'), 'None', '2026-01-14', '2026-01-14', { b: 'Download' }],
          ['EINVOICE_SUBMISSION_HISTORY_EXPORT_2026-01-02.csv', P('success', 'DONE'), 'None', '2026-01-02', '2026-01-02', { b: 'Download' }],
        ],
        rows: 3, range: '1 – 3 of 3',
      }],
      cols: ['E-Invoice Number', 'E-Invoice Date', 'Doc No. (Tenant)', 'Doc Short Code', 'Branch Code', 'Doc No. (Branch)', 'Company Code', 'Document Transaction Date', 'Billing Frequency'],
      data: [
        ['1000958', '2026-01-31', '1001945', 'SLSINV', 'ACME-HQ', '1000410', 'ACME01', '2026-01-31', 'Not Applicable'],
        ['1000952', '2026-01-28', '1001918', 'SLSINV', 'GTC-KL', '1000403', 'GTC02', '2026-01-28', 'Not Applicable'],
        ['1000949', '2026-01-27', '1001983', 'SLSCSH', 'TSM-PJ', '1000002', 'TSM03', '2026-01-27', 'Monthly'],
        ['1000944', '2026-01-25', '1001988', 'SLSINV', 'RPB-JB', '1000428', 'RPB04', '2026-01-25', 'Not Applicable'],
        ['1000940', '2026-01-23', '1001974', 'SLSCRN', 'SUN-PNG', '1000421', 'SUN05', '2026-01-23', 'Monthly'],
        ['1000936', '2026-01-21', '1001960', 'SLSINV', 'DLT-HQ', '1000415', 'DLT06', '2026-01-21', 'Not Applicable'],
      ],
      rows: 6, range: '1 – 6 of 6',
    },
    'email-dashboard': {
      title: 'Email Dashboard', buttons: [['Export', 'ghost']],
      tabs: ['Email Printable Queue', 'Email Printable Queue History'],
      tabData: [{
        refresh: true,
        cols: ['Receiver Email', 'Title', 'Buyer Name', 'E-Invoice Running No', 'Email Status', 'Sent Date'],
        data: [
          ['billing@acmetech.my', 'E-Invoice 1000365', 'Acme Technology Sdn Bhd', '1000365', P('success', 'SENT'), '2026-01-24'],
          ['accounts@gtc.com.my', 'E-Invoice 1000364', 'Global Trading Co Bhd', '1000364', P('success', 'SENT'), '2026-01-23'],
          ['finance@techsol.my', 'E-Invoice 1000363', 'Tech Solutions Malaysia', '1000363', P('danger', 'FAILED'), '2026-01-22'],
          ['ap@retailpartners.my', 'E-Invoice 1000362', 'Retail Partners Bhd', '1000362', P('success', 'SENT'), '2026-01-21'],
          ['ops@deltalogistics.my', 'E-Invoice 1000361', 'Delta Logistics Bhd', '1000361', P('success', 'SENT'), '2026-01-20'],
        ],
        rows: 5, range: '1 – 5 of 5',
      }],
      cols: ['Receiver Email', 'Title', 'Buyer Name', 'E-Invoice Running No', 'Doc Reference', 'Server Doc 1', 'Client Doc 5', 'Process Status', 'Email Status'],
      data: [
        ['billing@acmetech.my', 'E-Invoice 1000371', 'Acme Technology Sdn Bhd', '1000371', 'INV-2026-0221', '1001945', 'C-88101', P('success', 'PROCESSED'), P('success', 'SENT')],
        ['accounts@gtc.com.my', 'E-Invoice 1000372', 'Global Trading Co Bhd', '1000372', 'INV-2026-0220', '1001918', 'C-88102', P('warning', 'IN_QUEUE'), P('warning', 'PENDING')],
        ['finance@techsol.my', 'E-Invoice 1000373', 'Tech Solutions Malaysia', '1000373', 'INV-2026-0219', '1001902', 'C-88103', P('success', 'PROCESSED'), P('success', 'SENT')],
        ['ap@retailpartners.my', 'E-Invoice 1000374', 'Retail Partners Bhd', '1000374', 'INV-2026-0218', '1001884', 'C-88104', P('warning', 'IN_QUEUE'), P('danger', 'FAILED')],
        ['admin@sunrisemart.my', 'E-Invoice 1000375', 'Sunrise Mart Sdn Bhd', '1000375', 'INV-2026-0217', '1001871', 'C-88105', P('success', 'PROCESSED'), P('success', 'SENT')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'ext-queue': {
      title: 'External Submission Queue Listing', buttons: [['Export', 'ghost']],
      cols: ['Buyer Name', 'Buyer TIN', 'Supplier Name', 'Supplier TIN', 'Received Ref', 'Receiver Name', 'Issuer ID', 'Issuer TIN'],
      data: [
        ['Acme Technology Sdn Bhd', 'C25254480010', 'Delta Logistics Bhd', 'C30112240060', '201701014521', 'Acme Technology Sdn Bhd', '200301030871', 'C30112240060'],
        ['Global Trading Co Bhd', 'C23906350020', 'Sunrise Mart Sdn Bhd', 'C19884520050', '201301004918', 'Global Trading Co Bhd', '200301030872', 'C19884520050'],
        ['Tech Solutions Malaysia', 'C11777309030', 'Acme Technology Sdn Bhd', 'C25254480010', '201701014522', 'Tech Solutions Malaysia', '200301030873', 'C25254480010'],
        ['Retail Partners Bhd', 'C29953140040', 'Global Trading Co Bhd', 'C23906350020', '201701014523', 'Retail Partners Bhd', '200301030874', 'C23906350020'],
        ['Sunrise Mart Sdn Bhd', 'C19884520050', 'Tech Solutions Malaysia', 'C11777309030', '201301004919', 'Sunrise Mart Sdn Bhd', '200301030875', 'C11777309030'],
        ['Delta Logistics Bhd', 'C30112240060', 'Retail Partners Bhd', 'C29953140040', '201701014524', 'Delta Logistics Bhd', '200301030876', 'C29953140040'],
      ],
      rows: 6, range: '1 – 6 of 6',
      detail: {
        title: 'External Submission Queue Edit',
        buttons: [['Self Bill', 'ghost'], ['Export', 'primary']],
        tabs: [
          { name: 'Details', fields: [
            ['Buyer Name', '@Buyer Name'], ['Buyer TIN', '@Buyer TIN'],
            ['Supplier Name', '@Supplier Name'], ['Supplier TIN', '@Supplier TIN'],
            ['Received Ref', '@Received Ref'], ['Receiver Name', '@Receiver Name'],
            ['Issuer ID', '@Issuer ID'], ['Issuer TIN', '@Issuer TIN'],
            ['Document Type', 'INVOICE'], ['Submission Channel', 'PEPPOL'],
          ]},
          { name: 'Account', subtabs: [
            { name: 'Entity Details', fields: [
              ['Entity Id *', 'ENT-100234'], ['Entity Name', '@Buyer Name'],
              ['Entity TIN', '@Buyer TIN'], ['Entity Type', 'Company'],
              ['Identity type', 'BRN'], ['ID Number', '@Issuer ID'],
              ['SST Number', 'W10-1808-32100062'], ['Email', 'accounts@entity.com.my'],
              ['Contact Number', '+60 3-2141 8000'],
            ]},
            { name: 'Bill To', fields: [
              ['Name', '@Buyer Name'], ['Email', 'billing@entity.com.my'],
              ['Phone Number', '+60 3-2141 8000'],
              ['Billing Address', 'Level 12, Menara Aman'], ['Address Line 1', 'Jalan Tun Razak'],
              ['Address Line 2', 'Taman U-Thant'], ['Address Line 3', 'Wilayah Persekutuan'],
              ['Address Line 4', 'N/A'], ['Address Line 5', 'N/A'],
              ['Country', 'Malaysia'], ['State', 'Kuala Lumpur'],
              ['City', 'Kuala Lumpur'], ['Postcode', '50450'],
            ]},
            { name: 'Ship To', fields: [
              ['Name', '@Buyer Name'], ['Email', 'ops@entity.com.my'],
              ['Phone Number', '+60 3-2141 8001'],
              ['Shipping Address', 'Warehouse 3, Lot 88'], ['Address Line 1', 'Jalan Perindustrian 5'],
              ['Address Line 2', 'Kawasan Perindustrian Temasya'], ['Address Line 3', 'Seksyen U1'],
              ['Address Line 4', 'N/A'], ['Address Line 5', 'N/A'],
              ['Country', 'Malaysia'], ['State', 'Selangor'],
              ['City', 'Shah Alam'], ['Postcode', '40150'],
            ]},
          ]},
          { name: 'Lines', fields: [
            ['Line 1 – Description', 'Professional Services'], ['Line 1 – Quantity', '1'],
            ['Line 1 – Unit Price', '1,200.00'], ['Line 1 – Tax Code', 'SST-6%'],
            ['Line 2 – Description', 'Hardware Supply'], ['Line 2 – Quantity', '3'],
            ['Line 2 – Unit Price', '450.00'], ['Line 2 – Tax Code', 'SST-6%'],
            ['Subtotal (MYR)', '2,550.00'], ['Total incl. SST (MYR)', '2,703.00'],
          ]},
        ],
      },
    },
    'from-irb': {
      title: 'External Submission – From IRB Listing', buttons: [['Export', 'ghost']],
      cols: ['Buyer Name', 'Buyer ID', 'Buyer TIN', 'Supplier Name', 'Supplier TIN', 'E-Invoice No.', 'E-Invoice Date', 'E-Invoice Status'],
      data: [
        ['Acme Technology Sdn Bhd', '200301030871', 'C25254480010', 'Delta Logistics Bhd', 'C30112240060', 'EI-2026-4401', '2026-01-30', P('success', 'VALID')],
        ['Global Trading Co Bhd', '200301030872', 'C23906350020', 'Sunrise Mart Sdn Bhd', 'C19884520050', 'EI-2026-4402', '2026-01-29', P('success', 'VALID')],
        ['Tech Solutions Malaysia', '200301030873', 'C11777309030', 'Acme Technology Sdn Bhd', 'C25254480010', 'EI-2026-4403', '2026-01-28', P('warning', 'IN_QUEUE')],
        ['Retail Partners Bhd', '200301030874', 'C29953140040', 'Global Trading Co Bhd', 'C23906350020', 'EI-2026-4404', '2026-01-27', P('success', 'VALID')],
        ['Sunrise Mart Sdn Bhd', '200301030875', 'C19884520050', 'Tech Solutions Malaysia', 'C11777309030', 'EI-2026-4405', '2026-01-26', P('danger', 'INVALID')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'pd-matching': {
      title: 'Purchase Doc Matching Queue',
      buttons: [['Auto Match', 'primary'], ['Export', 'ghost'], ['Push to Unmatched History', 'danger']], check: true,
      cols: ['Doc Version', 'Doc No.', 'Doc Short Code', 'Company', 'Entity Name', 'Original Ref.', 'Document Date', '#Amount', 'Status'],
      data: [
        ['1.1', 'PUR-2026-0107', 'PURINV', 'ACME01', 'Delta Logistics Bhd', 'P100000891', '2026-01-15', '12,450.00', P('warning', 'UNPROCESSED')],
        ['1.1', 'PUR-2026-0106', 'PURINV', 'GTC02', 'Sunrise Mart Sdn Bhd', 'P100000103', '2026-01-14', '8,280.00', P('warning', 'UNPROCESSED')],
        ['1.0', 'PUR-2026-0105', 'PURCRN', 'TSM03', 'Acme Technology Sdn Bhd', 'P100000108', '2026-01-14', '1,750.00', P('warning', 'UNPROCESSED')],
        ['1.1', 'PUR-2026-0104', 'PURINV', 'RPB04', 'Global Trading Co Bhd', 'P100000302', '2026-01-13', '5,900.00', P('warning', 'UNPROCESSED')],
        ['1.0', 'PUR-2026-0103', 'PURINV', 'SUN05', 'Tech Solutions Malaysia', 'P100000894', '2026-01-13', '9,120.00', P('warning', 'UNPROCESSED')],
        ['1.1', 'PUR-2026-0102', 'PURINV', 'DLT06', 'Retail Partners Bhd', 'P100000700', '2026-01-12', '3,380.00', P('warning', 'UNPROCESSED')],
      ],
      rows: 6, range: '1 – 6 of 6',
    },
    'inc-einv-match': {
      title: 'Incoming E-Invoice Matching Queue', buttons: [['Auto Match', 'primary'], ['Export', 'ghost']], check: true,
      cols: ['E-Invoice No.', 'Supplier Name', 'Supplier TIN', 'Document Date', '#Amount', 'Status'],
      data: [
        ['EI-2026-4410', 'Delta Logistics Bhd', 'C30112240060', '2026-01-14', '854.00', P('warning', 'UNPROCESSED')],
        ['EI-2026-4409', 'Sunrise Mart Sdn Bhd', 'C19884520050', '2026-01-13', '200.00', P('warning', 'UNPROCESSED')],
        ['EI-2026-4408', 'Acme Technology Sdn Bhd', 'C25254480010', '2026-01-13', '4,410.00', P('warning', 'UNPROCESSED')],
        ['EI-2026-4407', 'Global Trading Co Bhd', 'C23906350020', '2026-01-12', '1,225.00', P('warning', 'UNPROCESSED')],
        ['EI-2026-4406', 'Tech Solutions Malaysia', 'C11777309030', '2026-01-12', '980.00', P('warning', 'UNPROCESSED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'matched-history': {
      title: 'Matched History', buttons: [['Export', 'ghost']],
      cols: ['Doc No.', 'Doc Short Code', 'Company', 'Entity Name', 'Document Date', '#Amount', 'Matched Date', 'Status'],
      data: [
        ['1001417', 'SLSINV', 'ACME01', 'Acme Technology Sdn Bhd', '2026-01-09', '5,000.00', '2026-01-09', P('success', 'MATCHED')],
        ['1001092', 'SLSINV', 'GTC02', 'Global Trading Co Bhd', '2026-01-09', '100.00', '2026-01-09', P('success', 'MATCHED')],
        ['1000859', 'SLSINV', 'TSM03', 'Tech Solutions Malaysia', '2026-01-08', '5,000.00', '2026-01-08', P('success', 'MATCHED')],
        ['1000753', 'PURINV', 'RPB04', 'Retail Partners Bhd', '2026-01-07', '2,340.00', '2026-01-07', P('success', 'MATCHED')],
        ['1000689', 'SLSCRN', 'SUN05', 'Sunrise Mart Sdn Bhd', '2026-01-06', '339.20', '2026-01-06', P('success', 'MATCHED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'inc-unmatch-hist': {
      title: 'Incoming Unmatched E-Invoice History', buttons: [['Export', 'ghost']],
      cols: ['E-Invoice No.', 'Supplier Name', 'Supplier TIN', 'Document Date', '#Amount', 'Status'],
      data: [
        ['EI-2026-4395', 'Delta Logistics Bhd', 'C30112240060', '2026-01-10', '412.00', P('danger', 'UNMATCHED')],
        ['EI-2026-4392', 'Sunrise Mart Sdn Bhd', 'C19884520050', '2026-01-08', '96.50', P('danger', 'UNMATCHED')],
        ['EI-2026-4388', 'Acme Technology Sdn Bhd', 'C25254480010', '2026-01-07', '1,180.00', P('danger', 'UNMATCHED')],
        ['EI-2026-4385', 'Tech Solutions Malaysia', 'C11777309030', '2026-01-06', '760.00', P('danger', 'UNMATCHED')],
        ['EI-2026-4381', 'Global Trading Co Bhd', 'C23906350020', '2026-01-05', '245.90', P('danger', 'UNMATCHED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'unmatched-pd-hist': {
      title: 'Unmatched Purchase Doc History', buttons: [['Export', 'ghost']],
      cols: ['Doc No.', 'Doc Short Code', 'Company', 'Entity Name', 'Document Date', '#Amount', 'Status'],
      data: [
        ['PUR-2026-0089', 'PURINV', 'ACME01', 'Retail Partners Bhd', '2026-01-10', '1,240.00', P('danger', 'UNMATCHED')],
        ['PUR-2026-0086', 'PURCRN', 'GTC02', 'Delta Logistics Bhd', '2026-01-09', '380.00', P('danger', 'UNMATCHED')],
        ['PUR-2026-0084', 'PURINV', 'TSM03', 'Sunrise Mart Sdn Bhd', '2026-01-08', '2,180.00', P('danger', 'UNMATCHED')],
        ['PUR-2026-0081', 'PURINV', 'SUN05', 'Acme Technology Sdn Bhd', '2026-01-07', '925.00', P('danger', 'UNMATCHED')],
        ['PUR-2026-0078', 'PURINV', 'DLT06', 'Global Trading Co Bhd', '2026-01-06', '4,470.00', P('danger', 'UNMATCHED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'sd-matching': {
      title: 'Sales Doc Matching Queue',
      buttons: [['Auto Match', 'primary'], ['Export', 'ghost'], ['Push to Unmatched History', 'danger']], check: true,
      cols: ['Doc Version', 'Doc No.', 'Doc Short Code', 'Company', 'Entity Name', 'Original Ref.', 'Document Date', '#Amount', 'Status'],
      data: [
        ['1.1', 'INV-2026-0198', 'SLSINV', 'ACME01', 'Acme Technology Sdn Bhd', 'S100000411', '2026-01-15', '6,420.00', P('warning', 'UNPROCESSED')],
        ['1.1', 'INV-2026-0197', 'SLSINV', 'GTC02', 'Global Trading Co Bhd', 'S100000410', '2026-01-14', '2,180.00', P('warning', 'UNPROCESSED')],
        ['1.0', 'INV-2026-0196', 'SLSCRN', 'TSM03', 'Tech Solutions Malaysia', 'S100000409', '2026-01-14', '890.00', P('warning', 'UNPROCESSED')],
        ['1.1', 'INV-2026-0195', 'SLSINV', 'RPB04', 'Retail Partners Bhd', 'S100000408', '2026-01-13', '12,760.00', P('warning', 'UNPROCESSED')],
        ['1.0', 'INV-2026-0194', 'SLSINV', 'SUN05', 'Sunrise Mart Sdn Bhd', 'S100000407', '2026-01-13', '445.00', P('warning', 'UNPROCESSED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'inc-ecom-match': {
      title: 'Incoming Ecommerce Matching Queue', buttons: [['Auto Match', 'primary'], ['Export', 'ghost']], check: true,
      cols: ['Order No.', 'Marketplace', 'Buyer Name', 'Document Date', '#Amount', 'Status'],
      data: [
        ['ECM-88031', 'Shopee', 'Acme Technology Sdn Bhd', '2026-01-12', '129.90', P('warning', 'UNPROCESSED')],
        ['ECM-88014', 'Lazada', 'Global Trading Co Bhd', '2026-01-11', '58.00', P('warning', 'UNPROCESSED')],
        ['ECM-88002', 'TikTok Shop', 'Sunrise Mart Sdn Bhd', '2026-01-11', '246.50', P('warning', 'UNPROCESSED')],
        ['ECM-87988', 'Shopee', 'Retail Partners Bhd', '2026-01-10', '89.90', P('warning', 'UNPROCESSED')],
        ['ECM-87971', 'Lazada', 'Tech Solutions Malaysia', '2026-01-10', '1,420.00', P('warning', 'UNPROCESSED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'inc-ecom-unmatch': {
      title: 'Incoming Ecommerce Unmatched History', buttons: [['Export', 'ghost']],
      cols: ['Order No.', 'Marketplace', 'Buyer Name', 'Document Date', '#Amount', 'Status'],
      data: [
        ['ECM-87961', 'Shopee', 'Delta Logistics Bhd', '2026-01-06', '75.40', P('danger', 'UNMATCHED')],
        ['ECM-87902', 'Lazada', 'Sunrise Mart Sdn Bhd', '2026-01-04', '210.00', P('danger', 'UNMATCHED')],
        ['ECM-87874', 'TikTok Shop', 'Acme Technology Sdn Bhd', '2026-01-03', '54.90', P('danger', 'UNMATCHED')],
        ['ECM-87851', 'Shopee', 'Global Trading Co Bhd', '2026-01-02', '188.00', P('danger', 'UNMATCHED')],
        ['ECM-87833', 'Lazada', 'Retail Partners Bhd', '2026-01-02', '96.50', P('danger', 'UNMATCHED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'sd-unmatch-hist': {
      title: 'Sales Doc Unmatched History', buttons: [['Export', 'ghost']],
      cols: ['Doc No.', 'Doc Short Code', 'Company', 'Entity Name', 'Document Date', '#Amount', 'Status'],
      data: [
        ['INV-2026-0181', 'SLSINV', 'ACME01', 'Acme Technology Sdn Bhd', '2026-01-05', '820.00', P('danger', 'UNMATCHED')],
        ['INV-2026-0176', 'SLSCSH', 'SUN05', 'Sunrise Mart Sdn Bhd', '2026-01-04', '64.90', P('danger', 'UNMATCHED')],
        ['INV-2026-0172', 'SLSINV', 'GTC02', 'Global Trading Co Bhd', '2026-01-03', '1,940.00', P('danger', 'UNMATCHED')],
        ['INV-2026-0169', 'SLSRTN', 'TSM03', 'Tech Solutions Malaysia', '2026-01-02', '310.00', P('danger', 'UNMATCHED')],
        ['INV-2026-0165', 'SLSINV', 'DLT06', 'Delta Logistics Bhd', '2026-01-02', '5,125.00', P('danger', 'UNMATCHED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'rejection-requests': {
      title: 'Rejection Requests', buttons: [['Process Request', 'primary']],
      cols: ['Doc Short Code', 'Doc No.', 'Currency', 'System Requestor Status', 'System Processing Status', 'System Approval Status', 'Request Submission Date', 'Transaction Date', '#Amount', 'Cancellation Status'],
      data: [
        ['SLSINV', '1001417', 'MYR', P('info', 'REQUESTED'), P('warning', 'IN-PROGRESS'), P('warning', 'PENDING'), '2026-01-09', '2026-01-09', '5,000.00', P('warning', 'PENDING')],
        ['SLSINV', '1001092', 'MYR', P('info', 'REQUESTED'), P('success', 'COMPLETED'), P('success', 'APPROVED'), '2026-01-08', '2026-01-06', '100.00', P('success', 'COMPLETED')],
        ['SLSINV', '1000859', 'MYR', P('info', 'REQUESTED'), P('success', 'COMPLETED'), P('success', 'APPROVED'), '2026-01-06', '2026-01-06', '5,000.00', P('danger', 'FAILED')],
        ['SLSCRN', '1000753', 'MYR', P('info', 'REQUESTED'), P('success', 'COMPLETED'), P('success', 'APPROVED'), '2026-01-05', '2026-01-05', '100.00', P('danger', 'FAILED')],
        ['SLSINV', '1000689', 'MYR', P('info', 'REQUESTED'), P('success', 'COMPLETED'), P('success', 'APPROVED'), '2026-01-03', '2026-01-02', '339.20', P('danger', 'CANCELLED')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'cancellation-queue': {
      title: 'Cancellation Queue', buttons: [['Process', 'primary']], check: true,
      cols: ['Doc Short Code', 'Server Doc No', 'Transaction Date', '#Amount', 'Currency', 'Processing Logic', 'Submission Status', 'Request Date', 'Created Date', 'Updated Date'],
      data: [
        ['SLSINV', '1000859', '2026-01-26', '5,000.00', 'MYR', 'VOID_ORIGINAL_DOC', P('danger', 'SUBMISSION_FAILED'), '2026-01-26', '2026-01-26', '2026-02-04'],
        ['SLSINV', '1000753', '2026-01-18', '100.00', 'MYR', 'VOID_ORIGINAL_DOC', P('danger', 'SUBMISSION_FAILED'), '2026-01-18', '2026-01-18', '2026-01-18'],
        ['SLSCRN', '1000740', '2026-01-15', '480.00', 'MYR', 'VOID_ORIGINAL_DOC', P('warning', 'IN_QUEUE'), '2026-01-15', '2026-01-15', '2026-01-16'],
        ['SLSINV', '1000722', '2026-01-12', '2,340.00', 'MYR', 'VOID_ORIGINAL_DOC', P('warning', 'IN_QUEUE'), '2026-01-12', '2026-01-12', '2026-01-12'],
        ['SLSINV', '1000698', '2026-01-08', '760.00', 'MYR', 'VOID_ORIGINAL_DOC', P('success', 'SUBMITTED'), '2026-01-08', '2026-01-08', '2026-01-09'],
      ],
      rows: 5, range: '1 – 5 of 5',
      detail: {
        title: 'View Cancellation Queue',
        buttons: [],
        tabs: [
          { name: 'Cancellation Queue Details', fields: [
            ['Server Doc Type *', 'INTERNAL_SALES_INVOICE'], ['Server Doc No *', '@Server Doc No'],
            ['Currency *', '@Currency'], ['Amount *', '@Amount'],
            ['Transaction Date *', '@Transaction Date'], ['Request Submission Status', '@Submission Status'],
            ['Processing Logic', '@Processing Logic'], ['Cancellation Request Date *', '@Request Date'],
            ['Request Error', 'Passed 72 hours from validation date time'], ['Request Response', 'Pending retry by scheduler'],
            ['Created Date', '@Created Date'], ['Modified Date', '@Updated Date'],
          ]},
        ],
      },
    },
    'discrepancies': {
      title: 'Monthly Report – Discrepancies Report', buttons: [['Generate Report', 'primary'], ['Export PDF', 'ghost']],
      cols: ['Company', 'Period', 'Source Docs', 'IRB Docs', 'Missing', '#Amount Diff', 'Status'],
      data: [
        ['Acme Technology Sdn Bhd', '2026-01', '412', '409', '3', '9,120.00', P('warning', 'OPEN')],
        ['Global Trading Co Bhd', '2026-01', '188', '188', '0', '0.00', P('success', 'RESOLVED')],
        ['Tech Solutions Malaysia', '2026-01', '96', '95', '1', '854.00', P('warning', 'OPEN')],
        ['Retail Partners Bhd', '2025-12', '240', '240', '0', '0.00', P('success', 'RESOLVED')],
        ['Sunrise Mart Sdn Bhd', '2025-12', '154', '152', '2', '1,260.00', P('warning', 'OPEN')],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
    'monthly-history': {
      title: 'Monthly Report – History', buttons: [['Generate Report', 'primary'], ['Export PDF', 'ghost']],
      cols: ['Company', 'Start Date', 'End Date', 'Created Date', 'Updated Date', 'Created By', 'Updated By'],
      data: [
        ['Acme Technology Sdn Bhd', '2026-01-01', '2026-01-31', '2026-02-01', '2026-02-01', 'Sabrina F.', 'Sabrina F.'],
        ['Global Trading Co Bhd', '2026-01-01', '2026-01-31', '2026-02-01', '2026-02-02', 'John Lim', 'John Lim'],
        ['Tech Solutions Malaysia', '2025-12-01', '2025-12-31', '2026-01-02', '2026-01-02', 'Aisha Rahman', 'Aisha Rahman'],
        ['Retail Partners Bhd', '2025-12-01', '2025-12-31', '2026-01-02', '2026-01-03', 'Daniel Tan', 'Daniel Tan'],
        ['Sunrise Mart Sdn Bhd', '2025-11-01', '2025-11-30', '2025-12-01', '2025-12-01', 'Mei Ling Chow', 'Mei Ling Chow'],
        ['Delta Logistics Bhd', '2025-11-01', '2025-11-30', '2025-12-01', '2025-12-02', 'Hafiz Osman', 'Hafiz Osman'],
      ],
      rows: 6, range: '1 – 6 of 6',
    },
    'bulk-tin': {
      title: 'File Import Listing', buttons: [['+', 'fab']],
      cols: ['File Name', 'File Size', 'Format', 'Status', 'Process Status', 'Error Message', 'Created Date'],
      data: [
        ['tin_batch_jan_a.csv', '24 KB', 'CSV', P('success', 'COMPLETED'), P('success', 'PROCESSED'), 'None', '2026-01-28'],
        ['tin_batch_jan_b.csv', '31 KB', 'CSV', P('success', 'COMPLETED'), P('success', 'PROCESSED'), 'None', '2026-01-27'],
        ['supplier_tins.xlsx', '58 KB', 'XLSX', P('warning', 'PROCESSING'), P('warning', 'IN_QUEUE'), 'None', '2026-01-27'],
        ['buyer_tins_dec.csv', '19 KB', 'CSV', P('danger', 'FAILED'), P('danger', 'ERROR'), 'Row 18: invalid TIN format', '2026-01-26'],
        ['tin_batch_dec.csv', '27 KB', 'CSV', P('success', 'COMPLETED'), P('success', 'PROCESSED'), 'None', '2026-01-25'],
      ],
      rows: 5, range: '1 – 5 of 5',
    },
  };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function cellHTML(c, col) {
    if (c && typeof c === 'object') {
      if (c.b) return '<button class="bl-ak-mini" type="button">' + esc(c.b) + '</button>';
      return '<span class="bl-status bl-status-' + c.p + '">' + esc(c.t) + '</span>';
    }
    var mono = /^[0-9]/.test(c) || /^(SLS|PUR|INV|ECM|EI-|MYR|C\d|P\d|S\d|20\d)/.test(c);
    var cls = [];
    if (mono) cls.push('bl-mono');
    if (col.num) cls.push('bl-ak-amount');
    return cls.length ? '<span class="' + cls.join(' ') + '">' + esc(c) + '</span>' : esc(c);
  }

  function render(id) {
    closeDetail();
    currentScreen = id;
    var scr = SCREENS[id];
    var tabsEl = frame.querySelector('.bl-ak-tabs');

    if (id === 'posting' || !scr) {
      head.textContent = cached.title;
      action.innerHTML = cached.action;
      gridwrap.innerHTML = cached.grid;
      rowsEls.forEach(function (el) { el.textContent = cached.rows; });
      rangeEls.forEach(function (el) { el.textContent = cached.range; });
      if (tabsEl) tabsEl.remove();
      return;
    }

    head.textContent = scr.title;

    action.innerHTML = scr.buttons.map(function (b) {
      var cls = b[1] === 'ghost' ? 'bl-ak-btn-ghost' : b[1] === 'danger' ? 'bl-ak-btn-danger' : b[1] === 'fab' ? 'bl-ak-fab' : 'bl-ak-submit';
      return '<button class="' + cls + '" type="button">' + esc(b[0]) + '</button>';
    }).join('');

    function showTab(i) {
      var cfg = i === 0 ? scr : (scr.tabData && scr.tabData[i - 1]) || scr;
      savedGrid = null;
      gridwrap.innerHTML = buildGridHTML(cfg);
      var rowsLabel = (cached.rows.split(' ')[0] || 'Rows:') + ' ' + cfg.rows;
      rowsEls.forEach(function (el) { el.textContent = rowsLabel; });
      rangeEls.forEach(function (el) { el.textContent = cfg.range; });
    }

    if (scr.tabs) {
      if (!tabsEl) {
        tabsEl = document.createElement('div');
        tabsEl.className = 'bl-ak-tabs';
        action.insertAdjacentElement('afterend', tabsEl);
      }
      tabsEl.innerHTML = '';
      scr.tabs.forEach(function (t, i) {
        var el = document.createElement('span');
        el.className = 'bl-ak-tab' + (i === 0 ? ' bl-ak-tab-active' : '');
        el.textContent = t;
        el.addEventListener('click', function () {
          tabsEl.querySelectorAll('.bl-ak-tab').forEach(function (o) { o.classList.remove('bl-ak-tab-active'); });
          el.classList.add('bl-ak-tab-active');
          showTab(i);
        });
        tabsEl.appendChild(el);
      });
    } else if (tabsEl) {
      tabsEl.remove();
    }

    showTab(0);
  }

  function buildGridHTML(cfg) {
    var cols = cfg.cols.map(function (c) {
      return { label: c.replace(/^#/, ''), num: c.charAt(0) === '#' };
    });

    var html = '';
    if (cfg.refresh) html += '<div class="bl-ak-refresh-row"><button class="bl-ak-submit" type="button">Refresh</button></div>';
    html += '<table class="bl-ak-grid"><thead><tr>';
    if (cfg.check) html += '<th class="bl-ak-checkcol"></th>';
    cols.forEach(function (c) {
      html += '<th' + (c.num ? ' class="bl-ak-amount"' : '') + '>' + esc(c.label) + '</th>';
    });
    html += '</tr><tr class="bl-ak-filterrow">';
    if (cfg.check) html += '<td></td>';
    cols.forEach(function () { html += '<td><span class="bl-ak-filter"></span></td>'; });
    html += '</tr></thead><tbody>';
    cfg.data.forEach(function (row) {
      html += '<tr>';
      if (cfg.check) html += '<td class="bl-ak-checkcol"><span class="bl-ak-checkbox"></span></td>';
      row.forEach(function (c, i) {
        var td = cols[i] && cols[i].num ? ' class="bl-ak-amount' + (typeof c === 'string' ? ' bl-mono' : '') + '"' : '';
        html += '<td' + td + '>' + cellHTML(c, cols[i] || {}) + '</td>';
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    return html;
  }

  /* ── Row click → detail panel (like the real "View …" screen) ── */
  var savedGrid = null;
  var currentScreen = 'posting';

  function closeDetail() {
    if (savedGrid !== null) {
      gridwrap.innerHTML = savedGrid;
      savedGrid = null;
    }
  }

  function rowMapFrom(table, tr) {
    var labels = [];
    table.querySelectorAll('thead tr:first-child th').forEach(function (th) {
      labels.push(th.textContent.trim());
    });
    var map = {}, list = [];
    var tds = tr.querySelectorAll('td');
    for (var i = 0; i < labels.length; i++) {
      var td = tds[i];
      if (!td || !labels[i]) continue;
      var pill = td.querySelector('.bl-status');
      var item = { label: labels[i], text: td.textContent.trim(), pill: pill ? pill.className : null };
      map[labels[i]] = item;
      list.push(item);
    }
    return { map: map, list: list };
  }

  function fieldHTML(label, v) {
    var val = v.pill ? '<span class="' + v.pill + '">' + esc(v.text) + '</span>' : esc(v.text);
    return '<div class="bl-ak-field"><div class="bl-ak-field-label">' + esc(label) +
           '</div><div class="bl-ak-field-value">' + val + '</div></div>';
  }

  function resolveField(vspec, row) {
    if (typeof vspec === 'string' && vspec.charAt(0) === '@') {
      return row.map[vspec.slice(1)] || { text: 'N/A', pill: null };
    }
    return { text: vspec, pill: null };
  }

  var BACK_BTN = '<button class="bl-ak-back" type="button" aria-label="Back">' +
    '<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l-6 6 6 6"/></svg></button>';

  function bindBack() {
    var bb = gridwrap.querySelector('.bl-ak-back');
    if (bb) bb.addEventListener('click', closeDetail);
  }

  function openDetail(table, tr) {
    var row = rowMapFrom(table, tr);
    var scr = SCREENS[currentScreen];
    savedGrid = gridwrap.innerHTML;
    if (scr && scr.detail) renderRichDetail(scr.detail, row);
    else renderSimpleDetail(row);
  }

  function renderSimpleDetail(row) {
    var fields = row.list.map(function (it) { return fieldHTML(it.label, it); }).join('');
    gridwrap.innerHTML =
      '<div class="bl-ak-detail">' +
        '<div class="bl-ak-detail-head">' + BACK_BTN +
          '<span class="bl-ak-detail-title">View ' + esc(head.textContent) + '</span>' +
        '</div>' +
        '<div class="bl-ak-detail-tab">' + esc(head.textContent) + ' Details</div>' +
        '<div class="bl-ak-fields">' + fields + '</div>' +
      '</div>';
    bindBack();
  }

  function renderRichDetail(det, row) {
    var state = { tab: 0, sub: 0 };
    function draw() {
      var t = det.tabs[state.tab];
      var btns = (det.buttons || []).map(function (b) {
        var cls = b[1] === 'ghost' ? 'bl-ak-btn-ghost' : 'bl-ak-submit';
        return '<button class="' + cls + '" type="button">' + esc(b[0]) + '</button>';
      }).join('');

      var html = '<div class="bl-ak-detail">' +
        '<div class="bl-ak-detail-head">' + BACK_BTN +
          '<span class="bl-ak-detail-title">' + esc(det.title) + '</span>' +
          '<span class="bl-ak-detail-actions">' + btns + '</span>' +
        '</div>' +
        '<div class="bl-ak-dtabs">' + det.tabs.map(function (tt, i) {
          return '<span class="bl-ak-dtab' + (i === state.tab ? ' bl-ak-dtab-active' : '') + '" data-dt="' + i + '">' + esc(tt.name) + '</span>';
        }).join('') + '</div>';

      var fields;
      if (t.subtabs) {
        html += '<div class="bl-ak-dsubtabs">' + t.subtabs.map(function (st, j) {
          return '<span class="bl-ak-dsub' + (j === state.sub ? ' bl-ak-dsub-active' : '') + '" data-ds="' + j + '">' + esc(st.name) + '</span>';
        }).join('') + '</div>';
        fields = t.subtabs[state.sub].fields;
      } else {
        fields = t.fields;
      }

      html += '<div class="bl-ak-fields">' + fields.map(function (f) {
        return fieldHTML(f[0], resolveField(f[1], row));
      }).join('') + '</div></div>';

      gridwrap.innerHTML = html;
      bindBack();
      gridwrap.querySelectorAll('.bl-ak-dtab').forEach(function (el) {
        el.addEventListener('click', function () { state.tab = +el.getAttribute('data-dt'); state.sub = 0; draw(); });
      });
      gridwrap.querySelectorAll('.bl-ak-dsub').forEach(function (el) {
        el.addEventListener('click', function () { state.sub = +el.getAttribute('data-ds'); draw(); });
      });
    }
    draw();
  }

  gridwrap.addEventListener('click', function (e) {
    if (e.target.closest('.bl-ak-mini') || e.target.closest('.bl-ak-refresh-row')) return;
    var tr = e.target.closest('tbody tr');
    if (!tr || tr.classList.contains('bl-ak-filterrow')) return;
    var table = tr.closest('table');
    if (!table) return;
    openDetail(table, tr);
  });

  var clickables = frame.querySelectorAll('[data-screen]');
  clickables.forEach(function (el) {
    el.addEventListener('click', function () {
      clickables.forEach(function (o) { o.classList.remove('bl-ak-active'); });
      el.classList.add('bl-ak-active');
      render(el.getAttribute('data-screen'));
    });
  });
}

/* ============================================================
   Workflow Library (layout: workflows)
   Restructures the rendered markdown into category sections with
   collapsible workflow cards, wires the hero chips/stats, the
   expand/collapse toolbar and the Hextra tab groups.
   ============================================================ */
function initWorkflowLibrary() {
  const root = document.querySelector('.wf-content');
  if (!root) return;

  root.querySelectorAll(':scope > hr').forEach((hr) => hr.remove());

  const headingId = (h) => {
    const span = h.querySelector('span[id]');
    return span ? span.id : (h.id || '');
  };
  const headingText = (h) => {
    const clone = h.cloneNode(true);
    clone.querySelectorAll('span, a').forEach((n) => n.remove());
    return clone.textContent.trim();
  };

  // ---- Split top-level nodes into intro / categories / help ----
  const kids = Array.from(root.children);
  const intro = [];
  const cats = [];
  let help = null;
  let bucket = intro;
  kids.forEach((node) => {
    if (node.tagName === 'H2') {
      const id = headingId(node);
      if (id === 'getting-help') {
        help = { h2: node, nodes: [] };
        bucket = help.nodes;
      } else {
        const cat = { h2: node, id: id, title: headingText(node), nodes: [] };
        cats.push(cat);
        bucket = cat.nodes;
      }
      return;
    }
    bucket.push(node);
  });

  root.textContent = '';

  // ---- Intro ----
  if (intro.length) {
    const wrap = document.createElement('div');
    wrap.className = 'wf-intro';
    intro.forEach((n) => wrap.appendChild(n));
    root.appendChild(wrap);
  }

  // ---- Helpers for card decoration ----
  const soloStrong = (p) => {
    if (p.tagName !== 'P' || p.children.length !== 1) return false;
    const strong = p.firstElementChild;
    if (strong.tagName !== 'STRONG') return false;
    const rest = p.textContent.trim().slice(strong.textContent.trim().length).trim();
    if (rest === ':') {
      // "**Detailed Steps**:" — drop the dangling colon so it styles cleanly
      p.childNodes.forEach((n) => {
        if (n.nodeType === 3 && n.textContent.trim() === ':') n.textContent = '';
      });
      return true;
    }
    return rest === '';
  };

  const decorateBody = (body) => {
    Array.from(body.querySelectorAll(':scope > p')).forEach((p) => {
      const strong = p.firstElementChild;
      if (!strong || strong.tagName !== 'STRONG' || p.firstChild !== strong) {
        return;
      }
      const label = strong.textContent.trim().replace(/:$/, '');
      if (label === 'Objective') {
        p.classList.add('wf-objective');
      } else if (label === 'Prerequisites') {
        p.classList.add('wf-prereq-title');
        const list = p.nextElementSibling;
        if (list && list.tagName === 'UL') {
          const panel = document.createElement('div');
          panel.className = 'wf-prereq';
          p.before(panel);
          panel.appendChild(p);
          panel.appendChild(list);
        }
      } else if (soloStrong(p)) {
        p.classList.add('wf-sub');
      }
    });
    body.querySelectorAll('.hextra-tabs-panel > p').forEach((p) => {
      if (soloStrong(p)) p.classList.add('wf-sub');
    });
    body.querySelectorAll('li').forEach((li) => {
      if (/^[✅☑✔]/.test(li.textContent.trim())) li.classList.add('wf-check');
    });
  };

  const cardMeta = (body) => {
    const tabs = body.querySelectorAll('.hextra-tabs-toggle').length;
    if (tabs) return tabs + ' stages';
    const steps = body.querySelectorAll(':scope > ol > li').length;
    return steps ? steps + ' steps' : 'Guide';
  };

  // ---- Categories -> accordion cards ----
  let cardCount = 0;
  cats.forEach((cat, ci) => {
    const section = document.createElement('section');
    section.className = 'wf-cat';
    section.id = cat.id || 'wf-cat-' + (ci + 1);

    const head = document.createElement('div');
    head.className = 'wf-cat-head';
    const num = document.createElement('span');
    num.className = 'wf-cat-num';
    num.textContent = String(ci + 1).padStart(2, '0');
    const title = document.createElement('h2');
    title.className = 'wf-cat-title';
    title.textContent = cat.title;
    head.appendChild(num);
    head.appendChild(title);
    section.appendChild(head);

    let card = null;
    let body = null;
    cat.nodes.forEach((node) => {
      if (node.tagName === 'H3') {
        cardCount++;
        card = document.createElement('details');
        card.className = 'wf-acc';
        const summary = document.createElement('summary');
        summary.className = 'wf-acc-summary';
        summary.innerHTML =
          '<span class="wf-acc-title">' + headingText(node) + '</span>' +
          '<span class="wf-acc-meta"></span>' +
          '<span class="wf-acc-chev" aria-hidden="true">' +
          '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 8l5 5 5-5"/></svg>' +
          '</span>';
        body = document.createElement('div');
        body.className = 'wf-acc-body';
        card.appendChild(summary);
        card.appendChild(body);
        section.appendChild(card);
        return;
      }
      if (node.tagName === 'HR') { node.remove(); return; }
      if (body) {
        body.appendChild(node);
      } else {
        node.classList.add('wf-cat-lead');
        section.appendChild(node);
      }
    });

    section.querySelectorAll('.wf-acc').forEach((acc) => {
      const accBody = acc.querySelector('.wf-acc-body');
      decorateBody(accBody);
      acc.querySelector('.wf-acc-meta').textContent = cardMeta(accBody);
    });

    root.appendChild(section);
  });

  // ---- Getting Help ----
  if (help) {
    const section = document.createElement('section');
    section.className = 'wf-help';
    const title = document.createElement('h2');
    title.className = 'wf-help-title';
    title.textContent = headingText(help.h2);
    section.appendChild(title);
    help.nodes.forEach((n) => {
      if (n.tagName === 'HR') { n.remove(); return; }
      section.appendChild(n);
    });
    root.appendChild(section);
  }

  // ---- Hero chips + stats ----
  const chips = document.querySelector('.wf-chips');
  if (chips) {
    cats.forEach((cat, ci) => {
      const a = document.createElement('a');
      a.className = 'wf-chip';
      a.href = '#' + (cat.id || 'wf-cat-' + (ci + 1));
      a.textContent = cat.title;
      chips.appendChild(a);
    });
  }
  const stats = document.querySelector('.wf-stats');
  if (stats) {
    stats.innerHTML =
      '<span class="wf-stat"><strong>' + cardCount + '</strong> workflows</span>' +
      '<span class="wf-stat-dot"></span>' +
      '<span class="wf-stat"><strong>' + cats.length + '</strong> categories</span>' +
      '<span class="wf-stat-dot"></span>' +
      '<span class="wf-stat">All industries</span>';
  }

  // ---- Open the first card; open a card when its hash is targeted ----
  const firstCard = root.querySelector('.wf-acc');
  if (firstCard) firstCard.open = true;

  // ---- Expand / collapse toolbar ----
  const setAll = (open) =>
    root.querySelectorAll('.wf-acc').forEach((d) => { d.open = open; });
  const expandBtn = document.querySelector('[data-wf-expand]');
  const collapseBtn = document.querySelector('[data-wf-collapse]');
  if (expandBtn) expandBtn.addEventListener('click', () => setAll(true));
  if (collapseBtn) collapseBtn.addEventListener('click', () => setAll(false));

  // ---- Hextra tab groups (theme JS is absent on this layout) ----
  root.querySelectorAll('.hextra-tabs-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bar = btn.parentElement;
      const scroller = bar.parentElement;
      const panels = scroller.nextElementSibling;
      bar.querySelectorAll('.hextra-tabs-toggle').forEach((b) => {
        const on = b === btn;
        if (on) { b.dataset.state = 'selected'; } else { b.removeAttribute('data-state'); }
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      if (panels) {
        panels.querySelectorAll('.hextra-tabs-panel').forEach((panel) => {
          if (panel.id === btn.getAttribute('aria-controls')) {
            panel.dataset.state = 'selected';
          } else {
            panel.removeAttribute('data-state');
          }
        });
      }
    });
  });
}

/* Documentation article (layout: article) — wrap wide tables so they scroll
   inside their own container instead of overflowing the reading column. */
function initDocArticle() {
  const content = document.querySelector('.doc-content');
  if (!content) return;
  content.querySelectorAll(':scope table').forEach((table) => {
    if (table.parentElement && table.parentElement.classList.contains('doc-table-wrap')) return;
    const wrap = document.createElement('div');
    wrap.className = 'doc-table-wrap';
    table.before(wrap);
    wrap.appendChild(table);
  });
  initDocToc(content);
}

// Futuristic "On this page" TOC: strip heading emoji, live reading-progress
// bar, and a crimson active-section indicator that tracks the scroll position.
function initDocToc(content) {
  const toc = document.querySelector('[data-doc-toc]');
  if (!toc) return;
  const links = Array.from(toc.querySelectorAll('#TableOfContents a'));
  if (!links.length) return;

  // Strip leading emoji / pictographs that headings carry into the TOC labels.
  const leadEmoji = /^\s*(?:[\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2300}-\u{27BF}\u{2B00}-\u{2BFF}\u{2600}-\u{26FF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}]+️?\s*)+/u;
  links.forEach((a) => {
    const raw = a.textContent;
    const cleaned = raw.replace(leadEmoji, '').trim();
    if (cleaned && cleaned !== raw) a.textContent = cleaned;
  });

  // Map each link to its heading target, preserving document order.
  const map = links
    .map((a) => {
      const id = decodeURIComponent((a.getAttribute('href') || '').replace(/^#/, ''));
      const el = id ? document.getElementById(id) : null;
      return { a, el };
    })
    .filter((o) => o.el);
  if (!map.length) return;

  const bar = toc.querySelector('.doc-toc-progress-bar');
  const scroller = toc.querySelector('.doc-toc-scroll');

  function update() {
    const y = window.scrollY || window.pageYOffset;

    if (bar) {
      const start = content.offsetTop;
      const end = start + content.offsetHeight - window.innerHeight;
      const pct = end > start ? (y - start) / (end - start) : 1;
      bar.style.width = (Math.max(0, Math.min(1, pct)) * 100).toFixed(1) + '%';
    }

    const line = y + 130;
    let active = map[0];
    for (const o of map) {
      if (o.el.getBoundingClientRect().top + y <= line) active = o;
      else break;
    }
    let changed = false;
    links.forEach((a) => {
      const on = a === active.a;
      if (on !== a.classList.contains('doc-toc-active')) changed = true;
      a.classList.toggle('doc-toc-active', on);
    });
    // Keep the active item visible within the scrollable TOC.
    if (changed && scroller && active) {
      const ar = active.a.getBoundingClientRect();
      const sr = scroller.getBoundingClientRect();
      if (ar.top < sr.top || ar.bottom > sr.bottom) {
        scroller.scrollTop += ar.top - sr.top - sr.height / 2 + ar.height / 2;
      }
    }
  }

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}
