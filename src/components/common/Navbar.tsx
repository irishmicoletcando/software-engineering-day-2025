'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full">
      <nav className='flex justify-between items-center w-full px-8 md:px-14 py-5'>
        <div className='flex justify-between items-center w-full'>
          {/* Logo */}
          <p className="text-2xl font-bold">
            {`</`}<span className='text-accent-blue'>SED</span>{`2025>`}
          </p>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex flex-row justify-between gap-8">
            <a href="/" className="hover:text-light-blue transition-colors duration-300">
              Speaker
            </a>
            <a href="/" className="hover:text-light-blue transition-colors duration-300">
              Schedule
            </a>
            <a href="/" className="hover:text-light-blue transition-colors duration-300">
              Registration
            </a>
            <a href="/" className="hover:text-light-blue transition-colors duration-300">
              Merchandise
            </a>
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
            <a href="/" className="hover:text-white text-center transition-colors duration-300">
              Speaker
            </a>
            <a href="/" className="hover:text-white text-center transition-colors duration-300">
              Schedule
            </a>
            <a href="/" className="hover:text-white text-center transition-colors duration-300">
              Registration
            </a>
            <a href="/" className="hover:text-white text-center transition-colors duration-300">
              Merchandise
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar