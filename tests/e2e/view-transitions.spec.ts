import { expect, test } from '@playwright/test';
import { PAGES } from './pages';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const w = window as typeof window & { __loadCount?: number };
    w.__loadCount = (w.__loadCount ?? 0) + 1;
  });
});

test.describe('view transitions', () => {
  for (const { path } of PAGES) {
    test(`ClientRouter is ingeschakeld op ${path}`, async ({ page }) => {
      await page.goto(path);
      await expect(
        page.locator('meta[name="astro-view-transitions-enabled"]'),
      ).toHaveAttribute('content', 'true');
    });

    test(`enkel de content heeft een transition-scope op ${path}`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(page.locator('#main')).toHaveAttribute(
        'data-astro-transition-scope',
        /astro-/,
      );
      await expect(page.locator('.site-header')).not.toHaveAttribute(
        'data-astro-transition-scope',
        /astro-/,
      );
      await expect(page.locator('.brand-mark')).not.toHaveAttribute(
        'data-astro-transition-scope',
        /astro-/,
      );
    });
  }

  test('klikken op een nav-link navigeert client-side zonder reload', async ({
    page,
  }) => {
    await page.goto('/');
    await page
      .getByRole('navigation', { name: 'Hoofdnavigatie' })
      .getByRole('link', { name: /Over/ })
      .click();
    await expect(page).toHaveURL(/\/over$/);
    await expect(page.locator('#main h1')).toContainText(
      'Ik maak interface-architectuur',
    );
    const loadCount = await page.evaluate(() => {
      const w = window as typeof window & { __loadCount?: number };
      return w.__loadCount ?? 1;
    });
    expect(loadCount, 'er mag geen full-page reload plaatsvinden').toBe(1);
  });

  test('browser-back navigeert terug zonder reload', async ({ page }) => {
    await page.goto('/over');
    await page
      .getByRole('navigation', { name: 'Hoofdnavigatie' })
      .getByRole('link', { name: /Projecten/ })
      .click();
    await expect(page).toHaveURL(/\/projecten$/);
    await page.goBack();
    await expect(page).toHaveURL(/\/over$/);
    await expect(page.locator('#main h1')).toContainText(
      'Ik maak interface-architectuur',
    );
    const loadCount = await page.evaluate(() => {
      const w = window as typeof window & { __loadCount?: number };
      return w.__loadCount ?? 1;
    });
    expect(loadCount, 'er mag geen full-page reload plaatsvinden').toBe(1);
  });

  test('respecteert prefers-reduced-motion en navigeert nog steeds', async ({
    browser,
  }) => {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto('/');
    await page
      .getByRole('navigation', { name: 'Hoofdnavigatie' })
      .getByRole('link', { name: /Contact/ })
      .click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.locator('#main h1')).toContainText('Laten we');
    await context.close();
  });
});
