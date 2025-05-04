'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const REGISTRATION_URLS = {
  "May 5, 2025": "https://forms.gle/rnyG7764FVhMuufc9",
  "May 6, 2025": "https://forms.gle/X1cyqqq2nDkp4i7Q9",
  "May 8, 2025": "https://forms.gle/QBtwLyo168NhVdFA7",
} as const;

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed w-full z-50">
      <nav className={`
        w-full transition-all duration-300
        ${isScrolled || isMobileMenuOpen ? 'bg-black shadow-lg' : 'bg-transparent'}
        ${isMobileMenuOpen ? 'bg-opacity-100' : isScrolled ? 'bg-opacity-95 backdrop-blur-md' : ''}
      `}>
        <div className='flex justify-between items-center w-full px-8 md:px-14 py-5'>
          {/* Logo Button */}
          <button 
            onClick={scrollToHero}
            className='flex items-center group cursor-pointer hover:opacity-90 transition-all duration-300'
          >
            <img 
              src="/favicon.png" 
              alt="SED 2025 Logo" 
              className="w-10 h-10 md:w-12 md:h-12 group-hover:rotate-12 transition-transform duration-300" 
            />
            <img
              src="/SED_2025.png"
              alt="SED 2025 Text Logo"
              className="hidden md:block h-4 md:h-6 ml-4 group-hover:opacity-90 transition-opacity duration-300"
            />
          </button>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center md:gap-1 lg:gap-8">
            <ScrollLink 
              to="speakers" 
              className="relative px-4 py-2 group"
            >
              <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                Speakers
              </span>
              <span className="absolute inset-0 bg-sea-green/10 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </ScrollLink>
            <ScrollLink 
              to="schedule" 
              className="relative px-4 py-2 group"
            >
              <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                Schedule
              </span>
              <span className="absolute inset-0 bg-sea-green/10 rounded-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </ScrollLink>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-shining-yellow hover:bg-bright-orange/90 hover:cursor-pointer text-accent-black font-bold px-5 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 group">
                  Register Now
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-accent-black border border-sea-green/20 mt-2">
                {Object.entries(REGISTRATION_URLS).map(([date, url]) => (
                  <DropdownMenuItem key={date} asChild>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 cursor-pointer"
                    >
                      <Calendar size={14} />
                      <span>{date}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors duration-300" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 text-center bg-black"
          style={{ marginTop: "72px" }}
        >
          <div className="flex flex-col gap-6 w-full px-8 pt-8">
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full bg-shining-yellow hover:bg-bright-orange/90 hover:cursor-pointer text-accent-black font-bold px-5 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                  Register Now
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-accent-black/95 backdrop-blur-md border border-sea-green/20 mt-2 w-[calc(100vw-4rem)]"
                sideOffset={5}
              >
                {Object.entries(REGISTRATION_URLS).map(([date, url]) => (
                  <DropdownMenuItem key={date} asChild>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 cursor-pointer"
                    >
                      <Calendar size={14} />
                      <span>{date}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
        top: element.offsetTop - 72,
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

const MobileScrollLink: React.FC<{ 
  to: string; 
  onClick: () => void; 
  className?: string;
  children: React.ReactNode 
}> = ({ to, onClick, className, children }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
    const element = document.getElementById(to);
    if (element) {
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 72,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <a 
      href={`#${to}`} 
      onClick={handleClick} 
      className={className}
    >
      {children}
    </a>
  );
};

export default Navbar