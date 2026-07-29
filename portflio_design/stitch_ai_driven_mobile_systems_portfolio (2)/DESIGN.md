---
name: Precision Engineering Portfolio
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is engineered to reflect the technical rigor and sophisticated problem-solving of a Computer Systems Engineer. It balances academic professionalism with modern high-tech innovation, avoiding the aggressive aesthetics of gaming interfaces in favor of a clean, research-oriented "Lab" aesthetic.

The visual language is rooted in **Corporate Modernism** with subtle **Glassmorphism** to signify depth and layered complexity. It prioritizes clarity, structural integrity, and logic, ensuring that complex technical projects are presented with breathable whitespace and precise alignment. The emotional response should be one of "trustworthy innovation"—the feeling of a high-end development environment or a modern aerospace interface.

## Colors
The palette is architectural and grounded. 
- **Primary (Deep Navy):** Used for headlines, primary navigation, and high-emphasis containers to establish authority.
- **Secondary (Vibrant Blue):** The "action" color, used for links, buttons, and highlighting key technical metrics. It represents the "pulse" of the system.
- **Tertiary (Slate Gray):** Employed for supporting text, borders, and secondary icons to provide hierarchy without visual noise.
- **Neutral (Off-White/Cool Gray):** The foundation of the UI, providing a low-strain background that enhances the readability of long-form technical documentation and code snippets.

## Typography
The typography system uses a tri-font approach to maximize technical clarity:
- **Hanken Grotesk** is used for headlines to provide a sharp, contemporary edge that feels "designed" yet highly professional.
- **Inter** handles the bulk of body copy, chosen for its exceptional legibility in technical contexts and neutral, systematic tone.
- **Geist** (or a similar high-quality monospaced font) is reserved for "Labels" and metadata—such as programming languages, hardware specs, and date ranges—to reinforce the engineering theme.

Large display type should use tighter letter-spacing to maintain a compact, "engineered" look, while labels use slightly increased tracking for better scanability.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px base unit. 
- **Desktop:** A 12-column grid with generous 80px margins and 24px gutters. Content is often offset or centered to allow whitespace to act as a separator between distinct engineering projects.
- **Tablet:** A 6-column grid with 40px margins.
- **Mobile:** A 2-column grid with 16px margins. 

Vertical spacing should be intentional; use `xl` (80px) spacing between major sections to prevent the technical density of the content from feeling overwhelming. Use `md` (24px) for internal component spacing to maintain a tight, organized structure.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Refined Glassmorphism** rather than traditional heavy shadows.
- **Base Layer:** The light neutral background.
- **Mid Layer (Cards):** Slightly elevated using a thin 1px border (`#E2E8F0`) and a very soft, high-diffusion shadow (Color: `Primary`, Opacity: 4%, Blur: 20px).
- **Overlay Layer (Modals/Navigation):** Uses a backdrop blur (12px) and semi-transparent white (80% opacity) to create a frosted-glass effect, suggesting a sophisticated, multi-threaded interface.

## Shapes
The shape language is "Refined Geometric." A standard radius of **8px to 12px** is applied to most UI containers. This provides a modern, approachable feel while maintaining the structural discipline of an engineering tool. 
- Buttons and small inputs use the 8px radius.
- Large project cards and sections use the 12px radius.
- Interactive tags or "chips" for technical skills may use a full pill-shape for distinct visual contrast against rectangular structural elements.

## Components
- **Buttons:** Primary buttons are solid Navy with white text. Secondary buttons use a ghost style with a 1px Slate border and Blue text on hover.
- **Project Cards:** Feature a subtle 1px border and a slight lift on hover. Technical tags (e.g., "RTOS", "Verilog") appear at the bottom in the `label-mono` style.
- **Input Fields:** Minimalist design with a 1px Slate border that transitions to the Secondary Blue on focus.
- **Data Visualizations:** Charts and technical graphs should use the Secondary Blue and Tertiary Slate colors exclusively to maintain a professional "instrument cluster" look.
- **Technical Lists:** Use a custom "chevron" or "node" icon rather than standard bullets to emphasize the systems-engineering theme.
- **Code Snippets:** Should be housed in a Deep Navy container with a "copy" button, using the monospaced label font for all content.