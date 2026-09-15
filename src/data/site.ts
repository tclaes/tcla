export type Profile = {
  name: string;
  title: string;
  subline: string;
  stack: string;
  location: string;
  email: string;
  linkedin: string;
  linkedinHandle: string;
  availability: string;
  hero: string;
};

export const profile: Profile = {
  name: 'Tom Claes',
  title: 'Front End Engineer & Architect',
  subline:
    'Angular · TypeScript · Svelte — design systems, accessibility & AI-assisted development',
  stack: 'Angular · TypeScript · Svelte',
  location: 'Beringen, België',
  email: 'tom.claes82@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tclaes/',
  linkedinHandle: 'linkedin.com/in/tclaes',
  availability:
    'Beschikbaar · hybride of op afstand · regio Limburg / Hasselt',
  hero: 'Ik vertaal complexe noden naar heldere, performante interfaces — en neem de architectuur eromheen mee.',
};
