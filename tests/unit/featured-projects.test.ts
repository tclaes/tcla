import { describe, expect, it } from 'vitest';
import type { Project } from '../../src/data/projects';
import { getFeaturedProjects } from '../../src/lib/projects';

const project = (overrides: Partial<Project>): Project => ({
  title: 'Test Project',
  client: 'Test Client',
  period: 'jan 2026 – heden',
  description: 'Een beschrijving voor het testproject.',
  tags: ['TypeScript'],
  ...overrides,
});

const allProjects = [
  project({ title: 'A' }),
  project({ title: 'B', featured: true }),
  project({ title: 'C', featured: true }),
  project({ title: 'D' }),
  project({ title: 'E', featured: true }),
];

describe('getFeaturedProjects', () => {
  it('toont enkel uitgelichte projecten in volgorde van de bron', () => {
    expect(getFeaturedProjects(allProjects).map((p) => p.title)).toEqual([
      'B',
      'C',
      'E',
    ]);
  });

  it('beperkt het resultaat standaard tot drie projecten', () => {
    expect(getFeaturedProjects(allProjects)).toHaveLength(3);
  });

  it('respecteert een expliciete limiet', () => {
    expect(getFeaturedProjects(allProjects, 2).map((p) => p.title)).toEqual([
      'B',
      'C',
    ]);
  });

  it('geeft een lege lijst terug zonder uitgelichte projecten', () => {
    expect(getFeaturedProjects([project({ title: 'X' })])).toEqual([]);
  });

  it('geeft een lege lijst terug voor lege input', () => {
    expect(getFeaturedProjects([])).toEqual([]);
  });
});
