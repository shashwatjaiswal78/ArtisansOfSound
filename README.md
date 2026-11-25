# Artisans of Sound

To change the roster or the videos, edit only acts.js or videos.js, then commit and push to the main branch. Vercel picks up every push to main and redeploys www.artisansofsound.in automatically within a minute or two. No build step is needed.


## Updates (blog) posts
Posts live in `posts.json` (newest first). After adding or editing one, run `python3 tools/build_updates.py`
and commit the result. It regenerates `updates.html`, one static page per post at `/updates/<slug>/`, and `sitemap.xml`.
Old `updates.html#slug` links redirect to the new URLs.

## Artist pages
Every act in `acts.js` gets a static page at `/artists/<slug>/`, plus a directory at `/artists/`.
To add or change an act, edit `acts.js` / `videos.js` as before, then run `python3 tools/build.py`
(needs Python 3 with Pillow, and Node) and commit the generated files. The same command rebuilds the Updates pages and `sitemap.xml`.
A profile written in `window.AOS_BIOS` in `acts.js` is used on the act's page; acts without one get a short summary built from the roster data.
Format, occasion and genre names come from `tools/taxonomy.json` (copied from `index.html`; update it if those lists change).
