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
    motifOutline: "/Brand-Motif-Container-Left-Green-Outline.svg",
    motifFilled: "/Brand-Motif-Container-Left-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Left-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Advanced quality testing ensures every batch meets international standards"
  },
  {
    icon: Users,
    title: "TRUSTED FARMERS",
    description: "Reliable suppliers with transparency and fair trade practices.",
    iconColor: "text-[#007628]",
    motifOutline: "/Brand-Motif-Container-Right-Green-Outline.svg",
    motifFilled: "/Brand-Motif-Container-Right-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Right-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Building lasting partnerships with Ghana's most reliable agricultural communities"
  },
  {
    icon: Clock,
    title: "RELIABLE LOGISTICS",
    description: "Timely pickups, smart storage, and smooth delivery nationwide.",
    iconColor: "text-[#007628]",
    motifOutline: "/Brand-Motif-Container-Left-Green-Outline.svg",
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
    motifOutline: "/Brand-Motif-Container-Right-Green-Outline.svg",
    motifFilled: "/Brand-Motif-Container-Right-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Right-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Real-time market intelligence drives our sourcing and pricing strategies"
  },
  {
    icon: DollarSign,
    title: "FAIR PRICING",
    description: "Right price for quality maize with transparent pricing.",
    iconColor: "text-[#007628]",
    motifOutline: "/Brand-Motif-Container-Left-Green-Outline.svg",
    motifFilled: "/Brand-Motif-Container-Left-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Left-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Competitive rates that benefit both buyers and farming communities"
  },
  {
    icon: Heart,
    title: "COMMUNITY IMPACT",
    description: "Supporting local farmers and sustainable development in Ghana.",
    iconColor: "text-[#007628]",
    motifOutline: "/Brand-Motif-Container-Right-Green-Outline.svg",
    motifFilled: "/Brand-Motif-Container-Right-Green-Filled-Alt.svg",
    motifHover: "/Brand-Motif-Container-Right-Light-Green-Filled.svg",
    image: "/api/placeholder/600/400",
    caption: "Empowering rural communities through sustainable agricultural partnerships"
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
          className="text-center mb-16"
        >
          {/* Section Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 flex justify-center"
          >
            <img
              src="/Brand-Motif-Asanka-Alt.svg"
              alt="Asanka Brand Motif"
              className="h-24 w-auto opacity-60"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-4">
            WHAT WE OFFER
          </h2>

          {/* Section Description */}
          <p className="max-w-3xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light">
            We specialize in the aggregation and delivery of yellow maize from Ghana's top growing regions. 
            Whether you're sourcing for livestock feed, grain export, or food processing, we guarantee:
          </p>
        </motion.div>

        {/* Interactive Two-Column Layout - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center max-w-5xl w-full" style={{ columnGap: '8px' }}>

          {/* Left Column - Interactive Features List */}
          <div className="flex flex-col justify-center w-80">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
          {features.map((feature, index) => (
            <motion.div
              key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleFeatureSelect(index)}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(-1)}
                className={`flex items-center gap-3 p-2 cursor-pointer transition-all duration-300 h-20 ${
                  activeFeature === index
                    ? 'bg-[#F3EE33]/20'
                    : 'hover:bg-[#F3EE33]/10'
                }`}
              >
                {/* Feature Text - Title Only (Right-aligned to icon) */}
                <div className="flex-1 text-right pr-2 min-h-[3rem] flex items-center justify-end">
                  <h3 className={`text-xl leading-tight transition-colors duration-300 ${
                    activeFeature === index ? 'text-[#007628] font-kannada-bold' : 'text-[#222222] font-kannada-regular'
                  }`}>
                    {feature.title.split(' ').length > 1 ? (
                      <>
                        {feature.title.split(' ')[0]}<br />
                        {feature.title.split(' ').slice(1).join(' ')}
                      </>
                    ) : (
                      feature.title
                    )}
                  </h3>
                </div>

                {/* Brand Motif Icon Container - All Green with State Logic */}
                <div className="relative flex-shrink-0 w-20 h-16">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={
                        activeFeature === index
                          ? feature.motifFilled
                          : hoveredFeature === index
                            ? feature.motifHover
                            : feature.motifOutline
                      }
                      alt="Brand motif"
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon
                      size={24}
                      className={`${activeFeature === index ? 'text-white' : feature.iconColor} transition-colors duration-300`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>

          {/* Right Column - Dynamic Image Display */}
          <div className="w-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full"
            >
            {/* Main Image Container - Green Picture Gallery Motif */}
            <div className="relative w-full aspect-[4/3]" style={{ willChange: 'transform' }}>
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

                {/* Progress Indicator - Vertical on right side (Green) */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeFeature === index ? 'bg-[#007628] h-6' : 'bg-[#007628]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Caption - Brand Motif Shape - Fixed Height Container */}
            <div className="mt-3 relative mx-1">
              <div className="relative w-full h-20" style={{ willChange: 'transform' }}>
                <img
                  src="/Brand-Motif-Banner-White-With-Shadow.svg"
                  alt="Caption background"
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{ transform: 'scaleX(1.4)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center py-6" style={{ paddingLeft: '4px', paddingRight: '4px' }}>
                  <div className="text-center py-2 min-h-[2rem] flex items-center justify-center">
                    <motion.p
                      key={activeFeature}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#007628] font-nunito-light leading-tight text-base"
                      style={{ willChange: 'opacity' }}
                    >
                      {features[activeFeature].description}
                    </motion.p>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
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