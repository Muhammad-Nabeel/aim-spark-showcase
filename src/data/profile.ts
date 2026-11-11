// Single source of truth for the portfolio. Content mirrors the 2026 CV.

export const profile = {
  name: "Muhammad Nabeel",
  title: "Lead Full-Stack & AI Automation Engineer",
  yearsExperience: "~10",
  location: "Lahore, Pakistan",
  availability: "Open to full-time roles in Europe · Requires visa sponsorship · Ready to relocate",
  email: "nabeelfarooq7000@gmail.com",
  phone: "+92 323 8864614",
  phoneHref: "tel:+923238864614",
  whatsappHref: "https://wa.me/923238864614",
  linkedin: "https://www.linkedin.com/in/muhammad-nabeel-3311458a/",
  github: "https://github.com/Muhammad-Nabeel",
  // Place the PDF at public/m_nabeel_resume_2026.pdf
  cvUrl: `${import.meta.env.BASE_URL}m_nabeel_resume_2026.pdf`,
  summary: [
    "Full-stack engineer with nearly 10 years of experience building production systems in travel, live broadcasting and business automation. I started as a .NET developer and now work across Next.js, React, NestJS, Node.js, Python and PHP, owning features from database design to deployment.",
    "Much of my work has run under tight real-time constraints: live flight booking and ticketing through the Amadeus API, on-air graphics control for live sports broadcasts, and GPS tracking of field staff. Since December 2024 I have led engineering at AIM Digital UK, building AI automation pipelines, a travel CRM and a staff attendance platform. I also work directly with clients to scope requirements and turn them into working software.",
  ],
};

export const highlights = [
  { value: "~10 yrs", label: "Shipping production software" },
  { value: "Real-time", label: "Flight booking, live broadcast, GPS" },
  { value: "Lead", label: "Engineering at AIM Digital UK" },
  { value: "End-to-end", label: "Database → API → UI → deployment" },
];

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  intro: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Lead Software & AI Automation Engineer",
    company: "AIM Digital UK Limited",
    companyUrl: "https://aimdigitallimited.co.uk",
    location: "Kington, United Kingdom",
    period: "Dec 2024 – Present",
    intro:
      "Lead engineer at a UK company (founded 2024) building AI automation, SaaS and web products for businesses. I take each product from idea to production, from database design and APIs through to the dashboards and mobile apps people use every day.",
    points: [
      "Staff attendance & GPS tracking: built a platform that records attendance through devices and tracks field staff location in real time from a mobile app, with a Next.js dashboard giving managers live visibility.",
      "AI content automation: built a three-workflow n8n system publishing to LinkedIn, Facebook, Instagram and Pinterest. It plans weekly content with the Claude API from live web trends, generates images and video daily through fal.ai, and sends health alerts to Telegram. Supabase holds the queue and configuration; Cloudflare R2 stores media.",
      "Travel CRM: designing a CRM for travel agencies with NestJS, Next.js, Prisma and PostgreSQL, structured on SOLID principles with Zod validation across the stack.",
      "AI lead distribution: built Python services that assign leads automatically and track their progress.",
      "APIs & DevOps: design secure REST APIs, integrate payment, messaging and social platforms, and run CI/CD pipelines and Docker deployments on Linux servers.",
      "Client work: gather requirements, scope work and write technical proposals directly with clients, then lead delivery.",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Python", "n8n", "Claude API", "Supabase", "Docker"],
  },
  {
    role: "MERN Stack Engineer",
    company: "Travel Channel Int'l Pvt Ltd (Faremakers.com)",
    companyUrl: "https://www.faremakers.com/",
    location: "Lahore, Pakistan",
    period: "May 2023 – Nov 2024",
    intro:
      "Back-end engineer on Faremakers.com, one of Pakistan's online travel booking platforms. I connected the site to the global airline booking system so customers could search, book and receive tickets in real time.",
    points: [
      "Integrated the Amadeus Enterprise API into the NestJS back-end, enabling live flight search, booking and ticket issuance directly on the website.",
      "Rebuilt the booking journey so customers see live availability and get a confirmed ticket in a single session.",
      "Strengthened payment and transaction handling for faster, more reliable checkout.",
      "Replaced manual booking and ticketing steps with automated processes, reducing operational workload.",
    ],
    stack: ["NestJS", "Node.js", "React", "Amadeus API", "Payments"],
  },
  {
    role: "Solutions Developer",
    company: "FastSports.tv",
    companyUrl: "https://www.fastsports.tv/",
    location: "Lahore, Pakistan",
    period: "Jan 2022 – Apr 2023",
    intro:
      "Developer in the live production team of a sports broadcaster. I built the software that drives on-air graphics during live matches, where any delay or error is seen by viewers instantly.",
    points: [
      "Built a .NET system that controls Vizrt graphics and rendering engines from the production control room.",
      "Automated real-time text replacement so scores, names and stats on screen update the moment the game changes.",
      "Added command-based triggers that let directors fire graphics and scene transitions on cue.",
      "Integrated the system into the existing Vizrt infrastructure, where it ran reliably through live events.",
    ],
    stack: ["C#", ".NET", "Vizrt", "Real-time systems"],
  },
  {
    role: "Senior .NET Developer",
    company: "Faremakers.com",
    companyUrl: "https://www.faremakers.com/",
    location: "Lahore, Pakistan",
    period: "Aug 2017 – Dec 2021",
    intro:
      "Core developer on the team that built Faremakers.com and the CRM behind it, connecting marketing, sales and customer support so every lead and conversation landed in one system.",
    points: [
      "Co-built the Faremakers website and its integrated CRM, linking customer bookings to sales and support tracking.",
      "Pulled leads from Facebook Lead Ads (advanced API access) and Google Ads forms straight into the CRM, with no manual entry.",
      "Built two-way WhatsApp chat through the Infobip API, with webhooks for real-time messages and support for PDFs, images and audio.",
      "Developed a private Android app in Java that automated the telemarketing workflow, connected to CRM microservices for live customer data.",
    ],
    stack: ["C#", "ASP.NET", "ADO.NET", "SQL Server", "Infobip", "Java (Android)"],
  },
  {
    role: "Web Programmer",
    company: "SolutionWin Technologies",
    companyUrl: "https://solutionwin.com",
    location: "Lahore, Pakistan",
    period: "Aug 2016 – Jul 2017",
    intro:
      "Web developer at a software agency, building websites for retail and service clients in Pakistan, the UAE and Egypt.",
    points: [
      "Samir & Aly: built a responsive e-commerce platform; online sales rose 35% after launch.",
      "Busy Bees Dubai: integrated Google Maps and location services and streamlined registration, cutting manual effort by 40%.",
      "Babolat: contributed to the website's design and front-end build.",
    ],
    stack: ["Shopify", "Liquid", "JavaScript", "jQuery", "SCSS"],
  },
];

export type Project = {
  title: string;
  context: string;
  problem: string;
  outcome: string;
  tech: string[];
  links?: { label: string; href: string; kind: "live" | "code" }[];
  status?: string;
};

export const projects: Project[] = [
  {
    title: "AI Content Automation Pipeline",
    context: "AIM Digital UK",
    problem:
      "Keeping four social channels active with relevant content took hours of manual planning and design every week.",
    outcome:
      "Three n8n workflows plan weekly content with the Claude API from live web trends, generate images and video daily via fal.ai, publish to LinkedIn, Facebook, Instagram and Pinterest, and alert on failures through Telegram.",
    tech: ["n8n", "Claude API", "fal.ai", "Supabase", "Cloudflare R2", "Telegram Bot API"],
  },
  {
    title: "Staff Attendance & GPS Tracking Platform",
    context: "AIM Digital UK",
    problem:
      "Managers had no reliable, live view of who was on shift and where field staff were working.",
    outcome:
      "Device-based attendance plus real-time location from a mobile app, surfaced in a Next.js dashboard showing attendance, location and field activity as it happens.",
    tech: ["Next.js", "React", "Node.js", "Mobile app", "Real-time GPS"],
  },
  {
    title: "Travel Agency CRM",
    context: "AIM Digital UK",
    status: "In development",
    problem: "Travel agencies juggle leads, bookings and follow-ups across disconnected tools.",
    outcome:
      "A CRM built on NestJS, Next.js, Prisma and PostgreSQL, designed around SOLID principles with Zod validation shared across the stack.",
    tech: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Zod", "TypeScript"],
  },
  {
    title: "Live Flight Booking with Amadeus",
    context: "Faremakers.com · 2023–2024",
    problem:
      "Customers couldn't complete a booking online: availability and ticketing relied on manual steps by agents.",
    outcome:
      "Amadeus Enterprise API integrated into the NestJS back-end, so customers search, book and receive a confirmed ticket in a single session, with hardened payment handling.",
    tech: ["NestJS", "Node.js", "React", "Amadeus Enterprise API", "Payments"],
    links: [
      { label: "faremakers.com", href: "https://www.faremakers.com/", kind: "live" },
      { label: "Back-end", href: "https://github.com/TravelChannel/Faremakers-Backend", kind: "code" },
      { label: "Front-end", href: "https://github.com/TravelChannel/Faremakers-React", kind: "code" },
    ],
  },
  {
    title: "On-Air Graphics Control for Live Sports",
    context: "FastSports.tv · 2022–2023",
    problem:
      "On-screen scores and stats during live matches had to change instantly, with zero tolerance for errors in front of viewers.",
    outcome:
      ".NET control system driving Vizrt rendering engines, with automated real-time text replacement and director-triggered graphics and transitions. It ran reliably through live events.",
    tech: ["C#", ".NET", "Vizrt", "Real-time"],
  },
  {
    title: "Faremakers CRM, Lead Capture & WhatsApp",
    context: "Faremakers.com · 2017–2021",
    problem:
      "Leads from ads and customer conversations were scattered across platforms and re-typed by hand.",
    outcome:
      "An integrated CRM that ingests Facebook Lead Ads and Google Ads leads automatically, two-way WhatsApp chat via Infobip webhooks (text, PDFs, images, audio), and an Android call-centre app wired to CRM microservices.",
    tech: ["C#", ".NET", "ADO.NET", "SQL Server", "Infobip", "Facebook Lead Ads API", "Java"],
    links: [
      { label: "Source", href: "https://github.com/TravelChannel/TravelChannel-CRM", kind: "code" },
    ],
  },
  {
    title: "E-commerce & Client Websites",
    context: "SolutionWin Technologies · 2016–2017",
    problem: "Retail and service clients in Pakistan, the UAE and Egypt needed sites that converted.",
    outcome:
      "Samir & Aly e-commerce platform (+35% online sales after launch); Busy Bees Dubai maps and streamlined registration (−40% manual effort); front-end work for Babolat.",
    tech: ["Shopify", "Liquid", "JavaScript", "jQuery", "Google Maps API"],
    links: [
      { label: "samirandaly.com", href: "https://samirandaly.com/", kind: "live" },
      { label: "babolat.com", href: "https://www.babolat.com/", kind: "live" },
    ],
  },
  {
    title: "iTraveller: Public Transport App (BSc Thesis)",
    context: "University of Lahore · 2016",
    problem: "Commuters lacked real-time information about nearby bus stops, routes and timings.",
    outcome:
      "Android app showing current location, nearby stops and routes, backed by a web admin panel and a custom route-mapping database that removed the dependency on Google Places.",
    tech: ["Android", "Java", "Web admin panel", "SQL"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C#", "Python", "PHP", "Java", "SQL"],
  },
  {
    title: "Front-end",
    skills: ["React", "Next.js", "Tailwind CSS", "DaisyUI", "HTML5", "CSS3"],
  },
  {
    title: "Back-end",
    skills: ["Node.js", "NestJS", "Express", ".NET / ASP.NET", "REST APIs", "Prisma", "Zod", "Microservices"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "Supabase", "Database design"],
  },
  {
    title: "AI & Automation",
    skills: ["n8n", "Claude API", "fal.ai", "Webhooks", "AI lead routing", "No-code tooling"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "CI/CD", "Linux servers", "Cloudflare R2", "Git / GitHub"],
  },
  {
    title: "Integrations",
    skills: ["Amadeus", "Sabre", "Infobip (WhatsApp/SMS)", "Facebook Lead Ads", "Google Ads", "Payment gateways", "Vizrt"],
  },
  {
    title: "Practices",
    skills: ["SOLID / OOP", "Real-time systems", "Requirements & scoping", "Technical proposals", "Team leadership"],
  },
];

// CEFR levels, as stated on the CV
export const languages = [
  { name: "Urdu", level: "Native", detail: "Mother tongue" },
  { name: "English", level: "B2", detail: "Professional working proficiency (reading B1)" },
  { name: "Dutch", level: "A1", detail: "Beginner, learning" },
  { name: "Chinese", level: "A1", detail: "Beginner" },
];

export const education = [
  {
    degree: "BSc Computer Science",
    school: "University of Lahore",
    period: "2012 – 2016",
    detail:
      "EQF level 6 · 133 credits · Thesis: iTraveller Android application with admin panel",
  },
  {
    degree: "HSSC (Higher Secondary School Certificate)",
    school: "Govt Islamia College, Railway Road, Lahore",
    period: "2010 – 2012",
    detail: "EQF level 4 · Chemistry, Mathematics",
  },
];

export const extras = {
  licences: "Driving licence: categories A2 and B",
  interests:
    "Cricket and basketball (former vice-captain of my basketball team); Carrom with family.",
};
