# SPEAR

Static website for SPEAR Investment Banking at Babson College.

## Pages

- index.html: homepage, program overview, and placements.
- about.html: mission and approach.
- program.html: curriculum and practical experience.
- people.html: student leadership and mentorship.
- apply.html: application information and availability.

Navigation uses relative file URLs, so pages work with direct file previews and under a repository subdirectory. Placements appears only as a section on index.html, not in the header or footer navigation; there is no placements page.
All pages share styles.css. Navigation and footer markup are static: keep them synchronized when adding links. Each page marks its current navigation link with aria-current.
Colors are defined once in the stylesheet: navy for headings and actions, green for restrained accents, and white/light gray for surfaces. Calibri and Arial use local system fonts; no font service is required. The SPEAR wordmark remains the original logo image rather than recreated text.

## Preview

Open index.html in a browser. No build step or dependencies are required.

## Content needed before launch

- Official application URL, eligibility, deadline, and application cycle.
- Facilitator names, approved photos, and LinkedIn profile URLs.
- Official contact email and organization LinkedIn URL.
- Confirm the previously displayed 16 Class of 2028 IB placements: whether this counts unique students or offers, whether it covers SPEAR participants or all Babson students, and the as-of date. This metric is omitted from the page pending that context; restore it with a clear label and date once confirmed, and update the stats grid for three items.

Application and facilitator pages currently explain that details are unavailable. Replace those messages with confirmed content. Add real contact links in the footer; do not use empty fragment links or placeholder email addresses.

## Checks when updating

- Confirm every navigation link reaches its section and every external link reaches the intended destination.
- Check desktop and mobile layouts, including narrow screens and keyboard navigation.
- Keep navy text on the green application background and use readable contrast for small labels.

## Design references and photography

See DESIGN_NOTES.md for the September 2026 reference review and the decisions applied to the site.

The homepage uses a remote public-domain photograph of Reynolds Campus Center at Babson College, taken by Daderot on August 1, 2010. It is a campus photograph, not a SPEAR event photograph. Source: https://commons.wikimedia.org/wiki/File:Reynolds_Campus_Center,_Babson_College_-_IMG_0420.JPG. The image depends on Wikimedia availability; retain its attribution when replacing it with a local copy or use an approved current club/campus photo.
