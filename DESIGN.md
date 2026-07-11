---
name: Earl Joseph Claro — Portfolio
description: A warm, personal developer portfolio that earns trust through craft, not template.
colors:
  terracotta: "#C0562E"
  terracotta-deep: "#9A421F"
  ochre: "#CA8A47"
  ink: "#1C1917"
  graphite: "#44403C"
  stone: "#78716C"
  border: "#E7E5E4"
  surface: "#FFFFFF"
  canvas: "#FBFAF8"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta-deep}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "28px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.full}"
    padding: "5px 12px"
---

# Design System: Earl Joseph Claro — Portfolio

## 1. Overview

**Creative North Star: "The Craftsman's Desk"**

This is a portfolio built like the workspace of someone who cares about how things are made: warm, unhurried, and quietly precise. Terracotta and warm stone do the work of a well-worn leather desk pad and a good pen; a serif display voice carries the human warmth; a clean sans and a deliberate monospace keep the actual work legible and honest. Nothing here shouts. The confidence comes from restraint and from letting real work — real metrics, real projects — sit in the light. A busy recruiter should feel, within five seconds, that a specific, capable person made this on purpose.

The system explicitly rejects the generic AI-portfolio template: the sky-blue gradient hero, muted gray text floating on a tinted near-white, and the endless grid of identical icon-heading-text cards. It rejects the cold, buzzword-heavy corporate-SaaS register, and it rejects clutter — walls of text, cramped screens, decoration standing in for substance. Warmth is carried by **color and type, never by a beige background**. The cream/sand/paper body fill is the saturated AI default of 2026 and is forbidden here; the base is a true off-white, and the warmth lives in the terracotta accent and the Spectral headings.

**Key Characteristics:**
- Warm accent on a clean base — terracotta and warm-stone neutrals, never cream
- Serif display (Spectral) + clean sans body (Hanken Grotesk) + deliberate mono (JetBrains Mono) for metrics
- Flat by default; depth is a response to state, not a resting decoration
- High-contrast, WCAG AA text everywhere — no light-gray-on-tint
- Accent used sparingly (~≤15% of any screen); its restraint is the point

## 2. Colors

A warm, earthy palette: one committed terracotta accent over a family of warm-stone neutrals on a true off-white base. Monochromatic warmth, not a rainbow of category colors.

### Primary
- **Terracotta** (`#C0562E`, `oklch(58% 0.13 42)`): the single brand accent. Links, the short heading rule, active nav state, icon glyphs, and small emphatic marks. Used deliberately and sparingly.
- **Deep Terracotta** (`#9A421F`, `oklch(48% 0.13 42)`): the accent at working contrast — solid button fills and any terracotta surface that carries text. Passes AA against white/canvas where the lighter terracotta would not.

### Secondary
- **Ochre** (`#CA8A47`, `oklch(68% 0.10 68)`): a warm highlight for proof moments only — the leading digit of a metric, a subtle underline on a number. Never a second general-purpose accent.

### Neutral
- **Ink** (`#1C1917`, `oklch(23% 0.007 55)`): primary headings and any drenched dark surface (footer, a dark CTA band). Warm near-black, never pure `#000`.
- **Graphite** (`#44403C`, `oklch(37% 0.006 60)`): body text. ~9:1 on canvas — the reading workhorse.
- **Stone** (`#78716C`, `oklch(55% 0.008 60)`): meta and secondary labels (dates, locations). ~4.7:1 on canvas — acceptable for meta and large text; **never** for long body copy.
- **Border** (`#E7E5E4`, `oklch(92% 0.003 60)`): hairline dividers and card outlines. 1px only.
- **Surface** (`#FFFFFF`): cards and raised panels — a clean white lifting off the warm canvas.
- **Canvas** (`#FBFAF8`, `oklch(98% 0.003 70)`): the body background. A true off-white with a whisper of warmth toward the accent hue — **not** cream, sand, or paper.

### Named Rules
**The One Voice Rule.** Terracotta appears on ≤15% of any given screen. If a section has more than a couple of terracotta marks, one of them is decoration — remove it. The accent earns attention by being rare.

**The Warmth-From-Color Rule.** Warmth comes from the terracotta accent and the Spectral headings. The moment warmth is reached for in the *background* — a cream, sand, or paper fill — the design has defaulted. The base stays a true off-white.

## 3. Typography

**Display Font:** Spectral (with Georgia, serif fallback)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** A high-contrast literary serif paired against a warm humanist grotesk — a genuine contrast-axis pairing (serif + sans), not two lookalike sans fighting each other. Neither is a training-data reflex font. Spectral carries the personality and the editorial warmth in the headings; Hanken Grotesk keeps the substance calm, warm, and legible; JetBrains Mono signs the work as a builder's, used only where a technical, tabular voice is right.

### Hierarchy
- **Display** (Spectral, 500 weight, `clamp(2.5rem, 6vw, 4.5rem)`, line-height 1.05, letter-spacing -0.02em): the hero name and the single biggest statement per page. Ceiling is 4.5rem — the page presents, it does not shout.
- **Headline** (Spectral, 500 weight, `clamp(1.75rem, 3.5vw, 2.5rem)`, line-height 1.15): section titles ("Professional Experience", "About").
- **Title** (Hanken Grotesk, 600, 1.25rem, line-height 1.3): card and block titles (a role, a school, a skill group).
- **Body** (Hanken Grotesk, 400, 1.0625rem, line-height 1.65): all reading copy. Cap measure at 65–75ch.
- **Label** (JetBrains Mono, 500, 0.8125rem, letter-spacing 0.06em, often uppercase): dates, metric units, and technical tags. Deliberate and occasional.

### Named Rules
**The Earned-Kicker Rule.** No tiny uppercase tracked eyebrow above every section. A mono label is allowed only where it carries real information (a date, a metric unit, a technology name) — never as decorative scaffolding on top of a heading.

**The Balance Rule.** `text-wrap: balance` on the display and headline levels; `text-wrap: pretty` on body prose. Test hero and heading copy at every breakpoint — if a heading overflows, lower the clamp max or rewrite the line before shipping.

## 4. Elevation

Flat by default. Surfaces rest on the canvas with a 1px `border` hairline, not a shadow. Depth is a *response to state* — a card lifts on hover, a focused control gains a ring — and it uses a soft, warm-tinted shadow, never a hard gray drop. The footer and any dark CTA band get their depth from tonal contrast (ink on canvas), not from shadow. This is the opposite of the current build's `shadow-md`-at-rest-everywhere, which reads as generic and heavy.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 8px 24px -8px rgba(28, 25, 23, 0.18)`): a card or interactive tile on hover, paired with a ~2px upward translate. Warm-tinted (built on ink `#1C1917`), never a neutral-gray box shadow.
- **Focus ring** (`box-shadow: 0 0 0 3px rgba(192, 86, 46, 0.35)`): keyboard focus on interactive elements, in terracotta. Always visible, never removed.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. If a card has a shadow before the user has touched it, delete the shadow and add the hairline border instead. Shadows are earned by hover and focus.

## 5. Components

### Buttons
- **Shape:** gently squared corners (`sm`, 6px). Not pills, not sharp.
- **Primary:** Deep Terracotta fill (`#9A421F`) with canvas text, 14px/28px padding. White-on-deep-terracotta clears AA; the lighter terracotta does **not** and must not be used as a text-bearing fill.
- **Hover / Focus:** primary deepens toward Ink (`#1C1917`) on hover with a subtle lift; a 3px terracotta focus ring on `:focus-visible`. Transitions ~180ms, ease-out.
- **Ghost (secondary):** transparent on canvas, Ink text, 1px `border` hairline; border and text shift to terracotta on hover. This replaces the current outlined-primary-blue button.

### Chips (skill / language tags)
- **Style:** Surface white with a 1px `border` hairline, Graphite text, `full` radius, 5px/12px padding, mono or sans label.
- **State:** one restrained treatment for all tags. **Do not** color-code categories with seven different pastel backgrounds (the current `bg-blue-100`/`bg-green-100`/… scheme) — that's the rainbow-slop tell. Differentiate groups by their heading, not by chip color.

### Cards / Containers
- **Corner Style:** `md` (10px).
- **Background:** Surface white on the Canvas body; alternate sections by canvas vs. a barely-deeper warm tint, not by white vs. `gray-50`.
- **Shadow Strategy:** flat at rest (see Elevation) — 1px `border` hairline. Hover lift only on interactive cards.
- **Border:** 1px `border` (`#E7E5E4`). **No colored side-stripe.**
- **Internal Padding:** `lg`–`xl` (24–32px). Give content room; density is the enemy here.

### Inputs / Fields
- **Style:** Surface background, 1px `border` hairline, `sm` radius, Graphite text.
- **Focus:** terracotta 3px ring plus a border shift to terracotta. No removed outlines.

### Navigation
- **Style:** fixed top bar, transparent over the hero, transitioning to Canvas at ~90% opacity with `backdrop-blur` and a hairline bottom border on scroll.
- **Typography:** Hanken Grotesk, Graphite links; active/hover shifts to terracotta.
- **Mobile:** disclosure menu; full-size tap targets, same terracotta active state.

### Section Heading (signature)
- A Spectral headline with a **single short terracotta rule** (~2px × 40px) as its only ornament. Left-aligned by default for an editorial, personal feel; center only when a section genuinely calls for it. This is the one place the accent bar lives — not repeated as identical centered underlines on every section.

## 6. Do's and Don'ts

### Do:
- **Do** carry warmth through the **Terracotta accent and Spectral headings** on a true off-white **Canvas** (`#FBFAF8`).
- **Do** keep body text at **Graphite** (`#44403C`) or darker — every text/background pair clears **WCAG AA** (body ≥4.5:1, large ≥3:1).
- **Do** use **Deep Terracotta** (`#9A421F`) for any terracotta surface that holds text; reserve the lighter Terracotta for thin marks and glyphs.
- **Do** keep surfaces **flat at rest** with a 1px hairline border; let shadows appear only on hover/focus.
- **Do** use **JetBrains Mono** deliberately for metrics, dates, and tech tags — lean into the builder identity where it carries real information.
- **Do** hold the accent to **≤15%** of any screen (The One Voice Rule).
- **Do** lead with the real proof — 90+ tasks, 85% PR approval, zero critical bugs — as typographic moments, not as a gradient hero-metric block.

### Don't:
- **Don't** ship the **generic AI template**: the blue-gradient hero, muted gray text on tinted near-white, or grids of identical icon-heading-text cards. This is the site's core anti-reference.
- **Don't** use a **cream, sand, paper, or beige body background**, or token names like `--paper`/`--cream`/`--sand`. Warmth is never carried by the base fill.
- **Don't** use a **colored `border-left`/`border-right` side-stripe** (the current `border-l-4 border-primary-500` on experience cards is exactly this). Use full hairline borders or nothing.
- **Don't** color-code chips/tags with a **rainbow of pastel backgrounds** (`bg-blue-100`, `bg-green-100`, `bg-purple-100`, …). One restrained tag style; differentiate by grouping.
- **Don't** feel **corporate, stiff, or buzzword-heavy**, and don't crowd the screen — no walls of text, no cramped sections.
- **Don't** use **gradient text**, decorative **glassmorphism**, the **hero-metric template**, a **tiny uppercase eyebrow** on every section, or **numbered `01 / 02 / 03`** section markers.
- **Don't** put a **shadow on a card at rest** or let heading copy **overflow** its container at any breakpoint.
