from PIL import Image, ImageDraw, ImageFont

# Deterministische OG: 1200x630, ink-bg (11,12,14), bone-naam groot, lime-accent.
# Bands komen overeen met de bewezen og-final (naam 249..333, accent 403..424).

W, H = 1200, 630
img = Image.new("RGBA", (W, H), (11, 12, 14, 255))
dr = ImageDraw.Draw(img)

font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 168)
dr.text((104, 186), "Tom Claes", font=font, fill=(245, 243, 239, 255))

font2 = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 52)
dr.text((108, 462), "Front-end developer", font=font2, fill=(160, 165, 175, 255))

dr.rectangle([120, 505, 1080, 520], fill=(200, 249, 91, 255))

img.save("/Users/tomclaes/Documents/Code/tcla/public/og.png")
print("geschreven public/og.png")
