import { describe, expect, it } from 'vitest';
import { jobs, earlierExperience } from '../../src/data/experience';

const isNonEmpty = (value: string) => value.trim().length > 0;

describe('jobs', () => {
  it('bevat minstens één job', () => {
    expect(jobs.length).toBeGreaterThan(0);
  });

  it('heeft per job role, company, location en period ingevuld', () => {
    for (const job of jobs) {
      expect(isNonEmpty(job.role)).toBe(true);
      expect(isNonEmpty(job.company)).toBe(true);
      expect(isNonEmpty(job.location)).toBe(true);
      expect(isNonEmpty(job.period)).toBe(true);
    }
  });

  it('gebruikt een consistent period-formaat (maand jaar – maand jaar)', () => {
    const periodFormat = /^\w{3} \d{4}\s+–\s+\w{3} \d{4}$/;
    for (const job of jobs) {
      expect(job.period).toMatch(periodFormat);
    }
  });

  it('heeft per job minstens één bullet en één tag', () => {
    for (const job of jobs) {
      expect(job.bullets.length).toBeGreaterThan(0);
      expect(job.tags.length).toBeGreaterThan(0);
      for (const bullet of job.bullets) {
        expect(isNonEmpty(bullet)).toBe(true);
      }
      for (const tag of job.tags) {
        expect(isNonEmpty(tag)).toBe(true);
      }
    }
  });
});

describe('earlierExperience', () => {
  it('heeft per item role, company en period ingevuld', () => {
    for (const item of earlierExperience) {
      expect(isNonEmpty(item.role)).toBe(true);
      expect(isNonEmpty(item.company)).toBe(true);
      expect(isNonEmpty(item.period)).toBe(true);
    }
  });
});
