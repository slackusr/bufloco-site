# buflo.co

Static site for buflo.co, deployed as the Cloudflare Worker `bufloco-site` (static assets from `public/`). bufloco.com 301-redirects to buflo.co via a Cloudflare Redirect Rule.

- `public/index.html`: Buf.Lo Co landing page
- `public/90s-altmas/`: The West Ends' 90's Alt-Mas Bash 2026 event page
- `public/90s-scream/`: 90's Scream 3 (Halloween 2026) event page

`src/worker.js` only runs for requests that don't match a file; it redirects mixed-case paths to lowercase (buflo.co/90s-Scream → /90s-scream).

No build step. Deployed as a Cloudflare Worker with static assets (`wrangler.jsonc` points at `./public`). Cloudflare runs `npx wrangler deploy` on every push to `main`.
