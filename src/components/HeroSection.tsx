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
          className="space-y-8"
        >
          {/* Central Icon - High Res Corn */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto w-64 h-64 flex items-center justify-center mb-8"
          >
            <Image
              src="/HiRes Corn.svg"
              alt="High Resolution Corn"
              width={256}
              height={256}
              className="w-64 h-64 drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Main Headline - With 365 and three-motif composition */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-kannada-bold text-[#007628] leading-tight flex items-center justify-center space-x-4"
          >
            <span>CONSISTENT MAIZE SUPPLY,</span>
            <motion.div 
              className="inline-block"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/Brand-Motif-Tapoli-New.svg"
                alt="Tapoli Brand Motif"
                width={240}
                height={160}
                className="h-20 w-auto"
                priority
              />
            </motion.div>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light -mt-8"
          >
            We connect trusted Ghanaian farmers and aggregators with feed producers, processors, and exporters who need consistent, high-quality yellow maize. We guarantee clean, certified maize delivered exactly when needed at the best possible prices.
          </motion.p>

          {/* Call to Action Buttons - All rounded as requested */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <button className="group flex items-center space-x-2 px-8 py-4 bg-[#F3EE33] text-[#222222] rounded-full hover:bg-[#D09229] transition-all duration-300 font-kannada-regular text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>REQUEST A QUOTE</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center space-x-2 px-8 py-4 bg-white border-2 border-[#007628] text-[#007628] rounded-full hover:bg-[#007628] hover:text-white transition-all duration-300 font-kannada-regular text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <MessageCircle size={20} />
              <span>WHATSAPP US</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Fixed visibility issue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-[#525252] font-nunito-light uppercase">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-[#525252] rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-[#007628] rounded-full mt-2"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 