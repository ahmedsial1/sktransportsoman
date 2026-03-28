// SK TRANSPORTS - Multi-Language Engine (English, Arabic, Chinese)

// 1. WhatsApp Lead Script
function contactSK() {
    const phone = "96891929375";
    const message = "Hello SK Transports, I am interested in your services for [Rental/Sale]. Please provide details.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// 2. Navigation & UX Logic
const nav = document.getElementById('main-nav');
const hoist = document.getElementById('hoist-cable');

window.addEventListener('scroll', () => {
    if (nav) {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }

    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (hoist) {
        hoist.style.height = (20 + scrollPercent * 0.8) + '%';
        hoist.style.opacity = 0.2 + (scrollPercent / 200);
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.mobile-burger');
    if (navLinks) navLinks.classList.toggle('active');
    if (burger) burger.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const burger = document.querySelector('.mobile-burger');
        if (navLinks) navLinks.classList.remove('active');
        if (burger) burger.classList.remove('active');
    });
});


// 3. Translation Data Hub
const translations = {
    en: {
        nav_home: "Home",
        ticker_text: "PDO Approved SANY Fleet | 18+ Years of Expertise | Direct Sourcing from China | 24/7 Technical Support in Muscat, Sohar, Duqm & Salalah",
        nav_fleet: "Fleet",
        nav_services: "Services",
        nav_about: "About Us",
        nav_contact: "Contact Us",
        hero_tagline: "Oman's Ultimate Heavy Lifting Force • PDO Approved • 18+ Years Excellence",
        hero_title: "THE ULTIMATE FORCE IN <span>OMAN'S INFRASTRUCTURE.</span>",
        hero_desc: "Driving the Sultanate of Oman progress with high-performance SANY Mobile Truck Cranes. From large-scale industrial lifts to complex urban developments, we provide the power, precision, and reliability your projects demand.",
        btn_quote: "View SANY Fleet",
        btn_fleet: "Contact Our Experts",
        stat_350_title: "350T",
        stat_350_desc: "Lifting Capacity",
        stat_350_sub: "One of the most powerful and versatile crane fleets in the Omani market.",
        stat_pdo_title: "PDO",
        stat_pdo_desc: "Approved Standards",
        stat_pdo_sub: "Machinery and operators fully compliant with Petroleum Development Oman (PDO) safety protocols.",
        stat_branches_title: "18+",
        stat_branches_desc: "Years of Expertise",
        stat_branches_sub: "A trusted legacy of supporting Oman’s major infrastructure since our inception.",
        section_logistics_tag: "WORLD-CLASS SOLUTIONS",
        section_logistics_title: "Beyond Rental,<br><span>Strength Inherited.</span>",
        section_logistics_desc: "Based in Muscat, Yahya bin Khlfan bin Mohammed Al Sayabi Modern Trading L.L.C. is a premier leader in heavy machinery solutions. We specialize in the sale and rental of SANY Mobile Truck Cranes, ensuring every project from Sohar to Salalah is backed by world-class engineering.",
        ceo_specialization: "<strong style=\"color: var(--primary);\">CEO Specialization:</strong> We offer a unique bridge for direct procurement from China. Our CEO personally facilitates the sourcing and import of new or used SANY machinery, managing all logistics and Omani customs with total transparency.",
        hub_china: "China Hub",
        hub_china_desc: "Direct Sourcing from China (Used & New Machines)",
        hub_oman: "Oman HQ",
        hub_oman_desc: "Execution excellence in Mabella Industrial Area",
        direct_source_tag: "DIRECT FROM SOURCE",
        factory_direct_desc: "Factory-Direct Heavy Equipment Procurement.",
        badge_pdo: "PDO",
        badge_certified: "CERTIFIED",
        why_tag: "The SK Transports Advantage",
        why_title: "Strategic Lifting Power.",
        why_desc: "SK Transports, a division of Yahya Bin Khalfan Bin Mohammed Al Sayabi Modern Trading L.L.C., bridge the gap between world-class manufacturing and Oman's infrastructure needs. We provide unparalleled reliability and technical expertise.",
        check_1_head: "Safety First:",
        check_1: "PDO-approved fleet ensuring the highest operational standards in Oman.",
        check_2_head: "Direct Imports:",
        check_2: "Expert facilitation of direct-from-China SANY machinery sales.",
        check_3_head: "Technical Support:",
        check_3: "24/7 assistance and maintenance to ensure zero project downtime.",
        check_4: "Global Reach: Connecting China's manufacturing power with Oman's growth.",
        testimonials_tag: "Client Reviews",
        testimonials_title: "Trusted by <span>Industry Leaders.</span>",

        rev1_content: "\"SK Transports has been instrumental in our Sohar Port expansion. Their SANY 350T cranes handled the complex structural lifts with absolute precision. Truly a partner for Oman's Vision 2040.\"",
        rev1_author: "Eng. Salim Al-Harthy",
        rev1_role: "Chief Logistics Officer, Port of Sohar",
        rev2_content: "\"Working with a PDO-approved contractor is non-negotiable for us. SK's commitment to safety and their rapid response in the Duqm Industrial Area has made them our go-to lifting provider.\"",
        rev2_author: "Faisal Bin Hamad",
        rev2_role: "Project Manager, OQ Refineries",
        rev3_content: "\"The reliability of their operators and the scale of their fleet in Salalah and Muscat have helped us hit our infrastructure deadlines months ahead of schedule. Excellent service.\"",
        rev3_author: "Majid Bin Yousef",
        rev3_role: "Director, Muscat Metro Project",

        leadership_tag: "Visionary Leadership",
        leadership_title: "Strategic <span>Excellence.</span>",
        ceo_name: "Muhammad Amjad",
        ceo_role: "Chief Executive Officer",
        ceo_desc: "Architect of the strategic vision driving our growth in the Omani heavy machinery sector.",
        chairman_name: "Ch Munawar Hussain Sial",
        chairman_role: "Chairman",
        chairman_desc: "Guardian of our ethical standards and legacy of trust across the Sultanate.",
        md_name: "Ch Arshad Ali Sial",
        md_role: "Managing Director",
        md_desc: "Specialist in global procurement, connecting China’s manufacturing power with Oman's infrastructure needs.",
        md2_name: "Tasawar Hussain Sial",
        md2_role: "Managing Director",
        md2_desc: "Leading operational excellence and fleet reliability for every client project.",

        about_legacy_tag: "Our Legacy • Our Strength",
        about_future_title: "Elevating <span>Oman's Future.</span>",
        about_hero_desc: "Discover the foundation of our engineering excellence and our unmatched commitment to building Oman's industrial landscape with precision and safety.",
        about_conglom_title: "A Conglomerate of <br><span>Industrial Excellence.</span>",
        about_conglom_desc: "Founded on the principles of reliability and engineering precision, SK Transports has grown from a local rental service into a dominant industrial powerhouse in the Sultanate of Oman.<br><br>With over 18 branches strategically located across the country, we specialize in providing PDO-approved heavy lifting solutions, factory-direct equipment procurement from China, and specialized automotive spare parts.",
        mission_title: "Mission",
        mission_desc: "To provide the safest, most efficient lifting solutions in Oman.",
        vision_title: "Vision",
        vision_desc: "To be the ultimate industrial backbone of the Middle East.",
        exp_years: "15+",
        exp_label: "Years Exp.",
        about_parent_title: "Parent Companies",
        about_parent_desc: "SK Transports operates as a proud sub-branch and specialized lifting division under the umbrella of our esteemed parent entities.",
        comp1_title: "Yahya Bin Khalfan Bin Mohammed Al Sayabi Modern Trading LLC",
        comp1_desc: "Specializing in Hyundai and Kia spare parts logistics, forming the backbone of heavy trading across Oman's industrial centers.",
        comp2_title: "Sial Kingdom Trading L.L.C",
        comp2_desc: "Dealing in Hyundai and Kia spare parts alongside direct sourcing from China factory outlets for heavy equipment procurement.",
        comp3_title: "Sial Auto Parts Company Limited (South Korea)",
        comp3_desc: "Our South Korean hub specializing in premium automotive components and direct supply chain management for Hyundai and Kia parts.",
        comp4_title: "Yiwu Sial International Trading Company Limited (China)",
        comp4_desc: "The primary gateway for global industrial equipment sourcing, facilitating direct factory exports and heavy machinery logistics from China.",

        fleet_tagline: "Elite Sany Infrastructure",
        fleet_title: "The <span>Sany Powerhouse.</span>",
        fleet_preview_tag: "Our Prime Asset",
        fleet_preview_title: "The Elite <span>Heavy Fleet.</span>",
        fleet_desc: "From 50-ton mobility to 350-ton heavy lifting engineering, our Sany fleet is PDO-approved and ready for Oman's most critical projects.",
        btn_view_full_fleet: "View Full Fleet Portfolio →",
        book_now: "Book Now",
        card_350_tag: "Heavy Lift Specialist",
        card_350_specs: "All-Terrain Beast. 7-Section Boom. 112m Elevation.",
        ton_350: "350 TON",
        card_160_tag: "Industrial Workhorse",
        card_160_specs: "Truck-Mounted Excellence. Rapid Deployment.",
        ton_160: "160 TON",
        card_130_tag: "Construction Core",
        card_130_specs: "Ideal for bridge and refinery maintenance.",
        ton_130: "130 TON",
        card_100_tag: "Urban Projects",
        card_100_specs: "Compact yet powerful. Multi-purpose lift.",
        ton_100: "100 TON",
        card_80_tag: "Heavy Logistics",
        card_80_specs: "Enhanced stability for medium-duty construction.",
        ton_80: "80 TON",
        card_50_tag: "Support Fleet",
        card_50_specs: "Small-scale precision and logistics support.",
        ton_50: "50 TON",
        card_200_tag: "All-Terrain Power",
        card_200_specs: "Superior versatility for major infrastructure.",
        ton_200: "200 TON",
        card_220_tag: "Engineering Master",
        card_220_specs: "Precision lifting for refinery and power plants.",
        ton_220: "220 TON",

        serv_hero_tagline: "Technical Lifting Excellence",
        serv_hero_title: "Powering Oman's <span>Heavy Industries.</span>",
        serv_hero_desc: "From complex Oil & Gas operations to direct global equipment sourcing, SK Transports provides the technical backbone for the Sultanate's most ambitious projects.",

        serv_core_tag: "OUR EXPERTISE",
        serv_core_title: "Core <span>Service Sectors.</span>",
        serv_lifting_title: "Heavy Lifting Solutions",
        serv_lifting_desc: "Commanding the Sultanate's most advanced SANY fleet for precision lifts up to 350 tons. Fully PDO-certified operators and equipment for high-risk environments.",
        serv_procurement_title: "Industrial Procurement",
        serv_procurement_desc: "Direct-from-factory sourcing for all used and new machines from China. We bridge the gap between global manufacturing and Omani infrastructure needs.",
        serv_support_title: "Technical Support",
        serv_support_desc: "24/7 rapid deployment via our 18+ branches. Our taskforce ensures minimal downtime and maximum operational efficiency on-site.",

        process_tag: "OUR WORKFLOW",
        process_title: "Engineered for <span>Efficiency.</span>",
        step1_title: "Consultation",
        step1_desc: "Deep analysis of site requirements and load charts.",
        step2_title: "Site Survey",
        step2_desc: "On-site risk assessment by our safety supervisors.",
        step3_title: "Lift Planning",
        step3_desc: "Rigorous engineering calculations and equipment selection.",
        step4_title: "Execution",
        step4_desc: "Precision operation under global safety protocols.",

        china_special_title: "The <span>China-Oman</span> Bridge",
        china_special_desc: "Our unique advantage lies in our direct factory-to-site sourcing from China. We don't just rent machines; we facilitate the entire lifecycle of industrial equipment procurement, including new and used machinery.",

        safety_title: "Uncompromising <span>Safety Standards.</span>",
        safety_desc: "Safety is our core foundation. Every machine in our fleet undergoes rigorous PDO inspections and international O&G certification audits.",

        serv1_title: "Oil & Gas Sector",
        serv1_desc: "PDO-Approved fleet specialized in high-risk environments. We provide critical lifting services for refinery operations, pipeline installations, and upstream drilling projects across the Sultanate.",
        serv2_title: "Infrastructure & Construction",
        serv2_desc: "From bridge construction to port expansions, our Sany 350-ton cranes handle the most demanding structural components with precision and safety.",
        serv3_title: "Spare Parts (Hyundai & Kia)",
        serv3_desc: "We manage a professional, modern warehouse with genuine spare parts for heavy machinery and transport vehicles, including Hyundai and Kia specialized components.",
        serv3_link: "Request Parts Catalog →",
        ops_active_title: "Operations in Action",
        ops_active_desc: "Our machines are currently active in some of the most critical development projects in Oman.",
        quote_title: "\"The Sany 350T from SK Transports handled our refinery lift with zero issues. Professional and safety-conscious team.\"",
        quote_author: "- Infrastructure Lead, Muscat Port Expansion",

        contact_tagline: "Project Consultation",
        contact_title: "Contact <span>Us.</span>",
        contact_desc: "Ready to elevate your infrastructure? Our engineering team is standing by to provide PDO-approved lifting solutions anywhere in Oman and manufacturing support from China.",
        form_full_name: "Your Full Name",
        form_company: "Company Name",
        form_email: "Email Address",
        form_phone: "Phone Number",
        form_tonnage: "Required Tonnage & Equipment",
        form_ton_50_100: "50 - 100 TON (Support)",
        form_ton_130_200: "130 - 200 TON (Industrial)",
        form_ton_220_350: "220 - 350 TON (Heavy Lift)",
        form_china_source: "International Procurement (China Sourcing)",
        form_message_label: "Project Message",
        form_submit_btn: "Send Professional Inquiry",
        oman_hq_title: "Muscat Headquarters",
        oman_hq_addr: "Plot 142, Mabella Industrial Area, Muscat, Sultanate of Oman.",
        md_label: "Managing Director (Ch Arshad Ali Sial)",
        team_ops_label: "Team & Operations",
        landline_label: "Landline Office",
        official_email_label: "Official Email:",

        footer_desc: "Elevating Oman’s infrastructure with unmatched lifting power. PDO-approved excellence since inception, bridging the gap between global sourcing and local expertise.",
        footer_links_title: "Quick Links",
        footer_contact_title: "Contact Us",
        footer_hq: "Muscat Headquarters",
        footer_addr: "Mabella Industrial Area, Oman",
        footer_hotline: "Direct Hotline",
        footer_email: "Official Email",
        footer_sourcing_title: "Direct Sourcing",
        footer_sourcing_desc: "Direct sourcing from China factory outlets for used and new heavy equipment procurement.",
        footer_wa_inquiry: "WhatsApp Inquiry",
        footer_rights: "© 2026 SK Transports Oman. All Rights Reserved.",
        footer_designed: "Designed by M.Ahmed Sial",
        floating_chat: "Chat with us",
        china_card_title: "Yiwu Sial International (China)",
        china_card_company: "Yiwu Sial International Trading Company Limited",
        china_card_address: "International Trade Center Office, Zhejiang, China.",
        china_card_source: "Direct Sourcing (CEO Muhammad Amjad)",
        china_card_app: "WhatsApp & WeChat",
        china_card_wechat: "WeChat ID: Sialautoparts",
        china_card_email: "Email: ansarsial@gmail.com",
        china_card_footer: "Contact for direct factory machinery sourcing from China.",
        korea_card_title: "Sial Auto Parts (South Korea)",
        korea_card_company: "Sial Auto Parts Company Limited",
        korea_card_address: "Ansan-si, Gyeonggi-do, South Korea.",
        korea_card_source: "Direct Sourcing (CEO Muhammad Amjad)",
        intl_wa_label: "CEO WhatsApp",
        phone_intl_wa: "+82 10 5548 9938",
        phone_md: "+968 9192 9375 (MD)",
        phone_ops: "+968 9192 9355 (Ops)",
        phone_ops_2: "+968 7410 9000 (Ops)",
        phone_landline: "+968 24 424537 (Landline)",
        contact_wa_label: "Oman WhatsApp",
        serv_pdo_compliance_title: "PDO COMPLIANCE",
        serv_pdo_compliance_desc: "Full registration with Petroleum Development Oman (PDO) for all rental cranes, ensuring access to high-security energy zones.",
        serv_certified_riggers_title: "CERTIFIED RIGGERS",
        serv_certified_riggers_desc: "Our operators and riggers hold international certification for technical lifting and heavy load management.",
        serv_parts_hub_title: "SPARE PARTS HUB",
        serv_parts_hub_desc: "Dedicated warehouse support for SANY, Hyundai, and Kia equipment to minimize maintenance delays.",
        form_success: "Thank you! Your inquiry has been sent to our HQ. We will contact you shortly.",
        form_error: "Submission Error! Please try sending your inquiry directly via <a href='https://wa.me/96891929375' style='color:inherit; text-decoration:underline;'>WhatsApp (+968 9192 9375)</a> for immediate assistance."
    },
    ar: {
        nav_home: "الرئيسية",
        ticker_text: "اسطول ساني معتمد من شركة تنمية نفط عمان | 18 فرعاً في عمان | استيراد مباشر من المصانع الصينية (معدات مستعملة وجديدة) | دعم فني على مدار الساعة",
        nav_fleet: "الأسطول",
        nav_services: "الخدمات",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        hero_tagline: "تخصص الرفع الثقيل رقم 1 في عُمان • سلامة معتمدة من PDO • أكثر من 18 فرعاً",
        hero_title: "القوة المطلقة في <span>البنية التحتية لعُمان.</span>",
        hero_desc: "نقود أسطول ساني المتميز سعة 350 طناً في السلطنة. نقدم حلول تأجير الرافعات والرفع التقني العالمية لمشاريع النفط والغاز والبنية التحتية الكبرى في جميع أنحاء عُمان.",
        btn_quote: "طلب اقتباس",
        btn_fleet: "عرض محفظة أسطول ساني",
        stat_350_title: "350 طن",
        stat_350_desc: "أقصى رفع فردي",
        stat_350_sub: "شاسيه ساني SAC3500 عالي السعة",
        stat_pdo_title: "PDO",
        stat_pdo_desc: "معيار السلامة",
        stat_pdo_sub: "تكامل كامل مع بروتوكولات سلامة النفط والغاز",
        stat_branches_title: "+18",
        stat_branches_desc: "مراكز الخدمة",
        stat_branches_sub: "دعم استراتيجي في جميع أنحاء السلطنة",
        section_logistics_tag: "خدمات لوجستية عالمية",
        section_logistics_title: "أبعد من مجرد تأجير.<br><span>قوة موروثة.</span>",
        section_logistics_desc: "إس كيه للنقليات ليست مجرد مزود أسطول. نحن تكتل دولي مع مراكز توريد مباشرة في القلوب الصناعية للصين. من المشتريات إلى هندسة الرفع المعقدة، نقدم العمود الفقري لتقدم عُمان.",
        hub_china: "مركز الصين",
        hub_china_desc: "استيراد مباشر من المصانع الصينية (معدات مستعملة وجديدة)",
        hub_oman: "المقر الرئيسي في عُمان",
        hub_oman_desc: "التميز في التنفيذ في المعبيلة",
        direct_source_tag: "مباشرة من المصدر",
        factory_direct_desc: "توريد المعدات الثقيلة مباشرة من المصنع.",
        ceo_specialization: "<strong style=\"color: var(--primary);\">تخصص الرئيس التنفيذي:</strong> نحن نقدم جسراً فريداً للمشتريات المباشرة من الصين. يقوم رئيسنا التنفيذي شخصياً بتسهيل تحديد وتوريد آلات ساني الجديدة أو المستعملة، وإدارة جميع الخدمات اللوجستية والجمارك العمانية بشفافية تامة.",
        badge_pdo: "PDO",
        badge_certified: "معتمد",
        why_tag: "لماذا تختارنا",
        why_title: "ميزة إس كيه.",
        why_desc: "تعمل إس كيه للنقليات كفرع فخور تحت مظلة شركاتنا الأم، شركة يحيى بن خلفان بن محمد السيابي للتجارة الحديثة ش.م.م وشركة مملكة سيال للتجارة ش.م.م. معًا، نتخصص في قطع غيار هيونداي وكيا، ونسد الفجوة بين التوريد العالمي المباشر للمعدات والتميز التقني عبر أكثر من 18 فرعًا في عُمان.",
        check_1_head: "السلامة أولاً:",
        check_1: "أسطول معتمد من PDO لضمان أعلى المعايير التشغيلية في عُمان.",
        check_2_head: "الاستيراد المباشر:",
        check_2: "تسهيل احترافي لمبيعات آلات ساني المباشرة من الصين.",
        check_3_head: "الدعم الفني:",
        check_3: "مساعدة وصيانة على مدار الساعة لضمان عدم توقف المشروع.",
        check_4: "فرقة عمل للانتشار السريع على مدار الساعة",
        testimonials_tag: "آراء العملاء",
        testimonials_title: "محل ثقة <span>قادة الصناعة.</span>",

        rev1_content: "\"لقد كانت إس كيه للنقليات أساسية في توسعة ميناء صحار. تعاملت رافعات ساني 350 طن مع عمليات الرفع الإنشائية المعقدة بدقة مطلقة. حقاً شريك لرؤية عُمان 2040.\"",
        rev1_author: "المهندس سالم الحارثي",
        rev1_role: "رئيس الخدمات اللوجستية، ميناء صحار",
        rev2_content: "\"العمل مع مقاول معتمد من PDO أمر لا غنى عنه بالنسبة لنا. إن التزام إس كيه بالسلامة واستجابتهم السريعة في منطقة الدقم الصناعية جعلهم مزود الرفع المفضل لدينا.\"",
        rev2_author: "فيصل بن حمد",
        rev2_role: "مدير المشروع، مصافي OQ",
        rev3_content: "\"لقد ساعدتنا موثوقية مشغليهم وحجم أسطولهم في صلالة ومسقط على الوفاء بالمواعيد النهائية لبنيتنا التحتية قبل أشهر من الموعد المحدد. خدمة ممتازة.\"",
        rev3_author: "ماجد بن يوسف",
        rev3_role: "مدير مشروع مترو مسقط",

        leadership_tag: "المجلس التنفيذي",
        leadership_title: "قيادة <span>رؤيوية.</span>",
        ceo_name: "محمد أمجد",
        ceo_role: "الرئيس التنفيذي",
        ceo_desc: "العقل المدبر الاستراتيجي وراء التوريد العالمي والتوسع عبر أكثر من 18 فرعاً في السلطنة.",
        chairman_name: "الشيخ منور حسين سيال",
        chairman_role: "رئيس مجلس الإدارة",
        chairman_desc: "تقديم الرؤية التأسيسية والحوكمة التي تدفع المعايير العالية لمجموعة إس كيه للنقليات.",
        md_name: "الشيخ أرشد علي سيال",
        md_role: "العضو المنتدب",
        md_desc: "رائد في قطاع الآلات الثقيلة، يقود النمو التقني والتميز التشغيلي للمجموعة.",
        md2_name: "تصور حسين سيال",
        md2_role: "العضو المنتدب",
        md2_desc: "قيادة الشراكات الاستراتيجية والابتكارات الصناعية عبر مراكزنا في عُمان والصين.",

        about_legacy_tag: "إرثنا • قوتنا",
        about_future_title: "الارتقاء بـ <span>مستقبل عُمان.</span>",
        about_hero_desc: "اكتشف أساس تميزنا الهندسي والتزامنا المنقطع النظير ببناء المشهد الصناعي في عُمان بدقة وأمان.",
        about_conglom_title: "تكتل من <br><span>التميز الصناعي.</span>",
        about_conglom_desc: "تأسست إس كيه للنقليات على مبادئ الموثوقية والدقة الهندسية، وقد نمت من خدمة تأجير محلية إلى قوة صناعية مهيمنة في سلطنة عُمان. <br><br>مع أكثر من 18 فرعاً في مواقع استراتيجية في جميع أنحاء البلاد، نتميز في تقديم حلول الرفع الثقيل المعتمدة من PDO، وتوريد المعدات المباشر من المصانع في الصين، وقطع غيار السيارات المتخصصة.",
        mission_title: "مهمتنا",
        mission_desc: "تقديم حلول الرفع الأكثر أماناً وكفاءة في عُمان.",
        vision_title: "رؤيتنا",
        vision_desc: "أن نكون العمود الفقري الصناعي النهائي للشرق الأوسط.",
        exp_years: "+15",
        exp_label: "سنة خبرة",
        about_parent_title: "الشركات الأم",
        about_parent_desc: "تعمل إس كيه للنقليات كفرع فرعي فخور وقسم رفع متخصص تحت مظلة كياناتنا الأم المحترمة.",
        comp1_title: "شركة يحيى بن خلفان بن محمد السيابي للتجارة الحديثة ش.م.م",
        comp1_desc: "متخصصون في لوجستيات قطع غيار هيونداي وكيا، ونشكل العمود الفقري للتجارة الثقيلة عبر المراكز الصناعية في عُمان.",
        comp2_title: "شركة مملكة سيال للتجارة ش.م.م",
        comp2_desc: "التعامل في قطع غيار هيونداي وكيا إلى جانب التوريد المباشر من منافذ المصانع الصينية لشراء المعدات الثقيلة.",
        comp3_title: "شركة سيال لقطع غيار السيارات المحدودة (كوريا الجنوبية)",
        comp3_desc: "مركزنا في كوريا الجنوبية المتخصص في مكونات السيارات الفاخرة وإدارة سلسلة التوريد المباشرة لقطع غيار هيونداي وكيا.",
        comp4_title: "شركة إي وو سيال الدولية للتجارة المحدودة (الصين)",
        comp4_desc: "البوابة الرئيسية لتوريد المعدات الصناعية العالمية، وتسهيل صادرات المصانع المباشرة ولوجستيات المعدات الثقيلة من الصين.",

        fleet_tagline: "بنية تحتية متميزة من ساني",
        fleet_title: "قوة <span>ساني الجبارة.</span>",
        fleet_preview_tag: "أصولنا الرئيسية",
        fleet_preview_title: "أسطول <span>النخبة الثقيل.</span>",
        fleet_desc: "من رافعات التنقل بقدرة 50 طناً إلى هندسة الرفع الثقيل بقدرة 350 طناً، أسطولنا من ساني معتمد من قبل PDO وجاهز لمشاريع عُمان الأكثر أهمية.",
        btn_view_full_fleet: "عرض محفظة الأسطول الكاملة ←",
        book_now: "احجز الآن",
        card_350_tag: "أخصائي رفع ثقيل",
        card_350_specs: "وحش المهام الصعبة. ذراع من 7 أقسام. ارتفاع 112 متر.",
        ton_350: "350 طن",
        card_160_tag: "العمل الصناعي الشاق",
        card_160_specs: "تميز الشاحنات. انتشار سريع.",
        ton_160: "160 طن",
        card_130_tag: "جوهر البناء",
        card_130_specs: "مثالي لصيانة الجسور والمصافي.",
        ton_130: "130 طن",
        card_100_tag: "المشاريع الحضرية",
        card_100_specs: "مدمج وقوي. رافعة متعددة الأغراض.",
        ton_100: "100 طن",
        card_80_tag: "الخدمات اللوجستية الثقيلة",
        card_80_specs: "ثبات معزز للإنشاءات متوسطة الأحمال.",
        ton_80: "80 طن",
        card_50_tag: "أسطول الدعم",
        card_50_specs: "دقة صغيرة النطاق ودعم لوجستي.",
        ton_50: "50 طن",
        card_200_tag: "قوة لجميع التضاريس",
        card_200_specs: "تعدد استخدامات فائق للبنية التحتية الكبرى.",
        ton_200: "200 طن",
        card_220_tag: "سيد الهندسة",
        card_220_specs: "رفع دقيق للمصافي ومحطات الطاقة.",
        ton_220: "220 طن",

        serv_hero_tagline: "التميز في الرفع التقني",
        serv_hero_title: "دعم <span>الصناعات الثقيلة في عُمان.</span>",
        serv_hero_desc: "من عمليات النفط والغاز المعقدة إلى التوريد المباشر للمعدات العالمية، تقدم إس كيه للنقليات الدعم الفني لأكثر المشاريع طموحاً في السلطنة.",

        serv_core_tag: "خبراتنا",
        serv_core_title: "قطاعات <span>الخدمات الأساسية.</span>",
        serv_lifting_title: "حلول الرفع الثقيل",
        serv_lifting_desc: "قيادة أحدث أسطول من ساني في السلطنة لعمليات الرفع الدقيقة حتى 350 طناً. مشغلون ومعدات معتمدون بالكامل من PDO للبيئات عالية المخاطر.",
        serv_procurement_title: "المشتريات الصناعية",
        serv_procurement_desc: "استيراد مباشر من المصانع للمعدات المستعملة والجديدة من الصين. نسد الفجوة بين التصنيع العالمي واحتياجات البنية التحتية في عُمان.",
        serv_support_title: "الدعم الفني",
        serv_support_desc: "انتشار سريع على مدار الساعة طوال أيام الأسبوع عبر أكثر من 18 فرعاً. تضمن فرقة العمل لدينا أقل قدر من التوقف وأقصى كفاءة تشغيلية في الموقع.",

        process_tag: "سير العمل لدينا",
        process_title: "مصمم من أجل <span>الكفاءة.</span>",
        step1_title: "الاستشارة",
        step1_desc: "تحليل دقيق لمتطلبات الموقع وجداول الحمولة.",
        step2_title: "مسح الموقع",
        step2_desc: "تقييم المخاطر في الموقع من قبل مشرفي السلامة لدينا.",
        step3_title: "تخطيط الرفع",
        step3_desc: "حسابات هندسية صارمة واختيار المعدات المناسبة.",
        step4_title: "التنفيذ",
        step4_desc: "تشغيل دقيق تحت بروتوكولات السلامة العالمية.",

        china_special_title: "جسر <span>الصين - عُمان</span>",
        china_special_desc: "تكمن ميزتنا الفريدة في وصولنا المباشر إلى منافذ المصانع في الصين. نحن لا نؤجر الآلات فحسب؛ بل نسهل دورة حياة شراء المعدات الصناعية بالكامل بما في ذلك المعدات الجديدة والمستعملة.",

        safety_title: "معايير <span>سلامة لا تهاون فيها.</span>",
        safety_desc: "السلامة هي أساسنا الجوهري. تخضع كل آلة في أسطولنا لعمليات تفتيش صارمة من PDO وتدقيق شهادات النفط والغاز الدولية.",

        serv_hero_title: "حلول الخبراء. خبرات متنوعة.",
        serv_hero_desc: "من عمليات الرفع الحيوية في قطاع النفط والغاز إلى مشاريع البنية التحتية واسعة النطاق، نقدم الآلات المتخصصة والخبرة المطلوبة للتميز الصناعي الحديث.",
        serv1_title: "قطاع النفط والغاز",
        serv1_desc: "أسطول معتمد من PDO متخصص في البيئات عالية المخاطر. نقدم خدمات رفع حيوية لعمليات المصافي، وتركيب خطوط الأنابيب، ومشاريع الحفر الاستكشافية في جميع أنحاء السلطنة.",
        serv2_title: "البنية التحتية والإنشاءات",
        serv2_desc: "من بناء الجسور إلى توسعة الموانئ، تتعامل رافعات ساني سعة 350 طناً مع المكونات الهيكلية الأكثر تطلباً بدقة وأمان.",
        serv3_title: "قطع الغيار (هيونداي وكيا)",
        serv3_desc: "ندير مستودعاً حديثاً واحترافياً يضم قطع غيار أصلية للآلات الثقيلة e مركبات النقل، بما في ذلك المكونات المتخصصة من هيونداي وكيا.",
        serv3_link: "طلب كتالوج القطع ←",
        ops_active_title: "العمليات قيد التنفيذ",
        ops_active_desc: "آلاتنا نشطة حالياً في بعض من أهم المشاريع التنموية في عُمان.",
        quote_title: "\"تعاملت رافعة ساني 350T من إس كيه للنقليات مع عملية الرفع في المصفاة دون أي مشاكل. فريق محترف وواعي بالسلامة.\"",
        quote_author: "- مسؤول البنية التحتية، توسعة ميناء مسقط",

        contact_tagline: "استشارة المشروع",
        contact_title: "اتصل <span>بنا.</span>",
        contact_desc: "هل أنت مستعد للارتقاء ببنيتك التحتية؟ فريقنا الهندسي جاهز لتقديم حلول رفع معتمدة من PDO في أي مكان في عُمان ودعم التصنيع من الصين.",
        form_full_name: "اسمك الكامل",
        form_company: "اسم الشركة",
        form_email: "البريد الإلكتروني",
        form_phone: "رقم الهاتف",
        form_tonnage: "الحمولة والمعدات المطلوبة",
        form_ton_50_100: "50 - 100 طن (دعم)",
        form_ton_130_200: "130 - 200 طن (صناعي)",
        form_ton_220_350: "220 - 350 طن (رفع ثقيل)",
        form_china_source: "المشتريات الدولية (توريد من الصين)",
        form_message_label: "رسالة المشروع",
        form_submit_btn: "إرسال استفسار مهني",
        oman_hq_title: "المقر الرئيسي بمسقط",
        oman_hq_addr: "قطعة 142، منطقة المعبيلة الصناعية، مسقط، سلطنة عُمان.",
        md_label: "العضو المنتدب (الشيخ أرشد علي سيال)",
        team_ops_label: "الفريق والعمليات",
        landline_label: "مكتب الخط الأرضي",
        official_email_label: "البريد الإلكتروني الرسمي:",

        footer_desc: "الارتقاء بالبنية التحتية في عُمان بقوة رفع لا ميل لها. تميز معتمد من PDO منذ التأسيس، لسد الفجوة بين التوريد العالمي والخبرة المحلية.",
        footer_links_title: "روابط سريعة",
        footer_contact_title: "اتصل بنا",
        footer_hq: "المقر الرئيسي بمسقط",
        footer_addr: "منطقة المعبيلة الصناعية، عُمان",
        footer_hotline: "الخط الساخن المباشر",
        footer_email: "البريد الإلكتروني الرسمي",
        footer_sourcing_title: "التوريد المباشر",
        footer_sourcing_desc: "استيراد مباشر من منافذ المصانع في الصين لتوريد المعدات الثقيلة المستعملة والجديدة.",
        footer_wa_inquiry: "استفسار واتساب",
        footer_rights: "© 2026 إس كيه للنقليات عُمان. جميع الحقوق محفوظة.",
        footer_designed: "Designed by M.Ahmed Sial",
        floating_chat: "دردش معنا",
        china_card_title: "إي وو سيال الدولية (الصين)",
        china_card_company: "義烏希爾國際貿易有限公司 (Yiwu Sial International Trading Company Limited)",
        china_card_address: "مكتب مركز التجارة الدولية، جيجيانغ، الصين.",
        china_card_source: "توريد مباشر (الرئيس التنفيذي محمد أمجد)",
        china_card_app: "واتساب وويتشات",
        china_card_wechat: "معرف ويتشات: Sialautoparts",
        china_card_email: "البريد الإلكتروني: ansarsial@gmail.com",
        china_card_footer: "اتصل لتوريد المعدات مباشرة من المصانع في الصين.",
        korea_card_title: "سيال لقطع غيار السيارات (كوريا الجنوبية)",
        korea_card_company: "Sial Auto Parts Company Limited",
        korea_card_address: "أنسان-سي، جيونج جي-دو، كوريا الجنوبية.",
        korea_card_source: "توريد مباشر (الرئيس التنفيذي محمد أمجد)",
        intl_wa_label: "واتساب الرئيس التنفيذي",
        phone_intl_wa: "+82 10 5548 9938",
        phone_md: "+968 9192 9375 (MD)",
        phone_ops: "\u200E+968 9192 9355 (Ops)",
        phone_ops_2: "\u200E+968 7410 9000 (Ops)",
        phone_landline: "\u200E+968 24 424537 (Landline)",
        contact_wa_label: "واتساب عُمان",
        serv_pdo_compliance_title: "الامتثال لـ PDO",
        serv_pdo_compliance_desc: "تسجيل كامل لدى شركة تنمية نفط عمان (PDO) لجميع الرافعات المستأجرة، مما يضمن الوصول إلى مناطق الطاقة عالية الأمان.",
        serv_certified_riggers_title: "فنيو تزويد معتمدون",
        serv_certified_riggers_desc: "يحمل مشغلونا وفنيو التزويد لدينا شهادات دولية للرفع الفني وإدارة الأحمال الثقيلة.",
        serv_parts_hub_title: "مركز قطع الغيار",
        serv_parts_hub_desc: "دعم مستودع مخصص لمعدات ساني وهيونداي وكيا لتقليل تأخيرات الصيانة.",
        form_success: "شكراً لك! تم إرسال استفسارك إلى مقرنا الرئيسي. سنتصل بك قريباً.",
        form_error: "خطأ في الإرسال! يرجى محاولة إرسال استفسارك مباشرة عبر <a href='https://wa.me/96891929375' style='color:inherit; text-decoration:underline;'>واتساب (+968 9192 9375)</a> للمساعدة الفورية."
    },
    zh: {
        nav_home: "首页",
        ticker_text: "PDO 认证三一车队 | 阿曼 18 家分行 | 中国工厂直供（二手及全新机械） | 24/7 技术支持",
        nav_fleet: "车队",
        nav_services: "服务",
        nav_about: "关于我们",
        nav_contact: "联系我们",
        hero_tagline: "阿曼排名第一的重型起重专家 • PDO 认证安全 • 18+ 分支机构",
        hero_title: "阿曼基础设施的 <span> 终极力量。</span>",
        hero_desc: "统领苏丹国最精英的 350 吨三一车队。为阿曼全境的主要石油天然气和基础设施项目提供世界级起重机租赁及技术起重解决方案。",
        btn_quote: "索取报价",
        btn_fleet: "查看三一车队档案",
        stat_350_title: "350吨",
        stat_350_desc: "最大单次起重",
        stat_350_sub: "三一 SAC3500 高容量底盘",
        stat_pdo_title: "PDO",
        stat_pdo_desc: "安全标准",
        stat_pdo_sub: "全面整合石油天然气安全协议",
        stat_branches_title: "18+",
        stat_branches_desc: "服务中心",
        stat_branches_sub: "战略支持覆盖整个苏丹国",
        section_logistics_tag: "世界级物流",
        section_logistics_title: "超越租赁。<br><span>传承实力。</span>",
        section_logistics_desc: "SK Transports 不仅仅是一个车队供应商。我们是一个国际化企业集团，在中国工业核心地带拥有直接采购节点。从采购到复杂的起重工程，我们为阿曼的发展提供支柱。",
        hub_china: "中国中心",
        hub_china_desc: "直接从中国工厂采购（二手及全新机械）",
        hub_oman: "阿曼总部",
        hub_oman_desc: "马贝尔的卓越执行力",
        direct_source_tag: "厂家直供",
        factory_direct_desc: "重型设备工厂直采。",
        badge_pdo: "PDO",
        badge_certified: "认证",
        why_tag: "为什么选择我们",
        why_title: "SK 优势。",
        why_desc: "SK Transports 作为我们母公司 Yahya Bin Khalfan Bin Mohammed Al Sayabi Modern Trading LLC 和 Sial Kingdom Trading LLC 的一个自豪的分支机构运营。我们共同致力于现代和起亚零部件，在阿曼 18 多个分支机构中，弥合了直接全球设备采购和卓越技术之间的差距。",
        check_1_head: "安全第一：",
        check_1: "获得 PDO 认证的车队，确保阿曼最高的操作标准。",
        check_2_head: "直接进口：",
        check_2: "专业促进中国直供三一机械销售。",
        check_3_head: "技术支持：",
        check_3: "24/7 全天候协助和维护，确保项目零停机时间。",
        check_4: "24/7 快速响应工作组",
        testimonials_tag: "客户评价",
        testimonials_title: "受 <span> 行业领导者</span> 的信任。",

        rev1_content: "\"SK Transports 在我们的索哈尔港扩建中发挥了至关重要的作用。他们的三一 350T 起重机以绝对的精度处理了复杂的结构起重。真正是阿曼 2040 愿景的合作伙伴。\"",
        rev1_author: "Salim Al-Harthy 工程师",
        rev1_role: "索哈尔港首席物流官",
        rev2_content: "\"对于我们来说，与 PDO 批准的承包商合作是不可商榷的。SK 对安全的承诺以及他们在杜库姆工业区的快速响应使他们成为我们的首选起重供应商。\"",
        rev2_author: "Faisal Bin Hamad",
        rev2_role: "OQ 炼油厂项目经理",
        rev3_content: "\"他们在萨拉拉和马斯喀特的作业人员的可靠性以及车队的规模帮助我们提前数月完成了基础设施最后期限。服务非常出色。\"",
        rev3_author: "Majid Bin Yousef",
        rev3_role: "马斯喀特地铁项目总监",

        leadership_tag: "执行委员会",
        leadership_title: "有远见的 <span> 领导层。</span>",
        ceo_name: "Muhammad Amjad",
        ceo_role: "首席执行官",
        ceo_desc: "全球采购和在苏丹国 18 多个分支机构扩张背后的战略大师。",
        chairman_name: "Ch Munawar Hussain Sial",
        chairman_role: "董事长",
        chairman_desc: "提供推动 SK Transports 集团高标准的基石愿景和治理。",
        md_name: "Ch Arshad Ali Sial",
        md_role: "董事总经理",
        md_desc: "重型机械行业的先驱，推动集团的技术发展和卓越运营。",
        md2_name: "Tasawar Hussain Sial",
        md2_role: "董事总经理",
        md2_desc: "领导我们阿曼和中国节点的战略合作伙伴关系和工业创新。",

        about_legacy_tag: "我们的遗产 • 我们的实力",
        about_future_title: "提升 <span> 阿曼的未来。</span>",
        about_hero_desc: "探索我们卓越工程的基石，以及我们在提升阿曼工业格局方面坚定不移的承诺，并确保极其严密的精准度和安全性。",
        about_conglom_title: "一个 <br><span> 卓越工业</span> 的集团。",
        about_conglom_desc: "SK Transports 秉承可靠和精密工程的原则，已从当地的租赁服务发展成为阿曼苏丹国占主导地位的工业强国。<br><br>我们在全国各地的战略位置拥有 18 多个分支机构，专门提供 PDO 批准的重型起重解决方案、从中国工厂直接采购设备以及专业的汽车零部件。",
        mission_title: "使命",
        mission_desc: "在阿曼提供最安全、最高效的起重解决方案。",
        vision_title: "愿景",
        vision_desc: "成为中东地区最终的工业支柱。",
        exp_years: "15+",
        exp_label: "年经验",
        about_parent_title: "母公司",
        about_parent_desc: "SK Transports 作为我们受人尊敬的母公司旗下的一个自豪的分支机构和专业的起重部门进行运营。",
        comp1_title: "Yahya Bin Khalfan Bin Mohammed Al Sayabi Modern Trading LLC",
        comp1_desc: "专门从事现代和起亚零部件的物流，构成了阿曼各地工业中心重型贸易的支柱。",
        comp2_title: "Sial Kingdom Trading L.L.C",
        comp2_desc: "经营现代和起亚零部件，以及直接从中国工厂采购重型设备。",
        comp3_title: "希尔汽车零部件有限公司（韩国）",
        comp3_desc: "我们在韩国的中心，专注于高端汽车零部件以及现代和起亚零部件的直接供应链管理。",
        comp4_title: "义乌希尔国际贸易有限公司（中国）",
        comp4_desc: "全球工业设备采购的主要门户，促进中国工厂直接出口和重型机械物流。",

        fleet_tagline: "精英三一基础设施",
        fleet_title: "三一 <span> 动力中心。</span>",
        fleet_preview_tag: "我们的核心资产",
        fleet_preview_title: "精英 <span> 重型车队。</span>",
        fleet_desc: "从 50 吨的灵活性到 350 吨的重型起重工程，我们的三一车队已获得 PDO 批准，为阿曼最关键的项目做好准备。",
        btn_view_full_fleet: "查看完整车队档案 →",
        book_now: "立即预订",
        card_350_tag: "重型起重专家",
        card_350_specs: "全地形猛兽。7 节臂。112 米起升高度。",
        ton_350: "350 吨",
        card_160_tag: "工业主力军",
        card_160_specs: "超卓卡车底盘。快速部署。",
        ton_160: "160 吨",
        card_130_tag: "建筑核心",
        card_130_specs: "桥梁和炼油厂维护的理想选择。",
        ton_130: "130 吨",
        card_100_tag: "城市项目",
        card_100_specs: "紧凑而强大。多用途起重。",
        ton_100: "100 吨",
        card_80_tag: "重型物流",
        card_80_specs: "增强中型建筑的稳定性。",
        ton_80: "80 吨",
        card_50_tag: "支持车队",
        card_50_specs: "小规模精密和物流支持。",
        ton_50: "50 吨",
        card_200_tag: "全地形动力",
        card_200_specs: "主要基础设施的卓越多功能性。",
        ton_200: "200 吨",
        card_220_tag: "工程大师",
        card_220_specs: "炼油厂和发电厂的精密起重。",
        ton_220: "220 吨",

        serv_hero_tagline: "卓越的技术起重能力",
        serv_hero_title: "助力阿曼的 <span> 重工业。</span>",
        serv_hero_desc: "从复杂的石油和天然气业务到直接全球设备采购，SK Transports 为苏丹国最雄心勃勃的项目提供技术支撑。",

        serv_core_tag: "我们的专业知识",
        serv_core_title: "核心 <span> 服务领域。</span>",
        serv_lifting_title: "重型起重解决方案",
        serv_lifting_desc: "统领苏丹国最先进的三一车队，实现高达 350 吨的精密起重。拥有完全 PDO 认证的操作员和设备，适用于高风险环境。",
        serv_procurement_title: "工业采购",
        serv_procurement_desc: "直接从中国工厂采购各种二手及全新机械。我们弥合了全球制造业与阿曼基础设施需求之间的差距。",
        serv_support_title: "技术支持",
        serv_support_desc: "通过我们的 18 多个分支机构提供 24/7 快速部署。我们的工作组确保在现场尽量减少停机时间并提高运营效率。",

        process_tag: "我们的工作流程",
        process_title: "为 <span> 效率</span> 而生。",
        step1_title: "咨询",
        step1_desc: "对现场要求和载荷图进行深入分析。",
        step2_title: "现场勘测",
        step2_desc: "由我们的安全主管进行现场风险评估。",
        step3_title: "起重计划",
        step3_desc: "严谨的工程计算和设备选择。",
        step4_title: "执行",
        step4_desc: "在全球安全协议下的精密操作。",

        china_special_title: "<span> 中阿</span> 桥梁",
        china_special_desc: "我们的独特优势在于直接对接中国工厂奥特莱斯。我们不只租赁机器；我们还促进二手及全新工业设备采购的整个生命周期。",

        safety_title: "绝不妥协的 <span> 安全标准。</span>",
        safety_desc: "安全是我们的核心基础。我们车队的每台机器都经过严格的 PDO 检查和国际石油天然气认证审核。",

        serv_hero_title: "专家解决方案。多元专业知识。",
        serv_hero_desc: "从关键的石油和天然气起重到大型基础设施项目，我们提供现代工业卓越所需的专业机械 and 专业知识。",
        serv1_title: "石油和天然气部门",
        serv1_desc: "PDO 批准的车队，专业从事高风险环境。我们为苏丹国境内的炼油厂运营、管道安装和上游钻井项目提供关键的起重服务。",
        serv2_title: "基础设施与建设",
        serv2_desc: "从桥梁建设到港口扩建，我们的三一 350 吨起重机以精密和安全处理最苛刻的结构部件。",
        serv3_title: "备件（现代和起亚）",
        serv3_desc: "我们管理一个专业、现代化的仓库，拥有重型机械和运输车辆的正品备件，包括现代和起亚的专用组件。",
        serv3_link: "索取零件目录 →",
        ops_active_title: "运作中",
        ops_active_desc: "我们的机器目前活跃在阿曼一些最关键的发展项目中。",
        quote_title: "\"SK Transports 的三一 350T 起重机处理我们的炼油厂起重作业没有任何问题。团队专业且具有安全意识。\"",
        quote_author: "- 马斯喀特港扩建基础设施负责人",

        contact_tagline: "项目咨询",
        contact_title: "联系 <span> 我们。</span>",
        contact_desc: "准备好提升您的基础设施了吗？我们的工程团队随时待命，在阿曼各地提供 PDO 批准的起重解决方案，并提供来自中国的制造支持。",
        form_full_name: "您的全名",
        form_company: "公司名称",
        form_email: "电子邮件地址",
        form_phone: "电话号码",
        form_tonnage: "所需吨位和设备",
        form_ton_50_100: "50 - 100 吨 (起重支持)",
        form_ton_130_200: "130 - 200 吨 (工业级)",
        form_ton_220_350: "220 - 350 吨 (重型起重)",
        form_china_source: "国际采购 (中国采购)",
        form_message_label: "项目留言",
        form_submit_btn: "发送专业咨询",
        oman_hq_title: "马斯喀特总部",
        oman_hq_addr: "阿曼马斯喀特马贝尔工业区 142 号地块。",
        md_label: "董事总经理 (Ch Arshad Ali Sial)",
        team_ops_label: "团队与运营",
        landline_label: "办公座机",
        official_email_label: "官方邮箱:",

        footer_desc: "以无与伦比的起重力量提升阿曼的基础设施。自成立以来，PDO 认证的卓越品质，弥合了全球采购与当地专业知识之间的差距。",
        footer_links_title: "快速链接",
        footer_contact_title: "联系我们",
        footer_hq: "马斯喀特总部",
        footer_addr: "阿曼马贝尔工业区",
        footer_hotline: "直接热线",
        footer_email: "官方邮箱",
        footer_sourcing_title: "直接采购",
        footer_sourcing_desc: "直接从中国工厂采购二手及全新重型设备。",
        footer_wa_inquiry: "微信/WhatsApp 咨询",
        footer_rights: "© 2026 SK Transports 阿曼。保留所有权利。",
        footer_designed: "Designed by M.Ahmed Sial",
        floating_chat: "在线咨询",
        china_card_title: "义乌希尔国际 (中国)",
        china_card_company: "义乌市希尔国际贸易有限公司 (Yiwu Sial International Trading Company Limited)",
        china_card_address: "中国浙江国际贸易中心办公室。",
        china_card_source: "厂家直供（执行执行官 Muhammad Amjad）",
        china_card_app: "WhatsApp 和 微信",
        china_card_wechat: "微信 ID: Sialautoparts",
        china_card_email: "电子邮件: ansarsial@gmail.com",
        china_card_footer: "联系我们直接 from 中国工厂采购机械。",
        korea_card_title: "希尔汽车零部件（韩国）",
        korea_card_company: "希尔汽车零部件有限公司",
        korea_card_address: "韩国京畿道安山市。",
        korea_card_source: "厂家直供（首席执行官 Muhammad Amjad）",
        intl_wa_label: "CEO WhatsApp",
        phone_intl_wa: "+82 10 5548 9938",
        phone_md: "+968 9192 9375 (MD)",
        phone_ops: "+968 9192 9355 (Ops)",
        phone_ops_2: "+968 7410 9000 (Ops)",
        phone_landline: "+968 24 424537 (座机)",
        contact_wa_label: "阿曼 WhatsApp",
        serv_pdo_compliance_title: "PDO 合规",
        serv_pdo_compliance_desc: "在阿曼石油开发公司 (PDO) 全面注册所有租赁起重机，确保进入高安全性能源区。",
        serv_certified_riggers_title: "认证索具工",
        serv_certified_riggers_desc: "我们的操作员和索具工持有技术起重和重载管理的国际认证。",
        serv_parts_hub_title: "备件中心",
        serv_parts_hub_desc: "为三一、现代和起亚设备提供专门的仓库支持，以将维护延迟降至最低。",
        form_success: "谢谢！您的咨询已发送至我们的总部。我们将很快与您联系。",
        form_error: "提交错误！请尝试通过 <a href='https://wa.me/96891929375' style='color:inherit; text-decoration:underline;'>WhatsApp (+968 9192 9375)</a> 直接发送您的询问，以便获得即时反馈。"
    },
};

// 4. Lang Changer Trigger
let currentLang = localStorage.getItem('sk_lang') || 'en';

function updateUI() {
    document.body.classList.toggle('rtl', currentLang === 'ar');
    document.documentElement.lang = currentLang;

    // Direct text mapping using data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // Update specific elements if needed
    const activeFlag = document.getElementById('active-flag');
    if (activeFlag) {
        if (currentLang === 'en') activeFlag.textContent = "🇬🇧 EN";
        else if (currentLang === 'ar') activeFlag.textContent = "🇴🇲 AR";
        else if (currentLang === 'zh') activeFlag.textContent = "🇨🇳 ZH";
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('sk_lang', currentLang);
    updateUI();

    // Close dropdown
    const dropdown = document.querySelector('.lang-dropdown-content');
    if (dropdown) dropdown.classList.remove('show');
}

// Function to toggle dropdown visibility
function toggleLangMenu() {
    const dropdown = document.querySelector('.lang-dropdown-content');
    if (dropdown) dropdown.classList.toggle('show');
}

// Close dropdown when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.lang-selector-btn') && !event.target.matches('#active-flag')) {
        const dropdowns = document.getElementsByClassName("lang-dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', updateUI);

// 5. Reveal Animations
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card, .hero-title, .section h2').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});
// 6. Leadership Slider Logic
function slideLeadership(direction) {
    const slider = document.getElementById('leadership-slider');
    if (!slider) return;

    const scrollAmount = 430; // Card width (400) + Gap (30)
    if (direction === 'next') {
        slider.scrollLeft += scrollAmount;
    } else {
        slider.scrollLeft -= scrollAmount;
    }
}

// 7. Contact Form Handling (AJAX)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const status = document.getElementById('form-status');
        const btn = document.getElementById('submit-btn');
        const formData = new FormData(contactForm);

        // UI Feedback
        btn.disabled = true;
        btn.innerHTML = (currentLang === 'ar' ? 'جاري المعالجة...' : (currentLang === 'zh' ? '正在处理...' : 'Processing...'));

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.style.display = 'block';
                status.style.background = 'rgba(16, 185, 129, 0.1)';
                status.style.color = '#10b981';
                status.innerHTML = translations[currentLang].form_success || "Inquiry Sent Successfully!";
                contactForm.reset();
                btn.style.display = 'none';
            } else {
                let errorMsg = translations[currentLang].form_error;
                try {
                    const data = await response.json();
                    if (data && data.errors) {
                        errorMsg = data.errors.map(error => error.message).join(", ") + ". " + translations[currentLang].form_error;
                    } else if (data && data.error) {
                        errorMsg = data.error + ". " + translations[currentLang].form_error;
                    }
                } catch (e) {
                    // Response was not JSON, use default error
                    console.log("Response was not JSON");
                }
                status.innerHTML = errorMsg;
                throw new Error("Form submission failed");
            }
        } catch (error) {
            status.style.display = 'block';
            status.style.background = 'rgba(239, 68, 68, 0.1)';
            status.style.color = '#ef4444';

            // Final fallback if status wasn't set correctly
            if (!status.innerHTML || status.innerHTML === "" || status.innerHTML.includes("Successfully")) {
                status.innerHTML = translations[currentLang].form_error;
            }

            btn.disabled = false;
            btn.innerHTML = translations[currentLang].form_submit_btn;
            console.error("Form Error Logged:", error);
        }
    });
}
