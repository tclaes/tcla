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
    tags: [
      'Angular',
      'NgRx',
      'Web Components',
      'Nx Monorepo',
      'Cypress',
      'SAP',
    ],
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
    description:
      'Web accessibility checker powered by axe-core — audit elke website op WCAG 2.1 AA-compliancy.',
    tags: ['Web Components', 'Claude', 'Netlify', 'Accessibility'],
    url: 'https://a11y-check.eu/',
  },
  {
    title: 'Twan Claes',
    client: 'Persoonlijk project',
    period: 'nov 2020 – heden',
    description:
      'Persoonlijke website voor mijn zoon Twan — zijn verhaal, in het kort.',
    tags: ['Vue.js', 'Prismic CMS', 'Netlify'],
    url: 'https://twanclaes.eu/',
  },
];
