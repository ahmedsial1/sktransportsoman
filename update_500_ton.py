import os
import glob
import re

files = glob.glob("*.html") + glob.glob("blog/*.html") + ["js/main.js"]

for file in files:
    if not os.path.exists(file): continue
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace 100 with 500 when followed by Ton, ton, TON,  tons, Tons
    # e.g. "100 ton", "100 Ton", "100 TON", "100-ton", "100 tons"
    
    content = re.sub(r'\b100(\s*[-]?\s*)([tT][oO][nN][sS]?)\b', r'500\1\2', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Successfully updated 100 ton to 500 ton across all files.")
