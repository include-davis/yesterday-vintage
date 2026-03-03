# Yesterday Vintage (Include Cohort)

Next.js (App Router) site for Yesterday Vintage.

---

## Tech Stack

- Next.js (App Router)
- React (JSX)
- SCSS Modules + Global SCSS (tokens + fonts + mixins)

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

