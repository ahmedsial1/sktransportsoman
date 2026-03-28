import os, re

base_dir = r'c:\Users\User\Desktop\Sk Transports'

html_files = []
for root, dirs, files in os.walk(base_dir):
    if 'sk-transports-theme' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    rel_path = os.path.relpath(file_path, base_dir)
    in_subfolder = os.path.dirname(rel_path) != ''
    
    # Check if blog is already there to avoid duplicates
    if 'data-i18n="nav_blog"' in content:
        print(f'Blog link already in {file_path}')
        continue

    blog_link = 'index.html' if in_subfolder else 'blog/index.html'
    
    # Updated pattern to handle varying whitespace or attributes more flexibly
    pattern = r'(<li[^>]*>\s*<a[^>]*href=["\'][.a-zA-Z0-9\-/]*contact-us\.html["\'][^>]*data-i18n=["\']nav_contact["\'][^>]*>Contact Us</a>\s*</li>)'
    
    def replacer(match):
        contact_li = match.group(1)
        return f'{contact_li}\n                    <li><a href="{blog_link}" data-i18n="nav_blog">Blog</a></li>'

    new_content, count = re.subn(pattern, replacer, content)
    
    if count > 0:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {file_path} ({count} replacements)')
    else:
        print(f'No match found in {file_path}')
