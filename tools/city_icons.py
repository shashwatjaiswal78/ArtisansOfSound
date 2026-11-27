#!/usr/bin/env python3
"""Draws the one-colour line icons used on /wedding/ (one famous monument per city) into img/city/<slug>.svg.
Not part of tools/build.py: run `python3 tools/city_icons.py` only when you want to change the artwork, then commit the SVGs.
The icons are black outlines on a transparent background; the page colours them with CSS (a mask), so one colour variable restyles all 14."""
import os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "img", "city")

def R(x, y, w, h): return f"M{x} {y}h{w}v{h}h{-w}z"
def A(x, y, w, h):                        # arched opening, open at the bottom: x,y top-left, h total height
    r = w / 2; return f"M{x} {y+h}V{y+r}a{r} {r} 0 0 1 {w} 0V{y+h}"
def DM(cx, y, w, h):                      # dome: half-ellipse sitting on y
    return f"M{cx-w/2} {y}a{w/2} {h} 0 0 1 {w} 0"
def L(x1, y1, x2, y2): return f"M{x1} {y1}L{x2} {y2}"
def V(x, y1, y2): return f"M{x} {y1}V{y2}"
def H(y, x1, x2): return f"M{x1} {y}H{x2}"
def FIN(cx, y, h=7): return V(cx, y, y - h)          # finial
def WAVE(y, x1=6, x2=114, n=9):
    step = (x2 - x1) / n; d = f"M{x1} {y}"
    for i in range(n): d += f"q{step/4} -3 {step/2} 0t{step/2} 0"
    return d

def svg(*parts, extra=""):
    d = "".join(parts)
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none" stroke="#000" stroke-width="2.6" '
            f'stroke-linejoin="miter" stroke-linecap="butt"><path d="{d}"/>{extra}</svg>')

I = {}

# Delhi: India Gate
I["delhi"] = svg(H(106, 8, 112), R(16, 100, 88, 6), R(22, 94, 76, 6), "M30 94V34H90V94", R(25, 26, 70, 8), R(33, 18, 54, 8), "M42 18q18-12 36 0",
                 A(47, 52, 26, 42), A(53, 60, 14, 34), "".join(V(x, 40, 94) for x in (36, 42, 78, 84)), H(40, 36, 84))

# Mumbai: Gateway of India
I["mumbai"] = svg(H(106, 10, 110), "M24 106V54H96V106", R(20, 48, 80, 6), A(47, 64, 26, 42), A(53, 70, 14, 36), A(29, 76, 13, 30), A(78, 76, 13, 30),
                  R(43, 38, 34, 10), DM(60, 38, 30, 14), FIN(60, 28, 9), R(21, 28, 14, 20), DM(28, 28, 14, 10), FIN(28, 20), R(85, 28, 14, 20), DM(92, 28, 14, 10), FIN(92, 20),
                  H(60, 24, 47), H(60, 73, 96))

# Lucknow: Rumi Darwaza
I["lucknow"] = svg(H(106, 6, 114), R(12, 74, 24, 32), R(84, 74, 24, 32), A(18, 84, 12, 22), A(90, 84, 12, 22), R(34, 36, 52, 70), R(31, 28, 58, 8),
                   "M44 106V66Q60 30 76 66V106", "M52 106V70Q60 52 68 70V106", "".join(DM(x, 28, 12, 8) + V(x - 5, 28, 36) + V(x + 5, 28, 36) for x in (40, 80)),
                   DM(60, 28, 16, 10), FIN(60, 18, 8), H(48, 34, 86), "".join(A(x, 38, 6, 8) for x in (38, 50, 64, 76)))

# Jaipur: Hawa Mahal
hm = ""
for yt, h, xl, xr in [(86, 20, 14, 106), (68, 18, 22, 98), (52, 16, 30, 90), (38, 14, 38, 82), (26, 12, 46, 74)]:
    hm += R(xl, yt, xr - xl, h)
    n = max(3, (xr - xl) // 12)
    gap = (xr - xl) / n
    for i in range(int(n)):
        hm += A(xl + gap * i + gap / 2 - 3, yt + 4, 6, h - 4)
I["jaipur"] = svg(H(106, 8, 112), hm, DM(60, 26, 14, 10), FIN(60, 16, 6), DM(50, 26, 6, 4), DM(70, 26, 6, 4))

# Udaipur: lake palace
I["udaipur"] = svg(R(14, 66, 92, 28), R(50, 40, 20, 26), DM(60, 40, 22, 14), FIN(60, 28, 8),
                   "".join(R(x - 6, 52, 12, 14) + DM(x, 52, 14, 8) for x in (24, 40, 80, 96)), "".join(A(x, 74, 8, 20) for x in range(20, 100, 14)),
                   WAVE(100), WAVE(108, 10, 110, 8))

# Jodhpur: Mehrangarh fort over the town
houses = "".join(R(6 + i * 14, 92 + (i % 3) * 3, 12, 14 - (i % 3) * 3) for i in range(8))
I["jodhpur"] = svg("M4 106L18 84L34 68L50 58H100L116 82V106", R(34, 32, 70, 28), "".join(V(36 + i * 8, 32, 28) + H(28, 36 + i * 8, 40 + i * 8) + V(40 + i * 8, 28, 32) for i in range(0, 8, 2)),
                   R(34, 18, 14, 42), DM(41, 18, 16, 8), R(90, 18, 14, 42), DM(97, 18, 16, 8), "".join(A(x, 40, 7, 14) for x in (56, 68, 80)), houses)

# Chandigarh: Open Hand
hand = ('<g transform="rotate(-14 62 58)" fill="none">'
        '<path d="M44 62V38a3.6 3.6 0 0 1 7.2 0V58M51.2 58V28a3.6 3.6 0 0 1 7.2 0V58M58.4 58V26a3.6 3.6 0 0 1 7.2 0V58M65.6 58V30a3.6 3.6 0 0 1 7.2 0V60"/>'
        '<path d="M44 62Q44 76 56 76H66Q74 76 72.8 62M72.8 60L82 48a3.6 3.6 0 0 1 5.5 4.5L76 68"/></g>')
I["chandigarh"] = svg(R(20, 98, 80, 8), R(26, 76, 38, 22), R(70, 84, 24, 14), "M57 76V96M63 76V96", extra=hand)

# Gurugram: glass towers
tw = ""
for x, w, y in [(10, 20, 56), (32, 22, 30), (56, 24, 14), (82, 20, 40), (104, 10, 66)]:
    tw += R(x, y, w, 106 - y)
    for j in range(int((106 - y) // 10) - 1):
        for k in range(int(w // 8)):
            tw += f"M{x+3+k*7} {y+7+j*10}h3"
I["gurugram"] = svg(H(106, 6, 114), tw, V(68, 14, 4), V(92, 40, 32))

# Ahmedabad: Sidi Saiyyed jali (tree of life)
I["ahmedabad"] = svg(H(106, 14, 106), "M22 106V54a38 38 0 0 1 76 0V106", "M31 106V56a29 29 0 0 1 58 0V106", V(60, 106, 62), "M60 92Q44 90 40 72", "M60 92Q76 90 80 72", "M60 78Q48 72 46 56", "M60 78Q72 72 74 56", V(60, 62, 38),
                     extra='<g fill="#000" stroke="none">' + "".join(f'<circle cx="{x}" cy="{y}" r="2.6"/>' for x, y in ((40, 72), (80, 72), (46, 56), (74, 56), (60, 38), (50, 86), (70, 86))) + "</g>")

# Hyderabad: Charminar
I["hyderabad"] = svg(H(106, 8, 112), R(34, 62, 52, 44), A(50, 74, 20, 32), A(38, 80, 8, 26), A(74, 80, 8, 26), R(32, 50, 56, 12),
                     "".join(DM(x, 50, 8, 7) + FIN(x, 43, 4) for x in (42, 60, 78)), "".join(A(x, 54, 5, 8) for x in (40, 50, 65, 75)),
                     "".join(R(x, 26, 9, 80) + R(x - 3, 56, 15, 3) + R(x - 3, 80, 15, 3) + DM(x + 4.5, 26, 11, 8) + FIN(x + 4.5, 18, 6) for x in (18, 93)))

# Bengaluru: Vidhana Soudha
I["bengaluru"] = svg(H(106, 6, 114), R(10, 72, 100, 34), R(40, 56, 40, 50), "M36 56L60 44L84 56Z", "".join(V(x, 58, 106) for x in (46, 52, 68, 74)), R(50, 36, 20, 8), DM(60, 36, 22, 16), FIN(60, 26, 9),
                     R(14, 58, 20, 14), DM(24, 58, 16, 8), R(86, 58, 20, 14), DM(96, 58, 16, 8), "".join(A(x, 80, 6, 12) for x in (16, 26, 86, 98)), H(100, 40, 80))

# Kolkata: Victoria Memorial
I["kolkata"] = svg(H(106, 8, 112), R(14, 78, 92, 28), R(44, 54, 32, 24), DM(60, 54, 36, 22), V(60, 32, 22), "M55 22h10", FIN(60, 22, 6),
                   R(16, 62, 14, 16), DM(23, 62, 16, 10), R(90, 62, 14, 16), DM(97, 62, 16, 10), A(52, 82, 16, 24), "".join(A(x, 84, 8, 22) for x in (22, 36, 76, 90)), "".join(V(x, 58, 78) for x in (50, 55, 65, 70)))

# Pune: Shaniwar Wada
cren = "M12 52" + "".join("v-4h4v4h4" for _ in range(12))
I["pune"] = svg(H(106, 6, 114), "M12 106V52", cren.replace("M12 52", "M12 52"), "M108 52V106", A(46, 66, 28, 40), A(52, 72, 16, 34), R(40, 38, 40, 14),
                R(8, 34, 20, 72), R(92, 34, 20, 72), "".join(H(34, x, x + 20) for x in (8, 92)), "".join(A(x, 56, 6, 12) for x in (14, 100)), "".join(H(y, 46, 74) for y in (84, 92)))

# Goa: whitewashed church with palms
def palm(x, lean):
    top = x + lean
    fr = "".join(f"M{top} 70q{a} {b} {c} {d}" for a, b, c, d in ((-6, -8, -12, 3), (-7, -1, -11, 11), (6, -8, 12, 3), (7, -1, 11, 11), (0, -10, -3, -13)))
    return f"M{x} 106Q{x + lean*.3} 88 {top} 70" + fr
dx = -4
I["goa"] = svg(H(106, 4, 116), R(28 + dx, 60, 50, 46), R(36 + dx, 46, 34, 14), f"M{32+dx} 46L{53+dx} 30L{74+dx} 46Z", V(53 + dx, 18, 30), H(22, 48 + dx, 58 + dx),
               R(80 + dx, 44, 16, 62), f"M{80+dx} 44L{88+dx} 30L{96+dx} 44", A(84 + dx, 54, 8, 14), A(45 + dx, 80, 16, 26), A(32 + dx, 68, 8, 14), A(66 + dx, 68, 8, 14),
               palm(9, 4), palm(112, -4))

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for slug, s in I.items():
        open(os.path.join(OUT, slug + ".svg"), "w", encoding="utf8").write(s)
    print("wrote", len(I), "icons to img/city/")
