// One place for the site's menus and links. The header and footer both read from here,
// so adding or renaming a page section only needs a change in this file.
// Devin's email is intentionally not on the site: visitors use the contact form.

export const links = {
  openRoles: 'https://www.linkedin.com/company/blue-ridge-talent/jobs/',
  companyLinkedIn: 'https://www.linkedin.com/company/blue-ridge-talent/',
  devinLinkedIn: 'https://www.linkedin.com/in/devin-moretz-7a746424/',
};

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const nav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Overview', href: '/services' },
      { label: 'Talent Advisory', href: '/services#talent-advisory' },
      { label: 'Embedded Recruiting', href: '/services#embedded-recruiting' },
      { label: 'Professional Search', href: '/services#professional-search' },
      { label: 'In-House Talent Acquisition', href: '/services#in-house' },
      { label: 'Industries', href: '/services#industries' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'What We Believe', href: '/about#beliefs' },
      { label: 'Our Approach', href: '/about#approach' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
