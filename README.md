# Ten Peak Media static website

A dependency-free, GitHub Pages-ready rebuild of Ten Peak Media.

## Pages

- `index.html` — home
- `portfolio.html` — video portfolio with Vimeo lightbox
- `services.html` — capabilities and process
- `about.html` — studio and founder story
- `contractors.html` — dedicated contractor video/website landing page
- `contact.html` — static project brief that opens a prepared email

## Publish with GitHub Pages

1. Create a GitHub repository and upload everything in this folder to its root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. When ready to use `tenpeakmedia.com`, add the domain under **Custom domain** and follow GitHub's DNS instructions.

## Editing videos

Portfolio cards use `data-vimeo="VIDEO_ID"`. Replace that number with another public Vimeo video ID. Update `data-title`, the thumbnail path, and the visible title inside `.work-meta` at the same time.

## Contact form

The contact form intentionally uses the visitor's email app, because GitHub Pages has no server-side form handler. To receive submissions directly in the browser, connect a form service such as Formspree and replace the JavaScript mail handler.

## Notes

- All website code is plain HTML, CSS, and JavaScript.
- Existing Ten Peak Media imagery is stored locally in `assets/images` so the GitHub version does not depend on WordPress.
- Google Fonts and Vimeo playback require internet access.
