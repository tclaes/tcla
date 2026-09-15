export const aboutParagraphs = [
  'Ik werk als Solution Engineer aan schaalbare weboplossingen met een sterke focus op frontend, UI/UX en web accessibility.',
  'Ik haal energie uit het vertalen van complexe noden naar duidelijke, intuïtieve interfaces die echt waarde toevoegen. Naast frontend-werk heb ik ook ervaring met full-stack development en het bouwen van digitale oplossingen van concept tot implementatie.',
  'In Agile teams werk ik graag samen met designers, developers en andere stakeholders om moderne platformen en design systems uit te werken die consistentie, kwaliteit en impact brengen.',
  'Accessibility is onderdeel van mijn workflow, geen bijzaak. Performance en onderhoudbaarheid zitten in de architectuurbeslissingen, niet in een checklist achteraf.',
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
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
    skills: [
      'Jest',
      'Cypress',
      'Vitest',
      'Playwright',
      'Accessibility (WCAG)',
      'Code reviews',
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      'SQL',
      'REST & GraphQL',
      'Node.js',
      'Spring Boot (basis)',
      'Drupal integration',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'Azure DevOps',
      'AWS (Cloud Practitioner)',
      'CI/CD',
      'Netlify',
      'Supabase',
      'Docker (basis)',
    ],
  },
  {
    title: 'AI-assisted development',
    skills: ['Claude API', 'GitHub Copilot', 'AI-assisted development'],
  },
];
