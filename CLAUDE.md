# Blue Ridge Talent website: guide for Claude

This is the website for **blueridgetalent.us**, owned by **Devin Moretz**, founder of Blue Ridge Talent, a Charlotte-based recruiting and talent advisory firm. Devin makes changes by asking you in plain English. He is not a developer, so:

- Explain what you changed in plain words. Skip jargon and file-by-file detail unless he asks.
- **Always show him the change in the local preview and get his OK before publishing.** Publishing updates the live site within a minute or two.
- If a request is unclear (which page? which wording?), ask before editing.
- Never put passwords, API keys or other secrets in this project. It's stored on GitHub.

Tyler (GitHub: Triggernometry101) built the site and is the backup contact if something goes wrong.

## How it works

- Built with **Astro**, a tool that turns the files in `src/` into a plain, fast website.
- Code is stored on **GitHub** at `DevinBRT/blueridgetalent`, branch `main`.
- **Netlify** watches GitHub. Every push to `main` builds and publishes the live site automatically. Settings are in `netlify.toml`.

### Preview locally
```
npm install      # first time only, or after dependencies change
npm run dev      # opens a preview at http://localhost:4321
```
Before publishing, also run `npm run build` to make sure the site builds without errors.

### Publish
Commit with a short, plain-English message describing the change (e.g. "Update phone number in footer"), then push to `main`. Tell Devin it will be live in a minute or two.

### Undo
Every change is in Git history. To undo a published change, use `git revert` on that commit and push. Don't rewrite history (no force-push).

## Where things are

| What | File |
|---|---|
| Menus, Open Roles link, LinkedIn links, email (used by header and footer) | `src/data/site.ts` |
| Home page | `src/pages/index.astro` |
| About page | `src/pages/about.astro` |
| Services page | `src/pages/services.astro` |
| Contact page | `src/pages/contact.astro` |
| Header, dropdown menus and phone menu | `src/components/Header.astro` |
| Footer (every page) | `src/components/Footer.astro` |
| Industries cards (Home, Services) | `src/components/Industries.astro` |
| Client names/logos (Home, About) | `src/components/Clients.astro` (logo files go in `public/images/clients/`) |
| "The Road Together" approach section (Home, About) | `src/components/RoadTogether.astro` |
| Closing call-to-action band with the sunset video | `src/components/CtaBand.astro` |
| Contact form fields | `src/components/ContactForm.astro` |
| Page wrapper: tab title, Google description, link previews | `src/layouts/BaseLayout.astro` |
| Colors, fonts, buttons, cards, section styles | `src/styles/global.css` |
| Background videos | `public/videos/` (each has a full-size `.mp4`, a `-720.mp4` for phones and a `-poster.jpg` still frame) |
| Images | `public/images/` (`share.jpg` is the image shown when the site is shared on LinkedIn or by text) |
| Redirects from old addresses | `public/_redirects` |
| Thank-you page (only for visitors with JavaScript off) | `src/pages/thank-you.astro` |
| Page-not-found page | `src/pages/404.astro` |

Pages are built from full-width sections (`.section` plus `--cream`, `--light` or `--navy`) holding a `.container`. Content inside uses the shared building blocks in `global.css`: `.card` / `.card-grid`, `.split` (two columns), `.checklist`, `.button`, `.eyebrow`. Reuse these rather than inventing new styles, so the site stays consistent.

To add a dropdown item, add it to `nav` in `src/data/site.ts` and give the target section a matching `id`.

To add a page: create `src/pages/<name>.astro` using `BaseLayout` (copy an existing page), and add it to `nav` in `src/data/site.ts` if it belongs in the menu. Every page needs a `description`, which is what Google shows under the link.

## Brand rules

- **Colors:** navy `#182241` (`--navy`), cream `#FFF5D9` (`--cream`), slate blue-gray `#7B949C` (`--slate`), and sunset gold `#E3A646` (`--gold`) for accents only (lines, numbers, and text on navy; never text on cream). Use the CSS variables; don't introduce new colors without asking Devin.
- **Fonts:** **Anton** for headings (always uppercase), **Epilogue** for everything else. Both are bundled locally through `@fontsource`.
- **Look:** full-screen Blue Ridge mountain and sunset photography or video behind the text. Cream text on dark backgrounds, navy text on light ones. Content is broken into sections and cards, not long walls of text.
- **Voice:** confident, plain-spoken, people-first. Short sentences. Avoid staffing-agency clichés.
- **Addresses:** keep `/about`, `/services` and `/contact` as they are. They're indexed by Google. If a page is ever renamed, add a 301 redirect in `public/_redirects`.

## Contact form

The form uses **Netlify Forms**. There's no server code: Netlify detects the form at build time from `data-netlify="true"` and stores the submissions.
- Submissions are visible in Netlify under **Forms**. Email alerts to devin@blueridgetalent.us are set in **Site configuration → Forms → Form notifications** (Devin's Netlify login).
- If you rename or add fields, keep the hidden `form-name` input and keep `name="contact"`.
- The form only works on the live Netlify site, not in the local preview. Locally, submitting will show the error message, and that's expected.
- The free plan includes 100 submissions a month, with built-in spam filtering plus a hidden honeypot field.

## Email: do not touch

Devin's email (devin@blueridgetalent.us) runs on Google Workspace. Nothing in this project affects email. If anyone ever changes the domain's DNS, the MX, SPF, DKIM (`google._domainkey`) and any DMARC records must stay exactly as they are.

## Open items (as of October 2026)

- `/services3` was a hidden draft page on Squarespace. It currently redirects to `/services`. Ask Devin whether any of its wording should replace the current Services copy.
- Every page now has a Google description and a link-preview image. The old site had neither. Devin should review the wording in each page's `description`.
- The footer is empty, as on the old site. A footer with contact details and LinkedIn is a likely first improvement.
