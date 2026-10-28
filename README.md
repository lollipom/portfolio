# Sally Lam: Product Portfolio

Personal product management portfolio: four case studies on spotting workflow bottlenecks and designing simpler products.

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

- A single static page, `index.html`, styled with Tailwind CSS (via its CDN script) and the Inter font.
- Case studies are dialogs in the same page. The URL hash opens the matching one, Esc or the close button closes it, and keyboard focus stays inside while it is open.
- Images for the Zalora and Notion case studies are in `assets/`.
- All patient, applicant and couple data in the interactive mock-ups is fictional.

## Deploying

The repo is connected to Vercel. Every push to `main` deploys to production, and every other branch gets its own preview link. No build step is needed.

## Editing

Placeholders that still need real content are marked with `class="todo"` and show as yellow highlights on the page. Search `index.html` for `todo` to find them.
