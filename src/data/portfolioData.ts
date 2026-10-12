export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & AgriTech' | 'Fintech & Tools' | 'Systems & C++' | 'Python & Data';
  description: string;
  fullOverview: string;
  focus: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
  hasSimulator?: boolean;
  simulatorType?: 'smartkisan' | 'digitalkhata' | 'code';
}

export interface LearningGoal {
  id: number;
  title: string;
  description: string;
  status: 'In Progress' | 'Continuous' | 'Next Milestone';
  topics: string[];
  practicalOutcome: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Shakir Hussain',
    displayName: 'Shakir Hussain',
    linkedInName: 'Shakir Shar',
    headline: 'BS Artificial Intelligence Student | Aspiring AI/ML Engineer',
    subHeadline: 'Software Developer · Data Science Enthusiast · Practical Problem Solver',
    university: 'Aror University of Art, Architecture, Design & Heritage',
    universityLocation: 'Sukkur, Sindh, Pakistan',
    degree: 'Bachelor of Science in Artificial Intelligence (BS AI)',
    expectedGraduation: '2026 – 2030',
    email: 'shakirshar610@gmail.com',
    phone: '+92 314-8354758',
    phoneRaw: '+923148354758',
    whatsappUrl: 'https://wa.me/923148354758',
    githubUrl: 'https://github.com/shakirshar610-tech',
    githubUsername: 'shakirshar610-tech',
    linkedInUrl: 'https://www.linkedin.com/in/shakir-shar-984699440/',
    profilePhoto: '/images/shakir_profile.jpg',
    location: 'Sukkur, Sindh, Pakistan',
    bio: 'I am an Artificial Intelligence student at Aror University of Art, Architecture, Design & Heritage in Sukkur, Pakistan. I am deeply passionate about programming, AI-driven applications, and engineering reliable solutions for real-world challenges. My focus bridges software engineering, data science, and practical intelligent systems that deliver tangible value to local communities and businesses.',
    philosophy: 'Learning consistently. Building practically. Growing through technology.',
  },

  metrics: [
    { label: 'Academic Focus', value: 'BS Artificial Intelligence' },
    { label: 'University', value: 'Aror University, Sukkur' },
    { label: 'Featured Projects', value: '4+ Deployed & Repos' },
    { label: 'Core Languages', value: 'Python · C++ · TypeScript' },
  ],

  skills: {
    programming: [
      { name: 'Python', level: 'Core Language', desc: 'Object-oriented programming, data manipulation, algorithm logic, scripting' },
      { name: 'C++', level: 'Core Language', desc: 'Object-oriented design, pointers, memory fundamentals, data structures' },
      { name: 'C', level: 'Foundational', desc: 'Procedural programming, low-level memory, systems concepts' },
    ],
    aiAndData: [
      { name: 'Artificial Intelligence Fundamentals', level: 'Academic & Practical', desc: 'Search algorithms, heuristic logic, problem state spaces' },
      { name: 'Machine Learning Concepts', level: 'Developing', desc: 'Supervised learning, classification, regression, model evaluation metrics' },
      { name: 'Data Science Fundamentals', level: 'Developing', desc: 'Data wrangling, feature preparation, exploratory analysis' },
      { name: 'AI & Developer Tools', level: 'Proficient', desc: 'Prompt engineering, code assist workflows, modern LLM tooling' },
    ],
    webDevelopment: [
      { name: 'React', level: 'Framework', desc: 'Component architecture, state management, hooks, responsive interfaces' },
      { name: 'TypeScript', level: 'Language', desc: 'Type safety, interfaces, robust frontend engineering' },
      { name: 'Tailwind CSS', level: 'Styling', desc: 'Modern responsive utility-first layouts, dark mode, design consistency' },
      { name: 'HTML5 & CSS3', level: 'Foundations', desc: 'Semantic markup, accessibility, flexbox & grid design' },
      { name: 'JavaScript (ES6+)', level: 'Language', desc: 'Async programming, DOM manipulation, modular architecture' },
      { name: 'WordPress', level: 'CMS', desc: 'Website configuration, theme management, content delivery' },
    ],
    toolsAndPlatforms: [
      { name: 'Git & GitHub', level: 'Workflow', desc: 'Version control, branch management, collaboration, open-source workflow' },
      { name: 'VS Code', level: 'Environment', desc: 'Debugging, extension ecosystem, terminal integration' },
      { name: 'Vite', level: 'Build Tool', desc: 'Fast frontend bundling, development server configuration' },
      { name: 'Supabase', level: 'Backend/DB', desc: 'Relational database concepts, authentication, backend-as-a-service' },
    ],
  },

  projects: [
    {
      id: 'smartkisan',
      title: 'SmartKisan — Agriculture App',
      tagline: 'AI-assisted digital farming solution tailored for Pakistani agriculture',
      category: 'AI & AgriTech',
      description: 'An agriculture-focused application engineered to empower farmers across Pakistan through digital crop guidance, climate-conscious irrigation scheduling, and AI-oriented advisory.',
      fullOverview: 'SmartKisan addresses crucial information bottlenecks faced by smallholders and local farmers in Sindh and Punjab. By providing accessible crop health advisory, pest identification guidelines, and weather-adjusted farming tips in an intuitive interface, SmartKisan aims to bridge modern AI technology with agrarian needs on the ground.',
      focus: 'Agriculture technology and AI-assisted farming',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI Advisory Logic'],
      keyFeatures: [
        'Interactive Crop Advisor for major Pakistani crops (Cotton, Wheat, Rice, Sugarcane, Mango)',
        'Symptom-to-Disease detection logic with organic and chemical treatment advice',
        'Irrigation and soil conditioning insights tailored to regional arid and canal conditions',
        'Fast, mobile-responsive layout designed for low-bandwidth rural access',
      ],
      githubUrl: 'https://github.com/shakirshar610-tech/Smartkisan-Agriculture-App',
      demoUrl: 'https://smartkisan-farming-a-qeu0.bolt.host',
      hasSimulator: true,
      simulatorType: 'smartkisan',
    },
    {
      id: 'digital-khata',
      title: 'Digital Khata — Business Accounting App',
      tagline: 'Modern digital bookkeeping and financial records for small businesses and merchants',
      category: 'Fintech & Tools',
      description: 'A digital accounting project focused on helping local shopkeepers and small enterprises manage everyday financial transactions, credit/debit records, and customer balances effortlessly.',
      fullOverview: 'In Pakistan, thousands of small merchants rely on paper notebooks ("Khata") prone to loss and calculation errors. Digital Khata provides a straightforward, reliable digital ledger that records debit (udhaar) and credit (wasooli) with real-time balance tracking, searchable transaction histories, and clean accounting summaries.',
      focus: 'Digital bookkeeping, transaction verification, and business cashflow management',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage Persistence'],
      keyFeatures: [
        'Real-time customer credit (Udhaar) and debit (Wasooli) transaction logging',
        'Automatic net balance calculation and overdue alert indicators',
        'Instant searchable ledger by customer name or transaction note',
        'Local data persistence allowing safe offline functionality',
      ],
      githubUrl: 'https://github.com/shakirshar610-tech?tab=repositories',
      demoUrl: 'https://github.com/shakirshar610-tech?tab=repositories',
      hasSimulator: true,
      simulatorType: 'digitalkhata',
    },
    {
      id: 'cpp-programming',
      title: 'C/C++ Programming & Algorithmic Foundations',
      tagline: 'Curated repository of data structures, algorithms, and fundamental computer science exercises',
      category: 'Systems & C++',
      description: 'A comprehensive collection of programming exercises and foundational computer science concepts developed while mastering memory management, algorithms, and object-oriented architecture.',
      fullOverview: 'Solid software engineering requires strong low-level comprehension. This repository documents hands-on implementations of pointers, dynamic memory structures, custom arrays, matrix math, recursion, and search algorithms written in C and C++.',
      focus: 'Programming fundamentals, memory management, and algorithmic problem-solving',
      technologies: ['C++', 'C', 'GCC/Clang', 'Data Structures', 'Algorithms'],
      keyFeatures: [
        'Clean implementation of foundational search algorithms (Binary Search, Linear Search)',
        'Dynamic array manipulation, pointers, and memory reference safety',
        'Matrix operations and 2D grid processing for computational simulations',
        'Clear problem breakdown with asymptotic time and space complexity notes',
      ],
      githubUrl: 'https://github.com/shakirshar610-tech/C-programs',
      hasSimulator: true,
      simulatorType: 'code',
    },
    {
      id: 'python-mini-projects',
      title: 'Python Projects & Machine Learning Workflows',
      tagline: 'Practical scripts, data preprocessing pipelines, and algorithmic logic in Python',
      category: 'Python & Data',
      description: 'A hands-on collection of projects and utility scripts created to practice Python syntax, data manipulation logic, and foundational machine learning techniques.',
      fullOverview: 'Python serves as the backbone for AI and Data Science. This collection includes file automation tools, structured data processing scripts, mathematical algorithms (e.g. gradient descent step simulators, statistical evaluators), and modular mini-tools.',
      focus: 'Python syntax mastery, clean code patterns, and practical data automation',
      technologies: ['Python 3', 'Data Processing', 'Automation Scripts', 'OOP'],
      keyFeatures: [
        'Data cleaning, transformation, and statistical feature summarization',
        'Mathematical implementation of optimization functions (gradient calculation step)',
        'Modular, well-commented functions following PEP 8 conventions',
        'Script automation for batch file processing and basic data pipelines',
      ],
      githubUrl: 'https://github.com/shakirshar610-tech/python-mini-projects',
      hasSimulator: true,
      simulatorType: 'code',
    },
  ],

  learningGoals: [
    {
      id: 1,
      title: 'Strengthen Python & C++ Mastery',
      description: 'Deepening comprehension of object-oriented design patterns, memory optimization in C++, and high-performance Python idioms.',
      status: 'In Progress',
      topics: ['Advanced OOP', 'STL & Memory in C++', 'Generators & Functional Python', 'Algorithm Profiling'],
      practicalOutcome: 'Writing robust, reusable software libraries with benchmarked algorithmic complexity.',
    },
    {
      id: 2,
      title: 'Solid Foundation in AI and Machine Learning',
      description: 'Mastering the mathematical foundations (linear algebra, multivariate calculus, probability) behind regression, classification, clustering, and neural nets.',
      status: 'In Progress',
      topics: ['Supervised Learning', 'Loss Functions & Optimization', 'Neural Network Architectures', 'Feature Engineering'],
      practicalOutcome: 'Implementing models from scratch before scaling up with industry-standard ML frameworks.',
    },
    {
      id: 3,
      title: 'Data Preparation, Model Evaluation & AI Workflows',
      description: 'Learning disciplined data hygiene, handling missing values, cross-validation, hyperparameter tuning, and metric evaluation (ROC-AUC, F1-Score).',
      status: 'In Progress',
      topics: ['Pandas & NumPy pipelines', 'Confusion Matrix Analysis', 'Bias-Variance Tradeoff', 'Data Validation'],
      practicalOutcome: 'Building reproducible data pipelines that feed high-accuracy predictive models.',
    },
    {
      id: 4,
      title: 'End-to-End Project Engineering & Deployment',
      description: 'Taking intelligent models and software concepts from Jupyter notebooks to production-ready deployed web applications with intuitive UIs.',
      status: 'In Progress',
      topics: ['FastAPI / Express backends', 'React + TypeScript frontends', 'Containerization & Cloud hosting', 'RESTful APIs'],
      practicalOutcome: 'Delivering full-stack applications like SmartKisan that users can interact with globally.',
    },
    {
      id: 5,
      title: 'Software Engineering Best Practices & Testing',
      description: 'Adopting test-driven approaches, clean architecture, documentation standards, and disciplined Git version control workflows.',
      status: 'Continuous',
      topics: ['Unit Testing', 'Modular Code Design', 'Git Branching & PRs', 'Code Review Hygiene'],
      practicalOutcome: 'Maintaining clean, maintainable, team-ready codebases with zero technical debt.',
    },
    {
      id: 6,
      title: 'Open Source Contribution & Collaborative Growth',
      description: 'Participating in open-source developer communities, contributing documentation or bug fixes, and learning from experienced engineers.',
      status: 'Continuous',
      topics: ['Issue Tracking', 'Open Source Etiquette', 'Collaborative Pull Requests', 'Developer Networking'],
      practicalOutcome: 'Establishing a transparent, verifiable developer track record on GitHub and LinkedIn.',
    },
  ] as LearningGoal[],

  githubStats: {
    username: 'shakirshar610-tech',
    profileUrl: 'https://github.com/shakirshar610-tech',
    languages: [
      { name: 'Python', percent: 42, color: '#3572A5' },
      { name: 'C / C++', percent: 32, color: '#F34B7D' },
      { name: 'TypeScript & JavaScript', percent: 20, color: '#3178C6' },
      { name: 'HTML & CSS', percent: 6, color: '#E34C26' },
    ],
    strengths: [
      'Consistent daily programming and concept exploration',
      'Git commit discipline with descriptive commit messages',
      'Clean documentation with READMEs and usage instructions',
      'Focus on practical, culturally relevant problem solving',
    ],
  },
};
