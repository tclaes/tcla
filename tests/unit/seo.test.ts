import { describe, expect, it } from 'vitest';
import type { Profile } from '../../src/data/site';
import { buildPageTitle, canonicalUrl, ogImageUrl } from '../../src/lib/seo';

const profile: Profile = {
  name: 'Tom Claes',
  title: 'Front End Engineer & Architect',
  subline: 'Angular · TypeScript · Svelte — design systems',
  stack: 'Angular · TypeScript · Svelte',
  location: 'Beringen, België',
  email: 'tom.claes82@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tclaes/',
  linkedinHandle: 'linkedin.com/in/tclaes',
  availability: 'Beschikbaar',
  hero: 'Hero-tekst',
};

describe('buildPageTitle', () => {
  it('gebruikt naam + subline als geen title is meegegeven', () => {
    expect(buildPageTitle(profile)).toBe(
      `${profile.name} — ${profile.subline}`,
    );
  });

  it('gebruikt naam + subline als de title gelijk is aan de naam (home)', () => {
    expect(buildPageTitle(profile, profile.name)).toBe(
      `${profile.name} — ${profile.subline}`,
    );
  });

  it('gebruikt `title — naam` voor subpagina’s', () => {
    expect(buildPageTitle(profile, 'Contact')).toBe('Contact — Tom Claes');
  });
});

describe('canonicalUrl', () => {
  it('valt terug op de huidige URL als er geen site is geconfigureerd', () => {
    const current = new URL('http://localhost:4321/projecten');
    expect(canonicalUrl(undefined, current)).toBe(
      'http://localhost:4321/projecten',
    );
  });

  it('combineert de site-URL met het pad van de huidige URL', () => {
    const site = new URL('https://example.com/');
    const current = new URL('http://localhost:4321/over');
    expect(canonicalUrl(site, current)).toBe('https://example.com/over');
  });

  it('behoudt het pad van de huidige URL', () => {
    const site = new URL('https://example.com/base/');
    const current = new URL('http://localhost:4321/contact');
    expect(canonicalUrl(site, current)).toBe('https://example.com/contact');
  });
});

describe('ogImageUrl', () => {
  it('valt terug op een relatief pad als er geen site is geconfigureerd', () => {
    expect(ogImageUrl(undefined)).toBe('/og.png');
  });

  it('bouwt een absolute OG-image-URL op basis van de site', () => {
    expect(ogImageUrl(new URL('https://example.com/'))).toBe(
      'https://example.com/og.png',
    );
  });
});
