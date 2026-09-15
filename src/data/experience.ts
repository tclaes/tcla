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
    tags: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Nx Monorepo',
      'Jest',
      'Cypress',
      'Agile',
    ],
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

export type EarlierExperience = {
  role: string;
  company: string;
  period: string;
};

export const earlierExperience: EarlierExperience[] = [
  {
    role: 'Technical Support Engineer',
    company: 'Visuatech',
    period: 'sep 2015 – feb 2017',
  },
  {
    role: 'Commercial Employee',
    company: 'Arcoom bvba',
    period: 'jul 2012 – dec 2014',
  },
  {
    role: 'Sales / Technician / Marketing',
    company: 'Xedos bvba',
    period: 'jan 2008 – feb 2011',
  },
  {
    role: 'Technical Support Engineer',
    company: 'IPG GROUP',
    period: 'sep 2006 – dec 2007',
  },
];
