/* ================================================================
   BIGLEDGER — ANIMATION ENGINE
   Canvas particles · Custom cursor · Scroll reveals · 3D tilt
   Typewriter · Counter · Gradient borders
================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNoise();
  initCursor();
  initParticles();
  initSiteNetwork();
  initScrollReveal();
  initCardTilt();
  initStatsCounter();
  initTypewriter();
  initMagneticButtons();
  initHeroWords();
  initMegaMenu();
  initMobileNav();
  initLangSwitch();
});

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
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const delay = parseInt(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('revealed'), delay);
      io.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => {
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
  const el = document.querySelector('.bl-cmd-text');
  if (!el) return;

  const phrases = [
    'Search modules, records, reports…',
    'INV-2024-3891 — Acme Technology Sdn Bhd',
    'E-Invoice compliance Q1 2024',
    'MY-SST filing status — January',
    'Inventory reorder: 3 items low stock',
    'Generate P&L report — last 90 days',
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
