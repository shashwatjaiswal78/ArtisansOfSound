#!/usr/bin/env python3
"""Rebuild every generated page: updates (posts.json) and artists (acts.js, videos.js), plus sitemap.xml.
Usage:  python3 tools/build.py      (needs Python 3 with Pillow, and Node)
Commit the generated files; Vercel serves them as they are."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_updates, build_artists
extra = build_artists.build()
build_updates.build_all(extra)
print("done:", len(build_updates.posts), "posts,", len(extra) - 1, "artists")
