import { expect, test } from '@playwright/test';
import { PAGES } from './pages';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/over', label: 'Over' },
  { href: '/ervaring', label: 'Ervaring' },
  { href: '/projecten', label: 'Projecten' },
  { href: '/contact', label: 'Contact' },
];

const ACTIVE_PAIRS = [
  { path: '/', label: 'Home' },
  { path: '/over', label: 'Over' },
  { path: '/ervaring', label: 'Ervaring' },
  { path: '/projecten', label: 'Projecten' },
  { path: '/contact', label: 'Contact' },
];

test.describe('hoofdnavigatie', () => {
  for (const { path } of PAGES) {
    test(`toont alle navigatielinks op ${path}`, async ({ page }) => {
      await page.goto(path);
      const nav = page.getByRole('navigation', { name: 'Hoofdnavigatie' });
      for (const { href, label } of NAV_LINKS) {
        await expect(
          nav.getByRole('link', { name: new RegExp(label) }),
        ).toHaveAttribute('href', href);
      }
    });
  }

  for (const { path, label } of ACTIVE_PAIRS) {
    test(`markeert ${label} als actief op ${path}`, async ({ page }) => {
      await page.goto(path);
      const activeLink = page
        .getByRole('navigation', { name: 'Hoofdnavigatie' })
        .getByRole('link', { name: new RegExp(label) });
      await expect(activeLink).toHaveAttribute('aria-current', 'page');
    });
  }
});
