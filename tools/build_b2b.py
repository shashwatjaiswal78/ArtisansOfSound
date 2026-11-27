#!/usr/bin/env python3
"""Business pages for the people who buy entertainment in volume: /for-planners/, /corporate/, /hotels/, /destination-events/ and /other-events/.
Run by tools/build.py. Edit the copy in PAGES below, then rebuild. No prices are shown on these pages on purpose."""
import os
import build_updates as U
import build_landing as B
esc = U.esc
SITE = U.SITE


L = B.L
def first(d): return d["intro"].split(". ")[0].rstrip(".") + "."
def fcard(key, title=None, sub=None):
    d = L["formats"][key]
    return (f"/book/{d['slug']}/", title or d["name"], sub or first(d), d.get("photo"))
# chosen pictures for the wedding cards (the same ones used on the /weddings/ hub)
WEDDING_PICS = {"hub": "img/wedding-haldi-mehendi.webp", "destination": "img/wedding-destination.webp",
                "sangeet": "img/wedding-sangeet-cocktail.webp", "reception": "img/wedding-reception.webp"}

def ocard(key, title=None, sub=None, photo=None):
    d = L["occasions"][key]
    return (f"/occasions/{d['slug']}/", title or d["name"], sub or first(d), photo or d.get("photo"))
def qcard(seg, key, title, sub, kind="fmt"):
    d = L["formats" if kind == "fmt" else "occasions"][key]
    return (f"/?for={seg}#enquiry", title, sub, d.get("photo"))
def pcard(path, key, title, sub):
    return (f"/{path}/", title, sub, L["formats"][key].get("photo"))
def cards(items):
    return '<ul class="hublist">' + "".join(B.hub_item(e) for e in items) + "</ul>"

TILE_CSS = ('<style>.wtiles{list-style:none;margin:18px 0 0;padding:0;display:grid;grid-template-columns:repeat(var(--c,4),minmax(0,1fr));gap:16px}'
 '.wtiles.c3{--c:3}.wtiles.c4{--c:4}.wtiles.c5{--c:5}.wtiles.c6{--c:6;gap:14px}'
 '.wtiles a{position:relative;display:block;border-radius:18px;overflow:hidden;aspect-ratio:4/5;background:#14101f;color:#F6F2E8;text-decoration:none;isolation:isolate}'
 '.wtiles img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2;transition:transform .35s ease}'
 '.wtiles a::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(to top,rgba(6,3,16,.92) 0%,rgba(6,3,16,.55) 42%,rgba(6,3,16,0) 70%)}'
 '.wtiles a:hover img,.wtiles a:focus-visible img{transform:scale(1.04)}'
 '.wtiles a:focus-visible{outline:3px solid var(--ink);outline-offset:3px}'
 '.wtiles .ft{position:absolute;left:16px;right:16px;bottom:14px;display:grid;gap:5px}'
 '.wtiles b{font-family:var(--display);font-weight:800;font-size:clamp(21px,2vw,26px);line-height:1.02;text-transform:uppercase}'
 '.wtiles .ft span{font-size:13.5px;line-height:1.35;color:#E4DECF}'
 '.wtiles.c5 .ft{left:14px;right:14px}.wtiles.c5 b{font-size:clamp(18px,1.7vw,22px)}.wtiles.c5 .ft span{font-size:13px}'
 '.wtiles.c6 .ft{left:12px;right:12px;bottom:12px}.wtiles.c6 b{font-size:clamp(16px,1.45vw,19px);overflow-wrap:anywhere}.wtiles.c6 .ft span{font-size:12px;line-height:1.3}'
 '@media (prefers-reduced-motion:reduce){.wtiles img{transition:none}}'
 '@media (max-width:1100px){.wtiles.c5,.wtiles.c6{--c:3}}'
 '@media (max-width:900px){.wtiles.c4{--c:2}}'
 '@media (max-width:700px){.wtiles,.wtiles.c3,.wtiles.c4,.wtiles.c5,.wtiles.c6{--c:2;gap:12px}.wtiles .ft,.wtiles.c5 .ft,.wtiles.c6 .ft{left:12px;right:12px;bottom:12px}.wtiles b,.wtiles.c5 b,.wtiles.c6 b{font-size:19px;overflow-wrap:anywhere}.wtiles .ft span,.wtiles.c5 .ft span,.wtiles.c6 .ft span{font-size:12.5px}}</style>\n')

def tiles(items, cols=4):
    """items: (href, title, description, photo). Big photo tiles, the same look as the homepage tiles."""
    out = []
    for href, title, desc, img in items:
        d = B.dims(img) if img else None
        im = f'<img src="/{esc(img)}" alt="" loading="lazy"' + (f' width="{d[0]}" height="{d[1]}"' if d else "") + ">" if img else ""
        out.append(f'<li><a href="{esc(href)}">{im}<span class="ft"><b>{esc(title)}</b><span>{esc(desc)}</span></span></a></li>')
    return f'<ul class="wtiles c{cols}">' + "".join(out) + "</ul>"

# one short line per city for the tiles on /wedding/ (from the city copy in tools/landing.json)
CITY_TAG = {
 "Delhi": "Farmhouses, banquet halls and hotels across NCR",
 "Mumbai": "Hotel ballrooms, sea-facing venues and lawns",
 "Lucknow": "Sufi and ghazal evenings to full-energy sangeets",
 "Agra": "Heritage hotels and destination weddings",
 "Jaipur": "Palace, fort and heritage-hotel weddings",
 "Udaipur": "Lakeside palaces and destination weddings",
 "Jodhpur": "Fort and palace weddings, folk beside Bollywood",
 "Chandigarh": "Big Punjabi weddings with dhol and bhangra",
 "Gurugram": "Farmhouses, banquets and late-night sangeets",
 "Ahmedabad": "Sangeet and garba nights, large family weddings",
 "Hyderabad": "Hotels, convention venues and resorts",
 "Chennai": "Tamil traditions with film music and Bollywood",
 "Bengaluru": "Resorts, gardens and hotels, Bollywood to English",
 "Kolkata": "Bengali traditions with Bollywood evenings",
 "Pune": "Hotels, resorts and lawns, live bands and DJs",
 "Goa": "Beach and sunset destination weddings",
}

ICON_CSS = ('<style>.cgrid{--ico:#3b3b40;--ico-hover:#c8102e;list-style:none;margin:22px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}'
 '.cgrid a{display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;height:100%;padding:26px 14px 22px;background:var(--card,#fff);border:1px solid var(--line,#E3DFD3);border-radius:16px;color:var(--ink,#1B1B1D);text-decoration:none}'
 '.cgrid .cico{display:block;width:92px;height:92px;margin-bottom:6px;background:var(--ico);-webkit-mask:var(--i) center/contain no-repeat;mask:var(--i) center/contain no-repeat;transition:background .2s ease}'
 '.cgrid b{font-size:18px;line-height:1.2}.cgrid .t{font-size:13.5px;line-height:1.4;color:var(--ink2,#5B5B61)}'
 '.cgrid a:hover,.cgrid a:focus-visible{border-color:var(--ink,#1B1B1D)}.cgrid a:hover .cico,.cgrid a:focus-visible .cico{background:var(--ico-hover)}'
 '.cgrid a:focus-visible{outline:3px solid var(--ink,#1B1B1D);outline-offset:2px}'
 '@media (prefers-reduced-motion:reduce){.cgrid .cico{transition:none}}'
 '@media (max-width:760px){.cgrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}}'
 '@media (max-width:700px){.cgrid a{padding:20px 10px 16px}.cgrid .cico{width:76px;height:76px}.cgrid b{font-size:16px}.cgrid .t{font-size:12.5px}}</style>\n')

def icon_cards(items):
    """items: (href, city, tagline, slug). One-colour line icon of the city's monument (img/city/<slug>.svg, drawn by tools/city_icons.py),
    coloured by --ico; it turns --ico-hover on hover. To make the icons red all the time, set --ico to the same colour as --ico-hover."""
    return '<ul class="cgrid">' + "".join(
        f'<li><a href="{esc(h)}"><span class="cico" style="--i:url(/img/city/{esc(slug)}.svg)" aria-hidden="true"></span><b>{esc(c)}</b><span class="t">{esc(tag)}</span></a></li>'
        for h, c, tag, slug in items) + "</ul>"

CARD_PIC_CSS = ('<style>.cgrid .cimg{display:block;width:124px;height:124px;margin-bottom:6px;border-radius:16px;object-fit:cover;object-position:var(--pos,50% 30%)}'
 '@media (max-width:700px){.cgrid .cimg{width:96px;height:96px;border-radius:14px}}</style>\n')

# where to centre the square crop of each photo (x y, in percent), for the few that need it
CITY_FOCUS = {}

CARD_DARK_CSS = ('<style>.cgrid.dark a{background:#110e1b;border-color:#110e1b;color:#F6F2E8}'
 '.cgrid.dark .t{color:#BDB5A3}'
 '.cgrid.dark a:hover,.cgrid.dark a:focus-visible{border-color:#F6F2E8}'
 '.cgrid.dark a:focus-visible{outline-color:#F6F2E8}</style>\n')

def photo_cards(items, dark=False):
    """Same white cards as icon_cards, with the city photo (img/city/photo-<slug>.webp) as a small rounded square instead of the icon.
    A city without a photo yet falls back to its line icon."""
    out = []
    for h, c, tag, slug in items:
        ph = f"img/city/photo-{slug}.webp"
        if os.path.exists(os.path.join(U.ROOT, ph)):
            pos = CITY_FOCUS.get(slug)
            media = f'<img class="cimg" src="/{ph}" alt="" loading="lazy" width="124" height="124"' + (f' style="--pos:{pos}"' if pos else "") + ">"
        else:
            media = f'<span class="cico" style="--i:url(/img/city/{esc(slug)}.svg)" aria-hidden="true"></span>'
        out.append(f'<li><a href="{esc(h)}">{media}<b>{esc(c)}</b><span class="t">{esc(tag)}</span></a></li>')
    return f'<ul class="cgrid{" dark" if dark else ""}">' + "".join(out) + "</ul>"

def pick(acts, formats=(), occs=(), n=6):
    out = [a for a in acts if any(f in a["f"] for f in formats) or any(o in a["occ"] for o in occs)]
    return sorted(out, key=B.rank)[:n]

# line icons for the step and benefit cards (24x24, drawn with currentColor); each card title maps to one icon
ICONS = {
 "chat": '<path d="M4 5h16v11H10l-4 3.5V16H4z"/><path d="M8 9.5h8M8 12.5h5"/>',
 "shield": '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
 "calendar": '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4M9 15l2 2 4-4"/>',
 "video": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.5v5l4.5-2.5z"/>',
 "clipboard": '<rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 3h6v3H9zM8.5 11h7M8.5 14.5h7M8.5 18h4"/>',
 "list": '<path d="M9.5 6h10.5M9.5 12h10.5M9.5 18h10.5M3.5 6l1.3 1.3L7 5M3.5 12l1.3 1.3L7 11M3.5 18l1.3 1.3L7 16.5"/>',
 "document": '<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 15.5h6M10 18.5h3.5"/>',
 "pin": '<path d="M12 21s-6-5.6-6-10.5a6 6 0 0 1 12 0C18 15.4 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.3"/>',
 "clock": '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
 "plane": '<path d="M21 4L3 11l6.5 2.5L12 20z"/><path d="M9.5 13.5L21 4"/>',
 "receipt": '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3.5"/>',
 "building": '<path d="M5 21V8l7-4 7 4v13"/><path d="M3 21h18M9.5 21v-5h5v5M9.5 11h.01M14.5 11h.01"/>',
 "refresh": '<path d="M20 11a8 8 0 0 0-14-4.5L4 9"/><path d="M4 4.5V9h4.5"/><path d="M4 13a8 8 0 0 0 14 4.5L20 15"/><path d="M20 19.5V15h-4.5"/>',
 "users": '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c.5-3.5 3-5 5.5-5s5 1.5 5.5 5"/><circle cx="17" cy="9.5" r="2.3"/><path d="M16 14.2c2.6-.3 4.6 1.2 5 4.3"/>',
 "sliders": '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
 "star": '<path d="M12 4l2.4 5 5.4.7-4 3.8 1 5.4-4.8-2.6-4.8 2.6 1-5.4-4-3.8 5.4-.7z"/>',
}
TITLE_ICON = {
 "One contact for all functions": "chat", "Artists checked before we quote": "shield", "Availability before price": "calendar", "Videos and details ready to share": "video",
 "Send the brief": "clipboard", "Share the brief": "clipboard", "Share the agenda": "clipboard", "Share the format": "clipboard", "Share the plan": "clipboard", "Share the layout": "clipboard",
 "We shortlist": "list", "We build the line-up": "list", "We plan around your sessions": "calendar", "Proposal in 24 hours": "clock",
 "Confirm in writing": "document", "Written confirmation": "document",
 "We coordinate to the event": "pin", "Event-day coordination": "pin", "Coordination to the event": "pin",
 "We check availability and travel": "plane", "One quote, costs listed": "receipt",
 "A plan for your venue": "building", "Artist rotation": "refresh", "Coordination": "users", "Review and adjust": "sliders",
}
def icon(title):
    path = ICONS[TITLE_ICON.get(title, "star")]
    return ('<span class="bico" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" '
            f'stroke-linecap="round" stroke-linejoin="round">{path}</svg></span>')

def _items(items):
    return "".join(f'<li>{icon(t)}<div class="bt"><b>{esc(t)}</b><span>{esc(d)}</span></div></li>' for t, d in items)

def steps(items):
    return '<ol class="bsteps">' + _items(items) + "</ol>"

TICK = ('<span class="btick" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" '
        'stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>')

def bullets(items):
    """Benefit points as an open list, one under the other: a tick mark, the bold point, then a dash and the description on the same line. No boxes."""
    return '<ul class="blist">' + "".join(f'<li>{TICK}<p><b>{esc(t)}</b> &ndash; <span>{esc(d)}</span></p></li>' for t, d in items) + "</ul>"

CSS = ('<style>.bsteps{list-style:none;margin:18px 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;counter-reset:s}'
       '.bsteps li{background:var(--card,#fff);border:1px solid var(--line,#E3DFD3);border-radius:14px;padding:16px 18px;display:grid;grid-template-columns:48px minmax(0,1fr);gap:0 16px;align-items:start;counter-increment:s}'
       '.bsteps .bico{display:grid;place-items:center;width:48px;height:48px;border-radius:50%;background:var(--ink,#1B1B1D);color:#FFFFFF}'
       '.bsteps .bt{display:grid;gap:4px;align-content:center;min-height:48px}'
       'ol.bsteps li b::before{content:counter(s) ". ";color:var(--ink2,#5B5B61)}'
       '.bsteps b{font-size:17px}.bsteps .bt span{color:var(--ink2,#5B5B61);font-size:15px;line-height:1.5}'
       '.blist{list-style:none;margin:20px 0 0;padding:0;display:grid;gap:16px;max-width:60em}'
       '.blist li{display:grid;grid-template-columns:28px minmax(0,1fr);gap:0 14px;align-items:start}'
       '.blist .btick{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--ink,#1B1B1D);color:#FFFFFF;margin-top:-1px}'
       '.blist p{margin:0;font-size:17px;line-height:1.55;color:var(--ink2,#5B5B61)}.blist b{font-size:17px;color:var(--ink,#1B1B1D)}'
       '@media (max-width:700px){.bsteps{grid-template-columns:minmax(0,1fr)}.bsteps li{gap:0 14px;padding:14px 16px}.blist p,.blist b{font-size:16px}}</style>\n')

# The six corporate categories (the corporate counterpart of pre-wedding / wedding-day / post-wedding). Each gets a tile on /corporate/ and a page at /corporate/<slug>/.
# Pictures: img/corporate-<slug>.webp, 640x800. Replace a file with a better photo of the same name and rebuild.
CORP = [
 dict(slug="conferences-summits", name="Corporate Conferences & Summits", img="img/corporate-conferences.webp",
  short="Arrival music, opening acts and networking-break sets for conferences, summits and leadership meets.",
  title="Entertainment for Corporate Conferences and Business Summits | Artisans of Sound",
  desc="Instrumental arrival music, jazz and acoustic ensembles, opening acts and anchors for corporate conferences, business summits, town halls and investor meets.",
  lead="A conference needs music that sets the tone without competing with the agenda. We plan the arrival, the opening, the breaks and the closing around your programme.",
  events=[("Corporate conferences", "Instrumental music for guest arrival, jazz or acoustic ensembles, live music in networking breaks."),
          ("Business summits and leadership meets", "A grand opening act, percussion or instrumental fusion, themed performances."),
          ("Town halls and leadership conferences", "Opening and closing acts, jazz and instrumental fusion."),
          ("Investor meets and press conferences", "Piano, jazz and acoustic ensembles, or ambient instrumental music."),
          ("Exhibitions and trade shows", "Ambient instrumentalists, acoustic musicians and interactive installations.")],
  formats=[fcard("instrband", sub="Jazz and acoustic ensembles for arrivals and networking breaks."), fcard("soloinst", sub="Piano, sax, violin and flute for a quieter, refined setting."),
           fcard("anchor", sub="Hosts to keep the programme and the speakers on time."), fcard("djperc", sub="Percussion and fusion acts for a high-energy opening.")],
  acts=dict(formats=("instrband", "soloinst", "jazz", "anchor", "lounge"), occs=("corporate",), title="Popular for conferences and summits"),
  related=[ocard("corporate"), pcard("corporate/dealer-meets", "djband", "Dealer meets and sales conferences", "DJ-based bands, hosts and high-energy acts for dealer meets.")],
  wa="Hi Artisans of Sound, I would like entertainment options for a corporate conference / summit.", cta="Plan a conference on WhatsApp",
  faq=[("Can the music fit around our sessions?", "Yes. Share the agenda and we plan the acts around session timings, breaks and the closing evening."),
       ("Will the music be too loud for a conference?", "No. For arrivals, networking and dinners we suggest instrumental and acoustic acts at a level that lets people talk."),
       ("Can you supply a host as well?", "Yes. We have anchors who host in Hindi, English and regional languages.")]),
 dict(slug="annual-days-employee-engagement", name="Annual Days & Employee Engagement", img="img/corporate-annual-days.webp",
  short="Bands, singers, DJs, drum circles and festive nights for annual days, family days and team celebrations.",
  title="Entertainment for Annual Days and Employee Engagement Events | Artisans of Sound",
  desc="Bollywood bands, live singers, DJs, drum circles and interactive music for company annual days, family days, festive parties, farewells and team building.",
  lead="Annual days and employee events work when the whole company joins in. We build the line-up for your headcount, from a big stage night to a drum circle on the lawn.",
  events=[("Annual day celebrations", "Bollywood bands, live singers, DJs, rock bands and celebrity artists."),
          ("Family days and employee carnivals", "Live bands, acoustic performers, children's entertainers, folk performers and interactive musical activities."),
          ("Team building and drum circles", "Drum circles, rhythm workshops, group percussion and musical games, sold as an experience."),
          ("Festive celebrations", "Diwali, Holi, Christmas and New Year parties, and Independence Day or Republic Day programmes."),
          ("Farewells, retirements and foundation days", "Acoustic singers and instrumentalists, Bollywood bands, DJs and cultural performances."),
          ("Sports days and campus recruitment events", "DJs, percussionists and interactive musicians.")],
  formats=[fcard("bollylive", sub="Bands and singers for the annual day stage."), fcard("dj", sub="DJs for the after-party and festive nights."),
           fcard("djperc", sub="Percussion and drum-circle style acts for team building."), fcard("magic", sub="Magicians and mentalists for family days.")],
  acts=dict(formats=("bollylive", "djband", "dj", "djperc", "anchor"), occs=("corporate", "annualday"), title="Popular for annual days and team events"),
  related=[pcard("corporate/employee-engagement", "magic", "Employee engagement events", "Interactive acts for team days and offsites."), ocard("annualday"), ocard("diwali"), ocard("christmas"), ocard("retirement")],
  wa="Hi Artisans of Sound, I would like entertainment options for our annual day / employee event.", cta="Plan an annual day on WhatsApp",
  faq=[("We have 500 employees. What do you suggest?", "Tell us the venue, the evening and the budget. We propose a complete line-up, for example a host, a live band and a DJ, instead of asking you to pick artists one by one."),
       ("What is a drum circle session?", "A facilitated group percussion session where every participant plays. It works as team building and suits groups from about 20 to several hundred."),
       ("Can you cover festive office parties?", "Yes. Tell us the festival, the date and the number of people.")]),
 dict(slug="parties-gala-dinners", name="Corporate Parties & Gala Dinners", img="img/corporate-parties-gala.webp",
  short="Jazz, saxophone, Sufi and Bollywood acts, lounge sets and DJs for gala dinners, cocktails and after-parties.",
  title="Entertainment for Corporate Parties, Gala Dinners and Cocktail Nights | Artisans of Sound",
  desc="Jazz bands, saxophone and piano, Sufi and Bollywood singers, lounge acts and DJs for corporate gala dinners, cocktail evenings and after-parties.",
  lead="The evening after the agenda sets the memory of the event. We plan the music from the first drink to the last dance.",
  events=[("Gala dinners", "Jazz bands, saxophone and piano, live instrumental ensembles, Bollywood singers and Sufi performances."),
          ("Cocktail and networking events", "Jazz ensembles, saxophone with DJ, acoustic duos, lounge music and electronic acts."),
          ("Corporate parties and after-parties", "DJs, Bollywood bands, rock and pop bands, celebrity performers and electronic artists.")],
  formats=[fcard("jazz", sub="Jazz for dinners and cocktail hours."), fcard("lounge", sub="Lounge sets that keep conversation easy."),
           fcard("sufibolly", sub="Sufi and Bollywood sets for the main evening."), fcard("dj", sub="DJs to take the night to the dance floor.")],
  acts=dict(formats=("jazz", "lounge", "sufibolly", "bollylive", "dj"), occs=("corporate", "annualday"), title="Popular for gala dinners and parties"),
  related=[ocard("corporate"), ocard("newyear"), ocard("diwali"), fcard("celeb")],
  wa="Hi Artisans of Sound, I would like entertainment options for a corporate party / gala dinner.", cta="Plan a gala night on WhatsApp",
  faq=[("Can the music change through the evening?", "Yes. A common plan is instrumental or jazz for arrivals and dinner, then a band or DJ for the dance floor."),
       ("Do you work with hotels and banquet venues?", "Yes. Tell us the venue and we confirm sound, stage and timing needs before you decide."),
       ("Can we get a celebrity act for the night?", "Where budget and the date allow. Tell us the occasion and we check who is available.")]),
 dict(slug="launches-brand-activations", name="Product Launches & Brand Activations", img="img/corporate-launches-brands.webp",
  short="Launch music, live percussion, electronic acts and themed performers for launches, activations and trade shows.",
  title="Entertainment for Product Launches and Brand Activations | Artisans of Sound",
  desc="Specially composed launch music, live percussion, electronic acts, flash mobs and themed performers for product launches, car and luxury launches and brand activations.",
  lead="A launch has a few minutes to make an impression. We shape the performance around the brand, the reveal and the audience.",
  events=[("Product launches", "Specially composed launch music, live percussion, electronic music acts, instrumental ensembles and themed performances."),
          ("Brand activations", "Flash mobs, promotional musical acts, live bands, themed performers and custom jingles."),
          ("Automobile and luxury brand launches", "Live instrumentalists, electronic acts, jazz bands, contemporary fusion and specially curated acts."),
          ("Exhibitions and trade shows", "Ambient instrumentalists, promotional performers and interactive installations."),
          ("Fashion shows", "Live electronic music, percussion and DJs.")],
  formats=[fcard("dj", sub="DJs and electronic acts for reveals and launch nights."), fcard("djperc", sub="Live percussion with a DJ for a big moment."),
           fcard("instrband", sub="Instrumental ensembles for premium and luxury launches."), fcard("celeb", sub="Special guests for a headline launch.")],
  acts=dict(formats=("dj", "djperc", "instrband", "celeb", "anchor"), occs=("launch", "corporate"), title="Popular for launches and activations"),
  related=[ocard("launch"), ocard("corporate"), fcard("anchor")],
  wa="Hi Artisans of Sound, I would like entertainment options for a product launch / brand activation.", cta="Plan a launch on WhatsApp",
  faq=[("Can you create music or a performance for our launch?", "Yes. Send the brief and we suggest artists who can build a performance or a piece of music around the brand and the reveal."),
       ("Can you help with brand collaborations?", "Yes. Send the brief and we suggest artists and performers that suit the brand and the audience, and quote for the activation."),
       ("Do you supply sound, stage and lighting?", "Many acts bring basic sound, and bigger events need a full production. Tell us the venue and we confirm what each act needs and what is included.")]),
 dict(slug="mice-offsites-destination", name="MICE, Offsites & Destination Events", img="img/corporate-mice-offsites.webp",
  short="Welcome performances, folk and cultural acts, bands and bonfire sessions for offsites, incentive trips and retreats.",
  title="Entertainment for MICE, Corporate Offsites and Destination Events | Artisans of Sound",
  desc="Acoustic bands, folk and cultural artists, DJs, drum circles and bonfire music for corporate offsites, incentive trips, dealer meets and destination events.",
  lead="MICE agencies and corporate teams plan offsites and incentive trips where entertainment is a vendor line item. We supply acts that suit the destination and handle travel and coordination.",
  events=[("Corporate offsites and retreats", "Acoustic bands, live instrumentalists, DJs, drum circles and bonfire music sessions."),
          ("Dealer and distributor meets", "Bollywood bands, live singers, DJs, opening acts and celebrity performances."),
          ("Incentive trips and international tours", "Welcome performances, cultural and folk artists, live bands, DJs and destination-themed entertainment."),
          ("Corporate networking retreats", "Jazz and lounge acts, acoustic performances, live percussion and interactive music sessions.")],
  formats=[fcard("rajfusion", sub="Folk and fusion welcomes for Rajasthan and heritage venues."), fcard("duotrio", sub="Acoustic duos and trios for dinners and bonfires."),
           fcard("djband", sub="DJ-based bands for the gala night."), fcard("anchor", sub="Hosts to run multi-day programmes.")],
  acts=dict(formats=("rajfusion", "duotrio", "djband", "sufiq", "bollylive"), occs=("corporate",), title="Popular for offsites and destination events"),
  related=[pcard("corporate/dealer-meets", "djband", "Dealer meets and sales conferences", "Hosts and gala-night acts."), pcard("corporate/employee-engagement", "magic", "Employee engagement events", "Interactive acts for team days and offsites."), ("/destination-events/", "Destination events", "Palace, beach and resort celebrations, with travel and logistics handled.", "img/wedding-destination.webp"), ("/for-planners/", "For planners and agencies", "One contact for every function's music.", "img/wedding-planners.webp")],
  wa="Hi Artisans of Sound, I would like entertainment options for a corporate offsite / MICE event.", cta="Plan an offsite on WhatsApp",
  faq=[("Do you work with MICE agencies and DMCs?", "Yes. We share shortlists and quotes with agencies. Send the brief and we reply with options you can take to your client."),
       ("Do artists travel to the destination?", "Many do. We list travel, stay and sound separately in the quote so you can see what is included."),
       ("Can you plan several days of entertainment?", "Yes. Tell us the programme and we plan the acts across the days.")]),
 dict(slug="award-ceremonies-celebrations", name="Award Ceremonies & Special Celebrations", img="img/corporate-awards.webp",
  short="Live bands, Bollywood singers, DJs and celebrity performers for award nights and milestone celebrations.",
  title="Entertainment for Corporate Award Ceremonies and Celebrations | Artisans of Sound",
  desc="Hosts, live bands, Bollywood singers, DJs and celebrity performances for corporate award ceremonies, recognition nights, foundation days and milestone celebrations.",
  lead="An award night runs on a tight programme with performances between the presentations. We plan the host, the acts and the timings together.",
  events=[("Award ceremonies", "Live bands, Bollywood singers, DJs, jazz and instrumental acts, and special celebrity performances."),
          ("Recognition and appreciation nights", "Live bands, singers and DJs for employee appreciation days."),
          ("Foundation days and milestone celebrations", "Live bands and cultural performances."),
          ("Office inaugurations and new office launches", "Shehnai, instrumentalists, welcome musicians, percussionists and live bands."),
          ("CSR and cultural events", "Folk artists, cultural groups and community performances.")],
  formats=[fcard("anchor", sub="Hosts to run the show and the presentations."), fcard("bollylive", sub="Bands and singers between award segments."),
           fcard("celeb", sub="A celebrity performance for the headline moment."), fcard("dj", sub="DJs for the after-party.")],
  acts=dict(formats=("anchor", "bollylive", "celeb", "dj", "bollyretro"), occs=("annualday", "corporate"), title="Popular for award nights"),
  related=[ocard("annualday"), ocard("corporate"), fcard("anchor"), fcard("celeb")],
  wa="Hi Artisans of Sound, I would like entertainment options for a corporate award ceremony.", cta="Plan an award night on WhatsApp",
  faq=[("Can you work to a fixed run of show?", "Yes. Share the programme and we plan the acts and the host around the presentations."),
       ("Can you provide a host for the evening?", "Yes. We have anchors who host in Hindi, English and regional languages."),
       ("Can we book a celebrity performer?", "Where budget and the date allow. Tell us the occasion and we check who is available.")]),
]
CORP_STEPS = steps([
  ("Share the brief", "Event type, city, date, audience size, venue, and a rough budget."),
  ("Proposal in 24 hours", "A complete line-up with videos and one clear quote that lists artist, travel and sound separately where they apply."),
  ("Written confirmation", "Advance, artist agreement and a booking confirmation so your team has a paper trail."),
  ("Event-day coordination", "We coordinate timings, sound and travel with the artists and with your production team."),
])
def corp_page(c):
    return dict(slug="corporate/" + c["slug"], parent=("corporate", "Corporate events"), name=c["name"], seg="corporate",
      title=c["title"], desc=c["desc"], kicker="Corporate events: " + c["name"], h1=c["name"].replace("&", "and"), lead=c["lead"],
      wa=c["wa"], cta1=c["cta"], seg_q="corporate", acts=c["acts"],
      sections=[("Events we cover", bullets(c["events"])), ("Entertainment for this kind of event", tiles(c["formats"], 4)), ("How a corporate booking works", CORP_STEPS)],
      links=c["related"], faq=c["faq"])


PAGES = [
 dict(
  slug="for-planners", name="For wedding planners and agencies", seg="wedding",
  title="Entertainment Partner for Wedding Planners and Agencies | Artisans of Sound",
  desc="One point of contact for every function's music: bands, DJs, singers, anchors and special acts across India, with shortlists and quotes in 24 hours.",
  kicker="For wedding planners, agencies and production houses",
  h1="Your entertainment partner for every function",
  lead="You run the wedding. We source and coordinate the music: mehendi, haldi, sangeet, cocktail and reception, with one contact instead of five.",
  wa="Hi Artisans of Sound, I plan weddings and would like to talk about working together on entertainment.",
  cta1="Partner with us on WhatsApp", seg_q="other",
  acts=dict(formats=("bollylive", "djband", "sufibolly", "anchor", "punjabi", "dj"), occs=("sangeet", "wedding"), title="Acts planners ask for most"),
  sections=[
   ("What you get", bullets([
     ("One contact for all functions", "Tell us the functions, cities and budget. We send one shortlist and one quote, not separate threads with every artist."),
     ("Artists checked before we quote", "Our core roster is chosen by a working artist, and every act in the wider network is checked for recent live work before we quote."),
     ("Availability before price", "We confirm the date with the artist first, so you do not quote your client an act that is not free."),
     ("Videos and details ready to share", "Performance videos, line-up, duration and sound needs for each act, in a form you can pass on to your client."),
   ])),
   ("Formats we arrange for weddings", tiles([
     fcard("bollylive", sub="Live Bollywood bands and singers for sangeet, cocktail and reception nights."),
     fcard("punjabi", sub="Punjabi singers and bands for baraat, sangeet and dance floors."),
     fcard("sufibolly", sub="Sufi and Bollywood sets for cocktail evenings and receptions."),
     fcard("dj", sub="Wedding DJs for sangeet and after-parties."),
     fcard("soloinst", sub="Violin, sax, piano and more for entrances, welcomes and dinners."),
     fcard("anchor", sub="Anchors and emcees to run the sangeet and keep the evening moving."),
   ], 6)),
   ("How we work with you", steps([
     ("Send the brief", "Dates, venues, functions, guest count and budget range. A short WhatsApp message is enough."),
     ("We shortlist", "A shortlist with videos for each function, and a clear quote, within 24 hours."),
     ("Confirm in writing", "Once you pick, we take an advance and confirm the artist, fee and timings in writing."),
     ("We coordinate to the event", "We stay in touch with the artists on travel, sound and timings, and with your team on the day."),
   ])),
  ],
  links=[("/weddings/", "Wedding entertainment by function", "Engagement, mehendi, haldi, sangeet, baraat, reception and more, with the acts that suit each.", WEDDING_PICS["hub"]),
         ("/destination-events/", "Destination weddings and events", "Palace, beach and resort celebrations, with travel and logistics handled.", WEDDING_PICS["destination"]),
         ocard("sangeet", photo=WEDDING_PICS["sangeet"]), ocard("reception", photo=WEDDING_PICS["reception"])],
  faq=[("Do you work with planners outside Delhi NCR?", "Yes. We have artists in many states and book for weddings across India, including destination weddings. Tell us the city and dates and we check who is available."),
       ("Can you handle several functions of one wedding?", "Yes. We plan the music across mehendi, haldi, sangeet, cocktail and reception together, so the acts suit each night and the budget is kept in one place."),
       ("How quickly can I get options?", "We send a shortlist and a quote within 24 hours of a clear brief."),
       ("Do you charge planners to ask for options?", "No. Asking for a shortlist and a quote is free. You pay only when you confirm a booking.")],
 ),
 dict(
  slug="corporate", name="Corporate events", seg="corporate",
  title="Corporate Event Entertainment in India | Artisans of Sound",
  desc="Bands, DJs, anchors, instrumentalists and celebrity acts for annual days, award nights, launches and conferences, with one clear proposal in 24 hours.",
  kicker="Corporate events and agencies",
  h1="Live entertainment for corporate events",
  lead="Annual days, award nights, product launches, gala dinners and festive parties. Tell us the audience and the evening you want, and we send a proposal with videos and one clear quote.",
  wa="Hi Artisans of Sound, I would like a proposal for entertainment at a corporate event.",
  cta1="Request a proposal on WhatsApp", seg_q="corporate",
  acts=dict(formats=("anchor", "bollylive", "djband", "instrband", "soloinst"), occs=("corporate", "annualday", "launch"), title="Popular for corporate events"),
  sections=[
   ("Corporate events we entertain", tiles([("/corporate/" + c["slug"] + "/", c["name"], c["short"], c["img"]) for c in CORP], 3)),
   ("Our entertainment", cards([
     fcard("bollylive", "Live bands and DJs", "Bollywood, retro, Punjabi, western and DJ-plus-live formats for after-dinner and party nights."),
     fcard("anchor", "Anchors and emcees", "Hosts for award nights, annual days and launches, in Hindi, English and regional languages."),
     fcard("instrband", "Instrumental and welcome acts", "Solo instrumentalists, duos and jazz or acoustic ensembles for arrivals, networking and dinners."),
     fcard("celeb", "Celebrity and special acts", "Well-known singers, comedians, magicians and performers, where your budget and date allow."),
   ])),
   ("How a corporate booking works", steps([
     ("Share the brief", "Event type, city, date, audience size, venue, and a rough budget."),
     ("Proposal in 24 hours", "A shortlist with videos and one clear quote that covers the artist, travel and sound needs, listed separately where they apply."),
     ("Written confirmation", "Advance, artist agreement and a booking confirmation so your team has a paper trail."),
     ("Event-day coordination", "We coordinate timings, sound and travel with the artists and with your production team."),
   ])),
  ],
  links=[ocard("corporate"), ocard("annualday"), ocard("launch"), ocard("newyear"), ocard("diwali"), fcard("anchor"), fcard("celeb")],
  faq=[("Can you work with our event agency or production house?", "Yes. We regularly share shortlists and quotes with agencies. Send the brief and we reply with options you can take to your client."),
       ("Do you handle invoices and paperwork?", "We provide a quotation, booking confirmation and invoice for each booking. Tell us if your company needs specific vendor documents and we will check what we can supply."),
       ("Can you supply sound and stage?", "Many acts bring their own basic sound, and some events need a full production. Tell us the venue and we confirm what each act needs and what is included before you decide."),
       ("What if an artist cannot perform on the day?", "We confirm artists in writing and keep in touch until the event. Where it is possible we plan a backup option, and we will tell you plainly what that looks like for your date.")],
 ),
 dict(
  slug="hotels", name="Hotels and restaurants", seg="hotel",
  title="Live Music for Hotels, Resorts and Restaurants | Artisans of Sound",
  desc="A monthly live music programme for hotels, resorts and restaurants: acoustic, jazz, Sufi, bands and DJs, with artist rotation and one point of contact.",
  kicker="Hotels, resorts and restaurants",
  h1="A live music calendar for your venue",
  lead="Skip booking one evening at a time. We plan a monthly programme of live acts for your venue, rotate the artists, and handle the coordination.",
  wa="Hi Artisans of Sound, I manage a hotel / restaurant and would like to discuss a monthly live music programme.",
  cta1="Discuss a programme on WhatsApp", seg_q="hotel",
  acts=dict(formats=("lounge", "jazz", "duotrio", "soloinst", "sufibolly"), occs=("venue", "brunch", "dinner"), title="Acts that suit hotels and restaurants"),
  sections=[
   ("A sample weekly calendar", cards([
     fcard("duotrio", "Friday: acoustic Bollywood", "A solo singer or duo for the dinner crowd."),
     fcard("bollylive", "Saturday: live band", "A Bollywood, retro or party band for the busiest night."),
     fcard("jazz", "Sunday: jazz brunch", "Jazz, piano or instrumental acts for a relaxed afternoon."),
     fcard("sufibolly", "Monthly: Sufi or ghazal evening", "A special night that gives guests a reason to book ahead."),
   ])),
   ("Resident and seasonal programming", cards([
     fcard("dj", "Resident DJs", "A regular DJ for lounge, poolside and weekend nights."),
     ocard("diwali", "Festive entertainment", "Holi, Diwali and Christmas programmes that give guests a reason to visit."),
     ocard("newyear", "New Year's Eve programming", "A full New Year's Eve line-up: live acts, DJs and a host."),
   ])),
   ("What a programme includes", steps([
     ("A plan for your venue", "We learn your guests, your slow and busy nights and your room, then propose a schedule and a mix of acts."),
     ("Artist rotation", "Different acts through the month so regulars see something new."),
     ("Coordination", "We handle artist scheduling, confirmations and communication, so your team does not have to."),
     ("Review and adjust", "After the first month we look at what worked and change the calendar."),
   ])),
  ],
  links=[ocard("venue"), ocard("brunch"), fcard("lounge"), fcard("jazz"), fcard("duotrio"), fcard("sufibolly")],
  faq=[("Can we start with a trial?", "Yes. A one-month programme is a sensible way to start. Tell us your venue and the nights you want covered and we propose a calendar."),
       ("Who pays for sound equipment?", "It depends on the venue and the act. We confirm sound needs for each artist and agree who provides what before the programme starts."),
       ("How is a programme priced?", "It depends on the number of performances, the acts and your venue. Share the nights you want covered and a budget range, and we send a quote."),
       ("Do you work with venues outside Delhi NCR?", "Yes. We have artists in many states. Tell us the city and we check who can perform there regularly.")],
 ),
 dict(
  slug="other-events", name="Other events", seg="other",
  title="Live Entertainment for Festivals, College Fests and Private Events | Artisans of Sound",
  desc="Bands, DJs and performers for college festivals, music festivals, cultural and government events, exhibitions, private parties and brand collaborations across India.",
  kicker="Festivals, fests, private and special events",
  h1="Live entertainment for every other kind of event",
  lead="College fests, festivals, cultural programmes, exhibitions, private parties and brand collaborations. Tell us the event and the crowd, and we suggest the acts and send one clear quote.",
  wa="Hi Artisans of Sound, I would like entertainment options for an event.",
  cta1="Plan an event on WhatsApp", seg_q="other",
  acts=dict(formats=("intl", "bollyrock", "western", "dj", "rap"), occs=("college", "house", "birthday"), title="Popular for fests and parties"),
  sections=[
   ("What we cover", cards([
     ocard("college", "College festivals", "DJs, bands, rappers and celebrity performers for fest nights and cultural evenings."),
     pcard("other-events/music-festivals", "bollyrock", "Music festivals and concerts", "Rock, Bollywood and live bands for ticketed shows and open-air festivals."),
     pcard("other-events/government-cultural-events", "rajfusion", "Government and cultural events", "Folk, classical and ghazal acts for cultural programmes and official functions."),
     pcard("other-events/exhibitions", "lounge", "Exhibitions and trade shows", "Instrumentalists and lounge acts for exhibition openings and networking evenings."),
     ocard("house", "Private parties", "Singers, DJs and hosts for birthdays, house parties and family celebrations."),
     fcard("intl", "International acts", "International bands and performers, where dates and travel allow."),
     ocard("launch", "Brand collaborations", "Artists and performers for brand activations, launches and campaigns."),
   ])),
   ("How it works", steps([
     ("Share the brief", "Event type, city, date, audience size, venue and a rough budget."),
     ("We shortlist", "A shortlist with videos and one clear quote within 24 hours."),
     ("Confirm in writing", "An advance and written confirmation of the artist, fee and timings."),
     ("We coordinate to the event", "We stay in touch with the artists and your team on travel, sound and timings."),
   ])),
  ],
  faq=[("Can you supply a full line-up for a festival?", "Tell us the format, the crowd and the budget. We suggest acts across headliners, supporting bands and DJs, and send one quote."),
       ("Do you handle college fests outside Delhi NCR?", "Yes. We have artists in many states. Share the city and dates and we check who is available."),
       ("Can you help with brand collaborations?", "Yes. Send the brief and we suggest artists and performers that suit the brand and the audience, and quote for the activation."),
       ("Do you supply sound, stage and lighting?", "Many acts bring basic sound, and bigger events need a full production. Tell us the venue and we confirm what each act needs and what is included.")],
 ),
 dict(
  slug='corporate/dealer-meets', parent=('corporate', 'Corporate events'), name='Dealer meets and sales conferences', seg='corporate',
  title='Entertainment for Dealer Meets and Sales Conferences | Artisans of Sound',
  desc='Hosts, DJ-based bands, live acts and gala-night entertainment for dealer meets, distributor conferences and sales kick-offs across India.',
  kicker='Corporate events: dealer meets and sales conferences',
  h1='Entertainment for dealer meets and sales conferences',
  lead='Dealer meets, distributor conferences and sales kick-offs need an evening that rewards the room and runs on schedule. We arrange the host, the acts and the gala night around your agenda.',
  wa='Hi Artisans of Sound, I would like entertainment options for a dealer meet / sales conference.',
  cta1='Plan a dealer meet on WhatsApp', seg_q='corporate',
  acts=dict(formats=("djband", "anchor", "bollylive", "comedy", "standup"), occs=("corporate", "annualday"), title="Popular for dealer meets and conferences"),
  sections=[
   ('What we can arrange', cards([
     fcard("anchor", "Anchors and emcees", "A host to run recognition, awards and the flow of the evening, in Hindi, English and regional languages."),
     fcard("djband", "DJ-based bands", "High-energy sets that get a conference crowd on the dance floor after the sessions."),
     fcard("bollylive", "Live Bollywood acts", "Bands and singers for the gala dinner and after-party."),
     fcard("standup", "Stand-up comedians", "A clean, crowd-friendly set to open or close the evening."),
     fcard("celeb", "Celebrity and special guests", "Well-known performers for the headline night, where budget and date allow."),
   ])),
   ("How it works", steps([
     ('Share the agenda', 'City, dates, number of attendees, session timings and the evening you have in mind.'),
     ('We plan around your sessions', 'A shortlist of hosts and acts for the gala night, with videos and one clear quote within 24 hours.'),
     ('Confirm in writing', 'An advance and a written confirmation of the artists, fees and timings.'),
     ('We coordinate to the event', 'We stay in touch with the artists and your team on travel, sound and the run of show.'),
   ])),
  ],
  links=[ocard("corporate"), ocard("annualday"), ocard("newyear"), pcard("corporate/employee-engagement", "magic", "Employee engagement events", "Interactive acts for team days and offsites.")],
  faq=[('Can the entertainment fit around our conference sessions?', 'Yes. Share the agenda and we plan the acts around session timings, breaks and the gala evening.'), ('Can you provide a host in Hindi and English?', 'Yes. We have anchors who host in Hindi, English and regional languages.'), ('Can you plan for a large gathering?', 'Tell us the number of attendees and the venue. We confirm which acts and sound set-up suit the room before you decide.'), ('Can we get options before we fix the date?', 'Yes. Send the city, month and attendance and we reply with options and a quote.')],
 ),
 dict(
  slug='corporate/employee-engagement', parent=('corporate', 'Corporate events'), name='Employee engagement events', seg='corporate',
  title='Entertainment for Employee Engagement Events and Offsites | Artisans of Sound',
  desc='Magicians, mentalists, comedians, hosts and live music for employee engagement events, team days, offsites and office celebrations across India.',
  kicker='Corporate events: employee engagement',
  h1='Entertainment for employee engagement events',
  lead='Team days, offsites, office celebrations and festive parties work best when everyone joins in. We arrange interactive acts, a host and light live music for your group.',
  wa='Hi Artisans of Sound, I would like entertainment options for an employee engagement event.',
  cta1='Plan a team event on WhatsApp', seg_q='corporate',
  acts=dict(formats=("magic", "comedy", "standup", "anchor", "duotrio"), occs=("corporate", "annualday"), title="Popular for team events"),
  sections=[
   ('What we can arrange', cards([
     fcard("magic", "Magicians and mentalists", "Close-up and stage acts that suit mixed groups and keep people talking."),
     fcard("standup", "Stand-up comedians", "A crowd-friendly set for team days and annual gatherings."),
     fcard("anchor", "Hosts and emcees", "A host to run games, recognition and the flow of the day."),
     fcard("duotrio", "Acoustic duos and trios", "Live music for lunches, evenings and relaxed office celebrations."),
     fcard("djband", "DJ-based bands", "Party sets for the closing night of an offsite."),
   ])),
   ("How it works", steps([
     ('Share the format', 'Team size, city, date, venue and whether it is a day event, an evening or an offsite.'),
     ('We shortlist', 'A shortlist with videos and one clear quote within 24 hours.'),
     ('Confirm in writing', 'An advance and a written confirmation of the artists, fees and timings.'),
     ('We coordinate to the event', 'We stay in touch with the artists and your team on timings, space and sound.'),
   ])),
  ],
  links=[ocard("corporate"), ocard("diwali"), ocard("christmas"), ocard("retirement"), pcard("corporate/dealer-meets", "djband", "Dealer meets and sales conferences", "Hosts and gala-night acts.")],
  faq=[('What suits an offsite or team day?', 'Interactive acts such as magicians, mentalists and comedians, with a host and light live music. Tell us the group size and format and we suggest a mix.'), ('Can acts work in a small room or an office?', 'Many solo and duo acts suit smaller spaces. We confirm the space and sound needs of each act before you decide.'), ('Do you plan festive office parties?', 'Yes. See our Diwali and Christmas party pages, or tell us the occasion and the number of people.'), ('Can you cover several locations or cities?', 'Yes. We have artists in many states. Share the cities and dates and we check who is available.')],
 ),
 dict(
  slug='other-events/music-festivals', parent=('other-events', 'Other events'), name='Music festivals and concerts', seg='other',
  title='Bands, DJs and Headliners for Music Festivals and Concerts | Artisans of Sound',
  desc='Rock, Bollywood and live bands, DJs, rappers and international acts for music festivals, ticketed concerts and open-air shows across India.',
  kicker='Other events: music festivals and concerts',
  h1='Acts for music festivals and concerts',
  lead='Ticketed concerts, open-air festivals and city music nights need a line-up that suits the crowd and the budget. Tell us the format and we suggest headliners, supporting acts and DJs.',
  wa='Hi Artisans of Sound, I would like act options for a music festival / concert.',
  cta1='Plan a festival line-up on WhatsApp', seg_q='other',
  acts=dict(formats=("bollyrock", "western", "rap", "dj", "intl", "bollylive"), occs=("college", "newyear"), title="Popular for festivals and concerts"),
  sections=[
   ('What we can arrange', cards([
     fcard("bollyrock", sub="Rock bands with Bollywood and original sets for festival stages."),
     fcard("western", sub="Western and rock bands for open-air shows and festival slots."),
     fcard("rap", sub="Rappers and hip hop acts for youth-focused and city festival line-ups."),
     fcard("dj", sub="DJs for stage closers, after-parties and silent-disco style nights."),
     fcard("intl", sub="International bands and performers, where dates and travel allow."),
     fcard("celeb", sub="Well-known performers to headline, where budget and date allow."),
   ])),
   ("How it works", steps([
     ('Share the format', 'Festival or concert, city, date, venue, expected crowd and a budget range.'),
     ('We build the line-up', 'Headliners, supporting acts and DJs with videos, and one clear quote within 24 hours.'),
     ('Confirm in writing', 'An advance and a written confirmation of each act, fee and set time.'),
     ('We coordinate to the event', 'We stay in touch with the artists and your production team on travel, sound checks and set times.'),
   ])),
  ],
  links=[ocard("college"), ocard("newyear"), fcard("intl"), pcard("other-events/government-cultural-events", "rajfusion", "Government and cultural events", "Folk and classical acts for cultural programmes.")],
  faq=[('Can you build a full line-up?', 'Tell us the format, the crowd and the budget. We suggest headliners, supporting bands and DJs across the running order and send one quote.'), ('Do you work with ticketed concerts?', 'Yes. Share the capacity, venue, date and budget and we suggest acts that suit the audience.'), ('Can you bring international acts?', 'Where dates, travel and budget allow. See our international bands page for the acts we can approach.'), ('Who provides sound, stage and lighting?', 'Festivals normally need a full production. Tell us what the venue or your production partner provides and we confirm what each act needs.')],
 ),
 dict(
  slug='other-events/government-cultural-events', parent=('other-events', 'Other events'), name='Government and cultural events', seg='other',
  title='Artists for Government and Cultural Events in India | Artisans of Sound',
  desc='Folk, classical, ghazal, Sufi qawwali and devotional acts, instrumentalists and anchors for cultural programmes, festivals and official functions across India.',
  kicker='Other events: government and cultural events',
  h1='Artists for government and cultural events',
  lead='Cultural festivals, state and civic programmes, heritage events and official functions call for acts with the right tradition and the right stage presence. We arrange the artists, the anchor and the coordination.',
  wa='Hi Artisans of Sound, I would like artist options for a cultural / government event.',
  cta1='Plan a cultural event on WhatsApp', seg_q='other',
  acts=dict(formats=("rajfusion", "ghazal", "sufiq", "devotional", "instrband", "anchor"), occs=(), title="Acts for cultural programmes"),
  sections=[
   ('What we can arrange', cards([
     fcard("rajfusion", sub="Rajasthani folk and fusion acts for cultural festivals and heritage events."),
     fcard("ghazal", sub="Ghazal and classical singers for evening programmes and cultural nights."),
     fcard("sufiq", sub="Qawwali and Sufi groups for festivals and special evenings."),
     fcard("devotional", sub="Devotional and bhajan singers for religious and festival programmes."),
     fcard("instrband", sub="Instrumental ensembles for official functions and receptions."),
     fcard("anchor", sub="Anchors and emcees to host programmes in Hindi, English and regional languages."),
   ])),
   ("How it works", steps([
     ('Share the brief', 'Event, city, date, venue, programme length, audience and any protocol or documentation you need.'),
     ('We shortlist', 'A shortlist with videos and one clear quote within 24 hours.'),
     ('Confirm in writing', 'A quotation, an advance and a written booking confirmation of the artists, fees and timings.'),
     ('We coordinate to the event', 'We stay in touch with the artists and your team on travel, sound and the run of show.'),
   ])),
  ],
  links=[ocard("college"), fcard("rajfusion"), fcard("sufiq"), fcard("ghazal")],
  faq=[("Can you work with a department's paperwork requirements?", 'We provide a quotation, booking confirmation and invoice for each booking. Tell us what documents your department needs and we confirm what we can supply.'), ('Do you have folk and regional traditions on your roster?', 'Our roster includes Rajasthani folk and fusion, Sufi qawwali, ghazal, classical and devotional acts across several states. Tell us the region and tradition you need.'), ('Can you supply an anchor for an official programme?', 'Yes. We have anchors who host in Hindi, English and regional languages.'), ('Can you plan multi-day programmes?', 'Yes. Share the number of days and the programme length and we suggest a mix of acts across the days.')],
 ),
 dict(
  slug='other-events/exhibitions', parent=('other-events', 'Other events'), name='Exhibitions and trade shows', seg='other',
  title='Live Music for Exhibitions and Trade Shows | Artisans of Sound',
  desc='Instrumentalists, jazz and lounge acts, acoustic duos and anchors for exhibition openings, trade shows and networking evenings across India.',
  kicker='Other events: exhibitions and trade shows',
  h1='Live music for exhibitions and trade shows',
  lead='Exhibition openings, trade shows and networking evenings need music that sets the mood without drowning out conversation. We arrange instrumentalists, acoustic acts and hosts that suit the floor.',
  wa='Hi Artisans of Sound, I would like entertainment options for an exhibition / trade show.',
  cta1='Plan an exhibition on WhatsApp', seg_q='other',
  acts=dict(formats=("lounge", "soloinst", "instrband", "jazz", "duotrio"), occs=("venue",), title="Acts that suit exhibitions"),
  sections=[
   ('What we can arrange', cards([
     fcard("lounge", sub="Lounge acts for stands, atriums and networking areas."),
     fcard("soloinst", sub="Violin, sax, piano and more for openings and arrivals."),
     fcard("jazz", sub="Jazz bands for evening receptions and hospitality areas."),
     fcard("duotrio", sub="Acoustic duos and trios for relaxed, low-volume sets."),
     fcard("instrband", sub="Instrumental ensembles for opening ceremonies."),
     fcard("anchor", sub="Anchors and emcees to host stage programmes and launches."),
   ])),
   ("How it works", steps([
     ('Share the layout', 'City, dates, venue, floor plan or stage area, daily timings and a budget range.'),
     ('We shortlist', 'A shortlist with videos and one clear quote within 24 hours.'),
     ('Confirm in writing', 'An advance and a written confirmation of the artists, fees and timings.'),
     ('We coordinate to the event', 'We stay in touch with the artists and the organisers on set-up, sound levels and timings.'),
   ])),
  ],
  links=[ocard("corporate"), ocard("launch"), ocard("venue"), fcard("soloinst")],
  faq=[('Can acts play at low volume near the stalls?', 'Yes. Acoustic and instrumental acts suit exhibition floors and openings. Tell us the layout and we suggest acts and volume levels that work for exhibitors and visitors.'), ('Can you cover a multi-day show?', 'Yes. Share the days and daily timings and we plan a rotation of acts across the show.'), ('Do you supply sound for the performances?', 'Many solo and duo acts bring basic sound. Tell us the venue and we confirm what each act needs and what is included.'), ('Can you provide a host for the stage programme?', 'Yes. We have anchors who host in Hindi, English and regional languages.')],
 ),
]

DEST_CITIES = ("Goa", "Jaipur", "Udaipur", "Jodhpur")
# each destination card uses the city photo from the /wedding/ page (img/city/photo-<slug>.webp)
def city_photo(acts, aliases, city):
    return f"img/city/photo-{L['wedding']['cities'][city]['slug']}.webp"

def build_destination(acts):
    W = L["wedding"]["cities"]
    url = f"{SITE}/destination-events/"
    w = B.wa("Hi Artisans of Sound, I am planning a destination wedding / event and would like entertainment options.")
    enq = "/?for=wedding#enquiry"
    title = "Entertainment for Destination Weddings and Events in India | Artisans of Sound"
    desc = "Live bands, Sufi and folk acts, DJs and anchors for destination weddings and events in Goa, Jaipur, Udaipur, Jodhpur and across India, with travel and logistics handled."
    top = [(f"/wedding/{W[c]['slug']}/", c, CITY_TAG[c], W[c]["slug"]) for c in DEST_CITIES]
    more = [(f"/wedding/{v['slug']}/", c) for c, v in W.items() if c not in DEST_CITIES]
    def city_text(items):
        """The other cities as one sentence of links: 'More cities: Delhi, Mumbai, ... and Pune.'"""
        links = [f'<a href="{h}">{esc(c)}</a>' for h, c in items]
        return '<p class="ctext">More cities: ' + (", ".join(links[:-1]) + " and " + links[-1] if len(links) > 1 else links[0]) + ".</p>"
    faq = [("Do your artists travel for destination events?", "Many of them do. We confirm who is available for your dates and what travel, stay and local transport involve before we send a quote."),
           ("Can we use artists based in the destination city?", "Where the city has acts on our roster we show them, and using local artists can reduce travel costs. Tell us the city and we suggest both local and travelling options."),
           ("Who pays for travel and accommodation?", "It depends on the artist and the event. We list travel, stay and sound separately in the quote so you can see exactly what is included."),
           ("How early should we book?", "Peak wedding dates in destination cities fill up early, so ask for options as soon as you have dates and a venue.")]
    body = ('    <p class="kicker">Destination weddings and events</p>\n    <h1 class="uh">Entertainment for destination weddings and events</h1>\n'
            '    <p class="alead">Palace, beach and resort celebrations need acts that suit the setting and can handle the travel. Tell us the destination, dates and functions, and we send options with one clear quote.</p>\n'
            f'    <div class="ask"><a class="dark-pill" href="{esc(w)}" target="_blank" rel="noopener">Plan a destination event on WhatsApp</a><a class="ghost-pill" href="{enq}">Send an enquiry</a></div>\n' + CSS + TILE_CSS + ICON_CSS + CARD_PIC_CSS + '<style>.ctext{margin:22px 0 0;font-size:17px;line-height:1.7;color:var(--ink2,#5B5B61);max-width:60em}.ctext a{color:var(--ink,#1B1B1D);font-weight:600;text-decoration:underline;text-underline-offset:3px}.ctext a:hover,.ctext a:focus-visible{text-decoration-thickness:2px}</style>\n')
    body += B.sec("Popular destinations", photo_cards(top) + (city_text(more) if more else ""))
    body += B.sec("Formats that suit a destination event", tiles([
        fcard("sufiq", sub="Qawwali and Sufi groups for evenings in forts, palaces and courtyards."),
        fcard("rajfusion", sub="Rajasthani folk and fusion acts for welcomes, baraat and Rajasthan weddings."),
        fcard("bollylive", sub="Live Bollywood bands and singers for sangeet and reception nights."),
        fcard("djperc", sub="DJ and percussion acts for sundowners and after-parties."),
        fcard("soloinst", sub="Solo instrumentalists for arrivals, ceremonies and dinners."),
        fcard("anchor", sub="Anchors and emcees to host multi-day programmes."),
    ], 6))
    body += B.sec("How we handle the logistics", steps([
        ("Share the plan", "Destination, venue, dates, the functions that need music and a budget range."),
        ("We check availability and travel", "We confirm which artists are free and able to travel, and what travel, stay and local transport would involve."),
        ("One quote, costs listed", "The artist fee, travel, stay and sound needs are shown separately where they apply."),
        ("Coordination to the event", "We stay in touch with the artists and your team on arrival, sound checks and timings."),
    ]))
    body += B.sec("More for your wedding", cards([("/weddings/", "Wedding entertainment by function", "Pick the function, see the acts that suit it: engagement, mehendi, haldi, sangeet, baraat and more.", WEDDING_PICS["hub"])]))
    body += B.faq_block(faq)
    body += (f'    <div class="ucta"><h2>Planning a destination event?</h2><p>Send the destination and dates. We reply with options and one clear quote within 24 hours.</p><div class="ask">'
             f'<a class="dark-pill" href="{enq}">Send an enquiry</a><a class="ghost-pill" href="{esc(w)}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></div>\n')
    mine = pick(acts, ("sufiq", "rajfusion", "bollylive"), ("wedding",), 6)
    B.write(["destination-events"], B.shell(url, title, desc, [("Home", "/"), ("Destination events", "/destination-events/")], body, mine, faq, "Hi Artisans of Sound, I am planning a destination wedding / event."))
    return url

def build(acts, reg):
    urls = []
    PAGES.extend(corp_page(c) for c in CORP if not any(p["slug"] == "corporate/" + c["slug"] for p in PAGES))
    for p in PAGES:
        url = f"{SITE}/{p['slug']}/"
        w = B.wa(p["wa"])
        a = p["acts"]
        mine = pick(acts, a["formats"], a["occs"])
        enq = f"/?for={p['seg_q']}#enquiry"
        body = (f'    <p class="kicker">{esc(p["kicker"])}</p>\n    <h1 class="uh">{esc(p["h1"])}</h1>\n    <p class="alead">{esc(p["lead"])}</p>\n'
                f'    <div class="ask"><a class="dark-pill" href="{esc(w)}" target="_blank" rel="noopener">{esc(p["cta1"])}</a><a class="ghost-pill" href="{enq}">Send an enquiry</a></div>\n' + CSS + TILE_CSS)
        for title, inner in p["sections"]:
            body += B.sec(title, inner)
        body += B.sec(a["title"], B.grid(mine, ctx=None) + '<p class="anote"><a href="/artists/">See every act</a>.</p>')
        if p.get("links"):
            body += B.sec("Browse related pages", cards(p["links"]))
        body += B.faq_block(p["faq"])
        body += (f'    <div class="ucta"><h2>Ready to talk?</h2><p>Send a short brief. We reply with options and one clear quote within 24 hours.</p><div class="ask">'
                 f'<a class="dark-pill" href="{enq}">Send an enquiry</a><a class="ghost-pill" href="{esc(w)}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></div>\n')
        par = p.get("parent")
        crumbs = [("Home", "/")] + ([(par[1], f"/{par[0]}/")] if par else []) + [(p["name"], f"/{p['slug']}/")]
        B.write(p["slug"].split("/"), B.shell(url, p["title"], p["desc"], crumbs, body, mine, p["faq"], p["wa"]))
        urls.append(url)
    urls.append(build_destination(acts))
    return [f"<url><loc>{u}</loc></url>" for u in urls]
