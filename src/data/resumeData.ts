import { ExperienceItem, ProjectItem, SkillCategory, AchievementItem, EducationItem } from '../types';

export const personalDetails = {
  name: 'Samayshrey Patnaik',
  initials: 'SP',
  titles: [
    'Software Developer',
    'Full Stack Developer',
    'CS Engineering Student'
  ],
  objective:
    'Aspiring Software Developer with knowledge of Python, Django, React, and SQL, seeking a Software Development Internship to apply and enhance my technical skills while building real-world applications using modern technologies in a collaborative environment and contributing to meaningful software projects.',
  email: 'Samayshrey.p@gmail.com',
  phone: '+91 78941 06734',
  location: 'Chennai / Hyderabad, India',
  github: 'https://github.com/samayshrey-dev',
  linkedin: 'https://www.linkedin.com/in/samayshrey-patnaik',
  status: 'Seeking Software Engineering Internships',
};

export const aboutHighlights = [
  {
    id: 'edu',
    title: 'Education',
    subtitle: 'SRM Institute of Science & Technology',
    description: 'B.Tech in Computer Science Engineering (3rd Year) with a CGPA of 8.51 / 10.00.',
    icon: 'GraduationCap'
  },
  {
    id: 'dev',
    title: 'Software Development',
    subtitle: 'Web & API Architecture',
    description: 'Building full-stack web applications using Python, Django, DRF, React, and SQL Server.',
    icon: 'Code2'
  },
  {
    id: 'ai',
    title: 'Geospatial & AI Systems',
    subtitle: 'Integrations & Analysis',
    description: 'Developing location-aware applications with Leaflet.js, OpenStreetMap, and AI classification models.',
    icon: 'Cpu'
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'MedFinder',
    role: 'Software Development Intern',
    period: 'Jun 2026 – Present',
    location: 'Remote / Hybrid',
    type: 'Internship',
    isCurrent: true,
    description: [
      'Developing a full-stack web application enabling users to search for medicines and locate nearby pharmacies in real time.',
      'Building RESTful APIs using Django REST Framework for dynamic medicine search and pharmacy data retrieval.',
      'Integrating geolocation, Leaflet.js, and OpenStreetMap to display nearby pharmacies on an interactive map.',
      'Integrating with pharmacy inventory systems using RESTful APIs to provide users with real-time medicine availability, stock levels, and pricing across multiple pharmacies.',
      'Developing a responsive Bootstrap-based interface with live search functionality for an enhanced user experience.'
    ],
    techStack: [
      'Python',
      'Django',
      'Django REST Framework',
      'JavaScript',
      'Bootstrap',
      'Leaflet.js',
      'OpenStreetMap',
      'SQL Server'
    ]
  },
  {
    id: 'exp-2',
    company: 'Krutanic Solutions',
    role: 'Full Stack Developer Intern',
    period: 'Jun 2025 – Aug 2025',
    location: 'Remote',
    type: 'Internship',
    isCurrent: false,
    description: [
      'Developed and maintained web application features using full-stack technologies.',
      'Designed and integrated REST APIs for efficient data handling.',
      'Collaborated with the development team to debug issues and optimize overall application functionality.',
      'Developed custom Portfolio and To-Do Applications with persistent database storage.',
      'Gained hands-on experience with production software development and deployment workflows.'
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'SQL', 'REST APIs', 'Git']
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'medfinder',
    title: 'MedFinder',
    subtitle: 'Live Pharmacy Medicine Search Platform',
    category: 'Full Stack Web App',
    period: 'Jun 2026 – Present',
    featured: true,
    badge: 'Internship Project',
    description:
      'Medicine availability platform enabling users to locate nearby pharmacies in real time using interactive maps and RESTful APIs.',
    highlights: [
      'Built RESTful APIs using Django REST Framework for medicine search and data retrieval.',
      'Integrated Leaflet.js and OpenStreetMap for interactive nearby pharmacy discovery.',
      'Connected with pharmacy inventory systems for live stock availability and pricing.',
      'Designed responsive Bootstrap interface with live search capabilities.'
    ],
    techStack: [
      'Python',
      'Django',
      'Django REST Framework',
      'JavaScript',
      'Bootstrap',
      'Leaflet.js',
      'OpenStreetMap',
      'SQL Server'
    ],
    githubUrl: 'https://github.com/samayshrey-dev',
    liveDemoUrl: 'https://github.com/samayshrey-dev',
    imageBgColor: 'from-zinc-900 to-zinc-950',
  },
  {
    id: 'resqtracker',
    title: 'ResQTracker',
    subtitle: 'Stray Animal Rescue & NGO Coordination Platform',
    category: 'Hackathon Project',
    period: 'Mar 2026 – Apr 2026',
    featured: true,
    badge: 'Hackathon Finalist',
    description:
      'Full-stack platform connecting stray animal rescue volunteers and NGOs with geolocation tracking, emergency SMS alerts, Razorpay donations, and AI injury classification.',
    highlights: [
      'Built AI-based injury classification system to categorize rescue cases as Mild, Medium, or Severe.',
      'Integrated Leaflet.js and OpenStreetMap to identify nearest registered NGOs and shelters.',
      'Implemented real-time emergency SMS alert notification system.',
      'Integrated Razorpay API to facilitate secure donation processing.'
    ],
    techStack: [
      'React',
      'Node.js',
      'SQL',
      'Leaflet.js',
      'OpenStreetMap',
      'Nominatim API',
      'Razorpay API'
    ],
    githubUrl: 'https://github.com/samayshrey-dev',
    liveDemoUrl: 'https://github.com/samayshrey-dev',
    imageBgColor: 'from-zinc-900 to-zinc-950',
  },
  {
    id: 'oms',
    title: 'Order Management System (OMS)',
    subtitle: 'Enterprise Order & Inventory Management Application',
    category: 'Independent Development',
    period: 'Jan 2026 – Feb 2026',
    featured: true,
    badge: 'Web Application',
    description:
      'Web-based Order Management System to manage customers, suppliers, inventory items, orders, shipments, and payment statuses.',
    highlights: [
      'Designed and implemented normalized relational database schema in SQL Server.',
      'Built complete CRUD functionality for customers, suppliers, products, and purchase orders.',
      'Implemented order tracking, payment status management, and shipment monitoring.'
    ],
    techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'SQL Server'],
    githubUrl: 'https://github.com/samayshrey-dev',
    liveDemoUrl: 'https://github.com/samayshrey-dev',
    imageBgColor: 'from-zinc-900 to-zinc-950',
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'C' },
      { name: 'JavaScript (ES6+)' },
      { name: 'SQL' }
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React JS' },
      { name: 'JavaScript' },
      { name: 'HTML5 & CSS3' },
      { name: 'Bootstrap' },
      { name: 'JSON' }
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Django' },
      { name: 'Django REST Framework (DRF)' },
      { name: 'Node.js' },
      { name: 'REST APIs' }
    ]
  },
  {
    category: 'Databases & Storage',
    skills: [
      { name: 'SQL Server' },
      { name: 'Relational Database Design' }
    ]
  },
  {
    category: 'Maps, Geospatial & APIs',
    skills: [
      { name: 'Leaflet.js' },
      { name: 'OpenStreetMap (OSM)' },
      { name: 'Nominatim API' },
      { name: 'Razorpay API' }
    ]
  },
  {
    category: 'AI Tools & Utilities',
    skills: [
      { name: 'ChatGPT / Claude' },
      { name: 'GitHub Copilot' },
      { name: 'OpenAI Codex' },
      { name: 'Gamma' }
    ]
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Microsoft Office' }
    ]
  },
  {
    category: 'Core CS Subjects',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Object-Oriented Programming (OOP)' },
      { name: 'Database Management Systems (DBMS)' }
    ]
  }
];

export const achievements: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Hackathon Finalist — ResQTracker',
    subtitle: 'National Level Hackathon (2026)',
    year: '2026',
    description: [
      'Reached the final round in a hackathon with ResQTracker, an AI-based stray animal rescue system.'
    ],
    badge: 'Finalist',
    iconName: 'Trophy'
  },
  {
    id: 'ach-2',
    title: 'Project Expo (AI) — Featured Project',
    subtitle: 'SRM Institute Technical Expo (2026)',
    year: '2026',
    description: [
      'Selected for Project Expo (AI) among multiple teams.',
      'Developed an AI Algorithm Analyzer using frontend, backend, and data visualization.',
      'Awarded for Best PPT Presentation.'
    ],
    badge: 'Best Presentation',
    iconName: 'Award'
  },
  {
    id: 'ach-3',
    title: 'Tata Crucible Program Participant',
    subtitle: 'National Competition (2025)',
    year: '2025',
    description: [
      'Participated in a national-level business and technology quiz competition.'
    ],
    badge: 'Participant',
    iconName: 'Zap'
  },
  {
    id: 'ach-4',
    title: 'Co-Curricular Highlights (Music & Dance)',
    subtitle: 'Inter-College Competitions',
    year: '2024 – 2026',
    description: [
      'Member of college music band; actively participated in college and inter-college performances.',
      'Achieved 3rd place in a national-level music band competition at SRM.',
      'Secured 3rd place in a music competition at SRM KTR campus.',
      'Won multiple dance competitions at college level & achieved Runner-Up position at VIT.'
    ],
    badge: 'Co-Curricular',
    iconName: 'Music'
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'SRM Institute of Science and Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science Engineering (3rd Year)',
    location: 'Chennai, India',
    period: '2025 – Expected 2028',
    scoreLabel: 'CGPA',
    scoreValue: '8.51 / 10.00',
    highlights: [
      'Focusing on Software Development, Database Management, and Full Stack Web Applications.'
    ]
  },
  {
    id: 'edu-2',
    institution: 'Resonance Junior College',
    degree: 'Class XII (Senior Secondary)',
    field: 'Physics, Chemistry, Mathematics',
    location: 'Hyderabad, Telangana, India',
    period: '2024',
    scoreLabel: 'Score',
    scoreValue: '68.7%'
  },
  {
    id: 'edu-3',
    institution: 'Kaanger Valley Academy',
    degree: 'Class X (Secondary School)',
    field: 'General Education',
    location: 'Raipur, Chhattisgarh, India',
    period: '2022',
    scoreLabel: 'Score',
    scoreValue: '82.6%'
  }
];
