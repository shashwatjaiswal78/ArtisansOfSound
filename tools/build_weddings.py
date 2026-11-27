#!/usr/bin/env python3
"""Wedding functions: the hub /weddings/ and one page per function, /weddings/<function>/.
The hub groups functions into pre-wedding, wedding day, post-wedding and other celebrations. Each function page shows the act types
that suit it, with the acts on the roster for each. Edit FUNCS below (copy, act types, grouping), then run tools/build.py.
An act type is (label, format key). A key of None means we have no listed acts of that kind: it appears under "Ask us" instead of as a section."""
import build_updates as U
import build_landing as B
import build_b2b as X
esc = U.esc; SITE = U.SITE; L = B.L

GROUPS = [
 ("pre", "Pre-wedding celebrations", "Families often book different artists for each of these."),
 ("day", "Wedding-day ceremonies", "Separate bookings, even when they happen on the same day."),
 ("post", "Post-wedding celebrations", "The reception and the parties around it."),
 ("other", "Other functions and celebrations", "Ceremonies, special evenings and gatherings around the wedding."),
]

# slug, group, name, occasion page (or None), intro, tip, act types
FUNCS = [
 ("engagement-sagai", "pre", "Engagement / Ring ceremony (Sagai)", "engagement",
  "An engagement is intimate and romantic, so the music is usually soft, melodic and easy to talk over.",
  "Pick acts that suit a smaller room: acoustic singers and instrumentalists work well, and a live band suits a bigger celebration.",
  [("Romantic singers and acoustic duos", "duotrio"), ("Solo singers", "solosing"), ("Violin, flute and solo instrumentalists", "soloinst"), ("Bollywood live bands", "bollylive")], []),
 ("mehendi", "pre", "Mehendi ceremony", "mehendi",
  "Mehendi is relaxed and colourful: guests sit for hours, so the music is light, folk-flavoured and made for singing along.",
  "Unplugged and folk acts keep the mood warm without drowning out conversation. Add a dhol player if you want a bigger moment.",
  [("Bollywood unplugged singers", "solosing"), ("Acoustic bands and duos", "duotrio"), ("Folk and Rajasthani folk artists", "rajfusion"), ("Punjabi singers and live bands", "punjabi")], ["Dhol players"]),
 ("haldi", "pre", "Haldi ceremony", "haldi",
  "Haldi is loud, messy and joyful, and the music should be high on rhythm so everyone joins in.",
  "Percussion-led acts and dhol groups work best. Outdoor haldis need acts that can set up quickly and handle a crowd.",
  [("DJ with live percussion", "djperc"), ("Punjabi singers and live bands", "punjabi"), ("Folk musicians", "rajfusion"), ("Bollywood singers", "solosing"), ("DJs", "dj")], ["Dhol and nagada players"]),
 ("sangeet", "pre", "Sangeet night", "sangeet",
  "The sangeet is usually the biggest entertainment night of a wedding, with performances, dancing and a long programme.",
  "Think in blocks: a live act for the first half and a DJ for the second works for many families. Hosts and anchors keep it moving.",
  [("Bollywood live bands", "bollylive"), ("Playback-style singers", "solosing"), ("Sufi and Bollywood fusion acts", "sufibolly"), ("Instrumental ensembles", "instrband"), ("Celebrity performers", "celeb"), ("DJs and electronic acts", "dj"), ("Anchors and emcees", "anchor")], []),
 ("cocktail-party", "pre", "Cocktail party", None,
  "A cocktail evening is stylish and social, with music that keeps the energy up while people mingle.",
  "A DJ with a live instrumentalist, a jazz band or a Bollywood singer all suit a cocktail setting. Ask for a set that builds through the night.",
  [("DJs", "dj"), ("Jazz bands", "jazz"), ("Bollywood singers", "solosing"), ("Rock and pop bands", "western"), ("DJ-based bands", "djband"), ("Lounge acts", "lounge")], ["Saxophone and DJ combinations", "Live electronic music"]),
 ("pool-party", "pre", "Pool party", "pool",
  "Daytime or sunset by the water: the music is upbeat, rhythmic and relaxed.",
  "Electronic and percussion-led acts suit pool parties. Check the poolside power and space before you book.",
  [("DJs", "dj"), ("DJ and percussion acts", "djperc"), ("DJ-based bands", "djband"), ("Lounge and acoustic acts", "lounge"), ("Western and tropical-style bands", "western")], ["Live saxophone", "Reggae bands"]),
 ("jaggo-ladies-sangeet", "pre", "Jaggo / Ladies sangeet", None,
  "A traditional, high-energy night of folk songs, dhol and dancing, usually led by the women of the family.",
  "Punjabi folk singers and dhol are the heart of it. Share the songs and traditions you want and we match the artists.",
  [("Punjabi singers and live bands", "punjabi"), ("Bollywood Punjabi artists", "bollypunjabi"), ("Folk ensembles", "rajfusion")], ["Dhol players", "Tumbi and algoza players", "Bhangra performers"]),
 ("welcome-dinner", "pre", "Welcome dinner / Family dinner", None,
  "A dinner for guests arriving from out of town: the music should set the mood without getting in the way of conversation.",
  "Keep it soft: acoustic singers, jazz, piano and violin are all good fits. A ghazal singer suits an older crowd.",
  [("Acoustic singers and duos", "duotrio"), ("Jazz trios and quartets", "jazz"), ("Piano, violin and instrumentalists", "soloinst"), ("Ghazal singers", "ghazal"), ("Light instrumental ensembles", "instrband")], []),
 ("baraat", "day", "Baraat / Ghodi entry", "baraat",
  "The groom's arrival is loud and joyous: the music has to lead the procession and make the whole street dance.",
  "Dhol and percussion matter most here. Share the route, timing and whether it is on foot or on a vehicle so we plan the sound.",
  [("Punjabi singers and live bands", "punjabi"), ("Percussion and DJ acts", "djperc"), ("Folk and Rajasthani acts", "rajfusion")], ["Dhol groups", "Brass bands", "Nagada players", "Tasha parties", "Shehnai"]),
 ("varmala-jaimala", "day", "Varmala / Jaimala ceremony", None,
  "A short, emotional moment where the couple exchange garlands, usually with soft live music in the background.",
  "A violin or flute adds a cinematic touch. Keep the act simple and well timed to the entry.",
  [("Violin, flute and solo instrumentalists", "soloinst"), ("Romantic instrumental ensembles", "instrband"), ("Live singers", "solosing"), ("Acoustic duos", "duotrio")], []),
 ("pheras", "day", "Wedding ceremony / Pheras", "pheras",
  "The pheras are sacred, so the music is traditional and respectful, played softly around the rituals.",
  "Match the music to the family's tradition. We can check which classical, devotional and traditional artists are available.",
  [("Classical instrumentalists", "soloinst"), ("Bhajan and devotional singers", "devotional"), ("Instrumental ensembles", "instrband"), ("Ghazal and classical singers", "ghazal")], ["Shehnai players", "Vedic chant artists", "Traditional wedding musicians"]),
 ("vidaai", "day", "Vidaai", None,
  "The farewell is the most emotional moment of the day, and the music should hold that feeling.",
  "Soft instrumentals such as flute and violin are a common choice. Plan the timing with the family and the photographer.",
  [("Flute, violin and instrumentalists", "soloinst"), ("Emotional instrumental ensembles", "instrband"), ("Devotional and folk singers", "devotional"), ("Traditional folk musicians", "rajfusion")], ["Shehnai"]),
 ("reception", "post", "Wedding reception", "reception",
  "The reception is a formal, glamorous evening for a large guest list, so the music has to suit every age.",
  "Many families book a live band or singer for the dinner hours and a DJ for the dance floor afterwards.",
  [("Bollywood live bands", "bollylive"), ("Sufi singers and bands", "sufibolly"), ("Celebrity singers", "celeb"), ("Jazz ensembles", "jazz"), ("DJs", "dj"), ("Instrumental acts", "instrband"), ("Anchors and emcees", "anchor")], []),
 ("after-party", "post", "After party", None,
  "The late-night party after the formal events: loud, fast and made for the younger crowd.",
  "DJs and electronic or rock acts keep the night going. Check venue timings and sound limits before you book.",
  [("DJs", "dj"), ("DJ and percussion acts", "djperc"), ("DJ-based bands", "djband"), ("Rock bands", "bollyrock"), ("Bollywood party bands", "bollylive")], ["Live electronic percussion"]),
 ("post-wedding-brunch", "post", "Post-wedding brunch / Farewell lunch", "brunch",
  "A relaxed last gathering, where light music sets a warm, unhurried mood.",
  "Soft, daytime sets work best: acoustic duos, jazz, piano or flute and guitar.",
  [("Acoustic duos", "duotrio"), ("Jazz bands", "jazz"), ("Piano and instrumentalists", "soloinst"), ("Lounge acts", "lounge"), ("Light Bollywood singers", "solosing")], []),
 ("roka", "other", "Roka ceremony", "engagement",
  "A small, early family ceremony where soft, romantic music is enough.",
  "Acoustic singers and a single instrumentalist suit a roka.",
  [("Acoustic singers and duos", "duotrio"), ("Solo singers", "solosing"), ("Violin and flute", "soloinst")], []),
 ("chunni-ceremony", "other", "Chunni / Chunri ceremony", None,
  "A traditional ceremony of blessings, usually accompanied by folk or devotional singing.",
  "Tell us the family's tradition and region and we suggest folk or devotional singers.",
  [("Folk singers", "rajfusion"), ("Devotional singers", "devotional"), ("Punjabi singers and live bands", "punjabi")], []),
 ("chooda-ceremony", "other", "Chooda ceremony", None,
  "A Punjabi ceremony before the wedding, with folk songs and dhol.",
  "Punjabi folk singers and a dhol player make it feel complete.",
  [("Punjabi singers and live bands", "punjabi"), ("Bollywood Punjabi artists", "bollypunjabi")], ["Dhol players"]),
 ("mayra-bhaat", "other", "Mayra / Bhaat", None,
  "A Rajasthani and North Indian tradition where the maternal family blesses the couple, often with folk singing.",
  "Rajasthani folk artists and traditional singers suit the occasion best.",
  [("Rajasthani folk artists", "rajfusion"), ("Punjabi singers and live bands", "punjabi")], ["Traditional folk singers"]),
 ("mata-ki-chowki", "other", "Mata ki Chowki", "chowki",
  "A devotional evening of bhajans and jagrata, often held before the wedding functions begin.",
  "Bhajan singers and devotional groups lead the night. Share the number of hours and the guest list so we plan the group size.",
  [("Bhajan and devotional singers", "devotional"), ("Sufi and qawwali groups", "sufiq")], ["Bhajan mandali"]),
 ("jagran", "other", "Jagran / Jagrata", "chowki",
  "An all-night devotional gathering of bhajans and prayers.",
  "Devotional singers and bhajan groups are the core. Share the timings so we confirm the artists.",
  [("Devotional and bhajan singers", "devotional")], ["Bhajan mandali"]),
 ("qawwali-night", "other", "Qawwali night", None,
  "A powerful, devotional-turned-celebratory evening of qawwali, loved by guests of all ages.",
  "Qawwali groups work best with seated or standing audiences and a clean sound set-up.",
  [("Qawwali and Sufi groups", "sufiq"), ("Sufi and Bollywood bands", "sufibolly")], []),
 ("sufi-night", "other", "Sufi night", None,
  "An evening of Sufi music, soulful and often paired with dinner or a cocktail hour.",
  "Pick between traditional Sufi singers and Sufi-Bollywood bands, depending on the crowd.",
  [("Sufi singers", "sufibolly"), ("Qawwali groups", "sufiq"), ("Instrumental ensembles", "instrband")], []),
 ("ghazal-evening", "other", "Ghazal evening", None,
  "A refined, seated evening of ghazals, usually for family and older guests.",
  "A ghazal singer with instrumentalists suits a smaller, listening audience.",
  [("Ghazal singers", "ghazal"), ("Solo instrumentalists", "soloinst"), ("Acoustic duos", "duotrio")], []),
 ("bollywood-retro-night", "other", "Bollywood retro night", None,
  "A nostalgia night of classic Bollywood hits that gets every generation singing.",
  "Retro bands and singers work for both seated and dance-floor setups.",
  [("Retro Bollywood acts", "bollyretro"), ("Bollywood live bands", "bollylive"), ("Solo singers", "solosing")], []),
 ("musical-evening", "other", "Musical evening", None,
  "A relaxed programme of live music, usually before dinner, for family and close friends.",
  "Live bands and fusion ensembles suit a musical evening. Share the mood and we shape the set.",
  [("Live bands", "bollylive"), ("Fusion and Sufi bands", "sufibolly"), ("Instrumental ensembles", "instrband")], []),
 ("bachelor-bachelorette-party", "other", "Bachelor / Bachelorette party", "bachelor",
  "A party for the couple's friends, usually a late, high-energy night.",
  "DJs, party bands and electronic acts suit this best. Share the venue and the guest list.",
  [("DJs", "dj"), ("DJ-based bands", "djband"), ("Rock bands", "bollyrock"), ("DJ and percussion acts", "djperc")], ["Live electronic acts"]),
 ("family-get-together", "other", "Family get-together", None,
  "A relaxed gathering of both families where the music should be gentle and inclusive.",
  "Acoustic, jazz or ghazal acts suit a family evening. Keep the volume low enough for conversation.",
  [("Acoustic acts", "duotrio"), ("Ghazal singers", "ghazal"), ("Jazz bands", "jazz"), ("Lounge acts", "lounge"), ("Solo singers", "solosing")], []),
 ("destination-wedding-welcome", "other", "Destination wedding welcome", None,
  "Guests arriving at a destination wedding are welcomed with local flavour, so folk and cultural acts work well.",
  "Pick acts that suit the destination: Rajasthani folk for Jaipur and Udaipur, for example. See our destination events page for more.",
  [("Folk ensembles", "rajfusion"), ("Instrumentalists", "soloinst"), ("Qawwali and Sufi groups", "sufiq"), ("Instrumental ensembles", "instrband")], ["Other cultural acts"]),
]

def fmt_acts(acts, key):
    return sorted([a for a in acts if key in a["f"]], key=B.rank)

def link_cards(items):
    return X.cards(items)

def fn_url(slug): return f"/weddings/{slug}/"

def func_page(f, acts):
    slug, grp, name, occ, intro, tip, types, ask = f
    url = SITE + fn_url(slug)
    w = B.wa(f"Hi Artisans of Sound, I am looking for entertainment for a {name.lower()}.")
    enq = "/?for=wedding#enquiry"
    title = f"{name}: Artists and Entertainment | Artisans of Sound"
    desc = B.trim(f"Artists and entertainment for a {name.lower()}: {', '.join(t[0].lower() for t in types[:3])} and more, with videos and one clear quote in 24 hours.", 160)
    body = (f'    <p class="kicker">Wedding functions</p>\n    <h1 class="uh">{esc(name)}</h1>\n    <p class="alead">{esc(intro)}</p>\n'
            f'    <div class="ask"><a class="dark-pill" href="{esc(w)}" target="_blank" rel="noopener">Get a quote on WhatsApp</a><a class="ghost-pill" href="{enq}">Send an enquiry</a></div>\n' + X.CSS)
    body += B.sec("How to choose", f'<div class="ubody"><p>{esc(tip)}</p></div>')
    shown, seen = [], set()
    for label, key in types:
        if key is None: continue
        full = fmt_acts(acts, key)
        pool = [a for a in full if a["slug"] not in seen]   # an act appears once per page, under its first matching type
        if not pool: continue
        d = L["formats"][key]
        more = f'<p class="anote">{len(full)} in this category. <a href="/book/{d["slug"]}/">See all {esc(d["name"].lower())}</a>.</p>' if len(full) > 6 else f'<p class="anote"><a href="/book/{d["slug"]}/">See all {esc(d["name"].lower())}</a>.</p>'
        body += B.sec(esc(label), B.grid(pool, cap=6, ctx=[key]) + more)
        seen.update(a["slug"] for a in pool[:6])
        shown.append(key)
    if ask:
        body += B.sec("Ask us", f'<div class="ubody"><p>Looking for something specific, such as {esc(", ".join(a.lower() for a in ask[:-1]) + (" or " if len(ask) > 1 else "") + ask[-1].lower())}? Tell us the city, date and tradition and we check who is available.</p></div>')
    sib = [(fn_url(s[0]), s[2], None, None) for s in FUNCS if s[1] == grp and s[0] != slug]
    sibs = [s for s in FUNCS if s[1] == grp and s[0] != slug]
    body += B.sec("Other wedding functions", B.links([(fn_url(s[0]), s[2]) for s in sibs] + [("/weddings/", "All wedding functions")]))
    if occ and occ in L["occasions"]:
        od = L["occasions"][occ]
        body += B.sec("Related", B.links([(f"/occasions/{od['slug']}/", f"More acts for {od['name'].lower()}"), ("/wedding/", "Wedding artists by city"), ("/destination-events/", "Destination weddings")]))
    faq = [(f"How do I choose acts for a {name.lower()}?", tip),
           ("Can you arrange the other functions of the same wedding?", "Yes. We plan the music across the functions together, so the acts suit each night and the budget is kept in one place."),
           ("How quickly will I get a quote?", "We send a shortlist with videos and one clear quote within 24 hours of a clear brief.")]
    body += B.faq_block(faq)
    body += (f'    <div class="ucta"><h2>Planning a {esc(name.lower())}?</h2><p>Tell us the date, city and venue. We reply with options and one clear quote within 24 hours.</p><div class="ask">'
             f'<a class="dark-pill" href="{enq}">Send an enquiry</a><a class="ghost-pill" href="{esc(w)}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></div>\n')
    mine = fmt_acts(acts, shown[0])[:6] if shown else []
    B.write(["weddings", slug], B.shell(url, title, desc, [("Home", "/"), ("Weddings", "/weddings/"), (name, fn_url(slug))], body, mine, faq, f"Hi Artisans of Sound, I am looking for entertainment for a {name.lower()}."))
    return url

def hub_page(acts):
    url = SITE + "/weddings/"
    w = B.wa("Hi Artisans of Sound, I am planning a wedding and would like entertainment options.")
    enq = "/?for=wedding#enquiry"
    used = set()
    def photo(f):
        # a distinct act photo per function where possible: first unused photo among the function's matching acts
        pool = []
        for label, key in f[6]:
            if key: pool += fmt_acts(acts, key)
        for a in pool:
            if a["photo"] and a["photo"] not in used:
                used.add(a["photo"]); return a["photo"]
        k = next((k for _, k in f[6] if k), "bollylive")
        return L["formats"][k].get("photo")
    title = "Wedding Entertainment by Function: Sangeet, Mehendi, Haldi, Baraat and More | Artisans of Sound"
    desc = "Find artists for every wedding function: engagement, mehendi, haldi, sangeet, cocktail, baraat, pheras, reception and more, with videos and one quote in 24 hours."
    body = ('    <p class="kicker">Weddings</p>\n    <h1 class="uh">Entertainment for every wedding function</h1>\n'
            '    <p class="alead">An Indian wedding is many events, and each one calls for different music. Pick the function you are planning to see the kinds of acts that suit it, and the artists you can book.</p>\n'
            f'    <div class="ask"><a class="dark-pill" href="{esc(w)}" target="_blank" rel="noopener">Plan my wedding on WhatsApp</a><a class="ghost-pill" href="{enq}">Send an enquiry</a></div>\n' + X.CSS)
    for gk, gname, gsub in GROUPS:
        items = [(fn_url(f[0]), f[2], B.trim(f[4].split(". ")[0].rstrip(".") + ".", 110), photo(f)) for f in FUNCS if f[1] == gk]
        body += B.sec(esc(gname), f'<p class="anote" style="margin:0 0 4px">{esc(gsub)}</p>' + X.cards(items))
    body += B.sec("More for your wedding", X.cards([
        ("/destination-events/", "Destination weddings", "Palace, beach and resort celebrations, with travel and logistics handled.", L["occasions"]["wedding"].get("photo")),
        ("/wedding/", "Wedding artists by city", "Wedding DJs, bands, singers and anchors in your city.", L["formats"]["bollylive"].get("photo")),
        ("/for-planners/", "For wedding planners and agencies", "One contact for every function's music.", L["formats"]["anchor"].get("photo"))]))
    faq = [("Can you plan the music for the whole wedding?", "Yes. Tell us the functions, cities and dates, and we send one shortlist and one quote across them."),
           ("Do I need a different artist for each function?", "Often yes, because each function has a different mood. We suggest a mix so the acts suit each night and the budget stays in one place."),
           ("How quickly will I get a quote?", "We send a shortlist with videos and one clear quote within 24 hours of a clear brief.")]
    body += B.faq_block(faq)
    body += (f'    <div class="ucta"><h2>Planning a wedding?</h2><p>Tell us the functions, dates and city. We reply with options and one clear quote within 24 hours.</p><div class="ask">'
             f'<a class="dark-pill" href="{enq}">Send an enquiry</a><a class="ghost-pill" href="{esc(w)}" target="_blank" rel="noopener">Message us on WhatsApp</a></div></div>\n')
    B.write(["weddings"], B.shell(url, title, desc, [("Home", "/"), ("Weddings", "/weddings/")], body, None, faq, "Hi Artisans of Sound, I am planning a wedding."))
    return url

def build(acts, reg):
    urls = [hub_page(acts)] + [func_page(f, acts) for f in FUNCS]
    return [f"<url><loc>{u}</loc></url>" for u in urls]
