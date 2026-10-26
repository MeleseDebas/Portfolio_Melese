import {
  Code2,
  Server,
  Cloud,
  Database,
  Palette,
  Smartphone,
  Github,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react';

export const personalInfo = {
  name: 'Melese Debas',
  title: 'Full Stack Developer',
  tagline: 'I build accessible, performant web applications from concept to deployment.',
  email: 'mella44636@gmail.com',
  location: 'Addis Ababa, Ethiopia',
  social: {
    github: 'https://github.com/MeleseDebas',
    linkedin: 'https://linkedin.com/in/melese-debas-503b01374',
    telegram: 'https://t.me/melese10',
    whatsapp: 'https://wa.me/251910741033',
  },
  stats: [
    { label: 'Years Experience', value: 3, suffix: '+' },
    { label: 'Projects Shipped', value: 12, suffix: '+' },
    { label: 'Happy Clients', value: 6, suffix: '+' },
    { label: 'Open Source Stars', value: 600, suffix: '+' },
  ],
};

export const aboutParagraphs = [
  "I'm a full stack developer with a passion for crafting digital experiences that are both beautiful and functional. With 3+ years building web applications, I specialize in the React ecosystem and Node.js backend architecture.",
  "I believe great software is born from empathy — understanding the user, the business, and the constraints. I thrive at the intersection of design and engineering, where clean code meets thoughtful UX.",
  "When I'm not shipping features, you'll find me contributing to open source, mentoring junior developers, or exploring the latest in web platform standards.",
];

export const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Vite', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Python', 'WebSockets'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma', 'Drizzle ORM'],
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Cloudflare', 'Linux'],
  },
  {
    icon: Palette,
    title: 'Design',
    skills: ['Figma', 'Design Systems', 'Accessibility', 'Responsive Design', 'Prototyping'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: ['React Native', 'PWA', 'Expo', 'Responsive Layouts'],
  },
];

export const projects = [
  {
    title: 'AI Based Tour Guide System',
    category: 'Full Stack, Final Year Porject',
    description:
      'Final year project: an AI-powered web and mobile app built on the MERN stack, with tour suggestions, an interactive map guide, a chatbot, and VR previews.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    featured: true,
    links: { github: '#', live: '#' },
  },
  {
    title: 'School Management System',
    category: 'Full Stack, Freelance',
    description:
      'A responsive web app that manages student enrollment, attendance, and grading using an HTML/CSS/JS frontend and a PHP/XAMPP MySQL backend.',
    tech: ['HTML', 'css', 'javaScript', 'PHP', 'Xamp'],
    gradient: 'from-orange-500/20 to-rose-500/20',
    featured: true,
    links: { github: '#', live: '#' },
  },
  {
    title: 'Network Design',
    category: 'Han Health Center, Bahir Dar',
    description:
      'Designed a secure enterprise network with a server farm, firewall, and ACLs. Configured NAT/PAT, inter-VLAN routing, VLANs, and port security for scalability and performance.',
    tech: ['NAT/PAT', 'Routing', 'vlans', 'Firewall', 'Access-control'],
    gradient: 'from-violet-500/20 to-indigo-500/20',
    featured: false,
    links: { github: '#', live: '#' },
  },
  {
    title: 'Gion Network Design',
    category: 'Gion Building, Bahir Dar',
    description:
      'Designed a secure enterprise network with a server farm, firewall, and ACLs. Configured NAT/PAT, inter-VLAN routing, VLANs, and port security for scalability and performance.',
    tech: ['VoIP', 'NAT/PAT', 'Access-control', 'Firewall'],
    gradient: 'from-teal-500/20 to-green-500/20',
    featured: false,
    links: { github: 'https://github.com/MeleseDebas/GION-Building-Network-Design', live: '#' },
  },
];

export const experience = [
  {
    icon: Briefcase,
    role: 'IS Operation Officer',
    company: 'Nib International Bank',
    period: '2025, Jan — Present',
    description:
      'Lead developer on the analytics team. Architected real-time data pipeline handling 50M+ daily events. Mentored 4 engineers and drove adoption of edge-first architecture.',
    achievements: ['Reduced p99 latency by 60%', 'Shipped 12 major features', 'Led migration to Edge Runtime'],
  },
  {
    icon: Briefcase,
    role: 'Fiber Packet Switching',
    company: 'Ethiotelecom, ET',
    period: '2025, OCT - Dec',
    description:
      'Experienced in enterprise network infrastructure, specializing in core fiber optics, packet switching, metro/backbone networks, and corporate office IT installations.',
    achievements: ['Fiber Optic', 'Enterprise Networking', 'Improve my network skill'],
  },
  {
    icon: Briefcase,
    role: 'IT Support',
    company: 'Freelance',
    period: '2025, Aug - Sep',
    description:
      'Freelance IT Support Specialist specializing in network setup, office IT infrastructure, CCTV camera installation, and satellite dish configuration.',
    achievements: ['CCTV camera', 'Network troubleshooting', 'computer setup'],
  },
  {
    icon: GraduationCap,
    role: 'BSC, Information Technology',
    company: 'Bahir Dar University',
    period: '2022 — 2025',
    description:
      'Graduated with honors. Focus on DovOps, Networking and Securtiy. Ambasador of Peace.',
    achievements: ['GPA 3.91/4.0', 'Exit Score 86%', 'Hackathon winner 2025'],
  },
];

export const certifications = [
  { icon: Award, name: 'Ambasador of Peace', issuer: 'Student Decipline commttee', year: 2025 },
  { icon: Award, name: 'Top Scorer of the Dep`t', issuer: 'Bahir Dar University', year: 2025 },
  { icon: Award, name: 'Peace Education', issuer: 'British Councel', year: 2024 },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const externalIcons = { Github, ExternalLink };
