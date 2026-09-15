import struct
import sys
import zlib

# OG-validator — juiste PNG-decode MET scanline-defiltering (Sub/Up/Average/Paeth).
# Dit is de wortel-oorzaak-fix: counts die eerst "2382px bone / 1px accent" zeiden,
# lazen GEFILTERDE bytes (filterbyte+delta) als pixels. Met defiltering worden de
# werkelijke RGBA-waarden geteld, deterministisch, onafhankelijk van de encoder.

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
        bd, ct, inter = payload[8], payload[9], payload[12]
        assert (bd, ct, inter) == (8, 6, 0), f"IHDR bd={bd} ct={ct} inter={inter}"
    elif typ == b"IDAT":
        idat_all += payload
    pos += 12 + ln

comp = zlib.decompress(idat_all)
stride = 1 + w * 4
assert len(comp) == h * stride, f"scanlines {len(comp)} != {h*stride}"

# PNG-defilter: elke rij begint met 1 filterbyte (0=None 1=Sub 2=Up 3=Avg 4=Paeth)
raw = bytearray(len(comp))
prev = bytearray(w * 4)
for y in range(h):
    base = y * stride
    fbt = comp[base]
    line = comp[base + 1 : base + stride]
    cur = bytearray(line)
    if fbt == 0:
        pass
    elif fbt == 1:
        for x in range(4, len(cur)):
            cur[x] = (cur[x] + cur[x - 4]) & 0xFF
    elif fbt == 2:
        for x in range(len(cur)):
            cur[x] = (cur[x] + prev[x]) & 0xFF
    elif fbt == 3:
        for x in range(len(cur)):
            a = cur[x - 4] if x >= 4 else 0
            b = prev[x]
            cur[x] = (cur[x] + (a + b) // 2) & 0xFF
    elif fbt == 4:
        for x in range(len(cur)):
            a = cur[x - 4] if x >= 4 else 0
            b = prev[x]
            c = prev[x - 4] if x >= 4 else 0
            p = a + b - c
            pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
            pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
            cur[x] = (cur[x] + pr) & 0xFF
    else:
        raise AssertionError("filtertype " + str(fbt))
    raw[base + 1 : base + stride] = cur
    prev = cur


def px(x, y):
    i = y * stride + 1 + x * 4
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


chk("PNG magic + IHDR 8/RGBA", True)
chk(f"formaat 1200x630", (w, h) == (1200, 630))
if (w, h) != (1200, 630):
    print("RESULT: FAIL (formaat)")
    sys.exit(1)

bone_c = acc_c = ink_c = 0
for y in range(h):
    for x in range(w):
        p = px(x, y)
        if close(p, BONE, 48):
            bone_c += 1
        elif close(p, ACC, 50):
            acc_c += 1
        elif close(p, INK, 45):
            ink_c += 1

chk(f"bone-tekst groot aanwezig ({bone_c} px)", bone_c >= 20000)
chk(f"accent-lime aanwezig ({acc_c} px)", acc_c >= 50)
chk(f"ink-achtergrond ({ink_c} px)", ink_c >= 250000)

print("RESULT:", "PASS" if ok else "FAIL")
sys.exit(0 if ok else 1)
