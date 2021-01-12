import React from 'react';
import Link from 'next/link';

export default function Links() {
  const AllLinks = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'About',
      route: '/About',
    },
    {
      title: 'Black Dog Remedies',
      exRoute: 'https://lowears.company.site',
    },
    {
      title: 'Contact',
      exRoute: '/Contact',
    },
  ];

  return (
    <ul>
      {AllLinks.map((link, i) => {
        if (link.route) {
          return (
            <Link key={i} href={link.route}>
              <li>
                <a>{link.title}</a>
              </li>
            </Link>
          );
        }
        if (link.exRoute) {
          return (
            <li key={i}>
              <a href={link.exRoute}>{link.title}</a>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}
