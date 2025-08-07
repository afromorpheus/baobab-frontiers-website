'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, Factory, Ship, Users, Globe, ShoppingCart } from 'lucide-react';
import { useState, useRef } from 'react';

export default function WhoWeServe() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

const customers = [
  {
    icon: Building2,
      iconColor: "text-[#876E19]",
    title: "FEED PRODUCERS",
      description: "Livestock and poultry feed manufacturers who need consistent, high-quality yellow maize for their formulations."
  },
  {
    icon: Factory,
      iconColor: "text-[#876E19]",
    title: "FOOD PROCESSORS",
      description: "Companies processing maize into flour, starch, or other food products for domestic and export markets."
  },
  {
    icon: Ship,
      iconColor: "text-[#876E19]",
    title: "EXPORTERS",
      description: "Trading companies and exporters who need reliable supply of quality maize for international markets."
  },
  {
    icon: Users,
      iconColor: "text-[#876E19]",
    title: "DIRECT BUYERS",
      description: "Local businesses requiring premium yellow maize for their production processes and distribution networks."
  },
  {
    icon: Globe,
      iconColor: "text-[#876E19]",
      title: "INTERNATIONAL\nBUYERS",
      description: "Global importers seeking consistent, certified yellow maize supply from trusted African sources."
    },
    {
      icon: ShoppingCart,
      iconColor: "text-[#876E19]",
      title: "WHOLESALE DISTRIBUTORS",
      description: "Large-scale distributors who supply maize to retailers and smaller businesses across various markets."
    }
  ];

  const scrollToSlide = (slideIndex: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 352; // Width of each card
      const scrollPosition = slideIndex * cardWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentSlide(slideIndex);
    }
  };

  const scrollLeft = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : customers.length - 1;
    scrollToSlide(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentSlide < customers.length - 1 ? currentSlide + 1 : 0;
    scrollToSlide(newIndex);
  };

  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Icon - Tapoli Brand Motif */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto w-24 h-36 flex items-center justify-center mb-4"
          >
            <Image
              src="/Brand-Motif-Tapoli-Coloured.svg"
              alt="Tapoli Brand Motif"
              width={96}
              height={144}
              className="w-24 h-36"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-4">
            WHO WE SERVE
          </h2>

          {/* Section Description */}
          <p className="max-w-3xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light text-justify">
            We connect Ghana's finest yellow maize with buyers who demand quality, reliability, and transparency. 
            Our network serves diverse markets across the agricultural value chain.
          </p>
        </motion.div>

        {/* Customers Slider with New Horizontal Style */}
        <div className="relative">
          {/* Slider with External Navigation */}
          <div className="flex items-center justify-center">
            {/* Left Scroll Arrow - Brand motif style like What We Offer */}
            <button 
              onClick={scrollLeft}
              className="mr-4 relative flex-shrink-0 w-16 h-14 group transition-all duration-300 hover:scale-105"
            >
              {/* Default outline motif */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <img
                  src="/Brand-Motif-Container-Left-Green-Outline.svg"
                  alt="Left arrow motif"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Hover filled motif */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/Brand-Motif-Container-Left-Light-Green-Filled.svg"
                  alt="Left arrow motif filled"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#007628] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 flex-1"
              onScroll={(e) => {
                const container = e.target as HTMLDivElement;
                const cardWidth = 600; // Updated for horizontal cards
                const scrollLeft = container.scrollLeft;
                const newIndex = Math.round(scrollLeft / cardWidth);
                setCurrentSlide(newIndex);
              }}
            >
          {customers.map((customer, index) => (
            <motion.div
              key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
                  className="group flex-shrink-0"
                  style={{ width: '600px' }}
                >
                  {/* Yellow Brand Motif Background - Group 202 */}
                  <div className="relative w-full h-40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="/Group-202.svg"
                        alt="Card background motif"
                        className="w-full h-full object-contain hover:scale-105 transition-all duration-300 hover:drop-shadow-xl"
                      />
                </div>

                    {/* Content Overlay - Adjusted for Group 202 shape */}
                    <div className="absolute inset-0 flex items-center justify-between px-8 py-6">
                      {/* Text Content - Left Side */}
                      <div className="flex-1 pr-6">
                {/* Title */}
                        <h3 className="text-lg font-kannada-regular text-[#222222] leading-tight mb-2 whitespace-pre-line">
                  {customer.title}
                </h3>

                {/* Description */}
                        <p className="text-[#525252] leading-relaxed font-nunito-light text-sm text-justify tracking-tight max-w-xs">
                  {customer.description}
                </p>
                      </div>
                      
                      {/* Icon Container - Right Side */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-all duration-300" style={{ boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.25)' }}>
                          <customer.icon size={24} className={customer.iconColor} />
                        </div>
                      </div>
                    </div>
              </div>
            </motion.div>
          ))}
            </div>

            {/* Right Scroll Arrow - Brand motif style like What We Offer */}
            <button 
              onClick={scrollRight}
              className="ml-4 relative flex-shrink-0 w-16 h-14 group transition-all duration-300 hover:scale-105"
            >
              {/* Default outline motif */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <img
                  src="/Brand-Motif-Container-Right-Green-Outline.svg"
                  alt="Right arrow motif"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Hover filled motif */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/Brand-Motif-Container-Right-Light-Green-Filled.svg"
                  alt="Right arrow motif filled"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#007628] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-[#525252] mb-8 font-nunito-light">
            Ready to source quality yellow maize for your business?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#007628] text-white px-8 py-4 rounded-full font-kannada-bold text-lg hover:bg-[#005d1f] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            GET STARTED TODAY
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 