import { expect, test } from '@playwright/test';
import { PAGES } from './pages';

test.describe('links', () => {
  test('alle interne hrefs leiden naar een bestaande pagina (200)', async ({
    page,
  }) => {
    const internal = new Set<string>();
    for (const { path } of PAGES) {
      await page.goto(path);
      const hrefs = await page
        .locator('a[href]')
        .evaluateAll((links) =>
          links
            .map((link) => link.getAttribute('href'))
            .filter((href): href is string => href !== null),
        );
      for (const href of hrefs) {
        if (href.startsWith('/') && !href.startsWith('//')) {
          internal.add(href.split('#')[0].split('?')[0]);
        }
      }
    }

    expect(internal.size).toBeGreaterThan(0);
    for (const href of internal) {
      const response = await page.request.get(href);
      expect(response.status(), `${href} zou 200 moeten teruggeven`).toBe(200);
    }
  });

  test('externe links in een nieuw tabblad hebben rel="noopener"', async ({
    page,
  }) => {
    for (const { path } of PAGES) {
      await page.goto(path);
      const missingRel = await page
        .locator('a[target="_blank"]')
        .evaluateAll((links) =>
          links
            .filter(
              (link) =>
                !(link.getAttribute('rel') || '')
                  .split(/\s+/)
                  .includes('noopener'),
            )
            .map((link) => link.getAttribute('href')),
        );
      expect(missingRel, `op ${path} mist rel="noopener"`).toEqual([]);
    }
  });
});
