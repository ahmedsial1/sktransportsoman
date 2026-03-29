import os
import re

template_file = "crane-rental-oman.html"
with open(template_file, "r", encoding="utf-8") as f:
    template = f.read()

blogs_data = [
    {
        "slug": "truck-mobile-crane-rental-muscat",
        "title": "Truck Mobile Crane Rental in Muscat | Reliable Lifting Services by SK Transports",
        "h1": "Truck Mobile Crane Rental in Muscat",
        "desc": "Looking for truck mobile crane rental in Muscat? SK Transports provides reliable lifting services with SANY cranes for construction and industrial projects.",
        "p_content": """
            <h2>Why Choose Truck Mobile Cranes in Muscat?</h2>
            <p>Muscat's rapid urban expansion and infrastructure development demand highly mobile, efficient lifting equipment. Truck mobile cranes are uniquely designed to navigate city streets quickly and deploy rapidly on-site, offering a significant advantage over stationary cranes. Choosing a <strong>truck mobile crane rental in Muscat</strong> allows your team to handle versatile lifting tasks across different locations without heavy logistical delays.</p>
            <ul>
                <li>High road mobility across Oman's highways.</li>
                <li>Fast setup and dismantling times on job sites.</li>
                <li>Ideal for multiple short-duration tasks in a single day.</li>
                <li>Cost-effective compared to specialized crawler cranes.</li>
            </ul>
        """
    },
    {
        "slug": "50-ton-crane-for-rent-muscat-oman",
        "title": "50 Ton Crane for Rent in Muscat | PDO Approved Crane Rental in Oman",
        "h1": "50 Ton Crane for Rent in Muscat",
        "desc": "Get the best 50 ton crane for rent in Muscat. SK Transports offers PDO approved crane rental in Oman with experienced operators and premium SANY machinery.",
        "p_content": """
            <h2>The Versatility of the 50 Ton Crane</h2>
            <p>The 50 ton crane is the backbone of most medium-to-heavy construction and logistics projects. When searching for a <strong>50 ton crane for rent in Muscat</strong>, reliability and safety compliance are priority number one. Our fleet features modern, meticulously maintained 50-ton capacity cranes capable of precise maneuvers in confined spaces.</p>
            <ul>
                <li>Perfect continuous lifting capability for mid-range structural steel framing.</li>
                <li>Fully PDO approved for oil, gas, and energy sector operations.</li>
                <li>Highly maneuverable on uneven terrain and industrial yards.</li>
                <li>Equipped with advanced safety monitoring systems.</li>
            </ul>
        """
    },
    {
        "slug": "best-mobile-crane-services-oman",
        "title": "Best Mobile Crane Services in Oman | SK Transports Heavy Lifting Solutions",
        "h1": "Best Mobile Crane Services in Oman",
        "desc": "Discover the best mobile crane services in Oman. SK Transports delivers heavy lifting solutions, reliable SANY machinery, and 24/7 support nationwide.",
        "p_content": """
            <h2>Comprehensive Heavy Lifting Solutions</h2>
            <p>Executing large-scale projects requires partnering with the <strong>best mobile crane services in Oman</strong>. We deliver end-to-end heavy lifting solutions, from project site assessment to final execution. Our specialized operators and modern SANY crane fleet ensure your heavy cargo is hoisted safely, irrespective of the environmental challenges.</p>
            <ul>
                <li>Nationwide coverage including Muscat, Sohar, Duqm, and Salalah.</li>
                <li>Certified riggers and thoroughly inspected lifting gear.</li>
                <li>Custom lifting plans tailored to complex architectural sites.</li>
                <li>24/7 technical and mechanical support on standby.</li>
            </ul>
        """
    },
    {
        "slug": "pdo-approved-crane-rental-oman",
        "title": "PDO Approved Crane Rental in Oman | SANY Mobile Cranes by SK Transports",
        "h1": "PDO Approved Crane Rental in Oman",
        "desc": "SK Transports provides PDO approved crane rental in Oman. Rent top-tier SANY mobile cranes with certified operators for oil and gas sector projects.",
        "p_content": """
            <h2>Strict Compliance for the Energy Sector</h2>
            <p>Operating within Oman's oil and gas sectors mandates strict adherence to safety protocols. A <strong>PDO approved crane rental in Oman</strong> guarantees that both the machinery and the operators have passed rigorous inspections and training standards set by Petroleum Development Oman. Your high-stake projects demand nothing less than zero downtime and zero accidents.</p>
            <ul>
                <li>100% compliant with Ministry of Energy and Minerals safety guidelines.</li>
                <li>Late-model SANY mobile cranes with documented maintenance histories.</li>
                <li>Operators continuously trained in hazardous environment lifting.</li>
                <li>Ready to deploy to remote interior desert locations.</li>
            </ul>
        """
    },
    {
        "slug": "crane-rental-and-sales-muscat",
        "title": "Crane Rental and Sales in Muscat | 20 to 100 Ton Cranes Available",
        "h1": "Crane Rental and Sales in Muscat",
        "desc": "Need crane rental and sales in Muscat? SK Transports offers 20 to 100 ton cranes for rent or direct purchase from China. Contact us today.",
        "p_content": """
            <h2>Your Dual Solution for Lifting Equipment</h2>
            <p>Whether you require machinery for a short-term contract or are looking to expand your own permanent fleet, we offer complete <strong>crane rental and sales in Muscat</strong>. By leveraging our direct sourcing channels from China, we supply brand-new and lightly-used premium SANY truck cranes. For short-term needs, our rental packages—ranging from 20 tons to 100 tons—are highly competitive.</p>
            <ul>
                <li>Available capacities: 20T, 25T, 50T, 60T, 80T, and 100T.</li>
                <li>Direct factory-to-consumer sales eliminating middlemen markup.</li>
                <li>Flexible rental contracts (Daily, Weekly, Monthly, Yearly).</li>
                <li>Full after-sales support and spare parts availability.</li>
            </ul>
        """
    }
]

seo_intro = "<p>SK Transports provides truck mobile crane rental in Muscat and across Oman for construction, industrial, and heavy lifting projects. Our reliable SANY cranes, experienced operators, and nationwide service help keep your project on schedule.</p>"

# Extract the body wrapper from template to replace article content
import re

for blog in blogs_data:
    new_html = template

    # Replace Title
    new_html = re.sub(r'<title>.*?</title>', f'<title>{blog["title"]}</title>', new_html, flags=re.DOTALL)
    
    # Replace Meta Description
    new_html = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{blog["desc"]}">', new_html)
    
    # Replace OG Title
    new_html = re.sub(r'<meta property="og:title" content=".*?">', f'<meta property="og:title" content="{blog["title"]}">', new_html)
    new_html = re.sub(r'<meta property="og:description" content=".*?">', f'<meta property="og:description" content="{blog["desc"]}">', new_html)
    new_html = re.sub(r'<meta property="og:url" content=".*?">', f'<meta property="og:url" content="https://sktransportsoman.com/{blog["slug"]}">', new_html)
    
    # Replace Canonical
    new_html = re.sub(r'<link rel="canonical" href=".*?">', f'<link rel="canonical" href="https://sktransportsoman.com/{blog["slug"]}">', new_html)
    
    # Extract article and replace
    article_match = re.search(r'(<article class="blog-post">).*?(</article>)', new_html, flags=re.DOTALL)
    
    if article_match:
        # Create new article content
        new_article = f'''<article class="blog-post">
            <h1 class="blog-title">{blog["h1"]}</h1>
            <div class="blog-meta">
                <span>By SK Transports</span> | <span>Oman Lifting</span>
            </div>
            
            <div class="blog-body">
                {seo_intro}
                {blog["p_content"]}
                
                <h2>Contact Us Today</h2>
                <p>If you are looking for <strong>{blog["h1"].lower()}</strong>, get in touch with our operations team for an immediate quote, please WhatsApp our support center (+968 9192 9375).</p>
            </div>
        </article>'''
        
        new_html = new_html[:article_match.start()] + new_article + new_html[article_match.end():]
    
    filename = f"{blog['slug']}.html"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(new_html)
        
    print(f"Created {filename}")
