from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
INK = (11, 12, 14)
BONE = (245, 243, 239)
ACC = (200, 249, 91)

img = Image.new("RGB", (W, H), INK)
dr = ImageDraw.Draw(img)

f = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 190)
# bone-naam groot; ascent telt naar beneden
dr.text((98, 248), "Tom Claes", font=f, fill=BONE)

f2 = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 54)
dr.text((102, 396), "Front-end developer", font=f2, fill=(169, 175, 184))

# accent-lime strook (band 403..424 beneden)
dr.rectangle([100, 403, 1100, 424], fill=ACC)

out = "/Users/tomclaes/Documents/Code/tcla/public/og_pil_route.png"
img.save(out)
print("geschreven:", out)
