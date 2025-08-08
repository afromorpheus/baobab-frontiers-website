'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-[#222222] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-1">
          {/* Centered Logo */}
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Stand Alone Logo - Coloured.svg"
              alt="Baobab Frontiers"
              width={72}
              height={72}
              className="h-18 w-auto"
            />
          </motion.div>
          
          {/* Centered Tagline - Kannada Font - All Caps - Green */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm font-kannada-regular text-[#007628] uppercase">
              Your maize sourcing partner
            </p>
          </motion.div>

          {/* Centered Copyright and Location */}
          <motion.div 
            className="text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-[#D09229] text-sm">
              © 2025 Baobab Frontiers. All rights reserved.
            </p>
            <p className="text-sm font-nunito-light text-[#525252]">
              Accra, Ghana
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 