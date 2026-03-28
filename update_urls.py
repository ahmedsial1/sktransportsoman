import os
import re

html_files = [
    'index.html', 'about.html', 'services.html', 'fleet.html', 'contact-us.html',
    'crane-rental-oman.html', '50-ton-sany-crane-rent-oman.html', 'mobile-crane-rental-muscat.html',
    'sany-cranes-sales-oman.html', 'pdo-crane-services-muscat.html',
    'blog/index.html'
]

replacements = {
    'href="index.html"': 'href="/"',
    'href="../index.html"': 'href="/"',
    'href="about.html"': 'href="/about"',
    'href="../about.html"': 'href="/about"',
    'href="services.html"': 'href="/services"',
    'href="../services.html"': 'href="/services"',
    'href="fleet.html"': 'href="/fleet"',
    'href="../fleet.html"': 'href="/fleet"',
    'href="contact-us.html"': 'href="/contact-us"',
    'href="../contact-us.html"': 'href="/contact-us"',
    'href="blog/index.html"': 'href="/blog"',
    'href="../blog/index.html"': 'href="/blog"',
    'href="crane-rental-oman.html"': 'href="/crane-rental-oman"',
    'href="../crane-rental-oman.html"': 'href="/crane-rental-oman"',
    'href="50-ton-sany-crane-rent-oman.html"': 'href="/50-ton-sany-crane-rent-oman"',
    'href="../50-ton-sany-crane-rent-oman.html"': 'href="/50-ton-sany-crane-rent-oman"',
    'href="mobile-crane-rental-muscat.html"': 'href="/mobile-crane-rental-muscat"',
    'href="../mobile-crane-rental-muscat.html"': 'href="/mobile-crane-rental-muscat"',
    'href="sany-cranes-sales-oman.html"': 'href="/sany-cranes-sales-oman"',
    'href="../sany-cranes-sales-oman.html"': 'href="/sany-cranes-sales-oman"',
    'href="pdo-crane-services-muscat.html"': 'href="/pdo-crane-services-muscat"',
    'href="../pdo-crane-services-muscat.html"': 'href="/pdo-crane-services-muscat"'
}

def add_canonical_tag(content, filename):
    # Determine canonical path
    if filename == 'index.html':
        canonical_url = 'https://sktransportsoman.com/'
    elif filename == 'blog/index.html':
        canonical_url = 'https://sktransportsoman.com/blog'
    else:
        name = os.path.basename(filename).replace('.html', '')
        canonical_url = f'https://sktransportsoman.com/{name}'
        
    canonical_tag = f'<link rel="canonical" href="{canonical_url}" />'
    
    # If already has canonical, replace it
    if '<link rel="canonical"' in content:
        content = re.sub(r'<link rel="canonical" href="[^"]+" />', canonical_tag, content)
    else:
        # Insert before </head>
        content = content.replace('</head>', f'    {canonical_tag}\n</head>')
        
    return content

# Also standardizing asset paths to start from root so they work seamlessly with/without trailing slashes
def normalize_assets(content):
    content = content.replace('href="../styles/', 'href="/styles/')
    content = content.replace('href="styles/', 'href="/styles/')
    content = content.replace('src="../assets/', 'src="/assets/')
    content = content.replace('src="assets/', 'src="/assets/')
    content = content.replace('src="../js/', 'src="/js/')
    content = content.replace('src="js/', 'src="/js/')
    
    # But wait, href="https://..." should not be touched. The above replaces are safe.
    
    # Also fix some blog specific links if needed
    content = content.replace('href="index.html"', 'href="/blog"') # wait, we already did replacements. This is too dangerous, skip asset normalizing this way, only for known patterns
    return content

for file in html_files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # apply replacements
        for key, val in replacements.items():
            content = content.replace(key, val)
            
        content = add_canonical_tag(content, file)
        
        # safely normalize assets explicitly
        content = content.replace('href="../styles/main.css', 'href="/styles/main.css')
        content = content.replace('href="styles/main.css', 'href="/styles/main.css')
        content = content.replace('src="../assets/logo.png', 'src="/assets/logo.png')
        content = content.replace('src="assets/logo.png', 'src="/assets/logo.png')
        content = content.replace('src="../assets/hero-bg.jpg', 'src="/assets/hero-bg.jpg')
        content = content.replace('src="assets/hero-bg.jpg', 'src="/assets/hero-bg.jpg')
        content = content.replace('src="../js/main.js', 'src="/js/main.js')
        content = content.replace('src="js/main.js', 'src="/js/main.js')
            
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
    else:
        print(f"File not found: {file}")
