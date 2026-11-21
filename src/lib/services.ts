export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  outcomes: string[];
  goodFit: string[];
  approach: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "website-development", number: "01", title: "Website Development",
    short: "Fast, responsive websites that make it easier for the right people to understand your business and take action.",
    description: "Plan and build a purposeful web presence—from company websites and service landing pages to content-rich platforms. The focus is clear messaging, accessible interfaces, responsive behaviour and a maintainable foundation.",
    outcomes: ["A clear route from visitor interest to enquiry", "Responsive experiences across mobile, tablet and desktop", "Structured pages ready for search discovery", "A maintainable website foundation"],
    goodFit: ["Your business needs a credible, modern website", "Visitors struggle to find the right service or next step", "Your current site is difficult to maintain or extend"],
    approach: ["Understand your audience, offer and conversion goal", "Shape the sitemap, page structure and content priorities", "Design and implement the responsive experience", "Review, refine and prepare the site for launch"],
    deliverables: ["Website architecture and page layouts", "Responsive frontend implementation", "Contact and enquiry pathways", "Technical SEO foundations and launch support"],
  },
  {
    slug: "custom-software", number: "02", title: "Custom Software & Business Systems",
    short: "Purpose-built systems for the workflows, records and operational challenges generic tools do not quite fit.",
    description: "Turn a defined business process into a practical software system. Work can include dashboards, record management, reporting, role-aware workflows and integrations, with careful attention to data integrity and maintainability.",
    outcomes: ["A workflow shaped around how the organisation operates", "More consistent records and process visibility", "Useful dashboards and reporting views", "A foundation that can evolve with the business"],
    goodFit: ["Teams rely on disconnected spreadsheets or manual records", "Off-the-shelf software does not fit a key workflow", "You need a focused internal or customer-facing platform"],
    approach: ["Map the current process and pain points", "Define users, data, permissions and key workflows", "Build and validate the core system incrementally", "Test real scenarios and plan deployment"],
    deliverables: ["Workflow and requirements definition", "Web-based business application", "Data model and integrations where required", "Testing, handover and technical documentation"],
  },
  {
    slug: "mobile-app-development", number: "03", title: "Mobile App Development",
    short: "Cross-platform mobile applications designed around real users, field conditions and everyday tasks.",
    description: "Build mobile experiences for customers, staff and field teams. The implementation can account for responsive layouts, device capabilities, reliable data handling and offline-aware workflows where the use case calls for them.",
    outcomes: ["A focused mobile experience for the intended users", "Consistent interaction patterns across supported devices", "Practical handling of connectivity and data synchronisation needs", "A maintainable app foundation"],
    goodFit: ["Customers or staff need a dedicated mobile workflow", "Work happens away from a desk or reliable connection", "A mobile app can simplify an existing service or process"],
    approach: ["Define users, devices and the core task journeys", "Prototype navigation and key screens", "Implement app workflows and required integrations", "Validate on target devices and prepare release"],
    deliverables: ["Mobile UX and application structure", "Cross-platform app implementation", "API and data integration as scoped", "Testing and release preparation"],
  },
  {
    slug: "business-automation", number: "04", title: "Business Automation",
    short: "Reduce repetitive work by connecting tools, standardising hand-offs and automating routine processes.",
    description: "Identify repeatable tasks and improve the way information moves between people and systems. Solutions may use scripts, scheduled jobs, forms, notifications, integrations and approval steps, selected to fit the process.",
    outcomes: ["Less repetitive manual handling", "More consistent process execution", "Clearer hand-offs and notifications", "Better visibility into routine operations"],
    goodFit: ["Staff repeatedly copy data between tools", "Important tasks depend on manual reminders", "Reports or routine documents take too long to prepare"],
    approach: ["Trace the process from trigger to completion", "Identify exceptions, risks and systems involved", "Automate the repeatable steps with appropriate checks", "Test edge cases and document ownership"],
    deliverables: ["Process review and automation plan", "Scripts, workflows or integrations", "Notifications and validation rules", "Usage notes and handover"],
  },
  {
    slug: "ai-solutions", number: "05", title: "AI Solutions & Integrations",
    short: "Useful AI features connected to real workflows—with clear boundaries, human oversight and practical value.",
    description: "Explore where AI can assist a product or process, then integrate suitable capabilities into the experience. This can include guided assistants, information extraction, summarisation and workflow support, with attention to privacy, reliability and human review.",
    outcomes: ["An AI use case tied to a defined task", "A clearer experience around AI-assisted work", "Appropriate validation and human oversight", "A measured path from prototype to useful feature"],
    goodFit: ["A team needs help navigating or summarising information", "A product could benefit from a guided assistant", "You want to test an AI idea before committing to a larger build"],
    approach: ["Define the user task and success criteria", "Check data suitability, privacy and failure modes", "Prototype and integrate the selected capability", "Evaluate responses and add guardrails"],
    deliverables: ["AI use-case assessment", "Prototype or integrated AI feature", "Prompt, workflow and validation design", "Evaluation notes and operating guidance"],
  },
  {
    slug: "digital-product-design", number: "06", title: "Digital Product Design",
    short: "Clear product journeys, useful interfaces and prototypes that help teams make better decisions before building.",
    description: "Improve how a digital product is understood and used. Work can cover user journeys, information architecture, interface design, interaction patterns and clickable prototypes that make product decisions easier to review.",
    outcomes: ["A clearer structure for key product journeys", "More consistent and understandable interfaces", "Prototypes that make ideas easier to validate", "A stronger hand-off into implementation"],
    goodFit: ["Users find a product confusing or difficult to navigate", "A new product needs its first usable interface direction", "A team needs a prototype to align before development"],
    approach: ["Understand users, context and product goals", "Map journeys and information structure", "Explore interface directions and interactions", "Prototype, review and refine the design"],
    deliverables: ["User flows and information architecture", "Interface design and component direction", "Interactive prototype where useful", "Implementation-ready design notes"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
