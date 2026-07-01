/* ================================================================
   DATALAKE WIDGET — design-preview only
   Renders a real data-lake / data-hub / middleware architecture:

     6 data sources (DB, API, Files, IoT, SaaS, Streaming)
        ↓ flow particles ↓
     middleware / ETL ring (integration layer)
        ↓ flow particles ↓
     processing hub (the wireframe object — rings/crystal/sphere/hex)
        ↓
     layered data lake (Raw → Structured → Unstructured → Curated)

   Click the whole scene to dissolve it into the ambient background,
   then it reforms after 5 seconds. Intentionally isolated from
   main.js so it can never affect the production homepage.
================================================================ */

(function () {
  const THEME = { r: 220, g: 20, b: 60 };

  const SOURCES = [
    { type: 'database', label: 'SQL / NoSQL',  color: '96,165,250' },
    { type: 'api',       label: 'REST API',     color: '52,211,153' },
    { type: 'files',     label: 'FILES / CSV',  color: '255,140,60' },
    { type: 'iot',       label: 'IoT SENSORS',  color: '220,20,60' },
    { type: 'apps',      label: 'SAAS APPS',    color: '167,139,250' },
    { type: 'stream',    label: 'STREAMING',    color: '236,72,153' }
  ];

  const LAKE_LAYERS = [
    { label: 'RAW',          color: '255,140,60' },
    { label: 'STRUCTURED',   color: '96,165,250' },
    { label: 'UNSTRUCTURED', color: '52,211,153' },
    { label: 'CURATED',      color: '220,20,60' }
  ];

  /* ── Hub wireframe geometries (the distinct look per option) ── */
  function genRings() {
    const points = [];
    const edges = [];
    const ringRadii = [1.0, 0.75, 0.5];
    const ringYs = [-0.4, -0.05, 0.3];
    let idx = 0;
    const perRing = 12;
    ringRadii.forEach((r, ri) => {
      const start = idx;
      for (let i = 0; i < perRing; i++) {
        const a = (i / perRing) * Math.PI * 2;
        points.push({ x: Math.cos(a) * r, y: ringYs[ri] + Math.sin(a * 2) * 0.05, z: Math.sin(a) * r * 0.85 });
        idx++;
      }
      for (let i = 0; i < perRing; i++) edges.push([start + i, start + ((i + 1) % perRing)]);
    });
    return {
      points, edges, core: { x: 0, y: 0.3, z: 0 }, rot: 0.006,
      layout: { sourceRadius: 2.5, sourceY: -0.15, midRadius: 1.55, midY: -0.15, lakeY: 1.35 }
    };
  }

  function genCrystal() {
    const points = [
      { x: 0, y: 1, z: 0 }, { x: 0, y: -1, z: 0 },
      { x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 },
      { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 }
    ];
    const edges = [];
    const equator = [2, 4, 3, 5];
    for (let i = 0; i < 4; i++) {
      edges.push([0, equator[i]]);
      edges.push([1, equator[i]]);
      edges.push([equator[i], equator[(i + 1) % 4]]);
    }
    return {
      points, edges, core: { x: 0, y: 0, z: 0 }, rot: 0.008,
      layout: { sourceRadius: 2.7, sourceY: 0, midRadius: 1.65, midY: 0, lakeY: 1.75 }
    };
  }

  function fibonacciSphere(n, radius) {
    const pts = [];
    const offset = 2 / n;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = (i * offset - 1) + offset / 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const phi = i * increment;
      pts.push({ x: Math.cos(phi) * r * radius, y: y * radius, z: Math.sin(phi) * r * radius });
    }
    return pts;
  }

  function genSphere() {
    const points = fibonacciSphere(34, 1);
    const edges = [];
    for (let i = 0; i < points.length; i++) {
      const dists = [];
      for (let j = 0; j < points.length; j++) {
        if (i === j) continue;
        const dx = points[i].x - points[j].x, dy = points[i].y - points[j].y, dz = points[i].z - points[j].z;
        dists.push([j, dx * dx + dy * dy + dz * dz]);
      }
      dists.sort((a, b) => a[1] - b[1]);
      for (let k = 0; k < 2; k++) {
        const pair = [i, dists[k][0]].sort((a, b) => a - b);
        if (!edges.some(e => e[0] === pair[0] && e[1] === pair[1])) edges.push(pair);
      }
    }
    return {
      points, edges, core: { x: 0, y: 0, z: 0 }, rot: 0.005,
      layout: { sourceRadius: 2.8, sourceY: 0, midRadius: 1.7, midY: 0, lakeY: 1.75 }
    };
  }

  function genHex() {
    const points = [];
    const edges = [];
    const layerY = [-0.5, -0.2, 0.1, 0.4];
    const layerR = [0.9, 0.78, 0.66, 0.54];
    const layerStart = [];
    let idx = 0;
    layerY.forEach((y, li) => {
      layerStart.push(idx);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        points.push({ x: Math.cos(a) * layerR[li], y, z: Math.sin(a) * layerR[li] });
        idx++;
      }
      for (let i = 0; i < 6; i++) edges.push([layerStart[li] + i, layerStart[li] + ((i + 1) % 6)]);
    });
    for (let li = 0; li < layerY.length - 1; li++) {
      for (let i = 0; i < 6; i += 2) edges.push([layerStart[li] + i, layerStart[li + 1] + i]);
    }
    return {
      points, edges, core: { x: 0, y: 0.2, z: 0 }, rot: 0.007,
      layout: { sourceRadius: 2.3, sourceY: -0.1, midRadius: 1.4, midY: -0.1, lakeY: 1.15 }
    };
  }

  const GENERATORS = { rings: genRings, crystal: genCrystal, sphere: genSphere, hex: genHex };

  function project(p, angle, cx, cy, scale, perspective) {
    const cosA = Math.cos(angle), sinA = Math.sin(angle);
    const x = p.x * cosA - p.z * sinA;
    const z1 = p.x * sinA + p.z * cosA;
    const tilt = 0.32;
    const y = p.y * Math.cos(tilt) - z1 * Math.sin(tilt);
    const z = p.y * Math.sin(tilt) + z1 * Math.cos(tilt);
    const f = perspective / (perspective + z);
    return { sx: cx + x * f * scale, sy: cy + y * f * scale, f, z };
  }

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeInOutSine(t) { return -(Math.cos(Math.PI * t) - 1) / 2; }

  /* ── Icon glyphs for each data source type ── */
  function drawSourceIcon(ctx, type, x, y, s, color) {
    ctx.save();
    ctx.strokeStyle = `rgba(${color},0.95)`;
    ctx.fillStyle = `rgba(${color},0.18)`;
    ctx.lineWidth = 1.4;
    if (type === 'database') {
      const rx = s * 0.55, ry = s * 0.2;
      ctx.beginPath(); ctx.ellipse(x, y - s * 0.4, rx, ry, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - rx, y - s * 0.4); ctx.lineTo(x - rx, y + s * 0.4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + rx, y - s * 0.4); ctx.lineTo(x + rx, y + s * 0.4); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x, y + s * 0.4, rx, ry, 0, 0, Math.PI, false); ctx.stroke();
    } else if (type === 'api') {
      ctx.font = `700 ${Math.round(s * 0.85)}px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = `rgba(${color},0.95)`;
      ctx.fillText('</>', x, y);
    } else if (type === 'files') {
      const w = s * 0.8, h = s * 0.95;
      ctx.beginPath();
      ctx.moveTo(x - w / 2, y - h / 2); ctx.lineTo(x + w / 2 - s * 0.22, y - h / 2);
      ctx.lineTo(x + w / 2, y - h / 2 + s * 0.22); ctx.lineTo(x + w / 2, y + h / 2);
      ctx.lineTo(x - w / 2, y + h / 2); ctx.closePath();
      ctx.fill(); ctx.stroke();
    } else if (type === 'iot') {
      for (let gx = -1; gx <= 1; gx++) {
        for (let gy = -1; gy <= 1; gy++) {
          ctx.beginPath(); ctx.arc(x + gx * s * 0.32, y + gy * s * 0.32, s * 0.09, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color},${gx === 0 && gy === 0 ? 1 : 0.5})`;
          ctx.fill();
        }
      }
    } else if (type === 'apps') {
      const w = s * 0.68, h = s * 0.95, r = s * 0.14;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x - w / 2, y - h / 2, w, h, r); else ctx.rect(x - w / 2, y - h / 2, w, h);
      ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y + h / 2 - s * 0.13, s * 0.05, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},0.9)`; ctx.fill();
    } else if (type === 'stream') {
      ctx.beginPath();
      ctx.moveTo(x - s * 0.55, y - s * 0.12);
      ctx.quadraticCurveTo(x - s * 0.25, y - s * 0.5, x, y - s * 0.12);
      ctx.quadraticCurveTo(x + s * 0.25, y + s * 0.26, x + s * 0.55, y - s * 0.12);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - s * 0.45, y + s * 0.32);
      ctx.quadraticCurveTo(x - s * 0.18, y + s * 0.02, x + s * 0.1, y + s * 0.28);
      ctx.quadraticCurveTo(x + s * 0.35, y + s * 0.5, x + s * 0.55, y + s * 0.28);
      ctx.strokeStyle = `rgba(${color},0.55)`;
      ctx.stroke();
    }
    ctx.restore();
  }

  window.initDatalakeWidget = function (canvasId, variantKey) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const hub = GENERATORS[variantKey] ? GENERATORS[variantKey]() : GENERATORS.rings();
    const layout = hub.layout;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Merge hub wireframe + sources + middleware into one point list.
       Edges only ever reference hub indices, so nothing else needs to
       change — explode/reform below treats every point uniformly. */
    const points = hub.points.slice();
    const edges = hub.edges;
    const sourceStart = points.length;
    SOURCES.forEach((s, i) => {
      const a = (i / SOURCES.length) * Math.PI * 2;
      points.push({ x: Math.cos(a) * layout.sourceRadius, y: layout.sourceY, z: Math.sin(a) * layout.sourceRadius, kind: 'source', srcIndex: i });
    });
    const middlewareStart = points.length;
    SOURCES.forEach((s, i) => {
      const a = (i / SOURCES.length) * Math.PI * 2 + Math.PI / SOURCES.length;
      points.push({ x: Math.cos(a) * layout.midRadius, y: layout.midY, z: Math.sin(a) * layout.midRadius, kind: 'middleware' });
    });
    const lakeAnchor = { x: 0, y: layout.lakeY, z: 0 };
    const geo = { points, edges, core: hub.core, rot: hub.rot, lakeAnchor };

    let W, H, cx, cy, scale, perspective;
    let flows = [];
    function spawnFlow() {
      return { srcIdx: Math.floor(Math.random() * SOURCES.length), stage: 0, p: Math.random() * 0.4 };
    }
    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = canvas.width = rect.width;
      H = canvas.height = rect.height;
      cx = W / 2; cy = H * 0.4;
      scale = Math.min(W, H) * 0.24;
      perspective = Math.min(W, H) * 1.2;
      flows = Array.from({ length: 16 }, spawnFlow);
    }
    resize();
    window.addEventListener('resize', resize);

    let angle = 0.6;
    let state = 'calm'; // calm | exploding | scattered | reforming
    let stateStart = 0;
    let scatterPositions = [];
    let capturedPositions = [];
    let coreAlpha = 1;
    let holdTimer = null;

    function projectAll() {
      return geo.points.map(p => project(p, angle, cx, cy, scale, perspective));
    }

    function triggerExplode() {
      if (state !== 'calm') return;
      capturedPositions = projectAll();
      scatterPositions = geo.points.map(() => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15
      }));
      state = 'exploding';
      stateStart = performance.now();
      canvas.classList.add('dlp-exploded');
    }

    function scheduleReform() {
      clearTimeout(holdTimer);
      holdTimer = setTimeout(() => { state = 'reforming'; stateStart = performance.now(); }, 2000);
    }

    canvas.addEventListener('click', triggerExplode);
    canvas.style.cursor = 'pointer';

    /* ── Hover left / right half to spin the whole scene 180° ── */
    let hoverZone = null;
    let spinAnim = null;
    function triggerSpin(zone) {
      const target = angle + (zone === 'left' ? -Math.PI : Math.PI);
      spinAnim = { from: angle, to: target, start: performance.now() };
    }
    canvas.addEventListener('mousemove', (e) => {
      if (state !== 'calm') return;
      const rect = canvas.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const zone = localX < rect.width / 2 ? 'left' : 'right';
      if (zone !== hoverZone) {
        hoverZone = zone;
        triggerSpin(zone);
      }
    });
    canvas.addEventListener('mouseleave', () => { hoverZone = null; });

    function drawLakeStack(t) {
      const p = project(geo.lakeAnchor, angle, cx, cy, scale, perspective);
      for (let i = 0; i < LAKE_LAYERS.length; i++) {
        const layer = LAKE_LAYERS[i];
        const depth = LAKE_LAYERS.length - i;
        const y = p.sy + depth * 12 * p.f;
        const w = (scale * 0.95 - i * scale * 0.11) * p.f;
        const h = w * 0.32;
        ctx.beginPath(); ctx.ellipse(p.sx, y, w, h, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${layer.color},0.15)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${layer.color},0.6)`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
        ctx.font = '600 9px "JetBrains Mono", monospace';
        ctx.fillStyle = `rgba(${layer.color},0.9)`;
        ctx.textAlign = 'left';
        ctx.fillText(layer.label, p.sx + w + 8, y + 3);
      }
      for (let i = 0; i < 3; i++) {
        const phase = ((t * 0.0002) + i / 3) % 1;
        const topY = p.sy + 1 * 12 * p.f;
        const rw = (scale * 0.8 * p.f) * (0.2 + 0.8 * phase);
        ctx.beginPath(); ctx.ellipse(p.sx, topY, rw, rw * 0.32, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${THEME.r},${THEME.g},${THEME.b},${0.22 * (1 - phase)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      return p;
    }

    function drawFlows(projected, lakeP) {
      flows.forEach(f => {
        f.p += 0.014;
        if (f.p >= 1) { f.p = 0; f.stage = (f.stage + 1) % 2; if (f.stage === 0) Object.assign(f, spawnFlow(), { p: 0 }); }
        const srcP = clampPoint(projected[sourceStart + f.srcIdx]);
        const midP = clampPoint(projected[middlewareStart + f.srcIdx]);
        const src = SOURCES[f.srcIdx];
        let x, y;
        if (f.stage === 0) { x = srcP.sx + (midP.sx - srcP.sx) * f.p; y = srcP.sy + (midP.sy - srcP.sy) * f.p; }
        else { x = midP.sx + (lakeP.sx - midP.sx) * f.p; y = midP.sy + (lakeP.sy - midP.sy) * f.p; }
        const alpha = Math.sin(Math.min(1, f.p) * Math.PI);
        ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${src.color},${alpha * 0.9})`;
        ctx.shadowBlur = 5; ctx.shadowColor = `rgba(${src.color},0.8)`;
        ctx.fill(); ctx.shadowBlur = 0;
      });
    }

    function clampPoint(p) {
      return { sx: Math.max(46, Math.min(W - 46, p.sx)), sy: Math.max(20, Math.min(H - 20, p.sy)), f: p.f };
    }

    function drawSourcesAndMiddleware(projected) {
      const midHalf = scale * 0.037, iconSize = scale * 0.13, labelFont = Math.round(scale * 0.058);
      for (let i = 0; i < SOURCES.length; i++) {
        const p = clampPoint(projected[middlewareStart + i]);
        const h = midHalf * p.f;
        ctx.beginPath();
        ctx.moveTo(p.sx, p.sy - h); ctx.lineTo(p.sx + h, p.sy);
        ctx.lineTo(p.sx, p.sy + h); ctx.lineTo(p.sx - h, p.sy);
        ctx.closePath();
        ctx.fillStyle = `rgba(${THEME.r},${THEME.g},${THEME.b},0.22)`;
        ctx.strokeStyle = `rgba(${THEME.r},${THEME.g},${THEME.b},0.75)`;
        ctx.lineWidth = 1.1;
        ctx.fill(); ctx.stroke();
      }
      const topMid = clampPoint(projected[middlewareStart]);
      ctx.font = `600 ${labelFont}px "JetBrains Mono", monospace`;
      ctx.fillStyle = `rgba(${THEME.r},${THEME.g},${THEME.b},0.85)`;
      ctx.textAlign = 'center';
      ctx.fillText('MIDDLEWARE / ETL', topMid.sx, topMid.sy - 14 * topMid.f);

      for (let i = 0; i < SOURCES.length; i++) {
        const p = clampPoint(projected[sourceStart + i]);
        const src = SOURCES[i];
        drawSourceIcon(ctx, src.type, p.sx, p.sy, iconSize * p.f, src.color);
        ctx.font = `600 ${labelFont}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(${src.color},0.95)`;
        ctx.textAlign = 'center';
        ctx.fillText(src.label, p.sx, p.sy + 26 * p.f);
      }
      ctx.textAlign = 'left';
    }

    function drawHUD(t, hudAlpha) {
      if (hudAlpha <= 0.01) return;
      const bx0 = cx - scale * 2.35, bx1 = cx + scale * 2.35;
      const by0 = cy - scale * 1.7, by1 = cy + scale * 2.7;
      const bracket = scale * 0.3;

      ctx.strokeStyle = `rgba(${THEME.r},${THEME.g},${THEME.b},${0.5 * hudAlpha})`;
      ctx.lineWidth = 1.4;
      [[bx0, by0, 1, 1], [bx1, by0, -1, 1], [bx0, by1, 1, -1], [bx1, by1, -1, -1]].forEach(([x, y, dx, dy]) => {
        ctx.beginPath();
        ctx.moveTo(x, y + bracket * dy);
        ctx.lineTo(x, y);
        ctx.lineTo(x + bracket * dx, y);
        ctx.stroke();
      });

      const scanCycle = 4200;
      const sp = (t % scanCycle) / scanCycle;
      const scanY = by0 + (by1 - by0) * sp;
      const fade = Math.sin(sp * Math.PI);
      const lg = ctx.createLinearGradient(bx0, 0, bx1, 0);
      lg.addColorStop(0, 'rgba(220,20,60,0)');
      lg.addColorStop(0.5, `rgba(255,60,90,${0.6 * fade * hudAlpha})`);
      lg.addColorStop(1, 'rgba(220,20,60,0)');
      ctx.strokeStyle = lg;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(bx0, scanY); ctx.lineTo(bx1, scanY); ctx.stroke();

      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillStyle = `rgba(${THEME.r},${THEME.g},${THEME.b},${0.65 * hudAlpha})`;
      ctx.textAlign = 'left';
      ctx.fillText('● LIVE  SOURCES ' + SOURCES.length + '  NODES ' + geo.points.length + '  SYNC ' + (98.2 + Math.sin(t * 0.001) * 1.2).toFixed(1) + '%', bx0, by1 + 20);
    }

    function drawHubWireframe(projected) {
      ctx.lineWidth = 1;
      geo.edges.forEach(([i, j]) => {
        const a = projected[i], b = projected[j];
        if (!a || !b) return;
        const depth = (a.f + b.f) / 2;
        const alpha = Math.max(0.06, Math.min(0.55, (depth - 0.6) * 1.4));
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy);
        ctx.strokeStyle = `rgba(${THEME.r},${THEME.g},${THEME.b},${alpha})`;
        ctx.stroke();
      });
      for (let i = 0; i < hub.points.length; i++) {
        const p = projected[i];
        const size = Math.max(1.4, scale * 0.021 * p.f);
        ctx.beginPath(); ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,240,235,${Math.min(1, p.f)})`;
        ctx.shadowBlur = 6; ctx.shadowColor = `rgba(${THEME.r},${THEME.g},${THEME.b},0.7)`;
        ctx.fill(); ctx.shadowBlur = 0;
      }
    }

    function drawCore(t) {
      if (coreAlpha <= 0) return;
      const p = project(hub.core, angle, cx, cy, scale, perspective);
      const pulse = 0.6 + Math.sin(t * 0.003) * 0.4;
      const r = scale * 0.1 * p.f * (0.8 + pulse * 0.3);
      const g = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 2.6);
      g.addColorStop(0, `rgba(${THEME.r + 30},${THEME.g + 60},${THEME.b + 40},${0.9 * coreAlpha})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(p.sx, p.sy, r * 2.6, 0, Math.PI * 2); ctx.fill();
    }

    function drawScattered(positions) {
      const maxDist = Math.min(W, H) * 0.2;
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const dx = positions[i].x - positions[j].x, dy = positions[i].y - positions[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const a = (1 - d / maxDist) * 0.26;
            ctx.beginPath(); ctx.moveTo(positions[i].x, positions[i].y); ctx.lineTo(positions[j].x, positions[j].y);
            ctx.strokeStyle = `rgba(${THEME.r},${THEME.g},${THEME.b},${a})`;
            ctx.lineWidth = 0.6; ctx.stroke();
          }
        }
      }
      positions.forEach(pos => {
        ctx.beginPath(); ctx.arc(pos.x, pos.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(240,240,235,0.6)'; ctx.fill();
      });
    }

    function animate(t) {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, W, H);

      if (state === 'calm') {
        if (spinAnim) {
          const sdt = (t - spinAnim.start) / 6000;
          if (sdt >= 1) { angle = spinAnim.to; spinAnim = null; }
          else { angle = spinAnim.from + (spinAnim.to - spinAnim.from) * easeInOutSine(sdt); }
        } else {
          angle += geo.rot;
        }
        coreAlpha = Math.min(1, coreAlpha + 0.04);
        const projected = projectAll();
        const lakeP = drawLakeStack(t);
        drawFlows(projected, lakeP);
        drawHubWireframe(projected);
        drawCore(t);
        drawSourcesAndMiddleware(projected);
        drawHUD(t, 1);
      } else if (state === 'exploding') {
        const dt = (t - stateStart) / 700;
        const e = easeOutCubic(Math.min(1, dt));
        coreAlpha = Math.max(0, 1 - e * 2);
        const positions = capturedPositions.map((c, i) => ({
          x: c.sx + (scatterPositions[i].x - c.sx) * e,
          y: c.sy + (scatterPositions[i].y - c.sy) * e
        }));
        drawScattered(positions);
        if (dt >= 1) { state = 'scattered'; scheduleReform(); }
      } else if (state === 'scattered') {
        scatterPositions.forEach(p => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        });
        drawScattered(scatterPositions);
      } else if (state === 'reforming') {
        const dt = (t - stateStart) / 700;
        const e = easeInOutCubic(Math.min(1, dt));
        const positions = scatterPositions.map((s, i) => ({
          x: s.x + (capturedPositions[i].sx - s.x) * e,
          y: s.y + (capturedPositions[i].sy - s.y) * e
        }));
        drawScattered(positions);
        if (dt >= 1) {
          state = 'calm';
          coreAlpha = 0;
          canvas.classList.remove('dlp-exploded');
        }
      }
    }

    if (reduceMotion) {
      const projected = projectAll();
      const lakeP = drawLakeStack(0);
      drawHubWireframe(projected);
      drawSourcesAndMiddleware(projected);
      drawHUD(0, 1);
    } else {
      requestAnimationFrame(animate);
    }
  };
})();
