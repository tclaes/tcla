import { describe, expect, it } from 'vitest';
import { profile } from '../../src/data/site';
import { getContactRows } from '../../src/lib/contact';

describe('getContactRows', () => {
  it('levert een rij voor email, linkedin en locatie', () => {
    expect(getContactRows(profile).map((row) => row.label)).toEqual([
      'Email',
      'LinkedIn',
      'Locatie',
    ]);
  });

  it('verwijst email en linkedin naar hun externe bestemming', () => {
    expect(getContactRows(profile)[0]).toMatchObject({
      value: profile.email,
      href: `mailto:${profile.email}`,
    });
    expect(getContactRows(profile)[1]).toMatchObject({
      value: profile.linkedinHandle,
      href: profile.linkedin,
    });
  });

  it('geeft locatie zonder href', () => {
    const location = getContactRows(profile)[2];
    expect(location.value).toBe(profile.location);
    expect('href' in location).toBe(false);
  });
});
