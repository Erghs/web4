import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>@Все права защищены {currentYear} год</p>
    </footer>
  );
}


export default Footer;