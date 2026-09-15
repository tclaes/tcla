import { describe, expect, it } from 'vitest';
import {
  profile,
  aboutParagraphs,
  skillGroups,
  jobs,
  earlierExperience,
  projects,
  education,
  certifications,
} from '../../src/data/profile';

const isNonEmpty = (value: string) => value.trim().length > 0;

describe('profile', () => {
  it('heeft een naam, titel en subline ingevuld', () => {
    expect(isNonEmpty(profile.name)).toBe(true);
    expect(isNonEmpty(profile.title)).toBe(true);
    expect(isNonEmpty(profile.subline)).toBe(true);
  });

  it('heeft een geldig e-mailadres', () => {
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

describe('projects', () => {
  it('bevat minstens één project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('heeft per project title, client, period en description ingevuld', () => {
    for (const project of projects) {
      expect(isNonEmpty(project.title)).toBe(true);
      expect(isNonEmpty(project.client)).toBe(true);
      expect(isNonEmpty(project.period)).toBe(true);
      expect(isNonEmpty(project.description)).toBe(true);
    }
  });

  it('heeft per project minstens één tag', () => {
    for (const project of projects) {
      expect(project.tags.length).toBeGreaterThan(0);
      for (const tag of project.tags) {
        expect(isNonEmpty(tag)).toBe(true);
      }
    }
  });

  it('heeft unieke projecttitels', () => {
    const titles = projects.map((project) => project.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('verwijst bij een url naar een geldige http(s)-URL', () => {
    for (const project of projects) {
      if (project.url) {
        const url = new URL(project.url);
        expect(['http:', 'https:']).toContain(url.protocol);
      }
    }
  });

  it('bevat minstens één uitgelicht project (featured)', () => {
    expect(projects.some((project) => project.featured)).toBe(true);
  });
});

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
