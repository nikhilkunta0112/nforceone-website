# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server on port 3000 (auto-opens browser)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

There is no lint or test setup in this project. The only verification step is a clean `npm run build` (0 compilation errors) after structural edits.

## Project summary

NForceOne marketing/corporate website — "Scale at Speed". React 18 + Vite SPA styled with the **Tailwind CDN script** (config is inline in `index.html`, not a `tailwind.config.js` file — there is no PostCSS build step for styles). Animations use `framer-motion`.

## Architecture

This is a single-page app with **no router library** — `src/App.jsx` is a hand-rolled state router:
- `currentTab` (string) selects which view renders: `home`, `services`, `service-detail`, `industries`, `industry-detail`, `about`, `careers`, `contact`, `case-study-detail`.
- `selectedService` / `selectedIndustry` / `selectedCaseStudy` hold the object passed into the three detail views.
- `navigateToService(service)` / `navigateToIndustry(industry)` / `navigateToCaseStudy(caseStudy)` set the selected object, switch `currentTab`, and smooth-scroll to top. Views call these callbacks (passed down as props) rather than using links/URLs.
- There is no URL sync — tab state is not reflected in the browser address bar or history.

### Layout (persistent chrome in `App.jsx`)
- `src/components/layout/Navbar.jsx` — top navigation with mega-menu dropdowns for Services and Industries
- `src/components/layout/Footer.jsx` — Solace-style footer; requires `setCurrentTab` prop
- `src/components/layout/footer.css` — all Footer styles (imported by `Footer.jsx`); manages the wordmark stage, panel grid/glow, brand column, nav columns, social icons, and responsive breakpoints

### Views (`src/components/views/`)
- `HomeView.jsx` — home page: hero slider, metric bar, ParallaxFeatureSection, ScaleAtSpeedSection, CoreSolutionsGrid, CaseStudySection, IndustryCardGrid, TestimonialsSection, AuditForm
- `ServicesView.jsx` / `ServiceDetailView.jsx` — services listing and detail
- `IndustriesView.jsx` / `IndustryDetailView.jsx` — industries listing and detail
- `AboutView.jsx` — about page
- `CareersFaqView.jsx` — careers/FAQ
- `ContactView.jsx` — contact page
- `CaseStudyDetailView.jsx` — case study deep-dive

### Shared components (`src/components/common/`)
- `ParallaxFeatureSection.jsx` — 4-card "What We Do" section. First card (index 0) renders a custom inline SVG arrow instead of a Lucide icon so the directional rotation animation works cleanly. All cards use `.feature-card` / `.feature-icon` CSS classes; first card also uses `.feature-arrow-icon`.
- `ScaleAtSpeedSection.jsx` — brand promise banner (dark background image, 3-column grid: copy, team photo, stats). Background: `public/images/scale_at_speed_bg_dark.png`. Accepts `onExplore` prop.
- `CoreSolutionsGrid.jsx` — bento-style grid of 8 core solutions
- `IndustryCardGrid.jsx` — featured industry cards
- `CaseStudySection.jsx` — case study carousel/grid
- `TestimonialsSection.jsx` — rotating testimonials
- `AuditForm.jsx` — contact/consultation form (dark background, do not assume light theme)

### Data files (`src/data/`)
- `servicesData.js` — `servicesList` (6 categories) + `allSubservicesList` (~30 subservices)
- `industriesData.js` — `industriesList` (12 live-site industries + "Healthcare & Telemedicine")
- `caseStudiesData.js` — `caseStudiesList`
- `contactData.js` — `contactData.offices` (Hyderabad + Plano), contact email `admin@nforceone.com`
- `careersData.js` — careers/FAQ data
- `aboutData.js` — about page data

`ServiceDetailView` / `IndustryDetailView` / `CaseStudyDetailView` render purely from their data-file object shape — adding a new entry means editing the data file, not creating a new component.

### Content reference
- `public/images/` — all image assets (see key assets below)
- `content/Pages/*.md` — crawl of the live production site (nforceone.com), used as copy source. `content/README.md` documents known live-site content issues. The crawl is larger than the implementation: 30 flat service pages vs. 6 grouped categories here.

## Design system

### Brand colors
Defined in the inline `tailwind.config` block in `index.html` under the `nforce` namespace:

| Token | Hex |
|---|---|
| `nforce.red` | `#910000` |
| `nforce.redHover` | `#910000` |
| `nforce.redDark` | `#910000` |
| `nforce.black` | `#0A0A0A` |
| `nforce.darkSlate` | `#121212` |
| `nforce.cardDark` | `#171717` |
| `nforce.lightBg` | `#FAFAFA` |
| `nforce.border` | `#E5E7EB` |
| `nforce.borderDark` | `#262626` |

To add or change a color token, edit the `tailwind.config` script block in `index.html` — there is no `tailwind.config.js` file.

### Fonts
Plus Jakarta Sans (primary), Inter (fallback), loaded via Google Fonts in `index.html`.

### Icons
`lucide-react` throughout.

### CSS utility classes (defined in the `<style>` block in `index.html`)
- `.card-hover` / `.card-hover:hover` — lift + red shadow transition for light-bg cards
- `.btn-hover` / `.btn-hover:active` — button press scale
- `.animate-marquee-scroll` — infinite horizontal marquee (logo reel etc.)
- `.no-scrollbar` — hides scrollbar cross-browser
- `.feature-card` — "What We Do" cards: scale + red shadow on hover, `overflow: hidden`
- `.feature-card .feature-icon` — icon inside a feature card: scale + rotate + turns white on hover
- `.feature-card .feature-arrow-icon` — first-card arrow override: starts at `rotate(-45deg)` (pointing up-right), rotates to `rotate(0deg)` (pointing right) on hover. Applied in addition to `.feature-icon`. CSS order matters: `.feature-arrow-icon` rules are placed after `.feature-icon` rules to win the specificity tie.
- All animations respect `@media (prefers-reduced-motion: reduce)`.

### Global body
`html, body` have `overscroll-behavior: none` (no rubber-band scroll bounce).

## Key image assets (`public/images/`)

Hero slider images:
- `hero_night_skyline.png` — slide 1 (Hyderabad night skyline)
- `hero_quality_engineering.jpg` — slide 2
- `hero_ai_cloud_data.jpg` — slide 3

Section backgrounds:
- `scale_at_speed_bg_dark.png` — ScaleAtSpeedSection background (dark with diagonal red stripe + square corner decorations)
- `scale_at_speed_bg.png` — original (unused)
- `scale_at_speed_bg_circle.png` — alternate circle-center design (unused)

Other notable assets:
- `nforceone_logo_transparent.png` — Footer logo (transparent bg, white mark)
- `nforceone_logo.jpg` — favicon source
- `team_collaboration.jpg` — ScaleAtSpeedSection center image

## Footer

The footer (`Footer.jsx` + `footer.css`) is a Solace-style design:
- Giant stroke wordmark ("NForceOne") above the panel — CSS class `.site-footer-wordmark-stage` / `.site-footer-wordmark`
- Dark panel with animated grid texture and radial glow — `.site-footer-panel`
- Brand column: logo, tagline, pill action buttons, social icons, copyright — `.site-footer-brand`
- Nav columns: Services, Company, Connect (with offices from `contactData`) — `.site-footer-nav`
- Internal navigation uses `<button onClick>` (not `<a href>`) because this is a no-router SPA
- `.site-footer-inner` uses `max-width: 1280px; padding: 76px 24px` to match the navbar's `px-6` container — do not use `width: calc(100% - Npx)` patterns or the footer logo will misalign with the navbar logo
- Social links (confirmed): LinkedIn `linkedin.com/company/nforceone`, Instagram `instagram.com/nforce_one/`, X `x.com/NForceOneonX`, YouTube `youtube.com/@socialmedia_NforceOne`

## Hero section

The hero is a 3-slide image slider in `HomeView.jsx`:
- Auto-advances every 8 seconds
- Crossfades between slides (1000ms opacity transition)
- Prev/Next buttons + dot indicators at the bottom
- Each slide: background image with a left-dark gradient overlay for text legibility
- Slide images live in `heroSlides` array inside `HomeView.jsx` — to swap a hero image, update the `image` field there and put the new file in `public/images/`

## Working in this repo

- Keep UI in `src/components/`, datasets in `src/data/` — do not bloat `App.jsx` with view logic or content.
- Because Tailwind runs via the CDN script rather than a build step, new color/theme tokens are added by editing the inline `tailwind.config` block in `index.html`, not a config file.
- Custom CSS that cannot be expressed in Tailwind utilities goes in a co-located `.css` file imported by the component (see `footer.css`), not in a global stylesheet.
- Never use the em dash character (`—`) in any content written for this project (UI copy, JSX text, data files, comments, commit messages). Use a period, comma, colon, or hyphen instead, depending on context. See the `no-em-dashes` skill for a scan/fix tool covering existing usage.
- When adapting external component specs (shadcn, Radix, TypeScript interfaces), convert to plain JSX. Do not install TypeScript, shadcn, or Radix.
- Image file names: use `snake_case`. Avoid spaces or `&` in filenames before wiring into data files.
- Only `main` branch exists locally. No per-person branches.
