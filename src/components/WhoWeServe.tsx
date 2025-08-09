'use client';

import { useState, useRef } from 'react';
import { Building2, Factory, Ship, Users, Globe, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhoWeServe() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeCustomer, setActiveCustomer] = useState(0);

  // Handle customer selection
  const handleCustomerSelect = (index: number) => {
    setActiveCustomer(index);
  };

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
    <section id="customer" className="relative w-full bg-[#D09229]/20 py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/Brand-Motif-Ahoden-Alt.svg"
            alt="Ahoden Brand Motif"
            className="h-20 w-auto mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-kannada-bold text-[#222222] mb-6">WHO WE SERVE</h2>
          <p className="text-xl text-[#525252] max-w-2xl text-center leading-relaxed font-nunito-light">
            We work with a diverse range of businesses in the agricultural value chain,
            providing them with high-quality yellow maize that meets their specific needs.
          </p>
        </div>

        {/* Cards Container - Full Width */}
        <div className="relative w-full">


          {/* Slider Container - Centered with proper spacing */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-0 py-6 pb-12 px-8 mx-auto max-w-6xl"
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

        {/* Simple Pagination Dots - Clean and Modern */}
        <div className="flex justify-center space-x-1 -mt-2">
          {customers.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleCustomerSelect(index)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group transition-all duration-300 cursor-pointer"
              aria-label={`Go to customer ${index + 1}`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCustomer === index 
                  ? 'bg-[#222222] shadow-md' 
                  : 'bg-[#F3EE33] hover:bg-[#F3EE33]/80'
              }`}></div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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