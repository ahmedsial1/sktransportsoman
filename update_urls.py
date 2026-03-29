import os
import re

blogs = [
    {
        "slug": "truck-mobile-crane-rental-muscat",
        "title": "Truck Mobile Crane Rental in Muscat | SK Transports",
        "desc": "Looking for truck mobile crane rental in Muscat? SK Transports provides reliable lifting services with SANY cranes for construction and industrial projects.",
        "icon": "fas fa-truck-loading"
    },
    {
        "slug": "50-ton-crane-for-rent-muscat-oman",
        "title": "50 Ton Crane for Rent in Muscat | PDO Approved",
        "desc": "Get the best 50 ton crane for rent in Muscat. SK Transports offers PDO approved crane rental in Oman with experienced operators and premium SANY machinery.",
        "icon": "fas fa-hard-hat"
    },
    {
        "slug": "best-mobile-crane-services-oman",
        "title": "Best Mobile Crane Services in Oman",
        "desc": "Discover the best mobile crane services in Oman. SK Transports delivers heavy lifting solutions, reliable SANY machinery, and 24/7 support nationwide.",
        "icon": "fas fa-tools"
    },
    {
        "slug": "pdo-approved-crane-rental-oman",
        "title": "PDO Approved Crane Rental in Oman",
        "desc": "SK Transports provides PDO approved crane rental in Oman. Rent top-tier SANY mobile cranes with certified operators for oil and gas sector projects.",
        "icon": "fas fa-check-shield"
    },
    {
        "slug": "crane-rental-and-sales-muscat",
        "title": "Crane Rental and Sales in Muscat",
        "desc": "Need crane rental and sales in Muscat? SK Transports offers 20 to 100 ton cranes for rent or direct purchase from China. Contact us today.",
        "icon": "fas fa-handshake"
    }
]

# 1. Update blog/index.html
blog_index = "blog/index.html"
if os.path.exists(blog_index):
    with open(blog_index, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to insert the 5 cards inside <div class="blog-grid">
    # Let's find the closing tag of blog-grid. It's roughly line 225.
    # Actually, simpler way: find the last </article> inside blog-grid, and append after it.
    
    html_cards = ""
    for b in blogs:
        html_cards += f'''
                <!-- New Post -->
                <article class="blog-card">
                    <div class="blog-img-stub"><i class="{b['icon']}"></i></div>
                    <div class="blog-content">
                        <span class="blog-date">March 2026 • Oman Lifting</span>
                        <a href="/{b['slug']}" class="blog-title">{b['title']}</a>
                        <p class="blog-excerpt">{b['desc']}</p>
                        <a href="/{b['slug']}" class="read-more"><span>Read Full Article</span> <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
'''
    content = content.replace('<!-- Map Section -->', f'<!-- End of Old Grid Items -->{html_cards}\n    <!-- Map Section -->')
    # wait, Map Section is outside blog-grid. 
    # Let's look for <section class="section" style="padding-top: 0;"> (the Map Section).
    # The grid closing div happens before the Map section.
    # Let's just do a regex replace to insert at the end of the blog-grid:
    content = re.sub(r'(</article>\s*)(</div>\s*</section>\s*<!-- Map Section -->)', r'\1' + html_cards + r'\2', content)

    with open(blog_index, 'w', encoding='utf-8') as f:
        f.write(content)
        
# 2. Update sitemap.xml
sitemap = "sitemap.xml"
if os.path.exists(sitemap):
    with open(sitemap, 'r', encoding='utf-8') as f:
        sm_content = f.read()
        
    xml_urls = ""
    for b in blogs:
        xml_urls += f'''  <url>
    <loc>https://sktransportsoman.com/{b['slug']}</loc>
    <lastmod>2026-03-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
'''
    sm_content = sm_content.replace('</urlset>', f'{xml_urls}</urlset>')
    
    with open(sitemap, 'w', encoding='utf-8') as f:
        f.write(sm_content)

print("Blog update complete.")
