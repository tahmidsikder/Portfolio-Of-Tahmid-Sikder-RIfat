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
  availability: "Open to internships & collaborations",
  email: "tahmid.sikder.rifat@example.com",
  bio: `Hi, I'm Tahmid Sikder Rifat, a Computer Science and Engineering (CSE) student. I'm passionate about web development, cyber security, and modern technology. I enjoy learning new skills, building real-world projects, and continuously improving myself as a future software professional.`,
  manifesto: `I believe the best engineers are not the ones who know everything, but the ones who never stop learning. Every line of code I write today is a step toward the future I am building — one where thoughtful design, security, and curiosity converge into software that genuinely serves people.`,
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com", handle: "@tahmidsikderrifat" },
  { label: "LinkedIn", href: "https://linkedin.com", handle: "/tahmid-sikder-rifat" },
  { label: "Email", href: "mailto:tahmid.sikder.rifat@example.com", handle: "Direct" },
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
