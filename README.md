# Danidu Wijegunawardhana — Portfolio (Static HTML/CSS/JS)

This is a plain HTML, CSS, and vanilla JavaScript conversion of the original
TanStack Start / React portfolio. No build step, no framework — just open
`index.html` in a browser, or deploy the folder as-is to any static host
(GitHub Pages, Netlify, Vercel, etc.).

## Structure

```
index.html        Markup for all sections
css/styles.css     All styling — same oklch color tokens, glass/glow
                   effects, and animations as the original design system
js/data.js         All content (skills, projects, education, contact, etc.)
                   — edit this file to update text without touching HTML
js/main.js         Rendering + interactions (typing effect, scroll reveals,
                   counters, nav, ripple buttons, contact form)
js/chatbot.js      Simple rule-based FAQ chat widget
assets/            Placeholder profile image + CV file
```

## What was recreated vs. what's a placeholder

The original project referenced two component files and two binary assets
that weren't included when this was converted, so they were rebuilt/replaced:

- **`Background.tsx` (AnimatedBackground, CursorGlow, ScrollProgress)** →
  recreated in CSS/JS (`#bg-layer` blobs, `#cursor-glow`, `#scroll-progress`
  in `styles.css` / `main.js`). Same palette, different implementation.
- **`Chatbot.tsx`** → recreated as a small rule-based FAQ bot
  (`js/chatbot.js`) that answers from `data.js`. It's not connected to a
  real AI backend — swap in a real API call if you want live answers.
- **`assets/profile.jpeg`** → replaced with `assets/profile-placeholder.svg`
  (a simple "DW" monogram). Drop in your real photo and update the `src`
  in `index.html`.
- **`assets/cv.pdf`** → replaced with `assets/cv-placeholder.txt`. Add your
  real CV and update the two `href`/`download` attributes in `index.html`.

## Editing content

Almost everything text-related lives in `js/data.js` — skills, projects,
education, experience, coursework, and contact details are all plain
arrays/objects there.

## Deploying to GitHub Pages

1. Push this folder to a repo.
2. Repo Settings → Pages → set source to the branch/folder containing
   `index.html`.
3. Done — no build step required.
