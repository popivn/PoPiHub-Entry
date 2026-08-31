export type ProjectCategory = 'school' | 'work' | 'personal'

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  date: string
  category: ProjectCategory
  link?: string
  highlight?: boolean
}

export interface Skill {
  name: string
  level: 'expert' | 'advanced' | 'learning'
}

export interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

export const portfolio = {
  name: 'TÔ Trung Hiếu',
  nickname: 'PoPi',
  siteName: 'PoPi',
  fullName: 'TÔ Trung Hiếu — PoPi',
  logo: '/logo.jpg',
  tagline: 'Mong muốn trở thành người hiểu biết thật nhiều trong lĩnh vực Công Nghệ Thông Tin, không riêng gì Web Developer',
  about: [
    'Tôi là một người làm việc dùng AI để làm việc — dùng kiến thức về CNTT để yêu cầu AI làm việc cho mình.',
    'Mạnh ở Laravel và Node.js, đang học thêm .NET. Tôi tin rằng công nghệ là công cụ, và kiến thức rộng mới là mục tiêu.',
    'Ngoài việc làm việc tại Đại Học Võ Trường Toản, tôi còn nhận freelance từ tháng 11/2025 đến hiện tại.',
  ],
  email: 'popivn.dev@gmail.com',
  location: 'Cần Thơ, Việt Nam',
  socials: [
    { label: 'GitHub', url: 'https://github.com/popivn', icon: 'fa-brands fa-github' },
  ] as SocialLink[],
  skills: [
    { name: 'Laravel', level: 'expert' },
    { name: 'Node.js', level: 'expert' },
    { name: 'NestJS', level: 'advanced' },
    { name: 'TypeScript', level: 'advanced' },
    { name: 'Blazor', level: 'advanced' },
    { name: '.NET', level: 'learning' },
    { name: 'SCSS', level: 'advanced' },
    { name: 'Bootstrap', level: 'expert' },
    { name: 'Tailwind CSS', level: 'advanced' },
    { name: 'Firebase', level: 'advanced' },
    { name: 'Cron Jobs', level: 'advanced' },
    { name: 'AI-Assisted Dev', level: 'expert' },
  ] as Skill[],
  timeline: [
    {
      id: 'edu-btec',
      date: '10/2022 — 04/2025',
      title: 'British College BTEC FPT Can Tho',
      description: 'Formal educational journey, completed in April 2025.',
    },
    {
      id: 'work-vtt',
      date: '07/2025 — Present',
      title: 'Developer — Vo Truong Toan University',
      description: 'Developed learning management systems, course exemption systems, and digital library systems.',
    },
    {
      id: 'freelance',
      date: '11/2025 — Present',
      title: 'Freelancer',
      description: 'Taking on freelance projects, combining AI to optimize productivity.',
    },
  ] as TimelineItem[],
  projects: [
    {
      id: 'sims',
      title: 'SIMS — Student Information Management System',
      description: 'Most beloved school project. Comprehensive student management system built with .NET + Blazor.',
      tech: ['.NET', 'Blazor', 'C#'],
      date: '2023 — 2025',
      category: 'school',
      link: 'https://github.com/popivn/Student-Information-Management-System.git',
      highlight: true,
    },
    {
      id: 'pizza-o',
      title: 'Pizza O',
      description: 'First project earning real money — opportunity to work for foreign clients. Built with Laravel + SCSS.',
      tech: ['Laravel', 'SCSS', 'PHP'],
      date: '10/2023',
      category: 'work',
      highlight: true,
    },
    {
      id: 'bmk-logistics',
      title: 'BMK — Logistics',
      description: 'Goods tracking system from point A to point B via QR code scanning — warehouse in/out. Built for BMK logistics company.',
      tech: ['Laravel', 'Bootstrap', 'PHP'],
      date: '11/2024',
      category: 'work',
    },
    {
      id: 'hoc-lieu',
      title: 'Learning Management System — VTT',
      description: 'Digital document storage system, controlling student learning progress on a Udemy-like platform.',
      tech: ['Laravel', 'Bootstrap', 'PHP'],
      date: '07/2025',
      category: 'work',
    },
    {
      id: 'xet-mien',
      title: 'Course Exemption System',
      description: 'Managing student course exemption applications, payments, department approval, and result publication. Learned the power of cron jobs.',
      tech: ['Laravel', 'Bootstrap', 'Cron Jobs'],
      date: '09/2025',
      category: 'work',
    },
    {
      id: 'thu-vien-vtt',
      title: 'Digital Library — Vo Truong Toan University',
      description: 'Managing large volumes of books and digital documents. Full library features — optimized book viewing and borrowing for students.',
      tech: ['Laravel', 'Tailwind CSS', 'PHP'],
      date: '07/2026',
      category: 'work',
      link: 'http://library.vttu.edu.vn/',
      highlight: true,
    },
    {
      id: 'tasktracking',
      title: 'TaskTracking',
      description: 'Personal project for study and work — task management.',
      tech: ['TypeScript', 'Vite'],
      date: 'Personal',
      category: 'personal',
      link: 'https://tasktracking-jade.vercel.app/',
    },
    {
      id: 'notepad',
      title: 'Notepad',
      description: 'Personal note-taking application, deployed on Vercel.',
      tech: ['TypeScript', 'Vite'],
      date: 'Personal',
      category: 'personal',
    },
    {
      id: 'cronhub',
      title: 'Cronhub',
      description: 'Cron jobs management dashboard — personal project deployed on Render.',
      tech: ['Node.js', 'TypeScript'],
      date: 'Personal',
      category: 'personal',
    },
    {
      id: 'nks5',
      title: 'NKS5 — Guild Tool',
      description: 'Project supporting guild members in games. Provides management tools and efficient guild activity coordination.',
      tech: ['Node.js', 'TypeScript'],
      date: 'Personal',
      category: 'personal',
      link: 'https://nks5.onrender.com/',
    },
  ] as Project[],
}
