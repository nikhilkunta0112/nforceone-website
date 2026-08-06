# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server on port 3000 (auto-opens browser)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

There is no lint or test setup in this project. The only verification step is a clean `npm run build` (0 compilation errors) after structural edits.

## Project summary

NForceOne marketing/corporate website — "Scale at Speed". React 18 + Vite SPA styled with the **Tailwind CDN script** (config is inline in `index.html`, not a `tailwind.config.js` file — there is no PostCSS build step for styles).

## Architecture

This is a single-page app with **no router library** — `src/App.jsx` is a hand-rolled state router:
- `currentTab` (string) selects which view renders: `home`, `services`, `service-detail`, `industries`, `industry-detail`, `about`, `careers`, `contact`.
- `selectedService` / `selectedIndustry` hold the object passed into the two detail views.
- `navigateToService(service)` / `navigateToIndustry(industry)` set the selected object, switch `currentTab`, and smooth-scroll to top. Views call these callbacks (passed down as props) rather than using links/URLs.
- There is no URL sync — tab state is not reflected in the browser address bar or history.

Structure:
- `src/components/layout/` — `TopUtilityStrip`, `Navbar`, `Footer` (persistent chrome, rendered once in `App.jsx` around the routed view)
- `src/components/views/` — one component per `currentTab` value, plus `ServiceDetailView`/`IndustryDetailView` for the detail pages
- `src/components/common/` — shared widgets, e.g. `AuditForm.jsx`
- `src/data/servicesData.js` — `servicesList`: the 6 top-level service categories, each with a `subservices` array of the ~30 individual service names shown across the site
- `src/data/industriesData.js` — `industriesList`: the vertical/industry solutions (fintech, healthcare, ISV, retail, telecom, etc.), each with `compliance` and `solutions` arrays
- `ServiceDetailView`/`IndustryDetailView` render purely from the `selectedService`/`selectedIndustry` object shape defined by these two data files — adding a new service/industry means adding an entry to the data file, not a new component
- `public/images/` — the fixed set of images referenced by `image` fields in the data files
- `content/Pages/*.md` — a reference crawl of the **live production site** (nforceone.com), one file per page, used as source copy/content when building or updating views. `content/README.md` documents known content issues on the live site (placeholder text, mismatched headings, duplicated boilerplate, broken links) — useful context when a view's copy looks inconsistent, since it may be intentionally replicating (or fixing) a known live-site issue rather than a local bug.
- The crawl is larger than what's implemented: the live site has 30 flat service pages, but `servicesData.js` groups them into 6 categories (~35 subservice names, not all 30 titles verbatim). Don't assume "add from content/" work is already done — check the data file first. (`industriesData.js` now covers all 12 live-site industries plus a locally-invented "Healthcare & Telemedicine" entry not present in the crawl.)

## Design system

- Brand colors (defined in `index.html`'s inline Tailwind config, namespace `nforce`): `nforce.red` `#E60000`, `redHover` `#CC0000`, `redDark` `#990000`, `black` `#0A0A0A`, `darkSlate` `#121212`, `cardDark` `#171717`, `lightBg` `#FAFAFA`, `border` `#E5E7EB`, `borderDark` `#262626`
- Font: Plus Jakarta Sans (falls back to Inter), loaded via Google Fonts in `index.html`
- Style: high-contrast dark/light sections, glassmorphic headers, card hover scale/shadow via the `.card-hover` and `.btn-hover` utility classes defined in `index.html`
- Icons: `lucide-react`

## Working in this repo

- Keep UI in `src/components/`, datasets in `src/data/` — do not bloat `App.jsx` with view logic or content.
- Because Tailwind runs via the CDN script rather than a build step, new color/theme tokens are added by editing the inline `tailwind.config` block in `index.html`, not a config file.
- Never use the em dash character (`—`) in any content written for this project (UI copy, JSX text, data files, comments, commit messages). Use a period, comma, colon, or hyphen instead, depending on context. See the `no-em-dashes` skill for a scan/fix tool covering existing usage.
