export const services = [
  {
    slug: "cyber-security",
    title: "Cyber Security",
    icon: "fa fa-shield-alt",
    summary: "Identify security gaps and protect your systems, accounts, and data.",
    approach: "We start by reviewing your current access controls, backup practices, and security processes. From there, we help you prioritize improvements based on business impact and operational risk.",
    deliverables: ["Security posture review", "Prioritized remediation plan", "Monitoring and incident readiness guidance"],
    useCases: [
      ["Access reviews","Review who can access business systems and where permissions can be tightened."],
      ["Backup readiness","Check whether essential records can be restored and who owns the recovery process."],
      ["Incident preparation","Agree on the first actions, contacts, and escalation steps if something goes wrong."],
    ],
    questions: [
      ["Where does a review begin?","We start with the systems and accounts that would disrupt daily operations if they became unavailable."],
      ["What will we receive?","You’ll receive a prioritized list of recommendations with suggested owners and next steps."],
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    icon: "fa fa-chart-pie",
    summary: "Turn scattered business data into reports your team can act on.",
    approach: "We identify the decisions your team needs to make, review the data available, and build reports around meaningful metrics. The goal is to give teams a shared view of what is happening and where to investigate next.",
    deliverables: ["Reporting requirements and KPI definitions", "Dashboard and reporting setup", "Documentation and handover"],
    useCases: [
      ["Operations dashboards","Track turnaround times, workload, and bottlenecks in one place."],
      ["Sales reporting","Compare pipeline, revenue, and conversion trends across teams or periods."],
      ["Data quality checks","Find missing or inconsistent values before they affect recurring reports."],
    ],
    questions: [
      ["Can we start with spreadsheets?","Yes. We can use existing spreadsheets as a starting point and identify where a more reliable source would help."],
      ["Who maintains the dashboards?","We can document the data sources, update schedule, and metric definitions so your team can maintain them."],
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: "fa fa-code",
    summary: "Build responsive websites and web applications around your customers’ needs.",
    approach: "We plan the site around the tasks your visitors need to complete. From design and development through launch, we focus on responsive layouts, clear navigation, and maintainable components.",
    deliverables: ["Website structure and responsive layouts", "Front-end and integration development", "Launch testing and handover"],
    useCases: [
      ["Company websites","Build a clear, responsive site that explains what your business does and how to contact you."],
      ["Lead generation pages","Create campaign pages with focused messaging and a clear next step."],
      ["Customer portals","Give customers a dedicated place to access information or complete common tasks."],
    ],
    questions: [
      ["Can you use an existing design?","Yes. Existing designs or licensed templates can guide the layout, typography, and responsive behavior."],
      ["What happens before launch?","We review key pages, links, forms, navigation, and mobile layouts before handing the site over."],
    ],
  },
  {
    slug: "apps-development",
    title: "Apps Development",
    icon: "fab fa-android",
    summary: "Develop mobile applications for straightforward, reliable everyday use.",
    approach: "We define the core workflows, prototype the screens, and test with realistic tasks before implementation. Development proceeds in stages so your team can review working features as they become available.",
    deliverables: ["User flows and application design", "Application development and integrations", "Release preparation and handover"],
    useCases: [
      ["Field operations","Help teams capture updates and complete checklists while away from the office."],
      ["Customer self-service","Let customers track requests and access the information they use most."],
      ["Internal approvals","Bring review tasks and notifications into a workflow that staff can use on mobile."],
    ],
    questions: [
      ["Can we start with a prototype?","Yes. A prototype lets your team test the most important workflows before committing to development."],
      ["How do we decide what to build first?","We prioritize the workflows users need most and define a first release around those tasks."],
    ],
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    icon: "fa fa-search",
    summary: "Improve how search engines discover and understand your site.",
    approach: "We review how pages are structured, linked, and indexed, then prioritize changes that make the site clearer for visitors and search engines. We also establish a baseline so your team can track progress.",
    deliverables: ["Technical SEO review", "On-page recommendations", "Search performance measurement plan"],
    useCases: [
      ["Site migrations","Plan URL redirects and check indexing as pages move to a new platform."],
      ["Service page improvements","Clarify page titles, headings, and internal links around the services visitors search for."],
      ["Search performance reviews","Use search data to identify pages with opportunities to improve visibility."],
    ],
    questions: [
      ["What does a technical review cover?","It can cover crawlability, redirects, page titles, and how search engines find your main pages."],
      ["How is progress measured?","We establish a baseline and track relevant measures such as search impressions, clicks, and indexed pages."],
    ],
  },
];
