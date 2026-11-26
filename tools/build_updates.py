#!/usr/bin/env python3
"""Build the static Updates pages.

Source of truth: posts.json (edit or add posts there, newest first).
Normally run via:  python3 tools/build.py  (builds updates and artist pages)
Writes: updates.html, updates/<slug>/index.html, sitemap.xml
Commit the generated files; Vercel serves them as they are (no build step).
"""
import json, html, re, os, shutil, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://www.artisansofsound.in"
WA = "https://wa.me/919129237566?text=Hi%20Artisans%20of%20Sound%2C%20I%20would%20like%20a%20quote%20for%20an%20event."
esc = lambda s: html.escape(str(s), quote=True)

posts = json.load(open(os.path.join(ROOT, "posts.json"), encoding="utf8"))
tail = open(os.path.join(ROOT, "tools", "_tail.html"), encoding="utf8").read()

def iso(d):
    return datetime.datetime.strptime(d, "%d %B %Y").strftime("%Y-%m-%d")

def words(h):
    return len(re.sub(r"<[^>]+>", " ", h).split())

HEAD_ICONS = ('<link rel="icon" href="/favicon.ico" sizes="any">\n'
 '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">\n'
 '<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">\n'
 '<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n')
FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">\n<link rel="stylesheet" href="/updates.css">\n'

def head(title, desc, canon, og_type="website", extra="", ld=None, css=""):
    t, d = esc(title), esc(desc)
    out = ('<!doctype html>\n<html lang="en"><head>\n<meta charset="utf-8">\n'
     '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
     f'<title>{t}</title>\n<meta name="description" content="{d}">\n'
     '<meta name="theme-color" content="#07050F">\n'
     f'<link rel="canonical" href="{canon}">\n' + HEAD_ICONS +
     f'<meta property="og:type" content="{og_type}">\n<meta property="og:site_name" content="Artisans of Sound">\n'
     f'<meta property="og:title" content="{t}">\n<meta property="og:description" content="{d}">\n'
     f'<meta property="og:url" content="{canon}">\n<meta property="og:image" content="{SITE}/img/og.jpg">\n'
     '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n'
     + extra +
     '<meta name="twitter:card" content="summary_large_image">\n'
     f'<meta name="twitter:title" content="{t}">\n<meta name="twitter:description" content="{d}">\n'
     f'<meta name="twitter:image" content="{SITE}/img/og.jpg">\n' + FONTS + css)
    if ld:
        out += '<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False).replace("</", "<\\/") + '</script>\n'
    return out + '</head><body>\n'

def header(active='updates'):
    return ('<header class="top">\n  <div class="in">\n    <nav class="nav" aria-label="Main">\n'
     '      <a href="/"><img src="/img/logo-dark.png" alt="Artisans of Sound"></a>\n'
     '      <ul id="mmenu"><li class="navdd"><button type="button" class="navddb' + (' on' if active == 'artists' else '') + '" aria-expanded="false" aria-haspopup="true" aria-controls="navddm">Artists<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5L5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="navddm" id="navddm" hidden><a href="/top-artists.html">Top artists</a><a href="/events.html">Book for any event</a><a href="/categories.html">Artist categories</a><a href="/artists/">All artists</a></div></li>'
     '<li><a href="/about.html">About</a></li><li><a href="/updates.html"' + (' aria-current="page"' if active == 'updates' else '') + '>Updates</a></li><li><a href="/terms.html">Terms</a></li><li><a href="/join.html">Join us</a></li></ul>\n'
     '      <button type="button" class="mbtn" id="mbtn" aria-expanded="false" aria-controls="mmenu">Menu</button>\n'
     '      <a class="dark-pill" href="/#enquiry">Book an act</a>\n    </nav>\n  </div>\n</header>\n')

FOOTER = ('<footer>\n  <div class="in foot">\n    <img src="/img/logo-dark.png" alt="Artisans of Sound">\n'
 '    <nav aria-label="Footer"><a href="/categories.html">Artists</a><a href="/about.html">About</a><a href="/updates.html">Updates</a><a href="/terms.html">Terms</a><a href="/book/">Book by category</a><a href="/occasions/">Book by event</a><a href="/top/">Top lists</a><a href="/cities/">Cities</a><a href="/#enquiry">Enquire</a><a href="/#acts" target="_blank" rel="noopener">Videos</a></nav>\n'
 '    <p>Artisans of Sound, Delhi, Lucknow. Artist management and live events.</p>\n    <p class="fdisc" style="flex:0 0 100%;max-width:62em;margin:0;font-size:12.5px;line-height:1.55;color:var(--ink2,#5B5B61)">Artisans of Sound does not manage or represent the celebrity and third-party artists named on this site, and a listing does not imply endorsement by or affiliation with the artist or their management. All names, images and trademarks belong to their owners. <a href="/terms.html#third-party-artists" style="color:inherit;text-underline-offset:3px">Read the full notice</a>.</p>\n  </div>\n</footer>\n<script src="/search.js" defer></script>\n')

def url(p): return f"{SITE}/updates/{p['slug']}/"

def card(p, extra=""):
    return (f'<a class="ucard" href="/updates/{p["slug"]}/" data-c="{esc(p["cat"])}"{extra}><div class="ucv c-{esc(p["cat"])}"><div class="ucvi">'
            f'<span>{esc(p["cat"])}</span><b>{esc(p["cover"])}</b></div></div><div class="ucb"><h3>{esc(p["title"])}</h3>'
            f'<time datetime="{iso(p["date"])}">{esc(p["date"])}</time></div></a>')

# ---------- post pages ----------
def build_post(p):
    canon = url(p)
    mins = max(2, round(words(p["body"]) / 200))
    org = {"@type": "Organization", "name": "Artisans of Sound", "url": SITE + "/",
           "logo": {"@type": "ImageObject", "url": SITE + "/img/logo-dark.png"}}
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Article", "headline": p["title"], "description": p["intro"], "image": SITE + "/img/og.jpg",
         "datePublished": iso(p["date"]), "dateModified": iso(p["date"]), "articleSection": p["cat"],
         "mainEntityOfPage": canon, "author": org, "publisher": org, "inLanguage": "en-IN"},
        {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p["faq"]]},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": "Updates", "item": SITE + "/updates.html"},
            {"@type": "ListItem", "position": 3, "name": p["title"], "item": canon}]}]}
    extra = (f'<meta property="article:published_time" content="{iso(p["date"])}">\n'
             f'<meta property="article:section" content="{esc(p["cat"])}">\n')
    more = sorted((x for x in posts if x["slug"] != p["slug"]), key=lambda x: x["cat"] != p["cat"])[:3]
    share = "https://wa.me/?text=" + __import__("urllib.parse").parse.quote(p["title"] + " " + canon)
    faq = "<h2>Frequently asked questions</h2>" + "".join(f"<h3>{esc(q)}</h3><p>{esc(a)}</p>" for q, a in p["faq"])
    alt = (f'<a class="ghost-pill" href="/{esc(p["alt"][1])}">{esc(p["alt"][0])}</a>' if p.get("alt") else "")
    body = (head(f'{p["title"]} | Artisans of Sound', p["intro"], canon, "article", extra, ld) + header() +
     '<main class="in page uwrap ispost">\n  <article id="uPost">\n'
     f'    <nav class="ucrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/updates.html">Updates</a><span>/</span><span>{esc(p["title"])}</span></nav>\n'
     f'    <p class="kicker">{esc(p["cat"])}</p>\n    <h1 class="uh">{esc(p["title"])}</h1>\n'
     f'    <p class="umeta"><time datetime="{iso(p["date"])}">{esc(p["date"])}</time>  |  {mins} min read</p>\n'
     f'    <div class="utop"><p>{esc(p["top"])}</p><a class="dark-pill" href="{esc(p["wa"])}" target="_blank" rel="noopener">Get a quote on WhatsApp</a></div>\n'
     f'    <div class="ubody">{p["body"]}</div>\n    <div class="ubody ufaq">{faq}</div>\n'
     f'    <div class="ushare"><span>Share this post</span><a href="{esc(share)}" target="_blank" rel="noopener">WhatsApp</a><button type="button" id="pCopy" data-url="{canon}">Copy link</button></div>\n'
     f'    <div class="ucta">\n      <h2>{esc(p["ctaH"])}</h2>\n      <p>{esc(p["ctaP"])}</p>\n'
     f'      <div class="ask"><a class="dark-pill" href="/#enquiry">Get a quote</a><a class="ghost-pill" href="{esc(p["wa"])}" target="_blank" rel="noopener">Message us on WhatsApp</a>{alt}</div>\n    </div>\n'
     '    <p class="kicker umore-k">More to read</p>\n    <div class="ugrid">' + "".join(card(x) for x in more) + '</div>\n  </article>\n</main>\n'
     f'<a class="uwa" href="{esc(p["wa"])}" target="_blank" rel="noopener" aria-label="Message us on WhatsApp">WhatsApp</a>\n' + FOOTER +
     '<script>(function(){var b=document.getElementById("pCopy");if(!b)return;b.onclick=function(){var t=this;try{navigator.clipboard.writeText(t.getAttribute("data-url")).then(function(){t.textContent="Link copied"},function(){t.textContent="Copy failed"})}catch(e){t.textContent="Copy failed"}}})();</script>\n'
     + tail + '</body></html>\n')
    d = os.path.join(ROOT, "updates", p["slug"])
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "index.html"), "w", encoding="utf8").write(body)

# ---------- list page ----------
def build_list():
    cats = ["All"] + list(dict.fromkeys(p["cat"] for p in posts))
    desc = "Guides on booking wedding bands, singers, DJs and celebrity acts in India, from the Artisans of Sound team."
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "CollectionPage", "name": "Artisans of Sound Updates", "url": SITE + "/updates.html", "description": desc},
        {"@type": "ItemList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "url": url(p), "name": p["title"]} for i, p in enumerate(posts)]},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": "Updates", "item": SITE + "/updates.html"}]}]}
    slugs = json.dumps([p["slug"] for p in posts])
    script = ('<script>(function(){var s=' + slugs + ';'
      'function r(){var h=decodeURIComponent((location.hash||"").slice(1));if(s.indexOf(h)>-1)location.replace("/updates/"+h+"/")}r();addEventListener("hashchange",r);'
      'var f=document.getElementById("uFil");if(!f)return;'
      'f.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var c=b.getAttribute("data-c");'
      '[].forEach.call(f.querySelectorAll("button"),function(x){x.setAttribute("aria-pressed",x===b)});'
      '[].forEach.call(document.querySelectorAll("#uGrid .ucard"),function(a){a.hidden=!(c==="All"||a.getAttribute("data-c")===c)})});})();</script>\n')
    body = (head("Booking guides and updates | Artisans of Sound", desc, SITE + "/updates.html", "website", "", ld) + header() +
     '<main class="in page uwrap">\n  <div id="uList">\n    <h1 class="sr">Updates: guides to booking bands, singers and DJs</h1>\n    <p class="kicker">Latest updates</p>\n'
     '    <div class="ufil" id="uFil" role="group" aria-label="Filter updates">' +
     "".join(f'<button type="button" class="uf" aria-pressed="{"true" if c=="All" else "false"}" data-c="{esc(c)}">{esc(c)}</button>' for c in cats) + '</div>\n'
     '    <div class="ugrid" id="uGrid">' + "".join(card(p) for p in posts) + '</div>\n  </div>\n</main>\n'
     f'<a class="uwa" href="{WA}" target="_blank" rel="noopener" aria-label="Message us on WhatsApp">WhatsApp</a>\n' + script + FOOTER + tail + '</body></html>\n')
    open(os.path.join(ROOT, "updates.html"), "w", encoding="utf8").write(body)

# ---------- sitemap ----------
def build_sitemap(extra=()):
    static = ["", "top-artists.html", "events.html", "categories.html", "about.html", "updates.html", "join.html", "terms.html"]
    last = max(iso(p["date"]) for p in posts)
    rows = [f"<url><loc>{SITE}/{s}</loc>" + (f"<lastmod>{last}</lastmod>" if s == "updates.html" else "") + "</url>" for s in static]
    rows += [f"<url><loc>{url(p)}</loc><lastmod>{iso(p['date'])}</lastmod></url>" for p in posts]
    rows += list(extra)
    open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf8").write(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(rows) + "\n</urlset>\n")

def build_all(sitemap_extra=()):
    shutil.rmtree(os.path.join(ROOT, "updates"), ignore_errors=True)
    for p in posts: build_post(p)
    build_list(); build_sitemap(sitemap_extra)

if __name__ == "__main__":
    build_all()
    print(f"built {len(posts)} posts")
