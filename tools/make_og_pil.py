from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
INK = (11, 12, 14, 255)
BONE = (245, 243, 239, 255)
ACC = (200, 249, 91, 255)

img = Image.new("RGBA", (W, H), INK)
dr = ImageDraw.Draw(img)

f = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 215)
dr.text((96, 186), "Tom Claes", font=f, fill=BONE)

f2 = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 56)
dr.text((100, 452), "Front-end developer", font=f2, fill=(150, 155, 163, 255))
dr.rectangle([100, 490, 1100, 502], fill=ACC)

out = "/Users/tomclaes/Documents/Code/tcla/public/og_pil.png"
img.save(out)
print("ok " + out)
