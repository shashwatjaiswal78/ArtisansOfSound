#!/usr/bin/env python3
"""Build one static page per act (/artists/<slug>/) and the A to Z directory (/artists/).

Source of truth: acts.js (roster, bios, aliases) and videos.js. Nothing is duplicated here.
Taxonomy (format/occasion/genre names) lives in tools/taxonomy.json, copied from index.html.
Run via:  python3 tools/build.py
"""
import json, os, re, shutil, subprocess, unicodedata
from PIL import Image
import build_updates as U

ROOT, SITE, esc = U.ROOT, U.SITE, U.esc
TAX = json.load(open(os.path.join(ROOT, "tools", "taxonomy.json"), encoding="utf8"))
LAB, FO, FG = TAX["LAB"], TAX["FO"], TAX["FG"]
OCC = dict(TAX["OCCS"]); GEN = dict(TAX["GENRES"])
CITIES = {"Delhi", "Mumbai", "Lucknow", "Bangalore", "Ahmedabad", "Chennai", "Pan-India"}
PERSON = {"dj", "solosing", "soloinst", "anchor", "standup", "reality", "magiccomedy"}

# ---------- load acts.js / videos.js ----------
def load_js(*files):
    js = ("const fs=require('fs');global.window={};" +
          "".join(f"eval(fs.readFileSync({json.dumps(os.path.join(ROOT, f))},'utf8'));" for f in files) +
          "console.log(JSON.stringify({raw:window.AOS_RAW,bios:window.AOS_BIOS||{},vid:window.AOS_VIDEOS||{},al:window.AOS_ALIASES||{}}))")
    return json.loads(subprocess.check_output(["node", "-e", js]))

def slugify(t):
    t = unicodedata.normalize("NFKD", t).encode("ascii", "ignore").decode().lower()
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", t)).strip("-")

def split_name(n):
    m = re.match(r"^(.*?)\s*\((.*)\)\s*$", n)
    if not m: return n, ""
    base, par = m.group(1), m.group(2)
    return base, ("" if par.strip().title() in CITIES else par)

PROPER = {"sufi": "Sufi", "bollywood": "Bollywood", "rajasthani": "Rajasthani", "indian": "Indian", "punjabi": "Punjabi", "dj": "DJ",
          "gujarati": "Gujarati", "indo": "Indo", "western": "Western", "tv": "TV", "international": "International", "qawwali": "Qawwali"}
def phrase(l):
    return re.sub(r"[A-Za-z]+", lambda m: PROPER.get(m.group(0).lower(), m.group(0)), l.lower())

def lower_first(s): return s[:1].lower() + s[1:] if s and not s[:2].isupper() else s

def load_acts():
    D = load_js("acts.js", "videos.js")
    acts = []
    for r in D["raw"]:
        name, fmts, city, label, photo, tag = r[0], r[1].split(","), r[2], r[3], r[4], r[5]
        base, par = split_name(name)
        occ = []
        for k in fmts:
            for o in FO.get(k, []):
                if o not in occ: occ.append(o)
        for o in (r[7] if len(r) > 7 else []):
            if o not in occ: occ.append(o)
        gen = []
        for k in fmts:
            for g in FG.get(k, []):
                if g not in gen: gen.append(g)
        main = LAB["celeb"] if "celeb" in fmts else (LAB["reality"] if "reality" in fmts else LAB[fmts[0]])
        acts.append(dict(main=("celeb" if "celeb" in fmts else ("reality" if "reality" in fmts else fmts[0])), name=name, base=base, par=par, f=fmts, city=city, label=label or main,
                         fmt_label=main, photo=photo, tag=tag, occ=occ, gen=gen, wider=bool(len(r) > 6 and r[6])))
    # stable slugs: base name; fall back to full name, then -2, -3 on collision
    from collections import Counter
    cnt = Counter(slugify(a["base"]) for a in acts)
    full = Counter(a["name"] for a in acts)
    used = Counter()
    for a in acts:
        s = slugify(a["base"]) if cnt[slugify(a["base"])] == 1 else slugify(a["name"])
        if full[a["name"]] > 1: s = slugify(a["name"] + " " + a["city"])
        used[s] += 1
        a["slug"] = s if used[s] == 1 else f"{s}-{used[s]}"
    for a in acts:
        a["bio"] = D["bios"].get(a["name"]); v = D["vid"].get(a["name"], [])
        a["vid"] = [{"u": x, "l": ""} if isinstance(x, str) else {"u": x["u"], "l": x.get("l", "")} for x in (v if isinstance(v, list) else [v])]
        a["alias"] = D["al"].get(a["name"], "")
    return acts

def build(acts=None, reg=None):
    reg = reg or {'fmt': {}, 'occ': {}, 'city': {}, 'combo': set()}
    acts = acts or load_acts()
    out = os.path.join(ROOT, "artists"); shutil.rmtree(out, ignore_errors=True); os.makedirs(out)
    for a in acts: page(a, acts, reg)
    directory(acts, reg)
    return [f"<url><loc>{SITE}/artists/</loc></url>"] + [f"<url><loc>{SITE}/artists/{a['slug']}/</loc></url>" for a in acts]

def where(a):
    return "across India" if a["city"] == "Pan-India" else f"from {a['city']}, available across India"

def img_dims(path):
    try:
        with Image.open(os.path.join(ROOT, path)) as im: return im.size
    except Exception: return None

def initials(n):
    w = [x for x in re.sub(r"\(.*?\)", "", n).split() if not re.match(r"^(DJ|The|Live|&)$", x, re.I)]
    return ((w[0][0] if w else n[0]) + (w[1][0] if len(w) > 1 else "")).upper()

def related(a, acts):
    pool = [b for b in acts if b is not a and b["f"][0] == a["f"][0]]
    pool.sort(key=lambda b: (b["city"] != a["city"], not b["photo"]))
    return pool[:6]

def mini(b):
    ph = (f'<img src="/{esc(b["photo"])}" alt="{esc(b["base"])}, {esc(b["fmt_label"].lower())}" loading="lazy" width="120" height="120">' if b["photo"]
          else f'<span class="ainit" aria-hidden="true">{esc(initials(b["base"]))}</span>')
    return (f'<a class="amini" href="/artists/{b["slug"]}/">{ph}<span><b>{esc(b["base"])}</b>'
            f'<small>{esc(b["label"])} &middot; {esc(b["city"])}</small></span></a>')

def page(a, acts, reg):
    n, lab = a["base"], a["label"]
    canon = f"{SITE}/artists/{a['slug']}/"
    ph = phrase(lab)
    title = f"Book {n} ({ph}) {'in ' + a['city'] if a['city'] != 'Pan-India' else 'in India'} | Artisans of Sound"
    occ_names = [OCC[o] for o in a["occ"] if o in OCC]
    for k in (4, 3, 2, 1, 0):
        top_occ = ", ".join(occ_names[:k])
        desc = (f"Book {n} ({ph}) {where(a)}. " + (f"Suited to {top_occ}. " if top_occ else "") + "Videos and a clear quote within 24 hours.")
        if len(desc) <= 160: break
    if a["bio"]:
        first = (paras_bio := (a["bio"] if isinstance(a["bio"], list) else a["bio"].get("about", [])))[0] if (a["bio"] and (a["bio"] if isinstance(a["bio"], list) else a["bio"].get("about", []))) else ""
        if first:
            first = first.split(". ")[0].rstrip(".") + "."
            desc = first if len(first) <= 130 else first[:127].rsplit(" ", 1)[0] + "..."
            desc = (desc + " Book through Artisans of Sound.")
            if len(desc) > 160: desc = desc[:157].rsplit(" ", 1)[0] + "..."
    msg = f"Hi Artisans of Sound, I would like to check availability of {a['name']} for my event."
    wa = "https://wa.me/919129237566?text=" + __import__("urllib.parse").parse.quote(msg)
    dims = img_dims(a["photo"]) if a["photo"] else None
    # ---- about text: real bio if present, else a short factual summary built from roster data
    if a["bio"]:
        b = a["bio"]; paras = b if isinstance(b, list) else b.get("about", []); facts = [] if isinstance(b, list) else b.get("facts", [])
        why = [] if isinstance(b, list) else b.get("why", [])
    else:
        based = f"is based in {a['city']} and " if a["city"] != "Pan-India" else "is "
        tg = a["tag"]
        tag_s = (f" Seen on {tg}." if "idol" in tg.lower() else f" Known as {'an' if tg[:1].lower() in 'aeiou' else 'a'} {tg[:1].lower() + tg[1:] if not tg[:2].isupper() else tg}." if tg else "")
        paras = [f"{n} ({ph}) {based}available to book across India through Artisans of Sound." + tag_s + (f" {a['par']}." if a["par"] else ""),
                 ("Artisans of Sound handles the whole booking: we check availability for your date, send videos and give you one clear quote within 24 hours, "
                  "with a replacement act arranged if anyone drops out.")]
        facts = []; why = []
    fl = f"/book/{reg['fmt'][a['main']]}/" if a["main"] in reg["fmt"] else None
    cl = f"/cities/{reg['city'][a['city']]}/" if a["city"] in reg["city"] else None
    chips = [("Format", a["fmt_label"], fl)] + ([("Based in", a["city"], cl)] if a["city"] != "Pan-India" else []) + [("Available", "Across India", None)]
    if a["tag"] and not any(f[0] == "Known for" for f in facts): chips.append(("Known for", a["tag"], None))
    chips += [(f[0], f[1], None) for f in facts]
    hero_img = (f'<img class="aph" src="/{esc(a["photo"])}" alt="{esc(n)}, {esc(a["fmt_label"].lower())}" width="{dims[0]}" height="{dims[1]}" fetchpriority="high">'
                if dims else f'<div class="aph aph0" aria-hidden="true">{esc(initials(n))}</div>')
    why_html = ('<section class="asec"><h2>Why book ' + esc(n) + '</h2><ul class="awhy">' + "".join(f"<li>{esc(x)}</li>" for x in why) + '</ul></section>\n') if why else ""
    vids = ""
    if a["vid"]:
        vids = ('<section class="asec"><h2>Watch ' + esc(n) + '</h2><div class="avid">' +
                "".join(f'<button type="button" class="avb" data-u="{esc(v["u"])}">{esc(v["l"] or "Video " + str(i + 1))}</button>' for i, v in enumerate(a["vid"])) +
                '</div><div class="astage" id="astage"></div></section>')
    else:
        vids = (f'<section class="asec"><h2>Videos</h2><p>Videos of {esc(n)} are shared on request.</p>'
                f'<a class="ghost-pill" href="{esc("https://wa.me/919129237566?text=" + __import__("urllib.parse").parse.quote("Hi Artisans of Sound, please send videos of " + a["name"] + "."))}" target="_blank" rel="noopener">Ask for videos on WhatsApp</a></section>')
    def occ_li(o):
        t = esc(OCC[o]); return f'<li><a href="/occasions/{reg["occ"][o]}/">{t}</a></li>' if o in reg["occ"] else f"<li>{t}</li>"
    occ_html = ('<section class="asec"><h2>Suited to</h2><ul class="achips">' + "".join(occ_li(o) for o in a["occ"] if o in OCC) + '</ul></section>') if occ_names else ""
    gen_html = ('<section class="asec"><h2>Music style</h2><ul class="achips">' + "".join(f"<li>{esc(GEN[g])}</li>" for g in a["gen"] if g in GEN) + '</ul></section>') if a["gen"] else ""
    rel = related(a, acts)
    rel_html = (f'<section class="asec"><h2>More {esc(phrase(a["fmt_label"]))} acts</h2><div class="amgrid">' + "".join(mini(b) for b in rel) + '</div></section>') if rel else ""
    kind = "Person" if all(f in PERSON for f in a["f"]) else "PerformingGroup"
    about = {"@type": kind, "name": n, "description": desc}
    if dims: about["image"] = f"{SITE}/{a['photo']}"
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "WebPage", "name": title, "url": canon, "description": desc, "about": about,
         "isPartOf": {"@type": "WebSite", "name": "Artisans of Sound", "url": SITE + "/"}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": "Artists", "item": SITE + "/artists/"},
            {"@type": "ListItem", "position": 3, "name": n, "item": canon}]}]}
    css = '<link rel="stylesheet" href="/artists.css">\n'
    extra = ""
    h = U.head(title, desc, canon, "profile", extra, ld, css)
    if dims:  # use the act's own photo for social sharing
        h = h.replace(f'{SITE}/img/og.jpg">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">',
                      f'{SITE}/{a["photo"]}">\n<meta property="og:image:width" content="{dims[0]}">\n<meta property="og:image:height" content="{dims[1]}">', 1)
        h = h.replace(f'<meta name="twitter:image" content="{SITE}/img/og.jpg">', f'<meta name="twitter:image" content="{SITE}/{a["photo"]}">')
    body = (h + U.header("artists") +
      '<main class="in page uwrap">\n  <article class="apage">\n'
      f'    <nav class="ucrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/artists/">Artists</a><span>/</span><span>{esc(n)}</span></nav>\n'
      f'    <header class="ahero"><div class="aphw">{hero_img}</div><div class="atxt">\n'
      f'      <p class="kicker">{esc(a["fmt_label"])} &middot; {esc(a["city"])}</p>\n      <h1 class="uh">{esc(n)}</h1>\n'
      + (f'      <p class="apar">{esc(a["par"])}</p>\n' if a["par"] else "") +
      '      <ul class="afacts">' + "".join(f"<li><span>{esc(k)}</span><b>" + (f'<a href="{h}">{esc(v)}</a>' if h else esc(v)) + "</b></li>" for k, v, h in chips) + '</ul>\n'
      f'      <div class="ask"><a class="dark-pill" href="{esc(wa)}" target="_blank" rel="noopener">Check availability on WhatsApp</a><a class="ghost-pill" href="/#enquiry">Get a quote</a></div>\n'
      '    </div></header>\n'
      '    <section class="asec"><h2>About ' + esc(n) + '</h2><div class="ubody">' + "".join(f"<p>{esc(p)}</p>" for p in paras) + '</div></section>\n'
      + why_html + vids + occ_html + gen_html +
      f'    <div class="ucta"><h2>Planning an event?</h2><p>Tell us the date, city and venue. We check {esc(n)}\'s availability and send videos with a clear quote within 24 hours.</p>'
      f'<div class="ask"><a class="dark-pill" href="/#enquiry">Get a quote</a><a class="ghost-pill" href="{esc(wa)}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></div>\n'
      + rel_html + '  </article>\n</main>\n'
      f'<a class="uwa" href="{esc(wa)}" target="_blank" rel="noopener" aria-label="Message us on WhatsApp">WhatsApp</a>\n' + U.FOOTER + PLAYER + U.tail + '</body></html>\n')
    d = os.path.join(ROOT, "artists", a["slug"]); os.makedirs(d)
    open(os.path.join(d, "index.html"), "w", encoding="utf8").write(body)

PLAYER = r'''<script>(function(){var s=document.getElementById("astage");if(!s)return;
function emb(u){var m;
if(m=u.match(/(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/))return"https://www.youtube-nocookie.com/embed/"+m[1]+"?autoplay=1&rel=0";
if(m=u.match(/drive\.google\.com\/file\/d\/([\w-]+)/))return"https://drive.google.com/file/d/"+m[1]+"/preview";
if(m=u.match(/instagram\.com\/(reel|reels|p|tv)\/([\w-]+)/))return"https://www.instagram.com/"+(m[1]==="reels"?"reel":m[1])+"/"+m[2]+"/embed";return null}
document.querySelector(".avid").addEventListener("click",function(e){var b=e.target.closest(".avb");if(!b)return;var u=b.getAttribute("data-u"),src=emb(u);
[].forEach.call(document.querySelectorAll(".avb"),function(x){x.setAttribute("aria-pressed",x===b)});
if(!src){window.open(u,"_blank","noopener");return}
s.textContent="";var f=document.createElement("iframe");f.src=src;f.allow="autoplay; fullscreen; encrypted-media";f.allowFullscreen=true;f.title="Video";s.appendChild(f);s.classList.add("on")})})();</script>
'''

def directory(acts, reg):
    groups = {}
    for a in acts: groups.setdefault(a["fmt_label"], []).append(a)
    desc = "Browse every live band, singer, DJ, anchor and special act on the Artisans of Sound roster, grouped by category."
    canon = SITE + "/artists/"
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "CollectionPage", "name": "All artists by category", "url": canon, "description": desc},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": "Artists", "item": canon}]}]}
    secs = ""
    for g in sorted(groups, key=str.lower):
        secs += (f'<section class="asec" id="{slugify(g)}"><h2>{esc(g)} <small>{len(groups[g])}</small></h2><ul class="adir">' +
                 "".join(f'<li><a href="/artists/{a["slug"]}/">{esc(a["base"])}</a> <span>{esc(a["city"])}</span></li>' for a in sorted(groups[g], key=lambda x: x["base"].lower())) + '</ul></section>')
    browse = ('<section class="asec"><h2>Browse by</h2><p><a href="/book/">All categories</a> &middot; <a href="/occasions/">All occasions</a> &middot; <a href="/top/">Top lists</a> &middot; <a href="/cities/">Cities</a></p></section>')
    jump = " ".join(f'<a href="#{slugify(g)}">{esc(g)}</a>' for g in sorted(groups, key=str.lower))
    body = (U.head("All artists by category | Artisans of Sound", desc, canon, "website", "", ld, '<link rel="stylesheet" href="/artists.css">\n') + U.header("artists") +
      '<main class="in page uwrap">\n  <div class="apage">\n'
      '    <nav class="ucrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Artists</span></nav>\n'
      f'    <p class="kicker">{len(acts)} acts</p>\n    <h1 class="uh">All artists by category</h1>\n'
      '    <p class="alead">Live bands, singers, DJs, anchors, celebrity and special acts. Open any act to see its profile, videos and the events it suits.</p>\n'
      f'    <nav class="ajump" aria-label="Jump to category">{jump}</nav>\n{browse}{secs}\n  </div>\n</main>\n' + U.FOOTER + U.tail + '</body></html>\n')
    open(os.path.join(ROOT, "artists", "index.html"), "w", encoding="utf8").write(body)

if __name__ == "__main__":
    print(len(build()), "urls")
