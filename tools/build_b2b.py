#!/usr/bin/env python3
"""Business pages for the people who buy entertainment in volume: /for-planners/, /corporate/ and /hotels/.
Run by tools/build.py. Edit the copy in PAGES below, then rebuild. No prices are shown on these pages on purpose."""
import build_updates as U
import build_landing as B
esc = U.esc
SITE = U.SITE

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
   ("How we work with you", steps([
     ("Send the brief", "Dates, venues, functions, guest count and budget range. A short WhatsApp message is enough."),
     ("We shortlist", "A shortlist with videos for each function, and a clear quote, within 24 hours."),
     ("Confirm in writing", "Once you pick, we take an advance and confirm the artist, fee and timings in writing."),
     ("We coordinate to the event", "We stay in touch with the artists on travel, sound and timings, and with your team on the day."),
   ])),
  ],
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
   ("What we can arrange", bullets([
     ("Live bands and DJs", "Bollywood, retro, Punjabi, western and DJ-plus-live formats for after-dinner and party nights."),
     ("Anchors and emcees", "Hosts for award nights, annual days and launches, in Hindi, English and regional languages."),
     ("Instrumental and welcome acts", "Solo instrumentalists, duos and jazz or acoustic ensembles for arrivals, networking and dinners."),
     ("Celebrity and special acts", "Well-known singers, comedians, magicians and performers, where your budget and date allow."),
   ])),
   ("How a corporate booking works", steps([
     ("Share the brief", "Event type, city, date, audience size, venue, and a rough budget."),
     ("Proposal in 24 hours", "A shortlist with videos and one clear quote that covers the artist, travel and sound needs, listed separately where they apply."),
     ("Written confirmation", "Advance, artist agreement and a booking confirmation so your team has a paper trail."),
     ("Event-day coordination", "We coordinate timings, sound and travel with the artists and with your production team."),
   ])),
  ],
  links=[("/occasions/corporate-events/", "Corporate events"), ("/occasions/annual-day-award-nights/", "Annual day and award nights"), ("/occasions/product-launch-brand-events/", "Product launches and brand events"),
         ("/occasions/new-year-party/", "New Year parties"), ("/occasions/diwali-party/", "Diwali parties"), ("/book/anchors-and-emcees/", "Anchors and emcees"), ("/book/celebrity-artists/", "Celebrity artists")],
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
   ("A sample weekly calendar", bullets([
     ("Friday: acoustic Bollywood", "A solo singer or duo for the dinner crowd."),
     ("Saturday: live band", "A Bollywood, retro or party band for the busiest night."),
     ("Sunday: jazz brunch", "Jazz, piano or instrumental acts for a relaxed afternoon."),
     ("Monthly: Sufi or ghazal evening", "A special night that gives guests a reason to book ahead."),
   ])),
   ("What a programme includes", steps([
     ("A plan for your venue", "We learn your guests, your slow and busy nights and your room, then propose a schedule and a mix of acts."),
     ("Artist rotation", "Different acts through the month so regulars see something new."),
     ("Coordination", "We handle artist scheduling, confirmations and communication, so your team does not have to."),
     ("Review and adjust", "After the first month we look at what worked and change the calendar."),
   ])),
  ],
  links=[("/occasions/restaurant-cafe-hotel-nights/", "Restaurant, cafe and hotel nights"), ("/occasions/brunch-lounge/", "Brunch and lounge"), ("/book/lounge-acts/", "Lounge acts"),
         ("/book/jazz-bands/", "Jazz bands"), ("/book/duos-and-trios/", "Duos and trios"), ("/book/sufi-bollywood-bands/", "Sufi and Bollywood bands")],
  faq=[("Can we start with a trial?", "Yes. A one-month programme is a sensible way to start. Tell us your venue and the nights you want covered and we propose a calendar."),
       ("Who pays for sound equipment?", "It depends on the venue and the act. We confirm sound needs for each artist and agree who provides what before the programme starts."),
       ("How is a programme priced?", "It depends on the number of performances, the acts and your venue. Share the nights you want covered and a budget range, and we send a quote."),
       ("Do you work with venues outside Delhi NCR?", "Yes. We have artists in many states. Tell us the city and we check who can perform there regularly.")],
 ),
]

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
            body += B.sec("Browse related pages", B.links(p["links"]))
        body += B.faq_block(p["faq"])
        body += (f'    <div class="ucta"><h2>Ready to talk?</h2><p>Send a short brief. We reply with options and one clear quote within 24 hours.</p><div class="ask">'
                 f'<a class="dark-pill" href="{enq}">Send an enquiry</a><a class="ghost-pill" href="{esc(w)}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></div>\n')
        B.write([p["slug"]], B.shell(url, p["title"], p["desc"], [("Home", "/"), (p["name"], f"/{p['slug']}/")], body, mine, p["faq"], p["wa"]))
        urls.append(url)
    return [f"<url><loc>{u}</loc></url>" for u in urls]
