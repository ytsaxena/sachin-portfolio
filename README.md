# sachin.pm

Personal portfolio of **Sachin Saxena**, Product Manager for mobile & AI products.

**Live:** https://sachin-portfolio-nine-theta.vercel.app

## What's inside

- **Ask my portfolio**: a keyword-retrieval Q&A over the site's content, with streamed answers and source labels. Runs in the browser with no API calls.
- **OutLoud pipeline inspector**: toggle a simulated Gemini outage or the privacy view to see the product trade-offs behind my AI speaking coach.
- **Career changelog**: my career as semantic-versioned release notes.
- **Teardowns & PRDs**: 10 case studies (Zepto, Zomato, Airbnb, Uber, …) with filters.
- **Daily decision**: a new Ship / Iterate / Skip product dilemma every day at midnight IST, with a streak counter.
- **RICE lab**: re-rank a sample backlog live with sliders.
- **⌘K command menu**, light/dark themes, and a small easter egg (type `ship`).

## Stack

Plain HTML, CSS and JavaScript. No framework and no build step.

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | Design tokens, layout, both themes |
| `data.js` | **All editable content**: changelog, teardowns, Q&A, scenarios, backlog |
| `app.js` | Interactions |

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

```bash
npx vercel --prod
```
