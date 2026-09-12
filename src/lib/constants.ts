export const personalInfo = {
  name: 'Michael Tokuda',
  title: 'Software Engineer',
  email: 'michael.tokuda17@gmail.com',
  linkedin: 'https://linkedin.com/in/michaeltokuda',
  github: 'https://github.com/Tokuda17',
  website: 'https://michaeltokuda.com',
  taglines: [
    'Building AI Models',
    'Crafting Full-Stack Applications',
    'Developing DeFi Protocols',
    'Optimizing High-Performance Systems',
  ],
};

export const experiences = [
  {
    company: 'Palantir',
    role: 'Software Engineer Intern',
    location: 'New York City, NY',
    startDate: 'May 2026',
    endDate: 'Aug 2026',
    logo: '/images/palantir_logo.jpg',
    description: 'Incoming Software Engineer Intern on Palantir\'s Foundry team, building AI models and working with large-scale data to help commercial clients.',
    technologies: ['AI/ML', 'Foundry Platform', 'Large-Scale Data'],
  },
  {
    company: 'Georgia Tech',
    role: 'Teaching Assistant',
    location: 'Atlanta, GA',
    startDate: 'Jan 2026',
    endDate: 'Present',
    logo: '/images/gt_logo.png',
    description: 'Supporting 250+ students in CS 4400: Introduction to Database Systems by providing feedback on SQL querying and advanced database application development in MySQL during office hours, grading sessions, and project reviews.',
    technologies: ['SQL', 'MySQL', 'Database Design', 'Teaching'],
  },
  {
    company: 'Susquehanna International Group',
    role: 'Discovery Day Invitee',
    location: 'Remote',
    startDate: 'Dec 2025',
    endDate: 'Dec 2025',
    logo: '/images/susquehanna_logo.png',
    description: 'Selected to attend SIG Discovery Day to learn about quantitative trading, market making, and option pricing.',
    technologies: ['Quantitative Trading', 'Market Making', 'Options'],
  },
  {
    company: 'Meta',
    role: 'Software Engineer Intern',
    location: 'Menlo Park, CA',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    logo: '/images/meta_logo.gif',
    description: 'Built an Onboarding Org Insight Tool for VPs to track resources delivered to 10,000+ new hires annually. Created interactive metrics UI with filtering and search using React + Relay. Engineered recursive GraphQL data-fetching in Hack to efficiently process 90,000+ onboarding plans and over 2M related data points. Proposed and engineered a notification system increasing onboarding task completion rates by 12.1%.',
    technologies: ['React', 'Relay', 'GraphQL', 'Hack', 'Internal Tools'],
  },
  {
    company: 'Pool Protocol',
    role: 'Quantitative Developer',
    location: 'Remote',
    startDate: 'Jun 2022',
    endDate: 'May 2024',
    logo: '/images/pool_protocol_logo.jpg',
    description: 'Initiated research to develop a delta-neutral DeFi blockchain application for capturing leveraged liquidity pool yields, generating $609,067 in profit with a 24.4% APY over 15 months. Utilized Web3.js and ABIs to integrate with 5 major DeFi protocols, optimizing investment performance by 78% and enabling 40+ smart contract interactions daily.',
    technologies: ['Web3.js', 'DeFi', 'Solidity', 'JavaScript', 'Blockchain'],
  },
];

export const featuredProject = {
  title: 'GT Movies Store',
  subtitle: 'CS 2340 — Objects and Design · Georgia Tech',
  description:
    'GT Movies Store is a full-stack e-commerce web application built with Django that lets users browse a movie catalog, search for titles, manage a shopping cart, place orders, and share reviews. I designed and developed the app end-to-end — data models, views, templates, and styling — following Django\'s Model-View-Template (MVT) architecture, with each screen built to satisfy a required user story.',
  userStories: [
    'Movies list screen — displays every movie with its poster and price, fulfilling "as a user, I want to browse available movies."',
    'Search bar — filters the catalog by title so users can quickly find a specific movie.',
    'Movie detail screen — shows full movie info alongside its reviews; signed-in users can create, edit, and delete their own reviews (full CRUD).',
    'Account screens — registration, login/logout, and password reset give each user a secure personal account.',
    'Shopping cart screen — users add movies to their cart, see a running total, and can clear the cart in one click.',
    'Orders screen — checking out converts the cart into an order, and users can review their order history with dates and totals.',
    'Admin panel — administrators manage movies, users, orders, and reviews through Django\'s admin interface.',
  ],
  process:
    'I built the project iteratively, treating each user story as a small deliverable: model the data, wire up the view and URL, build the template, then style and test it in the browser before moving on. When I hit questions or doubts, I worked through them with the Django documentation, course materials, and debugging in the Django shell — verifying each feature against its user story before starting the next.',
  technologies: ['Django', 'Python', 'SQLite', 'HTML/CSS', 'Bootstrap', 'MVT'],
  github: null,
  video: '/videos/gt-movies-demo.mp4',
};

export const projects = [
  {
    title: 'Team Phoenix HPC',
    description: 'Implemented high-performance C++ systems leveraging multithreading, parallel algorithms (std::thread, OpenMP), and cache-aware optimizations to reduce execution time and improve scalability.',
    technologies: ['C++', 'C', 'CUDA', 'OpenMP', 'Multithreading', 'HPC'],
    github: null,
    demo: null,
  },
  {
    title: 'TokuBot',
    description: 'Developed an AI/ML real-time poker assistance software employing counterfactual regret minimization (CFR) and GTO strategies to enhance decision accuracy. Created a Google Chrome extension to scrape 16,000+ poker hands from 2 major websites, generating 11.5 big blinds per 100 hands.',
    technologies: ['C++', 'Python', 'JavaScript', 'AI/ML', 'Chrome Extension', 'React.js'],
    github: null,
    demo: null,
  },
  {
    title: 'RU Busy',
    description: 'Engineered a full-stack AI-powered time management application using Next.js/React on the frontend and Django with PostgreSQL on the backend to handle RESTful API workflows. Containerized and deployed the backend using Docker and AWS EC2, configuring NGINX for API traffic handling.',
    technologies: ['Next.js', 'React', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'NGINX'],
    github: null,
    demo: null,
  },
];

export const education = {
  institution: 'Georgia Institute of Technology',
  degree: 'Bachelor of Science in Computer Science',
  minor: 'Mathematics',
  gpa: '4.00',
  graduationDate: 'December 2027',
  location: 'Atlanta, GA',
  courses: [
    'Data Structures and Algorithms',
    'High Performance Computing in C++',
    'Operating Systems',
    'Computer Architecture',
    'Object Oriented Programming',
    'Networking',
    'Databases',
  ],
};

export const skills = {
  languages: ['C++', 'Python', 'JavaScript', 'SQL', 'Java', 'PHP', 'HTML', 'CSS'],
  frontend: ['React.js', 'Next.js', 'Node.js', 'GraphQL', 'Web3.js'],
  backend: ['Django', 'Manifest.json'],
  tools: ['GitHub', 'Git', 'MySQL', 'PostgreSQL', 'Docker', 'AWS', 'Linux'],
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
