import os
import glob

html_files = glob.glob("*.html") + glob.glob("blog/*.html")

favicon_tag = '    <link rel="icon" type="image/png" href="/assets/logo.png">\n'

for file in html_files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if '<link rel="icon"' not in content:
            # Insert before </head>
            content = content.replace('</head>', f'{favicon_tag}</head>')
            
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Added favicon to {file}")
        else:
            print(f"Favicon already exists in {file}")
