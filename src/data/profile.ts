export const profile = {
  name: 'Tom Claes',
  title: 'Front End Engineer & Architect',
  subline:
    'Angular · TypeScript · Svelte — design systems, accessibility & AI-assisted development',
  location: 'Beringen, België',
  email: 'tom.claes82@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tclaes/',
  linkedinHandle: 'linkedin.com/in/tclaes',
  availability: 'Beschikbaar · hybride of op afstand · Limburg / Hasselt en regio',
  hero: 'Ik vertaal complexe noden naar heldere, performante interfaces — en neem de architectuur eromheen mee.',
};

export const aboutParagraphs = [
  'Ik werk als Solution Engineer aan schaalbare weboplossingen met een sterke focus op frontend, UI/UX en web accessibility.',
  'Ik haal energie uit het vertalen van complexe noden naar duidelijke, intuïtieve interfaces die echt waarde toevoegen. Naast frontend-werk heb ik ook ervaring met full-stack development en het bouwen van digitale oplossingen van concept tot implementatie.',
  'In Agile teams werk ik graag samen met designers, developers en andere stakeholders om moderne platformen en design systems uit te werken die consistentie, kwaliteit en impact brengen.',
  'Accessibility is onderdeel van mijn workflow, geen bijzaak. Performance en onderhoudbaarheid zitten in de architectuurbeslissingen, niet in een checklist achteraf.',
];

export const skillGroups = [
  {
    title: 'Frontend & Frameworks',
    skills: [
      'Angular',
      'TypeScript',
      'Svelte',
      'React',
      'Vue.js',
      'Nuxt.js',
      'RxJS',
      'NgRx',
      'Web Components',
      'Tailwind CSS',
      'CSS3 / SCSS',
    ],
  },
  {
    title: 'Architectuur & Tooling',
    skills: [
      'Design Systems',
      'Application Architecture',
      'Nx Monorepo',
      'Storybook',
      'Vite',
      'ESLint & Prettier',
      'Headless Commerce',
      'PWA & Performance',
    ],
  },
  {
    title: 'Testen & Kwaliteit',
    skills: ['Jest', 'Cypress', 'Vitest', 'Playwright', 'Accessibility (WCAG)', 'Code reviews'],
  },
  {
    title: 'Backend & Data',
    skills: ['SQL', 'REST & GraphQL', 'Node.js', 'Spring Boot (basis)', 'Drupal integration'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure DevOps', 'AWS (Cloud Practitioner)', 'CI/CD', 'Netlify', 'Supabase', 'Docker (basis)'],
  },
  {
    title: 'AI-assisted development',
    skills: ['Claude API', 'GitHub Copilot', 'AI-assisted development'],
  },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const jobs: Job[] = [
  {
    role: 'Solution Engineer',
    company: 'we+ Benelux',
    location: 'Hasselt · hybride',
    period: 'aug 2021 – jun 2026',
    bullets: [
      'Ontwerp en implementatie van schaalbare, enterprise-grade weboplossingen voor Benelux-klanten.',
      'Bouwen en onderhouden van Angular-gebaseerde design systems met herbruikbare component libraries.',
      'Moderniseren van legacy platforms naar eigentijdse Angular-architecturen.',
      'Leiden van frontend-architectuurbeslissingen, incl. state management en performance-optimalisatie.',
      'Kwaliteitsborging via code reviews en geautomatiseerd testen (Jest, Cypress, Storybook).',
    ],
    tags: ['Angular', 'TypeScript', 'RxJS', 'Nx Monorepo', 'Jest', 'Cypress', 'Agile'],
  },
  {
    role: 'Front End Engineer',
    company: 'Cegeka',
    location: 'Hasselt · hybride',
    period: 'dec 2018 – aug 2021',
    bullets: [
      'Ontwikkeling van Angular- en Drupal-frontends voor enterprise klanten.',
      'Bouwen van responsieve, toegankelijke webinterfaces conform WCAG-richtlijnen.',
      'Samenwerking met backend-teams voor API-integratie en datamodellering.',
    ],
    tags: ['Angular', 'TypeScript', 'Drupal', 'GraphQL', 'SQL', 'WCAG'],
  },
  {
    role: 'Web Application Developer',
    company: 'QNH Consulting',
    location: 'Hasselt',
    period: 'aug 2017 – dec 2018',
    bullets: [
      'Ontwikkeling van webapplicaties voor enterprise klanten.',
      'Migratie van legacy Liferay-platform naar een op maat gebouwde Spring Boot-applicatie.',
    ],
    tags: ['JavaScript', 'Java', 'Spring Boot', 'SQL'],
  },
];

export const earlierExperience = [
  { role: 'Technical Support Engineer', company: 'Visuatech', period: 'sep 2015 – feb 2017' },
  { role: 'Commercial Employee', company: 'Arcoom bvba', period: 'jul 2012 – dec 2014' },
  { role: 'Sales / Technician / Marketing', company: 'Xedos bvba', period: 'jan 2008 – feb 2011' },
  { role: 'Technical Support Engineer', company: 'IPG GROUP', period: 'sep 2006 – dec 2007' },
];

export type Project = {
  title: string;
  client: string;
  period: string;
  description: string;
  tags: string[];
  featured?: boolean;
  url?: string;
};

export const projects: Project[] = [
  {
    title: 'CE3 — Connecting Expertise',
    client: 'we+ Benelux',
    period: 'jun 2024 – feb 2026',
    description:
      'Leidde de frontend-herschrijving van een legacy talentplatform naar een moderne Angular-applicatie. Introducerde geautomatiseerd testen en gestandaardiseerde tooling voor regressiestabiliteit en release confidence.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'Jest', 'Chart.js', 'Editor.js'],
    featured: true,
  },
  {
    title: 'Echo Portal',
    client: 'Huntsman · we+ Benelux',
    period: 'aug 2021 – dec 2025',
    description:
      'Migratie van SAP Spartacus naar SAP Composable Storefront met behoud van volledige functionaliteit. Leidde het UI-redesign en zette een robuuste frontend-tooling op (Nx, Storybook, Cypress).',
    tags: ['Angular', 'NgRx', 'Web Components', 'Nx Monorepo', 'Cypress', 'SAP'],
    featured: true,
  },
  {
    title: 'Joyn KBC Customercards',
    client: 'we+ Benelux',
    period: 'sep 2025 – feb 2026',
    description:
      'Migratie van een legacy Create React App naar React met Vite, ter voorbereiding op een Node.js-versie-update.',
    tags: ['React', 'Vite', 'TypeScript', 'Vitest', 'Node.js'],
  },
  {
    title: 'Notaris.be — Fednot',
    client: 'Cegeka',
    period: 'aug 2019 – dec 2020',
    description:
      'Ontwerp en implementatie van een herbruikbaar design system voor meerdere platformen, met toegankelijke en schaalbare interfaces voor digitale diensten.',
    tags: ['Design System', 'JavaScript', 'Drupal', 'WCAG', 'Cypress'],
  },
  {
    title: 'KBVB · RBFA · Voetbal Vlaanderen',
    client: 'Cegeka',
    period: 'dec 2018 – dec 2019',
    description:
      'Volledige herontwerp en modernisering van het digitale KBVB-platform — drie websites, klaar voor het WK. Schaalbaar Angular-platform met GraphQL-integratie.',
    tags: ['Angular', 'GraphQL', 'Node.js', 'RxJS', 'Jest', 'Cypress'],
    url: 'https://www.rbfa.be/',
  },
  {
    title: 'Bmx Calendar',
    client: 'Persoonlijk project',
    period: 'feb 2026 – heden',
    description:
      'Progressive Web App om een gepersonaliseerde BMX-kalender te maken en te exporteren met BMX-evenementen in België.',
    tags: ['Svelte', 'TypeScript', 'Supabase', 'Claude'],
    url: 'https://bmxkalender.be/',
  },
  {
    title: 'My Toolbox',
    client: 'we+ Benelux',
    period: 'jan 2024 – apr 2024',
    description:
      'Design en implementatie van een schaalbare Angular-frontend binnen een Nx Monorepo, met herbruikbare Web Components en geautomatiseerde CI/CD-pipelines.',
    tags: ['Angular', 'Web Components', 'Nx Monorepo', 'Azure DevOps', 'Jest'],
  },
  {
    title: 'a11y Check',
    client: 'Persoonlijk project',
    period: 'lopend',
    description: 'Web accessibility checker powered by axe-core — audit elke website op WCAG 2.1 AA-compliancy.',
    tags: ['Web Components', 'Claude', 'Netlify', 'Accessibility'],
    url: 'https://a11y-check.eu/',
  },
  {
    title: 'Twan Claes',
    client: 'Persoonlijk project',
    period: 'nov 2020 – heden',
    description: 'Persoonlijke website voor mijn zoon Twan — zijn verhaal, in het kort.',
    tags: ['Vue.js', 'Prismic CMS', 'Netlify'],
    url: 'https://twanclaes.eu/',
  },
];

export const education = [
  {
    institution: 'KU Leuven — Group T',
    degree: 'Graduaat Marketing',
    period: '2008 – 2011',
  },
  {
    institution: 'Google / Udacity',
    degree: 'Nanodegree — Mobile Web Specialist',
    period: '2017 – 2018',
  },
  {
    institution: 'HOWEST',
    degree: 'Multimedia & Communicatie Technologie',
    period: '2004 – 2006',
  },
  {
    institution: 'Sint Fransiscuscollege',
    degree: 'Informatica — Informaticabeheer',
    period: '2001 – 2004',
  },
];

export const certifications = [
  'LLPA Digital Skills Cup — National Champion 2026 IT Developer (Leading Learning Partners Association)',
  'Building with the Claude API (Anthropic)',
  'Complete React & Enterprise UI Development (Master.dev)',
  'Advanced Angular: Performance & Enterprise State (Master.dev)',
  'AWS Certified Cloud Practitioner',
  'Microsoft Certified: Azure Fundamentals',
  'Angular Master Class (thoughtram)',
  'Mobile Web Specialist (Google/Udacity)',
];