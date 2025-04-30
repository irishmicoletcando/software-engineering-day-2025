'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full z-100">
      <nav className='flex justify-between items-center w-full px-8 md:px-14 py-5'>
        <div className='flex justify-between items-center w-full'>
          {/* Logo */}
          <div className='flex items-center'>
            <img src="/favicon.png" alt="SED 2025 Logo" className="w-8 h-8" />
            <p className="hidden md:block ml-4 text-2xl font-bold">
              {`</`}<span className='text-accent-blue'>SED</span>{`2025>`}
            </p>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex flex-row justify-between gap-8">
            <ScrollLink 
              to="speakers" 
              className="hover:text-light-blue transition-colors duration-300"
            >
              Speakers
            </ScrollLink>
            <ScrollLink 
              to="schedule" 
              className="hover:text-light-blue transition-colors duration-300"
            >
              Schedule
            </ScrollLink>
            {/* <ScrollLink 
              to="registration" 
              className="hover:text-light-blue transition-colors duration-300"
            >
              Registration
            </ScrollLink> */}
            <ScrollLink 
              to="merchandise" 
              className="hover:text-light-blue transition-colors duration-300"
            >
              Merchandise
            </ScrollLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-darkest-blue flex flex-col items-center py-6 z-10 shadow-lg">
          <div className="flex flex-col gap-6 md:hidden">
            <MobileScrollLink 
              to="speakers" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Speakers
            </MobileScrollLink>
            <MobileScrollLink 
              to="schedule" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule
            </MobileScrollLink>
            {/* <MobileScrollLink 
              to="registration" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Registration
            </MobileScrollLink> */}
            <MobileScrollLink 
              to="merchandise" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Merchandise
            </MobileScrollLink>
          </div>
        </div>
      )}
    </div>
  )
}

const ScrollLink: React.FC<{ to: string; className?: string; children: React.ReactNode }> = ({ to, className, children }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const MobileScrollLink: React.FC<{ to: string; onClick: () => void; children: React.ReactNode }> = ({ to, onClick, children }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
    const element = document.getElementById(to);
    if (element) {
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className="hover:text-white text-center transition-colors duration-300">
      {children}
    </a>
  );
};

export default Navbar