import { describe, expect, it } from 'vitest';
import { aboutParagraphs, skillGroups } from '../../src/data/about';

const isNonEmpty = (value: string) => value.trim().length > 0;

describe('aboutParagraphs', () => {
  it('bevat minstens één alinea', () => {
    expect(aboutParagraphs.length).toBeGreaterThan(0);
  });

  it('heeft uitsluitend niet-lege alinea’s zonder rand-whitespace', () => {
    for (const paragraph of aboutParagraphs) {
      expect(isNonEmpty(paragraph)).toBe(true);
      expect(paragraph).toBe(paragraph.trim());
    }
  });
});

describe('skillGroups', () => {
  it('bevat minstens één groep', () => {
    expect(skillGroups.length).toBeGreaterThan(0);
  });

  it('heeft per groep een titel en minstens één skill', () => {
    for (const group of skillGroups) {
      expect(isNonEmpty(group.title)).toBe(true);
      expect(group.skills.length).toBeGreaterThan(0);
      for (const skill of group.skills) {
        expect(isNonEmpty(skill)).toBe(true);
      }
    }
  });

  it('bevat geen dubbele skill-namen over alle groepen', () => {
    const allSkills = skillGroups.flatMap((group) => group.skills);
    const unique = new Set(allSkills);
    expect(unique.size).toBe(allSkills.length);
  });
});
