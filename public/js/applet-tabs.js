/* Tabbed-chapter layout for applet detail pages (`applet_tabs: true`).
   Splits .apd-content into chapters at each H2, renders them as tabs,
   and rebuilds the right-hand menu with only the active chapter's
   subsections. Styling lives in css/applet-tabs.css. */
(function () {
  var content = document.querySelector('.apd-content');
  if (!content) return;

  var EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2190}-\u{21FF}\u{FE0F}\u{200D}\u{20E3}\u{2300}-\u{23FF}]/gu;
  function cleanText(t) {
    return t.replace(EMOJI, '').replace(/\s+/g, ' ').trim();
  }

  /* Short, tidy tab labels for known long section titles; anything
     unmapped falls back to its cleaned full title. */
  var SHORT_LABELS = {
    'executive overview': 'Overview',
    'why ucc is essential for modern business': 'Why UCC',
    'core capabilities': 'Capabilities',
    'module architecture': 'Modules',
    'implementation guide': 'Implementation',
    'best practices & tips': 'Best Practices',
    'use cases by industry': 'Use Cases',
    'integration ecosystem': 'Integrations',
    'pricing & packages': 'Pricing',
    'success metrics & roi': 'Metrics & ROI',
    'support & resources': 'Support',
    'frequently asked questions': 'FAQ',
    'ready to transform your customer service': 'Get Started',
    /* standard sections shared by most applet pages */
    'purpose and overview': 'Overview',
    'key features': 'Features',
    'technical specifications': 'Specifications',
    'integration points': 'Integrations',
    'configuration requirements': 'Configuration',
    'related applets': 'Related Applets',
    'setup guide': 'Setup',
    'use cases': 'Use Cases',
    'best practices': 'Best Practices',
    'troubleshooting': 'Troubleshooting',
    'integration workflows': 'Workflows',
    'implementation notes': 'Implementation',
    'api capabilities': 'API'
  };
  function tabLabel(title) {
    var t = cleanText(title);
    var key = t.toLowerCase().replace(/[?!.]+$/, '').trim();
    if (SHORT_LABELS[key]) return SHORT_LABELS[key];
    /* Generic tidy-up for pages without a curated label: drop leading
       numbering, then trim descriptive suffixes until it fits a button */
    t = t.replace(/^\d+\.\s*/, '');
    if (t.length > 24) t = t.split(' - ')[0].split(' (')[0].split(': ')[0];
    if (t.length > 26) t = t.slice(0, 24).replace(/\s+\S*$/, '') + '…';
    return t;
  }

  /* ── Split content into chapters at each H1/H2 ── */
  var nodes = Array.prototype.slice.call(content.children);
  var chapters = [];
  nodes.forEach(function (node) {
    if (/^H[12]$/.test(node.tagName)) {
      chapters.push({ heading: node, nodes: [node] });
    } else if (chapters.length) {
      chapters[chapters.length - 1].nodes.push(node);
    }
  });
  /* Pages too short to tab (fewer than 2 sections) keep the default
     layout, but still need the plain TOC scroll-spy the tabbed pages
     replaced. */
  if (chapters.length < 2) {
    var plainToc = document.querySelector('.apd-toc');
    if (!plainToc) return;
    var pairs = Array.prototype.slice.call(plainToc.querySelectorAll('a[href*="#"]'))
      .map(function (l) {
        var id = decodeURIComponent(l.getAttribute('href').split('#')[1] || '');
        return { link: l, head: document.getElementById(id) };
      })
      .filter(function (p) { return p.head; });
    if (!pairs.length) return;
    var plainTicking = false;
    function plainSpy() {
      var current = pairs[0];
      pairs.forEach(function (p) {
        if (p.head.getBoundingClientRect().top <= 120) current = p;
      });
      pairs.forEach(function (p) {
        p.link.classList.toggle('active', p === current);
      });
    }
    window.addEventListener('scroll', function () {
      if (plainTicking) return;
      plainTicking = true;
      requestAnimationFrame(function () { plainSpy(); plainTicking = false; });
    }, { passive: true });
    plainSpy();
    return;
  }

  chapters.forEach(function (ch, i) {
    ch.title = ch.heading.textContent;
    if (!ch.heading.id) ch.heading.id = 'chapter-' + (i + 1);
    var section = document.createElement('section');
    section.className = 'apt-chapter';
    content.insertBefore(section, ch.nodes[0]);
    ch.nodes.forEach(function (n) { section.appendChild(n); });
    ch.section = section;
  });

  /* ── Tab bar, placed where the content begins ── */
  var tabbar = document.createElement('div');
  tabbar.className = 'apt-tabs';
  tabbar.setAttribute('role', 'tablist');
  chapters.forEach(function (ch, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'apt-tab';
    btn.setAttribute('role', 'tab');
    btn.textContent = tabLabel(ch.title);
    btn.addEventListener('click', function () { activate(i, true); });
    tabbar.appendChild(btn);
    ch.tab = btn;
  });
  content.parentNode.insertBefore(tabbar, content);

  /* ── Right-hand section menu ── */
  var aside = document.querySelector('.apd-toc');
  var wrap = document.querySelector('.apd-wrap');
  var tocPairs = [];

  function tocText(t) {
    var s = cleanText(t).replace(/^\d+\.\s*/, '');
    if (s.length > 34) s = s.split(' - ')[0];
    return s;
  }

  function buildToc(ch) {
    if (!aside) return;
    var subs = Array.prototype.slice.call(ch.section.querySelectorAll('h3'));
    tocPairs = [];
    if (!subs.length) {
      aside.style.display = 'none';
      if (wrap) wrap.classList.add('apd-no-toc');
      return;
    }
    aside.style.display = '';
    if (wrap) wrap.classList.remove('apd-no-toc');
    aside.classList.add('apt-toc');

    var label = document.createElement('span');
    label.className = 'apt-toc-chapter';
    label.textContent = tabLabel(ch.title);

    var list = document.createElement('ul');
    list.className = 'apt-toc-list';
    subs.forEach(function (h, i) {
      if (!h.id) h.id = 'sub-' + (i + 1);
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + h.id;
      var n = document.createElement('span');
      n.className = 'apt-toc-n';
      n.textContent = String(i + 1).padStart(2, '0');
      a.appendChild(n);
      a.appendChild(document.createTextNode(tocText(h.textContent)));
      li.appendChild(a);
      list.appendChild(li);
      tocPairs.push({ link: a, head: h });
    });

    aside.innerHTML = '';
    aside.appendChild(label);
    aside.appendChild(list);
    spy();
  }

  /* Scroll-spy: active item = last heading above the reading line,
     which sits just under the sticky tab bar */
  function spy() {
    if (!tocPairs.length) return;
    var line = Math.max(tabbar.getBoundingClientRect().bottom + 24, 120);
    var current = tocPairs[0];
    tocPairs.forEach(function (p) {
      if (p.head.getBoundingClientRect().top <= line) current = p;
    });
    tocPairs.forEach(function (p) {
      p.link.classList.toggle('active', p === current);
    });
  }

  /* ── Reading progress bar ── */
  var progress = document.createElement('div');
  progress.className = 'apt-progress';
  document.body.appendChild(progress);
  function paintProgress() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    progress.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + '%';
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { spy(); paintProgress(); ticking = false; });
  }, { passive: true });

  /* ── Activation ── */
  function activate(idx, fromClick) {
    chapters.forEach(function (ch, i) {
      ch.section.classList.toggle('active', i === idx);
      ch.tab.classList.toggle('active', i === idx);
      ch.tab.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
    buildToc(chapters[idx]);
    if (fromClick) {
      history.replaceState(null, '', '#' + chapters[idx].heading.id);
      var top = tabbar.getBoundingClientRect().top + window.scrollY - 90;
      if (window.scrollY > top) window.scrollTo({ top: top, behavior: 'smooth' });
    }
    paintProgress();
  }

  /* Deep links: a hash naming any heading opens its chapter */
  var startIdx = 0;
  var hash = decodeURIComponent(location.hash.slice(1));
  if (hash) {
    chapters.forEach(function (ch, i) {
      if (ch.heading.id === hash || ch.section.querySelector('[id="' + hash.replace(/"/g, '') + '"]')) {
        startIdx = i;
      }
    });
  }
  activate(startIdx, false);
  if (hash && hash !== chapters[startIdx].heading.id) {
    var target = document.getElementById(hash);
    if (target) setTimeout(function () { target.scrollIntoView(); }, 0);
  }
})();
