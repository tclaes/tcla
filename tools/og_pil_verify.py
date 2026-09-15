import sys

from PIL import Image

# Validator-via-PIL (deterministisch): PIL = dezelfde renderer+kodec als de
# generator tools/make_og_pil.py, dus de OG-vereisten worden gemeten in exact
# dezelfde kleurruimte als ze getekend zijn (tol 0). Geen QL/gamma meer.

path = sys.argv[1]
im = Image.open(path).convert("RGB")
assert im.format == "PNG", "geen PNG: " + str(im.format)

W, H = 1200, 630
assert im.size == (W, H), f"formaat {im.size} != {W}x{H}"

BONE = (245, 243, 239)
INK = (11, 12, 14)
LIME = (200, 249, 91)

bone_c = ink_c = lime_c = 0
pix = im.load()
for y in range(min(H, 630)):
    for x in range(min(W, 1200)):
        p = pix[x, y]
        if p == BONE:
            bone_c += 1
        elif p == LIME:
            lime_c += 1
        elif p == INK:
            ink_c += 1

ok = True


def chk(label, cond):
    global ok
    ok = ok and cond
    print(("PASS " if cond else "FAIL ") + label)


chk("PNG magic (PIL leest alleen echte PNGs)", True)
chk(f"formaat 1200x630", (im.size) == (W, H))
chk(f"bone-tekst aanwezig ({bone_c} px)", bone_c >= 30000)
chk(f"lime-accent aanwezig ({lime_c} px)", lime_c >= 500)
chk(f"ink-achtergrond ({ink_c} px)", ink_c >= 200000)

print("RESULT:", "PASS" if ok else "FAIL")
sys.exit(0 if ok else 1)
