'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Shield, 
  Clock,
  TrendingUp,
  CheckCircle,
  Users, 
  DollarSign,
  Heart,
  MessageCircle
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "QUALITY MAIZE",
    description: "Moisture-tested and aflatoxin-checked for premium standards.",
    iconColor: "text-[#007628]",
    motifOutline: "/Brand-Motif-Container-Left-Green-Outline-White.svg",
    motifFilled: "/Brand-Motif-Container-Left-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Left-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Advanced quality testing ensures every batch meets international standards"
  },
  {
    icon: DollarSign,
    title: "FAIR PRICING",
    description: "Right price for quality maize with transparent pricing.",
    iconColor: "text-[#007628]",
    motifOutline: "/Brand-Motif-Container-Right-Green-Outline-White.svg",
    motifFilled: "/Brand-Motif-Container-Right-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Right-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Competitive rates that benefit both buyers and farming communities"
  },
  {
    icon: Clock,
    title: "RELIABLE LOGISTICS",
    description: "Timely pickups, smart storage, and smooth delivery nationwide.",
    iconColor: "text-[#007628]",
    motifOutline: "/Brand-Motif-Container-Left-Green-Outline-White.svg",
    motifFilled: "/Brand-Motif-Container-Left-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Left-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Efficient supply chain management from farm gate to your facility"
  },
  {
    icon: TrendingUp,
    title: "DATA DRIVEN",
    description: "Market trends and supply insights for informed decisions.",
    iconColor: "text-[#007628]",
    motifOutline: "/Brand-Motif-Container-Right-Green-Outline-White.svg",
    motifFilled: "/Brand-Motif-Container-Right-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Right-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Real-time market intelligence drives our sourcing and pricing strategies"
  },
  {
    icon: Users,
    title: "TRUSTED FARMERS",
    description: "Reliable suppliers with transparency and fair trade practices.",
    iconColor: "text-[#007628]",
    motifOutline: "/Brand-Motif-Container-Left-Green-Outline-White.svg",
    motifFilled: "/Brand-Motif-Container-Left-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Left-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Building lasting partnerships with Ghana's most reliable agricultural communities"
  }
];

export default function WhatWeOffer() {
  // State management for auto-cycling and interactions
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(-1);

  // Auto-cycling logic
  useEffect(() => {
    if (!isHovered && !isPaused) {
      const interval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % features.length);
      }, 4000); // 4 second cycle

      return () => clearInterval(interval);
    }
  }, [isHovered, isPaused]);

  // Handle feature selection
  const handleFeatureSelect = (index: number) => {
    setActiveFeature(index);
    setIsPaused(true);
    // Resume auto-cycling after 8 seconds of inactivity
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section className="py-20 bg-[#F3EE33]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Section Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mb-8 flex justify-center"
          >
            <img
              src="/Brand-Motif-Asanka-Alt.svg"
              alt="Asanka Brand Motif"
              className="h-24 w-auto opacity-100"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-6">
            WHAT WE OFFER
          </h2>

          {/* Section Description */}
          <p className="max-w-2xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light">
            We&apos;re not just another supplier. We&apos;re your trusted partner in sourcing quality yellow maize, 
            with a commitment to excellence that goes beyond the transaction.
          </p>
        </motion.div>

        {/* Horizontal Feature List Above Image */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap md:flex-wrap justify-center gap-1 md:gap-[5px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleFeatureSelect(index)}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(-1)}
                className={`flex flex-col items-center gap-1 md:gap-3 p-2 md:p-4 cursor-pointer transition-all duration-300 w-auto md:w-auto md:min-w-[200px] ${
                  activeFeature === index
                    ? 'md:bg-[#F3EE33]/20 md:rounded-lg'
                    : 'md:hover:bg-[#F3EE33]/10 md:rounded-lg'
                }`}
              >
                {/* Brand Motif Icon Container */}
                <div className="relative flex-shrink-0 w-10 h-8 md:w-20 md:h-16">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Desktop version - conditional highlighting */}
                    <img
                      src={
                        activeFeature === index
                          ? feature.motifFilled
                          : hoveredFeature === index
                            ? feature.motifHover
                            : feature.motifOutline
                      }
                      alt="Brand motif"
                      className="w-full h-full object-contain transition-all duration-300 md:block hidden"
                    />
                    {/* Mobile version - conditional highlighting */}
                    <img
                      src={
                        activeFeature === index
                          ? feature.motifFilled
                          : feature.motifOutline
                      }
                      alt="Brand motif"
                      className="w-full h-full object-contain transition-all duration-300 block md:hidden"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Desktop version - conditional highlighting */}
                    <feature.icon
                      size={32}
                      className={`${activeFeature === index ? 'md:text-white' : feature.iconColor} transition-colors duration-300 scale-[0.44] md:scale-100 md:block hidden`}
                    />
                    {/* Mobile version - conditional highlighting */}
                    <feature.icon
                      size={32}
                      className={`${activeFeature === index ? 'text-white' : feature.iconColor} transition-colors duration-300 scale-[0.44] md:scale-100 block md:hidden`}
                    />
                  </div>
                </div>

                {/* Feature Text - Centered */}
                <div className="text-center">
                  {/* Desktop version - conditional highlighting */}
                  <h3 className={`text-xs md:text-lg leading-tight transition-colors duration-300 ${
                    activeFeature === index ? 'md:text-[#007628] md:font-kannada-bold text-[#222222] font-kannada-regular' : 'text-[#222222] font-kannada-regular'
                  } md:block hidden`}>
                    {feature.title}
                  </h3>
                  {/* Mobile version - conditional highlighting */}
                  <h3 className={`text-xs md:text-lg leading-tight transition-colors duration-300 ${
                    activeFeature === index ? 'text-[#007628] font-kannada-bold' : 'text-[#222222] font-kannada-regular'
                  } block md:hidden`}>
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </div>
        </div>

        {/* Image Pane Below Buttons */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full"
            >
            {/* Main Image Container - Green Picture Gallery Motif */}
            <div 
              className="relative w-full aspect-[4/3]" 
              style={{ willChange: 'transform' }}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                const startX = touch.clientX;
                const handleTouchEnd = (e: TouchEvent) => {
                  const touch = e.changedTouches[0];
                  const endX = touch.clientX;
                  const diffX = startX - endX;
                  
                  if (Math.abs(diffX) > 50) { // Minimum swipe distance
                    if (diffX > 0) {
                      // Swipe left - next feature
                      setActiveFeature((prev) => (prev + 1) % features.length);
                    } else {
                      // Swipe right - previous feature
                      setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
                    }
                  }
                  
                  document.removeEventListener('touchend', handleTouchEnd);
                };
                document.addEventListener('touchend', handleTouchEnd);
              }}
            >
              {/* Brand Motif Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/Brand-Motif-Picture-Gallery-Green-Filled.svg"
                  alt="Picture Gallery motif"
                  className="w-full h-full object-contain"
                />
                </div>

              <div className="relative w-full h-full">

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {/* Actual images for features */}
                  <div className="text-center w-full h-full">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ willChange: 'opacity' }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {activeFeature === 0 ? (
                        /* Quality Maize - Real Image */
                        <div className="w-full h-full relative">
                          <img
                            src="/Quality Maize - Brand Motif.svg"
                            alt="Quality Maize kernels"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        /* Other features - Placeholder */
                        <div className="text-center">
                          {(() => {
                            const IconComponent = features[activeFeature].icon;
                            return <IconComponent className="w-24 h-24 text-white mx-auto mb-4" />;
                          })()}
                          <h3 className="text-2xl font-kannada-bold text-white mb-2">
                            {features[activeFeature].title}
                </h3>
                          <p className="text-white/80 font-nunito-light">
                            IMAGE - {features[activeFeature].title}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>

              </div>
            </div>

            {/* Caption Text Below Image */}
            <div className="mt-4 text-center">
              <motion.p
                key={activeFeature}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-[#007628] font-nunito-light leading-tight text-lg"
                style={{ willChange: 'opacity' }}
              >
                {features[activeFeature].description}
              </motion.p>
              
              {/* Swipe Indicators - Bottom Center */}
              <div className="flex justify-center space-x-2 mt-4">
                {features.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${
                      activeFeature === index 
                        ? 'bg-[#007628] shadow-md' 
                        : 'bg-[#A3FF95] hover:bg-[#876E19]'
                    }`}
                    onClick={() => handleFeatureSelect(index)}
                  />
                ))}
              </div>
            </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section - Moved Below Slider Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#007628] text-white px-8 py-4 rounded-full font-kannada-bold text-lg hover:bg-[#005d1f] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            GET PREMIUM MAIZE TODAY
          </motion.button>
        </motion.div>


      </div>
    </section>
  );
} 