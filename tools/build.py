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
import re, subprocess
def gitdate(*paths):
    try:
        out = subprocess.check_output(["git", "log", "-1", "--format=%cs", "--", *paths], cwd=build_updates.ROOT, text=True).strip()
        return out or None
    except Exception:
        return None
SRC = gitdate("acts.js", "videos.js", "tools/landing.json", "tools/taxonomy.json")
def stamp(row):
    m = re.search(r"<loc>https://[^/]+/(.*?)</loc>", row)
    if "<lastmod>" in row or not m: return row
    path = m.group(1)
    d = SRC if path.startswith(("artists/", "book/", "occasions/", "cities/")) else gitdate(path or "index.html")
    return row.replace("</url>", f"<lastmod>{d}</lastmod></url>") if d else row
build_updates.build_all([stamp(r) for r in extra])
# static pages already in build_updates' list get their lastmod here
sm = os.path.join(build_updates.ROOT, "sitemap.xml"); t = open(sm, encoding="utf8").read()
t = "\n".join(stamp(r) for r in t.split("\n")); open(sm, "w", encoding="utf8").write(t)
print("done:", len(build_updates.posts), "posts,", len(acts), "artists,", len(reg["fmt"]), "categories,", len(reg["combo"]), "category-city pages,", len(reg["occ"]), "occasions,", len(reg["city"]), "cities")
