import React, { useEffect } from 'react';
import './Header.css';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxAmount = scrollY * 0.3;
      document.querySelector('.header')?.style.setProperty('--scroll-y', `${parallaxAmount}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="author-name">AYUSHMAN</h1>
        <p className="tagline">Stories & Tales</p>
      </div>
    </header>
  );
}

export default Header;
