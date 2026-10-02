# ChiWei Feng — Personal Website

An interactive resume website with a 3D WebGL scene behind the content, deployed to GitHub Pages.

**Live:** https://chiwei82.github.io/personal_website/

## Tech Stack

| Area | Technology |
| --- | --- |
| UI framework | React 19 |
| Build tool | Vite 6 (`@vitejs/plugin-react`, `vite-plugin-glsl`) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| 3D rendering | Three.js, React Three Fiber, Drei |
| Shaders | Custom GLSL (vertex + fragment) |
| Icons | lucide-react |
| Analytics | Google Analytics 4, Google Tag Manager, react-ga4 |
| Linting | ESLint 9 |
| Deployment | GitHub Pages via `gh-pages` |

## Page Structure (top to bottom)

All source code lives in the [`site/`](site) folder. The page is assembled in [`src/App.jsx`](site/src/App.jsx). Components are listed in the order they appear on screen.

### 1. Animated Background — `components/three/BackgroundScene.jsx`
A fixed, full-screen React Three Fiber `<Canvas>` sitting behind all content (`z-0`).
- Renders a plane with a `THREE.ShaderMaterial` built from the shaders in [`components/three/shader/bgShader.jsx`](site/src/components/three/shader/bgShader.jsx).
- The fragment shader generates triangular-grid noise and animates it via an `iTime` uniform, updated every frame in `useFrame`.
- Opacity is controlled by a `uStrength` uniform written to the alpha channel, so the effect blends softly over the page's background colour.

**Tech:** React Three Fiber, Three.js, GLSL

### 2. 3D Hero — `components/three/objects/headerBox.jsx`
A second `<Canvas>` (perspective camera, FOV 45) at the top of the page.
- Floating **"HELLO WORLD"** 3D text made with Drei's `<Text3D>` and a custom typeface font ([`public/PSR.json`](site/public/PSR.json)), bobbing up and down with a sine wave.
- 100 randomly placed, continuously rotating icosahedrons. All of them share a single geometry and a single material instance.
- Uses a matcap texture (`useMatcapTexture`) for lighting-free shading, and `OrbitControls` so visitors can drag to rotate the scene.

**Tech:** React Three Fiber, Drei (`Text3D`, `Center`, `OrbitControls`, `useMatcapTexture`), Three.js

### 3. Resume Content — `components/Resume.jsx`
The main content layer (`z-10`), rendered above both canvases. Each block is wrapped in
[`ResumeSection.jsx`](site/src/components/ResumeSection.jsx), which provides consistent width (`max-w-3xl`), padding and an anchor `id`.

**Tech:** React, Tailwind CSS (responsive `md:` breakpoints)

#### 3a. Header
- Name and visa-eligibility line.
- **Age timer** — [`components/AgeTimer.jsx`](site/src/components/AgeTimer.jsx): a terminal-style live counter showing time since birth in years, days, hours, minutes and seconds, refreshed every second with `setInterval` inside `useEffect`.
- Contact line (email, phone, LinkedIn).
- **Icon links** — [`components/ui/TooltipLink.jsx`](site/src/components/ui/TooltipLink.jsx): Gmail, LinkedIn, LeetCode, GitHub and CV download, each with a hover tooltip. On click, it sends a `react-ga4` event: `Download / Resume_Download` for the CV, `Outbound Link / Click` for everything else.

**Tech:** React hooks, lucide-react, react-ga4

#### 3b. Summary
Short professional summary.

#### 3c. Experience
Roles rendered with a shared `EntryHeader` (title, period, location) followed by bullet points.

#### 3d. Education
Same `EntryHeader` + bullet layout for degrees, results and modules.

#### 3e. Additional Skills
Skills grouped into categories (Language, Programming Languages, Tools & Technologies), rendered as coloured pill chips from a `skillChunks` data array.

### 4. Footer — `src/App.jsx`
Copyright line with the current year computed at render time.

### Analytics — `index.html`
Not visible on the page. The GA4 `gtag.js` snippet and the Google Tag Manager container are loaded in `index.html`.

## Not Currently Rendered

These components are in the repo but are not mounted (imports or usages are commented out or removed):

| Component | Description |
| --- | --- |
| `components/Noise.jsx` | SVG `feTurbulence` film-grain overlay |
| `components/ui/TableOfContents.jsx` | Collapsible fixed menu with smooth-scroll to sections |
| `components/ui/HoverPreview.jsx` | Link text that shows an image following the cursor |
| `components/ui/contact.jsx` | Rotating circular "CONTACT ME" text (GSAP) around a 3D star model |

## Project Structure

```
site/
├── index.html                    # Analytics snippets, page title
├── vite.config.js                # Vite plugins and GitHub Pages base path
├── public/                       # Static assets: CV, 3D font, icons, images
└── src/
    ├── main.jsx                  # React entry point
    ├── App.jsx                   # Page layout: canvases, content, footer
    ├── index.css                 # Global styles (Tailwind)
    └── components/
        ├── Resume.jsx            # All resume content
        ├── ResumeSection.jsx     # Section wrapper
        ├── AgeTimer.jsx          # Live age counter
        ├── Noise.jsx             # (unused) noise overlay
        ├── three/
        │   ├── BackgroundScene.jsx
        │   ├── objects/headerBox.jsx
        │   └── shader/bgShader.jsx
        └── ui/
            ├── TooltipLink.jsx
            ├── HoverPreview.jsx      # (unused)
            ├── TableOfContents.jsx   # (unused)
            └── contact.jsx           # (unused)
```

## Getting Started

```bash
cd site
npm install
npm run dev       # start dev server (exposed on the local network via --host)
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
npm run deploy    # build and publish dist/ to GitHub Pages
```

The Vite `base` is set to `/personal_website/` to match the GitHub Pages path.
