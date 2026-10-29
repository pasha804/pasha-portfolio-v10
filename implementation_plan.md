# Hero Section & Navbar Visual Enhancements

Refining the Hero section and Navbar according to the user's voice instructions, featuring wide grid alignment, typography update, anime dev avatar integration, interactive card hover animations, background particle field, and cursor background glow.

## User Review Required

> [!NOTE]
> All requested changes are visual and interactive enhancements. No backend or API changes are required.

- **Navbar Alignment**: The navbar width will increase from `max-w-5xl` to `max-w-6xl` (matching the Hero container with `px-5 md:px-10`), aligning the "Pasha Dev" logo precisely with the left edge of "Available for select projects" and "AI Full Stack Developer", while pushing the navigation links and "Let's Talk" button to the right.
- **Anime Dev Avatar**: An anime developer boy avatar with dark cyber/studio aesthetic and cyan/violet neon accents will replace the missing placeholder `MM` in the hero card.
- **Heading Font**: "AI Full Stack Developer" will be styled with `Arial, sans-serif`.
- **Floating Badges**: The floating pills (`REACT`, `PYTHON`, `FASTAPI`, `AI`, `POSTGRESQL`) will be removed.
- **Scroll Indicator**: "Scroll to explore" text and arrow will be removed.
- **Hover Animation**: The profile card will feature an interactive 3D tilt, subtle scale-up, animated border glow, and internal image zoom upon hover.
- **Background Particles & Cursor Glow**: Smooth drifting particles will animate in the ambient background, and an ambient radial glow spotlight will track the mouse pointer smoothly in the background.

---

## Proposed Changes

### Navigation

#### [MODIFY] [Navbar.tsx](file:///d:/pasha-dev-studio-main/pasha-dev-studio-main/src/components/Navbar.tsx)
- Update header container to `px-5 md:px-10` and `nav` width to `max-w-6xl` to align flush with the hero content.
- Ensure `Pasha Dev` brand is pinned to the left edge of the grid and the nav items / "Let's Talk" button are pinned to the right edge.

---

### Hero Section & Profile Visual

#### [MODIFY] [Hero.tsx](file:///d:/pasha-dev-studio-main/pasha-dev-studio-main/src/components/Hero.tsx)
- Update `h1` heading to use `font-family: Arial, sans-serif;` with bold weight and crisp tracking.
- Remove `LABELS` array and the floating technology badge elements.
- Remove the "Scroll to explore" indicator anchor at the bottom.
- Enhance the profile visual card container with interactive hover effects:
  - Spring-driven hover scale (`whileHover={{ scale: 1.03 }}`).
  - Dynamic glowing border and soft sheen highlight on hover.
  - Image scale transition on group hover.

#### [NEW] [anime_dev.png](file:///d:/pasha-dev-studio-main/pasha-dev-studio-main/public/images/anime_dev.png)
- Generate a high-resolution, cyber-aesthetic anime developer boy avatar using `generate_image`.
- Place the asset in `public/images/anime_dev.png`.

#### [MODIFY] [ProfileImage.tsx](file:///d:/pasha-dev-studio-main/pasha-dev-studio-main/src/components/ProfileImage.tsx)
- Update `PROFILE_SRC` to `/images/anime_dev.png`.
- Ensure graceful loading with smooth fade-in and high-resolution rendering.

---

### Background & Ambient Effects

#### [MODIFY] [Ambient.tsx](file:///d:/pasha-dev-studio-main/pasha-dev-studio-main/src/components/Ambient.tsx)
- Implement an animated particle field with smooth floating/drifting motion, varying particle sizes, and soft glowing opacity.

#### [MODIFY] [Cursor.tsx](file:///d:/pasha-dev-studio-main/pasha-dev-studio-main/src/components/Cursor.tsx)
- Add a soft ambient radial glow spotlight in the background (using spring-smoothed coordinates `rx`, `ry`) with cyan/violet luminescence that illuminates the background behind the cursor.

---

## Verification Plan

### Automated / Build Verification
- Run `npm run build` or Vite check to confirm TypeScript and JSX compile without errors:
  ```powershell
  npm run build
  ```

### Manual Verification
- Open browser at `http://localhost:8080` (or active dev server port) using `browser_subagent`.
- Verify:
  1. Navbar logo aligns with the left margin of the hero text; nav links & CTA button align with the right margin.
  2. "AI Full Stack Developer" renders in Arial font.
  3. "Scroll to explore" text and arrow are gone.
  4. Anime boy dev avatar displays crisp and centered in the card.
  5. Floating badges (React, Python, etc.) are removed.
  6. Hovering over the profile card triggers 3D tilt, subtle scale, and glowing border animation.
  7. Background displays drifting animated particles.
  8. Cursor displays a soft, smooth background glow following pointer movement.
