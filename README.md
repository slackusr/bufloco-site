# bufloco.com

Static site for bufloco.com, deployed with Cloudflare Pages.

- `public/index.html`: Buf.Lo Co landing page
- `public/90s-altmas/`: The West Ends' 90's Alt-Mas Bash 2026 event page
- `public/90s-scream/`: 90's Scream 3 (Halloween 2026) event page

No build step. Deployed as a Cloudflare Worker with static assets (`wrangler.jsonc` points at `./public`). Cloudflare runs `npx wrangler deploy` on every push to `main`.
