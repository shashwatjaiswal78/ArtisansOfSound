# Artisans of Sound

To change the roster or the videos, edit only acts.js or videos.js, then commit and push to the main branch. Vercel picks up every push to main and redeploys www.artisansofsound.in automatically within a minute or two. No build step is needed.


## Updates (blog) posts
Posts live in `posts.json` (newest first). After adding or editing one, run `python3 tools/build_updates.py`
and commit the result. It regenerates `updates.html`, one static page per post at `/updates/<slug>/`, and `sitemap.xml`.
Old `updates.html#slug` links redirect to the new URLs.
