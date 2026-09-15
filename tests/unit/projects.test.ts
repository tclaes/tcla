import { describe, expect, it } from 'vitest';
import { projects } from '../../src/data/projects';

const isNonEmpty = (value: string) => value.trim().length > 0;

describe('projects', () => {
  it('bevat minstens één project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('heeft per project title, client, period en description ingevuld', () => {
    for (const project of projects) {
      expect(isNonEmpty(project.title)).toBe(true);
      expect(isNonEmpty(project.client)).toBe(true);
      expect(isNonEmpty(project.period)).toBe(true);
      expect(isNonEmpty(project.description)).toBe(true);
    }
  });

  it('heeft per project minstens één tag', () => {
    for (const project of projects) {
      expect(project.tags.length).toBeGreaterThan(0);
      for (const tag of project.tags) {
        expect(isNonEmpty(tag)).toBe(true);
      }
    }
  });

  it('heeft unieke projecttitels', () => {
    const titles = projects.map((project) => project.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('verwijst bij een url naar een geldige http(s)-URL', () => {
    for (const project of projects) {
      if (project.url) {
        const url = new URL(project.url);
        expect(['http:', 'https:']).toContain(url.protocol);
      }
    }
  });

  it('bevat minstens één uitgelicht project (featured)', () => {
    expect(projects.some((project) => project.featured)).toBe(true);
  });
});
