import { expect, test } from '@playwright/test';
import { PAGES } from './pages';

test.describe('pagina-smoke', () => {
  for (const { path, heading } of PAGES) {
    test(`${path} laadt met een 200-status en passende h1`, async ({
      page,
    }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator('#main h1')).toContainText(heading);
    });
  }

  test('elke pagina heeft een titel met "Tom Claes" en lang="nl"', async ({
    page,
  }) => {
    for (const { path } of PAGES) {
      await page.goto(path);
      await expect(page).toHaveTitle(/Tom Claes/);
      expect(await page.locator('html').getAttribute('lang')).toBe('nl');
    }
  });
});
