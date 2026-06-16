export const projectsData = [
    {
        id: 'scaffold-ai',
        title: 'ScaffoldAI',
        shortDescription: 'AI-powered learning companion that uses Socratic questioning, misconception tracking, and personalized learning analytics to help students build understanding instead of relying on answer-first AI.',
        fullDescription: 'ScaffoldAI is an AI-driven educational platform designed to act as a personalized tutor. Rather than directly providing solutions, it guides students through problems using Socratic questioning, adaptive hints, and misconception detection. The platform continuously tracks concept mastery, learning patterns, and recurring struggles, while providing actionable insights to teachers and parents through dedicated analytics dashboards.',
        tags: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL','TailwindCSS', ],
        features: [
            'Socratic tutoring system that guides students through problems instead of revealing answers',
            'Personalized Stuck Maps for tracking recurring misconceptions and weak concepts',
            'Adaptive hint generation based on student responses and confidence levels',
            'Concept mastery heatmaps and confidence scoring across subjects',
            'Teacher dashboard with class-level analytics and misconception insights',
            'Parent dashboard for monitoring learning progress, strengths, and weaknesses',
            'Session history and learner profiling for personalized future guidance'
        ],
        challenges: [
            'Designing an AI tutoring workflow that encourages learning without creating frustration',
            'Tracking misconceptions and concept mastery across multiple learning sessions',
            'Generating reliable structured outputs from LLMs for educational workflows',
            'Balancing personalization, analytics, and usability across different user roles'
        ],
        solutions: [
            'Implemented a Socratic tutoring engine that adapts questions based on student understanding',
            'Built persistent learner profiles and Stuck Maps to track recurring learning gaps',
            'Added structured output validation and fallback parsing for reliable AI responses',
            'Designed dedicated student, teacher, and parent dashboards with role-specific insights'
        ],
        github: 'https://github.com/A23droid/scaffold-ai',
        live: 'https://scaffold-ai.vercel.app/',
        featured: true
    },
    {
        id: 'breathe-map',
        title: 'Breathe Map',
        shortDescription: 'Smart-city decision support platform for zone-level air quality simulation, GIS visualization, urban pollution analysis, and emission-reduction scenario planning.',
        fullDescription: 'Breathe Map is a smart-city air quality simulation and decision-support platform designed to help planners analyze pollution patterns at a hyperlocal level. The system enables users to create and manage spatial urban zones, visualize AQI distributions on interactive GIS maps, simulate emission-reduction strategies, and generate analytical reports. The platform combines modern web technologies with lightweight machine learning models to support data-driven urban planning and environmental analysis.',
        tags: [
            'Next.js',
            'TypeScript',
            'Leaflet.js',
            'TailwindCSS',
            'Supabase',
            'PostgreSQL',
        ],
        features: [
            'Interactive GIS-based map with spatial zone creation and editing',
            'Multi-city workspace architecture with city-specific simulations',
            'Zone-level AQI visualization using CPCB-aligned color indicators',
            'Simulation engine for testing emission-reduction strategies',
            'Machine learning-based AQI estimation and pollution pattern clustering',
            'Correlation analysis between urban factors and pollution levels',
            'CSV/PDF report export for environmental planning insights',
            'Responsive dashboard UI optimized for desktop and mobile'
        ],
        challenges: [
            'The initial architecture was tightly coupled to a single city, limiting scalability and long-term extensibility',
            'Designing intuitive spatial workflows for non-technical users without requiring manual coordinate input',
            'Rendering and managing dynamic GeoJSON zones interactively while maintaining responsive map performance',
            'Creating realistic hyperlocal AQI variation using limited proxy and synthetic datasets instead of real sensor networks',
            'Building a clean and interpretable analytics experience that balances technical environmental insights with user-friendly visualization'
        ],
        solutions: [
            'Refactored the platform into a scalable multi-city workspace architecture with isolated city contexts and zone scoping',
            'Implemented map-based click-to-place zone creation with automatic polygon generation to simplify spatial interaction UX',
            'Built optimized Leaflet.js rendering workflows with dynamic GeoJSON layers and contextual zone management',
            'Developed lightweight ML-assisted estimation and correlation systems using urban proxy features such as traffic, land use, and population density',
            'Designed an interactive analytics dashboard with correlation analysis, clustering insights, simulation workflows, and exportable planning reports'
        ],
        github: 'https://github.com/A23droid/breathe-map',
        live: 'https://breathe-map-w.vercel.app/',
        featured: true
    },
    {
        id: 'the-logbook',
        title: 'The LogBook',
        shortDescription: 'Developer-focused blogging platform built with Astro featuring Markdown-driven publishing, dynamic routing, optimized static generation, and a polished developer-centric UI.',

        fullDescription: 'The LogBook is a modern technical blogging platform designed to explore content-focused web architecture using Astro. The project emphasizes performance, maintainability, and minimal client-side JavaScript while integrating selective React-based interactivity for an improved reading experience.',

        tags: ['Astro', 'React', 'TailwindCSS', 'Vite', 'Markdown', 'Vercel'],

        features: [
            'Markdown-powered publishing workflow with Astro Content Collections',
            'Dynamic blog routing using generated static paths',
            'Client-side tag filtering with React hydration',
            'Responsive dark-themed developer-focused UI',
            'Optimized static site generation with minimal JavaScript',
            'SEO-friendly architecture with structured metadata'
        ],

        challenges: [
            'Resolving deployment-time 404 issues caused by Astro dynamic routes on Vercel',
            'Balancing Astro’s static-first architecture with interactive React-based filtering',
            'Maintaining visual consistency between content-heavy blog pages and custom themed UI components',
            'Managing TailwindCSS v4 integration issues with Astro and custom prose styling',
            'Ensuring Markdown-rendered content remained readable while preserving the site’s dark green aesthetic'
        ],

        solutions: [
            'Implemented static path generation using Astro Content Collections and configured Vercel for proper static route handling',
            'Used selective React hydration (`client:load`) to add interactivity without sacrificing performance',
            'Refactored the design system to use green accents selectively while keeping reading surfaces neutral for better UX',
            'Resolved Tailwind v4 compatibility issues by restructuring global styling and moving prose customization into utility-based classes',
            'Created a reusable layout and typography system optimized for long-form technical content readability'
        ],

        github: 'https://github.com/A23droid/the-logbook',

        live: 'https://the-logbook-seven.vercel.app/',

        featured: false
    },
    {
        id: 'eco-classify',
        title: 'Eco-Classify',
        shortDescription: 'AI-powered e-waste classification dashboard with reusable React components, interactive model comparison visualizations, dataset filtering, and backend-integrated prediction workflows.',
        fullDescription: 'Eco-Classify is an AI-powered solution for e-waste management, featuring machine learning models that classify different types of electronic waste. The dashboard provides insights into model performance and enables real-time predictions.',
        tags: ['React', 'JavaScript', 'TailwindCSS', 'Recharts'],
        features: [
            'AI-powered e-waste classification with multiple ML models',
            'Interactive model comparison with visualization charts',
            'Real-time prediction workflow with instant results',
            'Dataset filtering and exploration tools',
            'Reusable component architecture for scalability',
            'Detailed model performance metrics and analytics'
        ],
        challenges: [
            'Visualizing complex ML model metrics in an accessible way',
            'Handling large dataset filtering without performance loss',
            'Creating an intuitive prediction workflow',
            'Integrating backend ML services with frontend React app'
        ],
        solutions: [
            'Used Recharts for dynamic, interactive data visualizations',
            'Implemented virtual scrolling for efficient dataset rendering',
            'Designed a step-by-step prediction interface with clear feedback',
            'Built a REST API integration layer with loading states and error handling'
        ],
        github: 'https://github.com/A23droid/e-waste-classifier',
        live: 'https://eco-classify-one.vercel.app/',
        featured: true
    }, 
    {
        id: 'ship-docs',

        title: 'ShipDocs',

        shortDescription: 'AI-powered README generation platform that analyzes GitHub repositories and automatically produces professional, structured documentation using FastAPI, React, Docker, Azure, and LLMs.',

        fullDescription: 'ShipDocs is a full-stack AI-powered developer productivity platform that transforms GitHub repositories into polished README documentation within seconds. By combining repository structure analysis, GitHub metadata extraction, and large language models, ShipDocs helps developers generate professional project documentation without manually writing README files. The platform features a modern React frontend, FastAPI backend, Dockerized deployment pipeline, and cloud-native hosting using Azure Container Apps.',

        tags: [
            'React',
            'TypeScript',
            'Python',
            'Docker',
            'Azure',
            'TailwindCSS'
        ],

        features: [
            'AI-generated README creation from public GitHub repositories',
            'Repository structure analysis using GitHub API integration',
            'Support for custom project descriptions and additional context',
            'Markdown preview and editing workflow for generated documentation',
            'Responsive frontend built with React, TypeScript, and TailwindCSS',
            'Cloud deployment using Azure Container Apps and Azure Container Registry',
            'Dockerized backend for consistent local and production environments',
            'FastAPI-powered REST API architecture for scalable request handling'
        ],

        challenges: [
            'Designing reliable prompts capable of generating high-quality README files across repositories with vastly different structures',
            'Extracting meaningful repository context while avoiding unnecessary files and noisy directory information',
            'Managing frontend-backend integration across local development, Docker containers, and cloud deployments',
            'Configuring Azure Container Registry, Container Apps, environment variables, and production networking',
            'Implementing secure API communication and resolving CORS issues between independently deployed frontend and backend services',
            'Building a deployment workflow that remains reproducible and maintainable for future updates'
        ],

        solutions: [
            'Developed a repository analysis pipeline that extracts metadata and filtered project structures before AI processing',
            'Integrated GitHub API lookups with custom preprocessing logic to provide cleaner repository context to the language model',
            'Containerized the FastAPI backend using Docker and deployed it through Azure Container Registry and Container Apps',
            'Separated frontend and backend deployment responsibilities using Vercel for frontend hosting and Azure for backend infrastructure',
            'Implemented environment-based configuration for API endpoints, secrets, and deployment-specific settings',
            'Configured production-ready CORS policies and cloud environment variables to ensure seamless frontend-backend communication'
        ],

        github: 'https://github.com/A23droid/ship-docs',

        live: 'https://ship-docs-ai.vercel.app',

        featured: false
    },
    {
        id: 'budget-buddy',

        title: 'Budget Buddy',

        shortDescription: 'Personal finance tracking web app built with vanilla JavaScript featuring real-time expense management, budgeting insights, persistent local storage, and a clean productivity-focused UI.',

        fullDescription: 'Budget Buddy is a lightweight personal finance management application designed to simplify daily expense tracking and budgeting. Built using core frontend technologies without external frameworks, the project focuses on responsiveness, intuitive user interaction, and efficient state management using browser storage APIs.',

        tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],

        features: [
            'Track income and expenses with real-time balance calculation',
            'Persistent data storage using browser LocalStorage',
            'Categorized transaction management for better spending analysis',
            'Responsive UI optimized for both desktop and mobile devices',
            'Instant financial summaries including balance, income, and expenses',
            'Minimal and distraction-free interface focused on usability'
        ],

        challenges: [
            'Managing transaction state efficiently without using frontend frameworks',
            'Preventing inconsistent balance calculations after transaction deletion or edits',
            'Designing a responsive layout that remained clean even with large transaction histories',
            'Handling LocalStorage synchronization while keeping the UI reactive',
            'Creating an intuitive finance dashboard without overwhelming users with unnecessary complexity'
        ],

        solutions: [
            'Implemented modular JavaScript functions to centralize transaction and balance management logic',
            'Recomputed financial summaries dynamically after every CRUD operation to ensure consistency',
            'Used flexible CSS layouts and adaptive spacing strategies to maintain readability across screen sizes',
            'Built a LocalStorage-based persistence layer with automatic rendering during application initialization',
            'Focused the UI around essential financial metrics and streamlined interactions for faster usability'
        ],

        github: 'https://github.com/A23droid/budget-buddy',

        live: 'https://my-budget-buddy-app.netlify.app/',

        featured: false
    }
];