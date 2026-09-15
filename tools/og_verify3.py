import sys

from PIL import Image

# OG-validator v4 — deterministisch via PIL (géén QuickLook, géén sips, géén
# eigen zlib-scanlinelezer die filterbytes meeleest). PIL decodeert elke PNG
# exact zoals de generator tools/make_og_pil.py hem schrijft → dezelfde waarheid
# aan de invoer- én uitvoerzijde van de keten.

path = sys.argv[1]
im = Image.open(path).convert("RGB")
assert im.format == "PNG", "geen PIL-PNG? format=" + str(im.format)
W, H = 1200, 630
ok = im.size == (W, H)
print(("PASS " if ok else "FAIL ") + f"formaat 1200x630 ({im.size})")
if not ok:
    print("RESULT FAIL"); sys.exit(1)


def close(c, target, tol):
    return all(abs(a - b) <= tol for a, b in zip(c, target))


BONE = (245, 243, 239)
ACC = (200, 249, 91)
INK = (11, 12, 14)

bone_c = acc_c = ink_c = 0
px = im.load()
for y in range(H):
    for x in range(W):
        p = px[x, y]
        if close(p, BONE, 14):
            bone_c += 1
        elif close(p, ACC, 14):
            acc_c += 1
        elif close(p, INK, 10):
            ink_c += 1

res = True


def chk(label, cond):
    global res
    res = res and cond
    print(("PASS " if cond else "FAIL ") + label)


chk(f"bone-tekst dik aanwezig ({bone_c} px)", bone_c >= 50000)
chk(f"lime-accent aanwezig ({acc_c} px)", acc_c >= 50000)
chk(f"ink-achtergrond ({ink_c} px)", ink_c >= 500000)

print("RESULT " + ("PASS" if res else "FAIL") + "  exit=" + str(0 if res else 1))
sys.exit(0 if res else 1)
