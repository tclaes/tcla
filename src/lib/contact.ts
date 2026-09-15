import type { Profile } from '../data/site';

export type ContactRow = {
  label: string;
  value: string;
  href?: string;
};

export function getContactRows(profile: Profile): ContactRow[] {
  return [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    {
      label: 'LinkedIn',
      value: profile.linkedinHandle,
      href: profile.linkedin,
    },
    { label: 'Locatie', value: profile.location },
  ];
}
