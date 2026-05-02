export const profile = {
  name: "Moloy Krishna Paul",
  nickname: "Moy",
  title: "Full Stack Web Developer",
  subtitle: "I build responsive, accessible digital experiences for the web.",
  location: "Jashore, Bangladesh",
  email: "moloykrishnapaul@gmail.com",
  github: "https://github.com/iMoloy",
  linkedin: "https://linkedin.com/in/imoloy",
  telegram: "https://t.me/iMoloy",
  facebook: "https://www.facebook.com/iMoloy/",
  twitter: "https://twitter.com/iMoloy",
  hireable: true,
  avatar: "https://avatars.githubusercontent.com/u/69084552?v=4",
};

export const about = [
  `Hi, you can call me <a class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors" href="https://www.facebook.com/iMoloy/" target="_blank" rel="noreferrer noopener">Moy</a>. A full stack web developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.`,
  `I have experience with both front-end and back-end development, including React, Node.js, Express.js, and MongoDB. I'm also experienced in QA engineering and web application testing, with a strong familiarity with Linux environments and Git-based workflows.`,
  `In my spare time, I'm usually reading manga, gaming, or learning new languages.`,
];

export const experience = [
  {
    id: 1,
    period: "Jan 2025 — Present",
    role: "Full Stack Web Developer",
    company: "MERN Stack",
    companyUrl: "https://moloy.is-a.dev",
    description:
      "Full-Stack Web Developer passionate about building scalable and user-centric web applications. I specialize in the MERN stack and leverage my background in quality assurance to deliver robust, high-performance, and test-driven codebases.",
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Node JS", "Express JS", "MongoDB", "Firebase"],
  },
  {
    id: 2,
    period: "Nov 2025 — Mar 2026",
    role: "QA Engineer",
    company: "DigitX",
    companyUrl: "https://digitxgroup.com",
    description:
      "Tested web applications remotely and identified functional issues across multiple products. Created structured bug reports and verified fixes to ensure quality standards were met.",
    tech: ["Manual Testing", "Bug Reporting", "Web App Testing"],
  },
  {
    id: 3,
    period: "Jan 2023 — Dec 2024",
    role: "Pharmacy Assistant",
    company: "Brindra Pharmacy",
    companyUrl: null,
    description:
      "Handled customer service and product management, ensuring smooth day-to-day operations and a positive in-store experience.",
    tech: ["Customer Service", "Product Management"],
  },
  {
    id: 4,
    period: "Oct 2022 — Dec 2022",
    role: "Telesales Executive",
    company: "Chaldal",
    companyUrl: "https://chaldal.com",
    description:
      "Conducted outbound sales calls and engaged customers to drive conversions for Bangladesh's leading online grocery platform.",
    tech: ["Outbound Sales", "Customer Engagement"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Tiles Gallery",
    url: "https://tiles-gallery-six.vercel.app",
    github: "https://github.com/iMoloy/tiles-gallery",
    description:
      "A full-stack image gallery application with dynamic tile layouts, user authentication, and real-time updates built on the MERN stack.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 2,
    name: "Digi Tools",
    url: "https://moloy-digitools.netlify.app/",
    github: "https://github.com/iMoloy/DigiTools",
    description:
      "Digital tools marketplace with a dynamic product catalog and user feedback system.",
    tech: ["React", "JavaScript", "DaisyUI", "Tailwind CSS", "GitHub API"],
    featured: true,
  },
  {
    id: 3,
    name: "GitHub Issues Tracker",
    url: "https://imoloy.github.io/githubIssuesTracker",
    github: "https://github.com/iMoloy/githubIssuesTracker",
    description:
      "A web application for tracking project issues with a dynamic, responsive UI. Fetches and displays GitHub issues in real time with a clean layout built using vanilla JavaScript and Tailwind CSS.",
    tech: ["JavaScript", "Tailwind CSS", "HTML", "GitHub API"],
    featured: true,
  },
  {
    id: 4,
    name: "Job Application Tracker",
    url: "https://imoloy.github.io/jobApplicationTracker/",
    github: "https://github.com/iMoloy/jobApplicationTracker",
    description:
      "A tool for managing and organising job applications with an interactive UI. Track application status, dates, and notes in one place with a fully responsive layout.",
    tech: ["JavaScript", "HTML", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 5,
    name: "Keen Keeper",
    url: "https://keen-keeper-moloy.vercel.app",
    github: "https://github.com/iMoloy/keen-keeper",
    description:
      "A productivity and note-keeping application with a clean, modern interface for managing tasks and notes efficiently.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    featured: false,
  },
];

export const skills = [
  { category: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Firebase"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Linux", "Postman"] },
  { category: "QA", items: ["Manual Testing", "Bug Reporting", "Web App Testing"] },
];

export const education = [
  {
    id: 1,
    period: "2020 — Ongoing",
    degree: "Master of Social Science (MSS)",
    institution: "Govt. Michael Madhusudan College",
    description: "Affiliated with National University, Bangladesh. Currently in my final year.",
  },
  {
    id: 2,
    period: "2016 — 2020",
    degree: "Bachelor of Social Science (BSS)",
    institution: "Govt. Michael Madhusudan College",
    description: "Completed undergraduate studies with a focus on social sciences.",
  },
  {
    id: 3,
    period: "2026",
    degree: "Complete Full Stack Web Development",
    institution: "Programming Hero",
    description: "Intensive professional training program covering the MERN stack (MongoDB, Express.js, React, Node.js).",
  },
  {
    id: 4,
    period: "Completed",
    degree: "Software Engineering Certifications",
    institution: "Simplilearn",
    description: "Earned certifications across various domains to strengthen my development and testing skills.",
    links: [
      { name: "Full Stack Developer Course", url: "https://simpli-web.app.link/e/dg5jnzNBWXb" },
      { name: "Introduction to Front-End Development", url: "https://simpli-web.app.link/e/aDurUJPA2Yb" },
      { name: "Introduction to Software Testing", url: "https://simpli-web.app.link/e/WyrBZL7KRXb" },
      { name: "Automation Testing Basics", url: "https://simpli-web.app.link/e/PsIJt61YQYb" },
    ]
  }
];

export const problemSolving = [
  {
    id: 1,
    platform: "LeetCode",
    username: "iMoloy",
    solved: "150+ Problems",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    link: "https://leetcode.com/u/iMoloy"
  },
  {
    id: 2,
    platform: "HackerRank",
    username: "iMoloy",
    solved: "5 Star in Problem Solving",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    link: "https://hackerrank.com/iMoloy"
  },
  {
    id: 3,
    platform: "Codeforces",
    username: "iMoloy",
    solved: "Pupil",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Codeforces_logo.svg",
    link: "https://codeforces.com/profile/iMoloy"
  }
];
