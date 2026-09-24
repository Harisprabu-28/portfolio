import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaCloud,
  FaShieldAlt, FaMicrochip, FaChrome, FaFlask,
} from 'react-icons/fa'
import {
  SiMysql, SiNetlify, SiVercel, SiRender,
  SiC,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { TbBrain, TbRobot } from 'react-icons/tb'
import { HiChartBar } from 'react-icons/hi'

/* ===== NAV LINKS ===== */
export const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Hackathons', to: 'hackathons' },
  { label: 'Contact', to: 'contact' },
]

/* ===== SOCIAL LINKS ===== */
export const socialLinks = {
  github: 'https://github.com/Harisprabu-28',
  linkedin: 'https://www.linkedin.com/in/haris-prabu-462314373/',
  leetcode: 'https://leetcode.com/u/harisprabu/',
  email: 'harisprabu666@gmail.com',
  phone: '+91 94899 04408',
  phoneTel: 'tel:+919489904408',
}

/* ===== SKILLS ===== */
export interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'C', icon: SiC },
    ],
  },
  {
    label: 'Web',
    skills: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Flask', icon: FaFlask },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MySQL Workbench', icon: FaDatabase },
    ],
  },
  {
    label: 'Data & AI',
    skills: [
      { name: 'Data Science', icon: HiChartBar },
      { name: 'ML Fundamentals', icon: TbBrain },
      { name: 'Random Forest', icon: TbBrain },
      { name: 'AI App Dev', icon: TbRobot },
    ],
  },
  {
    label: 'Cloud & Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'Netlify', icon: SiNetlify },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Render', icon: SiRender },
    ],
  },
  {
    label: 'Other',
    skills: [
      { name: 'Cybersecurity', icon: FaShieldAlt },
      { name: 'Chrome Ext Dev', icon: FaChrome },
      { name: 'IoT / ESP32', icon: FaMicrochip },
      { name: 'Cloud Computing', icon: FaCloud },
    ],
  },
]

/* ===== PROJECTS ===== */
export interface Project {
  title: string
  description: string
  tech: string[]
  category: string
  githubUrl: string
}

export const projectCategories = ['All', 'AI', 'Web', 'IoT', 'Other']

export const projects: Project[] = [
  {
    title: 'AI Phishing Guard',
    description:
      'Chrome extension that classifies websites as safe, suspicious, or dangerous using ML. Features a real-time dashboard with history tracking for analyzed URLs.',
    tech: ['Python', 'Flask', 'HTML/CSS/JS', 'ML'],
    category: 'AI',
    githubUrl: 'https://github.com/Harisprabu-28',
  },
  {
    title: 'G-Mart',
    description:
      'Full-featured grocery shopping web app with admin panel, cart management, delivery charges, discounts, and PDF receipt generation. Deployed on Netlify.',
    tech: ['HTML/CSS/JS', 'Flask', 'MySQL'],
    category: 'Web',
    githubUrl: 'https://github.com/Harisprabu-28',
  },
  {
    title: 'Examination Performance Analysis',
    description:
      'ML-based academic analysis tool that predicts and analyzes student performance using Random Forest algorithms with interactive visualizations.',
    tech: ['Python', 'Flask', 'MySQL', 'Random Forest'],
    category: 'AI',
    githubUrl: 'https://github.com/Harisprabu-28',
  },
  {
    title: 'Flow-Triggered GSM Alert System',
    description:
      'Patent-oriented IoT project for municipal water supply monitoring. Detects tank levels and water flow via GSM SMS alerts — no Wi-Fi dependency required.',
    tech: ['IoT', 'GSM', 'Embedded C', 'Hardware'],
    category: 'IoT',
    githubUrl: 'https://github.com/Harisprabu-28',
  },
  {
    title: 'EV Charging Monitor & Anomaly Alert',
    description:
      'Patent-oriented IoT system using ESP32 + ADS1115 for real-time electrical parameter monitoring and anomaly detection in EV charging stations.',
    tech: ['ESP32', 'ADS1115', 'IoT', 'Sensors'],
    category: 'IoT',
    githubUrl: 'https://github.com/Harisprabu-28',
  },
  {
    title: 'Smart Bus Fee System',
    description:
      'RFID + fingerprint (AS608) authentication system with ESP32, calculating distance-based fares. Full-stack with React frontend and Node.js backend.',
    tech: ['ESP32', 'React', 'Node.js', 'MySQL', 'RFID'],
    category: 'IoT',
    githubUrl: 'https://github.com/Harisprabu-28',
  },
  {
    title: 'Hand Gesture Volume Control',
    description:
      'Computer vision application using MediaPipe for real-time hand gesture recognition to control system volume through intuitive gestures.',
    tech: ['Python', 'MediaPipe', 'OpenCV'],
    category: 'AI',
    githubUrl: 'https://github.com/Harisprabu-28',
  },
  {
    title: 'Elite Unavagam',
    description:
      'Traditional Tamil food ordering website featuring an authentic restaurant-style UI with a rich red theme, menu browsing, and order management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    githubUrl: 'https://github.com/Harisprabu-28',
  },
]

/* ===== CERTIFICATIONS ===== */
export interface Certification {
  name: string
  issuer: string
}

export const certifications: Certification[] = [
  { name: 'NPTEL Certification', issuer: 'NPTEL' },
  { name: 'Java CAD', issuer: 'CAD Centre' },
  { name: 'Python CAD', issuer: 'CAD Centre' },
  { name: 'Canva Essential Training', issuer: 'Canva' },
  { name: 'Gemini Certified Student', issuer: 'Google' },
  { name: 'HTML5 – The Language', issuer: 'Infosys Springboard' },
  { name: 'Hackathon Participation', issuer: 'Unstop' },
  { name: 'AI Skills for Students', issuer: 'Canva' },
  { name: 'Introduction to Cloud Computing', issuer: 'Infosys Springboard' },
  { name: 'Web Development Basics', issuer: 'IBM SkillsBuild' },
  { name: 'Developing Sites for the Web', issuer: 'IBM SkillsBuild' },
]

/* ===== HACKATHONS ===== */
export interface Hackathon {
  title: string
  description: string
  highlight?: string
}

export const hackathons: Hackathon[] = [
  {
    title: '"Buy or Wait?" — AI Financial Agent',
    description:
      'Conceptualized an AI-powered financial agent that assesses whether a user can afford an expense based on recurring costs, pending payments, essential spending, and income patterns.',
    highlight: 'AI-Powered Concept',
  },
  {
    title: 'Adobe Hackathon — Team Project',
    description:
      'Collaborated on a team project for the Adobe hackathon hosted on Unstop, successfully progressing to Round 2 of the competition.',
    highlight: 'Progressed to Round 2',
  },
]
