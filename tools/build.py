#!/usr/bin/env python3
"""Rebuild every generated page: updates (posts.json), artists and landing pages (acts.js, videos.js, tools/landing.json), plus sitemap.xml.
Usage:  python3 tools/build.py      (needs Python 3 with Pillow, and Node)
Commit the generated files; Vercel serves them as they are."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build_updates, build_artists, build_landing
acts = build_artists.load_acts()
reg = build_landing.plan(acts)
extra = build_artists.build(acts, reg) + build_landing.build(acts, reg)
build_updates.build_all(extra)
print("done:", len(build_updates.posts), "posts,", len(acts), "artists,", len(reg["fmt"]), "categories,", len(reg["combo"]), "category-city pages,", len(reg["occ"]), "occasions,", len(reg["city"]), "cities")
