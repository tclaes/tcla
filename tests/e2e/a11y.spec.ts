import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { PAGES } from './pages';

test.describe('a11y (WCAG 2.1 AA via axe-core)', () => {
  for (const { path } of PAGES) {
    test(`${path} heeft geen serious/critical-bevindingen`, async ({
      page,
    }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .exclude('astro-dev-toolbar')
        .analyze();

      const seriousAndCritical = results.violations.filter(
        (violation) =>
          violation.impact === 'serious' || violation.impact === 'critical',
      );
      const summary = seriousAndCritical.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        nodes: violation.nodes.length,
        help: violation.help,
      }));
      expect(summary, `op ${path}`).toEqual([]);
    });
  }
});
