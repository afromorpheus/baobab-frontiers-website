'use client';

import { MessageCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F3EE33]/10 to-[#007628]/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#F3EE33] rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#007628] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#756E33] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2 md:space-y-4 -mt-48 md:mt-0"
        >
          {/* Central Icon - High Res Corn */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto w-48 h-48 md:w-48 md:h-48 flex items-center justify-center"
          >
            <Image
              src="/HiRes Corn.svg"
              alt="High Resolution Corn"
              width={192}
              height={192}
              className="w-48 h-48 md:w-48 md:h-48 drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[28px] md:text-6xl font-kannada-bold text-[#007628] leading-tight text-center"
          >
            ALL YEAR MAIZE SUPPLY
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-80 md:w-auto md:max-w-[calc(100%-128px)] mx-auto text-[20px] md:text-xl text-[#525252] leading-relaxed font-nunito-light -mt-0.5"
          >
            We connect trusted Ghanaian maize producers, aggregators and importers with feed producers, processors, and exporters who need consistent, high-quality yellow maize.
          </motion.p>

          {/* Call to Action Buttons - All rounded as requested */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="group flex items-center space-x-2 px-8 py-2 md:py-4 bg-[#007628] text-white rounded-full hover:bg-[#005d1f] transition-all duration-300 font-kannada-regular text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>BUY MAIZE</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center space-x-2 px-8 py-2 md:py-4 bg-white border-2 border-[#007628] text-[#007628] rounded-full hover:bg-[#007628] hover:text-white transition-all duration-300 font-kannada-regular text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <MessageCircle size={20} />
              <span>WHATSAPP US</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Simple Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-[#007628] font-nunito-light">Scroll</span>
            <div className="w-1 h-6 bg-[#007628] rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 