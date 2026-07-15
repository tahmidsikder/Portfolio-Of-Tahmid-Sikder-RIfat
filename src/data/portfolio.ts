/**
 * Single source of truth for all personal content.
 * Edit values here — every section reads from this file.
 */

export const profile = {
  name: "Tahmid Sikder Rifat",
  firstName: "Tahmid",
  lastName: "Sikder Rifat",
  initials: "TSR",
  title: "Computer Science & Engineering Student",
  subtitle:
    "Passionate about Web Development, Cyber Security, and Modern Technology.",
  location: "Sylhet, Bangladesh",
  timezone: "Asia/Dhaka",
  availability: "Open to Academic Research & Collaborations",
  email: "tahmidsikderrifat@gmail.com",
  phone: "+8801817936248",
  phoneDisplay: "+88 01817 936248",
  linkedin: "https://www.linkedin.com/in/tahmidsikder/",
  bio: `Hi, I'm Tahmid Sikder Rifat, a Computer Science and Engineering (CSE) student. I'm passionate about web development, cyber security, and modern technology. I enjoy learning new skills, building real-world projects, and continuously improving myself as a future software professional.`,
  manifesto: `I believe the best engineers are not the ones who know everything, but the ones who never stop learning. Every line of code I write today is a step toward the future I am building — one where thoughtful design, security, and curiosity converge into software that genuinely serves people.`,
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tahmidsikder/", handle: "/in/tahmidsikder" },
  { label: "Email", href: "mailto:tahmidsikderrifat@gmail.com", handle: "tahmidsikderrifat@gmail.com" },
  { label: "Phone", href: "tel:+8801817936248", handle: "+88 01817 936248" },
] as const;

export const marqueeRows = {
  top: [
    "Web Development",
    "Cyber Security",
    "WordPress",
    "Linux Mint",
    "HTML & CSS",
    "Git & GitHub",
    "Photography",
    "Problem Solving",
  ],
  bottom: [
    "Curiosity",
    "Craft",
    "Discipline",
    "Systems Thinking",
    "Continuous Learning",
    "Clean Code",
    "Security Mindset",
    "Design Sensibility",
  ],
} as const;

export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
  achievement?: string;
  status: "current" | "completed" | "transferred";
};

export const education: EducationEntry[] = [
  {
    institution: "Metropolitan University",
    degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
    period: "Summer 2026 — Present",
    detail:
      "Currently pursuing my undergraduate degree, focusing on software engineering, algorithms, and systems.",
    status: "current",
  },
  {
    institution: "National University",
    degree: "Bachelor of Social Science (BSS) in Economics",
    period: "Transferred",
    detail:
      "Started in Economics before transferring to Metropolitan University to pursue Computer Science and Engineering.",
    status: "transferred",
  },
  {
    institution: "Sylhet Cantonment Public School & College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "Passed 2024",
    achievement: "GPA 5.00 / 5.00",
    status: "completed",
  },
  {
    institution: "Sylhet Cantonment Public School & College",
    degree: "Secondary School Certificate (SSC)",
    period: "Passed 2022",
    achievement: "GPA 5.00 / 5.00",
    status: "completed",
  },
];

export type SkillGroup = {
  category: string;
  index: string;
  skills: { name: string; level: "learning" | "practiced" | "natural" }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Technical",
    index: "01",
    skills: [
      { name: "WordPress", level: "practiced" },
      { name: "HTML & CSS", level: "learning" },
      { name: "Linux Mint", level: "practiced" },
      { name: "Git & GitHub", level: "learning" },
    ],
  },
  {
    category: "Creative",
    index: "02",
    skills: [
      { name: "Photography", level: "natural" },
      { name: "Basic Photo Editing", level: "practiced" },
    ],
  },
  {
    category: "Soft Skills",
    index: "03",
    skills: [
      { name: "Problem Solving", level: "natural" },
      { name: "Quick Learner", level: "natural" },
      { name: "Teamwork", level: "natural" },
    ],
  },
];

export const focusAreas = [
  {
    n: "01",
    title: "Web Development",
    body: "Building clean, responsive, and accessible interfaces — from WordPress sites to hand-crafted HTML & CSS, with an eye for both form and function.",
  },
  {
    n: "02",
    title: "Cyber Security",
    body: "Developing a security-first mindset — understanding how systems are attacked, hardened, and defended. The web is only as strong as its weakest endpoint.",
  },
  {
    n: "03",
    title: "Modern Technology",
    body: "Staying current with emerging tools, frameworks, and paradigms. Curiosity is not a phase — it is the operating system of a software career.",
  },
];

export type Project = {
  index: string;
  name: string;
  nameDisplay: string[]; // split lines for hero typography
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
  url: string;
  urlLabel: string;
  year: string;
  collaboration: "solo" | "team";
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Emergency Plumbing Group 247",
    nameDisplay: ["Emergency", "Plumbing Group", "247"],
    role: "Frontend & WordPress Developer (Collaborative Project)",
    collaboration: "team",
    description:
      "A UK-based 24/7 emergency plumbing service platform built in collaboration with a teammate. Developed the website in WordPress with a responsive design, designed service pages with user-friendly navigation, and optimized the experience for both desktop and mobile devices.",
    highlights: [
      "Developed the website in collaboration with a teammate",
      "Built using WordPress with a responsive design",
      "Designed service pages and user-friendly navigation",
      "Optimized the website for desktop and mobile devices",
    ],
    technologies: ["WordPress", "Elementor", "HTML", "CSS"],
    url: "https://emergencyplumbinggroup247.co.uk/",
    urlLabel: "emergencyplumbinggroup247.co.uk",
    year: "2024",
  },
  {
    index: "02",
    name: "Unilof",
    nameDisplay: ["Unilof"],
    role: "WordPress Website Developer",
    collaboration: "solo",
    description:
      "A clean, modern website designed and developed independently end-to-end. Built from the ground up in WordPress with custom Elementor layouts, implemented responsive layouts for all devices, and customized the website based on the client's requirements.",
    highlights: [
      "Designed and developed the complete website independently",
      "Created a clean and modern user interface",
      "Implemented responsive layouts for all devices",
      "Customized the website based on client requirements",
    ],
    technologies: ["WordPress", "Elementor", "HTML", "CSS"],
    url: "https://unilof.com/",
    urlLabel: "unilof.com",
    year: "2024",
  },
];

export const certification = {
  title: "Basic Web Development Training",
  issuer: "Youth ICT",
  year: "2023",
  regNo: "202064",
  verificationUrl:
    "https://youthict.org/result-verification?reg_no=202064&dob=2023-05-17",
  description:
    "Foundational training in modern web development — covering HTML, CSS, and the principles of building accessible, responsive interfaces. Verified credential issued by Youth ICT.",
} as const;
