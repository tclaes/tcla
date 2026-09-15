export type NavItem = {
  href: string;
  label: string;
  index: string;
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Home', index: '01' },
  { href: '/over', label: 'Over', index: '02' },
  { href: '/ervaring', label: 'Ervaring', index: '03' },
  { href: '/projecten', label: 'Projecten', index: '04' },
  { href: '/contact', label: 'Contact', index: '05' },
];

export function isActivePath(path: string, href: string): boolean {
  return href === '/' ? path === '/' : path.startsWith(href);
}
