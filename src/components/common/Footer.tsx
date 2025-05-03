import { Facebook, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo and Title */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/favicon.png"
              alt="SED 2025 Logo"
              width={64}
              height={64}
              className="animate-pulse-slow"
            />
            <h2 className="text-2xl font-bold text-center text-white">
              Software Engineering Day 
              <span className="bg-gradient-to-r from-shining-yellow to-bright-orange bg-clip-text text-transparent"> 2025</span>
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <a 
                href="https://www.facebook.com/sedspark2025" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-dull-yellow/10 flex items-center justify-center text-shining-yellow hover:bg-bright-orange hover:text-white transition-colors"
              >
                <div className="social-icon-wrapper">
                  <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a 
                href="https://www.instagram.com/sedspark2025/" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-dull-yellow/10 flex items-center justify-center text-shining-yellow hover:bg-bright-orange hover:text-white transition-colors"
              >
                <div className="social-icon-wrapper">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a 
                href="https://www.tiktok.com/@sed.2025" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-dull-yellow/10 flex items-center justify-center text-shining-yellow hover:bg-bright-orange hover:text-white transition-colors"
              >
                <div className="social-icon-wrapper">
                  <FaTiktok size={18} className="group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>
            <a 
              href="mailto:sed2025spark@gmail.com"
              className="text-gray-400 hover:text-shining-yellow transition-colors text-sm tracking-wide"
            >
              sed2025spark@gmail.com
            </a>
          </div>

          {/* Partnerships */}
          <div className="w-full max-w-6xl">
            <div className="space-y-12 lg:space-y-6">
              <div className="lg:min-w-max">
                {/* Desktop View - Single Row */}
                <div className="hidden lg:flex items-center justify-center gap-16 w-full">
                  {/* Primary Partners */}
                  <div className="space-y-4">
                    <h3 className="text-center text-gray-400 text-xs uppercase tracking-wider">
                      In Partnership With
                    </h3>
                    <div className="flex gap-6 items-center">
                      {[
                        { name: 'ACCESS', type: 'png' },
                        { name: 'MRSP', type: 'png' },
                        { name: 'CNCP', type: 'jpg' },
                        { name: 'PUPADS', type: 'jpg' },
                        { name: 'ICPEP', type: 'png' }
                      ].map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center group">
                          <Image
                            src={`/assets/partners/${partner.name}.${partner.type}`}
                            alt={partner.name}
                            width={70}
                            height={70}
                            className="h-10 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Partners */}
                  <div className="space-y-4">
                    <h3 className="text-center text-gray-400 text-xs uppercase tracking-wider">
                      Co-brought to You By
                    </h3>
                    <div className="flex gap-6 items-center">
                      {[
                        { name: 'AcadArena', type: 'png' },
                        { name: 'POCKY', type: 'png' },
                        { name: 'STEAMlab', type: 'png' },
                        { name: 'CaviteTech', type: 'png' }
                      ].map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center group">
                          <Image
                            src={`/assets/partners/${partner.name}.${partner.type}`}
                            alt={partner.name}
                            width={70}
                            height={70}
                            className="h-10 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BSCOE Partners */}
                  <div className="space-y-4">
                    <h3 className="text-center text-gray-400 text-xs uppercase tracking-wider">
                      In Collaboration With
                    </h3>
                    <div className="flex gap-6 items-center">
                      {[
                        { name: 'BSCOE-4-1-logo', type: 'png' },
                        { name: 'BSCOE-4-2-logo', type: 'png' }
                      ].map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center group">
                          <Image
                            src={`/assets/section-logo/${partner.name}.${partner.type}`}
                            alt={partner.name.replace('-logo', '')}
                            width={70}
                            height={70}
                            className="h-10 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tablet/Mobile View - Stacked */}
                <div className="flex flex-col space-y-12 lg:hidden w-full">
                  {/* Primary Partners - Tablet/Mobile */}
                  <div className="space-y-4 w-full">
                    <h3 className="text-center text-gray-400 text-xs uppercase tracking-wider">
                      In Partnership With
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 place-items-center">
                      {[
                        { name: 'ACCESS', type: 'png' },
                        { name: 'MRSP', type: 'png' },
                        { name: 'CNCP', type: 'jpg' },
                        { name: 'PUPADS', type: 'jpg' },
                        { name: 'ICPEP', type: 'png' }
                      ].map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center">
                          <Image
                            src={`/assets/partners/${partner.name}.${partner.type}`}
                            alt={partner.name}
                            width={60}
                            height={60}
                            className="h-10 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Partners - Tablet/Mobile */}
                  <div className="space-y-4 w-full">
                    <h3 className="text-center text-gray-400 text-xs uppercase tracking-wider">
                      Co-brought to You By
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 place-items-center">
                      {[
                        { name: 'AcadArena', type: 'png' },
                        { name: 'POCKY', type: 'png' },
                        { name: 'STEAMlab', type: 'png' },
                        { name: 'CaviteTech', type: 'png' }
                      ].map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center">
                          <Image
                            src={`/assets/partners/${partner.name}.${partner.type}`}
                            alt={partner.name}
                            width={60}
                            height={60}
                            className="h-12 w-auto opacity-70 hover:opacity-100 transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BSCOE Partners - Tablet/Mobile */}
                  <div className="space-y-4 w-full">
                    <h3 className="text-center text-gray-400 text-xs uppercase tracking-wider">
                      In Collaboration With
                    </h3>
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 place-items-center">
                      {[
                        { name: 'BSCOE-4-1-logo', type: 'png' },
                        { name: 'BSCOE-4-2-logo', type: 'png' }
                      ].map((partner) => (
                        <div key={partner.name} className="flex flex-col items-center">
                          <Image
                            src={`/assets/section-logo/${partner.name}.${partner.type}`}
                            alt={partner.name.replace('-logo', '')}
                            width={60}
                            height={60}
                            className="h-12 w-auto opacity-70 hover:opacity-100 transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-sea-green/10 w-full pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Software Engineering Day 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;