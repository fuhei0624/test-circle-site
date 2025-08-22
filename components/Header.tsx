
import React, { useState, useEffect } from 'react';
import Logo from './icons/Logo';

const navLinks = [
  { name: 'Mission', href: '#' },
  { name: 'プロジェクト', href: '#' },
  { name: 'ラオスコーヒー', href: '#' },
  { name: 'スタディツアー', href: '#' },
  { name: '参加・寄付', href: '#' },
  { name: 'お問い合わせ', href: '#' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <span className={`font-bold text-lg transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            エフラオ / Smile F LAOS
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#" className="hidden md:inline-block bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-md">
          参加する
        </a>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
