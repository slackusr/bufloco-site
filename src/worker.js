// Runs only when a request doesn't match a file in ./public.
// Fixes capitalisation in links people type or share (buflo.co/90s-Scream -> /90s-scream/).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const lower = url.pathname.toLowerCase();
    if (lower !== url.pathname) {
      url.pathname = lower;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
