import os
from PIL import Image, ImageDraw, ImageFont

icons_dir = r"c:\Users\siddi\Classic-Tailor-s\public\icons"
public_dir = r"c:\Users\siddi\Classic-Tailor-s\public"
os.makedirs(icons_dir, exist_ok=True)

def create_master_ct_icon(dim=1024):
    img = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    center = dim / 2
    radius = dim * 0.46

    # Gradient fill in circle
    c1 = (244, 228, 188)
    c2 = (212, 175, 55)
    c3 = (184, 148, 31)

    steps = int(radius)
    for r in range(steps, 0, -1):
        t = 1.0 - (r / steps)
        if t < 0.5:
            f = t / 0.5
            red = int(c1[0] + (c2[0] - c1[0]) * f)
            green = int(c1[1] + (c2[1] - c1[1]) * f)
            blue = int(c1[2] + (c2[2] - c1[2]) * f)
        else:
            f = (t - 0.5) / 0.5
            red = int(c2[0] + (c3[0] - c2[0]) * f)
            green = int(c2[1] + (c3[1] - c2[1]) * f)
            blue = int(c2[2] + (c3[2] - c2[2]) * f)
        draw.ellipse([center - r, center - r, center + r, center + r], fill=(red, green, blue, 255))

    # Outer border ring
    draw.ellipse([center - radius, center - radius, center + radius, center + radius],
                 outline=(255, 248, 231, 240), width=int(dim * 0.02))

    # Inner concentric thin gold ring
    inner_r = radius * 0.88
    draw.ellipse([center - inner_r, center - inner_r, center + inner_r, center + inner_r],
                 outline=(92, 0, 21, 100), width=int(dim * 0.01))

    # Typography: "CT" in bold serif
    font_size = int(dim * 0.44)
    font = None
    for font_name in ["georgiab.ttf", "georgia.ttf", "timesbd.ttf", "times.ttf", "arialbd.ttf"]:
        try:
            font = ImageFont.truetype(font_name, font_size)
            break
        except Exception:
            pass

    if font is None:
        font = ImageFont.load_default()

    text = "CT"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    x = (dim - text_w) / 2 - bbox[0]
    y = (dim - text_h) / 2 - bbox[1] - (dim * 0.02)

    # Subtle drop shadow
    shadow_offset = int(dim * 0.015)
    draw.text((x + shadow_offset, y + shadow_offset), text, font=font, fill=(0, 0, 0, 70))

    # Bold rich dark brown text #2C1810
    draw.text((x, y), text, font=font, fill=(44, 24, 16, 255))

    return img

master = create_master_ct_icon(1024)

# Generate all sizes using Lanczos downsampling
master.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(icons_dir, "icon-512x512.png"), "PNG")
master.resize((192, 192), Image.Resampling.LANCZOS).save(os.path.join(icons_dir, "icon-192x192.png"), "PNG")
master.resize((180, 180), Image.Resampling.LANCZOS).save(os.path.join(icons_dir, "apple-touch-icon.png"), "PNG")
master.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(public_dir, "favicon-32x32.png"), "PNG")
master.resize((16, 16), Image.Resampling.LANCZOS).save(os.path.join(public_dir, "favicon-16x16.png"), "PNG")

# Multi-resolution ICO
master.save(
    os.path.join(public_dir, "favicon.ico"),
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
)

print("All icons and favicon.ico generated cleanly!")
