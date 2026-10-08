
export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  // To use your own images, add them to the `public` folder and use the path, e.g., "/projects/my-image.png"
  screenshots: string[];
  tags: string[];

  // Optional links displayed on the project details/card.
  liveUrl?: string;
  caseStudyUrl?: string;
  //repositoryUrl?: string;
};

/**
 * How to use your own images:
 * 1. Create a `public` folder at the root of your project.
 * 2. Add your images to the `public` folder. For example, `public/projects/my-image.png`.
 * 3. In the `imageUrl` and `screenshots` fields, use the path starting with a forward slash: `/my-image.png`.
 *
 * Example:
 *
 * {
 *   ...
 *   // This will use the image located at `public/projects/my-awesome-project.jpg`
 *   imageUrl: "/projects/my-awesome-project.jpg",
 *   screenshots: [
 *      "/projects/screenshot-1.jpg",
 *      "/projects/screenshot-2.jpg"
 *   ]
 *   ...
 * }
 *
 */

export const projects: Project[] = [
 {
  slug: "landlord-ledger",
  title: "Landlord Ledger",
  description:
    "A modern property management application that helps landlords manage properties, units, tenants, rent, payments, arrears and financial records, while connecting landlords with prospective tenants through an integrated property marketplace.",

  longDescription: `
Landlord Ledger is a modern property management application built to simplify the day-to-day financial and administrative work of landlords and property managers.

The application provides a centralized system for managing properties, rental units, tenants, tenancies, rent charges, payments and outstanding balances.

The system is designed around real-world rental workflows, including payment allocation, rent generation, tenant statements, arrears tracking, payment receipts and financial reporting.

Landlord Ledger also includes an integrated property marketplace that connects landlords with prospective tenants. Landlords can showcase available rental units and properties, while prospective tenants can discover available listings and connect with landlords directly.

The marketplace extends Landlord Ledger beyond property administration into tenant acquisition, creating a more connected experience between property owners and renters.

The application is built with Flutter and Supabase, combining a modern cross-platform interface with a scalable backend and database architecture.
`,

  imageUrl: "/landlord-ledger/cover_landscape.jpg",

  screenshots: [
    "/projects/landlord-ledger/dashboard.jpg",
    "/projects/landlord-ledger/dashboard.png",
    "/projects/landlord-ledger/dashboard2.png",
    "/projects/landlord-ledger/properties.jpg",
    "/projects/landlord-ledger/payments.png",
    "/projects/landlord-ledger/arrears.jpg",
    "/projects/landlord-ledger/analytics.png",
    "/projects/landlord-ledger/reports.png",
  ],

  tags: [
    "Flutter",
    "Dart",
    "Supabase",
    "PostgreSQL",
    "Riverpod",
    "Property Management",
    "Rental Marketplace",
    "Tenant Discovery",
    "FinTech",
  ],

  liveUrl: "/landlord-ledger",
},
    {
  slug: "farmora",
  title: "Farmora",
  description:
    "A modern farm management application designed to help farm owners and managers manage livestock, inventory, sales, expenses, customers and day-to-day farm operations from one place.",

  longDescription: `
Farmora is a farm management application built to simplify the day-to-day operational and financial work involved in running a modern farm.

The application provides a centralized system for managing livestock, farm activities, inventory, products, customers, vendors, sales, expenses and financial records.

The system is designed around practical farm workflows, allowing managers to keep livestock records, monitor inventory, record sales and expenses, track customers and vendors, and review farm performance from a centralized dashboard.

Farmora is designed for farms with multiple operational areas and different livestock categories, providing configurable farm settings and a flexible foundation that can adapt to different farm workflows.

The application is built with Flutter and Supabase, combining a modern responsive cross-platform interface with a scalable PostgreSQL backend, authentication and farm-level data isolation.
`,

  imageUrl: "/farmora/cover_landscape.jpg",

  screenshots: [
    "/farmora/dashboard.png",
    "/farmora/livestock.png",
    "/farmora/inventory.jpg",
    "/farmora/dashboard3.png",
    
    "/farmora/categories.png",
    "/farmora/reports.png",
    "/farmora/reports2.png",
    "/farmora/farm_setup.png",
  ],

  tags: [
    "Flutter",
    "Dart",
    "Supabase",
    "PostgreSQL",
    "Riverpod",
    "Farm Management",
    "Livestock Management",
    "Inventory",
    "Sales & Expenses",
  ],

  liveUrl: "/farmora",
},
  {
    slug: "clarity-solutions-digital-experience-concept",
    title: "Clarity Solutions — Digital Experience Concept",
    description:
      "An unofficial creative concept exploring how Clarity Solutions could present its LED, digital signage and AV capabilities through a modern digital experience.",
    longDescription:
      "This concept project brings together web design, UI/UX, graphic design and digital-signage direction. It was created independently as part of an application for the Website & Graphic Designer position and is not commissioned work or an official Clarity Solutions design.",
    imageUrl: "/placeholder.png",
    screenshots: [],
    tags: ["UI/UX", "Web Design", "Branding", "Digital Signage", "Graphic Design"],
    caseStudyUrl: "/clarity-solution",
  },
  {
  slug: "hempon-group-website",
  title: "HEMPON GROUP - Modern Digital Agency Website",
  description:
    "A modern, fully responsive website for Hempon Group, designed to showcase its digital products, services, projects, and technology expertise through a polished and engaging user experience.",
  longDescription:
    "The Hempon Group website was designed as a modern digital presence for a technology-focused company and its growing portfolio of products and services. The project combines a clean visual system with responsive layouts, smooth animations, clear content hierarchy, and an engaging presentation of the company's work. Built with a focus on performance, usability, and scalability, the website provides a professional foundation for showcasing Hempon Group's digital products, services, and portfolio.",
  imageUrl: "/hg-app.png",
  screenshots: [
    "/hg1.png",
    "/hg2.png",
    "/hg3.png",
    "/hg4.png",
    "/hg5.png",
    "/hg6.png",
  ],
  tags: [
    "Next.js",
    "Tailwind CSS",
    "ShadCN/UI",
    "Framer Motion",
    "TypeScript",
    "Responsive Design",
  ],
  liveUrl: "https://hempongroup.co.ke/",
},
{
  slug: "kanyi-j-advocates-website",
  title: "KANYI J & COMPANY ADVOCATES - Law Firm Website Redesign",
  description:
    "A modern, professional website redesign for Kanyi J & Company Advocates, focused on presenting the firm's services and professional identity through a responsive digital experience.",
  longDescription:
    "The Kanyi J & Company Advocates website redesign focuses on creating a modern and professional online presence for a legal practice. The project emphasizes clear information hierarchy, responsive layouts, polished visual presentation, intuitive navigation, and an accessible experience across desktop and mobile devices. The redesign demonstrates how a professional law firm can present its services and identity through a contemporary digital experience while maintaining a clear and credible visual direction.",
  imageUrl: "/kanyi-j-app.png",
  screenshots: [
    "/kanyi-j1.png",
    "/kanyi-j2.png",
    "/kanyi-j3.png",
    "/kanyi-j4.png",
    "/kanyi-j5.png",
    "/kanyi-j6.png",
    "/kanyi-j7.png",
  ],
  tags: [
    "Next.js",
    "Tailwind CSS",
    "ShadCN/UI",
    "Framer Motion",
    "TypeScript",
    "Responsive Design",
    "Law Firm",
    "Website Redesign",
  ],
  liveUrl: "https://www.kanyij-advocates.co.ke/",
},
{
    slug: "flutter-invoice-app",
    title: "Flutter Invoice App",
    description: "A modern, cross-platform Flutter application for managing invoices, with PDF generation and archiving.",
    longDescription: "A modern, cross-platform Flutter application for managing invoices. Features include creating, viewing, editing, and deleting invoices, archiving, light/dark mode, PDF generation/printing, and local data storage. It's designed for web and mobile with a responsive UI based on Material Design 3 principles.",
    imageUrl: "/invoice-easy/cover_landscape.jpg",
    screenshots: [
      "/invoice-easy/dashboard_light.jpg",
      "/invoice-easy/invoice_preview.jpg",
      "/invoice-easy/print_preview.jpg",
      "/invoice-easy/reports_analytics.jpg",
      "/invoice-easy/recent_invoices.jpg",
    ],
    tags: ["Flutter", "Dart", "Mobile App", "PDF Generation", "State Management"],
    //caseStudyUrl: "/invoice-easy",
    liveUrl: "/invoice-easy",
  },
  {
  slug: "config-driven-logistics-website-starter-kit",
  title: "Logistics Website",
  description:
    "A production-ready logistics website starter kit featuring shipment tracking, fleet management, service coverage, and a modular configuration system.",

  longDescription: `
This project extends my multi-industry website platform with a dedicated logistics solution designed for courier companies, transport businesses, freight providers, and delivery services.

Rather than building another standalone website, I reused the same configuration-driven architecture powering the other industry templates. The logistics version introduces industry-specific sections including shipment tracking, fleet showcase, logistics services, coverage areas, industries served, FAQs and customer testimonials while maintaining a single reusable codebase.

The shipment tracking interface demonstrates how a production system would integrate with a backend database to display package status, delivery history and estimated arrival times. Although the demo uses sample data, the architecture is designed to integrate easily with PostgreSQL, Supabase or any REST API.

The project showcases scalable React architecture, reusable components, configuration-based rendering and responsive UI design suitable for modern logistics businesses.
`,

  imageUrl: "/projects/logistics/homepage.png",

  screenshots: [
    "/projects/logistics/homepage.png",
    "/projects/logistics/services.png",
    "/projects/logistics/tracking.png",
    "/projects/logistics/fleet.png",
    "/projects/logistics/contact.png",
  ],

  tags: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Configuration Driven",
    "Logistics",
    "Starter Kit",
  ],

  liveUrl: "https://logistics-starter-kit.vercel.app",
},
  {
    slug: "google-apps-script-automation",
    title: "Google Sheets Data Automation",
    description: "An advanced Google Apps Script to automate the processing of Google Form data into structured summaries and dynamic charts.",
    longDescription: "This project showcases a powerful Google Apps Script designed to automate the transformation of raw Google Form responses into insightful, presentation-ready formats. The script automatically categorizes questions, generates multiple summary views (including table and card styles), and creates dynamic charts to visualize key metrics, all triggered on form submission. It includes a custom menu within Google Sheets for on-demand report generation, significantly improving data analysis workflows.",
    // To use your own image, place it in `public/` and update the path here, e.g., "/google-script-project.png"
    imageUrl: "/hero-gs.png",
    screenshots: [
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/db-gs.jpg",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/aw-gs.jpg",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/rt-gs.jpg",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/i-gs.jpg"
    ],
    tags: ["Google Apps Script", "JavaScript", "Automation", "Data Analysis"],
  },
  {
    slug: "fintrack-ai",
    title: "FinTrack AI - Intelligent Finance Tracker",
    description: "An AI-powered app for expense tracking, receipt scanning, and personalized financial advice.",
    longDescription: "FinTrack AI is an intelligent personal finance application designed to help you take full control of your money. It leverages Google's Gemini model to provide smart insights, automated expense tracking via receipt scanning, and personalized financial advice from a chat-based assistant.",
    // To use your own image, place it in `public/` and update the path here, e.g., "/fintrack-ai.png"
    imageUrl: "/fin-app.png",
    screenshots: [
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/fin-add.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/fin-ai.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/fin-filled.png",
      "/fin-expe.png",
      "/fin-budget.png"
    ],
    tags: ["Next.js", "AI", "TypeScript", "Finance"],
  },
  
  {
    slug: "church-website-django",
    title: "Church Website with Django",
    description: "A fully functional church website built using Django, featuring a blog, event management, and member engagement tools.",
    longDescription: "This project is a comprehensive church website built with the Django framework. It includes key features like a blog system for sermons and articles, an event manager for church activities, and a secure user authentication system for administrators. The frontend is built with HTML, CSS, and Bootstrap for a responsive design that works across all devices. The powerful Django Admin panel allows for easy content management.",
    // To use your own image, place it in `public/` and update the path here, e.g., "/church-website.png"
    imageUrl: "/church/hero.png",
    screenshots: [
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/church/intro.png",
      "/church/services.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/church/team.png",
      "/church/portfolio.png",
      "/church/contact.png",
      "/church/blog.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/church/admin.png",
    ],
    tags: ["Django", "Python", "Bootstrap", "Web Development"],
     liveUrl: "https://church-blog-1fse.onrender.com/",
  },
  {
    slug: "stayzen-accommodation-booking-app",
    title: "StayZen - Accommodation Booking App",
    description: "A Next.js web application for finding and booking accommodations, with a user-facing app and an admin dashboard.",
    longDescription: "This is a full-stack Next.js web application for finding and booking accommodations. It features a user-facing PWA for browsing and booking, and a complete admin dashboard for managing properties and bookings. Built with Next.js App Router, TypeScript, ShadCN UI, and Tailwind CSS, it uses in-memory data stores for development and is configured for AI integration. The admin panel includes robust forms with React Hook Form and Zod for validation.",
    // To use your own image, place it in `public/` and update the path here, e.g., "/stayzen-app.png"
    imageUrl: "/sz-app.png",
    screenshots: [
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/sz-home.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/sz-light.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/sz-stays.png"
    ],
    tags: ["Next.js", "TypeScript", "ShadCN UI", "PWA"],
  },
  {
    slug: "foodie-app-firebase",
    title: "Foodie App (Firebase Edition)",
    description: "A Flutter-based mobile application for browsing restaurant menus and simulating a food order checkout process.",
    longDescription: "A Flutter-based mobile application for browsing restaurant menus, adding items to a cart, and simulating a food order checkout process. This project utilizes Firebase for backend services including authentication, real-time menu data from Firestore, and user data storage. Features include real-time menu browsing with a shimmer effect, an interactive shopping cart with slidable delete actions, and a simulated order and receipt generation process.",
    // To use your own image, place it in `public/` and update the path here, e.g., "/foodie-app.png"
    imageUrl: "/foodie_app.png",
    screenshots: [
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/foodie_dark.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/foodie_in.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/foodie_menu.png"
    ],
    tags: ["Flutter", "Firebase", "Mobile App", "Dart"],
  },
  {
    slug: "flutter-expense-tracker",
    title: "Flutter Expense Tracker",
    description: "A mobile app to track daily expenses with a weekly summary and bar graph.",
    longDescription: "A mobile application built with Flutter to help you track your daily expenses efficiently. Features include adding, editing, and deleting expenses, viewing a weekly summary, and visualizing spending patterns with an interactive bar graph using the `fl_chart` package. It uses a modern modal bottom sheet for quick expense entry and manages state efficiently with the `provider` package, ensuring a clean and user-friendly interface.",
    // To use your own image, place it in `public/` and update the path here, e.g., "/flutter-expense-tracker.png"
    imageUrl: "/ET_app.png",
    screenshots: [
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/et_filled.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/ET_app.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/et_filled.png"
    ],
    tags: ["Flutter", "Dart", "Mobile App", "State Management"],
  },
  {
    slug: "ai-travel-planner",
    title: "AI Travel Planner",
    description: "A web app that generates personalized travel itineraries using generative AI.",
    longDescription: "This AI-powered travel planner helps users create custom trip itineraries in seconds. Built with React and using an AI workflow for AI capabilities, it considers user preferences for destinations, activities, and budget to generate a detailed day-by-day plan. It's designed to be intuitive and user-friendly, making travel planning effortless.",
    // To use your own image, place it in `public/` and update the path here, e.g., "/ai-travel-planner.png"
    imageUrl: "/ait.png",
    screenshots: [
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/placeholder.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/ait.png",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/placeholder.png"
    ],
    tags: ["React", "AI", "Travel"],
  },
 {
  slug: "personal-portfolio",
  title: "HEMPON GROUP - Professional Portfolio",
  description:
    "A modern portfolio website showcasing web development projects, digital solutions, and professional work by Hempon Group.",
  longDescription:
    "The Hempon Group portfolio is a modern digital showcase built to present web development projects, digital solutions, and professional work in a polished and engaging way. The website combines a clean visual identity with responsive layouts, smooth animations, and carefully structured project case studies. It serves as a central portfolio for showcasing websites, applications, and custom digital solutions developed by Hempon Group, while providing prospective clients with a clear view of the company's capabilities and previous work.",
  imageUrl: "/portfolio/hero.png",
  screenshots: [
    "/portfolio/project.png",
    "/portfolio/project2.png",
    "/portfolio/project3.png",
    "/portfolio/blog.png",
    "/portfolio/apps.png",
    "/portfolio/profile.png",
    "/portfolio/profile2.png",
    "/portfolio/profile3.png",
  ],
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "ShadCN UI",
    "Framer Motion",
    "Responsive Design",
    "Portfolio",
  ],
  liveUrl: "https://portfolio.hempongroup.co.ke/",
},
  {
    slug: "real-time-chat-app",
    title: "Real-Time Chat App",
    description: "A real-time chat application using WebSockets and React.",
    longDescription: "This is a real-time chat application that allows users to communicate instantly. It's built with React on the frontend and a Node.js backend using WebSockets for live messaging. Features include private messaging, user online status, and a simple, intuitive interface.",
    // To use your own image, place it in `public/` and update the path here, e.g., "/real-time-chat-app.png"
    imageUrl: "/hero-rt.png",
    screenshots: [
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/rt1.jpg",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
      "/rt2.jpg",
      // To use your own image, place it in `public/` and update the path here, e.g., "/screenshot.png"
"/rt3.jpg",
"/rt4.jpg",
    ],
    tags: ["React", "Node.js", "WebSockets", "Chat"],
  },
  {
    slug: "multi-industry-business-starter-kit",
    title: "Corporate Business Website",
    description: "A polished corporate website template with reusable sections, theme controls, responsive navigation, and configurable client content.",
    longDescription: "The Corporate Business Starter Kit is part of a larger multi-industry website platform built with React, Vite, TypeScript, Tailwind CSS, and Motion. It includes a modern hero, services, features, statistics, portfolio, pricing, team, testimonials, FAQ, contact forms, theme switching, and production-ready configuration. The same core architecture can be reused for agencies, consultancies, technology companies, and professional service businesses.",
    imageUrl: "/projects/starter-kits/business/hero.png",
    screenshots: [
      "/projects/starter-kits/business/homepage.png",
      "/projects/starter-kits/business/features.png",
      "/projects/starter-kits/business/pricing.png"
    ],
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Website "],
    liveUrl: "https://business-website-starter-kit.vercel.app/",
    //repositoryUrl: "https://github.com/Magatijoel9620/YOUR-BUSINESS-REPOSITORY"
  },
  {
    slug: "law-firm-website",
    title: "Law Firm Website ",
    description: "A professional legal-services website featuring practice areas, attorneys, case results, consultation calls-to-action, and client-focused content.",
    longDescription: "The Law Firm Website  provides a clean and credible online presence for advocates, law firms, and legal consultants. It includes practice-area presentations, attorney profiles, case-result highlights, legal FAQs, consultation calls-to-action, contact details, responsive navigation, dark and light modes, and client-specific configuration. The template can be customized for individual firms without changing the shared rendering engine.",
    imageUrl: "/kanyi-j-app.png",
    screenshots: [
     "/kanyi-j1.png",
    "/kanyi-j2.png",
    "/kanyi-j3.png",
    "/kanyi-j4.png",
    "/kanyi-j5.png",
    "/kanyi-j6.png",
    "/kanyi-j7.png"
    ],
    tags: ["React", "TypeScript", "Legal Website", "Tailwind CSS", ""],
    liveUrl: "https://law-kanyi-j.vercel.app/",
    //repositoryUrl: "https://github.com/Magatijoel9620/YOUR-LAW-REPOSITORY"
  },
  {
    slug: "medical-clinic-website",
    title: "Medical Clinic Website ",
    description: "A healthcare-focused website with departments, doctors, opening hours, insurance information, appointment calls-to-action, and patient resources.",
    longDescription: "The Medical Clinic Website  is designed for clinics, wellness centres, dental practices, and healthcare providers. Its sections include medical departments, physician profiles, opening hours, accepted insurance, patient portal guidance, FAQs, appointment prompts, and direct contact details. The design emphasizes trust, accessibility, responsiveness, and clear patient journeys.",
    imageUrl: "/projects/starter-kits/clinic/light/clinic-hero.png",
    screenshots: [
      "/projects/starter-kits/clinic/dark/clinic-departments.png",
      "/projects/starter-kits/clinic/light/clinic-opening-hours.png",
      "/projects/starter-kits/clinic/light/contact.png",
      "/projects/starter-kits/clinic/light/clinic-doctors.png",
      "/projects/starter-kits/clinic/light/clinic-insurance.png"
    ],
    tags: ["React", "Healthcare", "TypeScript", "Tailwind CSS", ""],
    liveUrl: "https://clinic-starter-kit.vercel.app/",
    //repositoryUrl: "https://github.com/Magatijoel9620/YOUR-CLINIC-REPOSITORY"
  },
  {
    slug: "school-academy-website",
    title: "School & Academy Website ",
    description: "An education website template for programs, admissions, faculty, events, student life, school information, and prospective-parent engagement.",
    longDescription: "The School and Academy Website  supports educational institutions that need a modern and informative online presence. It features academic programs, admissions information, faculty profiles, upcoming events, student life, school-focused footer links, application calls-to-action, responsive layouts, and configurable branding. It can be adapted for primary schools, secondary schools, colleges, academies, and training institutions.",
    imageUrl: "/projects/starter-kits/school/dark/hero.png",
    screenshots: [
      "/projects/starter-kits/school/light/school-homepage.png",
      "/projects/starter-kits/school/dark/school-programs.png",
      "/projects/starter-kits/school/light/school-admissions.png",
      "/projects/starter-kits/school/dark/contact.png",
      "/projects/starter-kits/school/light/footer.png",
    ],
    tags: ["React", "Education", "TypeScript", "Tailwind CSS", ""],
    liveUrl: "https://school-starter-kit-nine.vercel.app/",
    //repositoryUrl: "https://github.com/Magatijoel9620/YOUR-SCHOOL-REPOSITORY"
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website ",
    description: "A rich restaurant website with menu, specials, chef profile, gallery, opening hours, and table reservation sections.",
    longDescription: "The Restaurant Website  presents dining brands through a visually rich and responsive interface. It includes menu displays, daily specials, chef introductions, image galleries, opening hours, a dedicated reservation form, contact information, and industry-specific calls-to-action. It is suitable for restaurants, cafés, bistros, hotels with dining services, and catering businesses.",
    imageUrl: "/projects/starter-kits/restaurant/light/hero.png",
    screenshots: [
      "/projects/starter-kits/restaurant/dark/homepage.png",
      "/projects/starter-kits/restaurant/light/restaurant-menu.png",
      "/projects/starter-kits/restaurant/dark/contact.png",
      "/projects/starter-kits/restaurant/light/restaurant-gallery.png"
    ],
    tags: ["React", "Restaurant Website", "Reservations", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://restaurant-starter-kit.vercel.app/",
    //repositoryUrl: "https://github.com/Magatijoel9620/YOUR-RESTAURANT-REPOSITORY"
  },
  {
    slug: "hotel-resort-website",
    title: "Hotel & Resort Website ",
    description: "A hospitality website featuring rooms, amenities, nearby attractions, guest reviews, booking calls-to-action, and contact information.",
    longDescription: "The Hotel and Resort Website  is designed for hotels, resorts, lodges, serviced apartments, and guest houses. Its configurable sections include room and suite showcases, property amenities, local attractions, guest reviews, booking-focused calls-to-action, contact details, and responsive navigation. The design supports luxury and modern hospitality branding while keeping the code reusable.",
    imageUrl: "/projects/starter-kits/hotel/dark/hero.png",
    screenshots: [
      "/projects/starter-kits/hotel/light/homepage.png",
      "/projects/starter-kits/hotel/dark/hotel-rooms.png",
      "/projects/starter-kits/hotel/light/hotel-amenities.png",
      "/projects/starter-kits/hotel/dark/hotel-attractions.png"
    ],
    tags: ["React", "Hospitality", "Hotel Website", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://hotel-starter-kit.vercel.app/",
    //repositoryUrl: "https://github.com/Magatijoel9620/YOUR-HOTEL-REPOSITORY"
  },
  {
    slug: "construction-company-website",
    title: "Construction Company Website ",
    description: "A robust construction website showcasing projects, safety standards, equipment, industries served, and quote requests.",
    longDescription: "The Construction Company Website  gives contractors, engineering firms, builders, and infrastructure companies a professional way to present their capabilities. It includes project portfolios, safety information, equipment and fleet sections, industries served, contact and quotation calls-to-action, responsive layouts, and configurable brand content.",
    imageUrl: "/projects/starter-kits/construction/light/hero.png",
    screenshots: [
      "/projects/starter-kits/construction/dark/homepage.png",
      "/projects/starter-kits/construction/light/construction-projects.png",
      "/projects/starter-kits/construction/dark/construction-equipment.png",
      "/projects/starter-kits/construction/light/contact.png"
    ],
    tags: ["React", "Construction", "Engineering", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://construction-starter-kit.vercel.app/",
    //repositoryUrl: "https://github.com/Magatijoel9620/YOUR-CONSTRUCTION-REPOSITORY"
  },
  {
    slug: "real-estate-website",
    title: "Real Estate Website ",
    description: "A modern property website with listings, advanced search, agent profiles, neighborhood guides, market statistics, and viewing requests.",
    longDescription: "The Real Estate Website  supports agencies, property developers, brokers, and independent agents. It features premium property listings, search tools, agent profiles, neighborhood guides, market statistics, inquiry calls-to-action, and client-specific branding. The reusable architecture makes it easy to create different property websites from the same codebase.",
    imageUrl: "/projects/starter-kits/real-estate/dark/hero.png",
    screenshots: [
      "/projects/starter-kits/real-estate/light/homepage.png",
      "/projects/starter-kits/real-estate/dark/real-estate-properties.png",
      "/projects/starter-kits/real-estate/light/real-estate-agents.png",
      "/projects/starter-kits/real-estate/light/contact.png"
    ],
    tags: ["React", "Real Estate", "Property Listings", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://real-estate-starter-kit.vercel.app/",
    //repositoryUrl: "https://github.com/Magatijoel9620/YOUR-REAL-ESTATE-REPOSITORY"
  },
  {
    slug: "ecommerce-storefront",
    title: "eCommerce Storefront ",
    description: "A responsive online-store template with products, categories, promotions, best sellers, shopping-focused calls-to-action, and customer support.",
    longDescription: "The eCommerce Storefront  provides a modern base for online shops and product catalogues. It includes product grids, categories, promotional sections, best sellers, responsive navigation, theme support, customer-service links, and configurable brand content. The current starter focuses on storefront presentation and can be extended with a cart, authentication, payments, inventory, and order management.",
    imageUrl: "/projects/starter-kits/ecommerce/light/hero.png",
    screenshots: [
      "/projects/starter-kits/ecommerce/dark/homepage.png",
      "/projects/starter-kits/ecommerce/light/ecommerce-products.png",
      "/projects/starter-kits/ecommerce/dark/ecommerce-categories.png",
      "/projects/starter-kits/ecommerce/light/contact.png"
    ],
    tags: ["React", "eCommerce", "TypeScript", "Tailwind CSS", "Storefront"],
    liveUrl: "https://ecommerce-starter-kit-mu.vercel.app/",
    //repositoryUrl: "https://github.com/Magatijoel9620/ecommerce-starter_kit"
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  // To use your own image, place it in `public/` and update the path here, e.g., "/authors/magati-joel.png"
  authorImage: string;
  // To use your own image, place it in `public/` and update the path here, e.g., "/blog/my-post.png"
  imageUrl: string;
};

export const posts: Post[] = [
  {
    slug: "building-landlord-ledger-property-management-app",

    title: "Building Landlord Ledger: A Property Management App for Modern Landlords",

    date: "2026-08-09",

    excerpt:
        "How I built Landlord Ledger to simplify property, tenant, rent and payment management using Flutter, Supabase and PostgreSQL.",

    author: "Magati Joel",

    authorImage: "/profile.png",

    imageUrl: "/landlord-ledger/cover_landscape.jpg",

    content: `
# Why I Built Landlord Ledger

Managing rental properties can quickly become difficult when information is scattered across notebooks, spreadsheets, messages and payment records.

I wanted to build a system that brings the most important parts of property management into one place.

That idea became **Landlord Ledger**.

Landlord Ledger is a property management application designed to help landlords and property managers manage properties, units, tenants, rent, payments and financial records from a centralized system.

---

# The Problem

Property management involves more than simply collecting rent.

A landlord may need to keep track of:

- Properties
- Rental units
- Tenants
- Tenancies
- Monthly rent
- Payments
- Outstanding balances
- Arrears
- Tenant statements
- Receipts
- Financial reports

When these records are maintained manually, it becomes easy to lose track of payments or calculate balances incorrectly.

Landlord Ledger was designed around these real-world workflows.

---

# The Goal

The main goal was simple:

> Build a reliable system that gives a landlord a clear picture of their rental business.

Instead of jumping between spreadsheets and paper records, the landlord should be able to open the application and immediately understand:

- How many properties they manage
- How many units are occupied
- Who owes rent
- Recent payments
- Outstanding balances
- Property performance

---

# Core Features

## Property Management

Landlords can organize their rental portfolio and manage individual properties and units.

The system separates properties from units so that a single property can contain multiple rental units.

---

## Tenant Management

Tenant records are connected to the relevant rental unit and tenancy.

This makes it possible to maintain a clear relationship between:

**Property → Unit → Tenant → Tenancy → Rent → Payment**

This structure is important because rental transactions need to remain associated with the correct tenant and unit.

---

## Rent Management

The application is designed around recurring rental charges.

Rent can be generated for tenants and tracked against payments received.

This makes it easier to identify:

- Paid rent
- Partially paid rent
- Outstanding rent
- Arrears

---

# Payment Allocation

One of the more important parts of the system is payment allocation.

A payment should not simply be stored as a number.

The system needs to understand which tenant made the payment and how that payment affects their outstanding rental charges.

This allows the application to maintain accurate tenant balances and statements.

---

# Tenant Statements

Tenant statements provide a chronological view of rental activity.

A statement can contain:

- Rent charges
- Payments
- Outstanding balances
- Transaction dates
- Running balances

This provides both the landlord and tenant with a clearer financial record.

---

# Receipts and Reports

Landlord Ledger also includes document generation capabilities.

Payment receipts can be generated as PDFs, while reports provide landlords with useful financial information about their rental portfolio.

This turns the application from a simple CRUD system into a more practical property-management tool.

---

# Technology Stack

Landlord Ledger is built using:

- Flutter
- Dart
- Supabase
- PostgreSQL
- Riverpod

Flutter provides the cross-platform application interface while Supabase provides the backend infrastructure and PostgreSQL database.

Riverpod is used for application state and dependency management.

---

# Architecture

The application is organized around separate layers for:

- Authentication
- Domain models
- Repositories
- State management
- Business logic
- UI

The repository layer abstracts database operations from the interface.

This makes it easier to maintain the application and replace or extend backend functionality in the future.

---

# Designing Around Real Rental Workflows

One of the biggest lessons from the project was that property management software should be designed around financial workflows rather than simply database tables.

For example, a payment needs to affect a tenant's outstanding rent.

That means the system needs to understand relationships between:

**Rent Charges → Payments → Allocations → Balances → Statements**

Thinking about these relationships early helped shape the architecture.

---

# What I Learned

Landlord Ledger gave me an opportunity to work on several areas of application development at the same time.

Some of the biggest lessons included:

- Designing relational data models
- Building reusable repository layers
- Managing application state
- Handling financial transactions
- Generating PDF documents
- Designing dashboards around useful business metrics
- Building workflows around real-world business requirements

The project also reinforced the importance of keeping business logic separate from presentation code.

---

# What's Next?

Landlord Ledger is designed to grow beyond basic property management.

Future improvements can include:

- Automated rent generation
- WhatsApp rent reminders
- Advanced financial reports
- M-Pesa payment integration
- Automated payment reconciliation
- Multi-property dashboards
- Landlord and staff roles
- Tenant portals
- Online rent payment
- Mobile notifications

The long-term goal is to create a practical property-management platform that reduces the administrative workload for landlords and property managers.

---

# Final Thoughts

Landlord Ledger started with a simple question:

**Can rental management be made easier with the right software?**

Building the application has shown me that the answer is yes—but the real challenge is not simply creating screens.

It is understanding the business processes behind those screens.

That's what made Landlord Ledger one of the more interesting applications I've worked on.
`,
  },
  {
  slug: "building-farmora-farm-management-app",

  title: "Building Farmora: A Farm Management App for Modern Farm Operations",

  date: "2026-09-17",

  excerpt:
    "How I built Farmora to bring livestock, inventory, sales, expenses and day-to-day farm operations into one centralized management system using Flutter, Supabase and PostgreSQL.",

  author: "Magati Joel",

  authorImage: "/profile.png",

  imageUrl: "/farmora/cover_landscape.jpg",

  content: `
# Why I Built Farmora

Running a farm involves much more than keeping livestock.

There are animals to monitor, products and supplies to track, sales to record, expenses to manage, customers and vendors to keep up with, and operational activities that need to be documented.

In many farms, some of these records still live in spreadsheets, notebooks, receipts, messages and separate financial systems.

I wanted to build a system that could bring these operational records into one place.

That idea became **Farmora**.

Farmora is a farm management application designed to help farm owners and managers manage livestock, inventory, sales, expenses, customers, vendors and other farm operations from a centralized system.

---

# The Problem

Farm management can quickly become complicated because different parts of the operation are connected.

A farm may need to keep track of:

- Livestock
- Livestock categories and locations
- Key livestock records and measurements
- Farm activities
- Products and inventory
- Stock movements
- Customers
- Vendors
- Sales
- Payments
- Expenses
- Financial records
- Reports

When these records are maintained across different spreadsheets and paper records, getting a complete picture of the farm becomes difficult.

A manager may know how much was sold, but not immediately see how that relates to inventory.

They may know what was spent, but have to manually combine several records to understand the overall position of the farm.

Farmora was designed around these relationships.

---

# The Goal

The main goal was simple:

> Build a practical system that gives farm managers a clear picture of what is happening across the farm.

Instead of switching between spreadsheets, notebooks and separate records, the manager should be able to open Farmora and quickly understand:

- What livestock is on the farm
- What inventory is available
- What has been sold
- What has been spent
- Who the farm is dealing with
- What activities have been recorded
- How the farm is performing

The goal was not simply to digitize existing spreadsheets.

It was to create a foundation for managing farm operations digitally.

---

# Building Around Farm Operations

One of the most important decisions was to avoid treating the application as a collection of unrelated CRUD screens.

Farm operations are connected.

For example:

**Inventory → Sales → Payments → Customers**

And:

**Livestock → Activities → Measurements → Farm Records**

While:

**Expenses → Categories → Suppliers/Vendors → Financial Records**

Thinking about these relationships helped shape both the database and the application architecture.

---

# Livestock Management

Livestock is one of the most important areas of Farmora.

The application is designed to allow farms to maintain structured livestock records rather than relying entirely on notebooks or spreadsheets.

Records can be organized around areas such as:

- Livestock type
- Breed or category
- Location
- Individual or group records
- Key measurements
- Farm activities

The goal is to make livestock information easier to find, maintain and review over time.

This also provides a foundation for expanding livestock management as the application develops.

---

# Inventory Management

Farm operations depend heavily on inventory.

Feed, supplies, products and other stock need to be monitored because inventory affects both daily operations and sales.

Farmora provides a centralized place to manage products and stock information.

The inventory workflow is designed around practical concepts such as:

- Products
- Categories
- Units
- Stock quantities
- Stock movements
- Inventory records

This creates a clearer relationship between what a farm has, what it uses and what it sells.

---

# Sales Management

Sales are another important part of a farm's operation.

A farm may sell livestock, agricultural products or other farm outputs.

Farmora provides a sales workflow that can capture information such as:

- Sale date
- Customer
- Products
- Quantities
- Prices
- Payment information
- Outstanding balances
- Payment methods

The system is designed to make the relationship between a sale and its customer and payment records clearer.

---

# Expenses

Tracking income without tracking expenses only provides part of the picture.

Farmora includes expense recording so farm managers can document operational spending.

Expenses can include information such as:

- Date
- Category
- Amount
- Description
- Related records

Organizing expenses in a structured system makes it easier to review where money is being spent and identify important operational patterns.

---

# Customers and Vendors

Farm operations often involve multiple external parties.

Customers may purchase farm products while vendors and suppliers provide goods and services needed to operate the farm.

Farmora therefore treats customers and vendors as part of the operational system rather than keeping them as disconnected contact lists.

This provides a foundation for connecting people and organizations to sales, purchases and other farm records.

---

# Dashboard and Farm Overview

A management system becomes much more useful when raw records can be turned into information that is easy to understand.

Farmora's dashboard brings important operational information together so managers can review the state of the farm without manually combining multiple records.

The dashboard is designed around useful areas such as:

- Livestock
- Inventory
- Sales
- Expenses
- Recent activity
- Operational summaries

The objective is to move from simply storing data to helping the manager understand the operation.

---

# Configurable Farm Workflows

Not every farm operates in exactly the same way.

Different farms may have different livestock categories, locations, products, activities and record-keeping requirements.

Because of this, Farmora is being designed with farm-level configuration in mind.

The idea is to provide a flexible foundation where farms can adapt parts of the system to their own operational structure rather than forcing every farm into exactly the same workflow.

---

# Technology Stack

Farmora is built using:

- Flutter
- Dart
- Supabase
- PostgreSQL
- Riverpod
- GoRouter

Flutter provides the cross-platform application interface while Supabase provides authentication, backend services and the PostgreSQL database.

Riverpod is used for application state and dependency management.

GoRouter handles application navigation and route structure.

---

# Architecture

The application is organized around separate areas for:

- Authentication
- Farm context
- Repositories
- State management
- Business logic
- Feature modules
- UI

Feature areas such as livestock, inventory, sales and expenses communicate with the backend through repository layers.

This separation helps keep database operations away from presentation code and makes individual parts of the application easier to maintain and expand.

---

# Designing for Real Farm Workflows

One of the biggest lessons from Farmora has been that farm-management software needs to reflect how farms actually operate.

A farm manager does not think in terms of database tables.

They think in terms of questions such as:

**What livestock do we have?**

**What stock is available?**

**What did we sell today?**

**Who bought it?**

**What has been paid?**

**What expenses have we incurred?**

**What needs attention?**

Those questions became more important than simply deciding which tables should exist.

The database structure exists to support the workflow—not the other way around.

---

# From Spreadsheets to a Management System

One of the motivations behind Farmora was the amount of operational information that can accumulate in spreadsheets.

Spreadsheets can be extremely useful, but as a farm grows, maintaining interconnected records manually can become increasingly difficult.

Farmora provides a structured application layer around those records.

The longer-term goal is to make the transition from traditional record keeping to a dedicated farm-management system more practical without forcing every farm to operate in exactly the same way.

---

# Designing for Different Farm Users

Farm management is rarely performed by a single person.

Managers, owners, office staff and other farm workers may interact with information differently.

Farmora therefore considers role-based access and farm-level data isolation as important parts of the architecture.

The objective is to make sure users can work with the information relevant to their responsibilities while maintaining appropriate protection around farm data.

---

# What I Learned

Building Farmora has brought together several areas of application development.

Some of the biggest lessons have included:

- Designing relational farm data models
- Building reusable repository layers
- Managing application state with Riverpod
- Designing workflows around real-world operations
- Handling livestock records
- Managing inventory and stock data
- Building sales and expense workflows
- Designing dashboards around operational metrics
- Structuring role-based access
- Building responsive interfaces for different screen sizes
- Designing software that can adapt to different business workflows

The project has also reinforced an important principle:

> Good business software starts with understanding the workflow before designing the interface.

---

# What's Next?

Farmora is being developed as a growing platform rather than a one-off farm record system.

Future development areas include:

- More advanced livestock management
- Expanded inventory management
- Notifications and reminders
- More detailed operational reporting
- Additional farm configuration options
- Subscription and billing infrastructure
- Further workflow customization
- Deeper financial and operational analytics

The long-term goal is to create a practical farm-management platform that can adapt to different types of farms while reducing the administrative workload involved in keeping farm records.

---

# Final Thoughts

Farmora started with a simple question:

**Can farm operations be made easier when the important records are connected in one system?**

Building the application has shown me that the challenge is much bigger than creating forms for livestock, sales or expenses.

The real challenge is understanding how those areas interact.

A livestock record can represent an operational activity.

An inventory change can be connected to a sale.

A sale can involve a customer and a payment.

An expense can be connected to a category or vendor.

And all of these records contribute to the bigger picture of how the farm is performing.

That is what makes Farmora one of the most interesting applications I have worked on.
`,
},

{
slug: "building-a-reusable-payment-engine-for-multiple-saas-products",

title: "Building a Reusable Payment Engine for Multiple SaaS Products",

date: "2026-10-04",

excerpt:
"How I designed a reusable payment infrastructure layer to handle payment initiation, verification, webhooks, idempotency and billing integrations across multiple applications using Supabase, PostgreSQL, Flutter and IntaSend.",

author: "Magati Joel",

authorImage: "/profile.png",

imageUrl: "/payment-engine/cover_landscape.png",

content: `

# Why I Built a Payment Engine

As I continued building multiple applications, I noticed that payment integration was becoming a repeated problem.

Each application needed to handle payments, transaction states, payment verification, subscription access and payment notifications.

Building that logic independently inside every application would work, but it would also create duplicated code, duplicated security concerns and multiple places to maintain payment-provider integrations.

I wanted to solve the problem at the infrastructure level.

Instead of making every application communicate directly with a payment provider, I designed a reusable payment engine that could sit between my applications and the payment infrastructure.

The goal was simple:

Build the payment logic once, make it reusable, and allow multiple applications to consume it without tightly coupling their databases or application logic.

# The Architecture

The resulting architecture separates the application layer from the payment infrastructure.

Applications communicate with the payment engine through secure server-side integrations.

The payment engine is responsible for the payment lifecycle, while each application remains responsible for its own users, business data and application-specific subscription experience.

At a high level, the architecture looks like this:

Application
↓
Application Billing Bridge
↓
Payment Engine
↓
Payment Provider
↓
Webhook
↓
Payment Engine Verification
↓
Application Billing State

This separation allows the same payment infrastructure to support multiple products without turning those products into one tightly coupled system.

# Designing for Multiple Applications

One of the main requirements was supporting more than one application from the same payment infrastructure.

The applications should share payment capabilities without sharing their application databases.

For example, Farmora, InvoiceEasy and Landlord Ledger can each have their own:

* Authentication
* Users
* Business data
* Application database
* Subscription interface
* Local billing projection

while using the same centralized payment infrastructure underneath.

This creates a useful separation between application ownership and payment processing.

The payment engine knows which product initiated a payment and what resource the payment belongs to, while the application continues to own its own business logic.

# Payment Provider Abstraction

I also wanted to avoid making the applications dependent on a single payment provider implementation.

The payment engine therefore acts as a provider-neutral layer.

The application does not need to know the internal implementation details of the payment provider.

Instead, it requests a payment through the payment engine, which handles the provider-specific interaction.

This makes it possible to introduce additional providers or fallback mechanisms without rewriting the billing logic inside every application.

For the Kenyan payment environment, IntaSend is currently used for hosted checkout and M-Pesa payment processing.

# The Most Important Part: Verification

One of the most important design decisions was separating payment notification from payment confirmation.

A webhook saying that a payment was completed should not automatically mean that a user's subscription is activated.

Instead, the payment engine validates the transaction before allowing it to affect billing state.

The general flow is:

Payment initiated
↓
Provider processes payment
↓
Webhook received
↓
Server-side verification
↓
Validate payment reference
↓
Validate amount and currency
↓
Check payment state
↓
Apply idempotency protection
↓
Record payment
↓
Allow billing state to change

This creates a much safer boundary between the external payment provider and application access control.

# Idempotency and Duplicate Events

Payment systems also have to deal with something ordinary application CRUD operations don't always encounter: the same event can arrive more than once.

Network failures, retries and webhook delivery mechanisms can result in duplicate notifications.

The payment engine therefore treats payment processing as an idempotent operation.

A payment that has already been processed should not result in another subscription activation or another payment being recorded simply because the provider sent the notification again.

This was an important part of making the system reliable rather than simply functional.

# Hosted Checkout

Another design decision was to keep sensitive payment-provider operations on the server side.

Applications can request a payment and receive the appropriate checkout information without exposing provider credentials to the Flutter application.

The user then completes the payment through the hosted payment experience.

This keeps secrets and provider-specific credentials outside the client application.

It also gives the payment provider control over sensitive payment collection rather than requiring the application itself to handle payment credentials.

# Manual Payment Support

Not every payment needs to happen through an automated checkout.

For environments where manual M-Pesa payments are still useful, the payment engine also supports a manual payment workflow.

A manually submitted payment is treated as pending rather than immediately granting access.

The payment can then go through the appropriate verification and approval process before billing access changes.

This makes the system useful in environments where both automated and manual payment methods are required.

# Keeping Applications Independent

A major goal was avoiding a situation where the payment engine becomes responsible for the entire application.

The payment engine handles payment infrastructure.

The application handles the user experience.

For example, InvoiceEasy can continue managing its own invoice data, customers, businesses and application-specific subscription presentation.

Farmora can continue managing farm operations independently.

The payment engine simply provides a shared financial infrastructure layer.

This keeps the applications modular and makes it possible to evolve them independently.

# Building Around Supabase

The infrastructure is built around Supabase and PostgreSQL.

Supabase provides the backend foundation while PostgreSQL provides the persistent billing and transaction data layer.

Server-side Edge Functions handle communication between applications and external payment services.

This architecture also allows sensitive operations to remain on the server rather than inside Flutter clients.

The applications themselves are built primarily with Flutter and Dart.

# Designing for Failure

A payment system cannot assume that every request will succeed.

Payments can remain pending.

Webhooks can be delayed.

Providers can temporarily become unavailable.

Networks can fail.

A user can close a browser immediately after initiating payment.

Because of this, the payment flow was designed around explicit payment states rather than treating payment as a single request that either succeeds or fails.

This makes it possible to reconcile payment state later instead of assuming that a temporary failure means the payment never happened.

# Testing the Payment Flow

Before moving toward live payments, I tested the payment lifecycle using the provider's sandbox environment.

The testing process covered payment initiation, hosted checkout, M-Pesa processing, provider responses, webhook delivery, verification and idempotency.

One useful lesson from testing was that a successful payment and a successful webhook delivery are two different things.

A payment can successfully complete at the provider while the notification path experiences a temporary failure.

Designing around that distinction is important for building reliable payment infrastructure.

# Security Principles

The payment engine follows a few important principles:

* Payment provider secrets remain server-side.
* Client applications never receive service credentials.
* Payment callbacks are not treated as unconditional proof of payment.
* Payments are verified before affecting billing state.
* Duplicate payment events are handled idempotently.
* Products are isolated from each other.
* Application databases remain independent.
* Manual payments remain pending until verified.
* Sensitive infrastructure configuration is kept outside the client.

These principles are more important to me than simply making the payment button work.

# What I Learned

Building the payment engine changed how I think about payment integration.

The difficult part isn't calling a payment API.

The difficult part is everything around that API.

What happens when a webhook arrives twice?

What happens when the payment succeeds but the application doesn't receive the notification?

What happens when a user closes the checkout page?

What happens when the provider temporarily becomes unavailable?

What happens if a client tries to claim that a payment succeeded?

These questions pushed the implementation from a simple payment integration toward a reusable payment infrastructure system.

# The Result

The result is a centralized payment layer that can be reused by multiple applications while keeping those applications independent.

Instead of implementing payment-provider logic separately in every product, new applications can integrate through a controlled billing bridge and reuse the existing payment infrastructure.

The architecture is designed to grow with the product ecosystem rather than forcing every application to reinvent payment processing.

For me, this project has been less about building a payment button and more about learning how to design reliable infrastructure around financial transactions.

# Technology Stack

* Flutter
* Dart
* Supabase
* PostgreSQL
* Supabase Edge Functions
* IntaSend
* M-Pesa
* REST APIs
* Server-side payment verification
* Webhooks
* Idempotent transaction processing

# Final Thoughts

Building this payment engine has been one of the more technically interesting parts of my recent development work.

It sits behind the applications rather than being something users necessarily see, but it solves an important problem: making payment processing reusable, secure and predictable across multiple products.

The next step is continuing to improve provider resilience, reconciliation, observability and the developer experience for applications integrating with the platform.
`,
},

  {
    slug: "designing-clarity-solutions-digital-experience-concept",

    title: "Designing a Digital Experience for Clarity Solutions: LED, Signage & Visual Technology",

    date: "2026-09-01",

    excerpt:
        "How I created an unofficial digital experience concept for Clarity Solutions, combining web design, UI/UX, graphic design, social media creatives and LED digital signage.",

    author: "Magati Joel",

    authorImage: "/profile.png",

    imageUrl: "/clarity/hero-led-wall.webp",

    content: `
# Why I Created the Clarity Solutions Concept

When applying for a creative role, a CV can describe what you know, but a project can demonstrate what you can actually do.

While exploring the **Website & Graphic Designer** opportunity at Clarity Solutions, I decided to create an independent concept project based on the company's work in LED video walls, digital signage and audio-visual solutions.

The result is the **Clarity Solutions — Digital Experience Concept**.

This is an **unofficial concept project** created independently as part of my application process. It is not an official Clarity Solutions project or commissioned work.

The goal was to explore how web design, UI/UX, graphic design and digital marketing materials could work together as one cohesive visual experience.

---

# Understanding the Challenge

Clarity Solutions operates in a highly visual industry.

LED video walls, digital signage and audio-visual installations are designed to capture attention and communicate information through visual experiences.

That creates an interesting design challenge.

A website for a company like this should not simply explain what the company does.

It should also **show what the technology can do**.

For this concept, I wanted to create a digital experience that feels:

- Modern
- Professional
- Technology-focused
- Visually immersive
- Corporate
- Easy to navigate

The design needed to communicate the company's capabilities quickly while giving potential clients a reason to explore its services and projects.

---

# The Concept

The concept brings several different design disciplines together:

**Website Design → UI/UX → Graphic Design → Social Media → Digital Signage → Corporate Communication**

Instead of treating each deliverable as a separate design, I approached them as parts of one visual system.

The same design language can therefore be adapted across a website, social media campaign, LED display and company-profile material.

---

# Website Hero Section

The website concept begins with a strong visual hero section.

The objective was to immediately communicate the relationship between Clarity Solutions and large-scale visual technology.

Rather than filling the first screen with information, the concept uses:

- Large typography
- Strong imagery
- High-contrast visual elements
- Clear calls to action
- LED display imagery

The idea is to create an immediate impression while allowing visitors to discover more about the company's services as they scroll.

---

# LED Digital Signage

LED digital signage is one of the most visually important parts of the concept.

I wanted to show the technology in an environment rather than presenting it as an isolated product.

This helps communicate the potential impact of digital signage to a prospective client.

The concept focuses on the idea:

> **Your message. Magnified.**

A large LED display can transform a physical environment into a communication platform.

Whether used for advertising, corporate communication, events or public information, the visual experience becomes part of the environment itself.

---

# Digital Signage Creative

I also created a standalone digital-signage creative that could be displayed on an LED screen.

The design uses minimal messaging, strong typography and a clear visual hierarchy.

This is particularly important for large-format displays because viewers may only have a few seconds to understand the message.

The creative therefore focuses on:

- Short messaging
- Strong visual hierarchy
- Brand visibility
- Readability
- High-impact composition

---

# Social Media Design

A company's digital presence extends beyond its website.

For the concept, I explored how the visual identity could be adapted for social platforms including:

- Instagram
- LinkedIn
- TikTok
- WhatsApp

The goal was to create graphics that remain recognisable as part of the same brand while being adapted to the requirements of different platforms.

For example, a LinkedIn creative can communicate a project or corporate announcement, while an Instagram or TikTok graphic can focus more heavily on visual impact.

---

# Responsive Website Design

The website concept was designed with responsive behaviour in mind.

The desktop version provides space for large visual elements, service presentations and project showcases.

The mobile version simplifies the layout while maintaining the same visual hierarchy.

Important considerations included:

- Responsive layouts
- Clear navigation
- Mobile usability
- Typography
- Spacing
- Visual hierarchy
- Accessible interaction
- Strong calls to action

The objective was to make the experience work effectively across desktop, tablet and mobile devices.

---

# Corporate Company Profile

The visual concept also extends beyond digital screens.

I created a company-profile direction that could form the basis for corporate materials such as:

- Company profiles
- Brochures
- Presentations
- Marketing documents
- Project proposals
- Sales materials

This helps demonstrate how a visual identity can remain consistent across different communication channels.

---

# Building a Consistent Visual System

One of the main ideas behind the project was consistency.

A website, Instagram post, LinkedIn graphic and company profile should not feel like completely different designs.

They should feel like parts of the same brand.

The concept therefore uses shared principles across the different materials:

- Typography
- Layout
- Visual hierarchy
- Spacing
- Imagery
- Technology-focused visuals
- Consistent messaging

This makes it easier to extend the design into future marketing materials.

---

# Technology & Tools

The concept combines my design and web-development experience.

For design and visual development, I work with:

- Figma
- Canva
- Adobe Photoshop
- Adobe Illustrator

For web development, my experience includes:

- HTML5
- CSS3
- JavaScript
- TypeScript
- React
- Next.js
- Tailwind CSS
- WordPress
- Elementor

The interactive portfolio implementation uses a modern component-based approach with responsive layouts and animation.

---

# Designing and Building

One of the advantages I bring to web projects is the ability to work across both design and development.

I can take an idea from:

**Concept → Wireframe → Visual Design → Development → Responsive Implementation → Deployment**

This makes it possible to consider technical limitations during the design process rather than designing something that becomes difficult to implement later.

For this concept, the same approach was used to turn the visual direction into an interactive portfolio case study.

---

# What I Wanted to Demonstrate

This project was created to demonstrate more than graphic design ability.

I wanted to show that I can think about a company's digital presence as a complete system.

That includes:

- Website design
- UI/UX
- Responsive development
- Graphic design
- Branding
- Social media content
- Digital advertising
- Digital signage
- Corporate communication

The individual deliverables are important, but the ability to connect them into one consistent experience is what I found most interesting.

---

# What I Learned

Creating this concept reinforced an important principle:

**Good design starts with understanding the business.**

Before deciding on colours, typography or layouts, it is important to understand:

- What the company does
- Who its customers are
- What it needs to communicate
- Where the communication will be consumed
- What action the user should take

For a company involved in LED and audio-visual technology, the design itself needs to communicate visual impact.

That became one of the central ideas behind the project.

---

# Final Concept

The final concept brings together several pieces of work:

- Website hero experience
- LED digital signage concept
- Social media creatives
- Responsive website UI
- Corporate company-profile design

Together, they form a proposed digital experience for a modern audio-visual technology company.

Again, this is an **unofficial concept project** created independently for portfolio and application purposes. It is not an official Clarity Solutions project.

---

# View the Concept

The complete interactive concept is available on my portfolio:

**https://portfolio-mjs.vercel.app/clarity-solution**

The project demonstrates how the different visual assets can come together as one responsive digital experience.

---

# Final Thoughts

Creating this project was an opportunity to combine two areas I enjoy working in:

**Design and technology.**

A strong website should look good, but it should also communicate clearly, work across devices and support the goals of the business behind it.

For a company working with LED displays, digital signage and audio-visual technology, that becomes even more important.

The digital experience should be as clear, modern and visually engaging as the technology being presented.

That was the idea behind the Clarity Solutions concept.
`,
},
  {
    slug: "building-a-config-driven-multi-industry-website-starter-kit",
    title:
      "Building a Config-Driven Multi-Industry Website with React and TypeScript",
    date: "2026-07-12",
    excerpt:
      "How I designed one reusable React codebase to power business, law, clinic, school, restaurant, hotel, construction, real-estate, and eCommerce websites.",
    content: `
## Why This Project Exists

Building websites for different clients often starts with the same familiar routine.

Create a new project. Copy components from an older website. Replace the logo. Change the colors. Rewrite the hero section. Adjust the navigation. Then repeat the process for the next client.

At first, this approach feels fast. However, after building websites for businesses, law firms, clinics, schools, restaurants, hotels, construction companies, real-estate agencies, and online stores, I noticed that most of the code was almost identical.

The industries were different, but the foundations were not.

I wanted to stop rebuilding the same website and start building a system that could produce many websites from one reusable codebase.

## The Problem

Most business websites rely on a similar collection of sections:

- Navigation
- Hero content
- Services
- About information
- Testimonials
- Frequently asked questions
- Contact forms
- Calls to action
- Footers

The real differences are usually the wording, images, colors, industry-specific sections, and branding.

Maintaining a separate repository for every client created several problems. A bug fixed in one project still existed in the others. A new feature had to be copied manually across multiple codebases. Design improvements became difficult to distribute consistently.

I needed an architecture where presentation could remain reusable while each client still had a unique identity.

## My Approach

I built a config-driven website platform using React and TypeScript.

Instead of hardcoding one client's content directly into the components, I separated the application into several layers.

The active deployment is selected through \`APP_CONFIG\`. Each industry has a definition in \`clientConfigs\`, including its default section order and available components. Complete website data is stored in \`configMap\`, while \`componentRegistry\` maps section names to reusable React components.

A central \`TemplateRenderer\` reads the active configuration and renders the selected sections in the correct order.

The general flow looks like this:

1. Select the active client or industry.
2. Load the matching website configuration.
3. Retrieve the default section list.
4. Resolve each section through the component registry.
5. Render the finished website.

This allows the same application to produce websites for multiple industries without duplicating the entire frontend.

## Interesting Challenges

One of the most frustrating bugs came from inconsistent identifiers.

The value in \`APP_CONFIG.client\` needed to match the corresponding keys in both \`configMap\` and \`clientConfigs\`. A single mismatch returned an undefined configuration and caused the application to fail when it attempted to access values such as \`config.theme\`.

The blank screen looked like a rendering problem, but the real cause was a naming inconsistency.

I solved this by introducing stronger TypeScript types, shared identifiers, and defensive fallbacks.

Another challenge was supporting two operating modes.

Builder mode allows me to:

- Switch industries
- Reorder sections
- Change themes
- Customize content
- Save configuration in local storage

Production mode must behave differently. It hides all editing controls, ignores old builder data, locks the selected client, and presents a finished website.

Keeping builder state from leaking into production required clear boundaries around local storage and configuration loading.

## The Tech Stack

The project uses:

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React
- Local Storage
- Playwright
- Config-driven architecture

TypeScript became especially valuable as the number of industries and components increased. Strongly typed configurations made it easier to add new templates without accidentally breaking existing ones.

Playwright was later added to automate screenshots across every industry, section, and theme.

## Lessons Learned

The biggest lesson was that configuration deserves the same discipline as application code.

A config-driven system becomes powerful only when its identifiers, interfaces, defaults, and fallbacks are reliable.

I also learned that reuse is not simply about creating generic components. Good reuse requires separating what changes from what remains stable.

In this project:

- Components provide presentation.
- Configurations provide identity and content.
- Registries provide discoverability.
- Renderers provide composition.

That separation made the platform much easier to extend.

## Final Thoughts

This project changed the way I think about website development.

Instead of creating isolated websites, I now have a platform that can generate unique client experiences from one maintainable foundation.

Adding a new client usually involves creating a configuration, selecting sections, replacing images, and registering the deployment URL.

The most rewarding part is that each new website improves the platform rather than creating another codebase to maintain.

I am no longer only building websites. I am building a system that makes future websites faster, cleaner, and more consistent.
`,
    author: "Magati Joel",
    authorImage: "/profile.png",
    imageUrl: "/projects/starter-kits/business/homepage.png",
  },
   {
slug: "building-a-cross-platform-invoice-app-with-flutter",
title: "Building a Cross-Platform Invoice App with Flutter",
date: "2026-09-14",
excerpt:
"How I evolved InvoiceEasy from a lightweight local invoice generator into an offline-first, cloud-enabled business invoicing platform built with Flutter, Supabase, and a modern cross-platform architecture.",
content: `

## Why This Project Exists

Not every small business needs a complicated accounting platform.

A freelancer, consultant, contractor, retailer, or small professional business may simply need a reliable way to manage customers, products and services, create professional invoices, track payments, and keep business records organized.

That idea inspired InvoiceEasy, a cross-platform invoicing application built with Flutter.

The project started as a lightweight local invoice generator. Over time, it evolved into something much more ambitious: an offline-first business invoicing platform with authentication, cloud synchronization, business profiles, reporting, and a foundation for subscription-based SaaS features.

The goal remains the same — keep invoicing simple while making the application powerful enough for real-world business use.

## The Problem

Creating invoices manually in Word or Excel can work, but it quickly becomes repetitive.

Users have to copy previous documents, change invoice numbers, recalculate totals, adjust table rows, export files, and make sure information from the previous client does not accidentally remain.

As businesses grow, the problem becomes larger.

Customers need to be managed separately. Products and services need to be reused. Payments need to be tracked. Old invoices need to remain accessible. Business details need to appear consistently on documents.

InvoiceEasy was designed around these everyday workflows.

The application supports:

* Creating and editing invoices
* Multiple invoice line items
* Products and services
* Customer management
* Automatic calculations
* Discounts and VAT
* Invoice status workflows
* Payment recording and payment progress
* Invoice history
* Archived invoices
* Professional PDF generation
* Printing and sharing
* Business branding and payment details
* Dashboard metrics
* Reports and exports
* Light and dark themes
* Offline-first data storage
* Cloud synchronization
* Account management
* Receipt Printing

The interface is designed to work across different screen sizes and platforms without turning a simple invoicing workflow into a complicated accounting system.

## From Local App to Cloud Platform

One of the biggest changes in InvoiceEasy was moving beyond local-only storage.

The original version relied heavily on local persistence. This was useful for an offline application, but it also meant that business data remained tied to a particular device.

A production-oriented application needs a better approach.

InvoiceEasy now uses an offline-first architecture where local data remains available while cloud synchronization provides backup and access across authenticated devices.

The application does not require an internet connection for every action.

Instead, changes can be made locally and placed into a synchronization queue. When connectivity is available, those changes can be pushed to the cloud and remote changes can be pulled back down.

This approach makes the application feel responsive while still providing the advantages of cloud storage.

## Authentication and Account Ownership

The cloud version uses Supabase for authentication and data storage.

Each authenticated InvoiceEasy account owns one business profile.

The application is business-neutral rather than tied to a particular industry. A freelancer, retail business, consultant, contractor, or professional service provider can configure their own business information and use the same core invoicing workflow.

The ownership model is intentionally simple:

User Account
→ Business Profile
→ Customers
→ Products & Services
→ Invoices
→ Payments

This avoids unnecessary business-switching complexity while maintaining clear ownership and data isolation.

Row Level Security is used on the cloud database so authenticated users can only access data belonging to their account.

## The Invoice Workflow

The invoice creation experience is built around speed.

A user can select an existing customer or create one quickly, add products or services, enter custom line items, adjust quantities and prices, apply discounts, enable VAT, and set payment terms.

Totals update automatically as the invoice changes.

The resulting invoice moves through a practical workflow rather than simply being a static document.

Users can:

* Save drafts
* Create invoices
* Send or share invoices
* Record payments
* Track outstanding balances
* Edit invoices
* Duplicate invoices
* Cancel invoices
* Archive invoices
* View invoice history

This turns InvoiceEasy from a document generator into a lightweight invoice management system.

## Customers and Products

A good invoicing application should not make users repeatedly type the same information.

InvoiceEasy therefore separates customers and products or services from individual invoices.

Customers can have reusable contact information and invoice history.

Products and services can be stored in a catalog and reused when creating new invoices.

This makes repeated invoicing significantly faster, particularly for businesses with recurring customers or standard services.

## Professional Invoice Documents

Generating a PDF is different from displaying an invoice on screen.

Instead of simply attempting to print the Flutter interface, InvoiceEasy uses a dedicated PDF layout.

This gives control over:

* A4 page dimensions
* Typography
* Tables
* Spacing
* Page breaks
* Long descriptions
* VAT breakdowns
* Payment information
* Business branding
* Notes and payment terms

Business information can include details such as a logo, KRA PIN, M-Pesa Till or Paybill information, bank details, VAT information, and other payment instructions.

The resulting document is intended to be useful both digitally and as a printable business document.

## Payment Tracking

Invoices are not finished when they are created.

InvoiceEasy includes payment tracking so a business can see how much has been paid and what remains outstanding.

Payments can be recorded against invoices, allowing the application to calculate payment progress and outstanding balances.

This information also feeds into dashboard and reporting functionality.

The aim is not to replace a full accounting package, but to provide the information a small business needs to understand its invoicing activity.

## Dashboard and Reports

The application includes a dashboard designed to provide a quick overview of business invoicing activity.

Important information can include:

* Invoice totals
* Paid amounts
* Outstanding balances
* Invoice counts
* Collection performance
* Recent invoices
* Customer activity

Reports provide a deeper view of the same data and can be exported where appropriate.

The dashboard is intentionally focused on actionable information rather than attempting to reproduce the complexity of an enterprise accounting system.

## Offline-First Architecture

One of the more important architectural decisions in InvoiceEasy is treating offline operation as a first-class feature.

Local data is stored independently from the cloud connection.

When a user creates or modifies a record, the application updates the local data immediately and records a pending synchronization change.

The synchronization layer can then:

1. Detect pending local changes
2. Push changes to the cloud
3. Pull remote changes
4. Retry failed operations
5. Resolve conflicts
6. Update local records
7. Report synchronization status

This means a temporary network failure does not have to interrupt the invoicing workflow.

The architecture also scopes local storage to the authenticated account so that users sharing the same device do not inadvertently access another user's local business data.

## Sync and Conflict Handling

Cloud synchronization introduces a new class of problems that do not exist in a purely local application.

Two devices may modify the same record.

A device may remain offline for several hours.

A network request may fail after the server has already processed the operation.

A user may log into the application for the first time on a new device and need their existing business data.

InvoiceEasy therefore uses a synchronization queue, timestamps, retry handling, cloud pull/push operations, and a defined conflict strategy.

The current approach uses last-write-wins semantics based on record update timestamps while maintaining soft-delete information for synchronized records.

The objective is not to make synchronization invisible at the expense of reliability. The application also exposes synchronization status so users can understand whether their data is synchronized, pending, or experiencing an error.

## The Tech Stack

InvoiceEasy is built with:

* Flutter
* Dart
* Material Design 3
* Riverpod
* Supabase
* Supabase Auth
* PostgreSQL
* Row Level Security
* SharedPreferences
* PDF
* Printing
* Share Plus
* Intl
* UUID
* File Picker

Flutter provides the cross-platform application layer, while Supabase provides authentication, cloud persistence, and the backend foundation.

Riverpod is used for application state and dependency management.

The PDF layer is kept separate from the interactive Flutter interface so that invoice documents can be designed specifically for printing and sharing.

## Responsive Cross-Platform Design

Cross-platform development is not simply about making the same interface compile everywhere.

A desktop invoicing application has different spatial requirements from a mobile application.

InvoiceEasy therefore uses responsive layouts to adapt navigation, forms, tables, dashboards, and invoice workflows to different screen sizes.

The application supports light and dark themes and uses Material 3 components throughout the interface.

The goal is to maintain the same product language while allowing the layout to adapt naturally to desktop, tablet, and mobile environments.

## Kenyan Business Context

Although InvoiceEasy is designed to be useful across different types of businesses, the application also considers practical requirements for Kenyan businesses.

Invoice documents can accommodate:

* Kenyan shilling currency formatting
* KRA PIN
* VAT information
* M-Pesa Till or Paybill details
* Bank payment details
* Local date formatting
* Business payment terms

These details are treated as business configuration rather than hard-coded assumptions, allowing the same application architecture to support different types of businesses.

## Interesting Challenges

One of the original Flutter challenges was managing dynamic invoice line items.

Each line item could require its own description, quantity, and price controllers. Adding or removing rows needed to keep the UI controllers synchronized with the underlying invoice model.

PDF generation introduced another challenge.

A screen can scroll indefinitely, but a PDF has fixed page boundaries. Long descriptions and large invoices therefore require proper wrapping, pagination, and layout management.

Moving to cloud synchronization introduced an entirely different category of challenges.

The application now needs to handle authentication state, local account isolation, pending changes, cloud records, network failures, retries, conflicts, and first-login data bootstrap.

These concerns require more architectural discipline than a local-only application.

## Data Architecture

The application separates its major business entities into independent models.

The core data structure can be represented as:

User
→ Business Profile
→ Customers
→ Products & Services
→ Invoices
→ Payments

Invoices contain their own line items and payment information while customers and products remain reusable records.

Cloud records contain ownership information, serialized business data, update timestamps, and soft-delete information.

This separation allows the application to maintain a simple local data model while synchronizing records with the cloud.

## SaaS Direction

The cloud architecture also provides the foundation for turning InvoiceEasy into a subscription-based SaaS product.

The planned monetization layer will introduce subscription plans and usage limits rather than making the core application unnecessarily complicated.

Potential limits can be applied to areas such as:

* Number of invoices
* Number of customers
* Number of products or services
* Cloud storage
* Online invoice features
* Payment functionality

The exact subscription structure can evolve as the product is tested with real users.

## Online Invoicing

Another planned stage is public online invoices.

Instead of sending only a PDF attachment, a business could provide a secure web link to an invoice.

A customer could open the invoice from their browser and view:

* Business information
* Invoice details
* Items
* Taxes
* Amount paid
* Outstanding balance
* Payment instructions

This creates a path from InvoiceEasy as an invoicing application toward a more complete digital invoicing platform.

## Customer Payment Links

Online invoices also create the possibility of customer payment links.

The long-term workflow is:

Invoice
→ Online Invoice
→ Payment Link
→ Customer Payment
→ Payment Confirmation
→ Updated Invoice

Payment integrations will require appropriate backend processing, transaction verification, security controls, and support for relevant payment providers.

The important part of the architecture is that payment functionality can be added without redesigning the core invoice model.

## Security

Cloud functionality also changes the security requirements of the application.

Authentication is handled through Supabase Auth.

Database access is protected using Row Level Security.

Each user's records are associated with their authenticated identity.

Administrative operations such as account deletion are kept on the server side rather than exposing privileged credentials inside the Flutter application.

This separation is important because a mobile or desktop application should never contain a database service-role credential.

## Lessons Learned

The evolution of InvoiceEasy reinforced several lessons.

First, a simple user workflow does not necessarily mean a simple architecture.

The user should be able to create an invoice in a few steps even if the application underneath has authentication, persistence, synchronization, PDF generation, reporting, and cloud infrastructure.

Second, local-first design is valuable when connectivity cannot be assumed.

Third, separating business logic from presentation makes it easier to evolve the application.

The interactive invoice form and printable invoice document are different interfaces built around the same underlying data.

Finally, features should serve the workflow.

Adding complexity simply because it is technically possible can make a business application harder to use.

## What's Next

The next stage of InvoiceEasy focuses on turning the existing cloud foundation into a production-ready SaaS platform.

The roadmap includes:

* Subscription management
* Usage limits
* Online invoices
* Customer payment links
* Payment integrations
* Improved cloud administration
* Production security hardening
* Reliability and synchronization testing
* Production deployment

The objective is to grow the application without losing the simplicity that motivated the project in the first place.

## Final Thoughts

InvoiceEasy started as a practical Flutter project focused on one problem: creating professional invoices without the repetitive work of Word or Excel.

It has since grown into a broader business application.

The current architecture combines a responsive Flutter interface, local-first storage, Supabase authentication and cloud persistence, synchronization, customer and product management, invoice workflows, payment tracking, reporting, and professional PDF generation.

It still does not try to be a complete accounting system.

Instead, it focuses on a narrower and more useful goal: making invoicing and basic invoice management faster, clearer, and more reliable for small businesses.

That focus is what makes the project interesting.

The challenge is no longer simply building an invoice screen. It is building the infrastructure around that screen so the product can remain simple for the user while becoming significantly more capable underneath.
`,
author: "Magati Joel",
authorImage: "/profile.png",
imageUrl: "/invoice-easy/cover_landscape.jpg",
},
{
  slug: "building-a-config-driven-logistics-website-starter-kit",

  title: "Building a Logistics Website",

  date: "2026-08-05",

  excerpt:
    "How I extended my multi-industry website platform with a complete logistics template featuring shipment tracking, fleet management and reusable architecture.",

  author: "Magati Joel",

  authorImage: "/profile.png",

  imageUrl: "/projects/logistics/homepage.png",

  content: `
# Hook: Why This Project Exists

Every logistics company needs an online presence, but most websites only act as digital brochures. I wanted to create something businesses could actually build upon—a modern starter kit that not only showcases services but also lays the foundation for shipment tracking, fleet management and customer self-service.

---

# The Problem

Many logistics websites share the same structure:

• Hero section

• Services

• Fleet

• Coverage

• Contact

Yet developers often rebuild these pages from scratch for every client.

As my multi-industry platform grew, I realized logistics was another perfect candidate for the same reusable architecture.

---

# My Approach

Instead of starting a new React project, I added Logistics as another industry configuration.

The application simply loads a different configuration object, which determines:

• Theme

• Navigation

• Sections

• Content

• Images

• Brand colours

The same rendering engine powers every website.

Only the configuration changes.

The logistics version introduces:

• Shipment Tracking

• Fleet Showcase

• Service Coverage

• Industries Served

• Road, Air & Sea Freight

• FAQs

• Testimonials

without changing the underlying architecture.

---

# Interesting Challenges

The biggest challenge wasn't the design—it was deciding how a real shipment tracking system should work.

Instead of creating fake animations, I designed the tracking interface around how production logistics systems operate.

Each shipment has:

• Tracking Number

• Current Status

• Current Location

• Timeline Events

• Estimated Delivery

This makes it straightforward to connect the frontend to a future backend powered by PostgreSQL or Supabase.

Another challenge was keeping the configuration clean as more industries were added.

Every new section had to be registered in:

• Component Registry

• Client Configuration

• Section Metadata

• Playwright Screenshot Tests

Maintaining consistency became increasingly important.

---

# The Tech Stack

• React

• TypeScript

• Vite

• Tailwind CSS

• Framer Motion

• Configuration-driven Architecture

• Component Registry

• Playwright

The result is a reusable platform capable of producing websites for multiple industries without duplicating code.

---

# Lessons Learned

This project reinforced how powerful configuration-driven development can be.

Instead of creating ten different projects, one codebase now powers:

• Business

• Law Firm

• Clinic

• School

• Restaurant

• Hotel

• Construction

• Real Estate

• E-Commerce

• Logistics

Adding a new industry now mostly involves creating configuration files rather than rewriting components.

---

# Final Thoughts

The logistics starter kit is another step toward building a complete library of production-ready websites.

Future improvements include:

• Live shipment tracking

• Driver portal

• Admin dashboard

• Barcode scanning

• GPS integration

• Customer notifications

The goal isn't just to build attractive websites—it's to create scalable foundations that businesses can continue growing long after launch.
`,
},


  {
    slug: "automating-data-analysis-with-google-apps-script",
    title: "Automating Data Analysis with Google Apps Script",
    date: "2024-08-15",
    excerpt:
      "Learn how a powerful Google Apps Script can transform raw Google Form data into organized, chart-ready summaries automatically.",
    content: `
## Why This Project Exists

Google Forms makes collecting information easy. The difficult part often begins after the responses arrive.

A spreadsheet filled with raw submissions is technically useful, but it is not always pleasant to read. Long answers stretch across columns, categories become difficult to compare, and creating summaries manually can take hours.

I wanted the spreadsheet to do more than store responses.

I wanted it to organize, summarize, format, and visualize the data automatically.

## The Problem

The original workflow relied heavily on manual processing.

Each new form submission added another row, but turning those rows into a useful report required repeated work:

- Rearranging information
- Grouping responses by category
- Formatting cells
- Creating readable summaries
- Calculating totals
- Building charts
- Updating reports after new submissions

The data was available, but the insights were buried inside the raw sheet.

The solution needed to work within Google Workspace so that users could continue using familiar tools without installing additional software.

## My Approach

I created a custom Google Apps Script connected to the spreadsheet.

The script reads the Google Form response sheet and generates several presentation-ready views.

One output is a detailed table-style summary with clear headings, category grouping, and color-coded formatting. Another is a card-style summary designed to make individual submissions easier to review.

For numerical responses, the script identifies suitable columns and automatically creates charts grouped by section.

I also added a custom spreadsheet menu so users can run the automation without opening the Apps Script editor.

An installable trigger allows the summary to update whenever a new form response is submitted.

The workflow became:

1. A user submits the Google Form.
2. The response is stored in Google Sheets.
3. The trigger runs the Apps Script.
4. Summary sheets are updated.
5. Charts reflect the latest data.

## Interesting Challenges

Form structures are rarely as consistent as they initially appear.

Some questions contain short text, others contain long paragraphs, and some categories contain numeric values. Empty responses also needed to be handled without creating broken cards or misleading charts.

Another challenge was making the generated output readable.

Automation can produce technically correct spreadsheets that still look terrible. I spent time refining column widths, text wrapping, spacing, section headers, background formatting, and chart placement.

The script also needed to avoid creating duplicate sheets, duplicate charts, or repeated menu items each time it ran.

Idempotency became important: running the automation twice should update the report rather than damage it.

## The Tech Stack

The project uses:

- Google Sheets
- Google Forms
- Google Apps Script
- JavaScript
- Spreadsheet triggers
- Google Charts
- Custom spreadsheet menus

Because Apps Script is built into Google Workspace, the entire solution runs without a separate server.

## Lessons Learned

Automation is most valuable when it removes work people repeat frequently.

The script does not replace Google Sheets. It makes Google Sheets behave more like a lightweight reporting system.

I also learned that formatting is part of functionality. A report that is visually organized is easier to understand, easier to present, and more likely to be used.

Finally, spreadsheet automation requires careful handling of ranges, headers, empty values, and changing form structures. Small assumptions can easily break when a new question is added.

## Final Thoughts

This project transformed a passive spreadsheet into an active reporting tool.

Raw responses now become structured summaries and visual insights with very little manual effort.

What I enjoyed most was solving the problem inside tools people already understood. There was no complex onboarding process and no new application to learn.

Sometimes the best software solution is not a completely new platform. It is a thoughtful layer of automation added to the workflow people already use.
`,
    author: "Magati Joel",
    authorImage: "/author.png",
    imageUrl: "/hero-gs.png",
  },




  {
    slug: "building-a-church-website-with-django",
    title: "Building a Community Hub: A Church Website with Django",
    date: "2024-08-08",
    excerpt:
      "Discover how to build a feature-rich church website from the ground up using the powerful Django framework, covering everything from blogs to event management.",
    content: `
## Why This Project Exists

A church website should be more than a page containing a location and Sunday service times.

It can become a digital home for sermons, announcements, events, ministries, media, and community information.

The challenge is that many church teams need to update their content regularly but may not have a developer available every time something changes.

I wanted to build a website that looked modern to visitors while remaining manageable for non-technical administrators.

## The Problem

A static website becomes outdated quickly when an organization publishes frequent announcements and events.

Church administrators need to update:

- Sermons
- News
- Upcoming events
- Ministry information
- Media content
- Service schedules
- Contact details

Editing source code for every update was not practical.

The website needed a content-management workflow, secure administration, responsive pages, and a structure that could grow as the organization added more content.

## My Approach

I selected Django because it provides a strong foundation for content-driven websites.

I created separate models for blog posts, sermons, events, ministries, and media content. These models are managed through the Django Admin dashboard, allowing authorized users to publish and update information without touching the codebase.

The frontend uses reusable Django templates so shared elements such as the header, footer, navigation, and page layout remain consistent.

I also created dedicated sections for youth, men, children, sermons, news, and upcoming activities.

The homepage acts as a summary of the entire community, while individual pages provide more detailed content.

## Interesting Challenges

Content modeling required careful planning.

A sermon is not exactly the same as a blog post. It may need a speaker, scripture reference, audio link, video link, date, series name, and downloadable notes.

Events also needed dates, times, locations, descriptions, and status handling for past and upcoming activities.

Deployment introduced another set of challenges. Static files worked locally but initially failed in production. Configuring \`ALLOWED_HOSTS\`, WhiteNoise, static directories, and the deployment environment was essential.

I also had to balance a visually rich homepage with good performance, especially when including carousels, images, and embedded YouTube videos.

## The Tech Stack

The project uses:

- Python
- Django
- Django Admin
- HTML
- CSS
- Bootstrap
- JavaScript
- WhiteNoise
- Render

Django's built-in authentication and administration tools made it possible to focus on the organization's needs rather than rebuilding common backend functionality.

## Lessons Learned

A good content-driven website starts with good data models.

If the underlying content structure is unclear, both the admin experience and public pages become difficult to maintain.

I also learned that the administrator is just as important a user as the public visitor. A beautiful website becomes less valuable if updating it is frustrating.

Deployment should also be considered early. Static files, media uploads, environment variables, and database configuration can affect architectural decisions.

## Final Thoughts

This project showed me how a website can support an active community rather than simply advertise an organization.

Django provided the reliability and structure needed for publishing content, managing users, and expanding features over time.

The most satisfying part was creating a platform that could continue serving the church after development was complete.

A successful community website should not require a developer for every announcement. It should give the organization the confidence to manage its own digital presence.
`,
    author: "Magati Joel",
    authorImage: "/author.png",
    imageUrl: "/church/hero.png",
  },

  {
    slug: "building-fintrack-ai",
    title:
      "Building FinTrack AI: An Intelligent Finance Tracker with Next.js",
    date: "2024-08-05",
    excerpt:
      "A deep dive into creating FinTrack AI, a personal finance app that uses AI for receipt scanning and offers personalized financial advice.",
    content: `
## Why This Project Exists

Most finance trackers are good at telling users what they already did.

They record expenses, display charts, and show account balances. That information is useful, but I wanted to explore a more interesting question:

What if a finance tracker could also help users understand their decisions?

That idea became FinTrack AI, a personal finance application that combines traditional expense tracking with AI-powered assistance.

## The Problem

Managing personal finances involves more than entering numbers into a spreadsheet.

Users need to:

- Record income and expenses
- Organize transactions
- Understand spending patterns
- Track budgets
- Read receipts
- Compare categories
- Make better financial decisions

Manual entry creates friction, especially when users have many small transactions.

Charts can show where money went, but they do not always explain what the user should do next.

I wanted to design an application that combined clear financial data with useful, personalized guidance.

## My Approach

I built FinTrack AI with Next.js and created a dashboard that brings transactions, budgets, accounts, and spending insights together.

Users can record expenses manually or upload receipt images. The AI workflow analyzes receipt content and extracts useful information such as the merchant, date, items, and total.

The application also includes an AI financial assistant that uses the user's financial context to generate practical observations and suggestions.

The interface includes:

- Income and expense summaries
- Category breakdowns
- Spending charts
- Recent transactions
- Budget progress
- Multi-currency support
- Receipt scanning
- AI-generated advice

The application was also designed as a Progressive Web App so it could feel more like an installed finance tool on mobile devices.

## Interesting Challenges

Financial data requires precision.

A small rounding error or inconsistent currency format can damage user trust. I needed to ensure values were handled consistently throughout forms, calculations, charts, and summaries.

Receipt extraction presented another challenge. Receipts vary significantly in layout, quality, font size, and terminology. The AI output needed validation before being treated as application data.

The financial assistant also needed guardrails. Advice should be helpful without pretending to replace a licensed financial professional.

Another challenge was keeping the dashboard informative without overwhelming the user. Too many charts can make financial information harder rather than easier to understand.

## The Tech Stack

FinTrack AI uses:

- Next.js
- React
- TypeScript
- AI workflow
- Google Gemini
- ShadCN UI
- Tailwind CSS
- Recharts
- React Hook Form
- Zod
- React Context
- Progressive Web App features

The stack provided a combination of structured forms, responsive UI, data visualization, and generative AI capabilities.

## Lessons Learned

AI-generated data should always be treated as a suggestion until it has been validated.

This was especially important for receipt scanning. The model could accelerate data entry, but users still needed the ability to review and correct the result.

I also learned that dashboards should prioritize decisions, not decoration. Every chart should answer a useful question.

Finally, financial applications require thoughtful language. Users may be dealing with sensitive situations, so the interface should feel supportive rather than judgmental.

## Final Thoughts

FinTrack AI was an opportunity to combine practical financial tooling with modern AI capabilities.

The project goes beyond recording transactions by helping users understand their financial habits and discover possible improvements.

There is still room to expand the platform with recurring transactions, savings goals, bank integrations, stronger authentication, and encrypted cloud storage.

The project reinforced an important idea: AI is most valuable when it helps users make sense of information they already have.
`,
    author: "Magati Joel",
    authorImage: "/author.png",
    imageUrl: "/fin-filled.png",
  },

  {
    slug: "building-an-expense-tracker-with-flutter",
    title: "Building an Expense Tracker with Flutter and Provider",
    date: "2024-08-02",
    excerpt:
      "A look into how I built a clean, efficient expense tracking app using Flutter, Provider for state management, and fl_chart for data visualization.",
    content: `
## Why This Project Exists

Small purchases rarely feel significant when they happen.

A snack here, transport there, a subscription renewed in the background—and suddenly the month's spending looks very different from what you expected.

I wanted to build an application that made those invisible patterns easier to notice.

The result was a simple Flutter expense tracker focused on quick entry and clear weekly insights.

## The Problem

Expense tracking often fails because entering data feels like work.

If an application requires too many screens, fields, or decisions, users stop recording transactions.

The app therefore needed to make the core workflow extremely simple:

- Add an expense quickly
- Select a category
- Edit mistakes
- Delete old entries
- View weekly spending
- Understand spending patterns visually

The data also needed to update instantly across the interface whenever a transaction changed.

## My Approach

I built the application with Flutter and used Provider for state management.

Expenses are stored in a central model that notifies the interface whenever an item is added, edited, or removed.

Instead of navigating to a separate page for every new expense, the application opens a modal bottom sheet. This keeps users close to the main dashboard and makes the entry process feel lightweight.

The weekly summary groups transactions by day and displays them using a bar chart built with \`fl_chart\`.

Users can immediately compare their spending across the week without reading through every individual transaction.

## Interesting Challenges

Date grouping was more complicated than it first appeared.

Transactions needed to be assigned to the correct day while still handling different times and empty days. The chart had to show a complete week even if no expenses existed on certain dates.

Keeping the chart synchronized with the transaction list also required a reliable state-management flow.

Another challenge was designing the bottom sheet for small screens. The keyboard could easily cover important fields or buttons, so the layout needed to respond correctly when text inputs gained focus.

Editing an existing transaction also had to reuse the same form without confusing users or duplicating logic.

## The Tech Stack

The project uses:

- Flutter
- Dart
- Provider
- Material Design
- fl_chart
- Modal bottom sheets
- Responsive layouts

Provider offered a straightforward way to keep the transaction list, totals, and charts synchronized.

## Lessons Learned

The best expense tracker is the one users will actually continue using.

That means speed and simplicity are often more important than advanced features.

I also learned that visual summaries should complement the underlying data. The chart provides a quick overview, while the transaction list provides detail.

State management became easier once I separated business logic from the widgets responsible for displaying it.

## Final Thoughts

This project may be smaller than some of my full-stack applications, but it taught me a lot about mobile interaction design.

The expense form, state updates, weekly grouping, and responsive chart all needed to feel immediate and natural.

Future versions could include categories, budgets, recurring expenses, cloud synchronization, authentication, and monthly reports.

For now, the app succeeds at its original goal: helping users notice where their money is going before the end of the month.
`,
    author: "Magati Joel",
    authorImage: "/author.png",
    imageUrl: "/ET_app.png",
  },

  {
    slug: "building-a-flutter-food-app-with-firebase",
    title: "Building a Flutter Food App with Firebase: A Deep Dive",
    date: "2024-07-28",
    excerpt:
      "Explore the architecture and key features of the Foodie App, a real-time mobile ordering application built with Flutter and Firebase.",
    content: `
## Why This Project Exists

Ordering food through an app should feel quick, visual, and almost effortless.

Users should be able to browse a menu, customize an order, add items to a cart, and continue without wondering whether the application saved their changes.

I built the Foodie App to explore how Flutter and Firebase could support that smooth, real-time experience.

## The Problem

A food-ordering application combines several moving parts:

- User authentication
- Real-time menu data
- Product categories
- Cart management
- Item customization
- Order totals
- Loading states
- Responsive mobile layouts

The menu must remain current, user sessions must remain secure, and cart interactions must feel immediate.

A slow or confusing interface can make users abandon an order before checkout.

## My Approach

I used Flutter for the mobile interface and Firebase for the backend services.

Firebase Authentication manages account creation and sign-in. Firestore stores menu categories, products, pricing, and availability.

Because Firestore provides real-time streams, menu changes can appear in the application without requiring users to refresh manually.

Provider manages local application state, including the active user, selected products, and shopping cart.

The cart supports adding items, adjusting quantities, removing products, and recalculating totals immediately.

I also implemented skeleton loading screens with shimmer effects so the interface remains visually stable while menu data is being retrieved.

## Interesting Challenges

The first challenge was coordinating remote data with local cart state.

Menu information comes from Firestore, but the cart needs to respond instantly even when network conditions are imperfect.

Another challenge was handling authentication correctly. The application needed an \`AuthGate\` that could decide whether to display the login flow or the main application while Firebase checked the current user session.

Loading states also required attention. A blank screen while Firestore loaded made the application feel slow, even when the wait was short. Skeleton placeholders improved the perceived performance significantly.

Cart totals became more complex when accounting for quantities, optional add-ons, and different item configurations.

## The Tech Stack

The Foodie App uses:

- Flutter
- Dart
- Firebase Authentication
- Cloud Firestore
- Provider
- Material Design
- Shimmer loading effects
- Slidable list interactions

Firebase reduced the amount of custom backend infrastructure required for authentication and real-time data.

## Lessons Learned

Real-time applications still need thoughtful local state management.

The backend may deliver live updates, but the interface must decide how those updates interact with the user's current actions.

I also learned that perceived performance matters. Users are more comfortable waiting when the interface clearly communicates that content is loading.

Finally, food-ordering interfaces benefit from strong visual hierarchy. Images, prices, customization options, and call-to-action buttons must remain easy to scan.

## Final Thoughts

The Foodie App brought together authentication, real-time data, mobile UI, cart logic, and responsive state management in one project.

It demonstrated how Flutter and Firebase can support a modern ordering experience without requiring a large custom backend.

Future improvements could include payments, order tracking, restaurant dashboards, delivery locations, push notifications, and customer reviews.

The project reinforced a simple principle: every second and every tap matters when users are hungry.
`,
    author: "Magati Joel",
    authorImage: "/profile.png",
    imageUrl: "/foodie_app.png",
  },

  {
    slug: "developing-a-booking-app-with-nextjs",
    title: "Developing a Full-Stack Booking App with Next.js and ShadCN UI",
    date: "2024-07-25",
    excerpt:
      "An overview of building StayZen, a feature-rich accommodation booking platform with a separate admin dashboard.",
    content: `
## Why This Project Exists

Finding accommodation online should feel exciting.

Instead, booking platforms can sometimes make the experience feel like paperwork. Users move through crowded pages, unclear filters, hidden prices, and long forms before they can reserve a room.

I created StayZen to explore a calmer and more focused accommodation-booking experience.

## The Problem

A booking platform must serve two very different audiences.

Guests need to:

- Browse properties
- Search by location
- Filter results
- View photos
- Compare prices
- Save favorites
- Select dates
- Make bookings

Administrators need to:

- Add and edit properties
- Manage rooms
- Review reservations
- Update availability
- Monitor users
- Maintain pricing and content

The application needed to keep both experiences connected without mixing their interfaces or responsibilities.

## My Approach

I built StayZen using the Next.js App Router and TypeScript.

The public-facing application focuses on discovery. Users can browse accommodation cards, open detailed property pages, explore image galleries, apply filters, save favorites, and continue into the booking flow.

A separate admin dashboard handles management tasks.

ShadCN UI and Tailwind CSS provided reusable components for forms, dialogs, cards, filters, tables, and navigation.

React Hook Form and Zod manage validated inputs throughout the admin area, reducing the risk of incomplete property and booking data.

I also added Progressive Web App support so the platform could be installed and opened with a more app-like experience.

## Interesting Challenges

Date-based availability was one of the most important challenges.

The application needed to prevent invalid date ranges and eventually support checking whether a property was already booked during the requested period.

Search and filtering also required careful state management. Location, price, property type, amenities, and guest counts all needed to work together without making the URL or interface confusing.

The image gallery presented another challenge, especially on mobile devices where screen space is limited.

Separating the customer application from the admin dashboard helped reduce complexity, but both still needed to share consistent data models and validation rules.

## The Tech Stack

StayZen uses:

- Next.js
- React
- TypeScript
- Tailwind CSS
- ShadCN UI
- React Hook Form
- Zod
- Progressive Web App features
- Responsive image galleries

The architecture was designed to support future integration with a database, authentication provider, and payment gateway.

## Lessons Learned

A booking platform is fundamentally a state-management problem.

Dates, guests, prices, availability, filters, favorites, and user sessions all influence what the interface should display.

I learned that a clear booking flow is more valuable than adding many unnecessary features. Users should always understand what step they are on and what happens next.

The admin experience also deserves the same design attention as the customer-facing website. Poor management tools eventually affect the quality of the public platform.

## Final Thoughts

StayZen allowed me to combine product discovery, responsive design, complex forms, and administrative workflows in a single project.

The application is designed around one main idea: accommodation booking should feel calm rather than complicated.

Future improvements include authentication, real availability checks, payments, reviews, maps, messaging, and booking notifications.

The project gave me a deeper appreciation for the amount of logic hidden behind a simple “Book Now” button.
`,
    author: "Magati Joel",
    authorImage: "/profile.png",
    imageUrl: "/sz.png",
  },

  {
    slug: "building-an-e-commerce-platform-with-nextjs",
    title: "Building a Full-Stack E-Commerce Platform with Next.js",
    date: "2024-07-22",
    excerpt:
      "A practical look at creating a modern online store with product management, authentication, payments, and an administrative dashboard.",
    content: `
## Why This Project Exists

An online store looks simple from the outside.

A customer browses a product, clicks “Add to Cart,” enters payment information, and receives an order confirmation.

Behind that short journey is a long chain of systems that all need to work correctly.

I built this e-commerce platform to understand those moving parts and bring them together in one modern Next.js application.

## The Problem

A complete e-commerce platform needs much more than a product grid.

It must handle:

- Product information
- Categories
- Search and filtering
- Shopping carts
- User accounts
- Inventory
- Checkout
- Payments
- Orders
- Administrative management
- Responsive design
- Security

The customer experience must remain fast and simple while the backend protects data and keeps orders accurate.

Even small inconsistencies can create serious problems. A price shown on the product page must match the amount charged at checkout. Stock levels must remain accurate. Order creation should not depend entirely on the browser.

## My Approach

I used Next.js to build both the storefront and server-side functionality.

The product catalog allows users to browse, search, filter, and open detailed product pages. Cart state tracks selected items, quantities, and totals.

Authentication provides users with access to profiles and order history.

Stripe handles secure checkout and payment processing. Rather than trusting totals submitted by the browser, the server retrieves product prices and calculates the expected amount.

The administrative dashboard provides tools for managing:

- Products
- Categories
- Orders
- Customers
- Inventory
- Store analytics

Prisma connects the application to PostgreSQL through strongly typed data models.

## Interesting Challenges

Cart state became more complicated than simply storing an array of products.

The application needed to handle duplicate items, quantity limits, price changes, removed products, empty carts, and persistence across page reloads.

Payments introduced another level of responsibility.

A successful redirect from Stripe does not always prove that an order should be considered paid. Webhooks are needed to verify payment events independently and update the database reliably.

Database relationships also required careful planning. Products, categories, images, users, orders, order items, and payments all depend on one another.

Another challenge was preventing the admin dashboard and customer storefront from becoming tightly coupled.

## The Tech Stack

The platform uses:

- Next.js
- React
- TypeScript
- Tailwind CSS
- ShadCN UI
- Prisma
- PostgreSQL
- Stripe
- Authentication
- Zod
- Vercel

Next.js allowed the storefront and backend logic to remain within one project while still keeping responsibilities separated.

## Lessons Learned

E-commerce applications require the server to remain the source of truth.

Prices, inventory, payment status, and order totals should never rely entirely on client-side values.

I also learned that checkout should contain as little friction as possible. Every additional field or unclear message increases the chance that a customer abandons the purchase.

Good database modeling made later features easier to implement. Decisions about order items, product snapshots, and payment status affected the entire system.

## Final Thoughts

Building this platform gave me a much deeper understanding of what happens behind a modern online store.

The visible interface is only one part of the product. Reliable payments, accurate data, secure server logic, and useful administrative tools are equally important.

Future improvements include wishlists, reviews, discount codes, shipping integrations, abandoned-cart recovery, email notifications, and advanced analytics.

The project showed me that the best e-commerce experience is built when complex systems work quietly behind a simple interface.
`,
    author: "Magati Joel",
    authorImage: "/author.png",
    imageUrl: "/e-com.png",
  },

  {
    slug: "leveraging-ai-for-travel-planning",
    title: "Leveraging Generative AI for Personalized Travel Itineraries",
    date: "2024-07-10",
    excerpt:
      "How I built an AI-powered travel planner that creates custom day-by-day itineraries in seconds.",
    content: `
## Why This Project Exists

Planning a trip can sometimes take longer than the trip itself.

You compare destinations, search for attractions, estimate transport costs, review hotels, calculate a budget, and attempt to fit everything into a realistic schedule.

I wanted to see whether generative AI could turn that scattered research process into a useful day-by-day itinerary.

That experiment became the AI Travel Planner.

## The Problem

Travel recommendations are easy to find, but they are often generic.

Two people visiting the same destination may want completely different experiences. One may prefer museums and quiet cafés, while another wants hiking, nightlife, and adventure activities.

A useful travel planner needed to consider:

- Destination
- Trip duration
- Budget
- Number of travelers
- Interests
- Preferred pace
- Accommodation style
- Activity preferences

The output also needed to be organized enough for users to follow rather than appearing as one large paragraph of suggestions.

## My Approach

I built the interface with React and used AI workflow to manage the generative AI workflow.

Users provide information about their trip through a simple form. The application sends those preferences to an AI flow powered by Google's Gemini model.

The prompt asks the model to create a structured itinerary containing:

- A daily theme
- Suggested activities
- Approximate times
- Meal recommendations
- Travel notes
- Budget considerations
- Practical tips

The generated plan is displayed as a sequence of daily itinerary cards.

Users can review the result, adjust their preferences, and generate a new plan when needed.

## Interesting Challenges

The biggest challenge was balancing detail with realism.

AI can easily generate an impressive list of attractions, but that does not mean the schedule is practical. Activities may be too far apart, opening times may change, and travel time may be underestimated.

I improved the prompt by asking the model to limit daily activities, consider rest periods, group nearby locations, and clearly label suggestions that require verification.

Structured output was also important. The frontend needed predictable day, time, activity, and description fields rather than loosely formatted text.

Budget estimation presented another challenge because prices vary by season, location, and availability. The application therefore treats costs as estimates rather than guarantees.

## The Tech Stack

The AI Travel Planner uses:

- React
- TypeScript
- AI workflow
- Google Gemini
- Zod
- React Hook Form
- Tailwind CSS
- Responsive itinerary components

AI workflow provided a clear way to define the prompt, model, input schema, and expected response structure.

## Lessons Learned

Generative AI works well for producing a thoughtful first draft, but it should not be treated as a live travel database.

Users still need to verify opening hours, visa requirements, ticket availability, safety information, and current prices.

I also learned that the quality of the generated itinerary depends heavily on the quality of the user's preferences. Asking better questions produces better plans.

The interface should therefore help users express what kind of traveler they are rather than only asking for a destination.

## Final Thoughts

The AI Travel Planner turns an open-ended planning task into a faster and more enjoyable starting point.

It does not attempt to replace travel professionals or real-time booking platforms. Instead, it helps users move from “I want to visit somewhere” to a structured plan they can refine.

Future improvements could include maps, saved itineraries, collaborative planning, live attraction data, hotel recommendations, weather information, and exportable PDFs.

The project demonstrated how AI can make complex planning feel lighter while still keeping the user in control.
`,
    author: "Magati Joel",
    authorImage: "/author.png",
    imageUrl: "/ait.png",
  },

  {
    slug: "designing-my-personal-portfolio",
    title:
      "How I Designed and Built My Personal Portfolio with Next.js and ShadCN UI",
    date: "2024-06-18",
    excerpt:
      "A behind-the-scenes look at creating Magati.dev, from visual direction and project presentation to deployment and AI integration.",
    content: `
## Why This Project Exists

A developer portfolio should do more than list technologies.

It should show what the developer builds, how they think, what problems they enjoy solving, and how much care they put into presenting their work.

I wanted my portfolio to feel like a real product rather than an online résumé.

That goal became Magati.dev.

## The Problem

My projects covered several different areas:

- Web applications
- Mobile applications
- Business websites
- Automation tools
- AI experiments
- Full-stack platforms

Presenting all of them in one place without creating a cluttered interface was difficult.

The website also needed to serve different visitors. Recruiters may want a quick overview of my skills. Potential clients may care more about services and completed work. Other developers may be interested in technical articles.

The portfolio needed to support all three groups while maintaining one clear identity.

## My Approach

I built the portfolio with Next.js and organized it around projects, blog posts, personal information, and contact options.

The homepage provides a short introduction and highlights selected work. The projects page presents each application with an image, summary, technology list, and live-demo link.

Dedicated project pages provide more context without overcrowding the main grid.

The blog uses structured post data with dynamic routes. Each article focuses on the reason behind a project, the technical approach, the challenges, and the lessons learned.

ShadCN UI and Tailwind CSS provided the visual foundation, while Framer Motion added restrained transitions and interaction feedback.

I also created a responsive floating header with active route indicators, theme switching, mobile navigation, service links, and contact actions.

## Interesting Challenges

Dynamic routing changed between versions of Next.js.

In newer App Router versions, route parameters may be promises. Accessing \`params.slug\` directly caused warnings and required either awaiting the parameters in server components or using the appropriate navigation hooks in client components.

Image consistency was another challenge. Screenshots from different applications had different sizes, colors, and visual density. Creating matching promotional project images helped the portfolio feel more cohesive.

The fixed header also required careful spacing so it did not cover page content on smaller screens.

Finally, I needed to decide how much source code to expose. I chose to prioritize live demos and project explanations while keeping private or commercial repositories unavailable.

## The Tech Stack

Magati.dev uses:

- Next.js
- React
- TypeScript
- Tailwind CSS
- ShadCN UI
- Framer Motion
- Lucide React
- Dynamic routes
- Dark and light themes
- Vercel
- AI workflow
- Google Gemini

AI experiments are documented as project history rather than exposed as active portfolio tools.

## Lessons Learned

Presentation changes how people understand a project.

A technically strong application can appear unfinished when screenshots, descriptions, and navigation are inconsistent.

I also learned that a portfolio should not include everything. Selecting and explaining the strongest work is more effective than showing a long list with little context.

Writing about each project forced me to think beyond features. It helped me explain why the application exists and what I learned while building it.

## Final Thoughts

Magati.dev is both a portfolio and an ongoing development project.

As my skills improve, the website evolves with new applications, articles, design refinements, and experiments.

The most important outcome is not the site itself. It is the habit of documenting my work, reflecting on technical decisions, and presenting projects with intention.

A portfolio should not only show where a developer has been. It should also suggest what they are capable of building next.
`,
    author: "Magati Joel",
    authorImage: "/profile.png",
    imageUrl: "/pf_ft.png",
  },
];
