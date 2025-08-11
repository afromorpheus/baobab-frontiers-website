'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Clock, 
  Shield, 
  Users,
  TrendingUp,
  Heart
} from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "TIMELY DELIVERY",
    description: "We understand the importance of meeting deadlines in the agricultural supply chain.",
    color: "bg-[#007628]/20",
    iconColor: "text-[#007628]"
  },
  {
    icon: Shield,
    title: "QUALITY GUARANTEE",
    description: "Every batch is tested and verified to meet your specific quality requirements.",
    color: "bg-[#D09229]/20",
    iconColor: "text-[#D09229]"
  },
  {
    icon: Users,
    title: "TRUSTED NETWORK",
    description: "We work with carefully vetted farmers and aggregators who share our commitment to quality.",
    color: "bg-[#756E33]/20",
    iconColor: "text-[#756E33]"
  },
  {
    icon: TrendingUp,
    title: "COMPETITIVE PRICING",
    description: "Our efficient operations and strong supplier relationships help keep costs competitive.",
    color: "bg-[#A3B3B5]/20",
    iconColor: "text-[#A3B3B5]"
  }
];

export default function WhyWorkWithUs() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeBenefit, setActiveBenefit] = useState(0);

  // Handle benefit selection
  const handleBenefitSelect = (index: number) => {
    setActiveBenefit(index);
    // Scroll to the selected benefit
    if (sliderRef.current) {
      const cardWidth = 544; // Width of each card
      const marginRight = -160; // Negative margin between cards
      const scrollPosition = index * (cardWidth + marginRight);
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll to update active benefit
  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = 544; // Width of each card
      const marginRight = -160; // Negative margin between cards
      const cardSpacing = cardWidth + marginRight;
      
      // Calculate which card is most visible with better precision
      const currentIndex = Math.round(scrollLeft / cardSpacing);
      const clampedIndex = Math.max(0, Math.min(currentIndex, benefits.length - 1));
      
      // Only update if the index actually changed
      if (clampedIndex !== activeBenefit) {
        console.log('Scroll detected:', { scrollLeft, currentIndex, clampedIndex, activeBenefit });
        setActiveBenefit(clampedIndex);
      }
    }
  };

  // Add touch event handlers for better mobile support
  const handleTouchStart = () => {
    // Touch started - could add debouncing here if needed
  };

  const handleTouchEnd = () => {
    // Touch ended - update active benefit after scroll settles
    setTimeout(() => {
      handleScroll();
    }, 100);
  };

  // Ensure scroll handler is properly attached and add debugging
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Add scroll event listener directly to ensure it works
      slider.addEventListener('scroll', handleScroll);
      
      // Cleanup
      return () => {
        slider.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section id="why-work-with-us" className="py-12 bg-[#F3EE33]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {/* Section Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mb-6 flex justify-center"
          >
            <img
              src="/Brand-Motif-Ahoden-New.svg"
              alt="Ahoden Brand Motif"
              className="h-24 w-auto"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-4">
            WHY WORK WITH US
          </h2>

          {/* Section Description */}
          <p className="max-w-3xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light">
            We&apos;re not just another supplier. We&apos;re your trusted partner in sourcing quality yellow maize, 
            with a commitment to excellence that goes beyond the transaction.
          </p>
        </motion.div>

        {/* Benefits Slider */}
        <div className="relative w-full">


          {/* Slider Container - Centered with proper spacing */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-0 py-6 px-8 mx-auto max-w-6xl" 
            style={{ minHeight: '450px' }}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex-shrink-0"
                style={{ width: '544px', marginRight: '-160px' }}
              >
                {/* Card Container */}
                <div className="relative w-full h-80">
                  {/* Yellow Brand Motif Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/Brand-Motif-Card-Yellow-Timely-Delivery.svg"
                      alt="Card background motif"
                      className="w-full h-full object-contain scale-100"
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
                          <benefit.icon size={32} className="text-[#876E19] opacity-100" />
                        </div>
                      </div>

                      {/* Text Content - Right Side */}
                      <div className="flex-1">
                        <h3 className="text-xl font-kannada-regular text-[#F3EE33] mb-2 leading-tight whitespace-pre-line">
                          {benefit.title}
                        </h3>
                        <p className="text-white leading-relaxed font-nunito-light">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simple Pagination Dots - Clean and Modern */}
        <div className="flex justify-center space-x-3 -mt-1">
          {benefits.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleBenefitSelect(index)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group transition-all duration-300 cursor-pointer"
              aria-label={`Go to benefit ${index + 1}`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeBenefit === index 
                  ? 'bg-[#876E19] shadow-md' 
                  : 'bg-[#F3EE33] hover:bg-[#F3EE33]/80'
              }`}></div>
            </motion.button>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-lg text-[#525252] font-nunito-light mb-4">
            Ready to experience the difference of working with a trusted partner?
          </p>
          <a href="#contact" className="inline-block px-8 py-4 bg-[#F3EE33] text-[#222222] rounded-full hover:bg-[#D09229] transition-colors font-kannada-regular text-lg shadow-lg hover:shadow-xl">
            GET STARTED TODAY
          </a>
        </motion.div>


      </div>
    </section>
  );
} 