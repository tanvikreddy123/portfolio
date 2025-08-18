import {
  FaJava, FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub, FaJira, FaConfluence, FaJenkins, FaBootstrap
} from 'react-icons/fa';
import { 
  SiJavascript, SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiFlutter, SiDart, 
  SiIntellijidea, SiPostman, SiExpress, SiSpring, SiSass
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "publications", title: "Publications" },
  { id: "skills", title: "Skills" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const contactInfo = {
  email: "tanvikreddy123@gmail.com",
  phone: "(813) 405-5927",
  github: "https://github.com/tanvikreddy123", 
  linkedin: "https://www.linkedin.com/in/tanvikreddy",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL" },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "SCSS", icon: SiSass },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Syncfusion UI" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "Postgres", icon: SiPostgresql },
      { name: "MongoDB (Atlas)", icon: SiMongodb },
      { name: "SQL Server" },
      { name: "Firebase Realtime DB" },
    ],
  },
  {
    category: "Auth & Security",
    items: [
      { name: "Spring Security", icon: SiSpring },
      { name: "JWT" },
      { name: "OAuth2" },
      { name: "Role-Based Access Control (RBAC)" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, S3, Lambda)", icon: FaAws },
      { name: "CI/CD" },
      { name: "Jenkins", icon: FaJenkins },
      { name: "GitHub Actions", icon: FaGithub },
      { name: "API Gateway" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "IntelliJ", icon: SiIntellijidea },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Jira", icon: FaJira },
      { name: "Confluence", icon: FaConfluence },
    ],
  },
  {
    category: "Testing & Practices",
    items: [
      { name: "JUnit" },
      { name: "Test-Driven Development (TDD)" },
      { name: "Agile/Scrum" },
    ],
  },
];

export const projects = [
  {
    title: "Personalized Food Rx – AI-Powered Health Chatbot App",
    description: "A cross-platform mobile app built with Flutter to deliver AI-driven nutrition education via Dialogflow CX. Features secure OAuth2 integration and a modular architecture, with personalized content managed through MongoDB Atlas.",
    tags: ["Flutter", "Dialogflow CX", "MongoDB", "OAuth2"],
    source_code_link: "https://github.com/tanvikreddy123/nutrimate-foodrx-healthbot",
    publication_link: "10.1109/SMARTCOMP65954.2025.00080",
    live_demo_link: "#", 
  },
  {
    title: "Art Gallery Store - Full-Stack MERN E-Commerce Platform",
    description: "A full-stack e-commerce platform featuring a secure Node.js/Express RESTful API for CRUD operations and a dynamic React UI. Implements JWT for stateless authentication and owner-based authorization for content management.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    source_code_link: "https://github.com/tanvikreddy123/art-gallery-store",
    live_demo_link: "#", 
  },
  {
    title: "FinDash - React Finance Dashboard",
    description: "A responsive personal finance dashboard built with React and Syncfusion UI for complex data visualization. Utilizes the Context API for efficient global state management, eliminating prop drilling and improving component decoupling.",
    tags: ["React", "Syncfusion UI", "Tailwind CSS", "Context API"],
    source_code_link: "https://github.com/tanvikreddy123/personal-finance-dashboard",
    live_demo_link: "https://personal-finance-dashboard-dusky.vercel.app/", 
  },
  {
    title: "PawPal API - Secure Pet Adoption Backend",
    description: "A secure RESTful backend for a pet adoption platform, built with Java and Spring Boot. Manages pet listings and user workflows, with endpoints secured by Spring Security and JWT for Role-Based Access Control (RBAC).",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
    source_code_link: "https://github.com/tanvikreddy123/pawpal_api",
    live_demo_link: null, 
  },
];

export const certifications = [
  {
    name: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=66211B5FB2506265949CCFA0004B74289C40F4C427987E74B40057B220E309C2", 
  },
  {
    name: "Foundations of Databases for Developers",
    issuer: "Oracle",
    link: "https://drive.google.com/file/d/1DnZws_tPBNF56Dqy6C4Y_oQwbKFuvveo/view?usp=sharing", 
  },
  {
    name: "The Complete Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-769dbb78-4261-49ed-88ca-959337333e10/", 
  },
  {
    name: "React Certification",
    issuer: "Scrimba",
    link: "#", 
  },
  {
    name: "J.P Morgan Software Engineering Job Simulation",
    issuer: "JP Morgan Chase (Forage)",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_5ZZSjFrdLStpYkM2J_1749703396538_completion_certificate.pdf", 
  },
  {
    name: "AWS Solutions Architect Simulation",
    issuer: "AWS (Forage)",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_5ZZSjFrdLStpYkM2J_1749782396213_completion_certificate.pdf",
  },
  {
    name: "AI Fundamentals",
    issuer: "IBM",
    link: "https://www.credly.com/badges/f8eeee35-031e-46c7-b38c-c142c7b42a12/public_url", 
  },
  {
    name: "Section ProfAI: AI Proficiency",
    issuer: "Section",
    link: "https://www.credly.com/badges/1cd8b18a-0b97-42b9-a707-59ba5ca7a573/public_url", 
  }
];

export const publication = {
    title: "MyFoodRx: Design of a Personalized Food-as-Medicine Application to Promote Food Security and Chronic Disease Management.",
    authors: "Tanvik Reddy Kotha, Jay Hiteshkumar Jariwala, Anika Anjum, Hannah M. Thomas, Jennifer Bleck, Rita DeBate, John Michael Templeton.",
    conference: "IEEE International Conference on Smart Computing (SMARTCOMP), 2025",
    doi: "10.1109/SMARTCOMP65954.2025.00080",
    abstract: "Food insecurity (FI) is a persistent public health issue in the United States, disproportionately affecting racially and ethnically marginalized populations while also contributing to heightened health risks... Our innovative, personalized mobile health application designed to enhance traditional FoodRx approaches by providing customized nutrition... MyFoodRx offers a novel, application for delivering personalized dietary recommendations for improved health outcomes."
};