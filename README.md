# sachin.pm

Personal portfolio of **Sachin Saxena**, Product Manager for mobile & AI products.

**Live:** https://sachin-portfolio-nine-theta.vercel.app

## What's inside

- **Ask my portfolio**: a keyword-retrieval Q&A over the site's content, with streamed answers and source labels. Runs in the browser with no API calls.
- **OutLoud pipeline**: an animated diagram of one session of my AI speaking coach, showing the fallback and on-device design choices.
- **OutLoud case study**: research (n=33), insight → decision, the prompt as the spec, and the live GA4 funnel.
- **Career changelog**: my career as semantic-versioned release notes.
- **Teardowns & PRDs**: 10 case studies (Zepto, Zomato, Airbnb, Uber, …) with filters.
- **Sessions**: my n8n automation and Play Store ASO videos, with a screenshot of the workflow built in each n8n session.
- **⌘K command menu**, light/dark themes, and a small easter egg (type `ship`).

## Stack

Plain HTML, CSS and JavaScript. No framework and no build step.

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | Design tokens, layout, both themes |
| `data.js` | **All editable content**: changelog, OutLoud funnel, teardowns, sessions, Q&A, toolkit |
| `app.js` | Interactions |
| `img/sessions/` | Workflow screenshots and video thumbnails for the Sessions section |
| `og.png`, `favicon.svg`, `apple-touch-icon.png` | Social preview card and icons |

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

```bash
npx vercel --prod
```
