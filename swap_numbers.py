import os
import glob
import re

html_files = glob.glob("*.html") + glob.glob("blog/*.html")

for file in html_files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update tel: links for MD
        content = re.sub(
            r'href="tel:\+96891929375"([^>]*data-i18n="phone_md"[^>]*)>\+968 9192\s*9375',
            r'href="tel:+96891929355"\1 dir="ltr">+968 9192 9355',
            content,
            flags=re.MULTILINE
        )
        
        # In case dir="ltr" was appended to the a tag, ensure no duplicate dir
        content = content.replace('dir="ltr" dir="ltr"', 'dir="ltr"')

        # Update tel: links for Ops
        content = re.sub(
            r'href="tel:\+96891929355"([^>]*data-i18n="phone_ops"[^>]*)>\+968 9192\s*9355',
            r'href="tel:+96891929375"\1 dir="ltr">+968 9192 9375',
            content,
            flags=re.MULTILINE
        )
        content = content.replace('dir="ltr" dir="ltr"', 'dir="ltr"')

        # Update footers and simple spans ensuring dir="ltr" is present
        # Pattern for phone_md
        content = re.sub(
            r'<span data-i18n="phone_md"(.*?)\+968 9192 9375\s*\(MD\)</span>',
            r'<span data-i18n="phone_md" dir="ltr">\+968 9192 9355 (MD)</span>',
            content
        )
        
        # Pattern for phone_ops
        content = re.sub(
            r'<span data-i18n="phone_ops"(.*?)\+968 9192 9355\s*\(Ops\)</span>',
            r'<span data-i18n="phone_ops" dir="ltr">\+968 9192 9375 (Ops)</span>',
            content
        )
        
        # Ensure phone_landline and phone_ops_2 have dir="ltr" if they are wrapped in a span with data-i18n
        content = re.sub(
            r'<span data-i18n="phone_landline"(.*?)>',
            lambda m: '<span data-i18n="phone_landline" dir="ltr">' if 'dir="ltr"' not in m.group(0) else m.group(0),
            content
        )
        content = re.sub(
            r'<span data-i18n="phone_ops_2"(.*?)>',
            lambda m: '<span data-i18n="phone_ops_2" dir="ltr">' if 'dir="ltr"' not in m.group(0) else m.group(0),
            content
        )

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")

# Update main.js
js_file = 'js/main.js'
if os.path.exists(js_file):
    with open(js_file, 'r', encoding='utf-8') as f:
        js_content = f.read()

    # MD string updates (changing 9375 -> 9355)
    js_content = js_content.replace('+968 9192 9375 (MD)', '+968 9192 9355 (MD)')
    js_content = js_content.replace('\\u200E+968 9192 9375 (MD)', '\\u200E+968 9192 9355 (MD)')
    
    # Ops string updates (changing 9355 -> 9375)
    js_content = js_content.replace('+968 9192 9355 (Ops)', '+968 9192 9375 (Ops)')
    js_content = js_content.replace('\\u200E+968 9192 9355 (Ops)', '\\u200E+968 9192 9375 (Ops)')

    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Updated main.js")

