import os
import glob
import re

html_files = glob.glob("*.html") + glob.glob("blog/*.html")

for file in html_files:
    if not os.path.exists(file): continue
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace /assets/logo.png inside rel="icon" tag with /assets/favicon.png
    content = re.sub(
        r'(<link[^>]*rel=["\']icon["\'][^>]*href=["\'])/assets/logo\.png(["\'])', 
        r'\g<1>/assets/favicon.png\g<2>', 
        content
    )

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Successfully updated favicon references to /assets/favicon.png across all HTML files.")
