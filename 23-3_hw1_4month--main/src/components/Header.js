import React from 'react';

function Header() {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' }
  ];

  const headerLinks = links.map((link, index) => (
    <a key={index} href={link.url}>{link.name}</a>
  ));

  return (
    <header>
      <nav>
        {headerLinks}
      </nav>
    </header>
  );
}

export default Header;
