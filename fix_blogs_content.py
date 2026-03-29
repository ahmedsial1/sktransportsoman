import os
import re

blogs_data = {
    "truck-mobile-crane-rental-muscat": {
        "h1": "Truck Mobile Crane Rental in Muscat",
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
    "50-ton-crane-for-rent-muscat-oman": {
        "h1": "50 Ton Crane for Rent in Muscat",
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
    "best-mobile-crane-services-oman": {
        "h1": "Best Mobile Crane Services in Oman",
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
    "pdo-approved-crane-rental-oman": {
        "h1": "PDO Approved Crane Rental in Oman",
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
    "crane-rental-and-sales-muscat": {
        "h1": "Crane Rental and Sales in Muscat",
        "p_content": """
            <h2>Your Dual Solution for Lifting Equipment</h2>
            <p>Whether you require machinery for a short-term contract or are looking to expand your own permanent fleet, we offer complete <strong>crane rental and sales in Muscat</strong>. By leveraging our direct sourcing channels from China, we supply brand-new and lightly-used premium SANY truck cranes. For short-term needs, our rental packages—ranging from 20 tons to 500 tons—are highly competitive.</p>
            <ul>
                <li>Available capacities: 20T, 25T, 50T, 60T, 80T, 100T and heavily up to 500T.</li>
                <li>Direct factory-to-consumer sales eliminating middlemen markup.</li>
                <li>Flexible rental contracts (Daily, Weekly, Monthly, Yearly).</li>
                <li>Full after-sales support and spare parts availability.</li>
            </ul>
        """
    }
}

seo_intro = "<p>SK Transports provides truck mobile crane rental in Muscat and across Oman for construction, industrial, and heavy lifting projects. Our reliable SANY cranes, experienced operators, and nationwide service help keep your project on schedule.</p>"

for slug, data in blogs_data.items():
    filename = f"{slug}.html"
    if not os.path.exists(filename): continue
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace H1 Hero title
    content = re.sub(
        r'<h1 class="hero-title"[^>]*>.*?</h1>',
        f'<h1 class="hero-title" style="font-size: clamp(2.5rem, 5vw, 4rem); text-transform: none;">{data["h1"]}</h1>',
        content,
        flags=re.DOTALL
    )

    # Extract EVERYTHING from <div data-show-lang="en"> down to <hr style="...">
    # and replace it with just our SEO text inside a full div.
    
    # Let's match from <!-- English Section --> out to <!-- Chinese Section -->... </div>
    # A robust regex:
    new_english_div = f'''
            <!-- Primary SEO Section -->
            <div data-show-lang="en">
                {seo_intro}
                {data["p_content"]}
                
                <h2>Contact Us Today</h2>
                <p>If you are looking for <strong>{data["h1"].lower()}</strong>, get in touch with our operations team for an immediate quote, please WhatsApp our support center (+968 9192 9375).</p>
            </div>
            
            <div data-show-lang="ar" style="display:none;"></div>
            <div data-show-lang="zh" style="display:none;"></div>
    '''
    
    content = re.sub(
        r'<!-- English Section -->.*?(?=<hr style="border: 0; border-top: 1px solid var)', 
        new_english_div + '\n\n            ', 
        content, 
        flags=re.DOTALL
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Successfully fixed the 5 SEO blogs!")
