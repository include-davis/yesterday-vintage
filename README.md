# Yesterday Vintage (Include Cohort)

Next.js (App Router) site for Yesterday Vintage.

---

## Tech Stack

- Next.js (App Router)
- React (JSX)
- SCSS Modules + Global SCSS (tokens + fonts + mixins)
- Fonts: Alte Haas Grotesk (body, local, freeware) and Inclusive Sans
  (display, via `next/font/google`, OFL)

Pages: Home, About, Events, FAQ. Content for events, FAQ and the social
images comes from the headless CMS at `NEXT_PUBLIC_CMS_BASE_URL`; every fetch
has a hardcoded fallback so the site still renders if the CMS is down.

---

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the dev server

```bash
npm run dev
```

### 3) Open in browser

```bash
http://localhost:3000
```

## Global Styles (Colors, Fonts, Mixins)
**IMPORTANT**: Use `rem` for better accessibility and responsive design
All global design tokens live in:

- `app/_globals/globals.scss` (colors + fonts + base styles)
- `app/_globals/mixins.scss` (shared SCSS mixins)

### Using Global Colors

Global colors are stored as CSS variables in `:root`.  
Use them in SCSS Modules like this:

#### Example:

```scss
.card {
  background: var(--eggshell);
  color: var(--black);
  border: 1px solid var(--canvas);
}

.buttonPrimary {
  background: var(--yv-red);
  color: var(--white);
}
```

### Using Mixins (Responsive Breakpoints)

Our shared SCSS mixins live in:

- `app/_globals/mixins.scss`

#### 1) Import mixins at the top of your module SCSS

In any `*.module.scss` file:

```scss
@use "mixins.scss";
```

If you do not hav SASS includePaths set up, use a relative import instead

```scss
@use "../../_globals/mixins.scss";
```

#### Example:

```scss
@use "mixins.scss";

.wrapper {
  padding: 48px 24px;

  @include mixins.tablet {
    padding: 36px 20px;
  }

  @include mixins.phone {
    padding: 28px 16px;
  }
}
```

Call it in your component

```jsx
import styles from "./home.module.scss";

export default function Home() {
  return <main className={styles.wrapper}>Hello</main>;
}
```

## BEFORE YOU COMMIT

Run `npm run lint` to ensure good code format!

---

## Images — please read before adding any

**Never commit a Figma SVG export of a photograph.** Figma wraps the full
original raster in base64 inside the SVG, and because an SVG is opaque to
`next/image` it can be neither resized nor served responsively — every visitor
downloads every byte.

The site previously shipped 2736x4096 photos rendered at 280x380 this way. The
About page alone was ~136 MB per visit and the mobile home banner sent 12 MB to
phones. Converting them to sized WebP took `public/` from 161 MB to 6 MB.

To add a photo:

1. Export as JPEG or PNG at roughly 2x its largest render size
2. Convert to WebP (`cwebp -q 82 in.jpg -o out.webp`)
3. Put it in `public/images/`, import it, and render with `next/image`

---

## Handoff notes

### Outstanding

- **`public/images/home/hero-top-PLACEHOLDER.webp` is a placeholder.** The only
  copy of that photo in the repo is 186x248 — roughly a 7.7x upscale at hero
  width, so it renders soft. Replace with the original (2500px+ on the long
  edge), rename, and remove the TODO in `app/(pages)/(home)/page.jsx`.

### Needs a CMS edit — cannot be fixed in code

- The answer to "What days of the week are you open?" tells people to check the
  Google Calendar on the **Shops page**. The calendar is on the **Events** page,
  and the shop no longer exists. Please reword.
- Event descriptions render at different weights because some are wrapped in
  `<strong>` in the CMS rich-text editor and others are not. Clearing the bold
  on the "Day in Downtown" description will make the list consistent.

### Known gaps

- **The rewards signup form does not send email.** `app/api/send-email/route.js`
  needs `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` and `SMTP_PASS`; only
  `NEXT_PUBLIC_CMS_BASE_URL` and `REVALIDATION_SECRET` are configured. The form
  also ignores the response, so it clears and looks successful either way — see
  `handleSubmit` in the nav bar and the footer. `REVALIDATION_SECRET` is now
  unused and can be removed.
- The signup form is duplicated verbatim between `_components/nav-bar/page.jsx`
  and `_components/footer/page.jsx`. Worth extracting before changing either.
- The nav logo is a ~99 KB base64 PNG inlined in an SVG
  (`_components/nav-bar/page.jsx`), shipped in the client bundle on every page.
  `public/images/logo.svg` already exists as a replacement.
- Git history still contains the old 136 MB of image blobs, so a fresh clone is
  large even though the working tree is not. Rewriting history to fix that is
  destructive and was deliberately left alone.

### Content freshness

Every CMS fetch uses `cache: "no-store"`, so published changes appear on the
next page load with no cache to clear and no webhook to configure. The old
`/api/send-email/revalidate` endpoint was removed along with the shop pages that
used it — if the CMS still has a webhook pointing at that URL, remove it.

