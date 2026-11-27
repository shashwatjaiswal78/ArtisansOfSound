#!/usr/bin/env python3
"""Draws the city illustrations used on /wedding/ (one famous monument per city) into img/city/<slug>.svg.
Not part of tools/build.py: run `python3 tools/city_art.py` only when you want to change the artwork, then commit the SVGs.
Each drawing is 400x500, with the monument standing on a dark ground band so the city name reads well over it."""
import os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "img", "city")

def svg(sky, body, ground="#1c1426"):
    stops = "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in sky)
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" role="img">'
            f'<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1">{stops}</linearGradient></defs>'
            f'<rect width="400" height="500" fill="url(#s)"/>{body}'
            f'<rect y="392" width="400" height="108" fill="{ground}"/></svg>')

def sun(x, y, r, c="#ffe2b0", o=.92): return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{c}" opacity="{o}"/>'
def stars(pts, c="#fff", o=.8): return "".join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{c}" opacity="{o}"/>' for x, y, r in pts)
def birds(pts, c="#2a1a2e"): return "".join(f'<path d="M{x} {y}q5-6 10 0q5-6 10 0" fill="none" stroke="{c}" stroke-width="1.6" stroke-linecap="round"/>' for x, y in pts)
def rect(x, y, w, h, f, extra=""): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{f}" {extra}/>'
def path(d, f, extra=""): return f'<path d="{d}" fill="{f}" {extra}/>'
def arch(x, y, w, h, f):      # arched opening: x,y = top-left, h = total height
    r = w / 2
    return path(f"M{x} {y+h}V{y+r}a{r} {r} 0 0 1 {w} 0V{y+h}Z", f)
def dome(cx, base, w, h, f, fin="#e9c46a"):
    return path(f"M{cx-w/2} {base}q{w/2} {-h*1.7} {w} 0Z", f) + rect(cx-1, base-h*0.85-9, 2, 9, fin)
def palm(x, y, lean, f="#1d2a24"):
    tx, ty = x + lean, y - 100
    fr = "".join(f'<path d="M{tx} {ty}q{a} {b} {c} {d}" fill="none" stroke="{f}" stroke-width="5" stroke-linecap="round"/>'
                 for a, b, c, d in ((-26, -28, -54, 6), (-30, -6, -46, 32), (26, -28, 54, 6), (30, -6, 46, 32), (-8, -36, -22, -26), (8, -36, 22, -26)))
    return f'<path d="M{x} {y}q{lean*.2} -55 {lean} -100" fill="none" stroke="{f}" stroke-width="7" stroke-linecap="round"/>' + fr

ART = {}

# ---- Delhi: India Gate
st, sh = "#cf8a5c", "#94583a"
ART["delhi"] = svg([(0, "#3b2a5e"), (.45, "#c5546b"), (1, "#f6b26b")],
  sun(300, 165, 44) + stars([(60, 60, 1.6), (120, 40, 1.2), (330, 70, 1.5), (210, 28, 1.2)]) + birds([(70, 130), (95, 112)]) +
  f'<polygon points="172,392 228,392 285,500 115,500" fill="#4a2f3d"/>' +
  rect(96, 372, 208, 20, sh) + rect(110, 356, 180, 16, st) +
  rect(130, 205, 140, 151, st) + rect(130, 205, 16, 151, sh, 'opacity=".5"') + rect(254, 205, 16, 151, sh, 'opacity=".35"') +
  arch(172, 262, 56, 94, "#2a1a2e") + arch(180, 276, 40, 80, "#44284a") +
  rect(150, 216, 100, 10, sh, 'opacity=".7"') + rect(120, 190, 160, 16, st) + rect(116, 186, 168, 6, sh) +
  rect(140, 170, 120, 16, st) + rect(150, 160, 100, 10, sh, 'opacity=".6"') +
  path("M168 160q32-26 64 0Z", sh) + path("M192 142q8-14 16 0q-8 6-16 0Z", "#ffb347") +
  f'<circle cx="62" cy="360" r="32" fill="#3b2a3a"/><circle cx="92" cy="372" r="24" fill="#33233a"/><circle cx="342" cy="362" r="30" fill="#3b2a3a"/><circle cx="312" cy="374" r="22" fill="#33233a"/>')

# ---- Mumbai: Gateway of India
st, sh = "#dcb36d", "#a67c3f"
ART["mumbai"] = svg([(0, "#16304d"), (.5, "#3f6f97"), (1, "#f2c08a")],
  sun(115, 175, 36, "#fff0cf", .95) + stars([(250, 50, 1.5), (320, 90, 1.2), (60, 70, 1.4)]) + birds([(250, 140), (280, 120)], "#16304d") +
  rect(0, 372, 400, 20, "#264b6b") +
  rect(120, 250, 160, 124, st) + rect(120, 250, 14, 124, sh, 'opacity=".5"') + rect(266, 250, 14, 124, sh, 'opacity=".35"') +
  arch(178, 286, 44, 88, "#2a1a2a") + arch(184, 300, 32, 74, "#4d2f3f") + arch(138, 316, 22, 58, "#3a2230") + arch(240, 316, 22, 58, "#3a2230") +
  rect(116, 244, 168, 10, sh) + rect(158, 232, 84, 14, st) + dome(200, 232, 84, 30, "#c99a52") +
  "".join(rect(x, 208, 28, 42, st) + dome(x + 14, 208, 28, 12, "#c99a52") for x in (112, 260)) +
  path("M0 392q25-8 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0V420H0Z", "#2e5a7d", 'opacity=".7"') +
  path("M295 384l24 0l-6 10h-14Z", "#10202f") + rect(305, 366, 2, 18, "#10202f") + path("M307 368l14 12h-14Z", "#e9d8b8", 'opacity=".9"'),
  ground="#10202f")

# ---- Lucknow: Rumi Darwaza
st, sh = "#d9bb8b", "#a58552"
wing = "".join(rect(x, 312, 56, 70, st) + arch(x + 14, 328, 28, 54, "#3a2a22") for x in (92, 252))
ART["lucknow"] = svg([(0, "#43326b"), (.5, "#d98a6a"), (1, "#f8d9a0")],
  sun(90, 150, 38, "#fff1d0") + stars([(300, 55, 1.4), (340, 95, 1.2), (220, 40, 1.4)]) + birds([(250, 120), (275, 105)]) +
  wing + rect(150, 214, 100, 168, st) + rect(150, 214, 14, 168, sh, 'opacity=".45"') + rect(236, 214, 14, 168, sh, 'opacity=".3"') +
  path("M172 382V288Q200 206 228 288V382Z", "#2e2028") + path("M182 382V296Q200 244 218 296V382Z", "#4a3040") +
  rect(142, 196, 116, 20, sh) +
  "".join(rect(x, 178, 22, 20, st) + dome(x + 11, 178, 22, 10, sh) for x in (146, 189, 232)) +
  "".join(arch(x, 202, 8, 12, "#3a2a22") for x in (156, 172, 192, 208, 228, 244)) +
  rect(180, 180, 40, 18, st) + rect(198, 140, 4, 20, sh) + path("M192 160q8-14 16 0Z", "#f2b84b") +
  path("M0 392Q60 372 120 392Z", "#241a30"), ground="#201528")

# ---- Jaipur: Hawa Mahal
pk, ps, pl = "#e59a86", "#b6604d", "#f6c8b6"
tiers = [(380, 340, 100, 300), (340, 296, 108, 292), (296, 254, 118, 282), (254, 214, 132, 268), (214, 176, 150, 250)]
hm = ""
for yb, yt, xl, xr in tiers:
    hm += rect(xl, yt, xr - xl, yb - yt, pk) + rect(xl, yt, xr - xl, 4, ps)
    n = max(3, int((xr - xl) / 22)); gap = (xr - xl) / n
    for i in range(n):
        wx = xl + gap * i + gap / 2 - 5
        hm += arch(wx, yt + 10, 10, yb - yt - 18, "#7d3a33") + rect(wx + 2, yt + 18, 6, 6, pl, 'opacity=".7"')
    hm += dome(xl + 8, yt, 16, 9, ps) + dome(xr - 8, yt, 16, 9, ps)
hm += dome(200, 176, 40, 22, ps) + dome(200, 176, 40, 22, "#cc7a67")
ART["jaipur"] = svg([(0, "#8c4f7a"), (.5, "#f08c6a"), (1, "#fde0b3")],
  sun(300, 150, 42, "#fff4d6") + birds([(60, 110), (85, 94), (110, 120)], "#7a3a5a") + hm +
  path("M0 392Q70 366 140 392Z", "#4a2740", 'opacity=".5"'), ground="#2d1830")

# ---- Udaipur: lake palace
cr, cs = "#f0e1c9", "#bca98b"
pal = (rect(62, 306, 276, 46, cr) + rect(62, 306, 276, 5, cs) + rect(186, 252, 28, 60, cr) + dome(200, 252, 34, 18, cs) +
       "".join(rect(x, 286, 24, 22, cr) + dome(x + 12, 286, 24, 12, cs) for x in (70, 118, 258, 306)) +
       "".join(arch(x, 322, 10, 30, "#6b5a4e") for x in range(80, 330, 24)) + arch(194, 326, 12, 26, "#6b5a4e"))
ART["udaipur"] = svg([(0, "#2b2a63"), (.5, "#c8648a"), (1, "#ffc78a")],
  sun(200, 170, 46, "#fff0c9", .9) + stars([(60, 50, 1.4), (340, 60, 1.5), (120, 90, 1.1)]) +
  path("M0 330L40 290L90 318L140 276L190 312L250 270L300 306L350 280L400 320V352H0Z", "#5a3a6e", 'opacity=".75"') +
  f'<defs><g id="pal">{pal}</g></defs><use href="#pal"/>' +
  rect(0, 352, 400, 40, "#3b3a7a") + '<use href="#pal" transform="translate(0,704) scale(1,-1)" opacity=".28"/>' +
  path("M0 372q25-5 50 0t50 0t50 0t50 0t50 0t50 0t50 0t50 0", "none", 'stroke="#ffd9a6" stroke-width="1.2" opacity=".35"'), ground="#1d1c47")

# ---- Jodhpur: Mehrangarh fort above the blue city
fort = ("#d29a62", "#a2693d")
houses = ""
import random
random.seed(7)
for i in range(34):
    x = 8 + i * 11.5; y = 352 + random.choice([0, 6, 12, 18, 24]) - (10 if 4 < i < 30 else 0)
    h = random.choice([22, 28, 34]); w = random.choice([14, 18, 22])
    houses += rect(x, y, w, h, random.choice(["#5b9bd5", "#4b8bc4", "#7fb2e0", "#6aa6dc"])) + rect(x + w / 2 - 2, y + h - 8, 4, 8, "#fff", 'opacity=".75"')
ART["jodhpur"] = svg([(0, "#703a63"), (.5, "#f08a5d"), (1, "#ffd9a0")],
  sun(320, 140, 40, "#fff3d0") + birds([(70, 90), (92, 76)], "#5a2a50") +
  path("M0 392V330L50 300L100 268L160 232L240 220L310 236L360 266L400 300V392Z", "#6b4234") +
  rect(84, 178, 250, 62, fort[0]) + "".join(rect(84 + i * 11, 169, 6, 9, fort[0]) for i in range(23)) +
  rect(84, 234, 250, 6, fort[1]) + "".join(rect(x, 150, 40, 90, fort[0]) + dome(x + 20, 150, 42, 18, fort[1]) for x in (96, 250, 296)) +
  "".join(arch(x, 194, 11, 26, "#4a2a22") for x in (150, 176, 202, 228)) + arch(110, 190, 12, 30, "#4a2a22") + arch(262, 190, 12, 30, "#4a2a22") + houses, ground="#2a1620")

# ---- Chandigarh: Open Hand monument
hand = ('<g transform="translate(200,206) rotate(-10)">' +
        path("M-30 0H30L34 -46H-34Z", "#e9e2cf") + "".join(path(f"M{x} -44v-{h}a7 7 0 0 1 14 0v{h}Z", "#e9e2cf") for x, h in ((-34, 64), (-18, 78), (-2, 80), (14, 68))) +
        path("M34 -22l30-22a7 7 0 0 1 10 10l-30 30Z", "#e9e2cf") + '</g>')
grid = "".join(rect(52 + i * 16, 318 + j * 18, 9, 11, "#26343d") for i in range(7) for j in range(3))
ART["chandigarh"] = svg([(0, "#1d4e5f"), (.5, "#5aa7a3"), (1, "#f6d8a0")],
  sun(90, 130, 34, "#fff3d0") + birds([(280, 90), (305, 76)], "#1d4e5f") +
  rect(40, 308, 130, 74, "#c6b9a2") + rect(40, 308, 130, 6, "#948871") + grid +
  rect(240, 330, 120, 52, "#b5a78f") + rect(240, 330, 120, 5, "#948871") +
  rect(186, 222, 28, 170, "#3c4a52") + rect(186, 222, 6, 170, "#2a363d") + hand +
  rect(150, 380, 100, 12, "#2a363d") + path("M80 392H320V404H80Z", "#7fd0d0", 'opacity=".25"'), ground="#12303a")

# ---- Gurugram: glass towers
tw = ""
for i, (x, w, h, c) in enumerate([(24, 52, 220, "#2b3157"), (82, 44, 170, "#353b66"), (132, 60, 290, "#262b4c"), (198, 48, 200, "#313761"),
                                   (252, 56, 250, "#282d50"), (314, 44, 180, "#353b66"), (350, 40, 130, "#2b3157")]):
    y = 392 - h
    tw += rect(x, y, w, h, c)
    for r in range(int(h // 14)):
        for k in range(int(w // 12)):
            if (r * 7 + k * 3 + i * 5) % 5 in (0, 1):
                tw += rect(x + 5 + k * 12, y + 8 + r * 14, 6, 7, "#ffd27a" if (r + k + i) % 3 else "#9fd6ff", 'opacity=".85"')
    if i in (2, 4): tw += rect(x + w / 2 - 1.5, y - 22, 3, 22, "#8a90b8")
ART["gurugram"] = svg([(0, "#241a4f"), (.55, "#9b4f8f"), (1, "#ffb07a")],
  sun(300, 205, 44, "#ffe0b0", .9) + stars([(50, 40, 1.4), (150, 70, 1.2), (330, 50, 1.4), (210, 30, 1.2), (100, 110, 1.1)]) + tw, ground="#14102e")

# ---- Ahmedabad: Sidi Saiyyed jali (tree of life)
lat = ""
for i in range(11):
    lat += f'<line x1="{108 + i * 18}" y1="150" x2="{108 + i * 18}" y2="392" stroke="#4a3322" stroke-width="2" opacity=".5"/>'
tree = ('<g fill="none" stroke="#f0cf9a" stroke-width="4.5" stroke-linecap="round">'
        '<path d="M200 392V292"/><path d="M200 330Q150 322 138 262"/><path d="M200 330Q250 322 262 262"/><path d="M200 298Q168 278 162 222"/>'
        '<path d="M200 298Q232 278 238 222"/><path d="M200 268Q200 226 200 184"/><path d="M138 262Q120 250 112 270"/><path d="M262 262Q280 250 288 270"/></g>' +
        "".join(f'<circle cx="{x}" cy="{y}" r="7" fill="#f0cf9a"/>' for x, y in ((138, 262), (262, 262), (162, 222), (238, 222), (200, 184), (112, 270), (288, 270), (172, 290), (228, 290))))
ART["ahmedabad"] = svg([(0, "#5a2a3f"), (.5, "#e07a4f"), (1, "#ffd08a")],
  sun(320, 90, 30, "#fff1cf") + path("M80 392V236a120 120 0 0 1 240 0V392Z", "#cfa072") + path("M100 392V238a100 100 0 0 1 200 0V392Z", "#2f1d14") +
  lat + tree + rect(70, 380, 260, 12, "#a77c52"), ground="#241520")

# ---- Hyderabad: Charminar
cm, cmd = "#e4d5b8", "#b6a27d"
mins = "".join(rect(x, 172, 20, 210, cm) + rect(x, 172, 5, 210, cmd, 'opacity=".5"') + rect(x - 5, 222, 30, 6, cmd) + rect(x - 5, 276, 30, 6, cmd) +
                dome(x + 10, 172, 20, 14, cmd) for x in (104, 276))
ART["hyderabad"] = svg([(0, "#3a2160"), (.5, "#c0507a"), (1, "#ffc38a")],
  sun(200, 130, 36, "#fff0cf") + stars([(60, 60, 1.4), (340, 70, 1.4), (300, 120, 1.1)]) + birds([(60, 140), (86, 124)]) +
  rect(124, 262, 152, 120, cm) + rect(124, 262, 152, 6, cmd) + rect(120, 236, 160, 28, cm) + rect(120, 236, 160, 5, cmd) +
  "".join(arch(x, 244, 14, 20, "#4a3040") for x in (136, 160, 186, 212, 238)) +
  "".join(rect(x, 212, 20, 26, cm) + dome(x + 10, 212, 20, 10, cmd) for x in (132, 190, 248)) +
  arch(174, 290, 52, 92, "#2e2028") + arch(182, 304, 36, 78, "#4a3040") + arch(130, 306, 30, 76, "#3a2630") + arch(240, 306, 30, 76, "#3a2630") + mins,
  ground="#201430")

# ---- Bengaluru: Vidhana Soudha
gr, gs = "#c1b6a6", "#8d8374"
cols = "".join(rect(146 + i * 17, 292, 8, 90, "#e8e0d2") for i in range(7))
ART["bengaluru"] = svg([(0, "#1f3b63"), (.5, "#7e83b0"), (1, "#f5c9a0")],
  sun(80, 150, 34, "#fff0d6") + stars([(310, 50, 1.4), (200, 36, 1.2), (350, 100, 1.1)]) + birds([(250, 110), (275, 95)], "#1f3b63") +
  rect(50, 308, 300, 74, gr) + rect(50, 308, 300, 6, gs) + "".join(arch(x, 330, 12, 30, "#4a4458") for x in range(66, 340, 34) if not 140 < x < 260) +
  "".join(rect(x, 276, 44, 34, gr) + dome(x + 22, 276, 40, 16, gs) for x in (56, 300)) +
  rect(138, 264, 124, 118, gr) + path("M132 264L200 232L268 264Z", gs) + cols + rect(138, 282, 124, 6, gs) +
  rect(172, 196, 56, 40, gr) + rect(172, 196, 56, 4, gs) + dome(200, 196, 56, 26, gs) + rect(198, 142, 4, 18, gs) +
  rect(120, 380, 160, 12, "#9d9384") + rect(130, 372, 140, 8, "#b2a898"), ground="#17233f")

# ---- Kolkata: Victoria Memorial
mb, ms = "#f1ece2", "#c7bfb0"
vm = (rect(104, 296, 192, 90, mb) + rect(104, 296, 192, 5, ms) + rect(160, 232, 80, 68, mb) + dome(200, 232, 88, 56, ms) + dome(200, 232, 88, 56, "#e4dccd") +
      rect(197, 150, 6, 24, ms) + path("M194 150l6-14l6 14Z", "#e9c46a") +
      "".join(rect(x, 266, 30, 34, mb) + dome(x + 15, 266, 30, 14, ms) for x in (98, 272)) +
      "".join(arch(x, 316, 12, 40, "#6a5a66") for x in (120, 144, 244, 268)) + arch(184, 308, 32, 78, "#4a3c52") + arch(190, 318, 20, 68, "#6a5a7a") +
      "".join(rect(x, 304, 5, 82, ms, 'opacity=".6"') for x in (168, 226)) + rect(120, 384, 160, 8, "#d9d2c3"))
ART["kolkata"] = svg([(0, "#3b2f6b"), (.5, "#d68a9a"), (1, "#ffdcab")],
  sun(320, 150, 36, "#fff4d6") + stars([(60, 50, 1.4), (150, 80, 1.1)]) + birds([(70, 130), (96, 116)]) +
  f'<defs><g id="vm">{vm}</g></defs><use href="#vm"/>' + f'<ellipse cx="36" cy="360" rx="16" ry="34" fill="#243a33"/><ellipse cx="364" cy="360" rx="16" ry="34" fill="#243a33"/>', ground="#2a2040")

# ---- Pune: Shaniwar Wada
wl, ws = "#9a7560", "#63483a"
ART["pune"] = svg([(0, "#4a2a4f"), (.5, "#e0704f"), (1, "#ffd08a")],
  sun(100, 160, 38, "#fff0cf") + birds([(260, 110), (285, 96), (310, 118)], "#4a2a4f") +
  rect(40, 272, 320, 112, wl) + "".join(path(f"M{40 + i * 16} 272l8-12l8 12Z", wl) for i in range(20)) + rect(40, 272, 320, 6, ws) +
  "".join(rect(x, 226, 62, 158, wl) + rect(x, 226, 62, 6, ws) + path(f"M{x} 226a31 31 0 0 1 62 0Z", ws) + arch(x + 21, 262, 20, 36, "#3b2418") for x in (36, 302)) +
  path("M152 384V304a48 48 0 0 1 96 0V384Z", "#3b2418") + path("M162 384V308a38 38 0 0 1 76 0V384Z", "#54341f") +
  "".join(f'<circle cx="{x}" cy="{y}" r="2.2" fill="#c9a24a"/>' for x in range(172, 232, 12) for y in range(318, 380, 14)) + rect(199, 270, 2, 114, "#2a180f"),
  ground="#241522")

# ---- Goa: Basilica-style whitewashed church
wh, ws = "#f7f1e6", "#d3c8b4"
ART["goa"] = svg([(0, "#2a3566"), (.5, "#e5668a"), (1, "#ffc87a")],
  sun(200, 220, 54, "#ffe9b8", .95) + stars([(50, 50, 1.4), (150, 40, 1.2), (330, 60, 1.4), (270, 100, 1.1)]) +
  rect(112, 276, 176, 108, wh) + rect(112, 276, 176, 5, ws) + rect(138, 238, 124, 40, wh) + path("M130 240L200 192L270 240Z", wh) + path("M130 240L200 192L270 240", "none", f'stroke="{ws}" stroke-width="4"') +
  rect(198, 168, 4, 26, "#8a7a68") + rect(190, 176, 20, 4, "#8a7a68") +
  rect(274, 206, 38, 178, wh) + rect(274, 206, 8, 178, ws, 'opacity=".5"') + path("M270 206L293 168L316 206Z", "#c9a06a") + arch(284, 220, 18, 32, "#4a3a4a") +
  arch(184, 330, 32, 54, "#3a2a3a") + arch(124, 306, 16, 30, "#6a5a66") + arch(260, 306, 16, 30, "#6a5a66") + arch(152, 252, 14, 20, "#6a5a66") + arch(234, 252, 14, 20, "#6a5a66") +
  palm(52, 392, 18) + palm(352, 392, -16), ground="#2a1830")

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for slug, s in ART.items():
        open(os.path.join(OUT, slug + ".svg"), "w", encoding="utf8").write(s)
    print("wrote", len(ART), "illustrations to img/city/")
