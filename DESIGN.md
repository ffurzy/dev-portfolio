# Brisbane Web Developer — Style Reference

> gallery wall in winter light. An achromatic, spacious portfolio on a warm bone-white canvas, with each project tile framed by soft brown-toned shadows and labeled in a whisper-thin display face.

**Theme:** light

Source: https://styles.refero.design/style/23d83a89-8f22-405a-aa33-74fd0ebde9d8

Carl Beaverson's portfolio operates on radical restraint: a warm off-white canvas, exclusively neutral tones, and a single accent typeface (Suisse Works) reserved for the smallest typographic moments. The entire system is achromatic — no brand color, no chromatic accent, no semantic hues. Hierarchy is built through scale jumps, tracking, and generous negative space rather than color or weight. Components float on warm-tinted brown shadows that subtly warm an otherwise cold minimalist grid. The reading order is content-first: three-up project tiles, tiny attribution text, and large section gutters that let each piece breathe independently.

## Tokens — Colors

| Name        | Value     | Token                 | Role                                                                                                               |
| ----------- | --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Bone Canvas | `#f4f3f1` | `--color-bone-canvas` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |
| Ink         | `#333333` | `--color-ink`         | Primary headings, button text, input text, high-contrast labels                                                    |
| Graphite    | `#4d4d4d` | `--color-graphite`    | Body text, paragraph copy, longer-form descriptions                                                                |
| Slate       | `#666666` | `--color-slate`       | Muted secondary text, tertiary metadata                                                                            |
| Ash         | `#aaaaaa` | `--color-ash`         | Subtle borders, dividers, light secondary text, project attribution labels                                         |
| Mist        | `#dddddd` | `--color-mist`        | Card surface lift from canvas, subtle background variation                                                         |

## Tokens — Typography

### system-ui, -apple-system, sans-serif — workhorse face

- **Substitute:** Inter, Helvetica Neue, Arial
- **Weights:** 400
- **Sizes:** 14px (inline meta), 15px (inputs/buttons), 20px (hero paragraph, project titles)
- **Line height:** 1.2–1.5

### Suisse Works Trial — editorial section label only

- **Substitute:** GT Sectra, Tiempos Text, Source Serif Pro
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.5
- **Letter spacing:** -0.038em
- **Role:** Reserved exclusively for the section label (e.g. '60 Selected Projects'). The only place the serif appears. Never larger than 13px.

### Type Scale

| Role       | Size | Line Height | Letter Spacing | Token               |
| ---------- | ---- | ----------- | -------------- | ------------------- |
| caption    | 13px | 1.5         | -0.49px        | `--text-caption`    |
| body       | 15px | 1.4         | —              | `--text-body`       |
| subheading | 20px | 1.2         | —              | `--text-subheading` |

## Tokens — Spacing & Shapes

**Density:** spacious

Spacing scale: 10, 15, 20, 30, 38, 40, 55, 65, 80, 98, 122, 127, 136, 141, 161, 190 (px)

Border radius: 5px uniformly (cards, tiles, inputs, buttons)

Shadow md: `rgba(90, 50, 40, 0.15) 0px 5px 15px 0px, rgba(80, 40, 30, 0.1) 0px 4px 8px 0px`

Layout: section gap 122px · card padding 0 · element gap 20px

## Components

### Project Tile Card

Container with no visible border, 5px radius. Background matches canvas. Centered project artwork, no padding — image fills tile. Warm brown shadow stack below artwork. Project title in 14px system sans, #333333, left-aligned below tile. 'Design by [studio]' in 14px system sans, #aaaaaa, right-aligned on same line.

### Project Grid

3 columns, 20px row gap, ~65px column gap. Tiles roughly equal width. 122px top margin from the section header.

### Section Header Label

13px Suisse Works, #aaaaaa, letter-spacing -0.038em. Left-aligned. The only place the serif appears.

### Hero Description Block

20px system sans, #4d4d4d, centered, max-width ~600px, line-height 1.2. No eyebrow, no headline — the paragraph is the hero.

### Minimal Top Navigation

Logo (circular monogram) left, nav links right. No background fill. Links 14px system sans, #aaaaaa.

### Nav Link

14px system sans, #aaaaaa. No underline, no hover background, no visible active state.

### Ghost Button

5px radius, transparent or #f4f3f1 fill, 1px border #333333 or #4d4d4d. 14–15px text #333333. Padding 10px/15px. No shadow.

### Image Container

No padding, image fills the tile edge to edge. Warm brown shadow. 5px radius on tile and image.

## Do's and Don'ts

### Do

- Use #f4f3f1 as the only background color for page, cards, and inputs — never pure white or pure gray
- Use 5px border-radius uniformly
- Use the warm brown shadow stack only beneath artwork and imagery — never on text blocks or nav
- Use 20px for element gaps and 122px for section gaps
- Use serif at 13px with -0.038em tracking for section labels — never larger
- Use #aaaaaa for all borders, dividers, and attribution text
- Keep the palette to the six neutral tokens

### Don't

- No chromatic color anywhere
- No cool gray shadows — warm brown undertone or none
- No serif above 13px
- No card padding around project artwork
- No borders to separate cards from canvas — rely on shadow
- No bold weights — 400 everywhere, hierarchy from size and color only
- No uppercase, no letter-spacing on body text, no decorative type

## Surfaces

| Level | Name          | Value                   |
| ----- | ------------- | ----------------------- |
| 0     | Canvas        | `#f4f3f1`               |
| 1     | Card Surface  | `#dddddd`               |
| 2     | Elevated Tile | `#f4f3f1` + warm shadow |

## Imagery

Photography and product screenshots, flat rectangular images with 5px corners. No illustrations, no abstract graphics, no icons in the UI. Monogram is the only graphic mark. No overlays, no color grading. Images ~40% of visual space.

## Layout

Full-bleed, no max-width container. Top bar: circular monogram left, two text links right. Hero: centered single paragraph in the upper third. 122px gap, tiny section label left-aligned, then 3-column grid (20px row gap, ~65px column gap). Tiles ~33% viewport width, metadata on one line below (title left, credit right). Nav featherlight, no background.

## Quick Start — CSS Custom Properties

```css
:root {
  --color-bone-canvas: #f4f3f1;
  --color-ink: #333333;
  --color-graphite: #4d4d4d;
  --color-slate: #666666;
  --color-ash: #aaaaaa;
  --color-mist: #dddddd;

  --font-sans:
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-serif: "Suisse Works", "Source Serif Pro", "Tiempos Text", Georgia, serif;

  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: -0.038em;
  --text-meta: 14px;
  --text-body: 15px;
  --leading-body: 1.4;
  --text-subheading: 20px;
  --leading-subheading: 1.2;
  --font-weight-regular: 400;

  --spacing-10: 10px;
  --spacing-15: 15px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-55: 55px;
  --spacing-65: 65px;
  --spacing-80: 80px;
  --spacing-98: 98px;
  --spacing-122: 122px;
  --spacing-127: 127px;
  --spacing-136: 136px;
  --spacing-141: 141px;
  --spacing-161: 161px;
  --spacing-190: 190px;

  --section-gap: 122px;
  --card-padding: 0px;
  --element-gap: 20px;
  --radius-md: 5px;
  --shadow-md:
    rgba(90, 50, 40, 0.15) 0px 5px 15px 0px, rgba(80, 40, 30, 0.1) 0px 4px 8px 0px;
}
```
