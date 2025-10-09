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
  { id: "experience", title: "Experience" },
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
    category: "Programming Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "Dart", icon: SiDart },
      { name: "SQL" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "React Ecosystem (Redux, Context API, React Router)" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "APIs: REST, GraphQL" },
      { name: "Architecture: Microservices, MVC" },
      { name: "Serverless (AWS Lambda)", icon: FaAws },
      { name: "Data Formats: JSON, XML" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB (Atlas)", icon: SiMongodb },
      { name: "Firebase Realtime DB" },
      { name: "SQL Server" },
      { name: "H2" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, S3, Lambda, API Gateway, SNS, SQS, EKS)", icon: FaAws },
      { name: "Azure" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Jenkins", icon: FaJenkins },
      { name: "GitHub Actions", icon: FaGithub },
      { name: "CI/CD Pipelines" },
    ],
  },
  {
    category: "Security & Testing",
    items: [
      { name: "Spring Security" },
      { name: "JWT / OAuth2 / RBAC" },
      { name: "HTTPS / SSL/TLS / API Authentication" },
      { name: "JUnit" },
      { name: "Unit & API Testing" },
      { name: "Test-Driven Development (TDD)" },
      { name: "Agile/Scrum" },
      { name: "Git Branching" },
    ],
  },
  {
    category: "Tools & Development",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "IntelliJ IDEA", icon: SiIntellijidea },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Jira", icon: FaJira },
      { name: "Confluence", icon: FaConfluence },
      { name: "Swagger (OpenAPI)" },
    ],
  },
];



export const projects = [
  {
    title: "MyFoodRx – AI-Powered Health Chatbot App",
    description: "Cross-platform Flutter app designed to empower users managing chronic conditions and food insecurity with personalized nutrition guidance. Combines an AI chatbot (Dialogflow CX), diet education, and smart health tips, supported by a Node.js backend, MongoDB Atlas, and secure OAuth2 authentication.",
    tags: [],
    source_code_link: "https://github.com/tanvikreddy123/MyFoodRx",
    publication_link: "10.1109/SMARTCOMP65954.2025.00080",
    live_demo_link: "#", 
  },
  {
    title: "ClinicFlow – AI-Powered Patient Intake System",
    description: "A full-stack healthcare intake system that makes patient check-ins simple and conversational. Patients use a React Native chatbot powered by Google Dialogflow CX, their data flows into a Node.js/Express + MongoDB backend, and clinic staff can review, filter, and manage encounters in real time through a React dashboard.",
    tags: [],
    source_code_link: "https://github.com/tanvikreddy123/clinicflow",
    live_demo_link: "#", 
  },
  {
    title: "Art Gallery Store - Full-Stack MERN E-Commerce Platform",
    description: "A full-stack MERN web application for an online art gallery store, featuring a secure Node.js/Express RESTful API with JWT authentication, owner-based authorization, and a dynamic React UI for managing art listings.",
    tags: [],
    source_code_link: "https://github.com/tanvikreddy123/art-gallery-store",
    live_demo_link: "https://art-gallery-frontend-4at0.onrender.com", 
  },
  {
    title: "PawPal API - Secure Pet Adoption Backend",
    description: "A secure RESTful backend for a pet adoption platform, built with Java and Spring Boot. Implements JWT-based authentication, role-based access for users and admins, and manages the full adoption workflow from pet listings to approval.",
    tags: [],
    source_code_link: "https://github.com/tanvikreddy123/pawpal_api",
    live_demo_link: null, 
  },
  {
    title: "FinDash - React Finance Dashboard",
    description: "A responsive personal finance dashboard built with React to track income, expenses, and budgets. Features interactive charts and data grids with Syncfusion UI and efficient state management using the Context API.",
    tags: [],
    source_code_link: "https://github.com/tanvikreddy123/personal-finance-dashboard",
    live_demo_link: "https://personal-finance-dashboard-dusky.vercel.app/", 
  },
  {
    title: "Portfolio",
    description: "A fully responsive personal portfolio built with React, Vite, and Tailwind CSS. Features a clean, modern design with smooth animations powered by Framer Motion, and is easily updatable via a centralized data file.",
    tags: [],
    source_code_link: "https://github.com/tanvikreddy123/portfolio",
    live_demo_link: "https://portfolio-tau-pink-m1a3s80ioj.vercel.app/", 
  }
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

export const experiences = [
  {
    company: "JP Morgan Chase",
    role: "Full Stack Developer",
    location: "USA",
    dates: "Aug 2024 – Present",
    points: [
      "Built a fraud detection system processing 15K+ suspicious transactions/month.",
      "Deployed 20+ REST APIs & microservices handling 5M+ transactions/day.",
      "Delivered responsive apps with React.js (web) & React Native (mobile).",
      "Scaled services on AWS EKS with Docker & Kubernetes.",
      "Automated CI/CD with Jenkins & GitHub Actions."
    ]
  },
  {
    company: "Sigma Info Tech",
    role: "Full Stack Developer",
    location: "India",
    dates: "Mar 2022 – July 2023",
    points: [
      "Built an insurance claims platform serving 5K+ users.",
      "Designed Spring Boot & Node.js microservices for claims and policies.",
      "Developed a role-based React.js UI improving task speed by 25%.",
      "Secured 50K+ documents with AWS S3.",
      "Implemented JWT & OAuth2 for multi-role authentication."
    ]
  }
];
