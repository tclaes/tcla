import struct
import sys
import zlib

# OG-validator, tolerant voor de QuickLook->sips-renderketen (gamma + anti-alias).
# Telt per RIJ het aantal bone- en accentpixels over de hele breedte.

path = sys.argv[1]
d = open(path, "rb").read()
assert d[:8] == b"\x89PNG\r\n\x1a\n", "geen PNG magic: " + d[:8].hex()

pos = 8
idat_all = b""
w = h = None
while pos < len(d):
    ln = struct.unpack_from(">I", d, pos)[0]
    typ = d[pos + 4 : pos + 8]
    payload = d[pos + 8 : pos + 8 + ln]
    if typ == b"IHDR":
        w, h = struct.unpack_from(">II", payload, 0)
        bd, ct = payload[8], payload[9]
        assert bd == 8 and ct == 6, f"IHDR bd={bd} ct={ct}"
    elif typ == b"IDAT":
        idat_all += payload
    pos += 12 + ln

raw = zlib.decompress(idat_all)
assert len(raw) == h * (1 + w * 4), f"scanline {len(raw)} != {h*(1+w*4)}"
assert (w, h) == (1200, 630), f"formaat {w}x{h} != 1200x630"


def px(x, y):
    i = y * (1 + w * 4) + 1 + x * 4
    return raw[i], raw[i + 1], raw[i + 2]


BONE = (245, 243, 239)
ACC = (200, 249, 91)
INK = (11, 12, 14)


def close(a, b, tol):
    return all(abs(x - y) <= tol for x, y in zip(a, b))


ok = True


def chk(label, cond):
    global ok
    ok = ok and cond
    print(("PASS " if cond else "FAIL ") + label)


chk("magic PNG", True)

bone_rows = []
acc_rows = []
ink_rows = []
for y in range(h):
    nb = na = ni = 0
    for x in range(0, w, 2):
        p = px(x, y)
        if close(p, BONE, 45):
            nb += 1
        elif close(p, ACC, 45):
            na += 1
        elif close(p, INK, 12):
            ni += 1
    if nb >= 380:
        bone_rows.append(y)
    if na >= 280:
        acc_rows.append(y)
    if ni >= 500:
        ink_rows.append(y)


def group(rows):
    out = []
    st = pr = None
    for r in rows:
        if pr is None or r - pr > 2:
            if st is not None:
                out.append((st, pr))
            st = r
        pr = r
    if st is not None:
        out.append((st, pr))
    return out


bone_runs = group(bone_rows)
acc_runs = group(acc_rows)

name_ok = acc_ok = False
for st, en in bone_runs:
    if st < 420 and en - st >= 40:
        name_ok = True
        print(f"  naam-band bone rijen {st}..{en}")
for st, en in acc_runs:
    if st >= 200 and en - st >= 12:
        acc_ok = True
        print(f"  accent-band rijen {st}..{en}")

chk("naam-band bone (dik >=40, bovenste 2/3): " + str(bone_runs), name_ok)
chk("accent-band (dik >=12): " + str(acc_runs), acc_ok)
chk("ink-achtergrond rijen >= 300: " + str(len(ink_rows)), len(ink_rows) >= 300)

print("RESULT:", "PASS" if ok else "FAIL")
sys.exit(0 if ok else 1)
