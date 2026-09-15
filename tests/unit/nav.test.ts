import { describe, expect, it } from 'vitest';
import { navItems, isActivePath } from '../../src/lib/nav';

describe('navItems', () => {
  it('bevat de vijf hoofdroutes', () => {
    expect(navItems.map((item) => item.href)).toEqual([
      '/',
      '/over',
      '/ervaring',
      '/projecten',
      '/contact',
    ]);
  });

  it('heeft per item een label en een unieke index', () => {
    const indexes = new Set(navItems.map((item) => item.index));
    expect(indexes.size).toBe(navItems.length);
    for (const item of navItems) {
      expect(item.label.trim().length).toBeGreaterThan(0);
    }
  });

  it('heeft unieke hrefs', () => {
    const hrefs = navItems.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});

describe('isActivePath', () => {
  it('markeert de homepagina enkel als exacte root-match', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/over', '/')).toBe(false);
  });

  it('markeert een subpagina als actief voor zijn eigen route', () => {
    expect(isActivePath('/over', '/over')).toBe(true);
    expect(isActivePath('/projecten', '/projecten')).toBe(true);
  });

  it('markeert een subpagina als actief voor routes die eronder vallen', () => {
    expect(isActivePath('/ervaring/extra', '/ervaring')).toBe(true);
  });

  it('matcht geen gedeeltelijk overlappende routes', () => {
    expect(isActivePath('/over', '/overig')).toBe(false);
  });
});
