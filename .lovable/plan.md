## Hero redesign — centered stage with orbits behind

Rework `src/components/landing/MarketeamHero.tsx` so the headline and CTAs sit dead-center on a black canvas, with the orbiting circles as a full-bleed background layer.

### Changes

1. **Background**
   - Remove the `BG` image and the `background-image` on `.mkt-app`.
   - Set `.mkt-app` background to solid black (`#000`).

2. **Layout**
   - Collapse the two-column `.mkt-main` (left text / right orbits) into a single centered stage.
   - Orbits render as an absolutely-positioned background layer filling the section.
   - Headline + CTA row render in a centered foreground layer above the orbits, text-aligned center, constrained max-width so it stays readable inside the orbit rings.

3. **Orbits as background**
   - Keep the three `OrbitingCircles` layers (radii 110, 200, 290) and all avatars/animations exactly as-is.
   - The `.mkt-center` counter ("20k+ Specialists") sits at the true center — since text now occupies center, remove that counter block so the headline takes its place.
   - Orbits get `pointer-events: none` and a lowered z-index; foreground content sits on top.

4. **Foreground content**
   - Typewriter headline stays (same copy: "Elevate Your Brand with Cutting-Edge Digital Solutions"), centered.
   - Both buttons ("Get Started Today" + "View Our Portfolio") centered below headline, unchanged styling.
   - Dark text color on white segments no longer works over black — switch the typewriter's dark span to a muted white (e.g. `rgba(255,255,255,0.55)`) so both halves read on black; the completed portion stays full white.

5. **CSS cleanup**
   - Delete `.mkt-left`, `.mkt-right`, `.mkt-count`, `.mkt-count-label`, `.mkt-center` rules and related two-column responsive tweaks.
   - Add a `.mkt-stage` wrapper (relative, min-height 100vh, flex center) and `.mkt-orbits-bg` (absolute inset-0, grid-place-center).
   - Keep all orbit/avatar/button keyframes and animations intact.

### Out of scope
- No copy changes.
- No changes to orbit avatars, counts, or animation timings.
- No changes to any other section.