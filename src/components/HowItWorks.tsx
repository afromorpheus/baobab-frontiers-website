'use client';

import { useState, useRef } from 'react';
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
  const [activeStep, setActiveStep] = useState(0);

  // Handle step selection
  const handleStepSelect = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section id="how-it-works" className="py-12 bg-[#D9EAD3]">
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
              src="/Brand-Motif-Asanka-Alt.svg"
              alt="Asanka Brand Motif"
              className="h-24 w-auto"
            />
          </motion.div>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-4 z-20">
            HOW IT WORKS
          </h2>

          {/* Section Description */}
          <p className="max-w-2xl mx-auto text-xl text-[#525252] leading-relaxed font-nunito-light z-20">
            Our streamlined process ensures you get quality yellow maize when you need it, 
            with full transparency at every step.
          </p>
        </motion.div>

        {/* Horizontal Slider Container */}
        <div className="relative w-full overflow-x-auto scrollbar-hide py-6">
          {/* Cards Container - Centered with proper spacing */}
          <div 
            ref={sliderRef}
            className="flex gap-0 px-8 mx-auto max-w-6xl relative" 
            style={{ minHeight: '380px' }}
          >


            {/* Spacer for 32px before first card */}
            <div className="flex-shrink-0 w-8"></div>

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
                <div className="relative h-72 w-full">
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

        {/* Simple Pagination Dots - Clean and Modern */}
        <div className="flex justify-center space-x-3 -mt-8">
          {steps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleStepSelect(index)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group transition-all duration-300 cursor-pointer"
              aria-label={`Go to step ${index + 1}`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-[#007628] shadow-md' 
                  : 'bg-[#A3FF95] hover:bg-[#876E19]'
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