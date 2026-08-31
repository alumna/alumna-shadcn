# alumna-shadcn

A minimal, CSS-first visual library for [Alumna](https://github.com/alumna/alumna) apps. Vega-inspired look (neutral OKLCH, familiar density). Not a port of shadcn-svelte. Not an npm package. Not a CLI.

HTML with classes is the public API. Optional thin Svelte files under `src/components/ui/` wrap markup that is painful to paste twice (spinner SVG, card parts, breadcrumb chevron). Overlay position helper: `src/components/ui/Place.svelte` (native `popover` + a few lines to sit next to the trigger).

Docs: [shadcn.alumna.dev](https://shadcn.alumna.dev). Source: [github.com/alumna/alumna-shadcn](https://github.com/alumna/alumna-shadcn).

MIT licensed.

## Install (authors)

The same steps are on [`/install`](https://shadcn.alumna.dev/install) in this docs app.

Alumna cannot install CSS via `alumna add`. Copy two files:

1. [`alumna.css`](https://github.com/alumna/alumna-css) → `src/static/css/alumna.css` (invisible structure).
2. `src/static/css/alumna-shadcn.css` from this repo → `src/static/css/alumna-shadcn.css` (tokens + look).

```html
<link rel="stylesheet" href="/css/alumna.css">
<link rel="stylesheet" href="/css/alumna-shadcn.css">
```

Do **not** copy `site.css`. That file is only this docs site’s font.

Optional: put your own `@font-face` in **your** CSS and list that family **before** the system fallbacks.

Then paste markup (classes such as `button`, `card`, `stack`) into `src/components/` and route or import it as usual in Alumna.

## This repo

| Path | Role |
| --- | --- |
| `src/static/css/alumna.css` | Verbatim alumna-css |
| `src/static/css/alumna-shadcn.css` | The library |
| `src/static/css/site.css` | Docs site only (Ubuntu Sans) |
| `src/components/docs/` | Docs pages |
| `src/components/blocks/` | Login, Login simple, Login split, Signup, OTP, Dashboard, Charts |
| `src/components/ui/` | Optional wrappers to copy |

```
alumna dev
```

Default: [http://localhost:3030](http://localhost:3030). Use [Alumna](https://github.com/alumna/alumna) **4.0.0-alpha.9** or later (`alumna` on `PATH`, typically `~/.alumna/bin`). Production HTML for Pages is `alumna build --ssg` (**4.0.0-alpha.12** or later).
