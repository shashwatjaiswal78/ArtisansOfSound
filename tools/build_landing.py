#!/usr/bin/env python3
"""Build landing pages: categories (/book/<slug>/), category in city (/book/<slug>/<city>/),
occasions (/occasions/<slug>/), cities (/cities/<city>/) and their three hub pages.
Copy lives in tools/landing.json (edit it freely); acts come from acts.js via build_artists.
Run via:  python3 tools/build.py
"""
import json, os, shutil, urllib.parse
import build_updates as U
import build_artists as A

ROOT, SITE, esc = U.ROOT, U.SITE, U.esc
L = json.load(open(os.path.join(ROOT, "tools", "landing.json"), encoding="utf8"))
LAB, OCC = A.LAB, A.OCC
MIN_FMT, MIN_OCC, MIN_CITY, MIN_COMBO = 1, 1, 3, 3
CAP = 72
_dims = {}

def has_copy(d): return bool(d.get("intro"))
def na(n): return f"{n} act" if n == 1 else f"{n} acts"

def plan(acts):
    reg = {"fmt": {}, "occ": {}, "city": {}, "combo": set(), "top": {}}
    for k, d in L["formats"].items():
        if has_copy(d) and sum(k in a["f"] for a in acts) >= MIN_FMT: reg["fmt"][k] = d["slug"]
    for k, d in L["occasions"].items():
        if has_copy(d) and sum(k in a["occ"] for a in acts) >= MIN_OCC: reg["occ"][k] = d["slug"]
    for c, d in L["cities"].items():
        if sum(a["city"] == c for a in acts) >= MIN_CITY: reg["city"][c] = d["slug"]
    for k in reg["fmt"]:
        for c in reg["city"]:
            if sum(k in a["f"] and a["city"] == c for a in acts) >= MIN_COMBO: reg["combo"].add((k, c))
    for t in A.TAX["TOP"]:
        d = L.get("tops", {}).get(t[0])
        if d and has_copy(d) and len(top_acts(t, acts)) >= MIN_FMT: reg["top"][t[0]] = d["slug"]
    return reg

def top_acts(t, acts):
    g = t[3] if len(t) > 3 else None
    def sex(a): return list(A.TAX["SEX"].get(a["name"], ""))
    return [a for a in acts if any(f in a["f"] for f in t[1]) and (not t[2] or any(o in a["occ"] for o in t[2])) and (not g or g in sex(a))]

def rank(a): return (a["wider"], not a["photo"], a["name"].lower())

def dims(path):
    if path not in _dims: _dims[path] = A.img_dims(path)
    return _dims[path]

def card(a):
    d = dims(a["photo"]) if a["photo"] else None
    ph = (f'<img src="/{esc(a["photo"])}" alt="{esc(a["base"])}, {esc(a["fmt_label"].lower())}" loading="lazy" width="{d[0]}" height="{d[1]}">' if d
          else f'<span class="acinit" aria-hidden="true">{esc(A.initials(a["base"]))}</span>')
    return (f'<a class="acard" href="/artists/{a["slug"]}/"><span class="acimg">{ph}</span>'
            f'<b>{esc(a["base"])}</b><small>{esc(a["label"])} &middot; {esc(a["city"])}</small></a>')

def grid(acts, cap=CAP):
    return '<div class="agrid">' + "".join(card(a) for a in sorted(acts, key=rank)[:cap]) + '</div>'

def wa(msg): return "https://wa.me/919129237566?text=" + urllib.parse.quote(msg)

def links(items):
    return '<ul class="achips">' + "".join(f'<li><a href="{h}">{esc(t)}</a></li>' for h, t in items) + '</ul>'

def sec(title, inner): return f'<section class="asec"><h2>{title}</h2>{inner}</section>'

def trim(s, n=160):
    if len(s) <= n: return s
    return s[:n - 1].rsplit(" ", 1)[0].rstrip(",;:") + "."

def write(parts, html):
    d = os.path.join(ROOT, *parts); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "index.html"), "w", encoding="utf8").write(html)

def shell(url, title, desc, crumbs, body, itemlist=None, faq=None, msg=None):
    graph = [{"@type": "CollectionPage", "name": title, "url": url, "description": desc},
             {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": SITE + h} for i, (n, h) in enumerate(crumbs)]}]
    if itemlist:
        graph.append({"@type": "ItemList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "url": f"{SITE}/artists/{a['slug']}/", "name": a["base"]} for i, a in enumerate(itemlist)]})
    if faq:
        graph.append({"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": t}} for q, t in faq]})
    ld = {"@context": "https://schema.org", "@graph": graph}
    crumb = "".join(f'<a href="{h}">{esc(n)}</a><span>/</span>' for n, h in crumbs[:-1]) + f"<span>{esc(crumbs[-1][0])}</span>"
    w = wa(msg or "Hi Artisans of Sound, I would like a quote for an event.")
    return (U.head(title, desc, url, "website", "", ld, '<link rel="stylesheet" href="/artists.css">\n') + U.header("artists") +
            '<main class="in page uwrap">\n  <div class="apage">\n' + f'    <nav class="ucrumb" aria-label="Breadcrumb">{crumb}</nav>\n' + body +
            '  </div>\n</main>\n' + f'<a class="uwa" href="{esc(w)}" target="_blank" rel="noopener" aria-label="Message us on WhatsApp">WhatsApp</a>\n' + U.FOOTER + U.tail + '</body></html>\n')

def head_block(kicker, h1, intro, w):
    return (f'    <p class="kicker">{esc(kicker)}</p>\n    <h1 class="uh">{esc(h1)}</h1>\n    <p class="alead">{esc(intro)}</p>\n'
            f'    <div class="ask"><a class="dark-pill" href="{esc(w)}" target="_blank" rel="noopener">Get a quote on WhatsApp</a><a class="ghost-pill" href="/#enquiry">Send an enquiry</a></div>\n')

def faq_block(faq):
    return sec("Frequently asked questions", "".join(f"<h3>{esc(q)}</h3><p>{esc(t)}</p>" for q, t in faq)) if faq else ""

def cta(w, text):
    return (f'    <div class="ucta"><h2>Planning an event?</h2><p>{esc(text)}</p><div class="ask"><a class="dark-pill" href="/#enquiry">Get a quote</a>'
            f'<a class="ghost-pill" href="{esc(w)}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></div>\n')

CTA = "Tell us the date, city and venue. We check availability and send videos with one clear quote within 24 hours."

# ---------------- pages ----------------
def category(k, acts, reg):
    d = L["formats"][k]; mine = [a for a in acts if k in a["f"]]
    name = d["name"]; ph = A.phrase(name); url = f"{SITE}/book/{d['slug']}/"
    title = f"{name} to Book in India | Artisans of Sound"
    desc = trim(f"Book {ph} for weddings and events across India. {na(len(mine))}, videos and one clear quote within 24 hours.")
    w = wa(f"Hi Artisans of Sound, I am looking for {ph} for my event.")
    occs = [(f"/occasions/{reg['occ'][o]}/", L["occasions"][o]["name"]) for o in A.FO.get(k, []) if o in reg["occ"]][:8]
    cities = [(f"/book/{d['slug']}/{L['cities'][c]['slug']}/", f"{name} in {c}") for c in reg["city"] if (k, c) in reg["combo"]]
    other = [(f"/book/{L['formats'][x]['slug']}/", L["formats"][x]["name"]) for x in sorted(reg["fmt"], key=lambda x: -sum(x in a["f"] for a in acts)) if x != k][:8]
    body = (head_block(na(len(mine)), d["h1"], d["intro"], w) +
            sec("Acts you can book", grid(mine) + (f'<p class="anote">Showing {CAP} of {len(mine)}. <a href="/artists/">See every act</a>.</p>' if len(mine) > CAP else "")) +
            sec("How to choose", f'<div class="ubody"><p>{esc(d["tips"])}</p></div>') +
            (sec("Popular for", links(occs)) if occs else "") + (sec("In your city", links(cities)) if cities else "") +
            faq_block(d["faq"]) + cta(w, CTA) + sec("Other categories", links(other + [("/book/", "All categories")])))
    write(["book", d["slug"]], shell(url, title, desc, [("Home", "/"), ("Categories", "/book/"), (name, f"/book/{d['slug']}/")], body, sorted(mine, key=rank)[:CAP], d["faq"], w and f"Hi Artisans of Sound, I am looking for {ph}."))
    return url

def combo(k, c, acts, reg):
    d = L["formats"][k]; cd = L["cities"][c]; mine = [a for a in acts if k in a["f"] and a["city"] == c]
    name = d["name"]; ph = A.phrase(name); url = f"{SITE}/book/{d['slug']}/{cd['slug']}/"
    title = f"{name} in {c} | Artisans of Sound"
    desc = trim(f"Book {ph} in {c}: {len(mine)} acts based in the city, with videos and one clear quote within 24 hours.")
    names = [a["base"] for a in sorted(mine, key=rank)[:3]]
    ex = names[0] if len(names) == 1 else ", ".join(names[:-1]) + " and " + names[-1]
    intro = (f"{len(mine)} {ph} based in {c} are on the Artisans of Sound roster, including {ex}. "
             f"Acts from our wider network can also travel to {c}.")
    w = wa(f"Hi Artisans of Sound, I am looking for {ph} in {c}.")
    body = (head_block(f"{len(mine)} acts in {c}", f"{name} in {c}", intro, w) + sec(f"{name} based in {c}", grid(mine)) +
            sec("How to choose", f'<div class="ubody"><p>{esc(d["tips"])}</p></div>') +
            sec("See more", links([(f"/book/{d['slug']}/", f"All {ph} across India"), (f"/cities/{cd['slug']}/", f"All acts in {c}")])) + cta(w, CTA))
    write(["book", d["slug"], cd["slug"]], shell(url, title, desc, [("Home", "/"), ("Categories", "/book/"), (name, f"/book/{d['slug']}/"), (c, f"/book/{d['slug']}/{cd['slug']}/")], body, sorted(mine, key=rank), None, f"Hi Artisans of Sound, I am looking for {ph} in {c}."))
    return url

def top(t, acts, reg):
    label = t[0]; d = L["tops"][label]; url = f"{SITE}/top/{d['slug']}/"
    mine = top_acts(t, acts)
    title = f"{label} in India | Artisans of Sound"
    desc = trim(f"{d['intro'].split('. ')[0].rstrip('.')}. {na(len(mine))}, videos and one clear quote within 24 hours.")
    w = wa(f"Hi Artisans of Sound, I am looking for: {label}.")
    rel = []
    for f in t[1][:3]:
        if f in reg["fmt"]: rel.append((f"/book/{reg['fmt'][f]}/", L["formats"][f]["name"]))
    for o in t[2]:
        if o in reg["occ"]: rel.append((f"/occasions/{reg['occ'][o]}/", L["occasions"][o]["name"]))
    other = [(f"/top/{L['tops'][x[0]]['slug']}/", x[0]) for x in A.TAX["TOP"] if x[0] in reg["top"] and x[0] != label][:10]
    body = (head_block(na(len(mine)), label, d["intro"], w) +
            sec("Acts you can book", grid(mine) + (f'<p class="anote">Showing {CAP} of {len(mine)}. <a href="/artists/">See every act</a>.</p>' if len(mine) > CAP else "")) +
            (sec("Related", links(rel)) if rel else "") + cta(w, CTA) + sec("More top lists", links(other + [("/top/", "All top lists")])))
    write(["top", d["slug"]], shell(url, title, desc, [("Home", "/"), ("Top lists", "/top/"), (label, f"/top/{d['slug']}/")], body, sorted(mine, key=rank)[:CAP], None, f"Hi Artisans of Sound, I am looking for: {label}."))
    return url

def occasion(k, acts, reg):
    d = L["occasions"][k]; name = d["name"]; url = f"{SITE}/occasions/{d['slug']}/"
    mine = [a for a in acts if k in a["occ"]]
    want = set(d["formats"])
    feat = sorted(mine, key=lambda a: (not (want & set(a["f"])),) + rank(a))[:24]
    title = f"{d['h1']} | Artisans of Sound"
    if len(title) > 75: title = f"{name}: bands, singers and DJs | Artisans of Sound"
    desc = trim(f"{d['intro'].split('. ')[0].rstrip('.')}. Browse acts, watch videos and get one clear quote within 24 hours.")
    w = wa(f"Hi Artisans of Sound, I would like a quote for artists for a {name.lower()} event.")
    fm = [(f"/book/{reg['fmt'][f]}/", L["formats"][f]["name"]) for f in d["formats"] if f in reg["fmt"]]
    other = [(f"/occasions/{L['occasions'][x]['slug']}/", L["occasions"][x]["name"]) for x in reg["occ"] if x != k][:10]
    body = (head_block("Occasion", d["h1"], d["intro"], w) + (sec("Popular formats", links(fm)) if fm else "") +
            sec("Featured acts", grid(feat) + '<p class="anote"><a href="/artists/">See every act</a> or <a href="/book/">browse by category</a>.</p>') +
            sec("How to plan the music", f'<div class="ubody"><p>{esc(d["tips"])}</p></div>') + faq_block(d["faq"]) + cta(w, CTA) +
            (sec("Wedding artists by city", links([(f"/wedding/{v['slug']}/", f"Wedding artists in {c}") for c, v in WED["cities"].items()])) if k == "wedding" and WED["cities"] else "") +
            sec("Other occasions", links(other + [("/occasions/", "All occasions")])))
    write(["occasions", d["slug"]], shell(url, title, desc, [("Home", "/"), ("Occasions", "/occasions/"), (name, f"/occasions/{d['slug']}/")], body, feat, d["faq"], f"Hi Artisans of Sound, I would like a quote for artists for a {name.lower()} event."))
    return url

def city(c, acts, reg):
    d = L["cities"][c]; mine = [a for a in acts if a["city"] == c]; url = f"{SITE}/cities/{d['slug']}/"
    title = f"Live bands, DJs and singers in {c} | Artisans of Sound"
    desc = trim(f"Book live bands, DJs, singers and anchors in {c}. {len(mine)} acts based in the city, with videos and one clear quote within 24 hours.")
    w = wa(f"Hi Artisans of Sound, I would like a quote for an event in {c}.")
    groups = {}
    for a in mine: groups.setdefault(a["fmt_label"], []).append(a)
    secs = "".join(sec(f"{esc(g)} <small>{len(v)}</small>", grid(v)) for g, v in sorted(groups.items(), key=lambda x: (-len(x[1]), x[0])))
    combos = [(f"/book/{L['formats'][k]['slug']}/{d['slug']}/", f"{L['formats'][k]['name']} in {c}") for (k, cc) in sorted(reg["combo"]) if cc == c]
    body = (head_block(f"{len(mine)} acts in {c}", f"Live bands, DJs and singers in {c}", d["intro"], w) + (sec("Browse by category", links(combos)) if combos else "") + secs +
            sec("How to book", f'<div class="ubody"><p>{esc(d["tips"])}</p></div>') + faq_block(d["faq"]) + cta(w, CTA) +
            sec("More", links(([(f"/wedding/{WED['cities'][c]['slug']}/", f"Wedding artists in {c}")] if c in WED["cities"] else []) + [("/book/", "All categories"), ("/occasions/", "All occasions"), ("/artists/", "All artists")])))
    write(["cities", d["slug"]], shell(url, title, desc, [("Home", "/"), ("Cities", "/cities/"), (c, f"/cities/{d['slug']}/")], body, sorted(mine, key=rank)[:CAP], d["faq"], f"Hi Artisans of Sound, I would like a quote for an event in {c}."))
    return url

def hub(parts, title, h1, intro, entries, crumb_name):
    url = f"{SITE}/{'/'.join(parts)}/"
    body = (f'    <p class="kicker">{len(entries)} pages</p>\n    <h1 class="uh">{esc(h1)}</h1>\n    <p class="alead">{esc(intro)}</p>\n' +
            '<ul class="hublist">' + "".join(f'<li><a href="{h}"><b>{esc(t)}</b><span>{esc(s)}</span></a></li>' for h, t, s in entries) + '</ul>\n' + cta(wa("Hi Artisans of Sound, I would like a quote for an event."), CTA))
    write(parts, shell(url, title, trim(intro), [("Home", "/"), (crumb_name, f"/{'/'.join(parts)}/")], body))
    return url


# ---------------- wedding artists by city: /wedding/<city>/ and /wedding/<city>/<kind>/ ----------------
WED = L.get("wedding", {"kinds": {}, "cities": {}})

def wedding_acts(kind, acts):
    kd = WED["kinds"][kind]
    out = [a for a in acts if "wedding" in a["occ"] and any(f in a["f"] for f in kd["formats"]) and (kd["celeb"] or "celeb" not in a["f"])]
    return sorted(out, key=rank)

def wedding_kind_page(kind, c, acts):
    kd = WED["kinds"][kind]; cd = WED["cities"][c]; noun, plural = kd["noun"], kd["plural"]
    pool = wedding_acts(kind, acts)
    local = [a for a in pool if a["city"] in cd["alias"]]
    rest = [a for a in pool if a not in local]
    url = f"{SITE}/wedding/{cd['slug']}/{kd['slug']}/"
    title = f"Wedding {plural.capitalize() if False else plural[0].upper() + plural[1:]} in {c} | Artisans of Sound"
    desc = trim(f"Book a wedding {noun} in {c}. {len(pool)} {plural} on the roster for weddings in {c}, shortlisted for your date with one clear quote within 24 hours.")
    h1 = f"Wedding {plural} in {c}"
    intro = (f"Looking for a wedding {noun} in {c}? {cd['blurb']} "
             + (f"{len(local)} {plural} on our roster are based in {c}, and the rest of the network travels to {c} for your dates." if local
                else f"Our {plural} work across India and travel to {c} for your dates."))
    w = wa(f"Hi Artisans of Sound, I am looking for a wedding {noun} in {c}.")
    faq = [[f"Can I book a wedding {noun} for {c} through Artisans of Sound?", f"Yes. Share your date, venue and guest count and we shortlist {plural} for {c} and send one clear quote within 24 hours."],
           [f"Do {plural} travel to {c}?", f"Yes. Our acts are available across India. Acts based in {c} save on travel and stay, and the rest of the network travels to {c} for your dates."],
           [f"How early should I book a wedding {noun} in {c}?", f"As early as your date and venue are fixed. Peak wedding dates in {c} fill first, so earlier bookings give you more choice."]]
    others = [(f"/wedding/{cd['slug']}/{WED['kinds'][k]['slug']}/", f"Wedding {WED['kinds'][k]['plural']} in {c}") for k in WED["kinds"] if k != kind]
    same = [(f"/wedding/{WED['cities'][x]['slug']}/{kd['slug']}/", f"Wedding {plural} in {x}") for x in WED["cities"] if x != c][:8]
    body = (head_block(f"{len(pool)} {plural} for weddings in {c}", h1, intro, w) +
            (sec(f"Based in {c}", grid(local)) if local else "") +
            sec(f"Available for weddings in {c}", grid(rest, 24) + (f'<p class="anote">Showing {min(24, len(rest))} of {len(rest)}. <a href="/book/">Browse every category</a>.</p>' if len(rest) > 24 else "")) +
            sec("How to choose", f'<div class="ubody"><p>{esc(kd["tips"])}</p></div>') + faq_block(faq) + cta(w, CTA) +
            sec(f"More for weddings in {c}", links(others + [(f"/wedding/{cd['slug']}/", f"All wedding artists in {c}"), ("/occasions/wedding/", "Wedding artists across India")])) +
            sec(f"Wedding {plural} in other cities", links(same)))
    write(["wedding", cd["slug"], kd["slug"]], shell(url, title, desc, [("Home", "/"), ("Weddings", "/wedding/"), (c, f"/wedding/{cd['slug']}/"), (f"Wedding {plural}", f"/wedding/{cd['slug']}/{kd['slug']}/")],
                                                      body, (local + rest)[:CAP], faq, f"Hi Artisans of Sound, I am looking for a wedding {noun} in {c}."))
    return url

def wedding_city_page(c, acts):
    cd = WED["cities"][c]; url = f"{SITE}/wedding/{cd['slug']}/"
    title = f"Wedding DJs, bands, singers and anchors in {c} | Artisans of Sound"
    desc = trim(f"Book wedding DJs, live bands, singers and anchors for your wedding in {c}. One shortlist and one clear quote within 24 hours.")
    w = wa(f"Hi Artisans of Sound, I would like artists for a wedding in {c}.")
    items = [(f"/wedding/{cd['slug']}/{k['slug']}/", f"Wedding {k['plural']} in {c}", f"{len(wedding_acts(key, acts))} on the roster") for key, k in WED["kinds"].items()]
    body = (head_block(f"Weddings in {c}", f"Wedding artists in {c}", f"{cd['blurb']} Pick what you need and we shortlist acts for your date, venue and guest count.", w) +
            '<ul class="hublist">' + "".join(f'<li><a href="{h}"><b>{esc(t)}</b><span>{esc(s)}</span></a></li>' for h, t, s in items) + '</ul>\n' +
            cta(w, CTA) + sec("More", links([("/occasions/wedding/", "Wedding artists across India"), ("/wedding/", "Weddings in other cities")])))
    write(["wedding", cd["slug"]], shell(url, title, desc, [("Home", "/"), ("Weddings", "/wedding/"), (c, f"/wedding/{cd['slug']}/")], body))
    return url

def wedding_pages(acts):
    urls = []
    for c in WED["cities"]:
        urls.append(wedding_city_page(c, acts))
        for kind in WED["kinds"]: urls.append(wedding_kind_page(kind, c, acts))
    entries = [(f"/wedding/{d['slug']}/", f"Wedding artists in {c}", d["blurb"].split(". ")[0].rstrip(".") + ".") for c, d in WED["cities"].items()]
    urls.append(hub(["wedding"], "Wedding DJs, bands, singers and anchors by city | Artisans of Sound", "Wedding artists by city",
                    "Find wedding DJs, live bands, singers and anchors for your city. Pick a city to see the acts and get a quote.", entries, "Weddings"))
    return urls

def build(acts, reg):
    for p in ("book", "occasions", "cities", "top", "wedding"): shutil.rmtree(os.path.join(ROOT, p), ignore_errors=True)
    urls = []
    for k in reg["fmt"]: urls.append(category(k, acts, reg))
    for k, c in sorted(reg["combo"]): urls.append(combo(k, c, acts, reg))
    for k in reg["occ"]: urls.append(occasion(k, acts, reg))
    for c in reg["city"]: urls.append(city(c, acts, reg))
    for t in A.TAX["TOP"]:
        if t[0] in reg["top"]: urls.append(top(t, acts, reg))
    urls += wedding_pages(acts)
    first = lambda d: d["intro"].split(". ")[0].rstrip(".") + "."
    urls.append(hub(["book"], "Book artists by category | Artisans of Sound", "Book artists by category",
        "Live bands, DJs, singers, anchors, celebrity and special acts. Pick a category to see the acts and videos.",
        [(f"/book/{L['formats'][k]['slug']}/", L["formats"][k]["name"], f"{na(sum(k in a['f'] for a in acts))}. {first(L['formats'][k])}") for k in reg["fmt"]], "Categories"))
    urls.append(hub(["occasions"], "Book artists by occasion | Artisans of Sound", "Book artists by occasion",
        "Weddings, sangeets, parties, corporate events and festivals. Find the right kind of act for your occasion.",
        [(f"/occasions/{L['occasions'][k]['slug']}/", L["occasions"][k]["name"], first(L["occasions"][k])) for k in reg["occ"]], "Occasions"))
    urls.append(hub(["top"], "Top artist lists | Artisans of Sound", "Top artist lists",
        "Ready-made shortlists: top wedding bands, singers, DJs, anchors, sufi acts and more.",
        [(f"/top/{L['tops'][t[0]]['slug']}/", t[0], L["tops"][t[0]]["intro"].split(". ")[0].rstrip(".") + ".") for t in A.TAX["TOP"] if t[0] in reg["top"]], "Top lists"))
    urls.append(hub(["cities"], "Book artists by city | Artisans of Sound", "Book artists by city",
        "Acts based in Delhi, Lucknow and Mumbai, plus a wider network that travels across India.",
        [(f"/cities/{L['cities'][c]['slug']}/", c, f"{sum(a['city'] == c for a in acts)} acts based in {c}.") for c in reg["city"]], "Cities"))
    return [f"<url><loc>{u}</loc></url>" for u in urls]


def write_links(acts, reg):
    """links.js: lets the interactive tiles and cards on the hand-written pages link to the generated pages."""
    data = {"cat": {k: f"/book/{v}/" for k, v in reg["fmt"].items()},
            "occ": {k: f"/occasions/{v}/" for k, v in reg["occ"].items()},
            "top": {k: f"/top/{v}/" for k, v in reg["top"].items()},
            "act": {a["name"]: f"/artists/{a['slug']}/" for a in acts}}
    open(os.path.join(ROOT, "links.js"), "w", encoding="utf8").write(
        "// Generated by tools/build.py. Do not edit. Maps categories, occasions, top lists and acts to their pages.\nwindow.AOS_LINKS = " + json.dumps(data, ensure_ascii=False) + ";\n")


def write_search_index(acts, reg):
    """search-index.json for the site search box: [type, title, url, subtitle, extra keywords]."""
    import build_updates as U2
    rows = []
    for a in acts:
        kw = " ".join(filter(None, [a.get("alias", ""), a.get("tag", ""), a.get("par", ""), a["label"], a["city"]] + [LAB.get(f, "") for f in a["f"]] +
                       [A.GEN[g] for g in a["gen"] if g in A.GEN]))
        rows.append(["Artist", a["base"], f"/artists/{a['slug']}/", f"{a['label']} \u00B7 {a['city']}", kw])
    for k, slug in reg["fmt"].items():
        d = L["formats"][k]; rows.append(["Category", d["name"], f"/book/{slug}/", "", f"{LAB.get(k, '')} {d['h1']}"])
    for (k, c) in sorted(reg["combo"]):
        d = L["formats"][k]; rows.append(["Category", f"{d['name']} in {c}", f"/book/{d['slug']}/{L['cities'][c]['slug']}/", "", ""])
    for k, slug in reg["occ"].items():
        d = L["occasions"][k]; rows.append(["Occasion", d["name"], f"/occasions/{slug}/", "", d["h1"]])
    for label, slug in reg["top"].items():
        rows.append(["Top list", label, f"/top/{slug}/", "", ""])
    for c, slug in reg["city"].items():
        rows.append(["City", c, f"/cities/{slug}/", "Acts based here", f"bands djs singers in {c}"])
    for c, d in WED["cities"].items():
        rows.append(["City", f"Wedding artists in {c}", f"/wedding/{d['slug']}/", "Wedding DJs, bands, singers, anchors", f"wedding {c} dj band singer anchor"])
        for kk, k in WED["kinds"].items():
            rows.append(["Category", f"Wedding {k['plural']} in {c}", f"/wedding/{d['slug']}/{k['slug']}/", "", f"wedding {k['noun']} in {c} {' '.join(d['alias'])}"])
    for p in U2.posts:
        rows.append(["Guide", p["title"], f"/updates/{p['slug']}/", p["cat"], p["intro"]])
    for t, u, k in (("Join as an artist", "/join.html", "apply musician performer roster"), ("About Artisans of Sound", "/about.html", "founder maneswita team"), ("Booking terms", "/terms.html", "payment advance cancellation contract")):
        rows.append(["Page", t, u, "", k])
    open(os.path.join(ROOT, "search-index.json"), "w", encoding="utf8").write(json.dumps(rows, ensure_ascii=False, separators=(",", ":")))
