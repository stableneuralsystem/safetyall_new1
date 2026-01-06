import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onOpenModal: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'О компании', href: '#about' },
  { label: 'Почему мы', href: '#importance' },
  { label: 'Курсы', href: '#courses' },
  { label: 'Процесс', href: '#process' },
  { label: 'Документы', href: '#documents' },
  { label: 'Контакты', href: '#contacts' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-transform">
                S
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-wide text-white">
                SAFETY<span className="text-cyan-400">ALL</span>
            </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <button 
            onClick={onOpenModal}
            className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-display tracking-wide rounded clip-path-slant transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] active:scale-95"
          >
            НАЧАТЬ ОБУЧЕНИЕ
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-slate-800"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal();
            }}
            className="mt-4 w-full px-6 py-4 bg-cyan-600 text-white font-bold font-display uppercase tracking-wider rounded text-center shadow-lg"
          >
            Начать обучение
          </button>
        </div>
      </div>
    </nav>
  );
};