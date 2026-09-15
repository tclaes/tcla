import type { Profile } from '../data/site';

export function buildPageTitle(profile: Profile, title?: string): string {
  const safeTitle = title ?? profile.name;
  return safeTitle === profile.name
    ? `${profile.name} — ${profile.subline}`
    : `${safeTitle} — ${profile.name}`;
}

export function canonicalUrl(site: URL | undefined, current: URL): string {
  return site ? new URL(current.pathname, site).toString() : current.toString();
}

export function ogImageUrl(site: URL | undefined): string {
  return site ? new URL('/og.png', site).toString() : '/og.png';
}
