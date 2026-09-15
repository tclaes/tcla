import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import ProjectCard from '../../src/components/ProjectCard.astro';
import type { Project } from '../../src/data/projects';

// Component-test via de officiële Astro Container API:
// https://docs.astro.build/en/guides/testing/#vitest-and-container-api

const baseProject: Project = {
  title: 'Test Project',
  client: 'Test Client',
  period: 'jan 2026 – heden',
  description: 'Een beschrijving voor het testproject.',
  tags: ['TypeScript', 'Astro'],
};

describe('ProjectCard', () => {
  test('rendert een <a> met externe-link-attributen wanneer url aanwezig is', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ProjectCard, {
      props: {
        project: { ...baseProject, url: 'https://example.com/' },
        index: 1,
        total: 3,
      },
    });

    expect(html).toContain('<a ');
    expect(html).toContain('class="project-link is-link"');
    expect(html).toContain('href="https://example.com/"');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener"');
    expect(html).toContain('aria-label=');
  });

  test('rendert een <div> zonder link wanneer url ontbreekt', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ProjectCard, {
      props: { project: baseProject, index: 2, total: 7 },
    });

    expect(html).toContain('<div ');
    expect(html).toContain('class="project-link"');
    expect(html).not.toContain('href=');
  });

  test('nummering in het formaat "01 / N"', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ProjectCard, {
      props: { project: baseProject, index: 1, total: 5 },
    });

    expect(html).toContain('01');
    expect(html).toContain('/ 5');
  });

  test('toont titel, client, beschrijving en alle tags', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ProjectCard, {
      props: { project: baseProject, index: 1, total: 1 },
    });

    expect(html).toContain(baseProject.title);
    expect(html).toContain(baseProject.client);
    expect(html).toContain(baseProject.description);
    for (const tag of baseProject.tags) {
      expect(html).toContain(tag);
    }
  });
});
