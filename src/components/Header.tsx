'use client';

import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20">
          {/* Logo - Centered on mobile, left on desktop */}
          <motion.div 
            className="flex items-center space-x-2 md:justify-start justify-center flex-1 md:flex-none"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-1">
              {/* Actual Baobab Frontiers Logo */}
              <Image
                src="/Primary Logo - Coloured.svg"
                alt="Baobab Frontiers"
                width={480}
                height={160}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#offerings" className="text-gray-700 hover:text-[#007628] transition-colors duration-200 font-kannada-regular">
              OFFERINGS
            </a>
            <a href="#customer" className="text-gray-700 hover:text-[#007628] transition-colors duration-200 font-kannada-regular">
              CUSTOMER
            </a>
            <a href="#process" className="text-gray-700 hover:text-[#007628] transition-colors duration-200 font-kannada-regular">
              PROCESS
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-[#007628] transition-colors duration-200 font-kannada-regular">
              WHY US
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#007628] transition-colors duration-200 font-kannada-regular">
              CONTACT
            </a>
          </div>

          {/* Call to Action Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            {/* Buy Maize Button - Hidden on mobile, visible on desktop */}
            <motion.button 
              className="hidden md:flex items-center px-4 py-2 bg-[#007628] text-white rounded-full hover:bg-[#756E33] transition-colors shadow-lg hover:shadow-xl font-kannada-regular"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              BUY MAIZE
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#offerings" 
                className="block text-base font-kannada-regular text-gray-700 hover:text-[#007628] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                OFFERINGS
              </a>
              <a 
                href="#customer" 
                className="block text-base font-kannada-regular text-gray-700 hover:text-[#007628] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CUSTOMER
              </a>
              <a 
                href="#process" 
                className="block text-base font-kannada-regular text-gray-700 hover:text-[#007628] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                PROCESS
              </a>
              <a 
                href="#why-us" 
                className="block text-base font-kannada-regular text-gray-700 hover:text-[#007628] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                WHY US
              </a>
              <a 
                href="#contact" 
                className="block text-base font-kannada-regular text-gray-700 hover:text-[#007628] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
              

            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
} 