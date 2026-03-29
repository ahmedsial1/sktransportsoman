import glob
import os

files = glob.glob("*.html") + glob.glob("blog/*.html")
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix the literal backslash bug 
    content = content.replace(r'\+968', '+968')
    content = content.replace(r'\\+968', '+968')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
