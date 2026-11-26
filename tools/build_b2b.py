#!/usr/bin/env python3
"""Business pages for the people who buy entertainment in volume: /for-planners/, /corporate/, /hotels/, /destination-events/ and /other-events/.
Run by tools/build.py. Edit the copy in PAGES below, then rebuild. No prices are shown on these pages on purpose."""
import build_updates as U
import build_landing as B
esc = U.esc
SITE = U.SITE


L = B.L
def first(d): return d["intro"].split(". ")[0].rstrip(".") + "."
def fcard(key, title=None, sub=None):
    d = L["formats"][key]
    return (f"/book/{d['slug']}/", title or d["name"], sub or first(d), d.get("photo"))
def ocard(key, title=None, sub=None):
    d = L["occasions"][key]
    return (f"/occasions/{d['slug']}/", title or d["name"], sub or first(d), d.get("photo"))
def qcard(seg, key, title, sub, kind="fmt"):
    d = L["formats" if kind == "fmt" else "occasions"][key]
    return (f"/?for={seg}#enquiry", title, sub, d.get("photo"))
def cards(items):
    return '<ul class="hublist">' + "".join(B.hub_item(e) for e in items) + "</ul>"

def pick(acts, formats=(), occs=(), n=6):
    out = [a for a in acts if any(f in a["f"] for f in formats) or any(o in a["occ"] for o in occs)]
    return sorted(out, key=B.rank)[:n]

def steps(items):
    return '<ol class="bsteps">' + "".join(f"<li><b>{esc(t)}</b><span>{esc(d)}</span></li>" for t, d in items) + "</ol>"

def bullets(items):
    return '<ul class="bsteps bul">' + "".join(f"<li><b>{esc(t)}</b><span>{esc(d)}</span></li>" for t, d in items) + "</ul>"

CSS = ('<style>.bsteps{list-style:none;margin:18px 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;counter-reset:s}'
       '.bsteps li{background:var(--card,#fff);border:1px solid var(--line,#E3DFD3);border-radius:14px;padding:16px 18px;display:grid;gap:4px;counter-increment:s}'
       'ol.bsteps li b::before{content:counter(s) ". ";color:var(--ink2,#5B5B61)}'
       '.bsteps b{font-size:17px}.bsteps span{color:var(--ink2,#5B5B61);font-size:15px;line-height:1.5}'
       '@media (max-width:700px){.bsteps{grid-template-columns:minmax(0,1fr)}}</style>\n')

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
   ("Formats we arrange for weddings", cards([
     fcard("bollylive", sub="Live Bollywood bands and singers for sangeet, cocktail and reception nights."),
     fcard("punjabi", sub="Punjabi singers and bands for baraat, sangeet and dance floors."),
     fcard("sufibolly", sub="Sufi and Bollywood sets for cocktail evenings and receptions."),
     fcard("dj", sub="Wedding DJs for sangeet and after-parties."),
     fcard("soloinst", sub="Violin, sax, piano and more for entrances, welcomes and dinners."),
     fcard("anchor", sub="Anchors and emcees to run the sangeet and keep the evening moving."),
   ])),
   ("How we work with you", steps([
     ("Send the brief", "Dates, venues, functions, guest count and budget range. A short WhatsApp message is enough."),
     ("We shortlist", "A shortlist with videos for each function, and a clear quote, within 24 hours."),
     ("Confirm in writing", "Once you pick, we take an advance and confirm the artist, fee and timings in writing."),
     ("We coordinate to the event", "We stay in touch with the artists on travel, sound and timings, and with your team on the day."),
   ])),
  ],
  links=[("/destination-events/", "Destination weddings and events", "Palace, beach and resort celebrations, with travel and logistics handled.", L["occasions"]["wedding"].get("photo")),
         ocard("sangeet"), ocard("reception")],
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
   ("What we can arrange", cards([
     fcard("bollylive", "Live bands and DJs", "Bollywood, retro, Punjabi, western and DJ-plus-live formats for after-dinner and party nights."),
     fcard("anchor", "Anchors and emcees", "Hosts for award nights, annual days and launches, in Hindi, English and regional languages."),
     fcard("instrband", "Instrumental and welcome acts", "Solo instrumentalists, duos and jazz or acoustic ensembles for arrivals, networking and dinners."),
     fcard("celeb", "Celebrity and special acts", "Well-known singers, comedians, magicians and performers, where your budget and date allow."),
     qcard("corporate", "djband", "Dealer meets and sales conferences", "DJ-based bands, hosts and high-energy acts for dealer meets, conferences and gala dinners."),
     qcard("corporate", "magic", "Employee engagement events", "Magicians, mentalists, comedians and interactive acts for team days and offsites."),
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
     qcard("other", "bollyrock", "Music festivals and concerts", "Rock, Bollywood and live bands for ticketed shows and open-air festivals."),
     qcard("other", "rajfusion", "Government and cultural events", "Folk, classical and ghazal acts for cultural programmes and official functions."),
     qcard("other", "lounge", "Exhibitions and trade shows", "Instrumentalists and lounge acts for exhibition openings and networking evenings."),
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
]

DEST_CITIES = ("Goa", "Jaipur", "Udaipur", "Jodhpur")
# few acts are based in these cities, so each card falls back to a category photo that suits the destination
DEST_FALLBACK = {"Goa": "western", "Jaipur": "bollyretro", "Udaipur": "sufibolly", "Jodhpur": "ghazal"}
def city_photo(acts, aliases, city):
    loc = sorted([a for a in acts if a["city"] in aliases and a["photo"]], key=B.rank)
    return loc[0]["photo"] if loc else L["formats"][DEST_FALLBACK[city]].get("photo")

def build_destination(acts):
    W = L["wedding"]["cities"]
    url = f"{SITE}/destination-events/"
    w = B.wa("Hi Artisans of Sound, I am planning a destination wedding / event and would like entertainment options.")
    enq = "/?for=wedding#enquiry"
    title = "Entertainment for Destination Weddings and Events in India | Artisans of Sound"
    desc = "Live bands, Sufi and folk acts, DJs and anchors for destination weddings and events in Goa, Jaipur, Udaipur, Jodhpur and across India, with travel and logistics handled."
    top = [(f"/wedding/{W[c]['slug']}/", f"Wedding artists in {c}", W[c]["blurb"].split(". ")[0].rstrip(".") + ".", city_photo(acts, W[c]["alias"], c)) for c in DEST_CITIES]
    more = [(f"/wedding/{v['slug']}/", f"Wedding artists in {c}") for c, v in W.items() if c not in DEST_CITIES]
    faq = [("Do your artists travel for destination events?", "Many of them do. We confirm who is available for your dates and what travel, stay and local transport involve before we send a quote."),
           ("Can we use artists based in the destination city?", "Where the city has acts on our roster we show them, and using local artists can reduce travel costs. Tell us the city and we suggest both local and travelling options."),
           ("Who pays for travel and accommodation?", "It depends on the artist and the event. We list travel, stay and sound separately in the quote so you can see exactly what is included."),
           ("How early should we book?", "Peak wedding dates in destination cities fill up early, so ask for options as soon as you have dates and a venue.")]
    body = ('    <p class="kicker">Destination weddings and events</p>\n    <h1 class="uh">Entertainment for destination weddings and events</h1>\n'
            '    <p class="alead">Palace, beach and resort celebrations need acts that suit the setting and can handle the travel. Tell us the destination, dates and functions, and we send options with one clear quote.</p>\n'
            f'    <div class="ask"><a class="dark-pill" href="{esc(w)}" target="_blank" rel="noopener">Plan a destination event on WhatsApp</a><a class="ghost-pill" href="{enq}">Send an enquiry</a></div>\n' + CSS)
    body += B.sec("Popular destinations", cards(top) + ('<div style="margin-top:18px">' + B.links(more) + "</div>" if more else ""))
    body += B.sec("Formats that suit a destination event", cards([
        fcard("sufiq", sub="Qawwali and Sufi groups for evenings in forts, palaces and courtyards."),
        fcard("rajfusion", sub="Rajasthani folk and fusion acts for welcomes, baraat and Rajasthan weddings."),
        fcard("bollylive", sub="Live Bollywood bands and singers for sangeet and reception nights."),
        fcard("djperc", sub="DJ and percussion acts for sundowners and after-parties."),
        fcard("soloinst", sub="Solo instrumentalists for arrivals, ceremonies and dinners."),
        fcard("anchor", sub="Anchors and emcees to host multi-day programmes."),
    ]))
    body += B.sec("How we handle the logistics", steps([
        ("Share the plan", "Destination, venue, dates, the functions that need music and a budget range."),
        ("We check availability and travel", "We confirm which artists are free and able to travel, and what travel, stay and local transport would involve."),
        ("One quote, costs listed", "The artist fee, travel, stay and sound needs are shown separately where they apply."),
        ("Coordination to the event", "We stay in touch with the artists and your team on arrival, sound checks and timings."),
    ]))
    body += B.faq_block(faq)
    body += (f'    <div class="ucta"><h2>Planning a destination event?</h2><p>Send the destination and dates. We reply with options and one clear quote within 24 hours.</p><div class="ask">'
             f'<a class="dark-pill" href="{enq}">Send an enquiry</a><a class="ghost-pill" href="{esc(w)}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></div>\n')
    mine = pick(acts, ("sufiq", "rajfusion", "bollylive"), ("wedding",), 6)
    B.write(["destination-events"], B.shell(url, title, desc, [("Home", "/"), ("Destination events", "/destination-events/")], body, mine, faq, "Hi Artisans of Sound, I am planning a destination wedding / event."))
    return url

def build(acts, reg):
    urls = []
    for p in PAGES:
        url = f"{SITE}/{p['slug']}/"
        w = B.wa(p["wa"])
        a = p["acts"]
        mine = pick(acts, a["formats"], a["occs"])
        enq = f"/?for={p['seg_q']}#enquiry"
        body = (f'    <p class="kicker">{esc(p["kicker"])}</p>\n    <h1 class="uh">{esc(p["h1"])}</h1>\n    <p class="alead">{esc(p["lead"])}</p>\n'
                f'    <div class="ask"><a class="dark-pill" href="{esc(w)}" target="_blank" rel="noopener">{esc(p["cta1"])}</a><a class="ghost-pill" href="{enq}">Send an enquiry</a></div>\n' + CSS)
        for title, inner in p["sections"]:
            body += B.sec(title, inner)
        body += B.sec(a["title"], B.grid(mine, ctx=None) + '<p class="anote"><a href="/artists/">See every act</a>.</p>')
        if p.get("links"):
            body += B.sec("Browse related pages", cards(p["links"]))
        body += B.faq_block(p["faq"])
        body += (f'    <div class="ucta"><h2>Ready to talk?</h2><p>Send a short brief. We reply with options and one clear quote within 24 hours.</p><div class="ask">'
                 f'<a class="dark-pill" href="{enq}">Send an enquiry</a><a class="ghost-pill" href="{esc(w)}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></div>\n')
        B.write([p["slug"]], B.shell(url, p["title"], p["desc"], [("Home", "/"), (p["name"], f"/{p['slug']}/")], body, mine, p["faq"], p["wa"]))
        urls.append(url)
    urls.append(build_destination(acts))
    return [f"<url><loc>{u}</loc></url>" for u in urls]
