import struct
import sys
import zlib

path = sys.argv[1]
d = open(path, "rb").read()
assert d[:8] == b"\x89PNG\r\n\x1a\n", "geen PNG"

pos = 8
idat = b""
w = h = None
while pos < len(d):
    ln = struct.unpack_from(">I", d, pos)[0]
    typ = d[pos + 4 : pos + 8]
    payload = d[pos + 8 : pos + 8 + ln]
    if typ == b"IHDR":
        w, h = struct.unpack_from(">II", payload, 0)
    elif typ == b"IDAT":
        idat += payload
    pos += 12 + ln

raw = zlib.decompress(idat)
X = 360
BONE = (245, 243, 239)
ACC = (200, 249, 91)
INK = (11, 12, 14)


def px(x, y):
    i = y * (1 + w * 4) + 1 + x * 4
    return raw[i], raw[i + 1], raw[i + 2]


def close(a, b, tol):
    return all(abs(x - y) <= tol for x, y in zip(a, b))


ok = True


def chk(label, cond):
    global ok
    ok = ok and cond
    print(("PASS " if cond else "FAIL ") + label)


chk("magic+IHDR", True)
chk("formaat 1200x630", (w, h) == (1200, 630))

# naam-band: op kolom x=360 moeten rijen 249..333 (dus ~84 rijen dik) bone zijn
nb = sum(1 for y in range(249, 334) if close(px(X, y), BONE, 38))
chk(f"naam-band bone 249..333: {nb}/84", nb >= 70)

# accent-band: rijen 403..424 (~22 rijen) accent
na = sum(1 for y in range(403, 425) if close(px(X, y), ACC, 45))
chk(f"accent-band 403..424: {na}/22", na >= 13)

# bg: enkele ink-pixels
nbg = sum(1 for y in range(0, 630, 7) if close(px(X, y), INK, 12))
chk(f"ink-bg (117 steekproeven)", nbg >= 80)

print("RESULT:", "PASS" if ok else "FAIL")
sys.exit(0 if ok else 1)
