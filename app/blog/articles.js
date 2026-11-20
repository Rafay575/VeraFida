export const articles = [
  {
    slug: "how-to-build-a-website",
    image: "/assets/img/blog-1.jpg",
    category: "Web Design",
    title: "How to build a website",
    excerpt: "Start by defining what visitors should be able to find or do on your site.",
    paragraphs: [
      "List the pages visitors need and sketch how they will move between them. Build the main navigation first, then test that people can reach each page and use the site comfortably on a small screen.",
      "Start each page with the information visitors came for. Use a clear heading, group related information, and give the page a clear next action where it makes sense.",
      "Before launch, ask someone unfamiliar with the design to complete a common task. Watch where they pause or take a wrong turn, then use those findings to refine the site.",
    ],
  },
  {
    slug: "preparing-a-website-for-launch",
    image: "/assets/img/blog-2.jpg",
    category: "Web Development",
    title: "Preparing a website for launch",
    excerpt: "Check the links, forms, and pages your visitors will rely on.",
    paragraphs: [
      "Use the production build to check every page, including pages reached directly from search or bookmarks. Submit each form with valid and invalid data, and verify where messages go before sharing the site.",
      "Check page titles, descriptions, images, and links on a phone and a desktop. Verify that your error pages give visitors a clear route back to the main site.",
      "After deployment, repeat the checks on the live address. Verify that analytics and search indexing settings reflect your launch plan.",
    ],
  },
  {
    slug: "designing-for-mobile-screens",
    image: "/assets/img/blog-3.jpg",
    category: "Web Design",
    title: "Designing for mobile screens",
    excerpt: "Make content readable and navigation easy to use on smaller screens.",
    paragraphs: [
      "Review your pages at narrow and wide screen sizes. Check that headings wrap cleanly, buttons have room around them, and visitors can complete important tasks with touch, keyboard, or a screen reader.",
      "Let columns stack when space gets tight and give images responsive widths. Keep any horizontal scrolling confined to components that explicitly need it, such as wide tables.",
      "Test on a real phone whenever possible. Device testing can expose issues with touch targets, keyboard behavior, and text scaling that are easy to miss in a desktop preview.",
    ],
  },
];

export const categories = [...new Set(articles.map(({ category }) => category))];
