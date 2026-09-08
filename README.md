# SPEAR Investment Banking

Static website for SPEAR Investment Banking at Babson College.

## Pages
- index.html: introduction, program overview, investment banking placements, and recruitment.
- about.html: program history and eligibility.
- program.html: curriculum, mentorship, capstone, and commitment.
- people.html: facilitator profiles.
- apply.html: application information.

## Local preview
No build step or package installation is required. From the repository directory:

```sh
python -m http.server 8765
```

Open http://localhost:8765.

## Maintenance
All pages share styles.css. script.js controls the two-row placement carousel. Navigation and footer markup are included in each HTML file and should stay consistent across pages. Relative links support deployment at either a domain root or a repository subdirectory.

Application dates and the application form are not yet published. Update apply.html when those details are available.

## Reference
- DESIGN_NOTES.md: typography, colors, layout, and accessibility.
- LOGO_SOURCES.md: active logo assets and source links.
- PEOPLE_SOURCES.md: facilitator profile references.

## Checks
Review navigation, image loading, keyboard focus, and layouts at desktop and mobile widths after changes. Confirm profile information and recruitment dates before each semester.
