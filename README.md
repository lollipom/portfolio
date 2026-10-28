# Sally Lam: Product Portfolio

Personal product management portfolio: four product case studies in data, UX research and workflow design.

Live site: https://portfolio-flame-chi-86.vercel.app/

## Case studies

Each case study opens from its own shareable link:

| Link | Case study |
| --- | --- |
| `/#scholarship` | Scholarship Workflow (GovTech × NTU Product Club Hackathon 2025, Semi-Finalist) |
| `/#rapidbrief` | A&E RapidBrief (solo concept, healthcare AI) |
| `/#date-our-dates` | Date our Dates (NTU Product Club × Notion 3.0 Ideathon, 2nd Runner-Up) |
| `/#zalora` | Zalora App Redesign (course project) |

## How it's built

- A single static page, `index.html`, styled with a prebuilt Tailwind CSS v3 stylesheet (`assets/site.css`) and the Inter font.
- Case studies are dialogs in the same page. The URL hash opens the matching one, Esc or the close button closes it, and keyboard focus stays inside while it is open.
- Images for the Zalora and Notion case studies are in `assets/`.
- All patient, applicant and couple data in the interactive mock-ups is fictional.

## Deploying

The repo is connected to Vercel. Every push to `main` deploys to production, and every other branch gets its own preview link. No build step is needed.

## Updating styles

`assets/site.css` contains only the Tailwind classes used in `index.html`. If you add a Tailwind class that isn't used anywhere yet, rebuild it with Node installed:

```bash
npx tailwindcss@3 -c tailwind.config.js -i tailwind.input.css -o assets/site.css --minify
```

Editing text or reusing existing classes needs no rebuild.
