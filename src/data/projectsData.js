export const projectsData = [
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

        featured: true
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

        live: 'https://budget-buddy-your-link.vercel.app/',

        featured: false
    },
    {
        id: 'quick-talk',

        title: 'Quick Talk',

        shortDescription: 'Modern chat-inspired messaging UI built with React and TailwindCSS featuring theme switching, persistent local conversations, smooth animations, and keyboard-friendly interactions.',

        fullDescription: 'Quick Talk is a sleek frontend-focused chat application designed to explore modern messaging UI patterns and responsive interaction design. The project emphasizes clean visual hierarchy, smooth micro-interactions, theme customization, and persistent local chat state using browser storage APIs.',

        tags: [
            'React',
            'JavaScript',
            'TailwindCSS',
            'LocalStorage',
        ],

        features: [
            'Modern messaging interface with responsive chat layout',
            'Persistent local chat storage using browser LocalStorage',
            'Dark and light theme switching with smooth transitions',
            'Keyboard-friendly interactions for improved usability',
            'Animated UI interactions and hover micro-interactions',
            'Mobile-responsive layout optimized for smaller devices'
        ],

        challenges: [
            'Designing a chat UI that felt modern and responsive without relying on backend infrastructure',
            'Managing persistent local conversation state while keeping the interface reactive',
            'Creating smooth theme transitions without visual flickering',
            'Maintaining clean spacing and readability across mobile and desktop layouts',
            'Building interactive messaging workflows while keeping the application lightweight'
        ],

        solutions: [
            'Implemented component-based UI architecture using reusable React components',
            'Used LocalStorage persistence with synchronized React state updates for seamless local chat retention',
            'Built animated theme transitions using TailwindCSS utility classes and smooth state-driven styling',
            'Designed adaptive layouts and flexible spacing systems to improve responsiveness across devices',
            'Focused on frontend interaction quality and UX polish instead of unnecessary backend complexity'
        ],

        github: 'https://github.com/A23droid/quick-talk',

        live: 'https://quick-talk-red.vercel.app/',

        featured: false
    }
];