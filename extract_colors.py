#!/usr/bin/env python3
import json
from PIL import Image
from collections import Counter

def extract_colors(image_path, num_colors=20):
    """Extract dominant colors from an image and convert to hex"""
    img = Image.open(image_path)
    
    # Convert to RGB if needed
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Resize for faster processing
    img.thumbnail((200, 200))
    
    # Get all pixels
    pixels = list(img.getdata())
    
    # Count color frequency
    color_counts = Counter(pixels)
    
    # Get top colors
    top_colors = color_counts.most_common(num_colors)
    
    # Convert to hex and filter out white/near-white
    colors = []
    for rgb, count in top_colors:
        # Skip very light colors (likely background)
        if sum(rgb) < 750:  # Filters out near-white
            hex_color = '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])
            colors.append({
                'hex': hex_color,
                'rgb': rgb,
                'count': count,
                'percentage': round((count / len(pixels)) * 100, 2)
            })
    
    return colors

# Extract colors from palette
print("Extracting colors from Color Palette.png...")
palette_colors = extract_colors('img/Color Palette.png', 20)

output = {
    'color_palette': palette_colors
}

# Print as formatted JSON
print(json.dumps(output, indent=2))

# Also save to file
with open('color_analysis.json', 'w') as f:
    json.dump(output, f, indent=2)

print("\n✓ Color analysis saved to color_analysis.json")
