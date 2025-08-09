'use client';

import { useState, useRef, useEffect } from 'react';
import { Building2, Factory, Ship, Users, Globe, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhoWeServe() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicators, setShowScrollIndicators] = useState(true);

  // Hide scroll indicators when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicators(false);
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

const customers = [
  {
    title: "FEED PRODUCERS",
    description: "Livestock and poultry feed manufacturers who need consistent, high-quality yellow maize for their formulations.",
      icon: Building2,
      iconColor: "text-[#876E19]"
  },
  {
    title: "FOOD PROCESSORS",
    description: "Companies processing maize into flour, starch, or other food products for domestic and export markets.",
      icon: Factory,
      iconColor: "text-[#876E19]"
  },
  {
      title: "EXPORTERS",
      description: "International traders seeking reliable sources of premium yellow maize for global markets.",
    icon: Ship,
      iconColor: "text-[#876E19]"
    },
    {
      title: "DIRECT BUYERS",
      description: "Large-scale consumers requiring bulk yellow maize deliveries for their operations.",
      icon: Users,
      iconColor: "text-[#876E19]"
    },
    {
      title: "INTERNATIONAL BUYERS",
      description: "Global partners looking for consistent supply of high-quality yellow maize from Ghana.",
      icon: Globe,
      iconColor: "text-[#876E19]"
    },
    {
      title: "WHOLESALE DISTRIBUTORS",
      description: "Regional distributors supplying quality yellow maize to local markets and businesses.",
      icon: ShoppingCart,
      iconColor: "text-[#876E19]"
    }
  ];

  return (
    <section id="customer" className="relative w-full bg-[#D09229]/20 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <img
            src="/Brand-Motif-Tapoli-New.svg"
            alt="Tapoli Brand Motif"
            className="h-24 w-auto mb-8"
          />
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-6">WHO WE SERVE</h2>
          <p className="text-xl text-[#525252] max-w-2xl text-center leading-relaxed font-nunito-light">
            We work with a diverse range of businesses in the agricultural value chain,
            providing them with high-quality yellow maize that meets their specific needs.
          </p>
        </div>

        {/* Cards Container - Full Width */}
        <div className="relative w-full">
          {/* Left Scroll Indicator - Positioned 8px inside carousel container */}
          {showScrollIndicators && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute top-1/2 transform -translate-y-1/2 z-10"
              style={{ left: '8px' }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-6 h-10 border-2 border-[#525252] rounded-full flex justify-center">
                  <motion.div
                    animate={{ x: [-2, 2, -2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1 h-3 bg-[#007628] rounded-full mt-2"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Slider Container - Centered with proper spacing */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-0 py-10 pb-16 px-8 mx-auto max-w-6xl"
            style={{ minHeight: '360px' }}
          >
          {customers.map((customer, index) => (
              <div
              key={index}
                className="flex-shrink-0 group"
                style={{ width: '544px', marginRight: '-160px' }}
              >
                {/* Card Container */}
                <div className="relative w-full h-72">
                  {/* Yellow Brand Motif Background - Larger */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/Brand-Motif-Card-Yellow-Organic.svg"
                      alt="Card background motif"
                      className="w-full h-full object-contain scale-110"
                    />
                  </div>

                  {/* Content Container - Centered within motif */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-2 max-w-xs">
                      {/* Icon Container - Left Side */}
                      <div className="flex-shrink-0">
                        <div 
                          className="w-16 h-16 bg-[#F3EE33] rounded-lg flex items-center justify-center"
                          style={{ boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.25)' }}
                        >
                          <customer.icon size={32} className="text-[#2D2D2D]" />
                        </div>
                </div>

                      {/* Text Content - Right Side */}
                      <div className="flex-1">
                        <h3 className="text-xl font-kannada-regular group-hover:font-kannada-bold text-[#222222] mb-2 leading-tight whitespace-pre-line transition-all duration-300">
                  {customer.title}
                </h3>
                <p className="text-[#525252] leading-relaxed font-nunito-light">
                  {customer.description}
                </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>

        {/* Swipe Indicators - Positioned on red line, 4px left of first card */}
        <div className="relative w-full max-w-6xl mx-auto px-8">
          <div className="flex space-x-2" style={{ 
            position: 'absolute',
            left: '4px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10
          }}>
            {customers.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="w-3 h-3 rounded-full bg-[#876E19]/30 border border-[#876E19]/50 transition-all duration-300 hover:bg-[#876E19]/50 cursor-pointer"
                style={{
                  boxShadow: '0 2px 4px rgba(135, 110, 25, 0.2)'
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-lg text-[#525252] font-nunito-light mb-8">
            Ready to source quality yellow maize for your business?
          </h3>
          <button className="bg-[#007628] text-white px-8 py-4 rounded-full font-kannada-bold shadow-lg hover:shadow-xl hover:bg-[#005d1f] transition-all duration-300">
            GET STARTED TODAY
          </button>
        </div>
      </div>
    </section>
  );
} 