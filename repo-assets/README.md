## Repo assets (not bundled)

Put large static files here (images, PDFs, etc.) **so they are not included in the Vite build**.

### How to reference from the app
Use a full GitHub-hosted URL (recommended: `raw.githubusercontent.com` for direct file serving):

- `https://raw.githubusercontent.com/ShartazFeeham/Portfolio/main/repo-assets/<your-file>`

Example:

- `https://raw.githubusercontent.com/ShartazFeeham/Portfolio/main/repo-assets/profile.jpg`

### Why this keeps `dist/` small
Vite only bundles assets that are imported from `src/` or copied from `public/`. Files in `repo-assets/`
are not part of the build unless you explicitly import/copy them.

