'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Shield, 
  Truck, 
  CheckCircle 
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "SOURCING & VETTING",
    description: "We identify and vet reliable farmers and aggregators in Ghana's top maize-growing regions.",
    color: "bg-[#F3EE33]/20",
    iconColor: "text-[#756E33]"
  },
  {
    icon: Shield,
    title: "QUALITY ASSURANCE",
    description: "Every batch is tested for moisture content and aflatoxin levels before acceptance.",
    color: "bg-[#007628]/20",
    iconColor: "text-[#007628]"
  },
  {
    icon: Truck,
    title: "AGGREGATION & DELIVERY",
    description: "We coordinate pickups, storage, and timely delivery to your specified location.",
    color: "bg-[#D09229]/20",
    iconColor: "text-[#D09229]"
  },
  {
    icon: CheckCircle,
    title: "ONGOING SUPPORT",
    description: "We maintain relationships with suppliers to ensure consistent quality and supply.",
    color: "bg-[#756E33]/20",
    iconColor: "text-[#756E33]"
  }
];

export default function HowItWorks() {
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

  return (
    <section id="how-it-works" className="py-20 bg-[#D9EAD3]">
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
              src="/Brand-Motif-Ahoden-New.svg"
              alt="Ahoden Brand Motif"
              className="h-24 w-auto"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-6 z-20">
            HOW IT WORKS
          </h2>

          {/* Section Description */}
          <p className="max-w-2xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light z-20">
            Our streamlined process ensures you get quality yellow maize when you need it, 
            with full transparency at every step.
          </p>
        </motion.div>

        {/* Horizontal Slider Container */}
        <div className="relative w-full overflow-x-auto scrollbar-hide py-10">
          {/* Left Scroll Indicator */}
          {showScrollIndicators && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm text-[#525252] font-nunito-light uppercase">Scroll</span>
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

          {/* Cards Container */}
          <div 
            ref={sliderRef}
            className="flex gap-0 pl-4 pr-4" 
            style={{ minHeight: '450px' }}
          >
          {steps.map((step, index) => (
            <motion.div
              key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
                className="flex-shrink-0 relative"
                style={{ width: '320px', marginRight: '-40px' }}
              >
                {/* Card Background */}
                <div className="relative h-80 w-full">
                  <img
                    src="/Brand-Motif-Card-Green-Organic.svg"
                    alt="Green Organic Card Motif"
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col justify-start items-center pt-[52px] px-6 z-20">
                {/* Icon */}
                    <div className="mb-4">
                      <div 
                        className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center"
                        style={{ boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.25)' }}
                      >
                        <step.icon className="w-6 h-6 text-[#007628]" />
                      </div>
                </div>

                {/* Title */}
                    <h3 
                      className="text-lg font-kannada-regular text-lime-400 mb-0.5 text-center z-20"
                      dangerouslySetInnerHTML={{ __html: step.title }}
                    />

                {/* Description */}
                    <p className="text-white text-center leading-relaxed font-nunito-light z-20">
                  {step.description}
                </p>
              </div>
                </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg text-[#525252] font-nunito-light mb-4">
            Ready to experience our streamlined sourcing process?
          </p>
          <button className="px-8 py-4 bg-[#F3EE33] text-[#222222] rounded-full hover:bg-[#D09229] transition-colors font-kannada-regular text-lg shadow-lg hover:shadow-xl">
            START SOURCING NOW
          </button>
        </motion.div>
      </div>
    </section>
  );
} 