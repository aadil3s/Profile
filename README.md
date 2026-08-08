# Aadil Shah - Portfolio

Personal portfolio site for Aadil Shah, a final-year Bachelor of Cybersecurity and Behaviour student at Western Sydney University, targeting SOC analyst and cybersecurity roles in Sydney.

Live sections cover background, technical toolkit, selected work, experience, certifications, education and contact details.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- No runtime dependencies beyond React and Next

## Running locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Editing content

All site content lives in a single file: `src/data/portfolio.ts`. Update the exported objects there and every section picks the changes up. Nothing is hardcoded inside the components.

| Export | Controls |
| --- | --- |
| `profile` | Name, role, tagline, contact details, availability badge, about text |
| `socials` | Icon links in the hero, contact card and footer |
| `facts` | Quick-reference card in the About section |
| `stats` | Figure strip under the hero |
| `skills` | Technical toolkit grid, grouped by category |
| `projects` | Project cards, with `featured: true` spanning full width |
| `experience` | Timeline, split by `category` into security and additional work |
| `certifications` | Certification cards, with `inProgress: true` for unfinished items |
| `education`, `leadership` | Education and leadership section |

## Resume

`public/Aadil_Shah_Resume.pdf` backs the download button. It is exported from the source `.docx`, so re-export and replace it after any edit to the resume.

## Notes

- Light and dark themes follow the system setting and can be toggled manually. The choice persists in `localStorage`.
- Scroll reveal animations are disabled automatically for visitors with `prefers-reduced-motion` set.

## Build

```bash
npm run build
```

Output is fully static and deploys to Vercel, Netlify, GitHub Pages or any static host.
