---
name: ui-ux-pro-max
description: Pro-grade UI/UX design system & frontend guidelines for creating world-class, premium, modern, accessible, and dynamic web interfaces.
---

# UI/UX Pro Max Skill

This skill guides the design, layout, styling, and interactive behaviors of web applications to ensure a state-of-the-art, visually breathtaking, and highly responsive user experience.

---

## 🎨 1. Core Visual Aesthetics & Design System

- **Color Palette & Depth**:
  - Avoid raw browser colors (`red`, `blue`, `#ff0000`). Use curated HSL/Hex color palettes (e.g., Jet Black `#0A0A0A`, Dark Slate `#121212`, Surface `#171717`, Brand Red `#E60000`, Muted Text `#A1A1AA`).
  - Layer background surfaces with multi-tiered elevations: base background → surface card → floating overlay/modal.
  - Implement glassmorphism using `backdrop-blur-md`, subtle translucent backgrounds (`rgba(255, 255, 255, 0.05)` or `rgba(18, 18, 18, 0.8)`), and high-refraction 1px borders (`border-white/10` or `border-zinc-800`).

- **Typography System**:
  - Use modern, high-grade Google Fonts (e.g., *Plus Jakarta Sans*, *Inter*, *Outfit*, *Space Grotesk*).
  - Enforce clear typographic scale hierarchy (`text-xs` to `text-6xl`) with appropriate line-heights (`leading-tight` for titles, `leading-relaxed` for body).
  - Use high-contrast font weights (`font-semibold` or `font-bold` for headings, `font-normal` or `font-medium` for body text).

- **Gradients & Accents**:
  - Use subtle text gradients for primary hero headers (e.g., `bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent`).
  - Add radial ambient glows behind key CTA elements or hero sections (`bg-red-600/20 blur-3xl rounded-full`).

---

## ⚡ 2. Dynamic Micro-Interactions & Motion

- **State Transitions**:
  - Apply smooth transitions on all interactive elements (`transition-all duration-300 ease-out`).
  - Hover states: Lift cards on hover (`hover:-translate-y-1.5`, `hover:shadow-2xl hover:shadow-red-500/10`), highlight borders (`hover:border-zinc-700`).
  - Active states: Subtle shrink effect on click (`active:scale-95`).

- **Buttons & CTAs**:
  - **Primary CTA**: High-contrast brand accent, bold label, subtle hover glow, right-arrow icon with hover translation (`group-hover:translate-x-1`).
  - **Secondary/Outline CTA**: Translucent background, 1px border, smooth background color fill on hover.
  - **Ghost/Icon Button**: Rounded icon container with background highlight on hover (`hover:bg-zinc-800`).

- **Feedback & Loading**:
  - Use skeleton shimmer loaders (`animate-pulse bg-zinc-800/60`) during asynchronous data fetches.
  - Toast notifications and modal dialogs must use smooth enter/exit animations (`fade-in`, `zoom-in-95`, `slide-in-from-bottom-2`).

---

## 📐 3. Layout Architecture & Responsiveness

- **Container Boundaries**:
  - Center main page content with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
  - Use grid systems with responsive columns (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`).

- **Navigation & Headers**:
  - Glassmorphic sticky topbar (`sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-zinc-800/80`).
  - Clean mobile drawer/menu overlay with seamless toggle animation.

- **Form Controls & Inputs**:
  - High-contrast input fields (`bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500`).
  - Include inline field validation indicators (icons + descriptive helper text).

---

## ♿ 4. Accessibility & UX Standards

- **Keyboard & Screen Reader Support**:
  - Visible focus rings for keyboard navigation (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500`).
  - Add `aria-label` to icon-only buttons and descriptive `alt` tags to images.
- **Color Contrast**:
  - Ensure minimum 4.5:1 contrast ratio for normal body text against background colors.
- **Semantic HTML**:
  - Structure pages with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
