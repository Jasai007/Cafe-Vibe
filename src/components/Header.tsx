import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <Coffee 
            size={28} 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-brown-dark' : 'text-cream'
            }`} 
          />
          <span 
            className={`font-serif font-bold text-xl md:text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-brown-dark' : 'text-cream'
            }`}
          >
            Brew Haven
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['Home', 'Menu', 'Reservations', 'About', 'Events', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : item.toLowerCase()}
              className={({ isActive }) => `
                font-medium transition-colors duration-300 hover:text-accent
                ${isScrolled 
                  ? (isActive ? 'text-accent' : 'text-brown-dark') 
                  : (isActive ? 'text-accent-light' : 'text-cream')}
              `}
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-brown-dark' : 'text-cream'} />
          ) : (
            <MenuIcon size={24} className={isScrolled ? 'text-brown-dark' : 'text-cream'} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-cream-light z-40 animate-fadeIn md:hidden">
            <nav className="flex flex-col items-center pt-10 space-y-6">
              {['Home', 'Menu', 'Reservations', 'About', 'Events', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : item.toLowerCase()}
                  className={({ isActive }) => `
                    text-xl font-medium transition-colors duration-300
                    ${isActive ? 'text-accent' : 'text-brown-dark'}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;