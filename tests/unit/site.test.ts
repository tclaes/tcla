import { describe, expect, it } from 'vitest';
import { profile } from '../../src/data/site';

const isNonEmpty = (value: string) => value.trim().length > 0;

describe('profile', () => {
  it('heeft een naam, titel en subline ingevuld', () => {
    expect(isNonEmpty(profile.name)).toBe(true);
    expect(isNonEmpty(profile.title)).toBe(true);
    expect(isNonEmpty(profile.subline)).toBe(true);
  });

  it('heeft een stack ingevuld', () => {
    expect(isNonEmpty(profile.stack)).toBe(true);
  });

  it('is een geldige e-mail', () => {
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('verwijst naar een geldige https-LinkedIn-URL', () => {
    const url = new URL(profile.linkedin);
    expect(url.protocol).toBe('https:');
    expect(url.hostname).toContain('linkedin.com');
  });

  it('heeft een linkedinHandle die overeenkomt met de LinkedIn-URL', () => {
    expect(profile.linkedin).toContain(profile.linkedinHandle);
  });

  it('heeft locatie, beschikbaarheid en hero-tekst ingevuld', () => {
    expect(isNonEmpty(profile.location)).toBe(true);
    expect(isNonEmpty(profile.availability)).toBe(true);
    expect(isNonEmpty(profile.hero)).toBe(true);
  });
});
