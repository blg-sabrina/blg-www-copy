<p align="center">
  <img src="assets/awanjasa-logo.svg" alt="Awanjasa" height="56">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/bigledger-logo.png" alt="BigLedger" height="34">
</p>

<h1 align="center">User Acceptance Testing Report</h1>
<h3 align="center">BigLedger Corporate Website Rebuild &amp; Replacement</h3>

<p align="center">
  <strong>Prepared by:</strong> Awanjasa &nbsp;·&nbsp;
  <strong>Prepared for:</strong> BigLedger Sdn Bhd<br>
  <strong>Production URL:</strong> <a href="https://www.bigledger.com/">https://www.bigledger.com/</a>
</p>

---

## Document control

| Field | Value |
|---|---|
| Document title | UAT Report — BigLedger Corporate Website Rebuild |
| Version | 1.1 |
| Status | **Awaiting client sign-off** |
| Date issued | 22 July 2026 |
| Prepared by | Awanjasa |
| Prepared for | BigLedger Sdn Bhd |
| Repository | `bigledger/blg-www` |
| Release under test | `ae205497` |
| Environment | Production — AWS S3 + CloudFront (`ELHXIGVKWA8XV`) |

### Revision history

| Version | Date | Summary |
|---|---|---|
| 1.0 | 22 July 2026 | Initial UAT report for the rebuilt website (release `3eef0e1d`). |
| 1.1 | 22 July 2026 | Documentation tree translated to full parity in Chinese, Bahasa Malaysia and Arabic (release `ae205497`); §7 open translation items closed. |

---

## 1. Purpose

This report records the User Acceptance Testing of the rebuilt BigLedger corporate website, which now replaces the previous site at `www.bigledger.com`. It states what was delivered, what was tested and how, the defects found and resolved during testing, the limitations that remain open, and the deployment record — so that BigLedger can accept or reject the release on evidence rather than assertion.

**Version 1.1** additionally records the completion of the multi-language documentation tree: every English content page now has a Chinese, Bahasa Malaysia and Arabic counterpart, closing the translation gaps that were listed as open items in version 1.0.

## 2. Scope

**In scope**

- Rebuild of the public corporate website on the Hugo static site generator
- Custom marketing design system (the `bl-` component library) replacing the stock theme presentation
- Multi-language delivery: English, Chinese, Bahasa Malaysia, Arabic (with right-to-left support)
- **Full translation of the documentation tree into all three additional languages (added in v1.1)**
- Product, solution, compliance and documentation content
- Build and release pipeline to AWS S3 with CloudFront invalidation
- Replacement of the previous production site

**Out of scope**

- Migration or redesign of the BigLedger application itself
- Ongoing maintenance translation of future English content changes (handled per the standard translation policy)

## 3. Delivery summary

| Measure | Value |
|---|---|
| Content source files | 1,028 (257 per language × 4) |
| Pages published | 2,656 |
| Languages | 4 (en, zh, ms, ar) — full content parity |
| Commits in project history | 88 |
| Project period | 12 August 2025 – 22 July 2026 |
| Release under test | `ae205497` |

### 3.1 Final release contents

The release under test consolidates the following work:

| Commit | Delivered |
|---|---|
| `fb07505d` | E-Invoice & PEPPOL page rebuilt as a full marketing page; documentation contents menu redesigned; Malay, Chinese and Arabic translations for the E-Invoice, Pricing, Contact and Developers pages; BigLedger favicon set |
| `22d36b63` | `Cache-Control` headers applied to all deployed assets |
| `e7ba78e3` | Mobile hero corrections — badge overlap, off-centre widget |
| `8c47d013` | Content-hash cache busting for CSS and JavaScript |
| `34b9401b` | Mobile page-zoom defect and hero text/animation overlap |
| `383c03df` | Scroll-linked page transitions; cursor-lit platform tiles |
| `451837ba` | Industries grid empty-cell correction |
| `3eef0e1d` | Platform tile divider refinement |
| `ae205497` | **Documentation tree translated to full parity — 460 pages across Chinese, Bahasa Malaysia and Arabic; stray tool-call artifact removed from a source FAQ** |

---

## 4. Test approach

Testing was performed against the **live production site** at `https://www.bigledger.com/` after each deployment, using:

- **Automated crawl** of the published sitemap, checking HTTP status and response time
- **Headless browser testing** (Chromium) at desktop and mobile viewports, capturing JavaScript console errors and failed network requests
- **Layout measurement** via the DOM — element geometry read directly rather than judged by eye
- **Byte comparison** of deployed files against the approved build (SHA-256)

The translation delivery (release `ae205497`) was additionally verified at the **production build** level, before deployment:

- **File-parity check** — every English content path compared against each language tree
- **Full production build** (`hugo --gc --minify`) — all four language sites compiled with zero errors; front matter, Hugo shortcodes and internal links validated by the build

Viewports exercised: 1440×950 (desktop), 414×896, 390×844 and 360×800 (mobile).

> **Note on independence:** the results in §5 were produced by the implementer's own automated tests. They are offered as evidence, not as a substitute for BigLedger's own acceptance testing. The sign-off block in §9 is deliberately left unsigned.

---

## 5. Test results

### 5.1 Availability and performance

| # | Test | Method | Result |
|---|---|---|---|
| A1 | All published pages reachable | Sitemap crawl, 150-page random sample of 914 | **Pass** — 0 non-200 responses |
| A2 | Response time acceptable | Same crawl | **Pass** — 0.10 s average, 0.18 s slowest |
| A3 | Site reachable on all hostnames | `www`, apex, and `http` | **Pass** — all resolve 200 to `https://www.bigledger.com/` |
| A4 | Core assets served | CSS, JS, favicons, manifest, sitemap, robots.txt | **Pass** — all 200 |

### 5.2 Functional and visual

| # | Test | Method | Result |
|---|---|---|---|
| F1 | Key pages load in all 4 languages | 10 pages × 4 languages | **Pass** |
| F2 | No JavaScript errors | 6 pages × desktop and mobile | **Pass** — 0 errors, 0 failed requests |
| F3 | No horizontal overflow | 6 pages × desktop and mobile | **Pass** |
| F4 | Arabic renders right-to-left | `dir=rtl` and visual check | **Pass** |
| F5 | Browser tab icon displays | 7 declared icons, all sizes fetched | **Pass** |
| F6 | Scroll transitions reversible | Opacity measured at fixed scroll offsets, both directions | **Pass** — symmetric |
| F7 | Platform tiles respond to cursor | CSS custom properties measured during pointer movement | **Pass** |
| F8 | Deployed files match approved build | SHA-256, 18 pages + 13 assets | **Pass** — only the build timestamp differs |

### 5.3 Mobile

| # | Test | Method | Result |
|---|---|---|---|
| M1 | Page renders at true device scale | Document width vs viewport width at 360/390/414 px | **Pass** — equal at all three |
| M2 | Hero elements do not overlap | Element geometry measured | **Pass** |
| M3 | Hero animation visible without scrolling | Canvas position vs viewport height | **Pass** |
| M4 | Hero animation running | Canvas pixel sampling over time | **Pass** |

### 5.4 Localization coverage (v1.1)

| # | Test | Method | Result |
|---|---|---|---|
| L1 | Every English page has a translation in each language | File-tree comparison, all sections | **Pass** — 257 / 257 files in zh, ms and ar |
| L2 | All four language sites build cleanly | `hugo --gc --minify` | **Pass** — 0 errors (en, zh, ms, ar compiled) |
| L3 | Front matter preserved (weight, tags, layout) | Build validation + diff sampling | **Pass** — only `title`/`description` translated |
| L4 | Internal links language-prefixed correctly | Grep audit + build | **Pass** — static asset paths kept unprefixed (see D9) |
| L5 | Hugo shortcodes and code blocks intact | Build validation | **Pass** — no shortcode/parse errors |

---

## 6. Defects found and resolved during UAT

All defects below were found during testing of this release and fixed before sign-off was requested.

| # | Severity | Defect | Root cause | Resolution |
|---|---|---|---|---|
| D1 | **High** | Entire site displayed at roughly half scale on phones | The closed mobile navigation drawer is `position: fixed` and parked past the right edge; fixed elements ignore `body { overflow-x: hidden }`, so the document measured 725 px wide on a 390 px device and the browser zoomed out to fit | `overflow-x: clip` on `<html>` (`clip`, not `hidden`, to preserve the sticky header) and the closed drawer set to `visibility: hidden` |
| D2 | **High** | Deployed changes did not reach returning visitors | Assets were uploaded with no `Cache-Control` header; browsers applied heuristic caching. A subsequent fix set a one-hour `max-age` on CSS while the stylesheet URL carried no version, making staleness worse | `Cache-Control` policy per file type, plus a content-hash query on CSS and JavaScript so the URL changes only when the file does |
| D3 | **Medium** | Hero paragraph rendered on top of the hero animation on phones | Desktop overlap offsets (`margin-top: -4cm`) remained active once the layout stacked | Offsets reset below 980 px, declared after the language-specific rules so they win the cascade |
| D4 | **Medium** | Accreditation badge unreadable behind the headline on phones | `margin-top: -3cm` on the headline row applied to the stacked mobile layout, overlapping the badge by 73 px | Reset to 0 with a 1-inch separation |
| D5 | **Low** | Hero animation shifted off-centre and clipped on phones | `margin-left: 1.5cm` intended for the desktop column layout | Reset at mobile breakpoints |
| D6 | **Low** | Empty bordered cell in the Industries grid | Seven cards in a four-column grid left an empty eighth cell that the container border outlined | Last card spans the remaining columns; reset to a single column below 480 px |
| D7 | **Low** | Build failure on current Hugo releases | Duplicate `role-based-access-control` key in `data/solution_features.yaml`, tolerated by older Hugo and rejected by newer versions | Duplicate removed |
| D8 | **Low** | Chinese Developers page rendered the wrong template | A stale `content/zh/developers/` section shadowed the translated page | Stale section removed |
| D9 | **Low** | Two translated pages prefixed a static image path with the language code (e.g. `/zh/screenshots/…`), which would 404 | Automated link-prefixing did not distinguish content links from static asset paths | Static asset paths (`/screenshots/…`) restored to their unprefixed form in the affected files |
| D10 | **Low** | A stray tool-call artifact (`<function_calls>…`) sat at the end of a source FAQ and had propagated into the translations | Leftover authoring artifact in the English source `cost-and-roi-questions.md` | Removed from the English source and all three translations |

---

## 7. Open items and known limitations

### 7.1 Untranslated pages — **closed in v1.1**

The pages listed as untranslated in version 1.0 (`/about/`, `/solutions/`, `/applets/` and others) have all been translated. Every English content path now resolves in Chinese, Bahasa Malaysia and Arabic.

| Page | Chinese | Bahasa Malaysia | Arabic |
|---|---|---|---|
| `/about/` | Translated | Translated | Translated |
| `/solutions/` | Translated | Translated | Translated |
| `/applets/` | Translated | Translated | Translated |

### 7.2 Documentation tree translation coverage — **full parity**

| Section | English | Chinese | Bahasa Malaysia | Arabic |
|---|---|---|---|---|
| Marketing pages | 62 | 62 | 62 | 62 |
| applets | 52 | 52 | 52 | 52 |
| user-guide | 43 | 43 | 43 | 43 |
| modules | 40 | 40 | 40 | 40 |
| guides | 30 | 30 | 30 | 30 |
| business-operations | 12 | 12 | 12 | 12 |
| support | 10 | 10 | 10 | 10 |
| Other documentation | 8 | 8 | 8 | 8 |
| **Total** | **257** | **257** | **257** | **257** |

Two files use a data-driven catalog layout whose display content lives in structured front matter (`applets/applet-catalog.md`); per the translation rule that preserves front matter verbatim, the catalog labels on that one page remain in English while its title, description and prose are translated. This is a minor, isolated item and does not affect navigation or any other page.

### 7.3 Operational notes for BigLedger

1. **Deployment is manual.** The workflow declares an `on: push` trigger, but push events do not start a run on this repository — every deployment in its history has been a manual `workflow_dispatch`. **Pushing to `main` alone will not publish the site**; the workflow must be run manually from the Actions tab. The v1.1 translation release (`ae205497`) is committed and build-verified and is ready to deploy by this manual trigger.
2. **Deployment removes files not in the build.** `hugo deploy` runs with `--maxDeletes -1`, so anything on S3 that the build does not produce is deleted. This is intentional synchronisation behaviour and should be understood before uploading files to the bucket by hand.
3. **Hugo version constraint.** The build requires Hugo **extended, v0.146–v0.157**. Below v0.146 the theme fails; v0.158 and above break on removed template APIs. v0.150.0 is verified working.
4. **Assets are not compressed.** Files are served without gzip or Brotli. Enabling compression is a straightforward performance improvement and is recommended as a follow-up.

---

## 8. Deployment record

Production deployments for this release, in order:

| Run ID | Commit | Result | Timestamp (UTC) |
|---|---|---|---|
| 29851585700 | `e7ba78e3` | Success | 2026-07-21 17:07 |
| 29852104207 | `8c47d013` | Success | 2026-07-21 17:14 |
| 29852643200 | `34b9401b` | Success | 2026-07-21 17:22 |
| 29853418642 | `383c03df` | Success | 2026-07-21 17:33 |
| 29853930911 | `451837ba` | Success | 2026-07-21 17:40 |
| 29854353385 | `3eef0e1d` | Success | 2026-07-21 17:46 |
| _pending_ | `ae205497` | Ready to deploy (v1.1 translations) | — |

Each run builds the site with Hugo, synchronises to the S3 bucket and invalidates CloudFront distribution `ELHXIGVKWA8XV`.

**Rollback:** the previous site is recoverable from Git history. Checking out an earlier commit and running the deploy workflow restores it, as the bucket is synchronised from the build output rather than modified in place.

---

## 9. Acceptance and sign-off

The release described in this document has been delivered to the repository and tested as recorded in §5. Awanjasa submits it for BigLedger's acceptance.

**Recommendation:** accept. All open translation items from version 1.0 are closed; the site builds cleanly in all four languages at full content parity.

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by — Awanjasa | | | |
| Reviewed by — BigLedger | | | |
| Accepted by — BigLedger | | | |

**Acceptance decision:** ☐ Accepted ☐ Accepted with conditions ☐ Rejected

_Conditions or comments:_

<br><br>

---

<p align="center"><sub>Prepared by Awanjasa for BigLedger Sdn Bhd · UAT Report v1.1 · 22 July 2026</sub></p>
