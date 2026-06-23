# Refactor and Improve About Section (Arabic + Responsive)

This plan details the changes to update the About section to use the `oi-regular` font and the glowing `h1 span` shadow styles for its title, improve the layout and mobile responsiveness of both the text and the 3D Canvas element, and refine the Arabic copy.

## Proposed Changes

### About Section Component

#### [MODIFY] [About.tsx](file:///d:/Projects/arabic%20portifilo/my-app/components/sections/About.tsx)
- **Title Design**:
  - Replace the `SplitTextReveal` for the title with a structured `h1` element containing a `<span>` to inherit the glowing neon text-shadow from `globals.css` (`h1 span`).
  - Set its className to `text-4xl md:text-6xl font-bold oi-regular mb-16 text-center`.
- **Responsive Layout Improvements**:
  - Update the grid columns from `grid md:grid-cols-2` to `grid lg:grid-cols-12 gap-12 items-center` for finer responsive layout control (e.g. 5 columns for the 3D Canvas, 7 columns for the text on large screens).
  - Adjust the 3D Canvas container height: change it from `h-[400px] md:h-[500px]` to `h-[250px] sm:h-[350px] lg:h-[450px]` so it doesn't push down the text excessively on mobile and tablet devices.
  - Set the text column alignment: text-alignment to `text-center lg:text-right` and block alignments (`mx-auto lg:mx-0`) so it scales beautifully on all screens.
- **Copy & Feature Highlights**:
  - Update the text to standard, elegant, and professional Arabic.
  - Add 3 modern feature highlights under the text with custom glassmorphism styling and Lucide icons:
    - ⚡ **أداء فائق السرعة** (Ultra-fast performance)
    - 🎨 **تصميم تفاعلي مبهر** (Stunning interactive design)
    - 📱 **تجاوب كامل** (Fully responsive)
  - Style the skills tags at the bottom with a modern purple hover border.

## Verification Plan

### Automated Checks
- Run `npm run build` to verify there are no TypeScript compile errors or CSS warnings.

### Manual Verification
- Test viewport widths between 320px and 1440px to ensure the 3D sphere container scales proportionally and the text layout adapts cleanly.
- Verify that the title successfully displays the glow effects.
