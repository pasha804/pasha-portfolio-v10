import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1376, 768

# Helper to load fonts
def get_font(name, size):
    font_map = {
        'sans': 'C:/Windows/Fonts/segoeui.ttf',
        'sans_bold': 'C:/Windows/Fonts/segoeuib.ttf',
        'mono': 'C:/Windows/Fonts/consola.ttf',
        'mono_bold': 'C:/Windows/Fonts/consolab.ttf',
        'serif': 'C:/Windows/Fonts/georgia.ttf',
        'serif_bold': 'C:/Windows/Fonts/georgiab.ttf',
    }
    path = font_map.get(name, font_map['sans'])
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

def draw_radial_glow(img, center, radius, color, max_alpha=120):
    """Draw a smooth radial glow bloom using numpy."""
    cx, cy = center
    # Create float grid
    y, x = np.ogrid[:H, :W]
    dist_sq = (x - cx)**2 + (y - cy)**2
    rad_sq = radius**2
    
    alpha = np.clip(1.0 - np.sqrt(dist_sq) / radius, 0, 1.0)
    alpha = (alpha**2) * (max_alpha / 255.0) # smooth quadratic falloff
    
    # Composite onto image
    base = np.array(img, dtype=np.float32)
    rgb = np.array(color, dtype=np.float32)
    
    for c in range(3):
        base[:, :, c] = base[:, :, c] * (1.0 - alpha) + rgb[c] * alpha
        
    return Image.fromarray(np.clip(base, 0, 255).astype(np.uint8))

def draw_grid_lines(draw, spacing=48, color=(255, 255, 255, 12)):
    for x in range(0, W, spacing):
        draw.line([(x, 0), (x, H)], fill=color, width=1)
    for y in range(0, H, spacing):
        draw.line([(0, y), (W, y)], fill=color, width=1)

def draw_rounded_glass_card(draw, box, radius=20, bg=(10, 14, 26, 210), border=(255, 255, 255, 35)):
    x0, y0, x1, y1 = box
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=bg, outline=border, width=1)

# ==============================================================================
# 1. WISHORA — Digital Celebration Studio
# ==============================================================================
def create_wishora():
    img = Image.new('RGB', (W, H), '#06070e')
    img = draw_radial_glow(img, (int(W * 0.72), int(H * 0.35)), 460, (189, 52, 254), max_alpha=100)
    img = draw_radial_glow(img, (int(W * 0.28), int(H * 0.65)), 420, (0, 229, 255), max_alpha=80)
    img = draw_radial_glow(img, (int(W * 0.50), int(H * 0.50)), 380, (255, 190, 40), max_alpha=50)
    
    draw = ImageDraw.Draw(img, 'RGBA')
    draw_grid_lines(draw, spacing=52, color=(255, 255, 255, 8))
    
    # Outer main canvas frame
    cx0, cy0, cx1, cy1 = 48, 44, W - 48, H - 44
    draw.rounded_rectangle([cx0, cy0, cx1, cy1], radius=24, fill=(11, 14, 28, 215), outline=(189, 52, 254, 75), width=2)
    
    # Top header bar
    draw.line([(cx0, cy0 + 64), (cx1, cy0 + 64)], fill=(255, 255, 255, 24), width=1)
    
    # Brand
    draw.rounded_rectangle([cx0 + 24, cy0 + 16, cx0 + 56, cy0 + 48], radius=8, fill=(189, 52, 254, 220))
    draw.text((cx0 + 34, cy0 + 21), 'W', font=get_font('serif_bold', 18), fill=(255, 255, 255))
    draw.text((cx0 + 68, cy0 + 22), 'WISHORA // DIGITAL CELEBRATION STUDIO', font=get_font('sans_bold', 15), fill=(255, 255, 255))
    
    # Pills in header
    pills = ['3D CELEBRATION CARDS', 'AUDIO SCENES', 'INSTANT SHARE', 'NEXT.JS 15']
    px = cx1 - 480
    for i, pill in enumerate(pills):
        active = (i == 0)
        bg = (189, 52, 254, 60) if active else (255, 255, 255, 12)
        border = (189, 52, 254, 180) if active else (255, 255, 255, 30)
        fg = (255, 255, 255) if active else (180, 185, 200)
        draw.rounded_rectangle([px, cy0 + 20, px + 110, cy0 + 44], radius=12, fill=bg, outline=border, width=1)
        draw.text((px + 10, cy0 + 25), pill[:12], font=get_font('mono', 9), fill=fg)
        px += 118
        
    # Left Studio Panel
    draw_rounded_glass_card(draw, (cx0 + 24, cy0 + 88, cx0 + 360, cy1 - 24), radius=16, bg=(8, 10, 20, 200))
    draw.text((cx0 + 44, cy0 + 106), '// PERSONALIZATION STUDIO', font=get_font('mono_bold', 11), fill=(0, 229, 255))
    
    draw.text((cx0 + 44, cy0 + 144), 'CELEBRATION OCCASION', font=get_font('sans', 10), fill=(160, 165, 180))
    draw.rounded_rectangle([cx0 + 44, cy0 + 162, cx0 + 340, cy0 + 202], radius=8, fill=(255, 255, 255, 12), outline=(255, 255, 255, 30))
    draw.text((cx0 + 56, cy0 + 172), 'Golden Jubilee Birthday ✨', font=get_font('sans_bold', 12), fill=(255, 255, 255))
    
    draw.text((cx0 + 44, cy0 + 224), 'RECIPIENT NAME', font=get_font('sans', 10), fill=(160, 165, 180))
    draw.rounded_rectangle([cx0 + 44, cy0 + 242, cx0 + 340, cy0 + 282], radius=8, fill=(255, 255, 255, 12), outline=(255, 255, 255, 30))
    draw.text((cx0 + 56, cy0 + 252), 'Sarah Al-Mansoor', font=get_font('sans_bold', 12), fill=(255, 255, 255))
    
    draw.text((cx0 + 44, cy0 + 304), 'AESTHETIC PALETTE', font=get_font('sans', 10), fill=(160, 165, 180))
    themes = [('CELESTIAL', (189, 52, 254)), ('COSMIC', (0, 229, 255)), ('ROYAL', (255, 190, 40))]
    tx = cx0 + 44
    for tname, tcol in themes:
        draw.rounded_rectangle([tx, cy0 + 322, tx + 92, cy0 + 368], radius=8, fill=(tcol[0]//6, tcol[1]//6, tcol[2]//6, 200), outline=tcol, width=1)
        draw.text((tx + 16, cy0 + 338), tname, font=get_font('mono_bold', 10), fill=tcol)
        tx += 100
        
    draw.text((cx0 + 44, cy0 + 394), 'AMBIENT SOUNDSCAPE', font=get_font('sans', 10), fill=(160, 165, 180))
    draw.rounded_rectangle([cx0 + 44, cy0 + 412, cx0 + 340, cy0 + 452], radius=8, fill=(255, 255, 255, 12), outline=(255, 255, 255, 30))
    draw.text((cx0 + 56, cy0 + 422), 'Starlight Reverie (432Hz) 🎵', font=get_font('sans_bold', 12), fill=(255, 215, 0))
    
    # Center Stage: 3D Greeting Card
    card_x0, card_y0, card_x1, card_y1 = W//2 - 210, cy0 + 82, W//2 + 210, cy1 - 30
    draw.rounded_rectangle([card_x0, card_y0, card_x1, card_y1], radius=20, fill=(20, 14, 36, 230), outline=(255, 215, 0, 140), width=2)
    # Inner gold ornament border
    draw.rounded_rectangle([card_x0 + 12, card_y0 + 12, card_x1 - 12, card_y1 - 12], radius=14, fill=None, outline=(255, 215, 0, 60), width=1)
    
    draw.text((W//2 - 120, card_y0 + 32), 'HAPPY BIRTHDAY', font=get_font('serif_bold', 28), fill=(255, 225, 120))
    draw.text((W//2 - 65, card_y0 + 72), 'Dearest Sarah', font=get_font('serif', 17), fill=(255, 205, 220))
    
    # Photo medallion
    mcx, mcy = W//2, card_y0 + 190
    draw.ellipse([mcx - 65, mcy - 65, mcx + 65, mcy + 65], fill=(35, 20, 55), outline=(255, 215, 0, 180), width=2)
    draw.text((mcx - 30, mcy - 12), '✨ 24 ✨', font=get_font('serif_bold', 20), fill=(255, 215, 0))
    
    quote = '"May your upcoming year be illuminated by boundless joy,\nextraordinary accomplishments, and celestial starlight."'
    draw.text((W//2 - 170, card_y0 + 290), quote, font=get_font('sans', 12), fill=(240, 240, 255), align='center')
    
    draw.rounded_rectangle([card_x0 + 36, card_y1 - 66, card_x1 - 36, card_y1 - 24], radius=10, fill=(255, 195, 30), outline=(255, 230, 100))
    draw.text((card_x0 + 95, card_y1 - 52), 'UNWRAP GIFT EXPERIENCE ✨', font=get_font('sans_bold', 12), fill=(10, 10, 15))
    
    # Right Panel: Telemetry & Actions
    rx0 = W - 360 - 48
    draw_rounded_glass_card(draw, (rx0, cy0 + 88, cx1 - 24, cy1 - 24), radius=16, bg=(8, 10, 20, 200))
    draw.text((rx0 + 20, cy0 + 106), '// EXPERIENCE TELEMETRY', font=get_font('mono_bold', 11), fill=(0, 229, 255))
    
    telemetry = [
        ('RENDER ENGINE', 'FRAMER MOTION 3D'),
        ('FRAME RATE', '60 FPS LOCKED'),
        ('INTERACTION', 'GYROSCOPE TILT'),
        ('SHARE LINK', 'wishora.app/e/98x'),
        ('STATUS', 'ACTIVE SPRINT')
    ]
    ty = cy0 + 144
    for lab, val in telemetry:
        draw.text((rx0 + 20, ty), lab, font=get_font('mono', 10), fill=(150, 155, 170))
        draw.text((cx1 - 160, ty), val, font=get_font('mono_bold', 10), fill=(0, 229, 255) if 'FPS' in val or '3D' in val else (255, 255, 255))
        ty += 34
        
    # Audio visualizer bars
    draw.text((rx0 + 20, ty + 20), 'AUDIO FREQ SPECTRUM:', font=get_font('mono', 10), fill=(255, 215, 0))
    bx = rx0 + 20
    for h in [12, 24, 18, 30, 14, 22, 28, 16, 20, 10]:
        draw.rectangle([bx, ty + 75 - h, bx + 6, ty + 75], fill=(189, 52, 254))
        bx += 10
        
    draw.rounded_rectangle([rx0 + 20, cy1 - 70, cx1 - 44, cy1 - 34], radius=10, fill=(0, 229, 255, 200))
    draw.text((rx0 + 55, cy1 - 56), 'EXPORT EXPERIENCE (URL) ↗', font=get_font('mono_bold', 11), fill=(5, 10, 20))
    
    return img

# ==============================================================================
# 2. ETERNAL GARDEN — 3D Botanical WebGL Experience
# ==============================================================================
def create_eternal_garden():
    img = Image.new('RGB', (W, H), '#020608')
    img = draw_radial_glow(img, (int(W * 0.50), int(H * 0.55)), 460, (16, 185, 129), max_alpha=120)
    img = draw_radial_glow(img, (int(W * 0.22), int(H * 0.35)), 400, (0, 229, 255), max_alpha=80)
    img = draw_radial_glow(img, (int(W * 0.78), int(H * 0.40)), 420, (139, 92, 246), max_alpha=70)
    
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Ground mesh perspective grid
    for y in range(480, H, 24):
        alpha = int(120 * ((y - 480) / (H - 480)))
        draw.line([(0, y), (W, y)], fill=(16, 185, 129, alpha), width=1)
    for x in range(0, W, 64):
        draw.line([(x, H), (W//2 + (x - W//2)//4, 480)], fill=(16, 185, 129, 35), width=1)
        
    cx0, cy0, cx1, cy1 = 48, 44, W - 48, H - 44
    draw.rounded_rectangle([cx0, cy0, cx1, cy1], radius=24, fill=(3, 14, 15, 200), outline=(16, 185, 129, 90), width=2)
    
    # Header
    draw.line([(cx0, cy0 + 64), (cx1, cy0 + 64)], fill=(255, 255, 255, 20), width=1)
    draw.rounded_rectangle([cx0 + 24, cy0 + 16, cx0 + 56, cy0 + 48], radius=8, fill=(16, 185, 129, 220))
    draw.text((cx0 + 34, cy0 + 20), '🌿', font=get_font('sans', 16), fill=(255, 255, 255))
    draw.text((cx0 + 68, cy0 + 22), 'ETERNAL GARDEN // THREE.JS BOTANICAL ECOSYSTEM', font=get_font('sans_bold', 15), fill=(230, 255, 245))
    
    draw.rounded_rectangle([cx1 - 280, cy0 + 18, cx1 - 24, cy0 + 46], radius=14, fill=(16, 185, 129, 35), outline=(16, 185, 129, 160))
    draw.ellipse([cx1 - 266, cy0 + 28, cx1 - 258, cy0 + 36], fill=(52, 211, 153))
    draw.text((cx1 - 248, cy0 + 26), '60 FPS GPU SHADER PIPELINE', font=get_font('mono_bold', 10), fill=(52, 211, 153))
    
    # Botanical Telemetry HUD top left
    hx, hy = cx0 + 36, cy0 + 88
    hud_items = [
        ('// BIOME:', 'BIOLUMINESCENT LOTUS CORE'),
        ('// SHADER:', 'RAYMARCHED NOISE DEFORMATION'),
        ('// LIGHTING:', 'OKLCH(0.78, 0.22, 160) AMBIENT'),
        ('// SPRITES:', '14,200 INSTANCED POLLEN MOTES')
    ]
    for tag, val in hud_items:
        draw.text((hx, hy), tag, font=get_font('mono_bold', 10), fill=(52, 211, 153))
        draw.text((hx + 88, hy), val, font=get_font('mono', 10), fill=(200, 255, 230))
        hy += 22
        
    # Central Sacred Bioluminescent Lotus
    center_x, center_y = W // 2, H // 2 + 20
    
    # Outer petals
    for angle_deg in range(0, 360, 45):
        rad = math.radians(angle_deg)
        px = center_x + int(120 * math.cos(rad))
        py = center_y + int(90 * math.sin(rad))
        draw.ellipse([px - 45, py - 35, px + 45, py + 35], fill=(16, 185, 129, 70), outline=(0, 229, 255, 180), width=2)
        
    # Middle petals
    for angle_deg in range(22, 382, 45):
        rad = math.radians(angle_deg)
        px = center_x + int(80 * math.cos(rad))
        py = center_y + int(60 * math.sin(rad))
        draw.ellipse([px - 35, py - 28, px + 35, py + 28], fill=(139, 92, 246, 90), outline=(189, 52, 254, 200), width=2)
        
    # Center glowing seed core
    draw.ellipse([center_x - 45, center_y - 45, center_x + 45, center_y + 45], fill=(255, 255, 255), outline=(52, 211, 153), width=4)
    draw.ellipse([center_x - 20, center_y - 20, center_x + 20, center_y + 20], fill=(52, 211, 153))
    
    # Right HUD
    rx, ry = cx1 - 280, cy0 + 88
    draw.text((rx, ry), 'COMPUTATIONAL BOTANICA', font=get_font('sans_bold', 13), fill=(0, 229, 255))
    draw.text((rx, ry + 24), 'UnrealBloomPass Intensity: 1.6\nVolumetric Fog Depth: 250m\nParticle Turbulence: Simplex 4D', font=get_font('mono', 10), fill=(160, 180, 200), spacing=6)
    
    # Floating spores
    spores = [(W//2 - 240, 240), (W//2 + 280, 280), (W//2 - 180, 420), (W//2 + 210, 460), (320, 320), (1050, 340)]
    for sx, sy in spores:
        draw.ellipse([sx - 4, sy - 4, sx + 4, sy + 4], fill=(52, 211, 153))
        
    # Footer dock
    draw.line([(cx0, cy1 - 56), (cx1, cy1 - 56)], fill=(255, 255, 255, 20), width=1)
    draw.text((cx0 + 24, cy1 - 38), 'CAMERA: [ORBIT 360°]  [MACRO VIEW]  [CINEMATIC SWEEP]', font=get_font('mono_bold', 11), fill=(52, 211, 153))
    draw.text((cx1 - 320, cy1 - 38), 'LIGHTING: [TWILIGHT MINT]  [AURORA SKY]', font=get_font('mono_bold', 11), fill=(0, 229, 255))
    
    return img

# ==============================================================================
# 3. A LITTLE GALAXY — Cinematic Storytelling WebGL
# ==============================================================================
def create_a_little_galaxy():
    img = Image.new('RGB', (W, H), '#020308')
    img = draw_radial_glow(img, (int(W * 0.65), int(H * 0.42)), 480, (99, 102, 241), max_alpha=120)
    img = draw_radial_glow(img, (int(W * 0.30), int(H * 0.68)), 420, (0, 229, 255), max_alpha=90)
    img = draw_radial_glow(img, (int(W * 0.80), int(H * 0.75)), 380, (236, 72, 153), max_alpha=80)
    
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Draw starfield
    np.random.seed(42)
    for _ in range(120):
        sx = int(np.random.randint(20, W - 20))
        sy = int(np.random.randint(20, H - 20))
        size = int(np.random.choice([1, 2, 3]))
        draw.ellipse([sx, sy, sx + size, sy + size], fill=(255, 255, 255, int(np.random.randint(140, 255))))
        
    cx0, cy0, cx1, cy1 = 48, 44, W - 48, H - 44
    draw.rounded_rectangle([cx0, cy0, cx1, cy1], radius=24, fill=(6, 9, 24, 205), outline=(99, 102, 241, 95), width=2)
    
    # Header
    draw.line([(cx0, cy0 + 64), (cx1, cy0 + 64)], fill=(255, 255, 255, 20), width=1)
    draw.rounded_rectangle([cx0 + 24, cy0 + 16, cx0 + 56, cy0 + 48], radius=8, fill=(99, 102, 241, 220))
    draw.text((cx0 + 34, cy0 + 20), '✨', font=get_font('sans', 16), fill=(255, 255, 255))
    draw.text((cx0 + 68, cy0 + 22), 'A LITTLE GALAXY // INTERSTELLAR WEB STORYTELLING', font=get_font('sans_bold', 15), fill=(255, 255, 255))
    
    draw.rounded_rectangle([cx1 - 260, cy0 + 18, cx1 - 24, cy0 + 46], radius=14, fill=(0, 229, 255, 30), outline=(0, 229, 255, 140))
    draw.text((cx1 - 235, cy0 + 26), 'WEBGL COSMIC PIPELINE', font=get_font('mono_bold', 10), fill=(0, 229, 255))
    
    # Orbital Rings in Center
    draw.ellipse([W//2 - 250, H//2 - 190, W//2 + 250, H//2 + 190], fill=None, outline=(0, 229, 255, 75), width=1)
    draw.ellipse([W//2 - 320, H//2 - 120, W//2 + 320, H//2 + 120], fill=None, outline=(236, 72, 153, 60), width=1)
    
    # Constellation Lines
    points = [(W//2 - 180, 220), (W//2 - 80, 160), (W//2 + 110, 190), (W//2 + 220, 290), (W//2 + 140, 390)]
    for i in range(len(points) - 1):
        draw.line([points[i], points[i+1]], fill=(0, 229, 255, 160), width=1)
    for p in points:
        draw.ellipse([p[0]-4, p[1]-4, p[0]+4, p[1]+4], fill=(255, 255, 255), outline=(0, 229, 255), width=2)
        
    # Main Headline
    draw.text((W//2 - 150, H//2 - 60), '// CHAPTER 01: THE STARLIGHT ODYSSEY', font=get_font('mono_bold', 11), fill=(0, 229, 255))
    draw.text((W//2 - 230, H//2 - 30), 'A Little Galaxy.', font=get_font('serif_bold', 52), fill=(255, 255, 255))
    desc = 'An emotional interactive web storytelling journey through the infinite cosmos,\nconnecting celestial scenes with fluid typography and harmonic score.'
    draw.text((W//2 - 260, H//2 + 45), desc, font=get_font('sans', 13), fill=(210, 220, 240), align='center')
    
    # Footer Player Dock
    draw.line([(cx0, cy1 - 64), (cx1, cy1 - 64)], fill=(255, 255, 255, 20), width=1)
    draw.text((cx0 + 24, cy1 - 42), 'ACT II: 02:45', font=get_font('mono_bold', 11), fill=(0, 229, 255))
    draw.rounded_rectangle([cx0 + 120, cy1 - 42, cx0 + 480, cy1 - 34], radius=4, fill=(255, 255, 255, 30))
    draw.rounded_rectangle([cx0 + 120, cy1 - 42, cx0 + 280, cy1 - 34], radius=4, fill=(0, 229, 255))
    draw.text((cx0 + 495, cy1 - 42), '06:20', font=get_font('mono', 11), fill=(160, 170, 190))
    
    draw.text((cx1 - 380, cy1 - 42), '[CINEMATIC PLAYBACK]  [CONSTELLATIONS]  [432Hz AUDIO]', font=get_font('mono_bold', 10), fill=(236, 72, 153))
    
    return img

# ==============================================================================
# 4. AURA PROTOCOL — Zero-Knowledge Cryptographic State Engine
# ==============================================================================
def create_aura_protocol():
    img = Image.new('RGB', (W, H), '#040508')
    img = draw_radial_glow(img, (int(W * 0.70), int(H * 0.35)), 460, (189, 52, 254), max_alpha=110)
    img = draw_radial_glow(img, (int(W * 0.30), int(H * 0.65)), 420, (0, 229, 255), max_alpha=80)
    
    draw = ImageDraw.Draw(img, 'RGBA')
    draw_grid_lines(draw, spacing=56, color=(255, 255, 255, 10))
    
    cx0, cy0, cx1, cy1 = 48, 44, W - 48, H - 44
    draw.rounded_rectangle([cx0, cy0, cx1, cy1], radius=24, fill=(8, 10, 18, 220), outline=(189, 52, 254, 85), width=2)
    
    # Header
    draw.line([(cx0, cy0 + 64), (cx1, cy0 + 64)], fill=(255, 255, 255, 20), width=1)
    draw.rounded_rectangle([cx0 + 24, cy0 + 16, cx0 + 56, cy0 + 48], radius=8, fill=(189, 52, 254, 220))
    draw.text((cx0 + 34, cy0 + 20), '⚡', font=get_font('sans', 16), fill=(255, 255, 255))
    draw.text((cx0 + 68, cy0 + 22), 'AURA PROTOCOL // ZERO-KNOWLEDGE STATE ENGINE', font=get_font('mono_bold', 14), fill=(255, 255, 255))
    
    draw.rounded_rectangle([cx1 - 260, cy0 + 18, cx1 - 24, cy0 + 46], radius=14, fill=(189, 52, 254, 35), outline=(189, 52, 254, 160))
    draw.text((cx1 - 238, cy0 + 26), 'ZK-SNARK VERIFIED: 100%', font=get_font('mono_bold', 10), fill=(216, 180, 254))
    
    # Left Panel: Telemetry
    draw_rounded_glass_card(draw, (cx0 + 24, cy0 + 88, cx0 + 350, cy1 - 24), radius=16, bg=(0, 0, 0, 140))
    draw.text((cx0 + 44, cy0 + 108), '// NETWORK CONSENSUS', font=get_font('mono_bold', 11), fill=(189, 52, 254))
    
    metrics = [
        ('BLOCK HEIGHT', '#4,892,104', (0, 229, 255)),
        ('PROOF LATENCY', '12.4 MS (STARK)', (189, 52, 254)),
        ('VERIFIED TXS', '2.84M / EPOCH', (255, 255, 255)),
        ('ACTIVE VALIDATORS', '1,024 NODES', (52, 211, 153))
    ]
    my = cy0 + 150
    for mlab, mval, mcol in metrics:
        draw.text((cx0 + 44, my), mlab, font=get_font('mono', 10), fill=(150, 155, 170))
        draw.text((cx0 + 44, my + 18), mval, font=get_font('mono_bold', 16), fill=mcol)
        my += 64
        
    # Center Stage
    draw.text((W//2 - 250, cy0 + 140), 'Zero-Knowledge State Engine.', font=get_font('sans_bold', 34), fill=(255, 255, 255))
    cdesc = 'High-performance cryptographic state transition engine uniting zero-knowledge proof\nverification with interactive, cinematic WebGL visualizations.'
    draw.text((W//2 - 250, cy0 + 190), cdesc, font=get_font('sans', 13), fill=(190, 195, 215))
    
    # Node Diagram
    nx, ny = W//2 - 180, cy0 + 310
    nodes = ['ZK-PROVER\nSTAGE 01', 'CONSENSUS\nVALIDATED', 'SETTLEMENT\nFINALIZED']
    for i, node in enumerate(nodes):
        active = (i == 1)
        bg = (0, 229, 255, 40) if active else (189, 52, 254, 30)
        border = (0, 229, 255, 220) if active else (189, 52, 254, 150)
        draw.rounded_rectangle([nx, ny, nx + 100, ny + 70], radius=14, fill=bg, outline=border, width=2)
        draw.text((nx + 14, ny + 18), node, font=get_font('mono_bold', 10), fill=(255, 255, 255))
        if i < 2:
            draw.line([(nx + 100, ny + 35), (nx + 150, ny + 35)], fill=(0, 229, 255, 200), width=2)
        nx += 150
        
    # Right Panel: Cryptographic Specs
    rx0 = cx1 - 350
    draw_rounded_glass_card(draw, (rx0, cy0 + 88, cx1 - 24, cy1 - 24), radius=16, bg=(0, 0, 0, 140))
    draw.text((rx0 + 20, cy0 + 108), '// CRYPTOGRAPHIC SPECS', font=get_font('mono_bold', 11), fill=(189, 52, 254))
    
    c_specs = [
        ('ELLIPTIC CURVE', 'BLS12-381 // BN254'),
        ('MERKLE ARITY', '16-ARY POSEIDON'),
        ('CIRCUIT CONSTRAINTS', '1.42M GKR CIRCUIT'),
        ('GAS EFFICIENCY', '94.2% OPTIMIZED')
    ]
    sy = cy0 + 150
    for slab, sval in c_specs:
        draw.text((rx0 + 20, sy), slab, font=get_font('mono', 10), fill=(150, 155, 170))
        draw.text((rx0 + 20, sy + 18), sval, font=get_font('mono_bold', 13), fill=(255, 255, 255))
        sy += 64
        
    draw.text((rx0 + 20, cy1 - 50), '● LIVE RPC CONNECTED (PARITY)', font=get_font('mono_bold', 10), fill=(52, 211, 153))
    
    return img

# ==============================================================================
# 5. GUESTNEXA — Hospitality SaaS & Hotel PMS
# ==============================================================================
def create_guestnexa():
    img = Image.new('RGB', (W, H), '#040814')
    img = draw_radial_glow(img, (int(W * 0.80), int(H * 0.25)), 460, (14, 165, 233), max_alpha=110)
    img = draw_radial_glow(img, (int(W * 0.20), int(H * 0.75)), 420, (20, 184, 166), max_alpha=90)
    
    draw = ImageDraw.Draw(img, 'RGBA')
    
    cx0, cy0, cx1, cy1 = 48, 44, W - 48, H - 44
    draw.rounded_rectangle([cx0, cy0, cx1, cy1], radius=24, fill=(10, 16, 36, 220), outline=(14, 165, 233, 85), width=2)
    
    # Header
    draw.line([(cx0, cy0 + 64), (cx1, cy0 + 64)], fill=(255, 255, 255, 20), width=1)
    draw.rounded_rectangle([cx0 + 24, cy0 + 16, cx0 + 56, cy0 + 48], radius=8, fill=(14, 165, 233, 220))
    draw.text((cx0 + 34, cy0 + 20), '🏨', font=get_font('sans', 16), fill=(255, 255, 255))
    draw.text((cx0 + 68, cy0 + 22), 'GUESTNEXA // ENTERPRISE HOSPITALITY PMS', font=get_font('sans_bold', 15), fill=(255, 255, 255))
    
    draw.rounded_rectangle([cx1 - 280, cy0 + 18, cx1 - 24, cy0 + 46], radius=14, fill=(14, 165, 233, 30), outline=(14, 165, 233, 140))
    draw.text((cx1 - 258, cy0 + 26), 'NEXT.JS 16 APP ROUTER // PRODUCTION', font=get_font('mono_bold', 10), fill=(56, 189, 248))
    
    # Left Nav Menu
    draw_rounded_glass_card(draw, (cx0 + 24, cy0 + 88, cx0 + 260, cy1 - 24), radius=16, bg=(0, 0, 0, 120))
    navs = ['📊 Occupancy Grid', '📅 Booking Engine', '💳 Revenue Analytics', '🛎️ Concierge Desk', '🧹 Housekeeping', '⚙️ Channel Manager']
    ny = cy0 + 104
    for i, n in enumerate(navs):
        active = (i == 0)
        if active:
            draw.rounded_rectangle([cx0 + 36, ny, cx0 + 248, ny + 36], radius=8, fill=(14, 165, 233, 50), outline=(14, 165, 233, 160))
        draw.text((cx0 + 48, ny + 10), n, font=get_font('sans_bold' if active else 'sans', 11), fill=(56, 189, 248) if active else (180, 190, 210))
        ny += 46
        
    # Center Stage: KPIs + Schedule Board
    kpis = [('OCCUPANCY RATE', '94.8%', '+12.4% vs last mo'), ('REVPAR MONTHLY', '$348.50', '+8.2% vs target'), ('DIRECT BOOKINGS', '68.2%', '0% OTA Fee')]
    kx = cx0 + 280
    for klab, kval, kgro in kpis:
        draw_rounded_glass_card(draw, (kx, cy0 + 88, kx + 195, cy0 + 175), radius=14, bg=(0, 0, 0, 120))
        draw.text((kx + 16, cy0 + 102), klab, font=get_font('mono', 9), fill=(150, 160, 180))
        draw.text((kx + 16, cy0 + 120), kval, font=get_font('sans_bold', 22), fill=(255, 255, 255))
        draw.text((kx + 16, cy0 + 152), kgro, font=get_font('mono_bold', 9), fill=(52, 211, 153))
        kx += 210
        
    # Schedule Board
    bx0, by0, bx1, by1 = cx0 + 280, cy0 + 195, cx1 - 24, cy1 - 24
    draw_rounded_glass_card(draw, (bx0, by0, bx1, by1), radius=16, bg=(0, 0, 0, 130))
    draw.text((bx0 + 20, by0 + 16), 'LIVE RESERVATION SCHEDULER // TODAY', font=get_font('mono_bold', 11), fill=(56, 189, 248))
    draw.text((bx1 - 200, by0 + 16), 'WEBSOCKET REAL-TIME SYNC', font=get_font('mono', 10), fill=(52, 211, 153))
    
    rooms = [
        ('SUITE 401', 'Alexander Wright — Checked In (3 Nights)', (14, 165, 233)),
        ('PENTHOUSE', 'Elena Rostova — VIP Sovereign Suite (5 Nights)', (168, 85, 247)),
        ('VILLA 08', 'Marcus Chen — Confirmed Mobile Check-in', (20, 184, 166)),
        ('DELUXE 204', 'Sophie Laurent — Key Issued & Verified', (14, 165, 233)),
        ('SUITE 302', 'David Kim — Corporate Group Arrival', (245, 158, 11))
    ]
    ry = by0 + 48
    for rname, rguest, rcol in rooms:
        draw.text((bx0 + 20, ry + 8), rname, font=get_font('mono_bold', 11), fill=(200, 210, 230))
        draw.rounded_rectangle([bx0 + 120, ry, bx1 - 24, ry + 32], radius=8, fill=(rcol[0]//5, rcol[1]//5, rcol[2]//5, 200), outline=rcol, width=1)
        draw.text((bx0 + 135, ry + 9), rguest, font=get_font('sans_bold', 11), fill=rcol)
        ry += 42
        
    return img

# ==============================================================================
# 6. MUBAR STORE — Luxury Horology Boutique
# ==============================================================================
def create_mubar_store():
    img = Image.new('RGB', (W, H), '#050608')
    img = draw_radial_glow(img, (int(W * 0.50), int(H * 0.50)), 460, (212, 175, 55), max_alpha=110)
    img = draw_radial_glow(img, (int(W * 0.82), int(H * 0.30)), 380, (0, 229, 255), max_alpha=70)
    
    draw = ImageDraw.Draw(img, 'RGBA')
    
    cx0, cy0, cx1, cy1 = 48, 44, W - 48, H - 44
    draw.rounded_rectangle([cx0, cy0, cx1, cy1], radius=24, fill=(10, 12, 18, 220), outline=(212, 175, 55, 90), width=2)
    
    # Header
    draw.line([(cx0, cy0 + 64), (cx1, cy0 + 64)], fill=(255, 255, 255, 20), width=1)
    draw.rounded_rectangle([cx0 + 24, cy0 + 16, cx0 + 56, cy0 + 48], radius=8, fill=(212, 175, 55, 220))
    draw.text((cx0 + 34, cy0 + 20), '💎', font=get_font('sans', 16), fill=(0, 0, 0))
    draw.text((cx0 + 68, cy0 + 22), 'MUBAR HOROLOGY BOUTIQUE // HAUTE HORLOGERIE', font=get_font('serif_bold', 15), fill=(245, 230, 180))
    
    draw.rounded_rectangle([cx1 - 260, cy0 + 18, cx1 - 24, cy0 + 46], radius=14, fill=(212, 175, 55, 30), outline=(212, 175, 55, 140))
    draw.text((cx1 - 238, cy0 + 26), 'SWISS HERITAGE EDITION', font=get_font('mono_bold', 10), fill=(245, 230, 180))
    
    # Left Specs Panel
    draw_rounded_glass_card(draw, (cx0 + 24, cy0 + 88, cx0 + 350, cy1 - 24), radius=16, bg=(0, 0, 0, 140))
    draw.text((cx0 + 44, cy0 + 108), '// CALIBER SPECIFICATIONS', font=get_font('mono_bold', 11), fill=(212, 175, 55))
    
    w_specs = [
        ('CALIBER', 'Automatic Tourbillon Cal. 904'),
        ('POWER RESERVE', '72 Hours Twin-Barrel'),
        ('CASE METAL', 'Grade 5 Titanium & 18K Rose Gold'),
        ('WATER RESISTANCE', '100M / 10 ATM Verified'),
        ('CRYSTAL', 'Double Anti-Reflective Sapphire')
    ]
    wy = cy0 + 150
    for wlab, wval in w_specs:
        draw.text((cx0 + 44, wy), wlab, font=get_font('mono', 10), fill=(160, 165, 180))
        draw.text((cx0 + 44, wy + 18), wval, font=get_font('sans_bold', 12), fill=(255, 255, 255))
        wy += 58
        
    # Center Stage: Luxury Watch Dial Drawing
    wcx, wcy = W // 2, H // 2 + 10
    draw.ellipse([wcx - 140, wcy - 140, wcx + 140, wcy + 140], fill=(212, 175, 55, 230), outline=(255, 255, 255), width=2)
    draw.ellipse([wcx - 126, wcy - 126, wcx + 126, wcy + 126], fill=(8, 10, 16), outline=(212, 175, 55), width=2)
    draw.ellipse([wcx - 118, wcy - 118, wcx + 118, wcy + 118], fill=(16, 20, 32))
    
    # Hour markers
    for a in range(0, 360, 30):
        rad = math.radians(a)
        x1 = wcx + int(96 * math.cos(rad))
        y1 = wcy + int(96 * math.sin(rad))
        x2 = wcx + int(112 * math.cos(rad))
        y2 = wcy + int(112 * math.sin(rad))
        draw.line([(x1, y1), (x2, y2)], fill=(245, 230, 180), width=3)
        
    # Tourbillon aperture at 6 o'clock
    draw.ellipse([wcx - 26, wcy + 36, wcx + 26, wcy + 88], fill=(10, 14, 24), outline=(212, 175, 55), width=2)
    draw.ellipse([wcx - 8, wcy + 54, wcx + 8, wcy + 70], fill=(212, 175, 55))
    
    # Chrono subdials
    draw.ellipse([wcx - 65, wcy - 40, wcx - 25, wcy], fill=(10, 14, 24), outline=(255, 255, 255, 80))
    draw.ellipse([wcx + 25, wcy - 40, wcx + 65, wcy], fill=(10, 14, 24), outline=(255, 255, 255, 80))
    
    # Hands (10:10 position)
    draw.line([(wcx, wcy), (wcx - 48, wcy - 48)], fill=(245, 230, 180), width=5)
    draw.line([(wcx, wcy), (wcx + 65, wcy - 30)], fill=(255, 255, 255), width=3)
    draw.line([(wcx, wcy + 18), (wcx, wcy - 85)], fill=(0, 229, 255), width=2)
    draw.ellipse([wcx - 6, wcy - 6, wcx + 6, wcy + 6], fill=(212, 175, 55))
    
    draw.text((wcx - 145, wcy + 155), 'SOVEREIGN CHRONOGRAPH', font=get_font('serif_bold', 20), fill=(245, 230, 180))
    draw.text((wcx - 90, wcy + 182), 'LIMITED EDITION // 50 PIECES', font=get_font('mono', 10), fill=(170, 175, 190))
    
    # Right Acquisition Panel
    rx0 = cx1 - 350
    draw_rounded_glass_card(draw, (rx0, cy0 + 88, cx1 - 24, cy1 - 24), radius=16, bg=(0, 0, 0, 140))
    draw.text((rx0 + 20, cy0 + 108), '// ACQUISITION SUITE', font=get_font('mono_bold', 11), fill=(212, 175, 55))
    
    draw.rounded_rectangle([rx0 + 20, cy0 + 144, cx1 - 44, cy0 + 224], radius=14, fill=(212, 175, 55, 25), outline=(212, 175, 55, 120))
    draw.text((rx0 + 40, cy0 + 158), 'ACQUISITION VALUE', font=get_font('mono', 10), fill=(180, 185, 200))
    draw.text((rx0 + 40, cy0 + 178), '$24,500 USD', font=get_font('serif_bold', 26), fill=(245, 230, 180))
    
    draw.text((rx0 + 20, cy0 + 250), 'Complimentary insured armored courier delivery.\n5-Year international manufacturer warranty.\nCertificate of authenticity recorded on-chain.', font=get_font('sans', 11), fill=(180, 185, 200), spacing=6)
    
    draw.rounded_rectangle([rx0 + 20, cy1 - 70, cx1 - 44, cy1 - 32], radius=10, fill=(212, 175, 55))
    draw.text((rx0 + 75, cy1 - 54), 'RESERVE TIMEPIECE ✨', font=get_font('mono_bold', 11), fill=(10, 12, 18))
    
    return img

# ==============================================================================
# MAIN EXECUTION
# ==============================================================================
if __name__ == '__main__':
    items = [
        ('wishora.jpg', 'wishora', create_wishora),
        ('eternal-garden.jpg', 'eternal-garden', create_eternal_garden),
        ('a-little-galaxy.jpg', 'a-little-galaxy', create_a_little_galaxy),
        ('aura-protocol.jpg', 'aura-protocol', create_aura_protocol),
        ('guestnexa.png', 'guestnexa', create_guestnexa),
        ('mubar-store.jpg', 'mubar-store', create_mubar_store),
    ]
    
    for filename, slug, fn in items:
        img = fn()
        # Save to src/assets/projects/
        src_path = os.path.join('src/assets/projects', filename)
        if filename.endswith('.png'):
            img.save(src_path, 'PNG', optimize=True)
        else:
            img.save(src_path, 'JPEG', quality=95)
            
        # Save to public/images/projects/<slug>/hero.jpg
        pub_dir = os.path.join('public/images/projects', slug)
        os.makedirs(pub_dir, exist_ok=True)
        pub_path = os.path.join(pub_dir, 'hero.jpg')
        img.save(pub_path, 'JPEG', quality=95)
        
        print(f'Successfully rendered & saved: {filename} ({W}x{H})')
