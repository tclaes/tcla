import { describe, expect, it } from 'vitest';
import { education, certifications } from '../../src/data/education';

const isNonEmpty = (value: string) => value.trim().length > 0;

describe('education', () => {
  it('heeft per item institution, degree en period ingevuld', () => {
    for (const item of education) {
      expect(isNonEmpty(item.institution)).toBe(true);
      expect(isNonEmpty(item.degree)).toBe(true);
      expect(isNonEmpty(item.period)).toBe(true);
    }
  });
});

describe('certifications', () => {
  it('bevat minstens één certificering', () => {
    expect(certifications.length).toBeGreaterThan(0);
  });

  it('heeft uitsluitend niet-lege items', () => {
    for (const certification of certifications) {
      expect(isNonEmpty(certification)).toBe(true);
    }
  });
});
